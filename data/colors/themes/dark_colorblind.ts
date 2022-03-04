import {alpha, get, merge} from '../../../src/utils'
import dark from './dark'

const scale = {
  black: '#010409',
  white: '#ffffff',
  gray: ['#f0f6fc', '#c9d1d9', '#b1bac4', '#8b949e', '#6e7681', '#484f58', '#30363d', '#21262d', '#161b22', '#0d1117'],
  blue: ['#cae8ff', '#a5d6ff', '#79c0ff', '#58a6ff', '#388bfd', '#1f6feb', '#1158c7', '#0d419d', '#0c2d6b', '#051d4d'],
  green: ['#a0e8ff', '#83d4ff', '#66baff', '#42a0ff', '#1585fd', '#1d69e0', '#0f53bc', '#0b3c92', '#0a2861', '#041843'],
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
  red: ['#f0ec59', '#ecd334', '#e6b716', '#d69a00', '#c38000', '#a66900', '#865401', '#633e00', '#452f00', '#292100'],
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

const exceptions = {
  open: {
    fg: get('scale.orange.3'),
    emphasis: get('scale.orange.5'),
    muted: alpha(get('scale.orange.4'), 0.4),
    subtle: alpha(get('scale.orange.4'), 0.15)
  },
  closed: {
    fg: get('scale.gray.3'),
    emphasis: get('scale.gray.4'),
    muted: alpha(get('scale.gray.4'), 0.4),
    subtle: alpha(get('scale.gray.4'), 0.1)
  }
}

export default merge(dark, exceptions, {scale})
