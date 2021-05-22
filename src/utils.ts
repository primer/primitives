import _get from 'lodash/get'
import * as color2k from 'color2k'
import isFunction from 'lodash/isFunction'

function resolve(value: string | ((obj: any) => string), obj: any) {
  return isFunction(value) ? value(obj) : value
}

export function get(path: string) {
  return (obj: any) => _get(obj, path)
}

export function alpha(value: string | ((obj: any) => string), amount: number) {
  return (obj: any) => color2k.transparentize(resolve(value, obj), 1 - amount)
}

export function lighten(value: string | ((obj: any) => string), amount: number) {
  return (obj: any) => color2k.lighten(resolve(value, obj), amount)
}

export function darken(value: string | ((obj: any) => string), amount: number) {
  return (obj: any) => color2k.darken(resolve(value, obj), amount)
}
