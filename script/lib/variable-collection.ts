import set from 'lodash/set'
import chalk from 'chalk'
import { SassMap, stringifySassPrimitive, renderSassList } from "./scss"

function exhaustiveCheck(anything: never) {}

type PathItem = string | number

export interface ModeVariable {
  name: string
  path: PathItem[]
  value: any
  ref: string | null
}

const CSS_VAR_REGEX = /var\(--(.*)\)/

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

  public addFromSassExports(data: SassMap) {
    this.iterateVarsFromSassExports(data, (path: PathItem[], value: any) => {
      this.add(path, value)
    })
  }

  private iterateVarsFromSassExports(data: SassMap, callback: (path: PathItem[], value: any) => void, path: string[] = []) {
    for (let key of Object.keys(data.value)) {
      // [MKT] Numeric keys for Sass maps are not supported due to
      // lookup semantics in non-CSS projects (like Primer React)
      if (!isNaN(Number(key))) {
        console.log(chalk`{bold.red [FATAL]} Map keys cannot be numeric; found numeric key {bold.red ${key}} in ${path.join('-')}-${key} in mode ${this.name}`)
        process.exit(1)
      }

      if (key === 'grey') {
        // [MKT] The Sass parser seems to automatically change `gray` to `grey` during parsing???
        // Thanks Sass, but we'll keep our original spelling.
        data.value['gray'] = data.value['grey']
        delete data.value['grey']
        key = 'gray'
      }

      const newPath = [...path, key]
      const val = data.value[key]
      switch (val.type) {
        case 'SassColor':
        case 'SassNumber':
        case 'SassString':
          callback(newPath, stringifySassPrimitive(val))
          break
        case 'SassList':
          callback(newPath, renderSassList(val))
          break
        case 'SassMap':
          this.iterateVarsFromSassExports(val, callback, newPath)
          break
        default:
          exhaustiveCheck(val)
      }
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

    const fullName = [this.prefix, ...path].join('-')
    const variable: ModeVariable = {name: fullName, path, value, ref: null}

    // If the value is a CSS variable, we need to set a ref
    // so that it gets lazy-evaluated during validation and compilation.
    if (typeof value === 'string' && value.match(CSS_VAR_REGEX)) {
      const [_, needle] = value.match(CSS_VAR_REGEX)!
      variable.ref = needle!
    }

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
    return [...this.data.values()].map((variable) => {
      return {
        ...variable,
        value: variable.ref ? this.resolveRef(variable.ref) : variable.value
      }
    })
  }

  public getByName(fullName: string): ModeVariable | undefined {
    return this.data.get(fullName)
  }

  public resolveRef(fullName: string, checked = new Set<string>()): any {
    // Prevent blowing the stack from reference loops
    if (checked.has(fullName)) {
      return undefined
    }
    checked.add(fullName)

    const mappedVariable = this.data.get(fullName)

    if (!mappedVariable) {
      return undefined
    }

    if (mappedVariable.ref) {
      return this.resolveRef(mappedVariable.ref, checked)
    } else {
      return mappedVariable.value
    }
  }

  public tree(): Readonly<Record<string, any>> {
    let output = {} as Record<string, any>

    for (const variable of this.data.values()) {
      const value = variable.ref ? this.resolveRef(variable.ref) : variable.value
      set(output, variable.path, value)
    }

    return output
  }

  public [Symbol.iterator]() {
    return this.flattened()[Symbol.iterator]()
  }
}
