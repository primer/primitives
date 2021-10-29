import {alpha, get, lighten, mix} from '../../../src/utils'

const mktg = {
  blue: {
    primary: '#4969ed',
    secondary: '#3355e0'
  },
  green: {
    primary: '#2ea44f',
    secondary: '#22863a'
  },
  purple: {
    primary: '#6f57ff',
    secondary: '#614eda'
  }
}

export default {
  mktg: {
    success: mix(get('scale.green.5'), get('scale.green.4')),
    info: mix(get('scale.blue.5'), get('scale.blue.4'), 0.42),
    bgShadeGradient: {
      top: alpha(get('scale.black'), 0.065),
      bottom: alpha(get('scale.black'), 0)
    },
    btn: {
      bg: {
        top: lighten(mktg.blue.primary, 0.05),
        bottom: mktg.blue.primary
      },
      bgOverlay: {
        top: lighten(mktg.blue.secondary, 0.05),
        bottom: mktg.blue.secondary
      },
      text: get('scale.white'),
      primary: {
        bg: {
          top: lighten(mktg.green.primary, 0.05),
          bottom: mktg.green.primary
        },
        bgOverlay: {
          top: lighten(mktg.green.secondary, 0.05),
          bottom: mktg.green.secondary
        },
        text: get('scale.white')
      },
      outline: {
        text: get('scale.white'),
        border: alpha(get('scale.white'), 0.3),
        hover: {
          text: get('scale.white'),
          border: alpha(get('scale.white'), 0.5)
        },
        focus: {
          border: get('scale.white'),
          borderInset: alpha(get('scale.white'), 0.5)
        }
      },
    }
  }
}
