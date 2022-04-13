import {merge} from '../../../src/utils'
import dark_colorblind from './dark_colorblind'

const scale = {
  black: '#010409',
  white: '#ffffff',
  gray: ['#f0f6fc', '#c9d1d9', '#b1bac4', '#8b949e', '#6e7681', '#484f58', '#30363d', '#21262d', '#161b22', '#0d1117'],
  blue: ['#cae8ff', '#a5d6ff', '#79c0ff', '#58a6ff', '#388bfd', '#1f6feb', '#1158c7', '#0d419d', '#0c2d6b', '#051d4d'],
  green: ['#cae8ff', '#a5d6ff', '#79c0ff', '#58a6ff', '#388bfd', '#1f6feb', '#1158c7', '#0d419d', '#0c2d6b', '#051d4d'],
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
    '#ffdcd7',
    '#ffc1ba',
    '#ffa198',
    '#ff7b72',
    '#f85149',
    '#da3633',
    '#b62324',
    '#8e1519',
    '#67060c',
    '#490202'
  ],
  red: [
    '#ffdcd7',
    '#ffc1ba',
    '#ffa198',
    '#ff7b72',
    '#f85149',
    '#da3633',
    '#b62324',
    '#8e1519',
    '#67060c',
    '#490202'
  ],
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
  coral: ['#FFDDD2', '#FFC2B2', '#FFA28B', '#F78166', '#EA6045', '#CF462D', '#AC3220', '#872012', '#640D04', '#460701']
}

export default merge(dark_colorblind, {scale})
