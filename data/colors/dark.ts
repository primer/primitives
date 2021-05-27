import {alpha, darken, get, lighten, desaturate, mix} from '../../src/utils'

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
  auto: {
    black: get('scale.white'),
    white: get('scale.black'),
    gray: [
      get('scale.gray.9'),
      get('scale.gray.8'),
      get('scale.gray.7'),
      get('scale.gray.6'),
      get('scale.gray.5'),
      get('scale.gray.4'),
      get('scale.gray.3'),
      get('scale.gray.2'),
      get('scale.gray.1'),
      get('scale.gray.0')
    ],
    blue: [
      get('scale.blue.9'),
      get('scale.blue.8'),
      get('scale.blue.7'),
      get('scale.blue.6'),
      get('scale.blue.5'),
      get('scale.blue.4'),
      get('scale.blue.3'),
      get('scale.blue.2'),
      get('scale.blue.1'),
      get('scale.blue.0')
    ],
    green: [
      get('scale.green.9'),
      get('scale.green.8'),
      get('scale.green.7'),
      get('scale.green.6'),
      get('scale.green.5'),
      get('scale.green.4'),
      get('scale.green.3'),
      get('scale.green.2'),
      get('scale.green.1'),
      get('scale.green.0')
    ],
    yellow: [
      get('scale.yellow.9'),
      get('scale.yellow.8'),
      get('scale.yellow.7'),
      get('scale.yellow.6'),
      get('scale.yellow.5'),
      get('scale.yellow.4'),
      get('scale.yellow.3'),
      get('scale.yellow.2'),
      get('scale.yellow.1'),
      get('scale.yellow.0')
    ],
    orange: [
      get('scale.orange.9'),
      get('scale.orange.8'),
      get('scale.orange.7'),
      get('scale.orange.6'),
      get('scale.orange.5'),
      get('scale.orange.4'),
      get('scale.orange.3'),
      get('scale.orange.2'),
      get('scale.orange.1'),
      get('scale.orange.0')
    ],
    red: [
      get('scale.red.9'),
      get('scale.red.8'),
      get('scale.red.7'),
      get('scale.red.6'),
      get('scale.red.5'),
      get('scale.red.4'),
      get('scale.red.3'),
      get('scale.red.2'),
      get('scale.red.1'),
      get('scale.red.0')
    ],
    purple: [
      get('scale.purple.9'),
      get('scale.purple.8'),
      get('scale.purple.7'),
      get('scale.purple.6'),
      get('scale.purple.5'),
      get('scale.purple.4'),
      get('scale.purple.3'),
      get('scale.purple.2'),
      get('scale.purple.1'),
      get('scale.purple.0')
    ],
    pink: [
      get('scale.pink.9'),
      get('scale.pink.8'),
      get('scale.pink.7'),
      get('scale.pink.6'),
      get('scale.pink.5'),
      get('scale.pink.4'),
      get('scale.pink.3'),
      get('scale.pink.2'),
      get('scale.pink.1'),
      get('scale.pink.0')
    ]
  },
  text: {
    primary: get('scale.gray.1'),
    secondary: get('scale.gray.3'),
    tertiary: get('scale.gray.3'),
    placeholder: get('scale.gray.5'),
    disabled: get('scale.gray.5'),
    inverse: get('scale.gray.9'),
    link: get('scale.blue.3'),
    danger: get('scale.red.4'),
    success: get('scale.green.2'),
    warning: get('scale.yellow.2'),
    white: get('scale.white')
  },
  icon: {
    primary: get('scale.gray.1'),
    secondary: get('scale.gray.4'),
    tertiary: get('scale.gray.5'),
    info: get('scale.blue.3'),
    danger: get('scale.red.4'),
    success: get('scale.green.2'),
    warning: get('scale.yellow.2')
  },
  border: {
    primary: get('scale.gray.6'),
    secondary: get('scale.gray.7'),
    tertiary: get('scale.gray.4'),
    overlay: get('scale.gray.6'),
    inverse: get('scale.white'),
    info: alpha(get('scale.blue.4'), 0.4),
    danger: alpha(get('scale.red.4'), 0.4),
    success: alpha(get('scale.green.3'), 0.4),
    warning: alpha(get('scale.yellow.4'), 0.4)
  },
  bg: {
    canvas: get('scale.gray.9'),
    canvasMobile: get('scale.black'),
    canvasInverse: get('scale.white'),
    canvasInset: darken(get('scale.gray.9'), 0.02),
    primary: get('scale.gray.9'),
    secondary: get('scale.gray.9'),
    tertiary: get('scale.gray.8'),
    overlay: mix(get('scale.gray.7'), get('scale.gray.8')),
    backdrop: alpha(get('scale.black'), 0.8),
    info: alpha(get('scale.blue.4'), 0.1),
    infoInverse: get('scale.blue.4'),
    danger: alpha(get('scale.red.4'), 0.1),
    dangerInverse: get('scale.red.5'),
    success: alpha(get('scale.green.4'), 0.1),
    successInverse: get('scale.green.4'),
    warning: alpha(get('scale.yellow.4'), 0.1),
    warningInverse: get('scale.yellow.4')
  },
  shadow: {
    small: '0 0 transparent',
    medium: (theme: any) => `0 3px 6px ${get('scale.black')(theme)}`,
    large: (theme: any) => `0 8px 24px ${get('scale.black')(theme)}`,
    extraLarge: (theme: any) => `0 12px 48px ${get('scale.black')(theme)}`,
    highlight: '0 0 transparent',
    inset: '0 0 transparent'
  },
  state: {
    hover: {
      primaryBg: get('scale.blue.5'),
      primaryBorder: get('scale.blue.4'),
      primaryText: get('scale.white'),
      primaryIcon: get('scale.white'),
      secondaryBg: get('scale.gray.8'),
      secondaryBorder: get('scale.gray.8')
    },
    selected: {
      primaryBg: get('scale.blue.5'),
      primaryBorder: get('scale.blue.4'),
      primaryText: get('scale.white'),
      primaryIcon: get('scale.white')
    },
    focus: {
      border: get('scale.blue.4'),
      shadow: (theme: any) => `0 0 0 3px ${get('scale.blue.8')(theme)}`
    }
  },
  fade: {
    fg10: get('fade.white10'),
    fg15: get('fade.white15'),
    fg30: get('fade.white30'),
    fg50: get('fade.white50'),
    fg70: get('fade.white70'),
    fg85: get('fade.white85'),
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
      text: get('scale.blue.2'),
      icon: get('scale.blue.2'),
      bg: alpha(get('scale.blue.4'), 0.1),
      border: alpha(get('scale.blue.4'), 0.4)
    },
    warn: {
      text: get('scale.yellow.2'),
      icon: get('scale.yellow.2'),
      bg: alpha(get('scale.yellow.4'), 0.1),
      border: alpha(get('scale.yellow.4'), 0.4)
    },
    error: {
      text: get('scale.red.3'),
      icon: get('scale.red.3'),
      bg: alpha(get('scale.red.4'), 0.1),
      border: alpha(get('scale.red.4'), 0.4)
    },
    success: {
      text: get('scale.green.2'),
      icon: get('scale.green.2'),
      bg: alpha(get('scale.green.4'), 0.1),
      border: alpha(get('scale.green.4'), 0.4)
    }
  },
  autocomplete: {
    shadow: (theme: any) => `0 16px 32px ${alpha(get('scale.black'), 0.85)(theme)}`,
    rowBorder: get('scale.gray.6')
  },
  blankslate: {
    icon: lighten(get('scale.gray.5'), 0.05)
  },
  btn: {
    text: get('scale.gray.1'),
    bg: get('scale.gray.7'),
    border: get('scale.gray.6'),
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
    primary: {
      text: '#ffffff',
      bg: get('scale.green.5'),
      border: get('scale.green.4'),
      shadow: '0 0 transparent',
      insetShadow: '0 0 transparent',
      hoverBg: get('scale.green.4'),
      hoverBorder: get('scale.green.3'),
      selectedBg: get('scale.green.5'),
      selectedShadow: '0 0 transparent',
      disabledText: alpha(get('scale.white'), 0.5),
      disabledBg: alpha(get('scale.green.5'), 0.6),
      disabledBorder: 'transparent',
      focusBg: get('scale.green.5'),
      focusBorder: get('scale.green.3'),
      focusShadow: (theme: any) => `0 0 0 3px ${alpha('#2ea44f', 0.4)(theme)}`,
      icon: get('scale.white'),
      counterBg: alpha(get('scale.white'), 0.2)
    },
    outline: {
      text: get('scale.blue.3'),
      hoverText: get('scale.blue.3'),
      hoverBg: get('scale.gray.6'),
      hoverBorder: get('scale.blue.3'),
      hoverShadow: (theme: any) => `0 1px 0 ${alpha(get('scale.black'), 0.1)(theme)}`,
      hoverInsetShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.white'), 0.03)(theme)}`,
      hoverCounterBg: alpha(get('scale.white'), 0.2),
      selectedText: get('scale.white'),
      selectedBg: get('scale.blue.7'),
      selectedBorder: get('fade.white10'),
      selectedShadow: '0 0 transparent',
      disabledText: alpha(get('scale.blue.3'), 0.5),
      disabledBg: get('scale.gray.9'),
      disabledCounterBg: alpha(get('scale.blue.5'), 0.05),
      focusBorder: get('scale.blue.3'),
      focusShadow: (theme: any) => `0 0 0 3px ${alpha(get('scale.blue.6'), 0.4)(theme)}`,
      counterBg: alpha(get('scale.blue.5'), 0.1)
    },
    danger: {
      text: get('scale.red.4'),
      hoverText: '#ffffff',
      hoverBg: get('scale.red.5'),
      hoverBorder: get('scale.red.4'),
      hoverShadow: '0 0 transparent',
      hoverInsetShadow: '0 0 transparent',
      hoverCounterBg: alpha('#fff', 0.2),
      selectedText: '#ffffff',
      selectedBg: get('scale.red.6'),
      selectedBorder: get('fade.white10'),
      selectedShadow: '0 0 transparent',
      disabledText: alpha(get('scale.red.4'), 0.5),
      disabledBg: get('scale.gray.9'),
      disabledCounterBg: alpha(get('scale.red.5'), 0.05),
      focusBorder: get('scale.red.4'),
      focusShadow: (theme: any) => `0 0 0 3px ${alpha(get('scale.red.6'), 0.4)(theme)}`,
      counterBg: alpha(get('scale.red.5'), 0.1),
      icon: get('scale.red.4'),
      hoverIcon: get('scale.white')
    },
    counterBg: get('scale.gray.6')
  },
  counter: {
    text: get('scale.gray.1'),
    bg: get('scale.gray.6'),
    primary: {
      text: get('scale.gray.1'),
      bg: get('scale.gray.4')
    },
    secondary: {
      text: get('scale.gray.3'),
      bg: alpha(get('scale.gray.3'), 0.2)
    }
  },
  dropdown: {
    shadow: (theme: any) => `0 16px 32px ${alpha(get('scale.black'), 0.85)(theme)}`
  },
  label: {
    border: get('scale.gray.6'),
    primary: {
      text: get('scale.gray.2'),
      border: get('scale.gray.4')
    },
    secondary: {
      text: get('scale.gray.3'),
      border: get('scale.gray.6')
    },
    info: {
      text: get('scale.blue.4'),
      border: alpha(get('scale.blue.4'), 0.4)
    },
    success: {
      text: get('scale.green.3'),
      border: alpha(get('scale.green.4'), 0.4)
    },
    warning: {
      text: get('scale.yellow.2'),
      border: alpha('#F2D35B', 0.4)
    },
    danger: {
      text: get('scale.red.4'),
      border: alpha(get('scale.red.4'), 0.4)
    },
    orange: {
      text: get('scale.orange.4'),
      border: alpha(get('scale.orange.4'), 0.4)
    }
  },
  input: {
    bg: get('scale.gray.9'),
    contrastBg: alpha(get('scale.black'), 0.5),
    border: get('scale.gray.7'),
    shadow: '0 0 transparent',
    disabledBg: get('scale.gray.8'),
    disabledBorder: get('scale.gray.6'),
    warningBorder: get('scale.yellow.3'),
    errorBorder: get('scale.red.4'),
    tooltip: {
      success: {
        text: get('scale.green.2'),
        bg: mix(get('scale.gray.9'), get('scale.green.4'), 0.1),
        border: mix(get('scale.gray.9'), get('scale.green.4'), 0.46)
      },
      warning: {
        text: get('scale.yellow.2'),
        bg: mix(get('scale.gray.9'), get('scale.yellow.4'), 0.1),
        border: mix(get('scale.gray.9'), get('scale.yellow.4'), 0.46)
      },
      error: {
        text: get('scale.red.3'),
        bg: mix(get('scale.gray.9'), get('scale.red.4'), 0.1),
        border: mix(get('scale.gray.9'), get('scale.red.4'), 0.46)
      }
    }
  },
  avatar: {
    bg: get('fade.white10'),
    border: get('fade.white10'),
    stackFade: get('scale.gray.6'),
    stackFadeMore: get('scale.gray.7'),
    childShadow: (theme: any) => `-2px -2px 0 ${get('scale.gray.9')(theme)}`
  },
  toast: {
    text: get('text.primary'),
    bg: get('scale.gray.6'),
    border: get('scale.gray.4'),
    shadow: get('shadow.large'),
    icon: get('scale.white'),
    iconBg: get('scale.blue.5'),
    iconBorder: get('scale.blue.4'),
    success: {
      text: get('text.primary'),
      border: get('scale.gray.4'),
      icon: get('scale.white'),
      iconBg: get('scale.green.4'),
      iconBorder: get('scale.green.3')
    },
    warning: {
      text: get('text.primary'),
      border: get('scale.gray.4'),
      icon: get('scale.white'),
      iconBg: get('scale.yellow.4'),
      iconBorder: get('scale.yellow.3')
    },
    danger: {
      text: get('text.primary'),
      border: get('scale.gray.4'),
      icon: get('scale.white'),
      iconBg: get('scale.red.5'),
      iconBorder: get('scale.red.4')
    },
    loading: {
      text: get('text.primary'),
      border: get('scale.gray.4'),
      icon: get('scale.white'),
      iconBg: get('scale.gray.4'),
      iconBorder: get('scale.gray.3')
    }
  },
  timeline: {
    text: get('scale.gray.2'),
    badgeBg: get('scale.gray.9'),
    badgeSuccessBorder: get('scale.green.4'),
    targetBadgeBorder: get('scale.blue.5'),
    targetBadgeShadow: get('scale.blue.7')
  },
  selectMenu: {
    borderSecondary: get('scale.gray.6'),
    shadow: (theme: any) => `0 0 18px ${alpha(get('scale.black'), 0.4)(theme)}`,
    backdropBg: get('fade.black50'),
    backdropBorder: get('scale.gray.5'),
    tapHighlight: alpha(get('scale.gray.6'), 0.5),
    tapFocusBg: get('scale.blue.8')
  },
  box: {
    blueBorder: get('scale.blue.7'),
    rowYellowBg: alpha('#EBC440', 0.1),
    rowBlueBg: alpha(get('scale.blue.2'), 0.1),
    headerBlueBg: get('scale.gray.9'),
    headerBlueBorder: get('scale.gray.6'),
    borderInfo: alpha(get('scale.blue.4'), 0.4),
    bgInfo: alpha(get('scale.blue.4'), 0.1),
    borderWarning: alpha(get('scale.yellow.4'), 0.4),
    bgWarning: alpha(get('scale.yellow.4'), 0.1)
  },
  branchName: {
    text: get('scale.gray.1'),
    icon: get('scale.gray.2'),
    bg: alpha(get('scale.blue.3'), 0.1),
    link: {
      text: get('scale.blue.3'),
      icon: get('scale.blue.3'),
      bg: alpha(get('scale.blue.3'), 0.1)
    }
  },
  markdown: {
    codeBg: alpha(get('scale.gray.0'), 0.15),
    frameBorder: lighten(get('scale.gray.6'), 0.05),
    blockquoteBorder: lighten(get('scale.gray.6'), 0.05),
    tableBorder: lighten(get('scale.gray.6'), 0.05),
    tableTrBorder: darken(get('scale.gray.6'), 0.04)
  },
  menu: {
    headingText: get('scale.gray.3'),
    borderActive: '#f78166',
    bgActive: get('scale.gray.8')
  },
  sidenav: {
    selectedBg: get('scale.gray.7'),
    borderActive: '#f78166'
  },
  header: {
    text: get('fade.white70'),
    bg: get('scale.gray.8'),
    logo: get('scale.white')
  },
  filterItem: {
    barBg: darken(get('scale.gray.8'), 0.02)
  },
  hiddenTextExpander: {
    bg: get('scale.gray.7'),
    bgHover: get('scale.gray.6')
  },
  dragAndDrop: {
    border: darken(get('scale.gray.6'), 0.05)
  },
  uploadEnabled: {
    border: lighten(get('scale.gray.6'), 0.05),
    borderFocused: lighten(get('scale.blue.5'), 0.8)
  },
  previewableCommentForm: {
    border: darken(get('scale.gray.6'), 0.05)
  },
  underlinenav: {
    border: alpha(get('scale.gray.6'), 0),
    borderHover: get('scale.gray.6'),
    borderActive: '#f78166',
    text: get('scale.gray.3'),
    textHover: get('scale.gray.1'),
    textActive: get('scale.gray.1'),
    icon: get('scale.gray.4'),
    iconHover: get('scale.gray.1'),
    iconActive: get('scale.gray.1'),
    counterText: get('scale.gray.3'),
    counterBg: alpha(get('scale.gray.3'), 0.2)
  },
  verifiedBadge: {
    text: get('scale.green.3'),
    bg: alpha(get('scale.green.3'), 0.1),
    border: alpha(get('scale.green.3'), 0.4)
  },
  socialCount: {
    bg: get('scale.gray.7')
  },
  tooltip: {
    text: get('scale.white'),
    bg: get('scale.gray.4')
  },
  headerSearch: {
    bg: get('scale.gray.9'),
    border: get('scale.gray.7')
  },
  searchKeyword: {
    hl: alpha(get('scale.yellow.4'), 0.4)
  },
  diffstat: {
    neutralBg: get('scale.gray.6'),
    neutralBorder: get('fade.white10'),
    deletionBg: get('scale.red.5'),
    deletionBorder: get('scale.red.4'),
    additionBg: get('scale.green.5'),
    additionBorder: get('scale.green.4')
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
  filesExplorerIcon: get('scale.gray.4'),
  hlAuthorBg: get('scale.blue.9'),
  hlAuthorBorder: get('scale.blue.7'),
  logoSubdued: get('scale.gray.6'),
  discussionBorder: desaturate(get('scale.green.6'), 0.4),
  discussionBgSuccess: alpha(get('scale.green.4'), 0.1),
  actionsWorkflowTableStickyBg: alpha(get('scale.gray.9'), 0.95),
  repoLanguageColorBorder: alpha(get('scale.white'), 0.2),
  codeSelectionBg: alpha(get('scale.blue.2'), 0.3),
  highlight: {
    text: '#ffd467',
    bg: 'rgba(204,143,44,0.38)'
  },
  blob: {
    lineHighlightBg: alpha(get('scale.yellow.3'), 0.15),
    lineHighlightBorder: get('scale.yellow.2')
  },
  diff: {
    addition: {
      text: get('scale.green.2'),
      bg: get('diffBlob.addition.lineBg'),
      border: get('scale.green.6')
    },
    deletion: {
      text: get('scale.red.4'),
      bg: get('diffBlob.deletion.lineBg'),
      border: get('scale.red.6')
    },
    change: {
      text: get('scale.yellow.2'),
      bg: get('scale.yellow.9'),
      border: get('scale.yellow.5')
    }
  },
  diffBlob: {
    numText: get('fade.white30'),
    numHoverText: alpha(get('scale.white'), 0.6),
    addition: {
      numText: get('scale.green.3'),
      numHoverText: get('scale.green.1'),
      numBg: alpha(get('scale.green.4'), 0.1),
      lineBg: alpha(get('scale.green.4'), 0.2),
      wordBg: alpha(get('scale.green.4'), 0.55)
    },
    deletion: {
      numText: get('scale.red.4'),
      numHoverText: get('scale.red.2'),
      numBg: alpha(get('scale.red.5'), 0.1),
      lineBg: alpha(get('scale.red.5'), 0.2),
      wordBg: alpha(get('scale.red.5'), 0.5)
    },
    hunk: {
      text: get('scale.gray.3'),
      numBg: alpha(get('scale.blue.3'), 0.15),
      lineBg: alpha(get('scale.blue.3'), 0.1)
    },
    emptyBlockBg: get('scale.gray.8'),
    selectedLineHighlightBg: alpha(get('scale.yellow.4'), 0.1),
    selectedLineHighlightBorder: get('scale.yellow.4'),
    selectedLineHighlightMixBlendMode: 'normal',
    expander: {
      icon: get('scale.gray.3'),
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
    bg: get('scale.gray.8'),
    text: get('scale.gray.1'),
    icon: get('scale.gray.1'),
    inputBg: get('scale.gray.9'),
    inputBorder: get('scale.gray.7'),
    inputIcon: get('scale.gray.7'),
    inputPlaceholder: get('scale.gray.5')
  },
  calendarGraph: {
    dayBg: get('scale.gray.8'),
    dayBorder: 'rgba(27,31,35,0.06)',
    day1Bg: '#0e4429',
    day2Bg: '#006d32',
    day3Bg: '#26a641',
    day4Bg: '#39d353',
    day4Border: 'rgba(255,255,255,0.05)',
    day3Border: 'rgba(255,255,255,0.05)',
    day2Border: 'rgba(255,255,255,0.05)',
    day1Border: 'rgba(255,255,255,0.05)'
  },
  footerInvertocat: {
    octicon: get('scale.gray.6'),
    octiconHover: get('scale.gray.4')
  },
  prState: {
    draft: {
      text: get('scale.gray.3'),
      bg: alpha(get('scale.gray.3'), 0.1),
      border: alpha(get('scale.gray.3'), 0.4)
    },
    open: {
      text: get('scale.green.3'),
      bg: alpha(get('scale.green.3'), 0.1),
      border: alpha(get('scale.green.3'), 0.4)
    },
    merged: {
      text: get('scale.purple.4'),
      bg: alpha(get('scale.purple.3'), 0.1),
      border: alpha(get('scale.purple.3'), 0.4)
    },
    closed: {
      text: get('scale.red.4'),
      bg: alpha(get('scale.red.5'), 0.1),
      border: alpha(get('scale.red.5'), 0.4)
    }
  },
  topicTag: {
    text: get('scale.blue.3'),
    bg: alpha(get('scale.blue.4'), 0.1),
    hoverBg: alpha(get('scale.blue.4'), 0.2),
    activeBg: alpha(get('scale.blue.4'), 0.15)
  },
  mergeBox: {
    successIconBg: alpha(get('scale.green.4'), 0.1),
    successIconText: get('scale.green.3'),
    successIconBorder: alpha(get('scale.green.4'), 0.4),
    successIndicatorBg: get('scale.green.5'),
    successIndicatorBorder: get('scale.green.4'),
    mergedIconBg: alpha(get('scale.purple.3'), 0.1),
    mergedIconText: get('scale.purple.4'),
    mergedIconBorder: alpha(get('scale.purple.3'), 0.4),
    mergedBoxBorder: alpha(get('scale.purple.3'), 0.4),
    neutralIconBg: alpha(get('scale.gray.1'), 0.1),
    neutralIconText: get('scale.gray.3'),
    neutralIconBorder: alpha(get('scale.gray.1'), 0.4),
    neutralIndicatorBg: get('scale.gray.5'),
    neutralIndicatorBorder: get('scale.gray.4'),
    warningIconBg: alpha(get('scale.yellow.4'), 0.1),
    warningIconText: get('scale.yellow.2'),
    warningIconBorder: alpha(get('scale.yellow.4'), 0.4),
    warningBoxBorder: alpha(get('scale.yellow.4'), 0.4),
    warningMergeHighlight: alpha(get('scale.yellow.4'), 0.1),
    errorIconBg: alpha(get('scale.red.4'), 0.1),
    errorIconText: get('scale.red.4'),
    errorIconBorder: alpha(get('scale.red.4'), 0.4),
    errorIndicatorBg: get('scale.red.5'),
    errorIndicatorBorder: get('scale.red.4')
  },
  project: {
    cardBg: get('scale.gray.8'),
    headerBg: get('scale.gray.9'),
    sidebarBg: get('scale.gray.8'),
    gradientIn: get('scale.gray.8'),
    gradientOut: alpha(get('scale.gray.8'), 0)
  },
  checks: {
    bg: get('bg.canvasInset'),
    runBorderWidth: '1px',
    containerBorderWidth: '1px',
    textPrimary: get('text.primary'),
    textSecondary: get('text.secondary'),
    textLink: get('text.link'),
    btnIcon: get('icon.secondary'),
    btnHoverIcon: get('text.primary'),
    btnHoverBg: get('btn.hoverBg'),
    inputText: get('text.secondary'),
    inputPlaceholderText: get('text.placeholder'),
    inputFocusText: get('text.primary'),
    inputBg: get('input.bg'),
    inputShadow: (theme: any) => `0 0 0 1px ${get('scale.gray.7')(theme)}`,
    dropdownText: get('text.primary'),
    dropdownBg: get('bg.overlay'),
    dropdownBorder: get('border.overlay'),
    dropdownHoverText: get('state.hover.primaryText'),
    dropdownHoverBg: get('state.hover.primaryBg'),
    dropdownBtnHoverText: get('state.hover.primaryText'),
    dropdownBtnHoverBg: get('state.hover.secondaryBg'),
    scrollbarThumbBg: get('scale.gray.6'),
    headerLabelText: get('text.secondary'),
    headerLabelOpenText: get('text.primary'),
    headerBorder: get('border.secondary'),
    headerIcon: get('icon.secondary'),
    lineText: get('text.secondary'),
    lineNumText: get('text.tertiary'),
    lineTimestampText: get('text.tertiary'),
    lineHoverBg: get('state.hover.secondaryBg'),
    lineSelectedBg: get('bg.info'),
    lineSelectedNumText: get('text.link'),
    lineDtFmText: get('text.inverse'),
    lineDtFmBg: get('scale.yellow.3'),
    gateBg: alpha(get('scale.yellow.6'), 0.15),
    gateText: get('text.secondary'),
    gateWaitingText: get('text.warning'),
    stepHeaderOpenBg: get('state.hover.secondaryBg'),
    stepErrorText: get('text.danger'),
    stepWarningText: get('text.warning'),
    loglineText: get('scale.gray.4'),
    loglineNumText: get('text.tertiary'),
    loglineDebugText: get('scale.purple.3'),
    loglineErrorText: get('text.secondary'),
    loglineErrorNumText: get('text.tertiary'),
    loglineErrorBg: get('bg.danger'),
    loglineWarningText: get('text.secondary'),
    loglineWarningNumText: get('text.warning'),
    loglineWarningBg: get('bg.warning'),
    loglineCommandText: get('scale.blue.3'),
    loglineSectionText: get('text.success'),
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
    gradientLeft: alpha(get('scale.blue.4'), 0.1),
    gradientRight: alpha(get('scale.green.4'), 0.1),
    gradientIn: get('scale.gray.9'),
    gradientOut: alpha(get('scale.gray.9'), 0)
  },
  marketingIcon: {
    primary: get('scale.blue.2'),
    secondary: get('scale.blue.5')
  },
  prettylights: {
    syntax: {
      comment: get('scale.gray.3'),
      constant: get('scale.blue.2'),
      entity: get('scale.purple.2'),
      storageModifierImport: get('scale.gray.1'),
      entityTag: get('scale.green.1'),
      keyword: get('scale.red.3'),
      string: get('scale.blue.1'),
      variable: get('scale.orange.2'),
      brackethighlighterUnmatched: get('scale.red.4'),
      invalidIllegalText: get('scale.white'),
      invalidIllegalBg: get('scale.red.7'),
      carriageReturnText: get('scale.white'),
      carriageReturnBg: get('scale.red.6'),
      stringRegexp: get('scale.green.1'),
      markupList: get('scale.yellow.1'),
      markupHeading: get('scale.blue.5'),
      markupItalic: get('scale.gray.1'),
      markupBold: get('scale.gray.1'),
      markupDeletedText: get('scale.red.0'),
      markupDeletedBg: get('scale.red.8'),
      markupInsertedText: get('scale.green.0'),
      markupInsertedBg: get('scale.green.8'),
      markupChangedText: get('scale.orange.0'),
      markupChangedBg: get('scale.orange.8'),
      markupIgnoredText: get('scale.gray.1'),
      markupIgnoredBg: get('scale.blue.6'),
      metaDiffRange: get('scale.purple.2'),
      brackethighlighterAngle: get('scale.gray.3'),
      sublimelinterGutterMark: get('scale.gray.5'),
      constantOtherReferenceLink: get('scale.blue.1')
    }
  },
  codemirror: {
    text: get('scale.gray.1'),
    bg: get('bg.canvas'),
    guttersBg: get('bg.canvas'),
    guttermarkerText: get('scale.gray.9'),
    guttermarkerSubtleText: get('scale.gray.4'),
    linenumberText: get('scale.gray.3'),
    cursor: get('scale.white'),
    selectionBg: get('codeSelectionBg'),
    activelineBg: get('scale.gray.8'),
    matchingbracketText: get('scale.gray.1'),
    linesBg: get('bg.canvas'),
    syntax: {
      comment: get('scale.gray.3'),
      constant: get('scale.blue.2'),
      entity: get('scale.purple.2'),
      keyword: get('scale.red.3'),
      storage: get('scale.red.3'),
      string: get('scale.blue.1'),
      support: get('scale.blue.2'),
      variable: get('scale.orange.2')
    }
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
