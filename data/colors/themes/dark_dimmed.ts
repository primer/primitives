import {get, merge} from '../../../src/utils'
import dark from './dark'

const scale = {
  black: '#1c2128',
  white: '#cdd9e5',
  gray: ['#cdd9e5', '#adbac7', '#909dab', '#768390', '#636e7b', '#545d68', '#444c56', '#373e47', '#2d333b', '#22272e'],
  blue: ['#c6e6ff', '#96d0ff', '#6cb6ff', '#539bf5', '#4184e4', '#316dca', '#255ab2', '#1b4b91', '#143d79', '#0f2d5c'],
  green: ['#b4f1b4', '#8ddb8c', '#6bc46d', '#57ab5a', '#46954a', '#347d39', '#2b6a30', '#245829', '#1b4721', '#113417'],
  yellow: [
    '#fbe090',
    '#eac55f',
    '#daaa3f',
    '#c69026',
    '#ae7c14',
    '#966600',
    '#805400',
    '#6c4400',
    '#593600',
    '#452700'
  ],
  orange: [
    '#ffddb0',
    '#ffbc6f',
    '#f69d50',
    '#e0823d',
    '#cc6b2c',
    '#ae5622',
    '#94471b',
    '#7f3913',
    '#682d0f',
    '#4d210c'
  ],
  red: ['#ffd8d3', '#ffb8b0', '#ff938a', '#f47067', '#e5534b', '#c93c37', '#ad2e2c', '#922323', '#78191b', '#5D0F12'],
  purple: [
    '#eedcff',
    '#dcbdfb',
    '#dcbdfb',
    '#b083f0',
    '#986ee2',
    '#8256d0',
    '#6b44bc',
    '#5936a2',
    '#472c82',
    '#352160'
  ],
  pink: ['#ffd7eb', '#ffb3d8', '#fc8dc7', '#e275ad', '#c96198', '#ae4c82', '#983b6e', '#7e325a', '#69264a', '#551639'],
  coral: [
    '#FFDACF',
    '#FFB9A5',
    '#F79981',
    '#EC775C',
    '#DE5B41',
    '#C2442D',
    '#A93524',
    '#8D291B',
    '#771D13',
    '#5D1008'
  ]
}

const exceptions = {
  diffBlob: {
    expander: {
      icon: get('fg.default'),
    }
  }
}

export default merge(dark, {scale})
