import {alpha, darken, get} from '../../../src/utils-v1'

export default {
  control: {
    borderColor: {
      emphasis: '#858F99'
    }
  },
  avatar: {
    bg: get('scale.white'),
    border: get('border.subtle'),
    stackFade: get('scale.gray.3'),
    stackFadeMore: get('scale.gray.2'),
    childShadow: (theme: any) => `0 0 0 2px ${alpha(get('scale.white'), 0.8)(theme)}`
  },
  topicTag: {
    border: 'transparent'
  },
  counter: {
    border: 'transparent'
  },
  selectMenu: {
    backdropBorder: 'transparent',
    tapHighlight: alpha(get('scale.gray.3'), 0.5),
    tapFocusBg: get('scale.blue.1')
  },
  overlay: {
    shadow: (theme: any) =>
      `0 1px 3px ${alpha(get('scale.black'), 0.12)(theme)}, 0 8px 24px ${alpha(get('scale.gray.7'), 0.12)(theme)}`,
    backdrop: alpha(get('scale.gray.4'), 0.2)
  },
  header: {
    text: alpha(get('scale.white'), 0.7),
    bg: get('scale.gray.9'),
    divider: get('scale.gray.6'),
    logo: get('scale.white')
  },
  headerSearch: {
    bg: get('scale.gray.9'),
    border: get('scale.gray.6')
  },
  sidenav: {
    selectedBg: get('scale.white')
  },
  menu: {
    bgActive: 'transparent'
  },
  input: {
    disabledBg: get('neutral.muted')
  },
  diffstat: {
    additionBg: get('success.emphasis')
  },
  timeline: {
    badgeBg: get('scale.gray.1') // needs to be opaque
  },
  ansi: {
    black: get('scale.gray.9'),
    blackBright: get('scale.gray.6'),
    white: get('scale.gray.5'),
    whiteBright: get('scale.gray.4'),
    gray: get('scale.gray.5'),
    red: get('scale.red.5'),
    redBright: get('scale.red.6'),
    green: get('scale.green.6'),
    greenBright: get('scale.green.5'),
    yellow: get('scale.yellow.8'),
    yellowBright: get('scale.yellow.7'),
    blue: get('scale.blue.5'),
    blueBright: get('scale.blue.4'),
    magenta: get('scale.purple.5'),
    magentaBright: get('scale.purple.4'),
    cyan: '#1b7c83',
    cyanBright: '#3192aa'
  },
  // Do we need all these btn variables?
  btn: {
    text: get('scale.gray.9'),
    bg: get('scale.gray.0'),
    border: get('border.subtle'),
    shadow: (theme: any) => `0 1px 0 ${alpha(get('scale.black'), 0.04)(theme)}`,
    insetShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.white'), 0.25)(theme)}`,
    hoverBg: '#f3f4f6',
    hoverBorder: get('border.subtle'),
    activeBg: darken(get('btn.hoverBg'), 0.03),
    activeBorder: get('border.subtle'),
    selectedBg: darken(get('btn.hoverBg'), 0.02),
    counterBg: alpha(get('scale.black'), 0.08),

    primary: {
      text: get('scale.white'),
      bg: get('success.emphasis'),
      border: get('border.subtle'),
      shadow: (theme: any) => `0 1px 0 ${alpha(get('scale.black'), 0.1)(theme)}`,
      insetShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.white'), 0.03)(theme)}`,
      hoverBg: get('scale.green.5'),
      hoverBorder: get('border.subtle'),
      selectedBg: darken(get('btn.primary.hoverBg'), 0.02),
      selectedShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.green.9'), 0.2)(theme)}`,
      disabledText: alpha(get('scale.white'), 0.8),
      disabledBg: '#94d3a2',
      disabledBorder: get('border.subtle'),
      icon: alpha(get('scale.white'), 0.8),
      counterBg: alpha(get('scale.green.9'), 0.2)
    },

    outline: {
      text: get('scale.blue.5'),
      hoverText: get('scale.white'),
      hoverBg: get('scale.blue.5'),
      hoverBorder: get('border.subtle'),
      hoverShadow: (theme: any) => `0 1px 0 ${alpha(get('scale.black'), 0.1)(theme)}`,
      hoverInsetShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.white'), 0.03)(theme)}`,
      hoverCounterBg: alpha(get('scale.white'), 0.2),
      selectedText: get('scale.white'),
      selectedBg: darken(get('scale.blue.5'), 0.03),
      selectedBorder: get('border.subtle'),
      selectedShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.blue.9'), 0.2)(theme)}`,
      disabledText: alpha(get('scale.blue.5'), 0.5),
      disabledBg: get('scale.gray.0'),
      disabledCounterBg: alpha(get('scale.blue.5'), 0.05),
      counterBg: '#0969da1a',
      counterFg: get('scale.blue.6'),
      hoverCounterFg: get('scale.white'),
      disabledCounterFg: alpha(get('scale.blue.5'), 0.5)
    },

    danger: {
      text: get('scale.red.5'),
      hoverText: get('scale.white'),
      hoverBg: get('scale.red.6'),
      hoverBorder: get('border.subtle'),
      hoverShadow: (theme: any) => `0 1px 0 ${alpha(get('scale.black'), 0.1)(theme)}`,
      hoverInsetShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.white'), 0.03)(theme)}`,
      hoverCounterBg: alpha(get('scale.white'), 0.2),
      selectedText: get('scale.white'),
      selectedBg: darken(get('scale.red.5'), 0.03),
      selectedBorder: get('border.subtle'),
      selectedShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.red.9'), 0.2)(theme)}`,
      disabledText: alpha(get('scale.red.5'), 0.5),
      disabledBg: get('scale.gray.0'),
      disabledCounterBg: alpha(get('scale.red.5'), 0.05),
      counterBg: alpha(get('scale.red.5'), 0.1),
      icon: get('scale.red.5'),
      hoverIcon: get('scale.white'),
      counterFg: get('scale.red.6'),
      hoverCounterFg: get('scale.white'),
      disabledCounterFg: alpha(get('scale.red.5'), 0.5)
    },

    inactive: {
      bg: get('scale.gray.1'),
      text: get('scale.gray.6'),
    }
  },
  underlinenav: {
    icon: get('fg.subtle'),
    borderHover: get('neutral.muted')
  },

  actionListItem: {
    inlineDivider: alpha(get('border.default'), 0.48),

    default: {
      hoverBg: alpha(get('scale.gray.2'), 0.32),
      hoverBorder: 'transparent',
      activeBg: alpha(get('scale.gray.2'), 0.48),
      activeBorder: 'transparent',
      selectedBg: alpha(get('scale.gray.2'), 0.24)
    },
    danger: {
      hoverBg: alpha(get('danger.subtle'), 0.64),
      activeBg: get('danger.subtle'),
      hoverText: get('danger.fg')
    }
  },

  switchTrack: {
    bg: get('scale.gray.1'),
    hoverBg: darken(get('scale.gray.1'), 0.03),
    activeBg: darken(get('scale.gray.1'), 0.05),
    disabledBg: get('scale.gray.4'),
    fg: get('fg.muted'),
    disabledFg: get('fg.onEmphasis'),
    border: 'transparent', // TODO: remove this in next major release

    checked: {
      bg: get('accent.emphasis'),
      hoverBg: '#0860CA', // accent-emphasis + scale-blue-7 @ 20% opacity
      activeBg: '#0757BA', // accent-emphasis + scale-blue-7 @ 20% opacity
      fg: get('fg.onEmphasis'),
      disabledFg: get('fg.onEmphasis'),
      border: 'transparent', // TODO: remove this in next major release
    }
  },

  switchKnob: {
    bg: get('canvas.default'),
    disabledBg: get('canvas.subtle'),
    border: '#858F99', // control contrast border https://github.com/primer/primitives/pull/485

    checked: {
      bg: get('canvas.default'), // TODO: remove this in next major release
      disabledBg: get('canvas.subtle'), // TODO: remove this in next major release
      border: get('accent.emphasis'),
    }
  },

  segmentedControl: {
    bg: get('scale.gray.1'),

    button: {
      bg: get('canvas.default'),
      hover: {
        bg: alpha(get('scale.gray.3'), 0.2),
      },

      active: {
        bg: alpha(get('scale.gray.3'), 0.4),
      },

      selected: {
        border: get('scale.gray.4'),
      },
    },
  },

  treeViewItem: {
    chevron: {
      hoverBg: alpha(get('scale.gray.2'), 0.32),
    },
    directory: {
      fill: get('scale.blue.3')
    }
  },
}
