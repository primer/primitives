import {render as renderSass, Document} from 'sass-extract'
import { stringify } from 'querystring'

export type SassValue = SassMap | SassList | SassColor | SassNumber

export interface SassColor {
  type: 'SassColor'
  value: SassColorValue
}

export interface SassMap {
  type: 'SassMap'
  value: SassMapValue
}

export interface SassList {
  type: 'SassList'
  value: SassValue[]
}

export interface SassNumber {
  type: 'SassNumber'
  value: number
  unit: string
}

export interface SassColorValue {
  r: number
  g: number
  b: number
  a: number
  hex: string
}

export interface SassMapValue {
  [key: string]: SassValue
}

export async function parseFile(file: string): Promise<Document> {
  const { vars } = await renderSass({ file })

  return { vars }
}

export function collectVars(data: SassMap): Record<string, any> {
  let output: Record<string, any> = {}

  for (const key of Object.keys(data.value)) {
    const val = data.value[key]
    // const varName = [...prefix, key].join('.')
    // TODO: needs to be totally flat or totally structured
    if (val.type === 'SassColor' || val.type === 'SassNumber') {
      output[key] = stringifySassPrimitive(val)
    } else if (val.type === 'SassList') {
      output[key] = val.value.map(stringifySassPrimitive)
    } else if (val.type === 'SassMap') {
      const obj = collectVars(val)
      output[key] = obj
    }
  }

  return output
}

export function flattenVars(data: Record<string, any>, prefix: string[] = []): Record<string, string> {
  let output: Record<string, any> = {}

  for (const key of Object.keys(data)) {
    const val = data[key]
    const varName = [...prefix, key].join('.')
    if (Array.isArray(val)) {
      for (const i in val) {
        const arrayVarName = `${varName}.${i}`
        output[arrayVarName] = val[i]
      }
    } else if (typeof val === 'object') {
      const obj = flattenVars(val, [...prefix, key])
      output = {...output, ...obj}
    } else {
      output[varName] = val
    }
  }

  return output
}

function stringifySassPrimitive(val: SassValue): string {
  switch (val.type) {
    case 'SassColor': return getColorString(val.value)
    case 'SassNumber': return `${val.value}${val.unit}`
    default: throw new Error(`Cannot stringify Sass value type: ${val.type}`)
  }
}

function getColorString({r, g, b, a, hex}: SassColorValue) {
  return a === 1 ? hex : `rgba(${r},${g},${b},${a})`
}
