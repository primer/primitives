import merge from 'deepmerge'
import deprecatedVars from './utils/deprecated_vars'

const vars = {
  fg: {
    default: '#fff',
    muted: '#ccc'
  }
}

export default merge(deprecatedVars, vars)
