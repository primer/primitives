import {get} from '../../../src/utils'

// Variables to be removed in the next major release

// Every variable in this file must map to a functional variable (e.g. get('fg.default')).
// Don't use hex codes (e.g. '#ff0000') or scale variables (e.g. get('scale.gray.5')).

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
    canvasMobile: get('canvas.mobile'),
    canvasInverse: get('neutral.emphasis'),
    canvasInset: get('canvas.inset'),
    primary: get('canvas.default'),
    secondary: get('neutral.muted'),
    teritiary: get('neutral.muted'),
    overlay: get('canvas.overlay'),
    backdrop: get('canvas.backdrop'),
    info: get('accent.muted'),
    infoInverse: get('accent.emphasis'),
    danger: get('danger.muted'),
    dangerInverse: get('danger.emphasis'),
    success: get('success.muted'),
    successInverse: get('success.emphasis'),
    warning: get('warning.muted'),
    warningInverse: get('warning.emphasis')
  },
  state: {
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
  }
}
