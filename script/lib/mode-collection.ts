import flatMap from "lodash/flatMap";
import chalk from "chalk";
import VariableCollection from "./variable-collection";
import { SassMap } from "./scss";

export default class ModeCollection {
  public readonly type: string
  public readonly prefix: string
  public readonly modes: Map<string, VariableCollection> = new Map()

  constructor(type: string, prefix: string) {
    this.type = type
    this.prefix = prefix
  }

  public addFromSassExports(name: string, data: SassMap) {
    let parent: string | null = null
    if (data.value.__parent) {
      parent = data.value.__parent.value as string
      delete data.value.__parent
    }
    const vars = new VariableCollection(name, this.prefix, parent)
    vars.addFromSassExports(data)
    this.add(name, vars)
  }

  public add(modeName: string, vars: VariableCollection) {
    this.modes.set(modeName, vars)
  }

  public validate(): {isValid: boolean, errors: string[]} {
    const errors = []

    // Ensure that every mode in this collection has the same variables defined
    const missingVarsPerMode = this.getMissingVarsPerMode()
    if (missingVarsPerMode.length > 0) {
      errors.push(`\n> The following variables are missing in one or more modes:\n`)
      for (const {modes, variableName} of missingVarsPerMode) {
        const msg = chalk`* Variable {bold.red ${variableName}} is missing in modes: ${modes.map(mode => chalk.bold.bgBlack.white(mode.name)).join(', ')}`
        errors.push(msg)
      }
    }

    // Ensure that any variables with late-binding to
    // other CSS variables defined inside the same file can be resolved
    const unresolvableBindings = this.getUnresolvableLateBindings()
    if (unresolvableBindings.length > 0) {
      errors.push(`\n> The following CSS variables were referenced as values but could not be resolved at build-time:\n`)
      for (const {ref, from, mode} of unresolvableBindings) {
        const msg = chalk`* Variable {bold.red var(--${ref})} referenced by {bold.bgBlack.white ${from}} in mode {bold.bgBlack.white ${mode.name}}`
        errors.push(msg)
      }
      errors.push(`Check to make sure CSS variable references do not create an infinite loop.`)
    }

    return {isValid: errors.length === 0, errors}
  }

  public [Symbol.iterator]() {
    return this.modes[Symbol.iterator]()
  }

  public finalize() {
    for (const key of this.modes.keys()) {
      const mode = this.modes.get(key)!
      if (mode.parent) {
        const parentMode = this.modes.get(mode.parent)!
        mode.merge(parentMode)
      }
    }
  }

  private getMissingVarsPerMode(): {modes: VariableCollection[], variableName: string}[] {
    if (this.modes.size === 1) {
      return []
    }

    const result: {modes: VariableCollection[], variableName: string}[] = []
    const modes = [...this.modes.values()]

    const allVarNames = flatMap(modes, mode => {
      return mode.flattened().map(v => v.name)
    })
    const uniqueVarNames = [...new Set(allVarNames)].sort()

    for (const v of uniqueVarNames.values()) {
      const missingModes = modes.filter(mode => mode.getByName(v) === undefined)
      if (missingModes.length > 0) {
        result.push({modes: missingModes, variableName: v})
      }
    }

    return result
  }

  private getUnresolvableLateBindings(): {mode: VariableCollection, from: string, ref: string}[] {
    const result: {mode: VariableCollection, from: string, ref: string}[] = []

    for (const [_name, mode] of this.modes) {
      const lateBindings = mode.flattened().filter(v => !!v.ref)
      for (const v of lateBindings) {
        if (!mode.resolveRef(v.ref!)) {
          result.push({mode, from: v.name, ref: v.ref!})
        }
      }
    }

    return result
  }
}
