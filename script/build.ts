import fs from 'fs'
import path from 'path'
import mkdirp from 'mkdirp'
import camelcaseKeys from 'camelcase-keys'
import chalk from 'chalk'
import { parseScssFile, collectVars, VariableCollection, ModeVariable } from './lib/scss'

let SKIP: string[] = (process.env['PRIMER_SKIP'] || "").split(',')

function flatMap<T, R>(array: T[], iter: (value: T, index: number, arr: T[]) => R[]): R[] {
  var results: R[] = []

  array.forEach((value, index, list) => {
    var res = iter.call(null, value, index, list)
    if (Array.isArray(res)) {
      results.push.apply(results, res)
    } else if (res != null) {
      results.push(res)
    }
  })

  return results;
}

interface ModeData {
  type: string
  name: string
  vars: VariableCollection
  prefix: string
}

const dataDir = path.join(__dirname, "..", "data")
const outDir = path.join(__dirname, "..", "dist")

const scssDir = path.join(outDir, "scss")
const tsDir = path.join(outDir, "ts")
const jsonDir = path.join(outDir, "json")

async function build() {
  const modeTypes = fs.readdirSync(dataDir)

  for (const type of modeTypes) {
    let modes = await getModesForType(type)
    modes = modes.filter(mode => !SKIP.includes(`${mode.type}/${mode.name}`))

    const missingVars = getMissingVars(modes)
    if (missingVars.length > 0) {
      console.log(`\nInvalid modes for type '${type}'. The following variables are missing in one or more modes:\n`)
      missingVars.forEach(v => console.log(v))
      console.log("")
      process.exit(1)
    }

    for (const mode of modes) {
      const cssVarValues = mode.vars.flattened().filter(v => typeof v.value === 'string' && v.value.startsWith('var(--'))
      if (cssVarValues.length > 0) {
        const missingCssRefs = cssVarValues.map(v => ` - ${v.name} -> ${v.value}`).join('\n')
        console.log(`\nMode ${type}.${mode.name} has unresolved CSS variable references:\n${missingCssRefs}`)
        console.log('Check to make sure your CSS variable references do not form an infinite loop')
        process.exit(1)
      }
    }

    await writeModeOutput(type, modes)
  }

  await writeMainTsIndex(modeTypes)
}

async function getModesForType(type: string): Promise<ReadonlyArray<ModeData>> {
  const filenames = fs.readdirSync(path.join(dataDir, type))
    .map(file => path.join(dataDir, type, file))
    .filter(file => file.endsWith('.scss'))

  return Promise.all(filenames.map(async (file) => {
    const name = path.basename(file, ".scss")
    const rendered = await parseScssFile(file)
    let prefix = `${type}`
    const prefixFile = path.join(dataDir, type, "prefix")
    if (fs.existsSync(prefixFile)) {
      prefix = fs.readFileSync(prefixFile, "utf8").trim()
    }
    const vars = collectVars(prefix, rendered.vars.global.$export)
    return { type, name, vars, prefix }
  }))
}

function getMissingVars(modes: ReadonlyArray<ModeData>): Array<string> {
  if (modes.length === 1) {
    return []
  }

  const missingVars = []

  const allVarsPerMode = modes.reduce((acc, mode) => {
    const allVars = mode.vars.flattened()
    acc[mode.name] = allVars
    return acc
  }, {} as Record<string, ReadonlyArray<ModeVariable>>)

  const allVarNames = flatMap((modes as Array<ModeData>), mode => {
    return mode.vars.flattened().map(v => v.name)
  })
  const uniqueVarNames = [...new Set(allVarNames)].sort()

  for (const v of uniqueVarNames.values()) {
    const missingModes = modes.filter(mode => !(allVarsPerMode[mode.name].find(item => item.name === v))).map(mode => mode.name)
    if (missingModes.length > 0) {
      const msg = chalk`Variable {bold ${v}} is missing in modes: ${missingModes.map(str => chalk.bold(str)).join(', ')}`
      missingVars.push(msg)
    }
  }

  return missingVars
}

async function writeModeOutput(type: string, modes: ReadonlyArray<ModeData>): Promise<void> {
  for (const mode of modes) {
    writeScssOutput(mode)
    writeTsOutput(mode)
    writeJsonOutput(mode)
  }

  writeTsTypeIndex(type, modes.map(m => m.name))
}

async function writeScssOutput(mode: ModeData): Promise<void> {
  let output = `@mixin primer-${mode.type}-${mode.name} {\n`
  output += "  & {\n"
  for (const variable of mode.vars) {
    output += `    --${variable.name}: ${variable.value};\n`
  }
  output += '  }\n}\n'

  const dir = path.join(scssDir, mode.type)
  await mkdirp(dir)
  fs.writeFileSync(path.join(dir, `_${mode.name}.scss`), output)
}

async function writeTsOutput(mode: ModeData): Promise<void> {
  let output = JSON.stringify(camelcaseKeys(mode.vars.tree(), {deep: true}), null, '  ')
  output = `export default ${output}`

  const dir = path.join(tsDir, mode.type)
  await mkdirp(dir)
  fs.writeFileSync(path.join(dir, `${mode.name}.ts`), output)
}

async function writeJsonOutput(mode: ModeData): Promise<void> {
  let output = JSON.stringify(camelcaseKeys(mode.vars.tree(), {deep: true}), null, '  ')

  const dir = path.join(jsonDir, mode.type)
  await mkdirp(dir)
  fs.writeFileSync(path.join(dir, `${mode.name}.json`), output)
}

async function writeTsTypeIndex(type: string, modules: string[]) {
  let output = ''
  for (const mod of modules) {
    output += `import ${mod} from './${mod}'\n`
  }
  output += `export default { ${modules.join(', ')} }`

  const dir = path.join(tsDir, type)
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
    .then(() => console.log("Built mode data"))
    .catch(err => console.error(err))
}
