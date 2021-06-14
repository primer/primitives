import {alpha, get, merge} from '../../../src/utils'
import dark from './dark'

const scale = {
  black: '#010409',
  white: '#ffffff',
  gray: [
    '#ffffff',
    '#f0f3f6',
    '#d9dee3',
    '#bdc4cc',
    '#9ea7b3',
    '#7a828e',
    '#525964',
    '#272b33',
    '#272b33',
    '#0a0c10'
  ],
  blue: [
    '#caeaff',
    '#addcff',
    '#91cbff',
    '#71b7ff',
    '#409eff',
    '#409eff',
    '#318bf8',
    '#2672f3',
    '#1e60d5',
    '#194fb1'
  ],
  green: [
    '#adf7b2',
    '#72f07e',
    '#4ae15e',
    '#26cd41',
    '#00b427',
    '#00b427',
    '#01a227',
    '#068c25',
    '#0c7725',
    '#0d6221'
  ],
  yellow: [
    '#fbe59e',
    '#fbd669',
    '#f7c843',
    '#f0b72f',
    '#e09b13',
    '#e09b13',
    '#c88508',
    '#ae7104',
    '#945d02',
    '#7b4900'
  ],
  orange: [
    '#ffe1b4',
    '#ffcf86',
    '#ffb757',
    '#fe9a2d',
    '#e7811d',
    '#e7811d',
    '#d57014',
    '#bf5e0a',
    '#a74c00',
    '#8f3c00'
  ],
  red: [
    '#ffdedb',
    '#ffc9c7',
    '#ffb1af',
    '#ff9492',
    '#ff6a69',
    '#ff6a69',
    '#ff4445',
    '#e82a2f',
    '#cc1421',
    '#ad0116'
  ],
  purple: [
    '#f0dfff',
    '#e6ccff',
    '#dbb7ff',
    '#cb9eff',
    '#b780ff',
    '#b87fff',
    '#a66bff',
    '#954ffd',
    '#8031f7',
    '#6921d7'
  ],
  pink: [
    '#ffdceb',
    '#ffc7e1',
    '#ffadd4',
    '#ff8dc7',
    '#ef6eb1',
    '#ef6eb1',
    '#e456a3',
    '#d23d91',
    '#b72c7d',
    '#9c1d6a']
}

const exceptions = {
  fg: {
    muted: get('scale.gray.1'),
    onEmphasis: get('scale.gray.9')
  },
  border: {
    default: get('scale.gray.5'),
    muted: get('scale.gray.5'),
    subtle: get('scale.gray.5')
  },
  neutral: {
    emphasis: get('scale.gray.6')
  },
  btn: {
    primary: {
      border: get('scale.green.1'),
      hoverBorder: get('scale.green.1'),
      disabledText: alpha(get('scale.gray.9'), 0.5),
      disabledBg: alpha(get('scale.green.5'), 0.6),
      disabledBorder: get('border.subtle'),
      icon: get('scale.gray.9'),
      counterBg: alpha(get('scale.black'), 0.15)
    }
  }
}

export default merge(dark, exceptions, {scale})
