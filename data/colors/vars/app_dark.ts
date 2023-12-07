import {get, alpha} from '../../../src/utils-v1'

// Variables to be moved to github/github

export default {
  canvasDefaultTransparent: (theme: any) => `var(--bgColor-transparent, var(--color-canvas-default-transparent, ${alpha(get('canvas.default'), 0)(theme)}))`,
  pageHeaderBg: (theme: any) => `var(--page-header-bgColor, var(--color-page-header-bg, ${get('canvas.default')(theme)}))`,
  marketingIcon: {
    primary: (theme: any) => `var(--color-marketing-icon-primary, ${get('scale.blue.2')(theme)})`,
    secondary: (theme: any) => `var(--color-marketing-icon-secondary, ${get('scale.blue.5')(theme)})`
  },
  diffBlob: {
    addition: {
      numText: (theme: any) => `var(--diffBlob-addition-fgColor-num, var(--color-diff-blob-addition-num-text, ${get('fg.default')(theme)}))`,
      fg: (theme: any) => `var(--diffBlob-addition-fgColor-text, var(--color-diff-blob-addition-fg, ${get('fg.default')(theme)}))`,
      numBg: (theme: any) => `var(--diffBlob-addition-bgColor-num, var(--color-diff-blob-addition-num-bg, ${alpha(get('scale.green.3'), 0.3)(theme)}))`,
      lineBg: (theme: any) => `var(--diffBlob-addition-bgColor-line, var(--color-diff-blob-addition-line-bg, ${get('success.subtle')(theme)}))`,
      wordBg: (theme: any) => `var(--diffBlob-addition-bgColor-word, var(--color-diff-blob-addition-word-bg, ${get('success.muted')(theme)}))`
    },
    deletion: {
      numText: (theme: any) => `var(--diffBlob-deletion-fgColor-num, var(--color-diff-blob-deletion-num-text, ${get('fg.default')(theme)}))`,
      fg: (theme: any) => `var(--diffBlob-deletion-fgColor-text, var(--color-diff-blob-deletion-fg, ${get('fg.default')(theme)}))`,
      numBg: (theme: any) => `var(--diffBlob-deletion-bgColor-num, var(--color-diff-blob-deletion-num-bg, ${alpha(get('scale.red.4'), 0.3)(theme)}))`,
      lineBg: (theme: any) => `var(--diffBlob-deletion-bgColor-line, var(--color-diff-blob-deletion-line-bg, ${get('danger.subtle')(theme)}))`,
      wordBg: (theme: any) => `var(--diffBlob-deletion-bgColor-word, var(--color-diff-blob-deletion-word-bg, ${get('danger.muted')(theme)}))`
    },
    hunk: {
      numBg: (theme: any) => `var(--diffBlob-hunk-bgColor-num, var(--color-diff-blob-hunk-num-bg, ${get('accent.muted')(theme)}))`
    },
    expander: {
      icon: (theme: any) => `var(--diffBlob-expander-iconColor, var(--color-diff-blob-expander-icon, ${get('fg.muted')(theme)}))`
    },
    selectedLineHighlightMixBlendMode: "var(--color-diff-blob-selected-line-highlight-mix-blend-mode, screen)"
  },
  diffstat: {
    deletionBorder: (theme: any) => `var(--color-diffstat-deletion-border, ${get('border.subtle')(theme)})`,
    additionBorder: (theme: any) => `var(--color-diffstat-addition-border, ${get('border.subtle')(theme)})`
  },
  searchKeyword: {
    hl: (theme: any) => `var(--highlight-neutral-bgColor, var(--color-search-keyword-hl, ${alpha(get('scale.yellow.3'), 0.4)(theme)}))`
  },
  prettylights: {
    syntax: {
      comment: (theme: any) => `var(--color-prettylights-syntax-comment, ${get('scale.gray.3')(theme)})`,
      constant: (theme: any) => `var(--color-prettylights-syntax-constant, ${get('scale.blue.2')(theme)})`,
      entity: (theme: any) => `var(--color-prettylights-syntax-entity, ${get('scale.purple.2')(theme)})`,
      storageModifierImport: (theme: any) => `var(--color-prettylights-syntax-storage-modifier-import, ${get('scale.gray.1')(theme)})`,
      entityTag: (theme: any) => `var(--color-prettylights-syntax-entity-tag, ${get('scale.green.1')(theme)})`,
      keyword: (theme: any) => `var(--color-prettylights-syntax-keyword, ${get('scale.red.3')(theme)})`,
      string: (theme: any) => `var(--color-prettylights-syntax-string, ${get('scale.blue.1')(theme)})`,
      variable: (theme: any) => `var(--color-prettylights-syntax-variable, ${get('scale.orange.2')(theme)})`,
      brackethighlighterUnmatched: (theme: any) => `var(--color-prettylights-syntax-brackethighlighter-unmatched, ${get('scale.red.4')(theme)})`,
      invalidIllegalText: (theme: any) => `var(--color-prettylights-syntax-invalid-illegal-text, ${get('scale.gray.0')(theme)})`,
      invalidIllegalBg: (theme: any) => `var(--color-prettylights-syntax-invalid-illegal-bg, ${get('scale.red.7')(theme)})`,
      carriageReturnText: (theme: any) => `var(--color-prettylights-syntax-carriage-return-text, ${get('scale.gray.0')(theme)})`,
      carriageReturnBg: (theme: any) => `var(--color-prettylights-syntax-carriage-return-bg, ${get('scale.red.6')(theme)})`,
      stringRegexp: (theme: any) => `var(--color-prettylights-syntax-string-regexp, ${get('scale.green.1')(theme)})`,
      markupList: (theme: any) => `var(--color-prettylights-syntax-markup-list, ${get('scale.yellow.1')(theme)})`,
      markupHeading: (theme: any) => `var(--color-prettylights-syntax-markup-heading, ${get('scale.blue.5')(theme)})`,
      markupItalic: (theme: any) => `var(--color-prettylights-syntax-markup-italic, ${get('scale.gray.1')(theme)})`,
      markupBold: (theme: any) => `var(--color-prettylights-syntax-markup-bold, ${get('scale.gray.1')(theme)})`,
      markupDeletedText: (theme: any) => `var(--color-prettylights-syntax-markup-deleted-text, ${get('scale.red.0')(theme)})`,
      markupDeletedBg: (theme: any) => `var(--color-prettylights-syntax-markup-deleted-bg, ${get('scale.red.8')(theme)})`,
      markupInsertedText: (theme: any) => `var(--color-prettylights-syntax-markup-inserted-text, ${get('scale.green.0')(theme)})`,
      markupInsertedBg: (theme: any) => `var(--color-prettylights-syntax-markup-inserted-bg, ${get('scale.green.8')(theme)})`,
      markupChangedText: (theme: any) => `var(--color-prettylights-syntax-markup-changed-text, ${get('scale.orange.0')(theme)})`,
      markupChangedBg: (theme: any) => `var(--color-prettylights-syntax-markup-changed-bg, ${get('scale.orange.8')(theme)})`,
      markupIgnoredText: (theme: any) => `var(--color-prettylights-syntax-markup-ignored-text, ${get('scale.gray.1')(theme)})`,
      markupIgnoredBg: (theme: any) => `var(--color-prettylights-syntax-markup-ignored-bg, ${get('scale.blue.6')(theme)})`,
      metaDiffRange: (theme: any) => `var(--color-prettylights-syntax-meta-diff-range, ${get('scale.purple.2')(theme)})`,
      brackethighlighterAngle: (theme: any) => `var(--color-prettylights-syntax-brackethighlighter-angle, ${get('scale.gray.3')(theme)})`,
      sublimelinterGutterMark: (theme: any) => `var(--color-prettylights-syntax-sublimelinter-gutter-mark, ${get('scale.gray.5')(theme)})`,
      constantOtherReferenceLink: (theme: any) => `var(--color-prettylights-syntax-constant-other-reference-link, ${get('scale.blue.1')(theme)})`
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
      comment: (theme: any) => `var(--codeMirror-syntax-fgColor-comment, var(--color-codemirror-syntax-comment, ${get('scale.gray.3')(theme)}))`,
      constant: (theme: any) => `var(--codeMirror-syntax-fgColor-constant, var(--color-codemirror-syntax-constant, ${get('scale.blue.2')(theme)}))`,
      entity: (theme: any) => `var(--codeMirror-syntax-fgColor-entity, var(--color-codemirror-syntax-entity, ${get('scale.purple.2')(theme)}))`,
      keyword: (theme: any) => `var(--codeMirror-syntax-fgColor-keyword, var(--color-codemirror-syntax-keyword, ${get('scale.red.3')(theme)}))`,
      storage: (theme: any) => `var(--codeMirror-syntax-fgColor-storage, var(--color-codemirror-syntax-storage, ${get('scale.red.3')(theme)}))`,
      string: (theme: any) => `var(--codeMirror-syntax-fgColor-string, var(--color-codemirror-syntax-string, ${get('scale.blue.1')(theme)}))`,
      support: (theme: any) => `var(--codeMirror-syntax-fgColor-support, var(--color-codemirror-syntax-support, ${get('scale.blue.2')(theme)}))`,
      variable: (theme: any) => `var(--codeMirror-syntax-fgColor-variable, var(--color-codemirror-syntax-variable, ${get('scale.orange.2')(theme)}))`
    }
  },
  checks: {
    bg: (theme: any) => `var(--color-checks-bg, ${get('canvas.inset')(theme)})`,
    runBorderWidth: "var(--color-checks-run-border-width, 1px)",
    containerBorderWidth: "var(--color-checks-container-border-width, 1px)",
    textPrimary: (theme: any) => `var(--color-checks-text-primary, ${get('fg.default')(theme)})`,
    textSecondary: (theme: any) => `var(--color-checks-text-secondary, ${get('fg.muted')(theme)})`,
    textLink: (theme: any) => `var(--color-checks-text-link, ${get('accent.fg')(theme)})`,
    btnIcon: (theme: any) => `var(--color-checks-btn-icon, ${get('fg.muted')(theme)})`,
    btnHoverIcon: (theme: any) => `var(--color-checks-btn-hover-icon, ${get('fg.default')(theme)})`,
    btnHoverBg: (theme: any) => `var(--color-checks-btn-hover-bg, ${get('neutral.subtle')(theme)})`,
    inputText: (theme: any) => `var(--color-checks-input-text, ${get('fg.muted')(theme)})`,
    inputPlaceholderText: (theme: any) => `var(--color-checks-input-placeholder-text, ${get('fg.subtle')(theme)})`,
    inputFocusText: (theme: any) => `var(--color-checks-input-focus-text, ${get('fg.default')(theme)})`,
    inputBg: (theme: any) => `var(--color-checks-input-bg, ${get('scale.gray.8')(theme)})`,
    inputShadow: (theme: any) => `var(--color-checks-input-shadow, 0 0 0 1px ${get('border.default')(theme)})`,
    donutError: (theme: any) => `var(--color-checks-donut-error, ${get('scale.red.4')(theme)})`,
    donutPending: (theme: any) => `var(--color-checks-donut-pending, ${get('scale.yellow.3')(theme)})`,
    donutSuccess: (theme: any) => `var(--color-checks-donut-success, ${get('scale.green.4')(theme)})`,
    donutNeutral: (theme: any) => `var(--color-checks-donut-neutral, ${get('scale.gray.3')(theme)})`,
    dropdownText: (theme: any) => `var(--color-checks-dropdown-text, ${get('fg.default')(theme)})`,
    dropdownBg: (theme: any) => `var(--color-checks-dropdown-bg, ${get('canvas.overlay')(theme)})`,
    dropdownBorder: (theme: any) => `var(--color-checks-dropdown-border, ${get('border.default')(theme)})`,
    dropdownShadow: (theme: any) => `var(--color-checks-dropdown-shadow, ${alpha(get('scale.black'), 0.3)(theme)})`,
    dropdownHoverText: (theme: any) => `var(--color-checks-dropdown-hover-text, ${get('fg.default')(theme)})`,
    dropdownHoverBg: (theme: any) => `var(--color-checks-dropdown-hover-bg, ${get('neutral.subtle')(theme)})`,
    dropdownBtnHoverText: (theme: any) => `var(--color-checks-dropdown-btn-hover-text, ${get('fg.default')(theme)})`,
    dropdownBtnHoverBg: (theme: any) => `var(--color-checks-dropdown-btn-hover-bg, ${get('neutral.subtle')(theme)})`,
    scrollbarThumbBg: (theme: any) => `var(--color-checks-scrollbar-thumb-bg, ${get('neutral.muted')(theme)})`,
    headerLabelText: (theme: any) => `var(--color-checks-header-label-text, ${get('fg.muted')(theme)})`,
    headerLabelOpenText: (theme: any) => `var(--color-checks-header-label-open-text, ${get('fg.default')(theme)})`,
    headerBorder: (theme: any) => `var(--color-checks-header-border, ${get('border.muted')(theme)})`,
    headerIcon: (theme: any) => `var(--color-checks-header-icon, ${get('fg.muted')(theme)})`,
    lineText: (theme: any) => `var(--color-checks-line-text, ${get('fg.muted')(theme)})`,
    lineNumText: (theme: any) => `var(--color-checks-line-num-text, ${get('fg.subtle')(theme)})`,
    lineTimestampText: (theme: any) => `var(--color-checks-line-timestamp-text, ${get('fg.subtle')(theme)})`,
    lineHoverBg: (theme: any) => `var(--color-checks-line-hover-bg, ${get('neutral.subtle')(theme)})`,
    lineSelectedBg: (theme: any) => `var(--color-checks-line-selected-bg, ${get('accent.subtle')(theme)})`,
    lineSelectedNumText: (theme: any) => `var(--color-checks-line-selected-num-text, ${get('accent.fg')(theme)})`,
    lineDtFmText: (theme: any) => `var(--color-checks-line-dt-fm-text, ${get('fg.onEmphasis')(theme)})`,
    lineDtFmBg: (theme: any) => `var(--color-checks-line-dt-fm-bg, ${get('attention.emphasis')(theme)})`,
    gateBg: (theme: any) => `var(--color-checks-gate-bg, ${get('attention.subtle')(theme)})`,
    gateText: (theme: any) => `var(--color-checks-gate-text, ${get('fg.muted')(theme)})`,
    gateWaitingText: (theme: any) => `var(--color-checks-gate-waiting-text, ${get('attention.fg')(theme)})`,
    stepHeaderOpenBg: (theme: any) => `var(--color-checks-step-header-open-bg, ${get('canvas.subtle')(theme)})`,
    stepErrorText: (theme: any) => `var(--color-checks-step-error-text, ${get('danger.fg')(theme)})`,
    stepWarningText: (theme: any) => `var(--color-checks-step-warning-text, ${get('attention.fg')(theme)})`,
    loglineText: (theme: any) => `var(--color-checks-logline-text, ${get('fg.muted')(theme)})`,
    loglineNumText: (theme: any) => `var(--color-checks-logline-num-text, ${get('fg.subtle')(theme)})`,
    loglineDebugText: (theme: any) => `var(--color-checks-logline-debug-text, ${get('done.fg')(theme)})`,
    loglineErrorText: (theme: any) => `var(--color-checks-logline-error-text, ${get('fg.muted')(theme)})`,
    loglineErrorNumText: (theme: any) => `var(--color-checks-logline-error-num-text, ${get('fg.subtle')(theme)})`,
    loglineErrorBg: (theme: any) => `var(--color-checks-logline-error-bg, ${get('danger.subtle')(theme)})`,
    loglineWarningText: (theme: any) => `var(--color-checks-logline-warning-text, ${get('fg.muted')(theme)})`,
    loglineWarningNumText: (theme: any) => `var(--color-checks-logline-warning-num-text, ${get('attention.fg')(theme)})`,
    loglineWarningBg: (theme: any) => `var(--color-checks-logline-warning-bg, ${get('attention.subtle')(theme)})`,
    loglineCommandText: (theme: any) => `var(--color-checks-logline-command-text, ${get('accent.fg')(theme)})`,
    loglineSectionText: (theme: any) => `var(--color-checks-logline-section-text, ${get('success.fg')(theme)})`,
    ansi: {
      black: (theme: any) => `var(--color-checks-ansi-black, ${get('scale.gray.9')(theme)})`,
      blackBright: (theme: any) => `var(--color-checks-ansi-black-bright, ${get('scale.gray.8')(theme)})`,
      white: (theme: any) => `var(--color-checks-ansi-white, ${get('scale.gray.2')(theme)}))`,
      whiteBright: (theme: any) => `var(--color-checks-ansi-white-bright, ${get('scale.gray.2')(theme)})`,
      gray: (theme: any) => `var(--color-checks-ansi-gray, ${get('scale.gray.4')(theme)})`,
      red: (theme: any) => `var(--color-checks-ansi-red, ${get('scale.red.3')(theme)})`,
      redBright: (theme: any) => `var(--color-checks-ansi-red-bright, ${get('scale.red.2')(theme)})`,
      green: (theme: any) => `var(--color-checks-ansi-green, ${get('scale.green.3')(theme)})`,
      greenBright: (theme: any) => `var(--color-checks-ansi-green-bright, ${get('scale.green.2')(theme)})`,
      yellow: (theme: any) => `var(--color-checks-ansi-yellow, ${get('scale.yellow.3')(theme)})`,
      yellowBright: (theme: any) => `var(--color-checks-ansi-yellow-bright, ${get('scale.yellow.2')(theme)})`,
      blue: (theme: any) => `var(--color-checks-ansi-blue, ${get('scale.blue.3')(theme)})`,
      blueBright: (theme: any) => `var(--color-checks-ansi-blue-bright, ${get('scale.blue.2')(theme)})`,
      magenta: (theme: any) => `var(--color-checks-ansi-magenta, ${get('scale.purple.3')(theme)})`,
      magentaBright: (theme: any) => `var(--color-checks-ansi-magenta-bright, ${get('scale.purple.2')(theme)})`,
      cyan: "var(--color-checks-ansi-cyan, #76e3ea)",
      cyanBright: "var(--color-checks-ansi-cyan-bright, #b3f0ff)"
    }
  },
  project: {
    headerBg: (theme: any) => `var(--color-project-header-bg, ${get('scale.gray.9')(theme)})`,
    sidebarBg: (theme: any) => `var(--color-project-sidebar-bg, ${get('scale.gray.8')(theme)})`,
    gradientIn: (theme: any) => `var(--color-project-gradient-in, ${get('scale.gray.8')(theme)})`,
    gradientOut: (theme: any) => `var(--color-project-gradient-out, ${alpha(get('scale.gray.8'), 0)(theme)})`
  }
}
