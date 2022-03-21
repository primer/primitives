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
    '#acf7b6',
    '#72f088',
    '#4ae168',
    '#26cd4d',
    '#09b43a',
    '#09b43a',
    '#02a232',
    '#008c2c',
    '#007728',
    '#006222'
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
    '#9c1d6a'
  ],
  coral: [
    '#FFDED4',
    '#FFCBB9',
    '#FFB39B',
    '#FF967D',
    '#FC704F',
    '#FC704F',
    '#F75133',
    '#E03B21',
    '#C62612',
    '#A91500'
  ]
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
    emphasis: get('scale.gray.4'),
    emphasisPlus: get('scale.gray.0')
  },
  accent: {
    muted: get('scale.blue.4'),
  },
  success: {
    muted: get('scale.green.4'),
  },
  attention: {
    muted: get('scale.yellow.4'),
  },
  severe: {
    muted: get('scale.orange.4'),
  },
  danger: {
    muted: get('scale.red.4'),
  },
  done: {
    muted: get('scale.purple.4'),
  },
  sponsors: {
    muted: get('scale.pink.4'),
  },
  avatar: {
    border: alpha(get('scale.white'), 0.9),
  },
  diffstat: {
    deletionBorder: get('scale.red.2'),
    additionBorder: get('scale.green.2')
  },
  underlinenav : {
    icon: get('scale.gray.1'),
    borderHover: get('scale.gray.3'),
  },
  topicTag: {
    border: get('accent.emphasis')
  },
  btn: {
    selectedBg: alpha(get('scale.gray.6'), 0.9),
    primary: {
      text: get('fg.onEmphasis'),
      border: get('scale.green.2'),
      hoverBg: get('scale.green.3'),
      hoverBorder: get('scale.green.2'),
      disabledText: alpha(get('fg.onEmphasis'), 0.5),
      disabledBg: alpha(get('scale.green.5'), 0.6),
      disabledBorder: alpha(get('scale.green.2'), 0.4),
      icon: get('fg.onEmphasis'),
      counterBg: alpha(get('scale.black'), 0.15)
    },
    danger: {
      hoverCounterBG: alpha(get('scale.black'), 0.15),
      counterBg: alpha(get('scale.black'), 0.15)
    }
  },
  codemirror: {
    selectionBg: alpha(get('scale.blue.4'), 0.4),
  },
  diffBlob: {
    addition: {
      fg: get('fg.onEmphasis')
    },
    deletion: {
      fg: get('fg.onEmphasis'),
    },
    expander: {
      icon: get('fg.default'),
    },
    hunk: {
      numBg: alpha(get('accent.muted'), 0.4),
    },
  },

  actionListItem: {
    inlineDivider: get('border.muted'),

    default: {
      hoverBg: get('scale.gray.8'),
      hoverBorder: get('border.default'),
      activeBg: get('scale.gray.6'),
      activeBorder: get('scale.gray.4'),
      selectedBg: get('scale.gray.6')
    },
    danger: {
      hoverBg: get('danger.emphasis'),
      activeBg: get('scale.red.6'),
      hoverText: get('fg.onEmphasis')
    }
  },

  switchTrack: {
    border: get('border.default'),

    checked: {
      border: get('scale.blue.5'),
    }
  },
}

export default merge(dark, exceptions, {scale})
