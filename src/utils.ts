import {lighten as _lighten, transparentize, mix as _mix, darken as _darken, desaturate as _desaturate} from 'color2k'
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

export function alpha(value: Value, amount: number) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (obj: any) => transparentize(resolveValue(value, obj), 1 - amount).replace(/ /g, '')
}

export function lighten(value: Value, amount: number) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (obj: any) => _lighten(resolveValue(value, obj), amount).replace(/ /g, '')
}

export function darken(value: Value, amount: number) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (obj: any) => _darken(resolveValue(value, obj), amount).replace(/ /g, '')
}

export function mix(color1: Value, color2: Value, weight = 0.5) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (obj: any) => _mix(resolveValue(color1, obj), resolveValue(color2, obj), weight).replace(/ /g, '')
}

export function desaturate(value: Value, amount: number) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (obj: any) => _desaturate(resolveValue(value, obj), amount).replace(/ /g, '')
}
