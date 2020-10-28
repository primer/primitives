import fs from 'fs'
import path from 'path'
import mkdirp from 'mkdirp'
import camelcaseKeys from 'camelcase-keys'
import { Document } from 'sass-extract'
import chalk from 'chalk'
import { parseScssFile  } from './lib/scss'
import ModeCollection from './lib/mode-collection'

interface Skip {
  type: string
  name: string
}

let SKIP: Skip[] = (process.env['PRIMER_SKIP'] || "")
  .split(',')
  .map(skip => {
    const [type, name] = skip.split('/')
    return {type, name}
  })

const dataDir = path.join(__dirname, "..", "data")
const outDir = path.join(__dirname, "..", "dist")

const scssDir = path.join(outDir, "scss")
const tsDir = path.join(outDir, "ts")
const jsonDir = path.join(outDir, "json")

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
      console.log("")
      process.exit(1)
    }

    await writeModeOutput(collection)
  }

  await writeMainTsIndex(modeTypes)
}

async function getModeCollectionForType(type: string, toSkip: string[]): Promise<ModeCollection> {
  const filenames = fs.readdirSync(path.join(dataDir, type))
    .map(file => path.join(dataDir, type, file))
    .filter(file => file.endsWith('.scss'))

  let prefix = type
  const prefixFile = path.join(dataDir, type, "prefix")
  if (fs.existsSync(prefixFile)) {
    prefix = fs.readFileSync(prefixFile, "utf8").trim()
  }

  const collection = new ModeCollection(type, prefix)

  const renderedScss: [string, Document][] = await Promise.all(filenames.map(async (file) => {
    const name = path.basename(file, ".scss")
    const rendered = await parseScssFile(file)

    return [name, rendered] as [string, Document]
  }))

  for (const [name, rendered] of renderedScss) {
    if (toSkip.includes(name)) {
      continue
    }

    collection.addFromSassExports(name, rendered.vars.global.$export)
  }

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
    output += "  & {\n"
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
    .then(() => console.log("✨ Built mode data 🎉"))
    .catch(err => console.error(err))
}
