import {alpha, get} from '../../../src/utils-v1'

// Variables to be moved to github/github

export default {
  canvasDefaultTransparent: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color--canvas-default-transparent, ${alpha(get('canvas.default'), 0)(theme)}))`,
  pageHeaderBg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color--page-header-bg, ${get('canvas.subtle')(theme)}))`,
  marketingIcon: {
    primary: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-marketingIcon-primary, ${get('scale.blue.4')(theme)}))`,
    secondary: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-marketingIcon-secondary, ${get('scale.blue.3')(theme)}))`
  },
  diffBlob: {
    addition: {
      numText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-diffBlob-addition-num-text, ${get('fg.default')(theme)}))`,
      fg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-diffBlob-addition-fg, ${get('fg.default')(theme)}))`,
      numBg: "var(undefined, var(--color-diffBlob-addition-num-bg, #ccffd8))",
      lineBg: "var(undefined, var(--color-diffBlob-addition-line-bg, #e6ffec))",
      wordBg: "var(undefined, var(--color-diffBlob-addition-word-bg, #abf2bc))"
    },
    deletion: {
      numText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-diffBlob-addition-deletion-num-text, ${get('fg.default')(theme)}))`,
      fg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-diffBlob-addition-deletion-fg, ${get('fg.default')(theme)}))`,
      numBg: "var(undefined, var(--color-diffBlob-addition-deletion-num-bg, #ffd7d5))",
      lineBg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-diffBlob-addition-deletion-line-bg, ${get('danger.subtle')(theme)}))`,
      wordBg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-diffBlob-addition-deletion-word-bg, ${get('danger.muted')(theme)}))`
    },
    hunk: {
      numBg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-diffBlob-addition-deletion-hunk-num-bg, ${get('accent.muted')(theme)}))`
    },
    expander: {
      icon: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-diffBlob-addition-deletion-hunk-expander-icon, ${get('fg.muted')(theme)}))`
    },
    selectedLineHighlightMixBlendMode: "var(undefined, var(--color-diffBlob-addition-deletion-hunk-expander-selected-line-highlight-mix-blend-mode, multiply))"
  },
  diffstat: {
    deletionBorder: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-diffstat-deletion-border, ${get('border.subtle')(theme)}))`,
    additionBorder: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-diffstat-addition-border, ${get('border.subtle')(theme)}))`
  },
  searchKeyword: {
    hl: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-searchKeyword-hl, ${get('scale.yellow.0')(theme)}))`
  },
  prettylights: {
    syntax: {
      comment: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-comment, ${get('scale.gray.6')(theme)}))`,
      constant: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-constant, ${get('scale.blue.6')(theme)}))`,
      entity: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-entity, ${get('scale.purple.6')(theme)}))`,
      storageModifierImport: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-storage-modifier-import, ${get('scale.gray.9')(theme)}))`,
      entityTag: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-entity-tag, ${get('scale.green.6')(theme)}))`,
      keyword: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-keyword, ${get('scale.red.5')(theme)}))`,
      string: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-string, ${get('scale.blue.8')(theme)}))`,
      variable: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-variable, ${get('scale.orange.6')(theme)}))`,
      brackethighlighterUnmatched: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-brackethighlighter-unmatched, ${get('scale.red.7')(theme)}))`,
      invalidIllegalText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-invalid-illegal-text, ${get('scale.gray.0')(theme)}))`,
      invalidIllegalBg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-invalid-illegal-bg, ${get('scale.red.7')(theme)}))`,
      carriageReturnText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-carriage-return-text, ${get('scale.gray.0')(theme)}))`,
      carriageReturnBg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-carriage-return-bg, ${get('scale.red.5')(theme)}))`,
      stringRegexp: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-string-regexp, ${get('scale.green.6')(theme)}))`,
      markupList: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-markup-list, ${get('scale.yellow.9')(theme)}))`,
      markupHeading: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-markup-heading, ${get('scale.blue.6')(theme)}))`,
      markupItalic: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-markup-italic, ${get('scale.gray.9')(theme)}))`,
      markupBold: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-markup-bold, ${get('scale.gray.9')(theme)}))`,
      markupDeletedText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-markup-deleted-text, ${get('scale.red.7')(theme)}))`,
      markupDeletedBg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-markup-deleted-bg, ${get('scale.red.0')(theme)}))`,
      markupInsertedText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-markup-inserted-text, ${get('scale.green.6')(theme)}))`,
      markupInsertedBg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-markup-inserted-bg, ${get('scale.green.0')(theme)}))`,
      markupChangedText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-markup-changed-text, ${get('scale.orange.6')(theme)}))`,
      markupChangedBg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-markup-changed-bg, ${get('scale.orange.1')(theme)}))`,
      markupIgnoredText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-markup-ignored-text, ${get('scale.gray.1')(theme)}))`,
      markupIgnoredBg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-markup-ignored-bg, ${get('scale.blue.6')(theme)}))`,
      metaDiffRange: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-meta-diff-range, ${get('scale.purple.5')(theme)}))`,
      brackethighlighterAngle: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-brackethighlighter-angle, ${get('scale.gray.6')(theme)}))`,
      sublimelinterGutterMark: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-sublimelinter-gutter-mark, ${get('scale.gray.4')(theme)}))`,
      constantOtherReferenceLink: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-prettylights-syntax-constant-other-reference-link, ${get('scale.blue.8')(theme)}))`
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
      comment: (theme: any) => `var(--codeMirror-syntax-fgColor-comment, var(--color-codemirror-syntax-comment, ${get('scale.gray.9')(theme)}))`,
      constant: (theme: any) => `var(--codeMirror-syntax-fgColor-constant, var(--color-codemirror-syntax-constant, ${get('scale.blue.6')(theme)}))`,
      entity: (theme: any) => `var(--codeMirror-syntax-fgColor-entity, var(--color-codemirror-syntax-entity, ${get('scale.purple.5')(theme)}))`,
      keyword: (theme: any) => `var(--codeMirror-syntax-fgColor-keyword, var(--color-codemirror-syntax-keyword, ${get('scale.red.5')(theme)}))`,
      storage: (theme: any) => `var(--codeMirror-syntax-fgColor-storage, var(--color-codemirror-syntax-storage, ${get('scale.red.5')(theme)}))`,
      string: (theme: any) => `var(--codeMirror-syntax-fgColor-string, var(--color-codemirror-syntax-string, ${get('scale.blue.8')(theme)}))`,
      support: (theme: any) => `var(--codeMirror-syntax-fgColor-support, var(--color-codemirror-syntax-support, ${get('scale.blue.6')(theme)}))`,
      variable: (theme: any) => `var(--codeMirror-syntax-fgColor-variable, var(--color-codemirror-syntax-variable, ${get('scale.orange.6')(theme)}))`
    }
  },
  checks: {
    bg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-bg, ${get('scale.gray.9')(theme)}))`,
    runBorderWidth: "var(undefined, var(--color-checks-run-border-width, 0px))",
    containerBorderWidth: "var(undefined, var(--color-checks-container-border-width, 0px))",
    textPrimary: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-text-primary, ${get('scale.gray.0')(theme)}))`,
    textSecondary: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-text-secondary, ${get('scale.gray.4')(theme)}))`,
    textLink: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-text-link, ${get('scale.blue.3')(theme)}))`,
    btnIcon: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-btn-icon, ${get('scale.gray.3')(theme)}))`,
    btnHoverIcon: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-btn-hover-icon, ${get('scale.gray.0')(theme)}))`,
    btnHoverBg: "var(undefined, var(--color-checks-btn-hover-bg, rgba(255,255,255,0.125)))",
    inputText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-input-text, ${get('scale.gray.1')(theme)}))`,
    inputPlaceholderText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-input-placeholder-text, ${get('scale.gray.4')(theme)}))`,
    inputFocusText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-input-focus-text, ${get('scale.gray.4')(theme)}))`,
    inputBg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-input-bg, ${get('scale.gray.8')(theme)}))`,
    inputShadow: "var(undefined, var(--color-checks-input-shadow, none))",
    donutError: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-donut-error, ${get('scale.red.4')(theme)}))`,
    donutPending: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-donut-pending, ${get('scale.yellow.4')(theme)}))`,
    donutSuccess: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-donut-success, ${get('success.emphasis')(theme)}))`,
    donutNeutral: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-donut-neutral, ${get('scale.gray.3')(theme)}))`,
    dropdownText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-dropdown-text, ${get('scale.gray.3')(theme)}))`,
    dropdownBg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-dropdown-bg, ${get('scale.gray.8')(theme)}))`,
    dropdownBorder: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-dropdown-border, ${get('scale.gray.7')(theme)}))`,
    dropdownShadow: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-dropdown-shadow, ${alpha(get('scale.black'), 0.3)(theme)}))`,
    dropdownHoverText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-dropdown-hover-text, ${get('scale.gray.0')(theme)}))`,
    dropdownHoverBg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-dropdown-hover-bg, ${get('scale.gray.7')(theme)}))`,
    dropdownBtnHoverText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-dropdown-btn-hover-text, ${get('scale.gray.0')(theme)}))`,
    dropdownBtnHoverBg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-dropdown-btn-hover-bg, ${get('scale.gray.8')(theme)}))`,
    scrollbarThumbBg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-scrollbar-thumb-bg, ${get('scale.gray.6')(theme)}))`,
    headerLabelText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-header-label-text, ${get('scale.gray.2')(theme)}))`,
    headerLabelOpenText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-header-label-open-text, ${get('scale.gray.0')(theme)}))`,
    headerBorder: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-header-border, ${get('scale.gray.8')(theme)}))`,
    headerIcon: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-header-icon, ${get('scale.gray.4')(theme)}))`,
    lineText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-line-text, ${get('scale.gray.2')(theme)}))`,
    lineNumText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-line-num-text, ${alpha(get('scale.gray.4'), 0.75)(theme)}))`,
    lineTimestampText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-line-timestamp-text, ${get('scale.gray.4')(theme)}))`,
    lineHoverBg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-line-hover-bg, ${get('scale.gray.8')(theme)}))`,
    lineSelectedBg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-line-selected-bg, ${alpha(get('scale.blue.4'), 0.15)(theme)}))`,
    lineSelectedNumText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-line-selected-num-text, ${get('scale.blue.3')(theme)}))`,
    lineDtFmText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-line-dt-fm-text, ${get('scale.gray.9')(theme)}))`,
    lineDtFmBg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-line-dt-fm-bg, ${get('scale.yellow.5')(theme)}))`,
    gateBg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-gate-bg, ${alpha(get('scale.yellow.6'), 0.15)(theme)}))`,
    gateText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-gate-text, ${get('scale.gray.2')(theme)}))`,
    gateWaitingText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-gate-waiting-text, ${get('scale.yellow.3')(theme)}))`,
    stepHeaderOpenBg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-step-header-open-bg, ${get('scale.gray.8')(theme)}))`,
    stepErrorText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-step-error-text, ${get('scale.red.3')(theme)}))`,
    stepWarningText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-step-warning-text, ${get('scale.yellow.3')(theme)}))`,
    loglineText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-logline-text, ${get('scale.gray.4')(theme)}))`,
    loglineNumText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-logline-num-text, ${alpha(get('scale.gray.4'), 0.75)(theme)}))`,
    loglineDebugText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-logline-debug-text, ${get('scale.purple.3')(theme)}))`,
    loglineErrorText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-logline-error-text, ${get('scale.gray.2')(theme)}))`,
    loglineErrorNumText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-logline-error-num-text, ${get('scale.red.3')(theme)}))`,
    loglineErrorBg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-logline-error-bg, ${alpha(get('scale.red.6'), 0.15)(theme)}))`,
    loglineWarningText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-logline-warning-text, ${get('scale.gray.2')(theme)}))`,
    loglineWarningNumText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-logline-warning-num-text, ${get('scale.yellow.3')(theme)}))`,
    loglineWarningBg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-logline-warning-bg, ${alpha(get('scale.yellow.6'), 0.15)(theme)}))`,
    loglineCommandText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-logline-command-text, ${get('scale.blue.3')(theme)}))`,
    loglineSectionText: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-logline-section-text, ${get('scale.green.3')(theme)}))`,
    ansi: {
      black: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-ansi-black, ${get('scale.gray.9')(theme)}))`,
      blackBright: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-ansi-black-bright, ${get('scale.gray.8')(theme)}))`,
      white: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-ansi-white, ${get('scale.gray.2')(theme)}))`,
      whiteBright: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-ansi-white-bright, ${get('scale.gray.2')(theme)}))`,
      gray: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-ansi-gray, ${get('scale.gray.4')(theme)}))`,
      red: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-ansi-red, ${get('scale.red.3')(theme)}))`,
      redBright: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-ansi-red-bright, ${get('scale.red.2')(theme)}))`,
      green: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-ansi-green, ${get('scale.green.3')(theme)}))`,
      greenBright: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-ansi-green-bright, ${get('scale.green.2')(theme)}))`,
      yellow: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-ansi-yellow, ${get('scale.yellow.3')(theme)}))`,
      yellowBright: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-ansi-yellow-bright, ${get('scale.yellow.2')(theme)}))`,
      blue: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-ansi-blue, ${get('scale.blue.3')(theme)}))`,
      blueBright: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-ansi-blue-bright, ${get('scale.blue.2')(theme)}))`,
      magenta: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-ansi-magenta, ${get('scale.purple.3')(theme)}))`,
      magentaBright: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-checks-ansi-magenta-bright, ${get('scale.purple.2')(theme)}))`,
      cyan: "var(undefined, var(--color-checks-ansi-cyan, #76e3ea))",
      cyanBright: "var(undefined, var(--color-checks-ansi-cyan-bright, #b3f0ff))"
    }
  },
  project: {
    headerBg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-project-header-bg, ${get('scale.gray.9')(theme)}))`,
    sidebarBg: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-project-sidebar-bg, ${get('scale.white')(theme)}))`,
    gradientIn: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-project-gradient-in, ${get('scale.white')(theme)}))`,
    gradientOut: (theme: any, HI_KATIE: 'no matches') => `var(undefined, var(--color-project-gradient-out, ${alpha(get('scale.white'), 0)(theme)}))`
  }
}
