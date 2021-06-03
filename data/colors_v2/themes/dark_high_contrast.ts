import {get, merge} from '../../../src/utils'
import dark from './dark'

const scale = {
  black: '#010409',
  white: '#ffffff',
  gray: ['#ffffff', '#f0f3f6', '#d9dee3', '#bdc4cc', '#9ea7b3', '#7a828e', '#525964', '#272b33', '#272b33', '#0a0c10'],
  blue: ['#cce9ff', '#aedcff', '#8eccff', '#6cb8ff', '#589df3', '#1f56aa', '#0d4091', '#0c306d', '#072357', '#041844'],
  green: ['#bcf3bc', '#88ec90', '#63de70', '#4bc95e', '#35b14d', '#1d672e', '#134f23', '#083c17', '#022d0f', '#03200c'],
  yellow: [
    '#f8e4aa',
    '#f9d265',
    '#ebbf50',
    '#daaa3d',
    '#c8922b',
    '#814d00',
    '#613700',
    '#4e2b00',
    '#3c1f00',
    '#2c1600'
  ],
  orange: [
    '#ffe0bc',
    '#ffcd9a',
    '#ffb675',
    '#f89c57',
    '#e78037',
    '#934010',
    '#772d08',
    '#5a2208',
    '#481600',
    '#350f00'
  ],
  red: ['#ffded9', '#ffcac4', '#ffb2ab', '#ff958e', '#ff6c66', '#aa2324', '#851819', '#690c0f', '#500a0d', '#400105'],
  purple: [
    '#efdfff',
    '#e5ccff',
    '#d9b7ff',
    '#ca9fff',
    '#b384f9',
    '#673fbb',
    '#512d94',
    '#3e2171',
    '#30145d',
    '#240e44'
  ],
  pink: ['#ffdbeb', '#ffc6e1', '#ffadd5', '#ee97c5', '#dd7cae', '#933869', '#752652', '#5c183f', '#4b0b31', '#390524']
}

const exceptions = {
  fg: {
    muted: get('scale.gray.1')
  },
  border: {
    default: get('scale.gray.5'),
    muted: get('scale.gray.5')
  },
  neutral: {
    emphasis: get('scale.gray.6')
  }
}

export default merge(dark, exceptions, {scale})
