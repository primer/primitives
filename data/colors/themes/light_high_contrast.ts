import {alpha, get, merge} from '../../../src/utils'
import light from './light'

const scale = {
black: '#010409',
white: '#ffffff',
gray: [
  '#FFFFFF',
  '#E7ECF0',
  '#CED5DC',
  '#ACB6C0',
  '#88929D',
  '#67707A',
  '#4F5760',
  '#3D454E',
  '#30363D',
  '#24292F'
],
blue: [
  '#dff7ff',
  '#9cd7ff',
  '#67b3fd',
  '#368cf9',
  '#1168e3',
  '#0349b4',
  '#023b95',
  '#022f7a',
  '#032563',
  '#021a4a'
  ],
green: [
  '#d2fedb',
  '#82e596',
  '#43c663',
  '#26a148',
  '#117f32',
  '#055d20',
  '#024c1a',
  '#013d14',
  '#003110',
  '#00230b'
  ],
yellow: [
  '#fcf7be',
  '#f0ce53',
  '#d5a824',
  '#b58407',
  '#956400',
  '#744500',
  '#603700',
  '#4e2c00',
  '#3f2200',
  '#2e1800'
],
orange: [
  '#fff2d5',
  '#ffc67b',
  '#f99636',
  '#dc6d1a',
  '#b45105',
  '#873800',
  '#702c00',
  '#5b2300',
  '#491b00',
  '#361200'
  ],
red: [
  '#fff0ee',
  '#ffc1bc',
  '#ff8e8a',
  '#ee5a5d',
  '#d5232c',
  '#a0111f',
  '#86061d',
  '#6e011a',
  '#5a0016',
  '#430011'
  ],
purple: [
  '#faf0fe',
  '#e0c5ff',
  '#c49bff',
  '#a371f7',
  '#844ae7',
  '#622cbc',
  '#512598',
  '#411d7b',
  '#341763',
  '#260f49'
  ],
pink: [
  '#feeff7',
  '#ffbde0',
  '#fc87ca',
  '#ed4baf',
  '#c9248e',
  '#971368',
  '#7d0c57',
  '#660847',
  '#53043a',
  '#3e022b'
  ],
coral: [
  '#fff0ed',
  '#ffc2b6',
  '#ff8f7e',
  '#ef5b48',
  '#cd3425',
  '#9f1710',
  '#870706',
  '#6f0107',
  '#5b0002',
  '#430200'
  ]
}

const exceptions = {
    fg: {
      muted: get('scale.gray.9'),
    },
    canvas: {
      inset: get('scale.white'),
      subtle: get('scale.gray.1')
    },
    border: {
      default: get('scale.gray.9'),
      muted: get('scale.gray.4'),
      subtle: alpha(get('scale.black'), 0.9)
    },
    neutral: {
        subtle: get('scale.gray.1')
    },
    accent: {
      muted: get('scale.blue.3')
    },
    success: {
      emphasis: get('scale.green.5'),
      muted: get('scale.green.3')
    },
    attention: {
      emphasis: get('scale.yellow.5'),
      muted: get('scale.yellow.3')
    },
    severe: {
      muted: get('scale.orange.3')
    },
    danger: {
      muted: get('scale.red.3')
    },
    done: {
      muted: get('scale.purple.3')
    },
    sponsors: {
      muted: get('scale.pink.3')
    }
}

export default merge(light, exceptions, {scale})
