import {alpha, get, merge} from '../../src/utils'
import darkGithubVars from './utils/dark_github_vars'
import deprecatedVars from './utils/deprecated_vars'
import marketingVars from './utils/marketing_vars'

const vars = {
  // Scales
  scale: {
    black: '#010409',
    white: '#f0f6fc',
    gray: [
      '#f0f6fc',
      '#c9d1d9',
      '#b1bac4',
      '#8b949e',
      '#6e7681',
      '#484f58',
      '#30363d',
      '#21262d',
      '#161b22',
      '#0d1117'
    ],
    blue: [
      '#cae8ff',
      '#a5d6ff',
      '#79c0ff',
      '#58a6ff',
      '#388bfd',
      '#1f6feb',
      '#1158c7',
      '#0d419d',
      '#0c2d6b',
      '#051d4d'
    ],
    green: [
      '#aff5b4',
      '#7ee787',
      '#56d364',
      '#3fb950',
      '#2ea043',
      '#238636',
      '#196c2e',
      '#0f5323',
      '#033a16',
      '#04260f'
    ],
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
    pink: ['#ffdaec', '#ffbedd', '#ff9bce', '#f778ba', '#db61a2', '#bf4b8a', '#9e3670', '#7d2457', '#5e103e', '#42062a']
  },

  // Foundations
  fg: {
    default: get('scale.gray.1'),
    muted: get('scale.gray.3'),
    inactive: get('scale.gray.5'),
    onEmphasis: get('scale.white')
  },
  canvas: {
    default: get('scale.gray.9'),
    overlay: get('scale.gray.8'),
    inset: get('scale.black')
  },
  border: {
    default: get('scale.gray.6'),
    divider: get('scale.gray.7')
  },
  shadow: {
    small: '0 0 transparent',
    medium: (theme: any) => `0 3px 6px ${get('scale.black')(theme)}`,
    large: (theme: any) => `0 8px 24px ${get('scale.black')(theme)}`,
    extraLarge: (theme: any) => `0 12px 48px ${get('scale.black')(theme)}`
  },

  // Roles
  neutral: {
    fg: get('scale.gray.4'),
    emphasis: get('scale.gray.5'),
    highlighter: alpha(get('scale.gray.4'), 0.4),
    muted: alpha(get('scale.gray.4'), 0.1)
  },
  accent: {
    fg: get('scale.blue.4'),
    emphasis: get('scale.blue.5'),
    highlighter: alpha(get('scale.blue.4'), 0.4),
    muted: alpha(get('scale.blue.4'), 0.1)
  },
  success: {
    fg: get('scale.green.4'),
    emphasis: get('scale.green.5'),
    highlighter: alpha(get('scale.green.4'), 0.4),
    muted: alpha(get('scale.green.4'), 0.1)
  },
  warning: {
    fg: get('scale.yellow.4'),
    emphasis: get('scale.yellow.5'),
    highlighter: alpha(get('scale.yellow.4'), 0.4),
    muted: alpha(get('scale.yellow.4'), 0.1)
  },
  severe: {
    fg: get('scale.orange.4'),
    emphasis: get('scale.orange.5'),
    highlighter: alpha(get('scale.orange.4'), 0.4),
    muted: alpha(get('scale.orange.4'), 0.1)
  },
  danger: {
    fg: get('scale.red.4'),
    emphasis: get('scale.red.5'),
    highlighter: alpha(get('scale.red.4'), 0.4),
    muted: alpha(get('scale.red.4'), 0.1)
  },
  done: {
    fg: get('scale.purple.4'),
    emphasis: get('scale.purple.5'),
    highlighter: alpha(get('scale.purple.4'), 0.4),
    muted: alpha(get('scale.purple.4'), 0.1)
  },
  sponsors: {
    fg: get('scale.pink.4'),
    emphasis: get('scale.pink.5'),
    highlighter: alpha(get('scale.pink.4'), 0.4),
    muted: alpha(get('scale.pink.4'), 0.1)
  },

  // Only meant for Primer components
  primer: {
    canvas: {
      backdrop: alpha(get('scale.black'), 0.8), // use for modal/dialogs
      sticky: alpha(get('scale.gray.9'), 0.95) // use for sticky headers
    },
    border: {
      active: '#F78166', // coral
      contrast: alpha(get('scale.white'), 0.2) // use to increase contrast
    },
    shadow: {
      highlight: '0 0 transparent', // top highlight
      inset: '0 0 transparent', // top inner shadow
      focus: (theme: any) => `0 0 0 3px ${get('scale.blue.8')(theme)}` // blue focus ring
    }
  },

  // Components
  avatar: {
    bg: alpha(get('scale.white'), 0.1),
    border: alpha(get('scale.white'), 0.1),
    stackFade: get('scale.gray.6'),
    stackFadeMore: get('scale.gray.7'),
    childShadow: (theme: any) => `-2px -2px 0 ${get('scale.gray.9')(theme)}`
  },
  selectMenu: {
    backdropBorder: get('scale.gray.5'),
    tapHighlight: alpha(get('scale.gray.6'), 0.5),
    tapFocusBg: get('scale.blue.8')
  },
  header: {
    text: alpha(get('scale.white'), 0.7),
    bg: get('scale.gray.9'),
    logo: get('scale.gray.0')
  },
  sidenav: {
    selectedBg: get('scale.gray.7')
  },
  menu: {
    bgActive: get('scale.gray.8')
  },
  ansi: {
    black: get('scale.gray.5'),
    blackBright: get('scale.gray.4'),
    white: get('scale.gray.2'),
    whiteBright: get('scale.white'),
    gray: get('scale.gray.4'),
    red: get('scale.red.3'),
    redBright: get('scale.red.2'),
    green: get('scale.green.3'),
    greenBright: get('scale.green.2'),
    yellow: get('scale.yellow.3'),
    yellowBright: get('scale.yellow.2'),
    blue: get('scale.blue.3'),
    blueBright: get('scale.blue.2'),
    magenta: get('scale.purple.3'),
    magentaBright: get('scale.purple.2'),
    cyan: '#39c5cf',
    cyanBright: '#56d4dd'
  }
}

export default merge(deprecatedVars, darkGithubVars, marketingVars, vars)
