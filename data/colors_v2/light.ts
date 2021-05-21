import merge from 'deepmerge'
import deprecatedVars from './deprecated_vars'

const vars = {
  fg: {
    default: '#000',
    muted: '#333'
  }
}

export default merge(deprecatedVars, vars)
