import flatMap from 'lodash/flatMap'
import chalk from 'chalk'
import VariableCollection from './variable-collection'
import {SassMap} from './scss'

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

  public validate(): {isValid: boolean; errors: string[]} {
    const errors = []

    // Ensure that every mode in this collection has the same variables defined
    const missingVarsPerMode = this.getMissingVarsPerMode()
    if (missingVarsPerMode.length > 0) {
      errors.push(`\n> The following variables are missing in one or more modes:\n`)
      for (const {modes, variableName} of missingVarsPerMode) {
        const msg = chalk`* Variable {bold.red ${variableName}} is missing in modes: ${modes
          .map(mode => chalk.bold.bgBlack.white(mode.name))
          .join(', ')}`
        errors.push(msg)
      }
    }

    // Ensure that all variables variables are defined
    const undefinedVars = this.getUndefinedVars()
    if (undefinedVars.length > 0) {
      errors.push(`\n> The following variables are undefined:\n`)

      for (const {from, mode} of undefinedVars) {
        const msg = chalk`* Variable {bold.bgBlack.white ${from}} in mode {bold.bgBlack.white ${mode.name}} is {bold.red undefined}`
        errors.push(msg)
      }

      errors.push(`Check to make sure variable references do not create an infinite loop.`)
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

  private getMissingVarsPerMode(): {modes: VariableCollection[]; variableName: string}[] {
    if (this.modes.size === 1) {
      return []
    }

    const result: {modes: VariableCollection[]; variableName: string}[] = []
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

  private getUndefinedVars(): {mode: VariableCollection; from: string}[] {
    const result: {mode: VariableCollection; from: string}[] = []

    for (const [_name, mode] of this.modes) {
      const undefinedVars = mode.flattened().filter(v => !v.value)
      for (const v of undefinedVars) {
        result.push({mode, from: v.name})
      }
    }

    return result
  }
}
