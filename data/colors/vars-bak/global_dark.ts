import {alpha, get} from '../../../src/utils-v1'

export default {
  fg: {
    default: '#e6edf3',
    muted: '#848d97',
    subtle: get('scale.gray.4'),
    onEmphasis: get('scale.white')
  },
  canvas: {
    default: get('scale.gray.9'),
    overlay: get('scale.gray.8'),
    inset: get('scale.black'),
    subtle: get('scale.gray.8')
  },
  border: {
    default: get('scale.gray.6'),
    muted: get('scale.gray.7'),
    subtle: alpha(get('scale.gray.0'), 0.1)
  },
  shadow: {
    small: '0 0 transparent',
    medium: (theme: any) => `0 3px 6px ${get('scale.black')(theme)}`,
    large: (theme: any) => `0 8px 24px ${get('scale.black')(theme)}`,
    extraLarge: (theme: any) => `0 12px 48px ${get('scale.black')(theme)}`
  },

  // Roles
  neutral: {
    emphasisPlus: get('scale.gray.4'),
    emphasis: get('scale.gray.4'),
    muted: alpha(get('scale.gray.4'), 0.4),
    subtle: alpha(get('scale.gray.4'), 0.1)
  },
  accent: {
    fg: '#2f81f7',
    emphasis: get('scale.blue.5'),
    muted: alpha(get('scale.blue.4'), 0.4),
    subtle: alpha(get('scale.blue.4'), 0.1)
  },
  success: {
    fg: get('scale.green.3'),
    emphasis: get('scale.green.5'),
    muted: alpha(get('scale.green.4'), 0.4),
    subtle: alpha(get('scale.green.4'), 0.15)
  },
  attention: {
    fg: get('scale.yellow.3'),
    emphasis: get('scale.yellow.5'),
    muted: alpha(get('scale.yellow.4'), 0.4),
    subtle: alpha(get('scale.yellow.4'), 0.15)
  },
  severe: {
    fg: get('scale.orange.4'),
    emphasis: get('scale.orange.5'),
    muted: alpha(get('scale.orange.4'), 0.4),
    subtle: alpha(get('scale.orange.4'), 0.1)
  },
  danger: {
    fg: get('scale.red.4'),
    emphasis: get('scale.red.5'),
    muted: alpha(get('scale.red.4'), 0.4),
    subtle: alpha(get('scale.red.4'), 0.1)
  },
  open: {
    fg: get('scale.green.3'),
    emphasis: get('scale.green.5'),
    muted: alpha(get('scale.green.4'), 0.4),
    subtle: alpha(get('scale.green.4'), 0.15)
  },
  closed: {
    fg: get('scale.red.4'),
    emphasis: get('scale.red.5'),
    muted: alpha(get('scale.red.4'), 0.4),
    subtle: alpha(get('scale.red.4'), 0.15)
  },
  done: {
    fg: get('scale.purple.4'),
    emphasis: get('scale.purple.5'),
    muted: alpha(get('scale.purple.4'), 0.4),
    subtle: alpha(get('scale.purple.4'), 0.1)
  },
  sponsors: {
    fg: get('scale.pink.4'),
    emphasis: get('scale.pink.5'),
    muted: alpha(get('scale.pink.4'), 0.4),
    subtle: alpha(get('scale.pink.4'), 0.1)
  },

  // Only meant for Primer components
  primer: {
    fg: {
      disabled: get('scale.gray.5')
    },
    canvas: {
      backdrop: alpha(get('scale.black'), 0.8), // use for modal/dialogs
      sticky: alpha(get('scale.gray.9'), 0.95) // use for sticky headers
    },
    border: {
      active: get('scale.coral.3'),
      contrast: alpha(get('scale.white'), 0.2) // use to increase contrast
    },
    shadow: {
      highlight: '0 0 transparent', // top highlight
      inset: '0 0 transparent', // top inner shadow
    }
  }
}
