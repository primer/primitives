import {alpha, darken, desaturate, get, lighten, mix} from '../../src/utils'

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
  scale: {
    black: '#1b1f23',
    white: '#ffffff',
    gray: [
      '#fafbfc',
      '#f6f8fa',
      '#e1e4e8',
      '#d1d5da',
      '#959da5',
      '#6a737d',
      '#586069',
      '#444d56',
      '#2f363d',
      '#24292e'
    ],
    blue: [
      '#f1f8ff',
      '#dbedff',
      '#c8e1ff',
      '#79b8ff',
      '#2188ff',
      '#0366d6',
      '#005cc5',
      '#044289',
      '#032f62',
      '#05264c'
    ],
    green: [
      '#f0fff4',
      '#dcffe4',
      '#bef5cb',
      '#85e89d',
      '#34d058',
      '#28a745',
      '#22863a',
      '#176f2c',
      '#165c26',
      '#144620'
    ],
    yellow: [
      '#fffdef',
      '#fffbdd',
      '#fff5b1',
      '#ffea7f',
      '#ffdf5d',
      '#ffd33d',
      '#f9c513',
      '#dbab09',
      '#b08800',
      '#735c0f'
    ],
    orange: [
      '#fff8f2',
      '#ffebda',
      '#ffd1ac',
      '#ffab70',
      '#fb8532',
      '#f66a0a',
      '#e36209',
      '#d15704',
      '#c24e00',
      '#a04100'
    ],
    red: ['#ffeef0', '#ffdce0', '#fdaeb7', '#f97583', '#ea4a5a', '#d73a49', '#cb2431', '#b31d28', '#9e1c23', '#86181d'],
    purple: [
      '#f5f0ff',
      '#e6dcfd',
      '#d1bcf9',
      '#b392f0',
      '#8a63d2',
      '#6f42c1',
      '#5a32a3',
      '#4c2889',
      '#3a1d6e',
      '#29134e'
    ],
    pink: ['#ffeef8', '#fedbf0', '#f9b3dd', '#f692ce', '#ec6cb9', '#ea4aaa', '#d03592', '#b93a86', '#99306f', '#6d224f']
  },
  auto: {
    black: get('scale.black'),
    white: get('scale.white'),
    gray: [
      get('scale.gray.0'),
      get('scale.gray.1'),
      get('scale.gray.2'),
      get('scale.gray.3'),
      get('scale.gray.4'),
      get('scale.gray.5'),
      get('scale.gray.6'),
      get('scale.gray.7'),
      get('scale.gray.8'),
      get('scale.gray.9')
    ],
    blue: [
      get('scale.blue.0'),
      get('scale.blue.1'),
      get('scale.blue.2'),
      get('scale.blue.3'),
      get('scale.blue.4'),
      get('scale.blue.5'),
      get('scale.blue.6'),
      get('scale.blue.7'),
      get('scale.blue.8'),
      get('scale.blue.9')
    ],
    green: [
      get('scale.green.0'),
      get('scale.green.1'),
      get('scale.green.2'),
      get('scale.green.3'),
      get('scale.green.4'),
      get('scale.green.5'),
      get('scale.green.6'),
      get('scale.green.7'),
      get('scale.green.8'),
      get('scale.green.9')
    ],
    yellow: [
      get('scale.yellow.0'),
      get('scale.yellow.1'),
      get('scale.yellow.2'),
      get('scale.yellow.3'),
      get('scale.yellow.4'),
      get('scale.yellow.5'),
      get('scale.yellow.6'),
      get('scale.yellow.7'),
      get('scale.yellow.8'),
      get('scale.yellow.9')
    ],
    orange: [
      get('scale.orange.0'),
      get('scale.orange.1'),
      get('scale.orange.2'),
      get('scale.orange.3'),
      get('scale.orange.4'),
      get('scale.orange.5'),
      get('scale.orange.6'),
      get('scale.orange.7'),
      get('scale.orange.8'),
      get('scale.orange.9')
    ],
    red: [
      get('scale.red.0'),
      get('scale.red.1'),
      get('scale.red.2'),
      get('scale.red.3'),
      get('scale.red.4'),
      get('scale.red.5'),
      get('scale.red.6'),
      get('scale.red.7'),
      get('scale.red.8'),
      get('scale.red.9')
    ],
    purple: [
      get('scale.purple.0'),
      get('scale.purple.1'),
      get('scale.purple.2'),
      get('scale.purple.3'),
      get('scale.purple.4'),
      get('scale.purple.5'),
      get('scale.purple.6'),
      get('scale.purple.7'),
      get('scale.purple.8'),
      get('scale.purple.9')
    ],
    pink: [
      get('scale.pink.0'),
      get('scale.pink.1'),
      get('scale.pink.2'),
      get('scale.pink.3'),
      get('scale.pink.4'),
      get('scale.pink.5'),
      get('scale.pink.6'),
      get('scale.pink.7'),
      get('scale.pink.8'),
      get('scale.pink.9')
    ]
  },
  text: {
    primary: get('scale.gray.9'),
    secondary: get('scale.gray.6'),
    tertiary: get('scale.gray.5'),
    placeholder: get('scale.gray.5'),
    disabled: get('scale.gray.4'),
    inverse: get('scale.white'),
    link: get('scale.blue.5'),
    danger: get('scale.red.6'),
    success: get('scale.green.6'),
    warning: get('scale.yellow.8'),
    white: get('scale.white')
  },
  icon: {
    primary: get('scale.gray.9'),
    secondary: get('scale.gray.6'),
    tertiary: get('scale.gray.4'),
    info: get('scale.blue.5'),
    danger: get('scale.red.5'),
    success: get('scale.green.6'),
    warning: get('scale.yellow.8')
  },
  border: {
    primary: get('scale.gray.2'),
    secondary: lighten(get('scale.gray.2'), 0.03),
    tertiary: get('scale.gray.3'),
    overlay: get('scale.gray.2'),
    inverse: get('scale.white'),
    info: get('scale.blue.5'),
    danger: get('scale.red.5'),
    success: get('scale.green.4'),
    warning: get('scale.yellow.6')
  },
  bg: {
    canvas: get('scale.white'),
    canvasMobile: get('scale.white'),
    canvasInverse: get('scale.gray.9'),
    canvasInset: get('scale.gray.1'),
    primary: get('scale.white'),
    secondary: get('scale.gray.0'),
    tertiary: get('scale.gray.1'),
    overlay: get('scale.white'),
    backdrop: get('fade.black50'),
    info: get('scale.blue.0'),
    infoInverse: get('scale.blue.5'),
    danger: get('scale.red.0'),
    dangerInverse: get('scale.red.5'),
    success: get('scale.green.1'),
    successInverse: get('scale.green.5'),
    warning: get('scale.yellow.2'),
    warningInverse: get('scale.yellow.5')
  },
  shadow: {
    small: (theme: any) => `0 1px 0 ${alpha(get('scale.black'), 0.04)(theme)}`,
    medium: (theme: any) => `0 3px 6px ${alpha(get('scale.gray.4'), 0.15)(theme)}`,
    large: (theme: any) => `0 8px 24px ${alpha(get('scale.gray.4'), 0.2)(theme)}`,
    extraLarge: (theme: any) => `0 12px 48px ${alpha(get('scale.gray.4'), 0.3)(theme)}`,
    highlight: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.white'), 0.25)(theme)}`,
    inset: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.gray.2'), 0.2)(theme)}`
  },
  state: {
    hover: {
      primaryBg: get('scale.blue.5'),
      primaryBorder: get('scale.blue.5'),
      primaryText: get('scale.white'),
      primaryIcon: get('scale.white'),
      secondaryBg: get('scale.gray.1'),
      secondaryBorder: get('scale.gray.1')
    },
    selected: {
      primaryBg: get('scale.blue.5'),
      primaryBorder: get('scale.blue.5'),
      primaryText: get('scale.white'),
      primaryIcon: get('scale.white')
    },
    focus: {
      border: get('scale.blue.5'),
      shadow: (theme: any) => `0 0 0 3px ${alpha(get('scale.blue.5'), 0.3)(theme)}`
    }
  },
  fade: {
    fg10: get('fade.black10'),
    fg15: get('fade.black15'),
    fg30: get('fade.black30'),
    fg50: get('fade.black50'),
    fg70: get('fade.black70'),
    fg85: get('fade.black85'),
    black10: alpha(get('scale.black'), 0.1),
    black15: alpha(get('scale.black'), 0.15),
    black30: alpha(get('scale.black'), 0.3),
    black50: alpha(get('scale.black'), 0.5),
    black70: alpha(get('scale.black'), 0.7),
    black85: alpha(get('scale.black'), 0.85),
    white10: alpha(get('scale.white'), 0.1),
    white15: alpha(get('scale.white'), 0.15),
    white30: alpha(get('scale.white'), 0.3),
    white50: alpha(get('scale.white'), 0.5),
    white70: alpha(get('scale.white'), 0.7),
    white85: alpha(get('scale.white'), 0.85)
  },
  alert: {
    info: {
      text: get('scale.gray.9'),
      icon: alpha(get('scale.blue.7'), 0.6),
      bg: get('scale.blue.1'),
      border: alpha(get('scale.blue.7'), 0.2)
    },
    warn: {
      text: get('scale.gray.9'),
      icon: get('scale.yellow.8'),
      bg: get('scale.yellow.1'),
      border: alpha(get('scale.yellow.8'), 0.2)
    },
    error: {
      text: get('scale.gray.9'),
      icon: alpha(get('scale.red.8'), 0.6),
      bg: '#ffe3e6',
      border: alpha(get('scale.red.8'), 0.2)
    },
    success: {
      text: get('scale.gray.9'),
      icon: alpha(get('scale.green.7'), 0.8),
      bg: get('scale.green.1'),
      border: alpha(get('scale.green.7'), 0.2)
    }
  },
  autocomplete: {
    shadow: (theme: any) => `0 3px 6px ${alpha(get('scale.gray.4'), 0.15)(theme)}`,
    rowBorder: lighten(get('scale.gray.2'), 0.03)
  },
  blankslate: {
    icon: lighten(get('scale.gray.5'), 0.05)
  },
  btn: {
    text: get('scale.gray.9'),
    bg: get('scale.gray.0'),
    border: alpha(get('scale.black'), 0.15),
    shadow: (theme: any) => `0 1px 0 ${alpha(get('scale.black'), 0.04)(theme)}`,
    insetShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.white'), 0.25)(theme)}`,
    hoverBg: '#f3f4f6',
    hoverBorder: alpha(get('scale.black'), 0.15),
    activeBg: darken(get('btn.hoverBg'), 0.03),
    activeBorder: alpha(get('scale.black'), 0.1),
    selectedBg: darken(get('btn.hoverBg'), 0.02),
    focusBg: get('scale.gray.0'),
    focusBorder: alpha(get('scale.black'), 0.15),
    focusShadow: (theme: any) => `0 0 0 3px ${alpha(get('scale.blue.5'), 0.3)(theme)}`,
    shadowActive: (theme: any) => `inset 0 0.15em 0.3em ${alpha(get('scale.black'), 0.15)(theme)}`, // TODO: Deprecate? Not used in Primer CSS
    shadowInputFocus: (theme: any) => `0 0 0 0.2em ${alpha(get('scale.blue.5'), 0.3)(theme)}`, // TODO: Deprecate?
    counterBg: alpha(get('scale.black'), 0.08),
    primary: {
      text: get('scale.white'),
      bg: '#2ea44f',
      border: alpha(get('scale.black'), 0.15),
      shadow: (theme: any) => `0 1px 0 ${alpha(get('scale.black'), 0.1)(theme)}`,
      insetShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.white'), 0.03)(theme)}`,
      hoverBg: '#2c974b',
      hoverBorder: alpha(get('scale.black'), 0.15),
      selectedBg: darken(get('btn.primary.hoverBg'), 0.02),
      selectedShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.green.9'), 0.2)(theme)}`,
      disabledText: alpha(get('scale.white'), 0.8),
      disabledBg: '#94d3a2',
      disabledBorder: alpha(get('scale.black'), 0.1),
      focusBg: '#2ea44f',
      focusBorder: alpha(get('scale.black'), 0.15),
      focusShadow: (theme: any) => `0 0 0 3px ${alpha(get('btn.primary.focusBg'), 0.4)(theme)}`,
      icon: alpha(get('scale.white'), 0.8),
      counterBg: alpha(get('scale.white'), 0.2)
    },
    outline: {
      text: get('scale.blue.5'),
      hoverText: get('scale.white'),
      hoverBg: get('scale.blue.5'),
      hoverBorder: alpha(get('scale.black'), 0.15),
      hoverShadow: (theme: any) => `0 1px 0 ${alpha(get('scale.black'), 0.1)(theme)}`,
      hoverInsetShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.white'), 0.03)(theme)}`,
      hoverCounterBg: alpha(get('scale.white'), 0.2),
      selectedText: get('scale.white'),
      selectedBg: darken(get('scale.blue.5'), 0.03),
      selectedBorder: alpha(get('scale.black'), 0.15),
      selectedShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.blue.9'), 0.2)(theme)}`,
      disabledText: alpha(get('scale.blue.5'), 0.5),
      disabledBg: get('scale.gray.0'),
      disabledCounterBg: alpha(get('scale.blue.5'), 0.05),
      focusBorder: alpha(get('scale.black'), 0.15),
      focusShadow: (theme: any) => `0 0 0 3px ${alpha(get('scale.blue.6'), 0.4)(theme)}`,
      counterBg: alpha(get('scale.blue.5'), 0.1)
    },
    danger: {
      text: get('scale.red.5'),
      hoverText: get('scale.white'),
      hoverBg: get('scale.red.6'),
      hoverBorder: alpha(get('scale.black'), 0.15),
      hoverShadow: (theme: any) => `0 1px 0 ${alpha(get('scale.black'), 0.1)(theme)}`,
      hoverInsetShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.white'), 0.03)(theme)}`,
      hoverCounterBg: alpha(get('scale.white'), 0.2),
      selectedText: get('scale.white'),
      selectedBg: darken(get('scale.red.5'), 0.03),
      selectedBorder: alpha(get('scale.black'), 0.15),
      selectedShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.red.9'), 0.2)(theme)}`,
      disabledText: alpha(get('scale.red.5'), 0.5),
      disabledBg: get('scale.gray.0'),
      disabledCounterBg: alpha(get('scale.red.5'), 0.05),
      focusBorder: alpha(get('scale.black'), 0.15),
      focusShadow: (theme: any) => `0 0 0 3px ${alpha(get('scale.red.6'), 0.4)(theme)}`,
      counterBg: alpha(get('scale.red.5'), 0.1),
      icon: get('scale.red.5'),
      hoverIcon: get('scale.white')
    }
  },
  counter: {
    text: get('scale.gray.9'),
    bg: alpha(get('scale.gray.3'), 0.5),
    primary: {
      text: get('scale.white'),
      bg: get('scale.gray.5')
    },
    secondary: {
      text: get('scale.gray.5'),
      bg: alpha(get('scale.gray.3'), 0.5)
    }
  },
  dropdown: {
    shadow: (theme: any) => `0 8px 24px ${alpha(get('scale.gray.4'), 0.2)(theme)}`
  },
  label: {
    border: get('scale.gray.2'),
    primary: {
      text: get('scale.gray.9'),
      border: get('scale.gray.5')
    },
    secondary: {
      text: get('scale.gray.6'),
      border: get('scale.gray.2')
    },
    info: {
      text: get('scale.blue.5'),
      border: get('scale.blue.5')
    },
    success: {
      text: get('scale.green.6'),
      border: get('scale.green.5')
    },
    warning: {
      text: get('scale.yellow.9'),
      border: get('scale.yellow.8')
    },
    danger: {
      text: get('scale.red.5'),
      border: get('scale.red.6')
    },
    orange: {
      text: get('scale.orange.8'),
      border: get('scale.orange.5')
    }
  },
  input: {
    bg: get('scale.white'),
    contrastBg: get('scale.gray.0'),
    border: get('scale.gray.2'),
    shadow: (theme: any) => `inset 0 1px 2px ${alpha(get('scale.black'), 0.075)(theme)}`,
    disabledBg: get('scale.gray.1'),
    disabledBorder: get('scale.gray.2'),
    warningBorder: get('scale.yellow.6'),
    errorBorder: get('scale.red.6'),
    tooltip: {
      success: {
        text: get('scale.green.9'),
        bg: get('scale.green.1'),
        border: get('scale.green.4')
      },
      warning: {
        text: get('scale.yellow.9'),
        bg: get('scale.yellow.2'),
        border: get('scale.yellow.6')
      },
      error: {
        text: get('scale.red.9'),
        bg: get('scale.red.0'),
        border: get('scale.red.3')
      }
    }
  },
  avatar: {
    bg: get('scale.white'),
    border: 'transparent',
    stackFade: get('scale.gray.3'),
    stackFadeMore: get('scale.gray.2'),
    childShadow: (theme: any) => `-2px -2px 0 ${alpha(get('scale.white'), 0.8)(theme)}`
  },
  toast: {
    text: get('text.primary'),
    bg: get('bg.canvas'),
    border: get('border.primary'),
    shadow: get('shadow.large'),
    icon: get('scale.white'),
    iconBg: get('bg.infoInverse'),
    iconBorder: 'transparent',
    success: {
      text: get('text.primary'),
      border: get('border.primary'),
      icon: get('scale.white'),
      iconBg: get('bg.successInverse'),
      iconBorder: 'transparent'
    },
    warning: {
      text: get('text.primary'),
      border: get('border.primary'),
      icon: get('text.primary'),
      iconBg: get('bg.warningInverse'),
      iconBorder: 'transparent'
    },
    danger: {
      text: get('text.primary'),
      border: get('border.primary'),
      icon: get('scale.white'),
      iconBg: get('bg.dangerInverse'),
      iconBorder: 'transparent'
    },
    loading: {
      text: get('text.primary'),
      border: get('border.primary'),
      icon: get('scale.white'),
      iconBg: get('scale.gray.6'),
      iconBorder: 'transparent'
    }
  },
  timeline: {
    text: get('scale.gray.7'),
    badgeBg: get('scale.gray.2'),
    badgeSuccessBorder: 'transparent',
    targetBadgeBorder: get('scale.blue.4'),
    targetBadgeShadow: get('scale.blue.2')
  },
  selectMenu: {
    borderSecondary: lighten(get('scale.gray.2'), 0.03),
    shadow: (theme: any) => `0 0 18px ${alpha(get('scale.black'), 0.4)(theme)}`,
    backdropBg: get('fade.black50'),
    backdropBorder: 'transparent',
    tapHighlight: alpha(get('scale.gray.3'), 0.5),
    tapFocusBg: get('scale.blue.1')
  },
  box: {
    blueBorder: get('scale.blue.2'),
    rowYellowBg: get('scale.yellow.1'),
    rowBlueBg: get('scale.blue.0'),
    headerBlueBg: get('scale.blue.0'),
    headerBlueBorder: get('scale.blue.2'),
    borderInfo: alpha(get('scale.blue.5'), 0.2),
    bgInfo: get('scale.blue.0'),
    borderWarning: alpha(get('scale.yellow.5'), 0.4),
    bgWarning: get('scale.yellow.0')
  },
  branchName: {
    text: get('scale.gray.6'),
    icon: desaturate(get('scale.blue.3'), 0.7),
    bg: lighten(get('scale.blue.1'), 0.03),
    link: {
      text: get('scale.blue.5'),
      icon: desaturate(get('scale.blue.3'), 0.7),
      bg: lighten(get('scale.blue.1'), 0.03)
    }
  },
  markdown: {
    codeBg: alpha(get('scale.black'), 0.05),
    frameBorder: lighten(get('scale.gray.3'), 0.05),
    blockquoteBorder: lighten(get('scale.gray.3'), 0.05),
    tableBorder: lighten(get('scale.gray.3'), 0.05),
    tableTrBorder: darken(get('scale.gray.3'), 0.04)
  },
  menu: {
    headingText: get('scale.gray.9'),
    borderActive: '#f9826c',
    bgActive: 'transparent'
  },
  sidenav: {
    selectedBg: get('scale.white'),
    borderActive: '#f9826c'
  },
  header: {
    text: get('fade.white70'),
    bg: get('scale.gray.9'),
    logo: get('scale.white')
  },
  filterItem: {
    barBg: darken(get('scale.gray.1'), 0.02)
  },
  hiddenTextExpander: {
    bg: lighten(get('scale.gray.3'), 0.05),
    bgHover: darken(get('scale.gray.3'), 0.04)
  },
  dragAndDrop: {
    border: darken(get('scale.gray.3'), 0.05)
  },
  uploadEnabled: {
    border: lighten(get('scale.gray.3'), 0.05),
    borderFocused: lighten(get('scale.blue.4'), 0.08)
  },
  previewableCommentForm: {
    border: darken(get('scale.gray.3'), 0.05)
  },
  underlinenav: {
    border: alpha(get('scale.gray.3'), 0),
    borderHover: get('scale.gray.3'),
    borderActive: '#f9826c',
    text: get('scale.gray.9'),
    textHover: get('scale.gray.9'),
    textActive: get('scale.gray.9'),
    icon: get('scale.gray.4'),
    iconHover: get('scale.gray.4'),
    iconActive: get('scale.gray.9'),
    counterText: get('scale.gray.9'),
    counterBg: get('counter.bg')
  },
  verifiedBadge: {
    text: get('scale.green.6'),
    bg: get('scale.white'),
    border: get('scale.gray.2')
  },
  socialCount: {
    bg: get('scale.white')
  },
  tooltip: {
    text: get('scale.white'),
    bg: get('scale.gray.9')
  },
  headerSearch: {
    bg: get('scale.gray.9'),
    border: get('scale.gray.7')
  },
  searchKeyword: {
    hl: get('scale.yellow.1')
  },
  diffstat: {
    neutralBg: get('scale.gray.3'),
    neutralBorder: get('scale.gray.3'),
    deletionBg: get('scale.red.5'),
    deletionBorder: get('scale.red.5'),
    additionBg: get('scale.green.5'),
    additionBorder: get('scale.green.5')
  },
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
      enterprise: {
        bg: {
          top: lighten(mktg.purple.primary, 0.05),
          bottom: mktg.purple.primary
        },
        bgOverlay: {
          top: lighten(mktg.purple.secondary, 0.05),
          bottom: mktg.purple.secondary
        },
        text: get('scale.white')
      },
      outline: {
        text: mktg.blue.primary,
        border: alpha(mktg.blue.primary, 0.3),
        hover: {
          text: mktg.blue.secondary,
          border: alpha(mktg.blue.secondary, 0.5)
        },
        focus: {
          border: mktg.blue.primary,
          borderInset: alpha(mktg.blue.primary, 0.5)
        }
      },
      dark: {
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
      }
    }
  },
  filesExplorerIcon: get('scale.blue.3'),
  hlAuthorBg: get('scale.blue.0'),
  hlAuthorBorder: get('scale.blue.2'),
  logoSubdued: get('scale.gray.3'),
  discussionBorder: desaturate(get('scale.green.3'), 0.4),
  discussionBgSuccess: get('scale.green.5'),
  actionsWorkflowTableStickyBg: alpha(get('scale.white'), 0.95),
  repoLanguageColorBorder: alpha(get('scale.black'), 0.1),
  codeSelectionBg: get('scale.blue.2'),
  highlight: {
    text: '#442c12',
    bg: '#fff0bb'
  },
  blob: {
    lineHighlightBg: get('scale.yellow.1'),
    lineHighlightBorder: 'transparent'
  },
  diff: {
    addition: {
      text: get('scale.green.6'),
      bg: get('diffBlob.addition.lineBg'),
      border: get('scale.green.4')
    },
    deletion: {
      text: get('scale.red.6'),
      bg: get('diffBlob.deletion.lineBg'),
      border: get('scale.red.5')
    },
    change: {
      text: get('scale.yellow.8'),
      bg: get('scale.yellow.2'),
      border: get('scale.yellow.6')
    }
  },
  diffBlob: {
    numText: get('fade.black30'),
    numHoverText: alpha(get('scale.black'), 0.6),
    addition: {
      numText: get('fade.black30'),
      numHoverText: alpha(get('scale.black'), 0.6),
      numBg: darken(get('scale.green.1'), 0.03),
      lineBg: darken(get('scale.green.0'), 0.02),
      wordBg: darken(get('scale.green.2'), 0.04)
    },
    deletion: {
      numText: get('fade.black30'),
      numHoverText: alpha(get('scale.black'), 0.6),
      numBg: get('scale.red.1'),
      lineBg: get('scale.red.0'),
      wordBg: lighten(get('scale.red.2'), 0.02)
    },
    hunk: {
      text: get('fade.black70'),
      numBg: get('scale.blue.1'),
      lineBg: get('scale.blue.0')
    },
    emptyBlockBg: get('scale.gray.0'),
    selectedLineHighlightBg: alpha(get('scale.yellow.4'), 0.2),
    selectedLineHighlightBorder: get('scale.yellow.5'),
    selectedLineHighlightMixBlendMode: 'multiply',
    expander: {
      icon: get('scale.gray.6'),
      hoverIcon: get('scale.white'),
      hoverBg: get('scale.blue.5')
    },
    commentButton: {
      icon: get('scale.white'),
      bg: get('scale.blue.5'),
      gradientBg: lighten(get('scale.blue.5'), 0.05)
    }
  },
  globalNav: {
    logo: get('scale.white'),
    bg: get('scale.gray.9'),
    text: get('scale.white'),
    icon: get('scale.white'),
    inputBg: get('scale.gray.0'),
    inputBorder: get('scale.gray.0'),
    inputIcon: get('scale.gray.3'),
    inputPlaceholder: get('scale.gray.4')
  },
  calendarGraph: {
    dayBg: '#ebedf0',
    dayBorder: 'rgba(27,31,35,0.06)',
    dayL1Bg: '#9be9a8',
    dayL2Bg: '#40c463',
    dayL3Bg: '#30a14e',
    dayL4Bg: '#216e39',
    dayL4Border: 'rgba(27,31,35,0.06)',
    dayL3Border: 'rgba(27,31,35,0.06)',
    dayL2Border: 'rgba(27,31,35,0.06)',
    dayL1Border: 'rgba(27,31,35,0.06)'
  },
  footerInvertocat: {
    octicon: get('scale.gray.3'),
    octiconHover: get('scale.gray.5')
  },
  prState: {
    draft: {
      text: get('scale.white'),
      bg: get('scale.gray.5'),
      border: 'transparent'
    },
    open: {
      text: get('scale.white'),
      bg: get('scale.green.5'),
      border: 'transparent'
    },
    merged: {
      text: get('scale.white'),
      bg: get('scale.purple.5'),
      border: 'transparent'
    },
    closed: {
      text: get('scale.white'),
      bg: get('scale.red.5'),
      border: 'transparent'
    }
  },
  topicTag: {
    text: get('scale.blue.5'),
    bg: get('scale.blue.0'),
    hoverBg: darken(get('scale.blue.0'), 0.04),
    activeBg: darken(get('scale.blue.0'), 0.02)
  },
  mergeBox: {
    successIconBg: get('scale.green.5'),
    successIconText: get('scale.white'),
    successIconBorder: 'transparent',
    successIndicatorBg: get('scale.green.5'),
    successIndicatorBorder: 'transparent',
    mergedIconBg: get('scale.purple.5'),
    mergedIconText: get('scale.white'),
    mergedIconBorder: 'transparent',
    mergedBoxBorder: get('scale.purple.5'),
    neutralIconBg: get('scale.gray.5'),
    neutralIconText: get('scale.white'),
    neutralIconBorder: 'transparent',
    neutralIndicatorBg: get('scale.gray.5'),
    neutralIndicatorBorder: 'transparent',
    warningIconBg: get('scale.yellow.7'),
    warningIconText: get('scale.white'),
    warningIconBorder: 'transparent',
    warningBoxBorder: get('scale.yellow.5'),
    warningMergeHighlight: 'transparent',
    errorIconBg: get('scale.red.5'),
    errorIconText: get('scale.white'),
    errorIconBorder: 'transparent',
    errorIndicatorBg: get('scale.red.5'),
    errorIndicatorBorder: 'transparent'
  },
  project: {
    cardBg: get('scale.white'),
    headerBg: get('scale.gray.9'),
    sidebarBg: get('scale.white'),
    gradientIn: get('scale.white'),
    gradientOut: alpha(get('scale.white'), 0)
  },
  checks: {
    bg: get('scale.gray.9'),
    runBorderWidth: '0px',
    containerBorderWidth: '0px',
    textPrimary: get('scale.gray.0'),
    textSecondary: get('scale.gray.4'),
    textLink: get('scale.blue.3'),
    btnIcon: get('scale.gray.3'),
    btnHoverIcon: get('scale.gray.0'),
    btnHoverBg: 'rgba(255,255,255,0.125)',
    inputText: get('scale.gray.1'),
    inputPlaceholderText: get('scale.gray.4'),
    inputFocusText: get('scale.gray.4'),
    inputBg: get('scale.gray.8'),
    inputShadow: 'none',
    dropdownText: get('scale.gray.3'),
    dropdownBg: get('scale.gray.8'),
    dropdownBorder: get('scale.gray.7'),
    dropdownHoverText: get('scale.gray.0'),
    dropdownHoverBg: get('scale.gray.7'),
    dropdownBtnHoverText: get('scale.gray.0'),
    dropdownBtnHoverBg: get('scale.gray.8'),
    scrollbarThumbBg: get('scale.gray.6'),
    headerLabelText: get('scale.gray.2'),
    headerLabelOpenText: get('scale.gray.0'),
    headerBorder: get('scale.gray.8'),
    headerIcon: get('scale.gray.4'),
    lineText: get('scale.gray.2'),
    lineNumText: alpha(get('scale.gray.4'), 0.75),
    lineTimestampText: get('scale.gray.4'),
    lineHoverBg: get('scale.gray.8'),
    lineSelectedBg: alpha(get('scale.blue.4'), 0.15),
    lineSelectedNumText: get('scale.blue.3'),
    lineDtFmText: get('scale.gray.9'),
    lineDtFmBg: get('scale.yellow.5'),
    gateBg: alpha(get('scale.yellow.6'), 0.15),
    gateText: get('scale.gray.2'),
    gateWaitingText: get('scale.gray.3'),
    stepHeaderOpenBg: get('scale.gray.8'),
    stepErrorText: get('scale.red.3'),
    stepWarningText: get('scale.yellow.3'),
    loglineText: get('scale.gray.4'),
    loglineNumText: alpha(get('scale.gray.4'), 0.75),
    loglineDebugText: get('scale.purple.3'),
    loglineErrorText: get('scale.gray.2'),
    loglineErrorNumText: get('scale.red.3'),
    loglineErrorBg: alpha(get('scale.red.6'), 0.15),
    loglineWarningText: get('scale.gray.2'),
    loglineWarningNumText: get('scale.yellow.3'),
    loglineWarningBg: alpha(get('scale.yellow.6'), 0.15),
    loglineCommandText: get('scale.blue.3'),
    loglineSectionText: get('scale.green.3'),
    ansi: {
      black: get('scale.gray.9'),
      blackBright: get('scale.gray.8'),
      white: get('scale.gray.2'),
      whiteBright: get('scale.gray.2'),
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
      cyan: '#76e3ea',
      cyanBright: '#b3f0ff'
    }
  },
  introShelf: {
    gradientLeft: get('scale.blue.0'),
    gradientRight: get('scale.green.1'),
    gradientIn: get('scale.white'),
    gradientOut: alpha(get('scale.white'), 0)
  },
  marketingIcon: {
    primary: get('scale.blue.4'),
    secondary: get('scale.blue.3')
  },
  prettylights: {
    syntax: {
      comment: get('scale.gray.5'),
      constant: get('scale.blue.6'),
      entity: get('scale.purple.5'),
      storageModifierImport: get('scale.gray.9'),
      entityTag: get('scale.green.6'),
      keyword: get('scale.red.5'),
      string: get('scale.blue.8'),
      variable: get('scale.orange.6'),
      brackethighlighterUnmatched: get('scale.red.7'),
      invalidIllegalText: get('scale.gray.0'),
      invalidIllegalBg: get('scale.red.7'),
      carriageReturnText: get('scale.gray.0'),
      carriageReturnBg: get('scale.red.5'),
      stringRegexp: get('scale.green.6'),
      markupList: get('scale.yellow.9'),
      markupHeading: get('scale.blue.6'),
      markupItalic: get('scale.gray.9'),
      markupBold: get('scale.gray.9'),
      markupDeletedText: get('scale.red.7'),
      markupDeletedBg: get('scale.red.0'),
      markupInsertedText: get('scale.green.6'),
      markupInsertedBg: get('scale.green.0'),
      markupChangedText: get('scale.orange.6'),
      markupChangedBg: get('scale.orange.1'),
      markupIgnoredText: get('scale.gray.1'),
      markupIgnoredBg: get('scale.blue.6'),
      metaDiffRange: get('scale.purple.5'),
      brackethighlighterAngle: get('scale.gray.6'),
      sublimelinterGutterMark: get('scale.gray.4'),
      constantOtherReferenceLink: get('scale.blue.8')
    }
  },
  codemirror: {
    text: get('text.primary'),
    bg: get('bg.canvas'),
    guttersBg: get('bg.canvas'),
    guttermarkerText: get('scale.white'),
    guttermarkerSubtleText: get('scale.gray.3'),
    linenumberText: get('scale.gray.4'),
    cursor: get('scale.gray.9'),
    selectionBg: get('codeSelectionBg'),
    activelineBg: get('scale.gray.0'),
    matchingbracketText: get('scale.gray.9'),
    linesBg: get('bg.canvas'),
    syntax: {
      comment: get('scale.gray.5'),
      constant: get('scale.blue.6'),
      entity: get('scale.purple.5'),
      keyword: get('scale.red.5'),
      storage: get('scale.red.5'),
      string: get('scale.blue.8'),
      support: get('scale.blue.6'),
      variable: get('scale.orange.6')
    }
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
  }
}
