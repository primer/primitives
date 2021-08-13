import flatten from 'flat'
import isString from 'lodash/isString'
import kebabCase from 'lodash/kebabCase'
import set from 'lodash/set'
import {resolveValue} from '../../src/utils'

type PathItem = string | number

export interface ModeVariable {
  name: string
  path: PathItem[]
  value: any
}

export function getFullName(prefix: string, path: PathItem[]) {
  return [prefix, ...path].map(value => (isString(value) ? kebabCase(value) : value)).join('-')
}

export default class VariableCollection {
  public readonly name: string
  public readonly prefix: string
  public readonly parent: string | null
  private data: Map<string, ModeVariable> = new Map()

  constructor(name: string, prefix: string, parent: string | null) {
    this.name = name
    this.prefix = prefix
    this.parent = parent
  }

  public addFromObject(data: Record<string, unknown>) {
    const flattened: Record<string, unknown> = flatten(data)

    for (const [key, value] of Object.entries(flattened)) {
      const path = key.split('.')
      this.add(path, value)
    }
  }

  public add(path: PathItem[], value: any) {
    if (Array.isArray(value)) {
      for (const idx in value) {
        const newPath = [...path, idx]
        this.add(newPath, value[idx])
      }

      return
    }

    const fullName = getFullName(this.prefix, path)

    if (value === 'transparent') {
      value = 'rgba(0,0,0,0)'
    }

    const variable: ModeVariable = {name: fullName, path, value}

    this.data.set(fullName, variable)
  }

  public merge(other: VariableCollection) {
    for (const modeVar of other.flattened()) {
      if (!this.data.has(modeVar.name)) {
        this.add(modeVar.path, modeVar.value)
      }
    }
  }

  public flattened(): ReadonlyArray<ModeVariable> {
    const tree = this.unresolvedTree()
    return [...this.data.values()].map(variable => {
      return {
        ...variable,
        value: resolveValue(variable.value, tree)
      }
    })
  }

  public getByName(fullName: string): ModeVariable | undefined {
    return this.data.get(fullName)
  }

  public tree(): Readonly<Record<string, any>> {
    let output = {} as Record<string, any>

    const tree = this.unresolvedTree()
    for (const variable of this.data.values()) {
      const value = resolveValue(variable.value, tree)
      set(output, variable.path, value)
    }

    return output
  }

  public [Symbol.iterator]() {
    return this.flattened()[Symbol.iterator]()
  }

  private unresolvedTree(): Readonly<Record<string, any>> {
    let output = {} as Record<string, any>

    for (const variable of this.data.values()) {
      set(output, variable.path, variable.value)
    }

    return output
  }
}
