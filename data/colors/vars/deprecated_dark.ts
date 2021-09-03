import {alpha, get} from '../../../src/utils'

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
    primary: get('fg.default'),
    secondary: get('fg.muted'),
    tertiary: get('fg.muted'),
    placeholder: get('fg.subtle'),
    disabled: get('fg.muted'),
    inverse: get('fg.onEmphasis'),
    link: get('accent.fg'),
    danger: get('danger.fg'),
    success: get('success.fg'),
    warning: get('attention.fg'),
    white: get('scale.white')
  },
  icon: {
    primary: get('fg.default'),
    secondary: get('fg.muted'),
    tertiary: get('fg.muted'),
    info: get('accent.fg'),
    danger: get('danger.fg'),
    success: get('success.fg'),
    warning: get('attention.fg')
  },
  border: {
    primary: get('border.default'),
    secondary: get('border.muted'),
    tertiary: get('neutral.muted'),
    overlay: get('border.default'),
    inverse: get('fg.onEmphasis'), // or move to marketing
    info: get('accent.emphasis'),
    danger: get('danger.emphasis'),
    success: get('success.emphasis'),
    warning: get('attention.emphasis')
  },
  bg: {
    canvas: get('canvas.default'),
    canvasMobile: 'transparent',
    canvasInverse: get('neutral.emphasis'),
    canvasInset: get('canvas.inset'),
    primary: get('canvas.default'),
    secondary: get('canvas.subtle'),
    tertiary: get('canvas.subtle'),
    overlay: get('canvas.overlay'),
    backdrop: get('primer.canvas.backdrop'),
    info: get('accent.subtle'),
    infoInverse: get('accent.emphasis'),
    danger: get('danger.subtle'),
    dangerInverse: get('danger.emphasis'),
    success: get('success.subtle'),
    successInverse: get('success.emphasis'),
    warning: get('attention.subtle'),
    warningInverse: get('attention.emphasis')
  },
  shadow: {
    highlight: get('primer.shadow.highlight'),
    inset: get('primer.shadow.inset')
  },
  state: {
    hover: {
      primaryBg: get('accent.emphasis'),
      primaryBorder: get('accent.emphasis'),
      primaryText: get('fg.onEmphasis'),
      primaryIcon: get('fg.onEmphasis'),
      secondaryBg: get('neutral.subtle'),
      secondaryBorder: get('neutral.subtle')
    },

    selected: {
      primaryBg: get('accent.emphasis'),
      primaryBorder: get('accent.emphasis'),
      primaryText: get('fg.onEmphasis'),
      primaryIcon: get('fg.onEmphasis')
    },

    focus: {
      border: get('accent.emphasis'),
      shadow: get('primer.shadow.focus') // blue focus ring
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
      text: get('fg.default'),
      icon: get('accent.fg'),
      bg: get('accent.subtle'),
      border: get('accent.muted')
    },
    warn: {
      text: get('fg.default'),
      icon: get('attention.fg'),
      bg: get('attention.subtle'),
      border: get('attention.muted')
    },
    error: {
      text: get('fg.default'),
      icon: get('danger.fg'),
      bg: get('danger.subtle'),
      border: get('danger.muted')
    },
    success: {
      text: get('fg.default'),
      icon: get('success.fg'),
      bg: get('success.subtle'),
      border: get('success.muted')
    }
  },

  autocomplete: {
    shadow: get('shadow.medium'),
    rowBorder: get('border.muted')
  },
  blankslate: {
    icon: get('fg.muted')
  },
  counter: {
    text: get('fg.default'),
    bg: get('neutral.muted'),
    primary: {
      text: get('fg.onEmphasis'),
      bg: get('neutral.emphasis')
    },
    secondary: {
      text: get('fg.muted'),
      bg: get('neutral.subtle')
    }
  },
  box: {
    blueBorder: get('accent.muted'),
    rowYellowBg: get('attention.subtle'),
    rowBlueBg: get('accent.subtle'),
    headerBlueBg: get('accent.subtle'),
    headerBlueBorder: get('accent.muted'),
    borderInfo: get('accent.muted'),
    bgInfo: get('accent.subtle'),
    borderWarning: get('attention.muted'),
    bgWarning: get('attention.subtle')
  },
  branchName: {
    text: get('fg.muted'),
    icon: get('fg.muted'),
    bg: get('accent.subtle'),
    link: {
      text: get('accent.fg'),
      icon: get('accent.fg'),
      bg: get('accent.subtle')
    }
  },

  markdown: {
    codeBg: get('neutral.muted'),
    frameBorder: get('border.default'),
    blockquoteBorder: get('border.default'),
    tableBorder: get('border.default'),
    tableTrBorder: get('border.muted')
  },
  filterItem: {
    barBg: get('neutral.subtle')
  },
  hiddenTextExpander: {
    bg: get('neutral.muted'),
    bgHover: get('accent.muted')
  },
  dragAndDrop: {
    border: get('border.default')
  },
  uploadEnabled: {
    border: get('border.default'),
    borderFocused: get('accent.emphasis')
  },
  previewableCommentForm: {
    border: get('border.default')
  },
  verifiedBadge: {
    text: get('success.fg'),
    bg: get('canvas.default'),
    border: get('border.default')
  },
  socialCount: {
    bg: get('canvas.default')
  },
  tooltip: {
    text: get('fg.onEmphasis'),
    bg: get('neutral.emphasisPlus')
  },
  filesExplorerIcon: get('accent.fg'),
  hlAuthorBg: get('accent.subtle'),
  hlAuthorBorder: get('accent.muted'),
  logoSubdued: get('neutral.muted'),
  discussionBorder: get('success.muted'),
  discussionBgSuccess: get('success.emphasis'),
  actionsWorkflowTableStickyBg: get('primer.canvas.sticky'),
  repoLanguageColorBorder: get('primer.border.contrast'),
  codeSelectionBg: get('accent.muted'),
  highlight: {
    text: get('fg.default'),
    bg: get('attention.subtle')
  },
  blob: {
    lineHighlightBg: get('attention.subtle'),
    lineHighlightBorder: get('attention.muted')
  },
  topicTag: {
    text: get('accent.fg'),
    bg: get('accent.subtle'),
    hoverBg: get('accent.emphasis'),
    activeBg: get('accent.subtle')
  },
  footerInvertocat: {
    octicon: get('fg.subtle'),
    octiconHover: get('fg.muted')
  },
  dropdown: {
    shadow: get('shadow.large')
  },
  label: {
    border: get('border.default'),
    primary: {
      text: get('fg.default'),
      border: get('neutral.emphasis')
    },
    secondary: {
      text: get('fg.muted'),
      border: get('border.default')
    },
    info: {
      text: get('accent.fg'),
      border: get('accent.emphasis')
    },
    success: {
      text: get('success.fg'),
      border: get('success.emphasis')
    },
    warning: {
      text: get('attention.fg'),
      border: get('attention.emphasis')
    },
    danger: {
      text: get('danger.fg'),
      border: get('danger.emphasis')
    },
    orange: {
      text: get('severe.fg'),
      border: get('severe.emphasis')
    }
  },
  input: {
    bg: get('canvas.default'),
    contrastBg: get('canvas.inset'),
    border: get('border.default'),
    shadow: get('primer.shadow.inset'),
    disabledBorder: get('border.default'),
    warningBorder: get('attention.emphasis'),
    errorBorder: get('danger.emphasis'),
    tooltip: {
      success: {
        text: get('fg.default'),
        bg: get('success.subtle'),
        border: get('success.muted')
      },
      warning: {
        text: get('fg.default'),
        bg: get('attention.subtle'),
        border: get('attention.muted')
      },
      error: {
        text: get('fg.default'),
        bg: get('danger.subtle'),
        border: get('danger.muted')
      }
    }
  },
  toast: {
    text: get('fg.default'),
    bg: get('canvas.default'),
    border: get('border.default'),
    shadow: get('shadow.large'),
    icon: get('fg.onEmphasis'),
    iconBg: get('accent.emphasis'),
    iconBorder: 'transparent',
    success: {
      text: get('fg.default'),
      border: get('border.default'),
      icon: get('fg.onEmphasis'),
      iconBg: get('success.emphasis'),
      iconBorder: 'transparent'
    },
    warning: {
      text: get('fg.default'),
      border: get('border.default'),
      icon: get('fg.default'),
      iconBg: get('attention.emphasis'),
      iconBorder: 'transparent'
    },
    danger: {
      text: get('fg.default'),
      border: get('border.default'),
      icon: get('fg.onEmphasis'),
      iconBg: get('danger.emphasis'),
      iconBorder: 'transparent'
    },
    loading: {
      text: get('fg.default'),
      border: get('border.default'),
      icon: get('fg.onEmphasis'),
      iconBg: get('neutral.emphasis'),
      iconBorder: 'transparent'
    }
  },
  timeline: {
    text: get('fg.muted'),
    badgeSuccessBorder: 'transparent',
    targetBadgeBorder: get('accent.emphasis'),
    targetBadgeShadow: get('accent.muted')
  },
  diffstat: {
    neutralBg: get('neutral.muted'),
    neutralBorder: get('border.subtle'),
    deletionBorder: get('border.subtle'),
    additionBorder: get('border.subtle'),
    deletionBg: get('danger.emphasis')
  },
  diff: {
    addition: {
      text: get('fg.default'),
      bg: get('success.subtle'),
      border: get('success.muted')
    },
    deletion: {
      text: get('fg.default'),
      bg: get('danger.subtle'),
      border: get('danger.muted')
    },
    change: {
      text: get('attention.fg'),
      bg: get('attention.subtle'),
      border: get('attention.muted')
    }
  },
  mergeBox: {
    successIconBg: get('success.emphasis'),
    successIconText: get('fg.onEmphasis'),
    successIconBorder: 'transparent',
    successIndicatorBg: get('success.emphasis'),
    successIndicatorBorder: 'transparent',
    mergedIconBg: get('done.emphasis'),
    mergedIconText: get('fg.onEmphasis'),
    mergedIconBorder: 'transparent',
    mergedBoxBorder: get('done.emphasis'),
    neutralIconBg: get('neutral.emphasis'),
    neutralIconText: get('fg.onEmphasis'),
    neutralIconBorder: 'transparent',
    neutralIndicatorBg: get('neutral.emphasis'),
    neutralIndicatorBorder: 'transparent',
    warningIconBg: get('attention.emphasis'),
    warningIconText: get('fg.onEmphasis'),
    warningIconBorder: 'transparent',
    warningBoxBorder: get('attention.emphasis'),
    warningMergeHighlight: 'transparent',
    errorIconBg: get('danger.emphasis'),
    errorIconText: get('fg.onEmphasis'),
    errorIconBorder: 'transparent',
    errorIndicatorBg: get('danger.emphasis'),
    errorIndicatorBorder: 'transparent'
  },
  underlinenav: {
    border: 'transparent',
    borderHover: get('neutral.muted'),
    borderActive: get('primer.border.active'),
    text: get('fg.default'),
    textHover: get('fg.default'),
    textActive: get('fg.default'),
    icon: get('fg.subtle'),
    iconHover: get('fg.subtle'),
    iconActive: get('fg.default'),
    counterText: get('fg.default'),
    counterBg: get('neutral.muted')
  },
  selectMenu: {
    borderSecondary: get('border.muted'),
    shadow: get('shadow.large'),
    backdropBg: get('primer.canvas.backdrop')
  },
  sidenav: {
    borderActive: get('primer.border.active')
  },
  menu: {
    headingText: get('fg.default'),
    borderActive: get('primer.border.active')
  },
  project: {
    cardBg: get('canvas.overlay')
  },
  prState: {
    draft: {
      text: get('fg.onEmphasis'),
      bg: get('neutral.emphasis'),
      border: 'transparent'
    },
    open: {
      text: get('fg.onEmphasis'),
      bg: get('success.emphasis'),
      border: 'transparent'
    },
    merged: {
      text: get('fg.onEmphasis'),
      bg: get('done.emphasis'),
      border: 'transparent'
    },
    closed: {
      text: get('fg.onEmphasis'),
      bg: get('danger.emphasis'),
      border: 'transparent'
    }
  },
  diffBlob: {
    numText: get('fg.subtle'),
    numHoverText: get('fg.default'),
    addition: {
      numHoverText: get('fg.default')
    },
    deletion: {
      numHoverText: get('fg.default'),
      lineBg: get('danger.subtle'),
      wordBg: get('danger.muted')
    },
    hunk: {
      text: get('fg.muted'),
      numBg: get('accent.muted'),
      lineBg: get('accent.subtle')
    },
    emptyBlockBg: get('neutral.subtle'),
    selectedLineHighlightBg: get('attention.subtle'),
    selectedLineHighlightBorder: get('attention.muted'),
    expander: {
      hoverIcon: get('fg.onEmphasis'),
      hoverBg: get('accent.emphasis')
    },
    commentButton: {
      icon: get('fg.onEmphasis'),
      bg: get('accent.emphasis'),
      gradientBg: 'transparent'
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
    gradientLeft: get('accent.subtle'),
    gradientRight: get('success.subtle'),
    gradientIn: get('canvas.default'),
    gradientOut: alpha(get('scale.white'), 0)
  }
}
