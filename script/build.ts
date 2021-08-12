import camelcaseKeys from 'camelcase-keys'
import chalk from 'chalk'
import fs from 'fs'
import mkdirp from 'mkdirp'
import path from 'path'
import ModeCollection from './lib/mode-collection'
import VariableCollection, {getFullName} from './lib/variable-collection'

interface Skip {
  type: string
  name: string
}

let SKIP: Skip[] = (process.env['PRIMER_SKIP'] || '').split(',').map(skip => {
  const [type, name] = skip.split('/')
  return {type, name}
})

const dataDir = path.join(__dirname, '..', 'data')
const outDir = path.join(__dirname, '..', 'dist')

const scssDir = path.join(outDir, 'scss')
const tsDir = path.join(outDir, 'ts')
const jsonDir = path.join(outDir, 'json')
const deprecationsDir = path.join(outDir, 'deprecations')

const deprecationsFilename = 'deprecations.json'

async function build() {
  const modeTypes = fs.readdirSync(dataDir)

  for (const type of modeTypes) {
    const toSkip = SKIP.filter(skip => skip.type === type).map(skip => skip.name)
    let collection = await getModeCollectionForType(type, toSkip)

    const {isValid, errors} = collection.validate()
    if (!isValid) {
      logError(errors.join('\n'))
      process.exit(1)
    }

    await writeModeOutput(collection)
  }

  await writeMainTsIndex(modeTypes)
}

async function getModeCollectionForType(type: string, toSkip: string[]): Promise<ModeCollection> {
  let prefix = type
  const prefixFile = path.join(dataDir, type, 'prefix')
  if (fs.existsSync(prefixFile)) {
    prefix = fs.readFileSync(prefixFile, 'utf8').trim()
  }

  const collection = new ModeCollection(type, prefix)

  const indexFile = path.join(dataDir, type, 'index.ts')

  // TODO: log error if file doesn't exist
  if (fs.existsSync(indexFile)) {
    // TODO: check that modes is an object
    const {default: modes} = require(indexFile)

    for (const mode in modes) {
      if (toSkip.includes(mode)) {
        continue
      }

      const vars = new VariableCollection(mode, prefix, null)
      vars.addFromObject(modes[mode])
      collection.add(mode, vars)
    }
  }

  collection.finalize()
  return collection
}

async function writeModeOutput(collection: ModeCollection): Promise<void> {
  writeScssOutput(collection)
  writeTsOutput(collection)
  writeJsonOutput(collection)

  writeTsTypeIndex(collection)

  writeDeprecations(collection)
}

async function writeScssOutput(collection: ModeCollection): Promise<void> {
  for (const [_name, vars] of collection) {
    let output = `@mixin primer-${collection.type}-${vars.name} {\n`
    output += '  & {\n'
    for (const variable of vars) {
      output += `    --${variable.name}: ${variable.value};\n`
    }
    output += '  }\n}\n'

    const dir = path.join(scssDir, collection.type)
    await mkdirp(dir)
    fs.writeFileSync(path.join(dir, `_${vars.name}.scss`), output)
  }
}

async function writeTsOutput(collection: ModeCollection): Promise<void> {
  for (const [_name, vars] of collection) {
    let output = JSON.stringify(camelcaseKeys(vars.tree(), {deep: true}), null, '  ')
    output = `export default ${output}`

    const dir = path.join(tsDir, collection.type)
    await mkdirp(dir)
    fs.writeFileSync(path.join(dir, `${vars.name}.ts`), output)
  }
}

async function writeJsonOutput(collection: ModeCollection): Promise<void> {
  for (const [_name, vars] of collection) {
    let output = JSON.stringify(camelcaseKeys(vars.tree(), {deep: true}), null, '  ')

    const dir = path.join(jsonDir, collection.type)
    await mkdirp(dir)
    fs.writeFileSync(path.join(dir, `${vars.name}.json`), output)
  }
}

async function writeTsTypeIndex(collection: ModeCollection) {
  let output = ''
  const modules = [...collection.modes.keys()]
  for (const mod of modules) {
    output += `import ${mod} from './${mod}'\n`
  }
  output += `export default { ${modules.join(', ')} }`

  const dir = path.join(tsDir, collection.type)
  await mkdirp(dir)
  fs.writeFileSync(path.join(dir, `index.ts`), output)
}

async function writeMainTsIndex(types: string[]) {
  let output = ''
  for (const type of types) {
    output += `import ${type} from './${type}'\n`
  }
  output += `export default { ${types.join(', ')} }`

  const dir = path.join(tsDir)
  await mkdirp(dir)
  fs.writeFileSync(path.join(dir, `index.ts`), output)
}

if (require.main === module) {
  build()
    .then(() => console.log('✨ Built mode data 🎉'))
    .catch(err => console.error(err))
}

async function writeDeprecations(collection: ModeCollection) {
  const deprecationsFile = path.join(dataDir, collection.type, deprecationsFilename)

  // Do nothing if deprecations file doesn't exist
  if (!fs.existsSync(deprecationsFile)) {
    return
  }

  try {
    // Parse deprecations file
    const deprecations = JSON.parse(fs.readFileSync(deprecationsFile, 'utf8'))

    // Validate deprecations
    const errors = []
    for (const [deprecatedVar, replacement] of Object.entries(deprecations)) {
      // Assert that deprecated variable exists
      if (!existsInCollection(collection, deprecatedVar)) {
        errors.push(
          chalk`Cannot deprecate undefined variable {bold.red "${deprecatedVar}"} in {bold ${deprecationsFile}}`
        )
      }

      // Assert that replacement exists
      if (!validateReplacement(replacement, name => existsInCollection(collection, name))) {
        errors.push(
          chalk`Cannot replace {bold "${deprecatedVar}"} with undefined variable {bold.red "${replacement}"} in {bold ${deprecationsFile}}`
        )
      }

      // Assert that replacement is not deprecated
      if (!validateReplacement(replacement, name => !Object.keys(deprecations).includes(name))) {
        errors.push(
          chalk`Cannot replace {bold "${deprecatedVar}"} with deprecated variable {bold.red "${replacement}"} in {bold ${deprecationsFile}}`
        )
      }
    }

    if (errors.length === 0) {
      // Write deprecations
      await mkdirp(deprecationsDir)
      fs.writeFileSync(path.join(deprecationsDir, `${collection.type}.json`), JSON.stringify(deprecations, null, '  '))
    } else {
      throw new Error(errors.join('\n'))
    }
  } catch (error) {
    logError(error.message)
    process.exit(1)
  }
}

/** Checks if a variable exists in a collection. Assumes variable name uses dot notation (e.g. `text.primary`) */
function existsInCollection(collection: ModeCollection, name: string) {
  const varName = getFullName(collection.prefix, name.split('.'))
  return Array.from(collection.modes.values()).some(mode => Boolean(mode.getByName(varName)))
}

function validateReplacement(replacement: any, validateVar: (name: string) => boolean) {
  if (replacement === null) {
    return true
  }

  if (typeof replacement === 'string') {
    return validateVar(replacement)
  }

  if (Array.isArray(replacement)) {
    for (const item of replacement) {
      if (!validateVar(item)) {
        return false
      }
    }
    return true
  }

  return false
}

function logError(error: string) {
  console.error(chalk.red`\n===============================================`)
  console.error(chalk`{red [FATAL]} The build failed due to the following errors:`)
  console.error(error)
  console.error(chalk.red`===============================================\n`)
}
