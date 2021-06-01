import {alpha, get, lighten} from '../../../src/utils'

export default {
  fg: {
    default: get('scale.gray.9'),
    muted: get('scale.gray.6'),
    inactive: get('scale.gray.5'),
    onEmphasis: get('scale.white')
  },
  canvas: {
    default: get('scale.white'),
    overlay: get('scale.white'),
    inset: get('scale.gray.1')
  },
  border: {
    default: get('scale.gray.2'),
    divider: lighten(get('scale.gray.2'), 0.03)
  },
  shadow: {
    small: (theme: any) => `0 1px 0 ${alpha(get('scale.black'), 0.04)(theme)}`,
    medium: (theme: any) => `0 3px 6px ${alpha(get('scale.gray.4'), 0.15)(theme)}`,
    large: (theme: any) => `0 8px 24px ${alpha(get('scale.gray.4'), 0.2)(theme)}`,
    extraLarge: (theme: any) => `0 12px 28px ${alpha(get('scale.gray.4'), 0.3)(theme)}`
  },

  // Roles
  neutral: {
    emphasisPlus: get('scale.gray.9'),
    emphasis: get('scale.gray.5'),
    muted: alpha(get('scale.gray.3'), 0.4),
    subtle: alpha(get('scale.gray.1'), 0.5)
  },
  accent: {
    fg: get('scale.blue.5'),
    emphasis: get('scale.blue.5'),
    muted: alpha(get('scale.blue.3'), 0.4),
    subtle: get('scale.blue.0')
  },
  success: {
    fg: get('scale.green.5'),
    emphasis: get('scale.green.5'),
    muted: alpha(get('scale.green.3'), 0.4),
    subtle: get('scale.green.0')
  },
  attention: {
    fg: get('scale.yellow.5'),
    emphasis: get('scale.yellow.5'),
    muted: alpha(get('scale.yellow.3'), 0.4),
    subtle: get('scale.yellow.0')
  },
  severe: {
    fg: get('scale.orange.5'),
    emphasis: get('scale.orange.5'),
    muted: alpha(get('scale.orange.3'), 0.4),
    subtle: get('scale.orange.0')
  },
  danger: {
    fg: get('scale.red.5'),
    emphasis: get('scale.red.5'),
    muted: alpha(get('scale.red.3'), 0.4),
    subtle: get('scale.red.0')
  },
  done: {
    fg: get('scale.purple.5'),
    emphasis: get('scale.purple.5'),
    muted: alpha(get('scale.purple.3'), 0.4),
    subtle: get('scale.purple.0')
  },
  sponsors: {
    fg: get('scale.pink.5'),
    emphasis: get('scale.pink.5'),
    muted: alpha(get('scale.pink.3'), 0.4),
    subtle: get('scale.pink.0')
  },

  // Only meant to be used by Primer components
  primer: {
    canvas: {
      backdrop: alpha(get('scale.black'), 0.5), // use for modal/dialogs
      sticky: alpha(get('scale.white'), 0.95) // use for sticky headers
    },
    border: {
      active: '#f9826c', // coral
      contrast: alpha(get('scale.black'), 0.1) // use to increase contrast
    },
    shadow: {
      highlight: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.white'), 0.25)(theme)}`, // top highlight
      inset: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.gray.2'), 0.2)(theme)}`, // top inner shadow
      focus: (theme: any) => `0 0 0 3px ${alpha(get('scale.blue.5'), 0.3)(theme)}` // blue focus ring
    }
  }
}
