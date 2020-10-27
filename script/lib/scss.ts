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

export interface ModeVariable {
  name: string
  path: string[]
  value: any
}

type PendingVar = {name: string, fullName: string, context: Record<string, any>}

export class VariableCollection {
  private _type: string
  private _prefix: string[]
  private _pending: Map<string, PendingVar[]> = new Map()
  private _data: Record<string, any> = {}
  private _flat: ModeVariable[] = []

  constructor(type: string, prefix: string[] = []) {
    this._type = type
    this._prefix = prefix
  }

  public add(name: string, value: any) {
    const fullPath = [this._type, ...this._prefix, name]
    const fullName = fullPath.join('-')

    this._data[name] = value

    // If the value is a CSS variable, we need to resolve it to
    // its value for non-CSS clients. If we've already set it, just
    // get it from the flat cache. Otherwise set a pending flag
    // and wait until we see it.
    if (typeof value === 'string' && value.startsWith('var(--')) {
      const [_, match] = value.match(/var\(--(.*)\)/)!
      const found = this._flat.find(item => item.name === match)
      if (found) {
        this._data[name] = found.value
      } else {
        this.addPending(name, fullName, this._data, match)
      }
    }

    if (value instanceof VariableCollection) {
      this.mergeChildCollection(value)
    } else if (Array.isArray(value)) {
      for (const i in value) {
        const item = {name: `${fullName}-${i}`, path: [...fullPath, i], value: value[i]}
        this._flat.push(item)
        this.resolvePending(item)
      }
    } else {
      const item = {name: fullName, path: fullPath, value}
      this._flat.push(item)
      this.resolvePending(item)
    }
  }

  public flattened(): ReadonlyArray<ModeVariable> {
    return this._flat
  }

  public tree(): Readonly<Record<string, any>> {
    let output = {} as Record<string, any>

    for (const key of Object.keys(this._data)) {
      const val = this._data[key]
      if (this._data[key] instanceof VariableCollection) {
        output[key] = val.tree()
      } else {
        output[key] = val
      }
    }

    return output
  }

  public get pending() {
    return this._pending
  }

  public [Symbol.iterator]() {
    return this.flattened()[Symbol.iterator]()
  }

  private mergeChildCollection(other: VariableCollection) {
    this.mergePending(other.pending)
    this._flat = this._flat.concat(other.flattened())
    this._flat.forEach(this.resolvePending.bind(this))
  }

  private mergePending(otherPending: Map<string, PendingVar[]>) {
    for (const [key, arr] of otherPending.entries()) {
      for (const item of arr) {
        this.addPending(item.name, item.fullName, item.context, key)
      }
    }
  }

  private addPending(name: string, fullName: string, context: Record<string, any>, search: string) {
    const val = {name, fullName, context}

    if (this._pending.has(search)) {
      const arr = this._pending.get(search)!
      arr.push(val)
    } else {
      this._pending.set(search, [val])
    }
  }

  private resolvePending(variable: ModeVariable) {
    const item = this._pending.get(variable.name)
    if (item) {
      const val = variable.value
      item.forEach(({name, fullName, context}) => {
        context[name] = val
        const flatItem = this._flat.find(item => item.name === fullName)
        if (flatItem) {
          flatItem.value = val
        }
      })

      this._pending.delete(variable.name)
    }
  }
}

export async function parseScssFile(file: string): Promise<Document> {
  const { vars } = await renderSass({ file })
  return { vars }
}

export function collectVars(type: string, data: SassMap, prefix: string[] = []): VariableCollection {
  let output = new VariableCollection(type, prefix)

  for (let key of Object.keys(data.value)) {
    if (key === 'grey') {
      // [MKT] SCSS seems to automatically change `gray` to `grey` during parsing ???
      data.value['gray'] = data.value['grey']
      delete data.value['grey']
      key = 'gray'
    }
    const val = data.value[key]
    if (val.type === 'SassColor' || val.type === 'SassNumber' || val.type === 'SassString') {
      output.add(key, stringifySassPrimitive(val))
    } else if (val.type === 'SassList' && isSassListHomogeneous(val)) {
      output.add(key, val.value.map(stringifySassPrimitive))
    } else if (val.type === 'SassList') {
      output.add(key, val.value.map(stringifySassPrimitive).join(" "))
    } else if (val.type === 'SassMap') {
      const obj = collectVars(type, val, [...prefix, key])
      output.add(key, obj)
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

function isSassListHomogeneous(val: SassList) {
  const firstType = val.value[0].type

  return val.value.every(item => item.type === firstType)
}
