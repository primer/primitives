import {render as renderSass, Document} from 'sass-extract'

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

export function stringifySassPrimitive(val: SassValue): string {
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

export function renderSassList(val: SassList): string | string[] {
  // A homogeneous Sass list means the list is probably a list of values,
  // e.g. a list of colors in a scale. Otherwise, it is likely a list
  // of CSS primitives, like `inset 0 1px 0 black`, and should be
  // joined into a single string value.
  if (isSassListHomogeneous(val)) {
    return val.value.map(stringifySassPrimitive)
  } else {
    return val.value.map(stringifySassPrimitive).join(" ")
  }
}

export function isSassListHomogeneous(val: SassList) {
  const firstType = val.value[0].type
  return val.value.every(item => item.type === firstType)
}
