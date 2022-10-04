import * as color2k from 'color2k'
import deepmerge from 'deepmerge'
import _get from 'lodash/get'
import isFunction from 'lodash/isFunction'

type Value = string | ((obj: any) => string)

export function resolveValue(value: Value, obj: any): string {
  return isFunction(value) ? resolveValue(value(obj), obj) : value
}

export function merge(...objects: object[]) {
  return deepmerge.all(objects, {arrayMerge: (target, source) => source})
}

export function get(path: string) {
  return (obj: any) => _get(obj, path)
}

export function alpha(value: Value, amount: number) {
  // TODO: revert before merge
  // return (obj: any) => color2k.transparentize(resolveValue(value, obj), 1 - amount).replace(/ /g, '')
  return (obj: any) => color2k.toHex(color2k.transparentize(resolveValue(value, obj), 1 - amount).replace(/ /g, ''))
}

export function lighten(value: Value, amount: number) {
  // TODO: revert before merge
  // return (obj: any) => color2k.lighten(resolveValue(value, obj), amount).replace(/ /g, '')
  return (obj: any) => color2k.toHex(color2k.lighten(resolveValue(value, obj), amount).replace(/ /g, ''))
}

export function darken(value: Value, amount: number) {
  // TODO: revert before merge
  // return (obj: any) => color2k.darken(resolveValue(value, obj), amount).replace(/ /g, '')
  return (obj: any) => color2k.toHex(color2k.darken(resolveValue(value, obj), amount).replace(/ /g, ''))
}

export function mix(color1: Value, color2: Value, weight: number = 0.5) {
  return (obj: any) => color2k.mix(resolveValue(color1, obj), resolveValue(color2, obj), weight).replace(/ /g, '')
}

export function desaturate(value: Value, amount: number) {
  return (obj: any) => color2k.desaturate(resolveValue(value, obj), amount).replace(/ /g, '')
}
