import path from 'path'
import fs, { mkdir } from 'fs'
import {render as renderSass, Document} from 'sass-extract'
import mkdirp from 'mkdirp'

interface Mode {
  scale: Record<string, ScaleValue>
  functional: Record<string, string>
}

type ScaleValue = string | ReadonlyArray<string>

interface Color {
  r: number
  g: number
  b: number
  a: number
  hex: string
}

interface SassColor {
  type: "SassColor"
  value: Color
}

interface SassMap {
  type: "SassMap",
  value: Record<string, SassColor>
}

type SassItem = SassColor | SassMap


async function buildModes(): Promise<void> {
  const outDir = path.join(__dirname, "..", "dist", "modes")
  mkdirp(outDir)

  const modes = fs.readdirSync(path.join(__dirname, "..", "data", "modes"))
    .map(file => path.basename(file, ".scss"))

  for (const mode of modes) {
    const data = await parseMode(mode)
    const jsonData = JSON.stringify(data, null, "  ")
    const scssData = makeScssOutput(mode, data)

    fs.writeFileSync(path.join(outDir, `${mode}.json`), jsonData)
    fs.writeFileSync(path.join(outDir, `_${mode}.scss`), scssData)
  }
}

async function parseMode(mode: string): Promise<Mode> {
  const rendered = await renderSass({
    file: path.join(__dirname, "..", "data", "modes", `${mode}.scss`)
  })

  const scale = collectScale(rendered)
  const functional = collectFunctional(rendered)
  return { scale, functional }
}

function collectScale(doc: Document) {
  const result: Record<string, any> = {}
  const root = doc.vars.global['$scale'].value
  const colors = Object.keys(root)

  for (const color of colors) {
    const obj = root[color] as SassItem
    if (obj.type === "SassColor") {
      result[color] = getColorString(obj.value)
    } else if (obj.type === "SassMap") {
      result[color] = mapToArray(obj.value)
    }
  }

  return result
}

function collectFunctional(doc: Document) {
  const result: Record<string, any> = {}
  const root = doc.vars.global['$functional'].value
  const names = Object.keys(root)

  for (const name of names) {
    const obj = root[name] as SassColor
    result[name] = getColorString(obj.value)
  }

  return result
}

function getColorString({r, g, b, a, hex}: Color) {
  if (a === 1) {
    return hex
  } else {
    return `rgba(${r},${g},${b},${a})`
  }
}

function mapToArray(map: Record<string, SassColor>) {
  const values = Object.values(map)
  return values.map(v => getColorString(v.value))
}

function makeScssOutput(modeName: string, data: Mode): string {
  let output = ""

  for (const colorName of Object.keys(data.scale)) {
    const value = data.scale[colorName]
    if (typeof value === "string") {
      output += `  --scale-${colorName}: ${value};\n`
    } else {
      for (const idx in value) {
        const color = value[idx]
        output += `  --scale-${colorName}-${idx}00: ${color};\n`
      }
    }
    output += "\n"
  }

  output += "\n"

  for (const colorName of Object.keys(data.functional)) {
    const value = data.functional[colorName]
    output += `  --${colorName}: ${value};\n`
  }

  return `[data-color-mode="${modeName}"] {\n${output}}\n`
}

if (require.main === module) {
  buildModes()
}
