import {alpha, get, lighten, darken, desaturate, mix} from '../../../src/utils'

// Variables to be removed in the next major release

export default {
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
    borderFocused: lighten(get('scale.blue.5'), 0.08)
  },
  previewableCommentForm: {
    border: darken(get('scale.gray.6'), 0.05)
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
  topicTag: {
    text: get('scale.blue.3'),
    bg: alpha(get('scale.blue.4'), 0.1),
    hoverBg: alpha(get('scale.blue.4'), 0.2),
    activeBg: alpha(get('scale.blue.4'), 0.15)
  },
  footerInvertocat: {
    octicon: get('scale.gray.6'),
    octiconHover: get('scale.gray.4')
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
  diffstat: {
    neutralBg: get('scale.gray.6'),
    neutralBorder: get('fade.white10'),
    deletionBg: get('scale.red.5'),
    deletionBorder: get('scale.red.4'),
    additionBg: get('scale.green.5'),
    additionBorder: get('scale.green.4')
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
  selectMenu: {
    borderSecondary: get('scale.gray.6'),
    shadow: (theme: any) => `0 0 18px ${alpha(get('scale.black'), 0.4)(theme)}`,
    backdropBg: get('fade.black50')
  },
  sidenav: {
    borderActive: '#f78166'
  },
  menu: {
    headingText: get('scale.gray.3'),
    borderActive: '#f78166'
  },
  project: {
    cardBg: get('scale.gray.8')
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
  diffBlob: {
    numText: get('fade.white30'),
    numHoverText: alpha(get('scale.white'), 0.6),
    addition: {
      numHoverText: get('scale.green.1'),
      lineBg: alpha(get('scale.green.4'), 0.2),
      wordBg: alpha(get('scale.green.4'), 0.55)
    },
    deletion: {
      numHoverText: get('scale.red.2'),
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
    expander: {
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
  introShelf: {
    gradientLeft: alpha(get('scale.blue.4'), 0.1),
    gradientRight: alpha(get('scale.green.4'), 0.1),
    gradientIn: get('scale.gray.9'),
    gradientOut: alpha(get('scale.gray.9'), 0)
  }
}
