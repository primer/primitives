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
const deprecatedDir = path.join(outDir, 'deprecated')

const deprecatedFilename = 'deprecated.json'

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

  writeDeprecated(collection)
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

async function writeDeprecated(collection: ModeCollection) {
  const deprecatedFile = path.join(dataDir, collection.type, deprecatedFilename)

  // Do nothing if deprecated file doesn't exist
  if (!fs.existsSync(deprecatedFile)) {
    return
  }

  try {
    // Parse deprecated file
    const deprecated = JSON.parse(fs.readFileSync(deprecatedFile, 'utf8'))

    // Validate deprecated
    const errors = []
    for (const [deprecatedVar, replacement] of Object.entries(deprecated)) {
      // Assert that deprecated variable exists
      if (!existsInCollection(collection, deprecatedVar)) {
        errors.push(
          chalk`Cannot deprecate undefined variable {bold.red "${deprecatedVar}"} in {bold ${deprecatedFile}}`
        )
      }

      // We expect `replacement` to be a variable name, an array of variable names, or null
      forEachReplacementVar(replacement, replacementVar => {
        // Assert that replacement variable is a string
        if (typeof replacementVar !== 'string') {
          errors.push(
            chalk`Cannot replace {bold "${deprecatedVar}"} with invalid variable {bold.red ${JSON.stringify(
              replacementVar
            )}} in {bold ${deprecatedFile}}`
          )
          return
        }

        // Assert that replacement variable exists
        if (!existsInCollection(collection, replacementVar)) {
          errors.push(
            chalk`Cannot replace {bold "${deprecatedVar}"} with undefined variable {bold.red ${JSON.stringify(
              replacementVar
            )}} in {bold ${deprecatedFile}}`
          )
          return
        }

        // Assert that replacement variable is not deprecated
        if (Object.keys(deprecated).includes(replacementVar)) {
          errors.push(
            chalk`Cannot replace {bold "${deprecatedVar}"} with deprecated variable {bold.red ${JSON.stringify(
              replacementVar
            )}} in {bold ${deprecatedFile}}`
          )
          return
        }
      })
    }

    if (errors.length === 0) {
      // Write deprecated
      await mkdirp(deprecatedDir)
      fs.writeFileSync(path.join(deprecatedDir, `${collection.type}.json`), JSON.stringify(deprecated, null, '  '))
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

function forEachReplacementVar(replacement: any, fn: (replacementVar: any) => void) {
  if (replacement === null) {
    return
  }

  if (Array.isArray(replacement)) {
    for (const replacementVar of replacement) {
      fn(replacementVar)
    }
  } else {
    fn(replacement)
  }
}

function logError(error: string) {
  console.error(chalk.red`\n===============================================`)
  console.error(chalk`{red [FATAL]} The build failed due to the following errors:`)
  console.error(error)
  console.error(chalk.red`===============================================\n`)
}
