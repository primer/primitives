export default {
  "canvasDefaultTransparent": "var(undefined, var(--color--canvas-default-transparent, var(--bgColor-default, var(--color-canvas-default, rgba(13,17,23,0)))))",
  "pageHeaderBg": "var(undefined, var(--color--page-header-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.gray.9')(theme)}))`))",
  "marketingIcon": {
    "primary": "var(undefined, var(--color-marketingIcon-primary, #79c0ff))",
    "secondary": "var(undefined, var(--color-marketingIcon-secondary, #1f6feb))"
  },
  "diffBlob": {
    "addition": {
      "numText": "var(undefined, var(--color-diffBlob-addition-num-text, var(--control-fgColor-rest, var(--color-fg-default, #e6edf3))))",
      "fg": "var(undefined, var(--color-diffBlob-addition-fg, var(--control-fgColor-rest, var(--color-fg-default, #e6edf3))))",
      "numBg": "var(undefined, var(--color-diffBlob-addition-num-bg, rgba(63,185,80,0.3)))",
      "lineBg": "var(undefined, var(--color-diffBlob-addition-line-bg, (theme) => `var(--bgColor-success-muted, var(--color-success-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.green.4'), 0.15)(theme)}))`))",
      "wordBg": "var(undefined, var(--color-diffBlob-addition-word-bg, (theme) => `var(--borderColor-success-muted, var(--color-success-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.green.4'), 0.4)(theme)}))`))"
    },
    "deletion": {
      "numText": "var(undefined, var(--color-diffBlob-addition-deletion-num-text, var(--control-fgColor-rest, var(--color-fg-default, #e6edf3))))",
      "fg": "var(undefined, var(--color-diffBlob-addition-deletion-fg, var(--control-fgColor-rest, var(--color-fg-default, #e6edf3))))",
      "numBg": "var(undefined, var(--color-diffBlob-addition-deletion-num-bg, rgba(248,81,73,0.3)))",
      "lineBg": "var(undefined, var(--color-diffBlob-addition-deletion-line-bg, (theme) => `var(--bgColor-danger-muted, var(--color-danger-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.red.4'), 0.1)(theme)}))`))",
      "wordBg": "var(undefined, var(--color-diffBlob-addition-deletion-word-bg, (theme) => `var(--borderColor-danger-muted, var(--color-danger-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.red.4'), 0.4)(theme)}))`))"
    },
    "hunk": {
      "numBg": "var(undefined, var(--color-diffBlob-addition-deletion-hunk-num-bg, (theme) => `var(--borderColor-accent-muted, var(--color-accent-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.blue.4'), 0.4)(theme)}))`))"
    },
    "expander": {
      "icon": "var(undefined, var(--color-diffBlob-addition-deletion-hunk-expander-icon, var(--control-iconColor-rest, var(--color-fg-muted, #848d97))))"
    },
    "selectedLineHighlightMixBlendMode": "var(undefined, var(--color-diffBlob-addition-deletion-hunk-expander-selected-line-highlight-mix-blend-mode, screen))"
  },
  "diffstat": {
    "deletionBorder": "var(undefined, var(--color-diffstat-deletion-border, (theme, HI_KATIE) => `var(undefined, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`))",
    "additionBorder": "var(undefined, var(--color-diffstat-addition-border, (theme, HI_KATIE) => `var(undefined, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`))",
    "additionBg": "var(undefined, var(--color-diffstat-addition-bg, #3fb950))"
  },
  "searchKeyword": {
    "hl": "var(undefined, var(--color-searchKeyword-hl, rgba(210,153,34,0.4)))"
  },
  "prettylights": {
    "syntax": {
      "comment": "var(undefined, var(--color-prettylights-syntax-comment, #8b949e))",
      "constant": "var(undefined, var(--color-prettylights-syntax-constant, #79c0ff))",
      "entity": "var(undefined, var(--color-prettylights-syntax-entity, #d2a8ff))",
      "storageModifierImport": "var(undefined, var(--color-prettylights-syntax-storage-modifier-import, #c9d1d9))",
      "entityTag": "var(undefined, var(--color-prettylights-syntax-entity-tag, #7ee787))",
      "keyword": "var(undefined, var(--color-prettylights-syntax-keyword, #ff7b72))",
      "string": "var(undefined, var(--color-prettylights-syntax-string, #a5d6ff))",
      "variable": "var(undefined, var(--color-prettylights-syntax-variable, #ffa657))",
      "brackethighlighterUnmatched": "var(undefined, var(--color-prettylights-syntax-brackethighlighter-unmatched, #f85149))",
      "invalidIllegalText": "var(undefined, var(--color-prettylights-syntax-invalid-illegal-text, #f0f6fc))",
      "invalidIllegalBg": "var(undefined, var(--color-prettylights-syntax-invalid-illegal-bg, #8e1519))",
      "carriageReturnText": "var(undefined, var(--color-prettylights-syntax-carriage-return-text, #f0f6fc))",
      "carriageReturnBg": "var(undefined, var(--color-prettylights-syntax-carriage-return-bg, #b62324))",
      "stringRegexp": "var(undefined, var(--color-prettylights-syntax-string-regexp, #7ee787))",
      "markupList": "var(undefined, var(--color-prettylights-syntax-markup-list, #f2cc60))",
      "markupHeading": "var(undefined, var(--color-prettylights-syntax-markup-heading, #1f6feb))",
      "markupItalic": "var(undefined, var(--color-prettylights-syntax-markup-italic, #c9d1d9))",
      "markupBold": "var(undefined, var(--color-prettylights-syntax-markup-bold, #c9d1d9))",
      "markupDeletedText": "var(undefined, var(--color-prettylights-syntax-markup-deleted-text, #ffdcd7))",
      "markupDeletedBg": "var(undefined, var(--color-prettylights-syntax-markup-deleted-bg, #67060c))",
      "markupInsertedText": "var(undefined, var(--color-prettylights-syntax-markup-inserted-text, #aff5b4))",
      "markupInsertedBg": "var(undefined, var(--color-prettylights-syntax-markup-inserted-bg, #033a16))",
      "markupChangedText": "var(undefined, var(--color-prettylights-syntax-markup-changed-text, #ffdfb6))",
      "markupChangedBg": "var(undefined, var(--color-prettylights-syntax-markup-changed-bg, #5a1e02))",
      "markupIgnoredText": "var(undefined, var(--color-prettylights-syntax-markup-ignored-text, #c9d1d9))",
      "markupIgnoredBg": "var(undefined, var(--color-prettylights-syntax-markup-ignored-bg, #1158c7))",
      "metaDiffRange": "var(undefined, var(--color-prettylights-syntax-meta-diff-range, #d2a8ff))",
      "brackethighlighterAngle": "var(undefined, var(--color-prettylights-syntax-brackethighlighter-angle, #8b949e))",
      "sublimelinterGutterMark": "var(undefined, var(--color-prettylights-syntax-sublimelinter-gutter-mark, #484f58))",
      "constantOtherReferenceLink": "var(undefined, var(--color-prettylights-syntax-constant-other-reference-link, #a5d6ff))"
    }
  },
  "codemirror": {
    "text": "var(--codeMirror-fgColor, var(--color-codemirror-text, var(--control-fgColor-rest, var(--color-fg-default, #e6edf3))))",
    "bg": "var(--codeMirror-bgColor, var(--color-codemirror-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.gray.9')(theme)}))`))",
    "guttersBg": "var(--codeMirror-gutters-bgColor, var(--color-codemirror-gutters-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.gray.9')(theme)}))`))",
    "guttermarkerText": "var(--codeMirror-gutterMarker-fgColor-default, var(--color-codemirror-guttermarker-text, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.gray.9')(theme)}))`))",
    "guttermarkerSubtleText": "var(--codeMirror-gutterMarker-fgColor-muted, var(--color-codemirror-guttermarker-subtle-text, (theme, HI_KATIE) => `var(--control-fgColor-placeholder, var(--color-fg-subtle, ${(0, utils_v1_1.get)('scale.gray.4')(theme)}))`))",
    "linenumberText": "var(--codeMirror-lineNumber-fgColor, var(--color-codemirror-linenumber-text, var(--control-iconColor-rest, var(--color-fg-muted, #848d97))))",
    "cursor": "var(--codeMirror-cursor-fgColor, var(--color-codemirror-cursor, var(--control-fgColor-rest, var(--color-fg-default, #e6edf3))))",
    "selectionBg": "var(--codeMirror-selection-bgColor, var(--color-codemirror-selection-bg, (theme) => `var(--borderColor-accent-muted, var(--color-accent-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.blue.4'), 0.4)(theme)}))`))",
    "activelineBg": "var(--codeMirror-activeline-bgColor, var(--color-codemirror-activeline-bg, (theme) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.1)(theme)}))`))",
    "matchingbracketText": "var(--codeMirror-matchingBracket-fgColor, var(--color-codemirror-matchingbracket-text, var(--control-fgColor-rest, var(--color-fg-default, #e6edf3))))",
    "linesBg": "var(--codeMirror-lines-bgColor, var(--color-codemirror-lines-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.gray.9')(theme)}))`))",
    "syntax": {
      "comment": "var(--codeMirror-syntax-fgColor-comment, var(--color-codemirror-syntax-comment, #8b949e))",
      "constant": "var(--codeMirror-syntax-fgColor-constant, var(--color-codemirror-syntax-constant, #79c0ff))",
      "entity": "var(--codeMirror-syntax-fgColor-entity, var(--color-codemirror-syntax-entity, #d2a8ff))",
      "keyword": "var(--codeMirror-syntax-fgColor-keyword, var(--color-codemirror-syntax-keyword, #ff7b72))",
      "storage": "var(--codeMirror-syntax-fgColor-storage, var(--color-codemirror-syntax-storage, #ff7b72))",
      "string": "var(--codeMirror-syntax-fgColor-string, var(--color-codemirror-syntax-string, #a5d6ff))",
      "support": "var(--codeMirror-syntax-fgColor-support, var(--color-codemirror-syntax-support, #79c0ff))",
      "variable": "var(--codeMirror-syntax-fgColor-variable, var(--color-codemirror-syntax-variable, #ffa657))"
    }
  },
  "checks": {
    "bg": "var(undefined, var(--color-checks-bg, (theme) => `var(--bgColor-inset, var(--color-canvas-inset, ${(0, utils_v1_1.get)('scale.black')(theme)}))`))",
    "runBorderWidth": "var(undefined, var(--color-checks-run-border-width, 1px))",
    "containerBorderWidth": "var(undefined, var(--color-checks-container-border-width, 1px))",
    "textPrimary": "var(undefined, var(--color-checks-text-primary, var(--control-fgColor-rest, var(--color-fg-default, #e6edf3))))",
    "textSecondary": "var(undefined, var(--color-checks-text-secondary, var(--control-iconColor-rest, var(--color-fg-muted, #848d97))))",
    "textLink": "var(undefined, var(--color-checks-text-link, var(--focus-outlineColor, var(--color-accent-fg, #2f81f7))))",
    "btnIcon": "var(undefined, var(--color-checks-btn-icon, var(--control-iconColor-rest, var(--color-fg-muted, #848d97))))",
    "btnHoverIcon": "var(undefined, var(--color-checks-btn-hover-icon, var(--control-fgColor-rest, var(--color-fg-default, #e6edf3))))",
    "btnHoverBg": "var(undefined, var(--color-checks-btn-hover-bg, (theme) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.1)(theme)}))`))",
    "inputText": "var(undefined, var(--color-checks-input-text, var(--control-iconColor-rest, var(--color-fg-muted, #848d97))))",
    "inputPlaceholderText": "var(undefined, var(--color-checks-input-placeholder-text, (theme, HI_KATIE) => `var(--control-fgColor-placeholder, var(--color-fg-subtle, ${(0, utils_v1_1.get)('scale.gray.4')(theme)}))`))",
    "inputFocusText": "var(undefined, var(--color-checks-input-focus-text, var(--control-fgColor-rest, var(--color-fg-default, #e6edf3))))",
    "inputBg": "var(undefined, var(--color-checks-input-bg, #161b22))",
    "inputShadow": "var(undefined, var(--color-checks-input-shadow, 0 0 0 1px (theme, HI_KATIE) => `var(--borderColor-default, var(--color-border-default, ${(0, utils_v1_1.get)('scale.gray.6')(theme)}))`))// HI_KATIE: no matches",
    "donutError": "var(undefined, var(--color-checks-donut-error, #f85149))",
    "donutPending": "var(undefined, var(--color-checks-donut-pending, #d29922))",
    "donutSuccess": "var(undefined, var(--color-checks-donut-success, #2ea043))",
    "donutNeutral": "var(undefined, var(--color-checks-donut-neutral, #8b949e))",
    "dropdownText": "var(undefined, var(--color-checks-dropdown-text, var(--control-fgColor-rest, var(--color-fg-default, #e6edf3))))",
    "dropdownBg": "var(undefined, var(--color-checks-dropdown-bg, (theme) => `var(--overlay-bgColor, var(--color-canvas-overlay, ${(0, utils_v1_1.get)('scale.gray.8')(theme)}))`))",
    "dropdownBorder": "var(undefined, var(--color-checks-dropdown-border, (theme, HI_KATIE) => `var(--borderColor-default, var(--color-border-default, ${(0, utils_v1_1.get)('scale.gray.6')(theme)}))`))",
    "dropdownShadow": "var(undefined, var(--color-checks-dropdown-shadow, rgba(1,4,9,0.3)))",
    "dropdownHoverText": "var(undefined, var(--color-checks-dropdown-hover-text, var(--control-fgColor-rest, var(--color-fg-default, #e6edf3))))",
    "dropdownHoverBg": "var(undefined, var(--color-checks-dropdown-hover-bg, (theme) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.1)(theme)}))`))",
    "dropdownBtnHoverText": "var(undefined, var(--color-checks-dropdown-btn-hover-text, var(--control-fgColor-rest, var(--color-fg-default, #e6edf3))))",
    "dropdownBtnHoverBg": "var(undefined, var(--color-checks-dropdown-btn-hover-bg, (theme) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.1)(theme)}))`))",
    "scrollbarThumbBg": "var(undefined, var(--color-checks-scrollbar-thumb-bg, (theme, HI_KATIE) => `var(--bgColor-disabled, var(--color-neutral-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.4)(theme)}))`))",
    "headerLabelText": "var(undefined, var(--color-checks-header-label-text, var(--control-iconColor-rest, var(--color-fg-muted, #848d97))))",
    "headerLabelOpenText": "var(undefined, var(--color-checks-header-label-open-text, var(--control-fgColor-rest, var(--color-fg-default, #e6edf3))))",
    "headerBorder": "var(undefined, var(--color-checks-header-border, (theme) => `var(--borderColor-muted, var(--color-border-muted, ${(0, utils_v1_1.get)('scale.gray.7')(theme)}))`))",
    "headerIcon": "var(undefined, var(--color-checks-header-icon, var(--control-iconColor-rest, var(--color-fg-muted, #848d97))))",
    "lineText": "var(undefined, var(--color-checks-line-text, var(--control-iconColor-rest, var(--color-fg-muted, #848d97))))",
    "lineNumText": "var(undefined, var(--color-checks-line-num-text, (theme, HI_KATIE) => `var(--control-fgColor-placeholder, var(--color-fg-subtle, ${(0, utils_v1_1.get)('scale.gray.4')(theme)}))`))",
    "lineTimestampText": "var(undefined, var(--color-checks-line-timestamp-text, (theme, HI_KATIE) => `var(--control-fgColor-placeholder, var(--color-fg-subtle, ${(0, utils_v1_1.get)('scale.gray.4')(theme)}))`))",
    "lineHoverBg": "var(undefined, var(--color-checks-line-hover-bg, (theme) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.1)(theme)}))`))",
    "lineSelectedBg": "var(undefined, var(--color-checks-line-selected-bg, (theme) => `var(--bgColor-accent-muted, var(--color-accent-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.blue.4'), 0.1)(theme)}))`))",
    "lineSelectedNumText": "var(undefined, var(--color-checks-line-selected-num-text, var(--focus-outlineColor, var(--color-accent-fg, #2f81f7))))",
    "lineDtFmText": "var(undefined, var(--color-checks-line-dt-fm-text, (theme) => `var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
    "lineDtFmBg": "var(undefined, var(--color-checks-line-dt-fm-bg, (theme, HI_KATIE) => `var(--control-borderColor-warning, var(--color-attention-emphasis, ${(0, utils_v1_1.get)('scale.yellow.5')(theme)}))`))",
    "gateBg": "var(undefined, var(--color-checks-gate-bg, (theme) => `var(--bgColor-attention-muted, var(--color-attention-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.yellow.4'), 0.15)(theme)}))`))",
    "gateText": "var(undefined, var(--color-checks-gate-text, var(--control-iconColor-rest, var(--color-fg-muted, #848d97))))",
    "gateWaitingText": "var(undefined, var(--color-checks-gate-waiting-text, (theme) => `var(--fgColor-attention, var(--color-attention-fg, ${(0, utils_v1_1.get)('scale.yellow.3')(theme)}))`))",
    "stepHeaderOpenBg": "var(undefined, var(--color-checks-step-header-open-bg, (theme) => `var(--bgColor-muted, var(--color-canvas-subtle, ${(0, utils_v1_1.get)('scale.gray.8')(theme)}))`))",
    "stepErrorText": "var(undefined, var(--color-checks-step-error-text, (theme, HI_KATIE) => `var(--control-danger-fgColor-rest, var(--color-danger-fg, ${(0, utils_v1_1.get)('scale.red.4')(theme)}))`))",
    "stepWarningText": "var(undefined, var(--color-checks-step-warning-text, (theme) => `var(--fgColor-attention, var(--color-attention-fg, ${(0, utils_v1_1.get)('scale.yellow.3')(theme)}))`))",
    "loglineText": "var(undefined, var(--color-checks-logline-text, var(--control-iconColor-rest, var(--color-fg-muted, #848d97))))",
    "loglineNumText": "var(undefined, var(--color-checks-logline-num-text, (theme, HI_KATIE) => `var(--control-fgColor-placeholder, var(--color-fg-subtle, ${(0, utils_v1_1.get)('scale.gray.4')(theme)}))`))",
    "loglineDebugText": "var(undefined, var(--color-checks-logline-debug-text, (theme) => `var(--fgColor-done, var(--color-done-fg, ${(0, utils_v1_1.get)('scale.purple.4')(theme)}))`))",
    "loglineErrorText": "var(undefined, var(--color-checks-logline-error-text, var(--control-iconColor-rest, var(--color-fg-muted, #848d97))))",
    "loglineErrorNumText": "var(undefined, var(--color-checks-logline-error-num-text, (theme, HI_KATIE) => `var(--control-fgColor-placeholder, var(--color-fg-subtle, ${(0, utils_v1_1.get)('scale.gray.4')(theme)}))`))",
    "loglineErrorBg": "var(undefined, var(--color-checks-logline-error-bg, (theme) => `var(--bgColor-danger-muted, var(--color-danger-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.red.4'), 0.1)(theme)}))`))",
    "loglineWarningText": "var(undefined, var(--color-checks-logline-warning-text, var(--control-iconColor-rest, var(--color-fg-muted, #848d97))))",
    "loglineWarningNumText": "var(undefined, var(--color-checks-logline-warning-num-text, (theme) => `var(--fgColor-attention, var(--color-attention-fg, ${(0, utils_v1_1.get)('scale.yellow.3')(theme)}))`))",
    "loglineWarningBg": "var(undefined, var(--color-checks-logline-warning-bg, (theme) => `var(--bgColor-attention-muted, var(--color-attention-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.yellow.4'), 0.15)(theme)}))`))",
    "loglineCommandText": "var(undefined, var(--color-checks-logline-command-text, var(--focus-outlineColor, var(--color-accent-fg, #2f81f7))))",
    "loglineSectionText": "var(undefined, var(--color-checks-logline-section-text, (theme) => `var(--fgColor-success, var(--color-success-fg, ${(0, utils_v1_1.get)('scale.green.3')(theme)}))`))",
    "ansi": {
      "black": "var(undefined, var(--color-checks-ansi-black, #0d1117))",
      "blackBright": "var(undefined, var(--color-checks-ansi-black-bright, #161b22))",
      "white": "var(undefined, var(--color-checks-ansi-white, #b1bac4))",
      "whiteBright": "var(undefined, var(--color-checks-ansi-white-bright, #b1bac4))",
      "gray": "var(undefined, var(--color-checks-ansi-gray, #6e7681))",
      "red": "var(undefined, var(--color-checks-ansi-red, #ff7b72))",
      "redBright": "var(undefined, var(--color-checks-ansi-red-bright, #ffa198))",
      "green": "var(undefined, var(--color-checks-ansi-green, #3fb950))",
      "greenBright": "var(undefined, var(--color-checks-ansi-green-bright, #56d364))",
      "yellow": "var(undefined, var(--color-checks-ansi-yellow, #d29922))",
      "yellowBright": "var(undefined, var(--color-checks-ansi-yellow-bright, #e3b341))",
      "blue": "var(undefined, var(--color-checks-ansi-blue, #58a6ff))",
      "blueBright": "var(undefined, var(--color-checks-ansi-blue-bright, #79c0ff))",
      "magenta": "var(undefined, var(--color-checks-ansi-magenta, #bc8cff))",
      "magentaBright": "var(undefined, var(--color-checks-ansi-magenta-bright, #d2a8ff))",
      "cyan": "var(undefined, var(--color-checks-ansi-cyan, #76e3ea))",
      "cyanBright": "var(undefined, var(--color-checks-ansi-cyan-bright, #b3f0ff))"
    }
  },
  "project": {
    "headerBg": "var(undefined, var(--color-project-header-bg, #0d1117))",
    "sidebarBg": "var(undefined, var(--color-project-sidebar-bg, #161b22))",
    "gradientIn": "var(undefined, var(--color-project-gradient-in, #161b22))",
    "gradientOut": "var(undefined, var(--color-project-gradient-out, rgba(22,27,34,0)))"
  },
  "mktg": {
    "btn": {
      "bg": "var(undefined, var(--color-mktg-btn-bg, #f6f8fa))",
      "shadow": {
        "outline": "var(undefined, var(--color-mktg-btn-shadow-outline, rgb(255 255 255 / 25%) 0 0 0 1px inset))",
        "focus": "var(undefined, var(--color-mktg-btn-shadow-focus, rgb(255 255 255 / 25%) 0 0 0 4px))",
        "hover": "var(undefined, var(--color-mktg-btn-shadow-hover, 0 4px 7px rgba(0, 0, 0, 0.15), 0 100px 80px rgba(255, 255, 255, 0.02), 0 42px 33px rgba(255, 255, 255, 0.024), 0 22px 18px rgba(255, 255, 255, 0.028), 0 12px 10px rgba(255, 255, 255, 0.034), 0 7px 5px rgba(255, 255, 255, 0.04), 0 3px 2px rgba(255, 255, 255, 0.07)))",
        "hoverMuted": "var(undefined, var(--color-mktg-btn-shadow-hover-muted, rgb(255 255 255) 0 0 0 2px inset))"
      }
    }
  },
  "control": {
    "borderColor": {
      "emphasis": "var(undefined, var(--color-control-borderColor-emphasis, #606771))"
    }
  },
  "avatar": {
    "bg": "var(--avatar-bgColor, var(--color-avatar-bg, rgba(255,255,255,0.1)))",
    "border": "var(--avatar-borderColor, var(--color-avatar-border, (theme, HI_KATIE) => `var(undefined, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`))",
    "stackFade": "var(--avatarStack-fade-bgColor-default, var(--color-avatar-stack-fade, #30363d))",
    "stackFadeMore": "var(--avatarStack-fade-bgColor-muted, var(--color-avatar-stack-fade-more, #21262d))",
    "childShadow": "var(--avatar-shadow, var(--color-avatar-child-shadow, 0 0 0 2px #0d1117))"
  },
  "topicTag": {
    "border": "var(undefined, var(--color-topicTag-border, transparent))"
  },
  "counter": {
    "border": "var(--counter-borderColor, var(--color-counter-border, transparent))"
  },
  "selectMenu": {
    "backdropBorder": "var(undefined, var(--color-selectMenu-backdrop-border, #484f58))",
    "tapHighlight": "var(undefined, var(--color-selectMenu-tap-highlight, rgba(48,54,61,0.5)))",
    "tapFocusBg": "var(undefined, var(--color-selectMenu-tap-focus-bg, #0c2d6b))"
  },
  "overlay": {
    "shadow": "var(--shadow-floating-small, var(--color-overlay-shadow, 0 0 0 1px #30363d, 0 16px 32px rgba(1,4,9,0.85)))",
    "backdrop": "var(--overlay-backdrop-bgColor, var(--color-overlay-backdrop, rgba(22,27,34,0.4)))"
  },
  "header": {
    "text": "var(--header-fgColor-default, var(--color-header-text, rgba(255,255,255,0.7)))",
    "bg": "var(--header-bgColor, var(--color-header-bg, #161b22))",
    "divider": "var(--header-borderColor-divider, var(--color-header-divider, #8b949e))",
    "logo": "var(--header-fgColor-logo, var(--color-header-logo, #f0f6fc))"
  },
  "headerSearch": {
    "bg": "var(undefined, var(--color-headerSearch-bg, #0d1117))",
    "border": "var(undefined, var(--color-headerSearch-border, #30363d))"
  },
  "sidenav": {
    "selectedBg": "var(--sideNav-bgColor-selected, var(--color-sidenav-selected-bg, #21262d))"
  },
  "menu": {
    "bgActive": "var(--menu-bgColor-active, var(--color-menu-bg-active, #161b22))"
  },
  "input": {
    "disabledBg": "var(--control-bgColor-disabled, var(--color-input-disabled-bg, var(--bgColor-disabled, var(--color-neutral-muted, rgba(110,118,129,0)))))"
  },
  "timeline": {
    "badgeBg": "var(--timelineBadge-bgColor, var(--color-timeline-badge-bg, #21262d))"
  },
  "ansi": {
    "black": "var(undefined, var(--color-ansi-black, #484f58))",
    "blackBright": "var(undefined, var(--color-ansi-black-bright, #6e7681))",
    "white": "var(undefined, var(--color-ansi-white, #b1bac4))",
    "whiteBright": "var(undefined, var(--color-ansi-white-bright, #ffffff))",
    "gray": "var(undefined, var(--color-ansi-gray, #6e7681))",
    "red": "var(undefined, var(--color-ansi-red, #ff7b72))",
    "redBright": "var(undefined, var(--color-ansi-red-bright, #ffa198))",
    "green": "var(undefined, var(--color-ansi-green, #3fb950))",
    "greenBright": "var(undefined, var(--color-ansi-green-bright, #56d364))",
    "yellow": "var(undefined, var(--color-ansi-yellow, #d29922))",
    "yellowBright": "var(undefined, var(--color-ansi-yellow-bright, #e3b341))",
    "blue": "var(undefined, var(--color-ansi-blue, #58a6ff))",
    "blueBright": "var(undefined, var(--color-ansi-blue-bright, #79c0ff))",
    "magenta": "var(undefined, var(--color-ansi-magenta, #bc8cff))",
    "magentaBright": "var(undefined, var(--color-ansi-magenta-bright, #d2a8ff))",
    "cyan": "var(undefined, var(--color-ansi-cyan, #39c5cf))",
    "cyanBright": "var(undefined, var(--color-ansi-cyan-bright, #56d4dd))"
  },
  "btn": {
    "text": "var(--button-default-fgColor-rest, var(--color-btn-text, #c9d1d9))",
    "bg": "var(--control-bgColor-rest, var(--color-btn-bg, #21262d))",
    "border": "var(--control-borderColor-rest, var(--color-btn-border, (theme, HI_KATIE) => `var(undefined, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`))",
    "shadow": "var(--button-default-shadow-resting, var(--color-btn-shadow, 0 0 transparent))",
    "insetShadow": "var(--button-default-shadow-inset, var(--color-btn-inset-shadow, 0 0 transparent))",
    "hoverBg": "var(--control-bgColor-hover, var(--color-btn-hover-bg, #30363d))",
    "hoverBorder": "var(--button-default-borderColor-hover, var(--color-btn-hover-border, #8b949e))",
    "activeBg": "var(--button-default-bgColor-active, var(--color-btn-active-bg, hsla(212,12%,18%,1)))",
    "activeBorder": "var(--button-default-borderColor-active, var(--color-btn-active-border, #6e7681))",
    "selectedBg": "var(--control-bgColor-active, var(--color-btn-selected-bg, #161b22))",
    "counterBg": "var(--buttonCounter-default-bgColor-rest, var(--color-btn-counter-bg, #30363d))",
    "primary": {
      "text": "var(--button-primary-fgColor-rest, var(--color-btn-primary-text, #ffffff))",
      "bg": "var(--button-primary-bgColor-rest, var(--color-btn-primary-bg, #238636))",
      "border": "var(--button-primary-borderColor-rest, var(--color-btn-primary-border, (theme, HI_KATIE) => `var(undefined, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`))",
      "shadow": "var(undefined, var(--color-btn-primary-shadow, 0 0 transparent))",
      "insetShadow": "var(undefined, var(--color-btn-primary-inset-shadow, 0 0 transparent))",
      "hoverBg": "var(--button-primary-bgColor-hover, var(--color-btn-primary-hover-bg, #2ea043))",
      "hoverBorder": "var(--button-primary-borderColor-hover, var(--color-btn-primary-hover-border, (theme, HI_KATIE) => `var(undefined, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`))",
      "selectedBg": "var(--button-primary-bgColor-active, var(--color-btn-primary-selected-bg, #238636))",
      "selectedShadow": "var(--button-primary-shadow-selected, var(--color-btn-primary-selected-shadow, 0 0 transparent))",
      "disabledText": "var(--button-primary-fgColor-disabled, var(--color-btn-primary-disabled-text, rgba(255,255,255,0.5)))",
      "disabledBg": "var(--button-primary-bgColor-disabled, var(--color-btn-primary-disabled-bg, rgba(35,134,54,0.6)))",
      "disabledBorder": "var(--button-primary-borderColor-disabled, var(--color-btn-primary-disabled-border, (theme, HI_KATIE) => `var(undefined, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`))",
      "icon": "var(--button-primary-iconColor-rest, var(--color-btn-primary-icon, #ffffff))",
      "counterBg": "var(--buttonCounter-primary-bgColor-rest, var(--color-btn-primary-counter-bg, rgba(4,38,15,0.2)))"
    },
    "outline": {
      "text": "var(undefined, var(--color-btn-primary-outline-text, #388bfd))",
      "hoverText": "var(undefined, var(--color-btn-primary-outline-hover-text, #58a6ff))",
      "hoverBg": "var(undefined, var(--color-btn-primary-outline-hover-bg, #30363d))",
      "hoverBorder": "var(undefined, var(--color-btn-primary-outline-hover-border, (theme, HI_KATIE) => `var(undefined, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`))",
      "hoverShadow": "var(undefined, var(--color-btn-primary-outline-hover-shadow, 0 1px 0 rgba(1,4,9,0.1)))// HI_KATIE: no matches",
      "hoverInsetShadow": "var(undefined, var(--color-btn-primary-outline-hover-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))// HI_KATIE: no matches",
      "hoverCounterBg": "var(undefined, var(--color-btn-primary-outline-hover-counter-bg, rgba(5,29,77,0.2)))",
      "selectedText": "var(undefined, var(--color-btn-primary-outline-selected-text, #ffffff))",
      "selectedBg": "var(undefined, var(--color-btn-primary-outline-selected-bg, #0d419d))",
      "selectedBorder": "var(undefined, var(--color-btn-primary-outline-selected-border, (theme, HI_KATIE) => `var(undefined, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`))",
      "selectedShadow": "var(undefined, var(--color-btn-primary-outline-selected-shadow, 0 0 transparent))",
      "disabledText": "var(undefined, var(--color-btn-primary-outline-disabled-text, rgba(88,166,255,0.5)))",
      "disabledBg": "var(undefined, var(--color-btn-primary-outline-disabled-bg, #0d1117))",
      "disabledCounterBg": "var(undefined, var(--color-btn-primary-outline-disabled-counter-bg, rgba(31,111,235,0.05)))",
      "counterBg": "var(undefined, var(--color-btn-primary-outline-counter-bg, rgba(5,29,77,0.2)))",
      "hoverCounterFg": "var(undefined, var(--color-btn-primary-outline-hover-counter-fg, #58a6ff))",
      "disabledCounterFg": "var(undefined, var(--color-btn-primary-outline-disabled-counter-fg, var(--focus-outlineColor, var(--color-accent-fg, rgba(47,129,247,0.5)))))",
      "counterFg": "var(undefined, var(--color-btn-primary-outline-counter-fg, #388bfd))"
    },
    "danger": {
      "text": "var(undefined, var(--color-btn-primary-outline-danger-text, #f85149))",
      "hoverText": "var(undefined, var(--color-btn-primary-outline-danger-hover-text, (theme) => `var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
      "hoverBg": "var(undefined, var(--color-btn-primary-outline-danger-hover-bg, #da3633))",
      "hoverBorder": "var(undefined, var(--color-btn-primary-outline-danger-hover-border, #f85149))",
      "hoverShadow": "var(undefined, var(--color-btn-primary-outline-danger-hover-shadow, 0 0 transparent))",
      "hoverInsetShadow": "var(undefined, var(--color-btn-primary-outline-danger-hover-inset-shadow, 0 0 transparent))",
      "hoverIcon": "var(undefined, var(--color-btn-primary-outline-danger-hover-icon, (theme) => `var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
      "hoverCounterBg": "var(undefined, var(--color-btn-primary-outline-danger-hover-counter-bg, rgba(255,255,255,0.2)))",
      "selectedText": "var(undefined, var(--color-btn-primary-outline-danger-selected-text, #ffffff))",
      "selectedBg": "var(undefined, var(--color-btn-primary-outline-danger-selected-bg, #b62324))",
      "selectedBorder": "var(undefined, var(--color-btn-primary-outline-danger-selected-border, #ff7b72))",
      "selectedShadow": "var(undefined, var(--color-btn-primary-outline-danger-selected-shadow, 0 0 transparent))",
      "disabledText": "var(undefined, var(--color-btn-primary-outline-danger-disabled-text, rgba(248,81,73,0.5)))",
      "disabledBg": "var(undefined, var(--color-btn-primary-outline-danger-disabled-bg, #0d1117))",
      "disabledCounterBg": "var(undefined, var(--color-btn-primary-outline-danger-disabled-counter-bg, rgba(218,54,51,0.05)))",
      "counterBg": "var(undefined, var(--color-btn-primary-outline-danger-counter-bg, rgba(73,2,2,0.2)))",
      "icon": "var(undefined, var(--color-btn-primary-outline-danger-icon, #f85149))",
      "counterFg": "var(undefined, var(--color-btn-primary-outline-danger-counter-fg, (theme, HI_KATIE) => `var(--control-danger-fgColor-rest, var(--color-danger-fg, ${(0, utils_v1_1.get)('scale.red.4')(theme)}))`))",
      "disabledCounterFg": "var(undefined, var(--color-btn-primary-outline-danger-disabled-counter-fg, var(--control-danger-fgColor-rest, var(--color-danger-fg, rgba(248,81,73,0.5)))))",
      "hoverCounterFg": "var(undefined, var(--color-btn-primary-outline-danger-hover-counter-fg, #ffffff))"
    },
    "inactive": {
      "bg": "var(undefined, var(--color-btn-primary-outline-danger-inactive-bg, #21262d))",
      "text": "var(undefined, var(--color-btn-primary-outline-danger-inactive-text, #8b949e))"
    }
  },
  "underlinenav": {
    "icon": "var(--underlineNav-iconColor-rest, var(--color-underlinenav-icon, (theme, HI_KATIE) => `var(--control-fgColor-placeholder, var(--color-fg-subtle, ${(0, utils_v1_1.get)('scale.gray.4')(theme)}))`))",
    "borderHover": "var(--underlineNav-borderColor-hover, var(--color-underlinenav-border-hover, (theme, HI_KATIE) => `var(--bgColor-disabled, var(--color-neutral-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.4)(theme)}))`))"
  },
  "actionListItem": {
    "inlineDivider": "var(undefined, var(--color-actionListItem-inline-divider, var(--borderColor-default, var(--color-border-default, rgba(48,54,61,0.48)))))",
    "default": {
      "hoverBg": "var(undefined, var(--color-actionListItem-default-hover-bg, rgba(177,186,196,0.12)))",
      "hoverBorder": "var(undefined, var(--color-actionListItem-default-hover-border, transparent))",
      "activeBg": "var(undefined, var(--color-actionListItem-default-active-bg, rgba(177,186,196,0.2)))",
      "activeBorder": "var(undefined, var(--color-actionListItem-default-active-border, transparent))",
      "selectedBg": "var(undefined, var(--color-actionListItem-default-selected-bg, rgba(177,186,196,0.08)))"
    },
    "danger": {
      "hoverBg": "var(undefined, var(--color-actionListItem-default-danger-hover-bg, rgba(248,81,73,0.16)))",
      "activeBg": "var(undefined, var(--color-actionListItem-default-danger-active-bg, rgba(248,81,73,0.24)))",
      "hoverText": "var(undefined, var(--color-actionListItem-default-danger-hover-text, #ff7b72))"
    }
  },
  "switchTrack": {
    "bg": "var(undefined, var(--color-switchTrack-bg, (theme) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.1)(theme)}))`))",
    "hoverBg": "var(undefined, var(--color-switchTrack-hover-bg, var(--bgColor-neutral-muted, var(--color-neutral-subtle, hsla(215,8%,72%,0.1)))))",
    "activeBg": "var(undefined, var(--color-switchTrack-active-bg, (theme, HI_KATIE) => `var(--bgColor-disabled, var(--color-neutral-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.4)(theme)}))`))",
    "disabledBg": "var(undefined, var(--color-switchTrack-disabled-bg, #21262d))",
    "fg": "var(undefined, var(--color-switchTrack-fg, var(--control-iconColor-rest, var(--color-fg-muted, #848d97))))",
    "disabledFg": "var(undefined, var(--color-switchTrack-disabled-fg, #010409))",
    "border": "var(undefined, var(--color-switchTrack-border, transparent))",
    "checked": {
      "bg": "var(undefined, var(--color-switchTrack-checked-bg, rgba(31,111,235,0.35)))",
      "hoverBg": "var(undefined, var(--color-switchTrack-checked-hover-bg, rgba(31,111,235,0.5)))",
      "activeBg": "var(undefined, var(--color-switchTrack-checked-active-bg, rgba(31,111,235,0.65)))",
      "fg": "var(undefined, var(--color-switchTrack-checked-fg, (theme) => `var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
      "disabledFg": "var(undefined, var(--color-switchTrack-checked-disabled-fg, #010409))",
      "border": "var(undefined, var(--color-switchTrack-checked-border, transparent))"
    }
  },
  "switchKnob": {
    "bg": "var(undefined, var(--color-switchKnob-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.gray.9')(theme)}))`))",
    "border": "var(undefined, var(--color-switchKnob-border, #606771))",
    "disabledBg": "var(undefined, var(--color-switchKnob-disabled-bg, (theme) => `var(--bgColor-muted, var(--color-canvas-subtle, ${(0, utils_v1_1.get)('scale.gray.8')(theme)}))`))",
    "checked": {
      "bg": "var(undefined, var(--color-switchKnob-checked-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.gray.9')(theme)}))`))",
      "disabledBg": "var(undefined, var(--color-switchKnob-checked-disabled-bg, (theme) => `var(--bgColor-muted, var(--color-canvas-subtle, ${(0, utils_v1_1.get)('scale.gray.8')(theme)}))`))",
      "border": "var(undefined, var(--color-switchKnob-checked-border, rgba(31,111,235,0.35)))"
    }
  },
  "segmentedControl": {
    "bg": "var(undefined, var(--color-segmentedControl-bg, (theme) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.1)(theme)}))`))",
    "button": {
      "bg": "var(undefined, var(--color-segmentedControl-button-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.gray.9')(theme)}))`))",
      "hover": {
        "bg": "var(undefined, var(--color-segmentedControl-button-hover-bg, #30363d))"
      },
      "active": {
        "bg": "var(undefined, var(--color-segmentedControl-button-hover-active-bg, #21262d))"
      },
      "selected": {
        "border": "var(undefined, var(--color-segmentedControl-button-hover-active-selected-border, #6e7681))"
      }
    }
  },
  "treeViewItem": {
    "chevron": {
      "hoverBg": "var(undefined, var(--color-treeViewItem-chevron-hover-bg, rgba(177,186,196,0.12)))"
    },
    "directory": {
      "fill": "var(undefined, var(--color-treeViewItem-chevron-directory-fill, var(--control-iconColor-rest, var(--color-fg-muted, #848d97))))"
    }
  },
  "fg": {
    "default": "var(--control-fgColor-rest, var(--color-fg-default, #e6edf3))",
    "muted": "var(--control-iconColor-rest, var(--color-fg-muted, #848d97))",
    "subtle": "var(--control-fgColor-placeholder, var(--color-fg-subtle, #6e7681))",
    "onEmphasis": "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #ffffff))"
  },
  "canvas": {
    "default": "var(--bgColor-default, var(--color-canvas-default, #0d1117))",
    "overlay": "var(--overlay-bgColor, var(--color-canvas-overlay, #161b22))",
    "inset": "var(--bgColor-inset, var(--color-canvas-inset, #010409))",
    "subtle": "var(--bgColor-muted, var(--color-canvas-subtle, #161b22))"
  },
  "border": {
    "default": "var(--borderColor-default, var(--color-border-default, #30363d))",
    "muted": "var(--borderColor-muted, var(--color-border-muted, #21262d))",
    "subtle": "var(undefined, var(--color-border-subtle, rgba(240,246,252,0.1)))"
  },
  "shadow": {
    "small": "var(--shadow-resting-small, var(--color-shadow-small, 0 0 transparent))",
    "medium": "var(--shadow-resting-medium, var(--color-shadow-medium, 0 3px 6px #010409))",
    "large": "var(--shadow-floating-large, var(--color-shadow-large, 0 8px 24px #010409))",
    "extraLarge": "var(--shadow-floating-xlarge, var(--color-shadow-extra-large, 0 12px 48px #010409))"
  },
  "neutral": {
    "emphasisPlus": "var(--bgColor-emphasis, var(--color-neutral-emphasis-plus, #6e7681))",
    "emphasis": "var(undefined, var(--color-neutral-emphasis, #6e7681))",
    "muted": "var(--bgColor-disabled, var(--color-neutral-muted, rgba(110,118,129,0.4)))",
    "subtle": "var(--bgColor-neutral-muted, var(--color-neutral-subtle, rgba(110,118,129,0.1)))"
  },
  "accent": {
    "fg": "var(--focus-outlineColor, var(--color-accent-fg, #2f81f7))",
    "emphasis": "var(--bgColor-accent-emphasis, var(--color-accent-emphasis, #1f6feb))",
    "muted": "var(--borderColor-accent-muted, var(--color-accent-muted, rgba(56,139,253,0.4)))",
    "subtle": "var(--bgColor-accent-muted, var(--color-accent-subtle, rgba(56,139,253,0.1)))"
  },
  "success": {
    "fg": "var(--fgColor-success, var(--color-success-fg, #3fb950))",
    "emphasis": "var(--control-borderColor-success, var(--color-success-emphasis, #238636))",
    "muted": "var(--borderColor-success-muted, var(--color-success-muted, rgba(46,160,67,0.4)))",
    "subtle": "var(--bgColor-success-muted, var(--color-success-subtle, rgba(46,160,67,0.15)))"
  },
  "attention": {
    "fg": "var(--fgColor-attention, var(--color-attention-fg, #d29922))",
    "emphasis": "var(--control-borderColor-warning, var(--color-attention-emphasis, #9e6a03))",
    "muted": "var(--borderColor-attention-muted, var(--color-attention-muted, rgba(187,128,9,0.4)))",
    "subtle": "var(--bgColor-attention-muted, var(--color-attention-subtle, rgba(187,128,9,0.15)))"
  },
  "severe": {
    "fg": "var(--fgColor-severe, var(--color-severe-fg, #db6d28))",
    "emphasis": "var(--bgColor-severe-emphasis, var(--color-severe-emphasis, #bd561d))",
    "muted": "var(--borderColor-severe-muted, var(--color-severe-muted, rgba(219,109,40,0.4)))",
    "subtle": "var(--bgColor-severe-muted, var(--color-severe-subtle, rgba(219,109,40,0.1)))"
  },
  "danger": {
    "fg": "var(--control-danger-fgColor-rest, var(--color-danger-fg, #f85149))",
    "emphasis": "var(--control-borderColor-danger, var(--color-danger-emphasis, #da3633))",
    "muted": "var(--borderColor-danger-muted, var(--color-danger-muted, rgba(248,81,73,0.4)))",
    "subtle": "var(--bgColor-danger-muted, var(--color-danger-subtle, rgba(248,81,73,0.1)))"
  },
  "open": {
    "fg": "var(--fgColor-open, var(--color-open-fg, #3fb950))",
    "emphasis": "var(--bgColor-open-emphasis, var(--color-open-emphasis, #238636))",
    "muted": "var(--borderColor-open-muted, var(--color-open-muted, rgba(46,160,67,0.4)))",
    "subtle": "var(--bgColor-open-muted, var(--color-open-subtle, rgba(46,160,67,0.15)))"
  },
  "closed": {
    "fg": "var(--fgColor-closed, var(--color-closed-fg, #f85149))",
    "emphasis": "var(--bgColor-closed-emphasis, var(--color-closed-emphasis, #da3633))",
    "muted": "var(--borderColor-closed-muted, var(--color-closed-muted, rgba(248,81,73,0.4)))",
    "subtle": "var(--bgColor-closed-muted, var(--color-closed-subtle, rgba(248,81,73,0.15)))"
  },
  "done": {
    "fg": "var(--fgColor-done, var(--color-done-fg, #a371f7))",
    "emphasis": "var(--bgColor-done-emphasis, var(--color-done-emphasis, #8957e5))",
    "muted": "var(--borderColor-done-muted, var(--color-done-muted, rgba(163,113,247,0.4)))",
    "subtle": "var(--bgColor-done-muted, var(--color-done-subtle, rgba(163,113,247,0.1)))"
  },
  "sponsors": {
    "fg": "var(--fgColor-sponsors, var(--color-sponsors-fg, #db61a2))",
    "emphasis": "var(--bgColor-sponsors-emphasis, var(--color-sponsors-emphasis, #bf4b8a))",
    "muted": "var(--borderColor-sponsors-muted, var(--color-sponsors-muted, rgba(219,97,162,0.4)))",
    "subtle": "var(--bgColor-sponsors-muted, var(--color-sponsors-subtle, rgba(219,97,162,0.1)))"
  },
  "primer": {
    "fg": {
      "disabled": "var(--control-fgColor-disabled, var(--color-primer-fg-disabled, #484f58))"
    },
    "canvas": {
      "backdrop": "var(undefined, var(--color-primer-fg-canvas-backdrop, rgba(1,4,9,0.8)))",
      "sticky": "var(undefined, var(--color-primer-fg-canvas-sticky, rgba(13,17,23,0.95)))"
    },
    "border": {
      "active": "var(undefined, var(--color-primer-fg-canvas-border-active, #f78166))",
      "contrast": "var(undefined, var(--color-primer-fg-canvas-border-contrast, rgba(255,255,255,0.2)))"
    },
    "shadow": {
      "highlight": "var(undefined, var(--color-primer-fg-canvas-border-shadow-highlight, 0 0 transparent))",
      "inset": "var(undefined, var(--color-primer-fg-canvas-border-shadow-inset, 0 0 transparent))"
    }
  },
  "scale": {
    "black": "#010409",
    "white": "#ffffff",
    "gray": [
      "#f0f6fc",
      "#c9d1d9",
      "#b1bac4",
      "#8b949e",
      "#6e7681",
      "#484f58",
      "#30363d",
      "#21262d",
      "#161b22",
      "#0d1117"
    ],
    "blue": [
      "#cae8ff",
      "#a5d6ff",
      "#79c0ff",
      "#58a6ff",
      "#388bfd",
      "#1f6feb",
      "#1158c7",
      "#0d419d",
      "#0c2d6b",
      "#051d4d"
    ],
    "green": [
      "#aff5b4",
      "#7ee787",
      "#56d364",
      "#3fb950",
      "#2ea043",
      "#238636",
      "#196c2e",
      "#0f5323",
      "#033a16",
      "#04260f"
    ],
    "yellow": [
      "#f8e3a1",
      "#f2cc60",
      "#e3b341",
      "#d29922",
      "#bb8009",
      "#9e6a03",
      "#845306",
      "#693e00",
      "#4b2900",
      "#341a00"
    ],
    "orange": [
      "#ffdfb6",
      "#ffc680",
      "#ffa657",
      "#f0883e",
      "#db6d28",
      "#bd561d",
      "#9b4215",
      "#762d0a",
      "#5a1e02",
      "#3d1300"
    ],
    "red": [
      "#ffdcd7",
      "#ffc1ba",
      "#ffa198",
      "#ff7b72",
      "#f85149",
      "#da3633",
      "#b62324",
      "#8e1519",
      "#67060c",
      "#490202"
    ],
    "purple": [
      "#eddeff",
      "#e2c5ff",
      "#d2a8ff",
      "#bc8cff",
      "#a371f7",
      "#8957e5",
      "#6e40c9",
      "#553098",
      "#3c1e70",
      "#271052"
    ],
    "pink": [
      "#ffdaec",
      "#ffbedd",
      "#ff9bce",
      "#f778ba",
      "#db61a2",
      "#bf4b8a",
      "#9e3670",
      "#7d2457",
      "#5e103e",
      "#42062a"
    ],
    "coral": [
      "#ffddd2",
      "#ffc2b2",
      "#ffa28b",
      "#f78166",
      "#ea6045",
      "#cf462d",
      "#ac3220",
      "#872012",
      "#640d04",
      "#460701"
    ]
  }
}