import {get, alpha} from '../../../src/utils-v1'

// Variables to be moved to github/github

export default {
  canvasDefaultTransparent: (theme: any, HI_KATIE: any) => `var(undefined, var(--color--canvas-default-transparent, ${alpha(get('canvas.default'), 0)(theme)}))`,
  pageHeaderBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color--page-header-bg, ${get('canvas.default')(theme)}))`,
  marketingIcon: {
    primary: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-marketingIcon-primary, ${get('scale.blue.2')(theme)}))`,
    secondary: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-marketingIcon-secondary, ${get('scale.blue.5')(theme)}))`
  },
  diffBlob: {
    addition: {
      numText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-addition-num-text, ${get('fg.default')(theme)}))`,
      fg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-addition-fg, ${get('fg.default')(theme)}))`,
      numBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-addition-num-bg, ${alpha(get('scale.green.3'), 0.3)(theme)}))`,
      lineBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-addition-line-bg, ${get('success.subtle')(theme)}))`,
      wordBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-addition-word-bg, ${get('success.muted')(theme)}))`
    },
    deletion: {
      numText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-deletion-num-text, ${get('fg.default')(theme)}))`,
      fg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-deletion-fg, ${get('fg.default')(theme)}))`,
      numBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-deletion-num-bg, ${alpha(get('scale.red.4'), 0.3)(theme)}))`,
      lineBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-deletion-line-bg, ${get('danger.subtle')(theme)}))`,
      wordBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-deletion-word-bg, ${get('danger.muted')(theme)}))`
    },
    hunk: {
      numBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-hunk-num-bg, ${get('accent.muted')(theme)}))`
    },
    expander: {
      icon: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-expander-icon, ${get('fg.muted')(theme)}))`
    },
    selectedLineHighlightMixBlendMode: "var(undefined, var(--color-expander-selected-line-highlight-mix-blend-mode, screen))"
  },
  diffstat: {
    deletionBorder: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-diffstat-deletion-border, ${get('border.subtle')(theme)}))`,
    additionBorder: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-diffstat-addition-border, ${get('border.subtle')(theme)}))`
  },
  searchKeyword: {
    hl: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-searchKeyword-hl, ${alpha(get('scale.yellow.3'), 0.4)(theme)}))`
  },
  prettylights: {
    syntax: {
      comment: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-comment, ${get('scale.gray.3')(theme)}))`,
      constant: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-constant, ${get('scale.blue.2')(theme)}))`,
      entity: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-entity, ${get('scale.purple.2')(theme)}))`,
      storageModifierImport: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-storage-modifier-import, ${get('scale.gray.1')(theme)}))`,
      entityTag: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-entity-tag, ${get('scale.green.1')(theme)}))`,
      keyword: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-keyword, ${get('scale.red.3')(theme)}))`,
      string: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-string, ${get('scale.blue.1')(theme)}))`,
      variable: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-variable, ${get('scale.orange.2')(theme)}))`,
      brackethighlighterUnmatched: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-brackethighlighter-unmatched, ${get('scale.red.4')(theme)}))`,
      invalidIllegalText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-invalid-illegal-text, ${get('scale.gray.0')(theme)}))`,
      invalidIllegalBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-invalid-illegal-bg, ${get('scale.red.7')(theme)}))`,
      carriageReturnText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-carriage-return-text, ${get('scale.gray.0')(theme)}))`,
      carriageReturnBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-carriage-return-bg, ${get('scale.red.6')(theme)}))`,
      stringRegexp: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-string-regexp, ${get('scale.green.1')(theme)}))`,
      markupList: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-markup-list, ${get('scale.yellow.1')(theme)}))`,
      markupHeading: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-markup-heading, ${get('scale.blue.5')(theme)}))`,
      markupItalic: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-markup-italic, ${get('scale.gray.1')(theme)}))`,
      markupBold: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-markup-bold, ${get('scale.gray.1')(theme)}))`,
      markupDeletedText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-markup-deleted-text, ${get('scale.red.0')(theme)}))`,
      markupDeletedBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-markup-deleted-bg, ${get('scale.red.8')(theme)}))`,
      markupInsertedText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-markup-inserted-text, ${get('scale.green.0')(theme)}))`,
      markupInsertedBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-markup-inserted-bg, ${get('scale.green.8')(theme)}))`,
      markupChangedText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-markup-changed-text, ${get('scale.orange.0')(theme)}))`,
      markupChangedBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-markup-changed-bg, ${get('scale.orange.8')(theme)}))`,
      markupIgnoredText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-markup-ignored-text, ${get('scale.gray.1')(theme)}))`,
      markupIgnoredBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-markup-ignored-bg, ${get('scale.blue.6')(theme)}))`,
      metaDiffRange: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-meta-diff-range, ${get('scale.purple.2')(theme)}))`,
      brackethighlighterAngle: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-brackethighlighter-angle, ${get('scale.gray.3')(theme)}))`,
      sublimelinterGutterMark: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-sublimelinter-gutter-mark, ${get('scale.gray.5')(theme)}))`,
      constantOtherReferenceLink: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-constant-other-reference-link, ${get('scale.blue.1')(theme)}))`
    }
  },
  codemirror: {
    text: (theme: any) => `var(--codeMirror-fgColor, var(--color-codemirror-text, ${get('fg.default')(theme)}))`,
    bg: (theme: any) => `var(--codeMirror-bgColor, var(--color-codemirror-bg, ${get('canvas.default')(theme)}))`,
    guttersBg: (theme: any) => `var(--codeMirror-gutters-bgColor, var(--color-codemirror-gutters-bg, ${get('canvas.default')(theme)}))`,
    guttermarkerText: (theme: any) => `var(--codeMirror-gutterMarker-fgColor-default, var(--color-codemirror-guttermarker-text, ${get('canvas.default')(theme)}))`,
    guttermarkerSubtleText: (theme: any) => `var(--codeMirror-gutterMarker-fgColor-muted, var(--color-codemirror-guttermarker-subtle-text, ${get('fg.subtle')(theme)}))`,
    linenumberText: (theme: any) => `var(--codeMirror-lineNumber-fgColor, var(--color-codemirror-linenumber-text, ${get('fg.muted')(theme)}))`,
    cursor: (theme: any) => `var(--codeMirror-cursor-fgColor, var(--color-codemirror-cursor, ${get('fg.default')(theme)}))`,
    selectionBg: (theme: any) => `var(--codeMirror-selection-bgColor, var(--color-codemirror-selection-bg, ${get('accent.muted')(theme)}))`,
    activelineBg: (theme: any) => `var(--codeMirror-activeline-bgColor, var(--color-codemirror-activeline-bg, ${get('neutral.subtle')(theme)}))`,
    matchingbracketText: (theme: any) => `var(--codeMirror-matchingBracket-fgColor, var(--color-codemirror-matchingbracket-text, ${get('fg.default')(theme)}))`,
    linesBg: (theme: any) => `var(--codeMirror-lines-bgColor, var(--color-codemirror-lines-bg, ${get('canvas.default')(theme)}))`,
    syntax: {
      comment: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-comment, ${get('scale.gray.3')(theme)}))`,
      constant: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-constant, ${get('scale.blue.2')(theme)}))`,
      entity: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-entity, ${get('scale.purple.2')(theme)}))`,
      keyword: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-keyword, ${get('scale.red.3')(theme)}))`,
      storage: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-storage, ${get('scale.red.3')(theme)}))`,
      string: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-string, ${get('scale.blue.1')(theme)}))`,
      support: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-support, ${get('scale.blue.2')(theme)}))`,
      variable: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-syntax-variable, ${get('scale.orange.2')(theme)}))`
    }
  },
  checks: {
    bg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-bg, ${get('canvas.inset')(theme)}))`,
    runBorderWidth: "var(undefined, var(--color-checks-run-border-width, 1px))",
    containerBorderWidth: "var(undefined, var(--color-checks-container-border-width, 1px))",
    textPrimary: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-text-primary, ${get('fg.default')(theme)}))`,
    textSecondary: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-text-secondary, ${get('fg.muted')(theme)}))`,
    textLink: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-text-link, ${get('accent.fg')(theme)}))`,
    btnIcon: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-btn-icon, ${get('fg.muted')(theme)}))`,
    btnHoverIcon: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-btn-hover-icon, ${get('fg.default')(theme)}))`,
    btnHoverBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-btn-hover-bg, ${get('neutral.subtle')(theme)}))`,
    inputText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-input-text, ${get('fg.muted')(theme)}))`,
    inputPlaceholderText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-input-placeholder-text, ${get('fg.subtle')(theme)}))`,
    inputFocusText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-input-focus-text, ${get('fg.default')(theme)}))`,
    inputBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-input-bg, ${get('scale.gray.8')(theme)}))`,
    inputShadow: (theme: any) => `var(undefined, var(--color-checks-input-shadow, 0 0 0 1px ${get('border.default')(theme)}))// needs review: no matching new variable`,
    donutError: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-donut-error, ${get('scale.red.4')(theme)}))`,
    donutPending: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-donut-pending, ${get('scale.yellow.3')(theme)}))`,
    donutSuccess: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-donut-success, ${get('scale.green.4')(theme)}))`,
    donutNeutral: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-donut-neutral, ${get('scale.gray.3')(theme)}))`,
    dropdownText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-dropdown-text, ${get('fg.default')(theme)}))`,
    dropdownBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-dropdown-bg, ${get('canvas.overlay')(theme)}))`,
    dropdownBorder: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-dropdown-border, ${get('border.default')(theme)}))`,
    dropdownShadow: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-dropdown-shadow, ${alpha(get('scale.black'), 0.3)(theme)}))`,
    dropdownHoverText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-dropdown-hover-text, ${get('fg.default')(theme)}))`,
    dropdownHoverBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-dropdown-hover-bg, ${get('neutral.subtle')(theme)}))`,
    dropdownBtnHoverText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-dropdown-btn-hover-text, ${get('fg.default')(theme)}))`,
    dropdownBtnHoverBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-dropdown-btn-hover-bg, ${get('neutral.subtle')(theme)}))`,
    scrollbarThumbBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-scrollbar-thumb-bg, ${get('neutral.muted')(theme)}))`,
    headerLabelText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-header-label-text, ${get('fg.muted')(theme)}))`,
    headerLabelOpenText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-header-label-open-text, ${get('fg.default')(theme)}))`,
    headerBorder: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-header-border, ${get('border.muted')(theme)}))`,
    headerIcon: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-header-icon, ${get('fg.muted')(theme)}))`,
    lineText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-line-text, ${get('fg.muted')(theme)}))`,
    lineNumText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-line-num-text, ${get('fg.subtle')(theme)}))`,
    lineTimestampText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-line-timestamp-text, ${get('fg.subtle')(theme)}))`,
    lineHoverBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-line-hover-bg, ${get('neutral.subtle')(theme)}))`,
    lineSelectedBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-line-selected-bg, ${get('accent.subtle')(theme)}))`,
    lineSelectedNumText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-line-selected-num-text, ${get('accent.fg')(theme)}))`,
    lineDtFmText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-line-dt-fm-text, ${get('fg.onEmphasis')(theme)}))`,
    lineDtFmBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-line-dt-fm-bg, ${get('attention.emphasis')(theme)}))`,
    gateBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-gate-bg, ${get('attention.subtle')(theme)}))`,
    gateText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-gate-text, ${get('fg.muted')(theme)}))`,
    gateWaitingText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-gate-waiting-text, ${get('attention.fg')(theme)}))`,
    stepHeaderOpenBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-step-header-open-bg, ${get('canvas.subtle')(theme)}))`,
    stepErrorText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-step-error-text, ${get('danger.fg')(theme)}))`,
    stepWarningText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-step-warning-text, ${get('attention.fg')(theme)}))`,
    loglineText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-logline-text, ${get('fg.muted')(theme)}))`,
    loglineNumText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-logline-num-text, ${get('fg.subtle')(theme)}))`,
    loglineDebugText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-logline-debug-text, ${get('done.fg')(theme)}))`,
    loglineErrorText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-logline-error-text, ${get('fg.muted')(theme)}))`,
    loglineErrorNumText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-logline-error-num-text, ${get('fg.subtle')(theme)}))`,
    loglineErrorBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-logline-error-bg, ${get('danger.subtle')(theme)}))`,
    loglineWarningText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-logline-warning-text, ${get('fg.muted')(theme)}))`,
    loglineWarningNumText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-logline-warning-num-text, ${get('attention.fg')(theme)}))`,
    loglineWarningBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-logline-warning-bg, ${get('attention.subtle')(theme)}))`,
    loglineCommandText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-logline-command-text, ${get('accent.fg')(theme)}))`,
    loglineSectionText: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-checks-logline-section-text, ${get('success.fg')(theme)}))`,
    ansi: {
      black: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-ansi-black, ${get('scale.gray.9')(theme)}))`,
      blackBright: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-ansi-black-bright, ${get('scale.gray.8')(theme)}))`,
      white: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-ansi-white, ${get('scale.gray.2')(theme)}))`,
      whiteBright: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-ansi-white-bright, ${get('scale.gray.2')(theme)}))`,
      gray: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-ansi-gray, ${get('scale.gray.4')(theme)}))`,
      red: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-ansi-red, ${get('scale.red.3')(theme)}))`,
      redBright: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-ansi-red-bright, ${get('scale.red.2')(theme)}))`,
      green: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-ansi-green, ${get('scale.green.3')(theme)}))`,
      greenBright: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-ansi-green-bright, ${get('scale.green.2')(theme)}))`,
      yellow: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-ansi-yellow, ${get('scale.yellow.3')(theme)}))`,
      yellowBright: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-ansi-yellow-bright, ${get('scale.yellow.2')(theme)}))`,
      blue: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-ansi-blue, ${get('scale.blue.3')(theme)}))`,
      blueBright: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-ansi-blue-bright, ${get('scale.blue.2')(theme)}))`,
      magenta: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-ansi-magenta, ${get('scale.purple.3')(theme)}))`,
      magentaBright: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-ansi-magenta-bright, ${get('scale.purple.2')(theme)}))`,
      cyan: "var(undefined, var(--color-ansi-cyan, #76e3ea))",
      cyanBright: "var(undefined, var(--color-ansi-cyan-bright, #b3f0ff))"
    }
  },
  project: {
    headerBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-project-header-bg, ${get('scale.gray.9')(theme)}))`,
    sidebarBg: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-project-sidebar-bg, ${get('scale.gray.8')(theme)}))`,
    gradientIn: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-project-gradient-in, ${get('scale.gray.8')(theme)}))`,
    gradientOut: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-project-gradient-out, ${alpha(get('scale.gray.8'), 0)(theme)}))`
  }
}
