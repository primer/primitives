import {merge} from '../../../src/utils'
import darkComponentVars from '../vars/component_dark'
import darkDeprecatedVars from '../vars/deprecated_dark'
import darkGlobalVars from '../vars/global_dark'
import darkMarketingVars from '../vars/marketing_dark'
import darkAppVars from '../vars/app_dark'

const scale = {
  black: '#010409',
  white: '#ffffff',
  gray: ['#f0f6fc', '#c9d1d9', '#b1bac4', '#8b949e', '#6e7681', '#484f58', '#30363d', '#21262d', '#161b22', '#0d1117'],
  blue: ['#cae8ff', '#a5d6ff', '#79c0ff', '#58a6ff', '#388bfd', '#1f6feb', '#1158c7', '#0d419d', '#0c2d6b', '#051d4d'],
  green: ['#aff5b4', '#7ee787', '#56d364', '#3fb950', '#2ea043', '#238636', '#196c2e', '#0f5323', '#033a16', '#04260f'],
  yellow: [
    '#f8e3a1',
    '#f2cc60',
    '#e3b341',
    '#d29922',
    '#bb8009',
    '#9e6a03',
    '#845306',
    '#693e00',
    '#4b2900',
    '#341a00'
  ],
  orange: [
    '#ffdfb6',
    '#ffc680',
    '#ffa657',
    '#f0883e',
    '#db6d28',
    '#bd561d',
    '#9b4215',
    '#762d0a',
    '#5a1e02',
    '#3d1300'
  ],
  red: ['#ffdcd7', '#ffc1ba', '#ffa198', '#ff7b72', '#f85149', '#da3633', '#b62324', '#8e1519', '#67060c', '#490202'],
  purple: [
    '#eddeff',
    '#e2c5ff',
    '#d2a8ff',
    '#bc8cff',
    '#a371f7',
    '#8957e5',
    '#6e40c9',
    '#553098',
    '#3c1e70',
    '#271052'
  ],
  pink: ['#ffdaec', '#ffbedd', '#ff9bce', '#f778ba', '#db61a2', '#bf4b8a', '#9e3670', '#7d2457', '#5e103e', '#42062a'],
  coral: [
    '#FFDDD2',
    '#FFC2B2',
    '#FFA28B',
    '#F78166',
    '#EA6045',
    '#CF462D',
    '#AC3220',
    '#872012',
    '#640D04',
    '#460701'
  ]
}

// const exceptions = {
//   Please avoid adding exceptions to this base theme.
//   Otherwise the exceptions will also propagate to all other extended themes.
// }

export default merge(darkDeprecatedVars, darkAppVars, darkMarketingVars, darkComponentVars, darkGlobalVars, {scale})
