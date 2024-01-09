import flatMap from 'lodash/flatMap'
import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'
import VariableCollection, {ModeVariable} from './variable-collection'

export default class ModeCollection {
  public readonly type: string
  public readonly prefix: string
  public readonly modes: Map<string, VariableCollection> = new Map()

  constructor(type: string, prefix: string) {
    this.type = type
    this.prefix = prefix
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
        const msg = `* Variable \x1b[1;31m${variableName}\x1b[0m is missing in modes: ${modes
          .map(mode => mode.name)
          .join(', ')}`
        errors.push(msg)
      }
    }

    // Ensure that all variables variables are defined
    const invalidVars = this.getInvalidVars()
    if (invalidVars.length > 0) {
      errors.push(`\n> The following variables are invalid:\n`)

      for (const {variable, mode} of invalidVars) {
        const msg = `* \x1b[1;31m${variable.value}\x1b[0m cannot be assigned to \x1b[1;37m${variable.name}\x1b[0m in mode \x1b[1;30;47m${mode.name}\x1b[0m `
        errors.push(msg)
      }

      errors.push(`\nCheck to make sure variable references do not create an infinite loop.`)
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

  private getInvalidVars(): {mode: VariableCollection; variable: ModeVariable}[] {
    const result: {mode: VariableCollection; variable: ModeVariable}[] = []

    for (const [_name, mode] of this.modes) {
      const invalidVars = mode.flattened().filter(v => !(isNumber(v.value) || isString(v.value)))
      for (const v of invalidVars) {
        result.push({mode, variable: v})
      }
    }

    return result
  }
}
