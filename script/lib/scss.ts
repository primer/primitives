import {render as renderSass, Document} from 'sass-extract'
import { stringify } from 'querystring'

export type SassValue = SassMap | SassList | SassColor | SassNumber | SassString

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

export interface SassString {
  type: 'SassString'
  value: string
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

export async function parseScssFile(file: string): Promise<Document> {
  const { vars } = await renderSass({ file })
  return { vars }
}

export function collectVars(data: SassMap): Record<string, any> {
  let output: Record<string, any> = {}

  for (let key of Object.keys(data.value)) {
    if (key === 'grey') {
      // [MKT} SCSS seems to automatically change `gray` to `grey` during parsing ???
      data.value['gray'] = data.value['grey']
      delete data.value['grey']
      key = 'gray'
    }
    const val = data.value[key]
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
    const varName = [...prefix, key].join('-')
    if (Array.isArray(val) && !varName.includes("shadow")) {
      for (const i in val) {
        const arrayVarName = `${varName}-${i}`
        output[arrayVarName] = val[i]
      }
    } else if (Array.isArray(val)) {
      output[varName] = val.join(" ")
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
    case 'SassColor': return sassColorToString(val.value)
    case 'SassNumber': return `${val.value}${val.unit}`
    case 'SassString': return val.value
    default: throw new Error(`Cannot stringify Sass value type: ${val.type}`)
  }
}

function sassColorToString({r, g, b, a, hex}: SassColorValue): string {
  return a === 1 ? hex : `rgba(${r},${g},${b},${a})`
}
