import _get from 'lodash/get'

export const get = (path: string) => (obj: any) => _get(obj, path)
