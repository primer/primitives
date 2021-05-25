import {get} from '../../../src/utils'

// Variables to be removed in the next major release

// Every variable in this file must map to a functional variable (e.g. get('fg.default')).
// Don't use hex codes (e.g. '#fff') or scale variables (e.g. get('scale.gray.5')).

const deprecated = '#ff0000'
const unset = 'transparent'

export default {
  text: {
    primary: get('fg.default'),
    secondary: get('fg.muted'),
    tertiary: get('fg.inactive'),
    placeholder: get('fg.inactive'),
    disabled: get('fg.inactive'),
    inverse: get('fg.onEmphasis'),
    link: get('accent.fg'),
    danger: get('danger.fg'),
    success: get('success.fg'),
    warning: get('warning.fg'),
    white: get('fg.onEmphasis')
  },
  icon: {
    primary: get('fg.default'),
    secondary: get('fg.muted'),
    tertiary: get('fg.inactive'),
    info: get('accent.fg'),
    danger: get('danger.fg'),
    success: get('success.fg'),
    warning: get('warning.fg')
  },
  border: {
    primary: get('border.default'),
    secondary: get('border.divider'),
    tertiary: get('neutral.highlighter'),
    overlay: get('border.default'),
    inverse: get('fg.onEmphasis'), // or move to marketing
    info: get('accent.emphasis'),
    danger: get('danger.emphasis'),
    success: get('success.emphasis'),
    warning: get('warning.emphasis')
  },
  bg: {
    canvas: get('canvas.default'),
    canvasMobile: unset,
    canvasInverse: get('neutral.emphasis'),
    canvasInset: get('canvas.inset'),
    primary: get('canvas.default'),
    secondary: get('neutral.muted'),
    tertiary: get('neutral.muted'),
    overlay: get('canvas.overlay'),
    backdrop: get('primer.canvas.backdrop'),
    info: get('accent.muted'),
    infoInverse: get('accent.emphasis'),
    danger: get('danger.muted'),
    dangerInverse: get('danger.emphasis'),
    success: get('success.muted'),
    successInverse: get('success.emphasis'),
    warning: get('warning.muted'),
    warningInverse: get('warning.emphasis')
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
      secondaryBg: get('neutral.muted'),
      secondaryBorder: get('neutral.muted')
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
  alert: {
    info: {
      text: get('fg.default'),
      icon: get('accent.fg'),
      bg: get('accent.muted'),
      border: get('accent.highlighter')
    },
    warn: {
      text: get('fg.default'),
      icon: get('warning.fg'),
      bg: get('warning.muted'),
      border: get('warning.highlighter')
    },
    error: {
      text: get('fg.default'),
      icon: get('danger.fg'),
      bg: get('danger.muted'),
      border: get('danger.highlighter')
    },
    success: {
      text: get('fg.default'),
      icon: get('success.fg'),
      bg: get('success.muted'),
      border: get('success.highlighter')
    }
  },
  autocomplete: {
    shadow: get('shadow.medium'),
    rowBorder: get('border.divider')
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
      bg: get('neutral.muted')
    }
  },
  box: {
    blueBorder: get('accent.highlighter'),
    rowYellowBg: get('warning.muted'),
    rowBlueBg: get('accent.muted'),
    headerBlueBg: get('accent.muted'),
    headerBlueBorder: get('accent.highlighter'),
    borderInfo: get('accent.highlighter'),
    bgInfo: get('accent.muted'),
    borderWarning: get('warning.highlighter'),
    bgWarning: get('warning.muted')
  },
  branchName: {
    text: get('fg.muted'),
    icon: get('fg.muted'),
    bg: get('neutral.muted'),
    link: {
      text: get('accent.fg'),
      icon: get('accent.fg'),
      bg: get('accent.muted')
    }
  },
  markdown: {
    codeBg: get('neutral.muted'),
    frameBorder: get('border.default'),
    blockquoteBorder: get('border.default'),
    tableBorder: get('border.default'),
    tableTrBorder: get('border.divider')
  },
  filterItem: {
    barBg: get('neutral.muted')
  },
  hiddenTextExpander: {
    bg: get('neutral.highlighter'),
    bgHover: get('accent.highlighter')
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
    bg: get('neutral.emphasis')
  },
  searchKeyword: {
    hl: get('warning.muted')
  },
  filesExplorerIcon: get('accent.fg'),
  hlAuthorBg: get('accent.muted'),
  hlAuthorBorder: get('accent.highlighter'),
  logoSubdued: get('neutral.highlighter'),
  discussionBorder: get('success.highlighter'),
  discussionBgSuccess: get('success.emphasis'),
  actionsWorkflowTableStickyBg: get('primer.canvas.sticky'),
  repoLanguageColorBorder: get('primer.border.contrast'),
  codeSelectionBg: get('accent.highlighter'),
  highlight: {
    text: get('fg.default'),
    bg: get('warning.muted')
  },
  blob: {
    lineHighlightBg: get('warning.muted'),
    lineHighlightBorder: get('warning.highlighter')
  },
  topicTag: {
    text: get('accent.fg'),
    bg: get('accent.muted'),
    hoverBg: get('accent.highlighter'),
    activeBg: get('accent.muted')
  },
  footerInvertocat: {
    octicon: get('fg.inactive'),
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
      text: get('warning.fg'),
      border: get('warning.emphasis')
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
    disabledBg: get('neutral.muted'),
    disabledBorder: get('border.default'),
    warningBorder: get('warning.emphasis'),
    errorBorder: get('danger.emphasis'),
    tooltip: {
      success: {
        text: get('fg.default'),
        bg: get('success.muted'),
        border: get('success.highlighter')
      },
      warning: {
        text: get('fg.default'),
        bg: get('warning.muted'),
        border: get('warning.highlighter')
      },
      error: {
        text: get('fg.default'),
        bg: get('danger.muted'),
        border: get('danger.highlighter')
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
    iconBorder: unset,
    success: {
      text: get('fg.default'),
      border: get('border.default'),
      icon: get('fg.onEmphasis'),
      iconBg: get('success.emphasis'),
      iconBorder: unset
    },
    warning: {
      text: get('fg.default'),
      border: get('border.default'),
      icon: get('fg.default'),
      iconBg: get('warning.emphasis'),
      iconBorder: unset
    },
    danger: {
      text: get('fg.default'),
      border: get('border.default'),
      icon: get('fg.onEmphasis'),
      iconBg: get('danger.emphasis'),
      iconBorder: unset
    },
    loading: {
      text: get('fg.default'),
      border: get('border.default'),
      icon: get('fg.onEmphasis'),
      iconBg: get('neutral.emphasis'),
      iconBorder: unset
    }
  },
  timeline: {
    text: get('fg.muted'),
    badgeBg: get('neutral.muted'),
    badgeSuccessBorder: unset,
    targetBadgeBorder: get('accent.emphasis'),
    targetBadgeShadow: get('accent.highlighter')
  },
  diffstat: {
    neutralBg: get('neutral.highlighter'),
    neutralBorder: get('neutral.highlighter'),
    deletionBg: get('danger.emphasis'),
    deletionBorder: get('danger.emphasis'),
    additionBg: get('success.emphasis'),
    additionBorder: get('success.emphasis')
  },
  diff: {
    addition: {
      text: get('success.fg'),
      bg: get('success.muted'),
      border: get('success.highlighter')
    },
    deletion: {
      text: get('danger.fg'),
      bg: get('danger.muted'),
      border: get('danger.highlighter')
    },
    change: {
      text: get('warning.fg'),
      bg: get('warning.muted'),
      border: get('warning.highlighter')
    }
  },
  mergeBox: {
    successIconBg: get('success.emphasis'),
    successIconText: get('fg.onEmphasis'),
    successIconBorder: unset,
    successIndicatorBg: get('success.emphasis'),
    successIndicatorBorder: unset,
    mergedIconBg: get('done.emphasis'),
    mergedIconText: get('fg.onEmphasis'),
    mergedIconBorder: unset,
    mergedBoxBorder: get('done.emphasis'),
    neutralIconBg: get('neutral.emphasis'),
    neutralIconText: get('fg.onEmphasis'),
    neutralIconBorder: unset,
    neutralIndicatorBg: get('neutral.emphasis'),
    neutralIndicatorBorder: unset,
    warningIconBg: get('warning.emphasis'),
    warningIconText: get('fg.onEmphasis'),
    warningIconBorder: unset,
    warningBoxBorder: get('warning.emphasis'),
    warningMergeHighlight: unset,
    errorIconBg: get('danger.emphasis'),
    errorIconText: get('fg.onEmphasis'),
    errorIconBorder: unset,
    errorIndicatorBg: get('danger.emphasis'),
    errorIndicatorBorder: unset
  },
  fade: {
    fg10: deprecated,
    fg15: deprecated,
    fg30: deprecated,
    fg50: deprecated,
    fg70: deprecated,
    fg85: deprecated
  },
  underlinenav: {
    border: unset,
    borderHover: get('neutral.highlighter'),
    borderActive: get('primer.border.active'),
    text: get('fg.default'),
    textHover: get('fg.default'),
    textActive: get('fg.default'),
    icon: get('fg.inactive'),
    iconHover: get('fg.inactive'),
    iconActive: get('fg.default'),
    counterText: get('fg.default'),
    counterBg: get('neutral.muted')
  },
  selectMenu: {
    borderSecondary: get('border.divider'),
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
      border: unset
    },
    open: {
      text: get('fg.onEmphasis'),
      bg: get('success.emphasis'),
      border: unset
    },
    merged: {
      text: get('fg.onEmphasis'),
      bg: get('done.emphasis'),
      border: unset
    },
    closed: {
      text: get('fg.onEmphasis'),
      bg: get('danger.emphasis'),
      border: unset
    }
  },
  diffBlob: {
    numText: get('neutral.fg'),
    numHoverText: get('fg.default'),
    addition: {
      numText: get('success.fg'),
      numHoverText: get('fg.default'),
      numBg: get('success.highlighter'),
      lineBg: get('success.muted'),
      wordBg: get('success.highlighter')
    },
    deletion: {
      numText: get('danger.fg'),
      numHoverText: get('fg.default'),
      numBg: get('danger.highlighter'),
      lineBg: get('danger.muted'),
      wordBg: get('danger.highlighter')
    },
    hunk: {
      text: get('fg.muted'),
      numBg: get('accent.highlighter'),
      lineBg: get('accent.muted')
    },
    emptyBlockBg: get('neutral.muted'),
    selectedLineHighlightBg: get('warning.muted'),
    selectedLineHighlightBorder: get('warning.highlighter'),
    expander: {
      icon: get('fg.muted'),
      hoverIcon: get('fg.onEmphasis'),
      hoverBg: get('accent.emphasis')
    },
    commentButton: {
      icon: get('fg.onEmphasis'),
      bg: get('accent.emphasis'),
      gradientBg: unset
    }
  }
}
