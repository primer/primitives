import {lighten as _lighten, transparentize, darken as _darken} from 'color2k'
import deepmerge from 'deepmerge'
import _get from 'lodash/get'
import isFunction from 'lodash/isFunction'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Value = string | ((obj: any) => string)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function resolveValue(value: Value, obj: any): string {
  return isFunction(value) ? resolveValue(value(obj), obj) : value
}

export function merge(...objects: object[]) {
  return deepmerge.all(objects, {arrayMerge: (target, source) => source})
}

export function get(path: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (obj: any) => _get(obj, path)
}

// Instead of value being #hex, the value is now var(--v, #hex)
function getFallbackValueFromVar(value: string) {
  if (!value.includes('var(--')) return value // not required

  const fallbackHexCodeRegex = /var\(--[a-zA-Z0-9-]+,\s*(#(?:[0-9a-fA-F]{3}){1,2})\)/
  const fallbackRgbaCodeRegex = /var\(--[a-zA-Z0-9-]+,\s*(rgba\((\s*\d{1,3}\s*,){3}\s*(?:\d*\.?\d+|\.\d+)\s*\))/

  const colorString = [fallbackHexCodeRegex, fallbackRgbaCodeRegex].map(regExp => {
    const matches = value.match(regExp)
    if (matches) return matches[1]
  })

  return colorString[0] || colorString[1] || value
}

export function alpha(value: Value, amount: number) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (obj: any) => {
    const resolvedValue = resolveValue(value, obj)
    // Instead of value being #hex, the value is now var(--v, #hex)

    const hexColorValue = getFallbackValueFromVar(resolvedValue)
    const hexColorValueWithTransparency = transparentize(hexColorValue, 1 - amount).replace(/ /g, '')
    return resolvedValue.replace(hexColorValue, hexColorValueWithTransparency)
  }
}

export function lighten(value: Value, amount: number) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (obj: any) => {
    const resolvedValue = resolveValue(value, obj)
    // Instead of value being #hex, the value is now var(--v, #hex)
    const hexColorValue = getFallbackValueFromVar(resolvedValue)
    const lightenedHexColorValue = _lighten(hexColorValue, amount).replace(/ /g, '')
    return resolvedValue.replace(hexColorValue, lightenedHexColorValue)
  }
}

export function darken(value: Value, amount: number) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (obj: any) => {
    const resolvedValue = resolveValue(value, obj)
    // Instead of value being #hex, the value is now var(--v, #hex)
    const hexColorValue = getFallbackValueFromVar(resolvedValue)
    const lightenedHexColorValue = _darken(hexColorValue, amount).replace(/ /g, '')
    return resolvedValue.replace(hexColorValue, lightenedHexColorValue)
  }
}
