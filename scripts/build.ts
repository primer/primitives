import camelcaseKeys from 'camelcase-keys'
import fs from 'fs'
import {mkdirp} from 'mkdirp'
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
const removedDir = path.join(outDir, 'removed')

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

  writeReplacements('deprecated.json', deprecatedDir, collection, validateDeprecatedVar)
  writeReplacements('removed.json', removedDir, collection, validateRemovedVar)
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

/**
 * Validates a deprecated variable.
 * @returns Array of error messages. If the returned array is empty, the variable is valid.
 */
function validateDeprecatedVar(variable: string, collection: ModeCollection, inputFile: string) {
  const errors = []

  // Assert that deprecated variable exists
  if (!existsInCollection(collection, variable)) {
    errors.push(`Cannot deprecate undefined variable \x1b[1;31m"${variable}"\x1b[0m in \x1b[1;37m${inputFile}\x1b[0m`)
  }

  return errors
}

/**
 * Validates a removed variable.
 * @returns Array of error messages. If the returned array is empty, the variable is valid.
 */
function validateRemovedVar(variable: string, collection: ModeCollection, inputFile: string) {
  const errors = []

  // Assert that removed variable doesn't exist
  if (existsInCollection(collection, variable)) {
    errors.push(
      `Variable \x1b[1;31m"${variable}"\x1b[0m is marked as removed in \x1b[1;37m${inputFile}\x1b[0m but is still defined`,
    )
  }

  return errors
}

async function writeReplacements(
  inputFilename: string,
  outputDir: string,
  collection: ModeCollection,
  // Function to validate a variable (e.g. deprecated variable or removed variable).
  // Returns an array of error messages. If the returned array is empty, the variable is valid.
  validateVar: (variable: string, collection: ModeCollection, inputFile: string) => any[],
) {
  const inputFile = path.join(dataDir, collection.type, inputFilename)

  // Do nothing if deprecated file doesn't exist
  if (!fs.existsSync(inputFile)) {
    return
  }

  try {
    // Parse input file
    const replacementMap = JSON.parse(fs.readFileSync(inputFile, 'utf8'))

    // Validations
    const errors = []
    for (const [original, replacement] of Object.entries(replacementMap)) {
      errors.push(...validateVar(original, collection, inputFile))

      // We expect `replacement` to be a variable name, an array of variable names, or null
      forEachReplacementVar(replacement, replacementVar => {
        // Assert that replacement variable is a string
        if (typeof replacementVar !== 'string') {
          errors.push(
            `Cannot replace "${original}" with invalid variable {bold.red ${JSON.stringify(
              replacementVar,
            )}} in {bold ${inputFile}}`,
          )
          return
        }

        // Assert that replacement variable exists
        if (!existsInCollection(collection, replacementVar)) {
          errors.push(
            `Cannot replace "${original}" with undefined variable {bold.red ${JSON.stringify(
              replacementVar,
            )}} in {bold ${inputFile}}`,
          )
          return
        }

        // Assert that replacement variable is not deprecated
        if (Object.keys(replacementMap).includes(replacementVar)) {
          errors.push(
            `Cannot replace "${original}" with deprecated variable {bold.red ${JSON.stringify(
              replacementVar,
            )}} in {bold ${inputFile}}`,
          )
          return
        }
      })
    }

    if (errors.length === 0) {
      // Write replacements
      await mkdirp(outputDir)
      fs.writeFileSync(path.join(outputDir, `${collection.type}.json`), JSON.stringify(replacementMap, null, '  '))
    } else {
      throw new Error(errors.join('\n'))
    }
  } catch (error) {
    if (error instanceof TypeError) {
      logError(error.message)
    }

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
  console.error(`\x1b[0;31m\n===============================================\x1b`)
  console.error(`\x1b[0;31m[FATAL]\x1b[0m The build failed due to the following errors:`)
  console.error(error)
  console.error(`\x1b[0;31m===============================================\n\x1b`)
}
