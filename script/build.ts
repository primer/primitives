import fs from 'fs'
import path from 'path'
import mkdirp from 'mkdirp'
import { areObjectsSameShape } from 'deep-shape-equals'
import camelcaseKeys from 'camelcase-keys'
import chalk from 'chalk'
import { parseScssFile, collectVars, flattenVars } from './lib/scss'

let SKIP: string[] = (process.env['PRIMER_SKIP'] || "").split(',')

interface ModeData {
  type: string
  name: string
  vars: Record<string, any>
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

    if (!verifyModes(modes)) {
      console.log(`Invalid modes for type '${type}'. The following variables are missing in one or more modes:`)
      printVarList(modes)
      process.exit(1)
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
    const vars = collectVars(rendered.vars.global.$export)
    return { type, name, vars }
  }))
}

function verifyModes(modes: ReadonlyArray<ModeData>): boolean {
  if (modes.length === 1) {
    return true
  }

  const vars = modes.map(m => m.vars)
  const [first, ...rest] = vars

  return rest.every(v => areObjectsSameShape([first, v]))
}

function printVarList(modes: ReadonlyArray<ModeData>): void {
  const allVarsPerMode = modes.reduce((acc, mode) => {
    const allVars = flattenVars(mode.vars)
    acc[mode.name] = allVars
    return acc
  }, {} as Record<string, Record<string, string>>)

  const allVarNames = modes.flatMap(mode => {
    return Object.keys(flattenVars(mode.vars))
  })
  const uniqueVarNames = [...new Set(allVarNames)].sort()

  for (const v of uniqueVarNames.values()) {
    const missingModes = modes.filter(mode => !(allVarsPerMode[mode.name][v])).map(mode => mode.name)
    if (missingModes.length > 0) {
      console.log(
        chalk`Variable {bold ${v}} is missing in modes: ${missingModes.map(str => chalk.bold(str)).join(', ')}`
      )
    }
  }
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
  const vars = flattenVars(mode.vars)

  let output = `@mixin primer-${mode.type}-${mode.name}($sel) {\n`
  output += "  #{$sel} {\n"
  for (const variable of Object.keys(vars)) {
    const value = vars[variable]
    output += `    --${variable}: ${value};\n`
  }
  output += '  }\n}\n'

  const dir = path.join(scssDir, mode.type)
  await mkdirp(dir)
  fs.writeFileSync(path.join(dir, `_${mode.name}.scss`), output)
}

async function writeTsOutput(mode: ModeData): Promise<void> {
  let output = JSON.stringify(camelcaseKeys(mode.vars, {deep: true}), null, '  ')
  output = `export default ${output}`

  const dir = path.join(tsDir, mode.type)
  await mkdirp(dir)
  fs.writeFileSync(path.join(dir, `${mode.name}.ts`), output)
}

async function writeJsonOutput(mode: ModeData): Promise<void> {
  let output = JSON.stringify(camelcaseKeys(mode.vars, {deep: true}), null, '  ')

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
