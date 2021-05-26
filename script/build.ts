import camelcaseKeys from 'camelcase-keys'
import chalk from 'chalk'
import fs from 'fs'
import mkdirp from 'mkdirp'
import path from 'path'
import ModeCollection from './lib/mode-collection'
import VariableCollection from './lib/variable-collection'

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

async function build() {
  const modeTypes = fs.readdirSync(dataDir)

  for (const type of modeTypes) {
    const toSkip = SKIP.filter(skip => skip.type === type).map(skip => skip.name)
    let collection = await getModeCollectionForType(type, toSkip)

    const {isValid, errors} = collection.validate()
    if (!isValid) {
      console.log(chalk.red`\n===============================================`)
      console.log(chalk`{red [FATAL]} The build failed due to the following errors:`)
      for (const err of errors) {
        console.log(err)
      }
      console.log(chalk.red`===============================================`)
      console.log('')
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
