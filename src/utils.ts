import * as color2k from 'color2k'
import deepmerge from 'deepmerge'
import _get from 'lodash/get'
import isFunction from 'lodash/isFunction'

export function resolveValue(value: string | ((obj: any) => string), obj: any): string {
  return isFunction(value) ? resolveValue(value(obj), obj) : value
}

export function merge(...objects: object[]) {
  return deepmerge.all(objects, {arrayMerge: (target, source) => source})
}

export function get(path: string) {
  return (obj: any) => _get(obj, path)
}

export function alpha(value: string | ((obj: any) => string), amount: number) {
  return (obj: any) => color2k.transparentize(resolveValue(value, obj), 1 - amount)
}

export function lighten(value: string | ((obj: any) => string), amount: number) {
  return (obj: any) => color2k.lighten(resolveValue(value, obj), amount)
}

export function darken(value: string | ((obj: any) => string), amount: number) {
  return (obj: any) => color2k.darken(resolveValue(value, obj), amount)
}
