import {alpha, darken, get} from '../../../src/utils'

export default {
  avatar: {
    bg: alpha(get('scale.white'), 0.1),
    border: get('border.subtle'),
    stackFade: get('scale.gray.6'),
    stackFadeMore: get('scale.gray.7'),
    childShadow: (theme: any) => `-2px -2px 0 ${get('scale.gray.9')(theme)}`
  },
  topicTag: {
    border: 'transparent'
  },
  counter: {
    border: 'transparent'
  },
  selectMenu: {
    backdropBorder: get('scale.gray.5'),
    tapHighlight: alpha(get('scale.gray.6'), 0.5),
    tapFocusBg: get('scale.blue.8')
  },
  overlay: {
    shadow: (theme: any) =>
      `0 0 0 1px ${get('scale.gray.6')(theme)}, 0 16px 32px ${alpha(get('scale.black'), 0.85)(theme)}`
  },
  header: {
    text: alpha(get('scale.white'), 0.7),
    bg: get('scale.gray.8'),
    divider: get('scale.gray.3'),
    logo: get('scale.gray.0')
  },
  headerSearch: {
    bg: get('scale.gray.9'),
    border: get('scale.gray.6')
  },
  sidenav: {
    selectedBg: get('scale.gray.7')
  },
  menu: {
    bgActive: get('scale.gray.8')
  },
  input: {
    disabledBg: alpha(get('neutral.muted'), 0.5)
  },
  diffstat: {
    additionBg: get('scale.green.3')
  },
  timeline: {
    badgeBg: get('scale.gray.7') // needs to be opaque
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
  },
  btn: {
    text: get('scale.gray.1'),
    bg: get('scale.gray.7'),
    border: get('border.subtle'),
    shadow: '0 0 transparent',
    insetShadow: '0 0 transparent',
    hoverBg: get('scale.gray.6'),
    hoverBorder: get('scale.gray.3'),
    activeBg: darken(get('scale.gray.6'), 0.03),
    activeBorder: get('scale.gray.4'),
    selectedBg: get('scale.gray.8'),
    focusBg: get('scale.gray.7'),
    focusBorder: get('scale.gray.3'),
    focusShadow: (theme: any) => `0 0 0 3px ${alpha(get('scale.gray.3'), 0.3)(theme)}`,
    shadowActive: (theme: any) => `inset 0 0.15em 0.3em ${alpha(get('scale.black'), 0.15)(theme)}`,
    shadowInputFocus: (theme: any) => `0 0 0 0.2em ${alpha(get('scale.blue.5'), 0.3)(theme)}`,
    counterBg: get('scale.gray.6'),

    primary: {
      text: '#ffffff',
      bg: get('scale.green.5'),
      border: get('border.subtle'),
      shadow: '0 0 transparent',
      insetShadow: '0 0 transparent',
      hoverBg: get('scale.green.4'),
      hoverBorder: get('border.subtle'),
      selectedBg: get('scale.green.5'),
      selectedShadow: '0 0 transparent',
      disabledText: alpha(get('scale.white'), 0.5),
      disabledBg: alpha(get('scale.green.5'), 0.6),
      disabledBorder: get('border.subtle'),
      focusBg: get('scale.green.5'),
      focusBorder: get('border.subtle'),
      focusShadow: (theme: any) => `0 0 0 3px ${alpha('#2ea44f', 0.4)(theme)}`,
      icon: get('scale.white'),
      counterBg: alpha(get('scale.white'), 0.2)
    },

    outline: {
      text: get('scale.blue.3'),
      hoverText: get('scale.blue.3'),
      hoverBg: get('scale.gray.6'),
      hoverBorder: get('border.subtle'),
      hoverShadow: (theme: any) => `0 1px 0 ${alpha(get('scale.black'), 0.1)(theme)}`,
      hoverInsetShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.white'), 0.03)(theme)}`,
      hoverCounterBg: alpha(get('scale.white'), 0.2),
      selectedText: get('scale.white'),
      selectedBg: get('scale.blue.7'),
      selectedBorder: get('border.subtle'),
      selectedShadow: '0 0 transparent',
      disabledText: alpha(get('scale.blue.3'), 0.5),
      disabledBg: get('scale.gray.9'),
      disabledCounterBg: alpha(get('scale.blue.5'), 0.05),
      focusBorder: get('border.subtle'),
      focusShadow: (theme: any) => `0 0 0 3px ${alpha(get('scale.blue.6'), 0.4)(theme)}`,
      counterBg: alpha(get('scale.blue.5'), 0.1)
    },

    danger: {
      text: get('scale.red.4'),
      hoverText: get('fg.onEmphasis'),
      hoverBg: get('scale.red.5'),
      hoverBorder: get('scale.red.4'),
      hoverShadow: '0 0 transparent',
      hoverInsetShadow: '0 0 transparent',
      hoverIcon: get('fg.onEmphasis'),
      hoverCounterBg: alpha('#fff', 0.2),
      selectedText: '#ffffff',
      selectedBg: get('scale.red.6'),
      selectedBorder: get('scale.red.3'),
      selectedShadow: '0 0 transparent',
      disabledText: alpha(get('scale.red.4'), 0.5),
      disabledBg: get('scale.gray.9'),
      disabledCounterBg: alpha(get('scale.red.5'), 0.05),
      focusBorder: get('scale.red.4'),
      focusShadow: (theme: any) => `0 0 0 3px ${alpha(get('scale.red.4'), 0.4)(theme)}`,
      counterBg: alpha(get('scale.red.5'), 0.1),
      icon: get('scale.red.4')
    }
  },
  underlinenav: {
    icon: get('fg.subtle'),
    borderHover: get('neutral.muted')
  },

  actionListItem: {
    inlineDivider: alpha(get('border.default'), 0.48),

    default: {
      hoverBg: alpha(get('scale.gray.2'), 0.12),
      hoverBorder: 'transparent',
      activeBg: alpha(get('scale.gray.2'), 0.2),
      activeBorder: 'transparent',
      selectedBg: alpha(get('scale.gray.2'), 0.08)
    },
    danger: {
      hoverBg: alpha(get('scale.red.4'), 0.16),
      activeBg: alpha(get('scale.red.4'), 0.24),
      hoverText: get('scale.red.3')
    }
  },

  switchTrack: {
    bg: get('scale.black'),
    border: get('scale.gray.4'),

    checked: {
      bg: alpha(get('scale.blue.5'), 0.35),
      hoverBg: alpha(get('scale.blue.5'), 0.5),
      activeBg: alpha(get('scale.blue.5'), 0.65),
      border: get('scale.blue.3'),
    }
  },

  switchKnob: {
    checked: {
      bg: get('scale.blue.5'),
      disabledBg: get('scale.gray.5'),
    }
  }
}
