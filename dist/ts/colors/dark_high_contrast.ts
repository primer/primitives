export default {
  "canvasDefaultTransparent": "var(--bgColor-transparent, var(--color-canvas-default-transparent, var(--bgColor-default, var(--color-canvas-default, rgba(10,12,16,0)))))",
  "pageHeaderBg": "var(--page-header-bgColor, var(--color-page-header-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.gray.9')(theme)}))`))",
  "marketingIcon": {
    "primary": "var(--color-marketing-icon-primary, #91cbff)",
    "secondary": "var(--color-marketing-icon-secondary, #409eff)"
  },
  "diffBlob": {
    "addition": {
      "numText": "var(--diffBlob-addition-fgColor-num, var(--color-diff-blob-addition-num-text, (obj) => (0, get_1.default)(obj, path)))",
      "fg": "#0a0c10",
      "numBg": "var(--diffBlob-addition-bgColor-num, var(--color-diff-blob-addition-num-bg, rgba(38,205,77,0.3)))",
      "lineBg": "var(--diffBlob-addition-bgColor-line, var(--color-diff-blob-addition-line-bg, (theme) => `var(--bgColor-success-muted, var(--color-success-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.green.4'), 0.15)(theme)}))`))",
      "wordBg": "var(--diffBlob-addition-bgColor-word, var(--color-diff-blob-addition-word-bg, (obj) => (0, get_1.default)(obj, path)))"
    },
    "deletion": {
      "numText": "var(--diffBlob-deletion-fgColor-num, var(--color-diff-blob-deletion-num-text, (obj) => (0, get_1.default)(obj, path)))",
      "fg": "#0a0c10",
      "numBg": "var(--diffBlob-deletion-bgColor-num, var(--color-diff-blob-deletion-num-bg, rgba(255,106,105,0.3)))",
      "lineBg": "var(--diffBlob-deletion-bgColor-line, var(--color-diff-blob-deletion-line-bg, (theme) => `var(--bgColor-danger-muted, var(--color-danger-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.red.4'), 0.1)(theme)}))`))",
      "wordBg": "var(--diffBlob-deletion-bgColor-word, var(--color-diff-blob-deletion-word-bg, (obj) => (0, get_1.default)(obj, path)))"
    },
    "hunk": {
      "numBg": "rgba(64,158,255,0.4)"
    },
    "expander": {
      "icon": "#f0f3f6"
    },
    "selectedLineHighlightMixBlendMode": "var(--color-diff-blob-selected-line-highlight-mix-blend-mode, screen)"
  },
  "diffstat": {
    "deletionBorder": "#ffb1af",
    "additionBorder": "#4ae168",
    "additionBg": "var(--diffStat-addition-bgColor, var(--color-diffstat-addition-bg, #26cd4d))"
  },
  "searchKeyword": {
    "hl": "var(--highlight-neutral-bgColor, var(--color-search-keyword-hl, rgba(240,183,47,0.4)))"
  },
  "prettylights": {
    "syntax": {
      "comment": "var(--color-prettylights-syntax-comment, #bdc4cc)",
      "constant": "var(--color-prettylights-syntax-constant, #91cbff)",
      "entity": "var(--color-prettylights-syntax-entity, #dbb7ff)",
      "storageModifierImport": "var(--color-prettylights-syntax-storage-modifier-import, #f0f3f6)",
      "entityTag": "var(--color-prettylights-syntax-entity-tag, #72f088)",
      "keyword": "var(--color-prettylights-syntax-keyword, #ff9492)",
      "string": "var(--color-prettylights-syntax-string, #addcff)",
      "variable": "var(--color-prettylights-syntax-variable, #ffb757)",
      "brackethighlighterUnmatched": "var(--color-prettylights-syntax-brackethighlighter-unmatched, #ff6a69)",
      "invalidIllegalText": "var(--color-prettylights-syntax-invalid-illegal-text, #ffffff)",
      "invalidIllegalBg": "var(--color-prettylights-syntax-invalid-illegal-bg, #e82a2f)",
      "carriageReturnText": "var(--color-prettylights-syntax-carriage-return-text, #ffffff)",
      "carriageReturnBg": "var(--color-prettylights-syntax-carriage-return-bg, #ff4445)",
      "stringRegexp": "var(--color-prettylights-syntax-string-regexp, #72f088)",
      "markupList": "var(--color-prettylights-syntax-markup-list, #fbd669)",
      "markupHeading": "var(--color-prettylights-syntax-markup-heading, #409eff)",
      "markupItalic": "var(--color-prettylights-syntax-markup-italic, #f0f3f6)",
      "markupBold": "var(--color-prettylights-syntax-markup-bold, #f0f3f6)",
      "markupDeletedText": "var(--color-prettylights-syntax-markup-deleted-text, #ffdedb)",
      "markupDeletedBg": "var(--color-prettylights-syntax-markup-deleted-bg, #cc1421)",
      "markupInsertedText": "var(--color-prettylights-syntax-markup-inserted-text, #acf7b6)",
      "markupInsertedBg": "var(--color-prettylights-syntax-markup-inserted-bg, #007728)",
      "markupChangedText": "var(--color-prettylights-syntax-markup-changed-text, #ffe1b4)",
      "markupChangedBg": "var(--color-prettylights-syntax-markup-changed-bg, #a74c00)",
      "markupIgnoredText": "var(--color-prettylights-syntax-markup-ignored-text, #f0f3f6)",
      "markupIgnoredBg": "var(--color-prettylights-syntax-markup-ignored-bg, #318bf8)",
      "metaDiffRange": "var(--color-prettylights-syntax-meta-diff-range, #dbb7ff)",
      "brackethighlighterAngle": "var(--color-prettylights-syntax-brackethighlighter-angle, #bdc4cc)",
      "sublimelinterGutterMark": "var(--color-prettylights-syntax-sublimelinter-gutter-mark, #7a828e)",
      "constantOtherReferenceLink": "var(--color-prettylights-syntax-constant-other-reference-link, #addcff)"
    }
  },
  "codemirror": {
    "text": "var(--codeMirror-fgColor, var(--color-codemirror-text, (obj) => (0, get_1.default)(obj, path)))",
    "bg": "var(--codeMirror-bgColor, var(--color-codemirror-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.gray.9')(theme)}))`))",
    "guttersBg": "var(--codeMirror-gutters-bgColor, var(--color-codemirror-gutters-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.gray.9')(theme)}))`))",
    "guttermarkerText": "var(--codeMirror-gutterMarker-fgColor-default, var(--color-codemirror-guttermarker-text, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.gray.9')(theme)}))`))",
    "guttermarkerSubtleText": "var(--codeMirror-gutterMarker-fgColor-muted, var(--color-codemirror-guttermarker-subtle-text, (theme) => `var(--fgColor-muted, var(--color-fg-subtle, ${(0, utils_v1_1.get)('scale.gray.4')(theme)}))`))",
    "linenumberText": "var(--codeMirror-lineNumber-fgColor, var(--color-codemirror-linenumber-text, (obj) => (0, get_1.default)(obj, path)))",
    "cursor": "var(--codeMirror-cursor-fgColor, var(--color-codemirror-cursor, (obj) => (0, get_1.default)(obj, path)))",
    "selectionBg": "rgba(64,158,255,0.4)",
    "activelineBg": "var(--codeMirror-activeline-bgColor, var(--color-codemirror-activeline-bg, (theme) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.1)(theme)}))`))",
    "matchingbracketText": "var(--codeMirror-matchingBracket-fgColor, var(--color-codemirror-matchingbracket-text, (obj) => (0, get_1.default)(obj, path)))",
    "linesBg": "var(--codeMirror-lines-bgColor, var(--color-codemirror-lines-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.gray.9')(theme)}))`))",
    "syntax": {
      "comment": "var(--codeMirror-syntax-fgColor-comment, var(--color-codemirror-syntax-comment, #bdc4cc))",
      "constant": "var(--codeMirror-syntax-fgColor-constant, var(--color-codemirror-syntax-constant, #91cbff))",
      "entity": "var(--codeMirror-syntax-fgColor-entity, var(--color-codemirror-syntax-entity, #dbb7ff))",
      "keyword": "var(--codeMirror-syntax-fgColor-keyword, var(--color-codemirror-syntax-keyword, #ff9492))",
      "storage": "var(--codeMirror-syntax-fgColor-storage, var(--color-codemirror-syntax-storage, #ff9492))",
      "string": "var(--codeMirror-syntax-fgColor-string, var(--color-codemirror-syntax-string, #addcff))",
      "support": "var(--codeMirror-syntax-fgColor-support, var(--color-codemirror-syntax-support, #91cbff))",
      "variable": "var(--codeMirror-syntax-fgColor-variable, var(--color-codemirror-syntax-variable, #ffb757))"
    }
  },
  "checks": {
    "bg": "var(--color-checks-bg, (theme) => `var(--bgColor-inset, var(--color-canvas-inset, ${(0, utils_v1_1.get)('scale.black')(theme)}))`)",
    "runBorderWidth": "var(--color-checks-run-border-width, 1px)",
    "containerBorderWidth": "var(--color-checks-container-border-width, 1px)",
    "textPrimary": "var(--color-checks-text-primary, (obj) => (0, get_1.default)(obj, path))",
    "textSecondary": "var(--color-checks-text-secondary, (obj) => (0, get_1.default)(obj, path))",
    "textLink": "var(--color-checks-text-link, (obj) => (0, get_1.default)(obj, path))",
    "btnIcon": "var(--color-checks-btn-icon, (obj) => (0, get_1.default)(obj, path))",
    "btnHoverIcon": "var(--color-checks-btn-hover-icon, (obj) => (0, get_1.default)(obj, path))",
    "btnHoverBg": "var(--color-checks-btn-hover-bg, (theme) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.1)(theme)}))`)",
    "inputText": "var(--color-checks-input-text, (obj) => (0, get_1.default)(obj, path))",
    "inputPlaceholderText": "var(--color-checks-input-placeholder-text, (theme) => `var(--fgColor-muted, var(--color-fg-subtle, ${(0, utils_v1_1.get)('scale.gray.4')(theme)}))`)",
    "inputFocusText": "var(--color-checks-input-focus-text, (obj) => (0, get_1.default)(obj, path))",
    "inputBg": "var(--color-checks-input-bg, #272b33)",
    "inputShadow": "var(--color-checks-input-shadow, 0 0 0 1px (obj) => (0, get_1.default)(obj, path))",
    "donutError": "var(--color-checks-donut-error, #ff6a69)",
    "donutPending": "var(--color-checks-donut-pending, #f0b72f)",
    "donutSuccess": "var(--color-checks-donut-success, #09b43a)",
    "donutNeutral": "var(--color-checks-donut-neutral, #bdc4cc)",
    "dropdownText": "var(--color-checks-dropdown-text, (obj) => (0, get_1.default)(obj, path))",
    "dropdownBg": "var(--color-checks-dropdown-bg, (theme) => `var(--overlay-bgColor, var(--color-canvas-overlay, ${(0, utils_v1_1.get)('scale.gray.8')(theme)}))`)",
    "dropdownBorder": "var(--color-checks-dropdown-border, (obj) => (0, get_1.default)(obj, path))",
    "dropdownShadow": "var(--color-checks-dropdown-shadow, rgba(1,4,9,0.3))",
    "dropdownHoverText": "var(--color-checks-dropdown-hover-text, (obj) => (0, get_1.default)(obj, path))",
    "dropdownHoverBg": "var(--color-checks-dropdown-hover-bg, (theme) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.1)(theme)}))`)",
    "dropdownBtnHoverText": "var(--color-checks-dropdown-btn-hover-text, (obj) => (0, get_1.default)(obj, path))",
    "dropdownBtnHoverBg": "var(--color-checks-dropdown-btn-hover-bg, (theme) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.1)(theme)}))`)",
    "scrollbarThumbBg": "var(--color-checks-scrollbar-thumb-bg, (theme) => `var(--borderColor-neutral-muted, var(--color-neutral-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.4)(theme)}))`)",
    "headerLabelText": "var(--color-checks-header-label-text, (obj) => (0, get_1.default)(obj, path))",
    "headerLabelOpenText": "var(--color-checks-header-label-open-text, (obj) => (0, get_1.default)(obj, path))",
    "headerBorder": "var(--color-checks-header-border, (obj) => (0, get_1.default)(obj, path))",
    "headerIcon": "var(--color-checks-header-icon, (obj) => (0, get_1.default)(obj, path))",
    "lineText": "var(--color-checks-line-text, (obj) => (0, get_1.default)(obj, path))",
    "lineNumText": "var(--color-checks-line-num-text, (theme) => `var(--fgColor-muted, var(--color-fg-subtle, ${(0, utils_v1_1.get)('scale.gray.4')(theme)}))`)",
    "lineTimestampText": "var(--color-checks-line-timestamp-text, (theme) => `var(--fgColor-muted, var(--color-fg-subtle, ${(0, utils_v1_1.get)('scale.gray.4')(theme)}))`)",
    "lineHoverBg": "var(--color-checks-line-hover-bg, (theme) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.1)(theme)}))`)",
    "lineSelectedBg": "var(--color-checks-line-selected-bg, (theme) => `var(--bgColor-accent-muted, var(--color-accent-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.blue.4'), 0.1)(theme)}))`)",
    "lineSelectedNumText": "var(--color-checks-line-selected-num-text, (obj) => (0, get_1.default)(obj, path))",
    "lineDtFmText": "var(--color-checks-line-dt-fm-text, (obj) => (0, get_1.default)(obj, path))",
    "lineDtFmBg": "var(--color-checks-line-dt-fm-bg, (theme) => `var(--bgColor-attention-emphasis, var(--color-attention-emphasis, ${(0, utils_v1_1.get)('scale.yellow.5')(theme)}))`)",
    "gateBg": "var(--color-checks-gate-bg, (theme) => `var(--bgColor-attention-muted, var(--color-attention-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.yellow.4'), 0.15)(theme)}))`)",
    "gateText": "var(--color-checks-gate-text, (obj) => (0, get_1.default)(obj, path))",
    "gateWaitingText": "var(--color-checks-gate-waiting-text, (theme) => `var(--fgColor-attention, var(--color-attention-fg, ${(0, utils_v1_1.get)('scale.yellow.3')(theme)}))`)",
    "stepHeaderOpenBg": "var(--color-checks-step-header-open-bg, (theme) => `var(--bgColor-muted, var(--color-canvas-subtle, ${(0, utils_v1_1.get)('scale.gray.8')(theme)}))`)",
    "stepErrorText": "var(--color-checks-step-error-text, (theme) => `var(--fgColor-danger, var(--color-danger-fg, ${(0, utils_v1_1.get)('scale.red.4')(theme)}))`)",
    "stepWarningText": "var(--color-checks-step-warning-text, (theme) => `var(--fgColor-attention, var(--color-attention-fg, ${(0, utils_v1_1.get)('scale.yellow.3')(theme)}))`)",
    "loglineText": "var(--color-checks-logline-text, (obj) => (0, get_1.default)(obj, path))",
    "loglineNumText": "var(--color-checks-logline-num-text, (theme) => `var(--fgColor-muted, var(--color-fg-subtle, ${(0, utils_v1_1.get)('scale.gray.4')(theme)}))`)",
    "loglineDebugText": "var(--color-checks-logline-debug-text, (theme) => `var(--fgColor-done, var(--color-done-fg, ${(0, utils_v1_1.get)('scale.purple.4')(theme)}))`)",
    "loglineErrorText": "var(--color-checks-logline-error-text, (obj) => (0, get_1.default)(obj, path))",
    "loglineErrorNumText": "var(--color-checks-logline-error-num-text, (theme) => `var(--fgColor-muted, var(--color-fg-subtle, ${(0, utils_v1_1.get)('scale.gray.4')(theme)}))`)",
    "loglineErrorBg": "var(--color-checks-logline-error-bg, (theme) => `var(--bgColor-danger-muted, var(--color-danger-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.red.4'), 0.1)(theme)}))`)",
    "loglineWarningText": "var(--color-checks-logline-warning-text, (obj) => (0, get_1.default)(obj, path))",
    "loglineWarningNumText": "var(--color-checks-logline-warning-num-text, (theme) => `var(--fgColor-attention, var(--color-attention-fg, ${(0, utils_v1_1.get)('scale.yellow.3')(theme)}))`)",
    "loglineWarningBg": "var(--color-checks-logline-warning-bg, (theme) => `var(--bgColor-attention-muted, var(--color-attention-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.yellow.4'), 0.15)(theme)}))`)",
    "loglineCommandText": "var(--color-checks-logline-command-text, (obj) => (0, get_1.default)(obj, path))",
    "loglineSectionText": "var(--color-checks-logline-section-text, (theme) => `var(--fgColor-success, var(--color-success-fg, ${(0, utils_v1_1.get)('scale.green.3')(theme)}))`)",
    "ansi": {
      "black": "var(--color-checks-ansi-black, #0a0c10)",
      "blackBright": "var(--color-checks-ansi-black-bright, #272b33)",
      "white": "var(--color-checks-ansi-white, #d9dee3))",
      "whiteBright": "var(--color-checks-ansi-white-bright, #d9dee3)",
      "gray": "var(--color-checks-ansi-gray, #9ea7b3)",
      "red": "var(--color-checks-ansi-red, #ff9492)",
      "redBright": "var(--color-checks-ansi-red-bright, #ffb1af)",
      "green": "var(--color-checks-ansi-green, #26cd4d)",
      "greenBright": "var(--color-checks-ansi-green-bright, #4ae168)",
      "yellow": "var(--color-checks-ansi-yellow, #f0b72f)",
      "yellowBright": "var(--color-checks-ansi-yellow-bright, #f7c843)",
      "blue": "var(--color-checks-ansi-blue, #71b7ff)",
      "blueBright": "var(--color-checks-ansi-blue-bright, #91cbff)",
      "magenta": "var(--color-checks-ansi-magenta, #cb9eff)",
      "magentaBright": "var(--color-checks-ansi-magenta-bright, #dbb7ff)",
      "cyan": "var(--color-checks-ansi-cyan, #76e3ea)",
      "cyanBright": "var(--color-checks-ansi-cyan-bright, #b3f0ff)"
    }
  },
  "project": {
    "headerBg": "var(--color-project-header-bg, #0a0c10)",
    "sidebarBg": "var(--color-project-sidebar-bg, #272b33)",
    "gradientIn": "var(--color-project-gradient-in, #272b33)",
    "gradientOut": "var(--color-project-gradient-out, rgba(39,43,51,0))"
  },
  "mktg": {
    "btn": {
      "bg": "var(--color-mktg-btn-bg, #f6f8fa))",
      "shadow": {
        "outline": "var(--color-mktg-btn-shadow-outline, rgb(255 255 255 / 25%) 0 0 0 1px inset))",
        "focus": "var(--color-mktg-btn-shadow-focus, rgb(255 255 255 / 25%) 0 0 0 4px))",
        "hover": "var(--color-mktg-btn-shadow-hover, 0 4px 7px rgba(0, 0, 0, 0.15), 0 100px 80px rgba(255, 255, 255, 0.02), 0 42px 33px rgba(255, 255, 255, 0.024), 0 22px 18px rgba(255, 255, 255, 0.028), 0 12px 10px rgba(255, 255, 255, 0.034), 0 7px 5px rgba(255, 255, 255, 0.04), 0 3px 2px rgba(255, 255, 255, 0.07)))",
        "hoverMuted": "var(--color-mktg-btn-shadow-hover-muted, rgb(255 255 255) 0 0 0 2px inset))"
      }
    }
  },
  "control": {
    "borderColor": {
      "emphasis": "#9ea7b3"
    }
  },
  "avatar": {
    "bg": "var(--avatar-bgColor, var(--color-avatar-bg, rgba(255,255,255,0.1)))",
    "border": "rgba(255,255,255,0.9)",
    "stackFade": "var(--avatarStack-fade-bgColor-default, var(--color-avatar-stack-fade, #525964))",
    "stackFadeMore": "var(--avatarStack-fade-bgColor-muted, var(--color-avatar-stack-fade-more, #272b33))",
    "childShadow": "var(--avatar-shadow, var(--color-avatar-child-shadow, 0 0 0 2px #0a0c10))"
  },
  "topicTag": {
    "border": "var(--bgColor-accent-emphasis, var(--color-accent-emphasis, #409eff))"
  },
  "counter": {
    "border": "var(--counter-borderColor, var(--color-counter-border, transparent))"
  },
  "selectMenu": {
    "backdropBorder": "var(--selectMenu-borderColor, var(--color-select-menu-backdrop-border, #7a828e))",
    "tapHighlight": "var(--control-bgColor-active, var(--color-select-menu-tap-highlight, rgba(82,89,100,0.5)))",
    "tapFocusBg": "var(--selectMenu-bgColor-active, var(--color-select-menu-tap-focus-bg, #1e60d5))"
  },
  "overlay": {
    "shadow": "var(--shadow-floating-small, var(--color-overlay-shadow, 0 0 0 1px #525964, 0 16px 32px rgba(1,4,9,0.85)))",
    "backdrop": "var(--overlay-backdrop-bgColor, var(--color-overlay-backdrop, rgba(39,43,51,0.4)))"
  },
  "header": {
    "text": "var(--header-fgColor-default, var(--color-header-text, rgba(255,255,255,0.7)))",
    "bg": "var(--header-bgColor, var(--color-header-bg, #272b33))",
    "divider": "var(--header-borderColor-divider, var(--color-header-divider, #bdc4cc))",
    "logo": "var(--header-fgColor-logo, var(--color-header-logo, #ffffff))"
  },
  "headerSearch": {
    "bg": "var(--headerSearch-bgColor, var(--color-header-search-bg, #0a0c10))",
    "border": "var(--headerSearch-borderColor, var(--color-header-search-border, #525964))"
  },
  "sidenav": {
    "selectedBg": "var(--sideNav-bgColor-selected, var(--color-sidenav-selected-bg, #272b33))"
  },
  "menu": {
    "bgActive": "var(--menu-bgColor-active, var(--color-menu-bg-active, #272b33))"
  },
  "input": {
    "disabledBg": "var(--control-bgColor-disabled, var(--color-input-disabled-bg, var(--borderColor-neutral-muted, var(--color-neutral-muted, rgba(158,167,179,0)))))"
  },
  "timeline": {
    "badgeBg": "var(--timelineBadge-bgColor, var(--color-timeline-badge-bg, #272b33))"
  },
  "ansi": {
    "black": "var(--color-ansi-black, #7a828e)",
    "blackBright": "var(--color-ansi-black-bright, #9ea7b3)",
    "white": "var(--color-ansi-white, #d9dee3)",
    "whiteBright": "var(--color-ansi-white-bright, #ffffff)",
    "gray": "var(--color-ansi-gray, #9ea7b3)",
    "red": "var(--color-ansi-red, #ff9492)",
    "redBright": "var(--color-ansi-red-bright, #ffb1af)",
    "green": "var(--color-ansi-green, #26cd4d)",
    "greenBright": "var(--color-ansi-green-bright, #4ae168)",
    "yellow": "var(--color-ansi-yellow, #f0b72f)",
    "yellowBright": "var(--color-ansi-yellow-bright, #f7c843)",
    "blue": "var(--color-ansi-blue, #71b7ff)",
    "blueBright": "var(--color-ansi-blue-bright, #91cbff)",
    "magenta": "var(--color-ansi-magenta, #cb9eff)",
    "magentaBright": "var(--color-ansi-magenta-bright, #dbb7ff)",
    "cyan": "var(--color-ansi-cyan, #39c5cf)",
    "cyanBright": "var(--color-ansi-cyan-bright, #56d4dd)"
  },
  "btn": {
    "text": "var(--button-default-fgColor-rest, var(--color-btn-text, #f0f3f6))",
    "bg": "var(--button-default-bgColor-rest, var(--color-btn-bg, #272b33))",
    "border": "var(--button-default-borderColor-rest, var(--color-btn-border, (obj) => (0, get_1.default)(obj, path)))",
    "shadow": "var(--button-default-shadow-resting, var(--color-btn-shadow, 0 0 transparent))",
    "insetShadow": "var(--button-default-shadow-inset, var(--color-btn-inset-shadow, 0 0 transparent))",
    "hoverBg": "var(--button-default-bgColor-hover, var(--color-btn-hover-bg, #525964))",
    "hoverBorder": "var(--button-default-borderColor-hover, var(--color-btn-hover-border, #bdc4cc))",
    "activeBg": "var(--button-default-bgColor-active, var(--color-btn-active-bg, hsla(217,10%,33%,1)))",
    "activeBorder": "var(--button-default-borderColor-active, var(--color-btn-active-border, #9ea7b3))",
    "selectedBg": "rgba(82,89,100,0.9)",
    "counterBg": "var(--buttonCounter-default-bgColor-rest, var(--color-btn-counter-bg, #525964))",
    "primary": {
      "text": "#0a0c10",
      "bg": "var(--button-primary-bgColor-rest, var(--color-btn-primary-bg, #09b43a))",
      "border": "#4ae168",
      "shadow": "var(--shadow-resting-small, var(--color-btn-primary-shadow, 0 0 transparent))",
      "insetShadow": "var(--shadow-highlight, var(--color-btn-primary-inset-shadow, 0 0 transparent))",
      "hoverBg": "#26cd4d",
      "hoverBorder": "#4ae168",
      "selectedBg": "var(--button-primary-bgColor-active, var(--color-btn-primary-selected-bg, #09b43a))",
      "selectedShadow": "var(--button-primary-shadow-selected, var(--color-btn-primary-selected-shadow, 0 0 transparent))",
      "disabledText": "rgba(10,12,16,0.5)",
      "disabledBg": "rgba(9,180,58,0.6)",
      "disabledBorder": "rgba(74,225,104,0.4)",
      "icon": "#0a0c10",
      "counterBg": "rgba(1,4,9,0.15)"
    },
    "outline": {
      "text": "var(--button-outline-fgColor-rest, var(--color-btn-outline-text, #409eff))",
      "hoverText": "var(--button-outline-fgColor-hover, var(--color-btn-outline-hover-text, #71b7ff))",
      "hoverBg": "var(--button-outline-bgColor-hover, var(--color-btn-outline-hover-bg, #525964))",
      "hoverBorder": "var(--button-outline-borderColor-hover, var(--color-btn-outline-hover-border, (obj) => (0, get_1.default)(obj, path)))",
      "hoverShadow": "var(--shadow-resting-small, var(--color-btn-outline-hover-shadow, 0 1px 0 rgba(1,4,9,0.1)))// HI_KATIE: no matches",
      "hoverInsetShadow": "var(--shadow-highlight, var(--color-btn-outline-hover-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))// HI_KATIE: no matches",
      "hoverCounterBg": "var(--buttonCounter-outline-bgColor-hover, var(--color-btn-outline-hover-counter-bg, rgba(25,79,177,0.2)))",
      "selectedText": "var(--button-outline-fgColor-active, var(--color-btn-outline-selected-text, #ffffff))",
      "selectedBg": "var(--button-outline-bgColor-active, var(--color-btn-outline-selected-bg, #2672f3))",
      "selectedBorder": "var(--button-outline-borderColor-active, var(--color-btn-outline-selected-border, (obj) => (0, get_1.default)(obj, path)))",
      "selectedShadow": "var(--button-outline-shadow-selected, var(--color-btn-outline-selected-shadow, 0 0 transparent))",
      "disabledText": "var(--button-outline-fgColor-disabled, var(--color-btn-outline-disabled-text, rgba(113,183,255,0.5)))",
      "disabledBg": "var(--button-outline-bgColor-disabled, var(--color-btn-outline-disabled-bg, #0a0c10))",
      "disabledCounterBg": "var(--buttonCounter-outline-bgColor-disabled, var(--color-btn-outline-disabled-counter-bg, rgba(64,158,255,0.05)))",
      "counterBg": "var(--buttonCounter-outline-bgColor-rest, var(--color-btn-outline-counter-bg, rgba(25,79,177,0.2)))",
      "hoverCounterFg": "var(--buttonCounter-outline-fgColor-hover, var(--color-btn-outline-hover-counter-fg, #71b7ff))",
      "disabledCounterFg": "var(--buttonCounter-outline-fgColor-disabled, var(--color-btn-outline-disabled-counter-fg, rgba(113,183,255,0.5)))",
      "counterFg": "var(--buttonCounter-outline-fgColor-rest, var(--color-btn-outline-counter-fg, #409eff))"
    },
    "danger": {
      "text": "var(--button-danger-fgColor-rest, var(--color-btn-danger-text, #ff6a69))",
      "hoverText": "var(--button-danger-fgColor-hover, var(--color-btn-danger-hover-text, (obj) => (0, get_1.default)(obj, path)))",
      "hoverBg": "var(--button-danger-bgColor-hover, var(--color-btn-danger-hover-bg, #ff6a69))",
      "hoverBorder": "var(--button-danger-borderColor-hover, var(--color-btn-danger-hover-border, #ff6a69))",
      "hoverShadow": "var(--shadow-resting-small, var(--color-btn-danger-hover-shadow, 0 0 transparent))",
      "hoverInsetShadow": "var(--shadow-highlight, var(--color-btn-danger-hover-inset-shadow, 0 0 transparent))",
      "hoverIcon": "var(--button-danger-iconColor-hover, var(--color-btn-danger-hover-icon, (obj) => (0, get_1.default)(obj, path)))",
      "hoverCounterBg": "rgba(1,4,9,0.15)",
      "selectedText": "var(--button-danger-fgColor-active, var(--color-btn-danger-selected-text, #ffffff))",
      "selectedBg": "var(--button-danger-bgColor-active, var(--color-btn-danger-selected-bg, #ff4445))",
      "selectedBorder": "var(--button-danger-borderColor-active, var(--color-btn-danger-selected-border, #ff9492))",
      "selectedShadow": "var(--button-danger-shadow-selected, var(--color-btn-danger-selected-shadow, 0 0 transparent))",
      "disabledText": "var(--button-danger-fgColor-disabled, var(--color-btn-danger-disabled-text, rgba(255,106,105,0.5)))",
      "disabledBg": "var(--button-danger-bgColor-disabled, var(--color-btn-danger-disabled-bg, #0a0c10))",
      "disabledCounterBg": "var(--buttonCounter-danger-bgColor-disabled, var(--color-btn-danger-disabled-counter-bg, rgba(255,106,105,0.05)))",
      "counterBg": "rgba(1,4,9,0.15)",
      "icon": "var(--button-danger-iconColor-rest, var(--color-btn-danger-icon, #ff6a69))",
      "counterFg": "var(--buttonCounter-danger-fgColor-rest, var(--color-btn-danger-counter-fg, (theme) => `var(--fgColor-danger, var(--color-danger-fg, ${(0, utils_v1_1.get)('scale.red.4')(theme)}))`))",
      "disabledCounterFg": "var(--buttonCounter-danger-fgColor-disabled, var(--color-btn-danger-disabled-counter-fg, var(--fgColor-danger, var(--color-danger-fg, rgba(255,106,105,0.5)))))",
      "hoverCounterFg": "var(--buttonCounter-danger-fgColor-hover, var(--color-btn-danger-hover-counter-fg, #ffffff))"
    },
    "inactive": {
      "bg": "var(--button-inactive-bgColor-rest, var(--color-btn-inactive-bg, #272b33))",
      "text": "var(--button-inactive-fgColor-rest, var(--color-btn-inactive-text, #bdc4cc))"
    }
  },
  "underlinenav": {
    "icon": "#f0f3f6",
    "borderHover": "#bdc4cc"
  },
  "actionListItem": {
    "inlineDivider": "#7a828e",
    "default": {
      "hoverBg": "#272b33",
      "hoverBorder": "#7a828e",
      "activeBg": "#525964",
      "activeBorder": "#9ea7b3",
      "selectedBg": "#525964"
    },
    "danger": {
      "hoverBg": "var(--borderColor-danger-emphasis, var(--color-danger-emphasis, #ff6a69))",
      "activeBg": "#ff4445",
      "hoverText": "#0a0c10"
    }
  },
  "switchTrack": {
    "bg": "#9ea7b3",
    "hoverBg": "hsla(214,12%,61%,1)",
    "activeBg": "hsla(214,12%,58%,1)",
    "disabledBg": "var(--controlTrack-bgColor-disabled, var(--color-switch-track-disabled-bg, #272b33))",
    "fg": "#0a0c10",
    "disabledFg": "var(--controlTrack-fgColor-disabled, var(--color-switch-track-disabled-fg, #010409))",
    "border": "var(--controlTrack-borderColor-rest, var(--color-switch-track-border, transparent))",
    "checked": {
      "bg": "var(--bgColor-accent-emphasis, var(--color-accent-emphasis, #409eff))",
      "hoverBg": "var(--control-checked-bgColor-hover, var(--color-switch-track-checked-hover-bg, rgba(64,158,255,0.5)))",
      "activeBg": "var(--control-checked-bgColor-active, var(--color-switch-track-checked-active-bg, rgba(64,158,255,0.65)))",
      "fg": "var(--control-checked-fgColor-rest, var(--color-switch-track-checked-fg, (obj) => (0, get_1.default)(obj, path)))",
      "disabledFg": "var(--control-checked-fgColor-disabled, var(--color-switch-track-checked-disabled-fg, #010409))",
      "border": "var(--borderColor-transparent, var(--color-switch-track-checked-border, transparent))"
    }
  },
  "switchKnob": {
    "bg": "var(--controlKnob-bgColor-rest, var(--color-switch-knob-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.gray.9')(theme)}))`))",
    "border": "#9ea7b3",
    "disabledBg": "var(--controlKnob-bgColor-disabled, var(--color-switch-knob-disabled-bg, (theme) => `var(--bgColor-muted, var(--color-canvas-subtle, ${(0, utils_v1_1.get)('scale.gray.8')(theme)}))`))",
    "checked": {
      "bg": "var(--controlKnob-bgColor-checked, var(--color-switch-knob-checked-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.gray.9')(theme)}))`))",
      "disabledBg": "var(--controlKnob-bgColor-disabled, var(--color-switch-knob-checked-disabled-bg, (theme) => `var(--bgColor-muted, var(--color-canvas-subtle, ${(0, utils_v1_1.get)('scale.gray.8')(theme)}))`))",
      "border": "var(--bgColor-accent-emphasis, var(--color-accent-emphasis, #409eff))"
    }
  },
  "segmentedControl": {
    "bg": "var(--controlTrack-bgColor-rest, var(--color-segmented-control-bg, (theme) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.1)(theme)}))`))",
    "button": {
      "bg": "var(--controlKnob-bgColor-rest, var(--color-segmented-control-button-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.gray.9')(theme)}))`))",
      "hover": {
        "bg": "var(--controlTrack-bgColor-hover, var(--color-segmented-control-button-hover-bg, #525964))"
      },
      "active": {
        "bg": "var(--controlTrack-bgColor-active, var(--color-segmented-control-button-active-bg, #272b33))"
      },
      "selected": {
        "border": "var(--controlKnob-borderColor-rest, var(--color-segmented-control-button-selected-border, #9ea7b3))"
      }
    }
  },
  "treeViewItem": {
    "chevron": {
      "hoverBg": "#525964"
    },
    "directory": {
      "fill": "var(--treeViewItem-leadingVisual-bgColor-rest, var(--color-tree-view-item-directory-fill, (obj) => (0, get_1.default)(obj, path)))"
    }
  },
  "fg": {
    "default": "#f0f3f6",
    "muted": "#f0f3f6",
    "subtle": "var(--fgColor-muted, var(--color-fg-subtle, #9ea7b3))",
    "onEmphasis": "#0a0c10"
  },
  "canvas": {
    "default": "var(--bgColor-default, var(--color-canvas-default, #0a0c10))",
    "overlay": "var(--overlay-bgColor, var(--color-canvas-overlay, #272b33))",
    "inset": "var(--bgColor-inset, var(--color-canvas-inset, #010409))",
    "subtle": "var(--bgColor-muted, var(--color-canvas-subtle, #272b33))"
  },
  "border": {
    "default": "#7a828e",
    "muted": "#7a828e",
    "subtle": "#7a828e"
  },
  "shadow": {
    "small": "var(--shadow-resting-small, var(--color-shadow-small, 0 0 transparent))",
    "medium": "var(--shadow-resting-medium, var(--color-shadow-medium, 0 3px 6px #010409))",
    "large": "var(--shadow-floating-large, var(--color-shadow-large, 0 8px 24px #010409))",
    "extraLarge": "var(--shadow-floating-xlarge, var(--color-shadow-extra-large, 0 12px 48px #010409))"
  },
  "neutral": {
    "emphasisPlus": "#ffffff",
    "emphasis": "#9ea7b3",
    "muted": "var(--borderColor-neutral-muted, var(--color-neutral-muted, rgba(158,167,179,0.4)))",
    "subtle": "var(--bgColor-neutral-muted, var(--color-neutral-subtle, rgba(158,167,179,0.1)))"
  },
  "accent": {
    "fg": "#71b7ff",
    "emphasis": "var(--bgColor-accent-emphasis, var(--color-accent-emphasis, #409eff))",
    "muted": "#409eff",
    "subtle": "var(--bgColor-accent-muted, var(--color-accent-subtle, rgba(64,158,255,0.1)))"
  },
  "success": {
    "fg": "var(--fgColor-success, var(--color-success-fg, #26cd4d))",
    "emphasis": "var(--bgColor-success-emphasis, var(--color-success-emphasis, #09b43a))",
    "muted": "#09b43a",
    "subtle": "var(--bgColor-success-muted, var(--color-success-subtle, rgba(9,180,58,0.15)))"
  },
  "attention": {
    "fg": "var(--fgColor-attention, var(--color-attention-fg, #f0b72f))",
    "emphasis": "var(--bgColor-attention-emphasis, var(--color-attention-emphasis, #e09b13))",
    "muted": "#e09b13",
    "subtle": "var(--bgColor-attention-muted, var(--color-attention-subtle, rgba(224,155,19,0.15)))"
  },
  "severe": {
    "fg": "var(--fgColor-severe, var(--color-severe-fg, #e7811d))",
    "emphasis": "var(--bgColor-severe-emphasis, var(--color-severe-emphasis, #e7811d))",
    "muted": "#e7811d",
    "subtle": "var(--bgColor-severe-muted, var(--color-severe-subtle, rgba(231,129,29,0.1)))"
  },
  "danger": {
    "fg": "var(--fgColor-danger, var(--color-danger-fg, #ff6a69))",
    "emphasis": "var(--borderColor-danger-emphasis, var(--color-danger-emphasis, #ff6a69))",
    "muted": "#ff6a69",
    "subtle": "var(--bgColor-danger-muted, var(--color-danger-subtle, rgba(255,106,105,0.1)))"
  },
  "open": {
    "fg": "var(--fgColor-open, var(--color-open-fg, #26cd4d))",
    "emphasis": "var(--bgColor-open-emphasis, var(--color-open-emphasis, #09b43a))",
    "muted": "var(--borderColor-open-muted, var(--color-open-muted, rgba(9,180,58,0.4)))",
    "subtle": "var(--bgColor-open-muted, var(--color-open-subtle, rgba(9,180,58,0.15)))"
  },
  "closed": {
    "fg": "var(--fgColor-closed, var(--color-closed-fg, #ff6a69))",
    "emphasis": "var(--bgColor-closed-emphasis, var(--color-closed-emphasis, #ff6a69))",
    "muted": "var(--borderColor-closed-muted, var(--color-closed-muted, rgba(255,106,105,0.4)))",
    "subtle": "var(--bgColor-closed-muted, var(--color-closed-subtle, rgba(255,106,105,0.15)))"
  },
  "done": {
    "fg": "var(--fgColor-done, var(--color-done-fg, #b780ff))",
    "emphasis": "var(--bgColor-done-emphasis, var(--color-done-emphasis, #b87fff))",
    "muted": "#b780ff",
    "subtle": "var(--bgColor-done-muted, var(--color-done-subtle, rgba(183,128,255,0.1)))"
  },
  "sponsors": {
    "fg": "var(--fgColor-sponsors, var(--color-sponsors-fg, #ef6eb1))",
    "emphasis": "var(--bgColor-sponsors-emphasis, var(--color-sponsors-emphasis, #ef6eb1))",
    "muted": "#ef6eb1",
    "subtle": "var(--bgColor-sponsors-muted, var(--color-sponsors-subtle, rgba(239,110,177,0.1)))"
  },
  "primer": {
    "fg": {
      "disabled": "var(--fgColor-disabled, var(--color-primer-fg-disabled, #7a828e))"
    },
    "canvas": {
      "backdrop": "var(--overlay-backdrop-bgColor, var(--color-primer-canvas-backdrop, rgba(1,4,9,0.8)))",
      "sticky": "var(--color-primer-canvas-sticky, rgba(10,12,16,0.95))"
    },
    "border": {
      "active": "var(--underlineNav-borderColor-active, var(--color-primer-border-active, #ff967d))",
      "contrast": "var(--borderColor-muted, var(--color-primer-border-contrast, rgba(255,255,255,0.2)))"
    },
    "shadow": {
      "highlight": "var(--shadow-highlight, var(--color-primer-shadow-highlight, 0 0 transparent))",
      "inset": "var(--shadow-inset, var(--color-primer-shadow-inset, 0 0 transparent))"
    }
  },
  "scale": {
    "black": "#010409",
    "white": "#ffffff",
    "gray": [
      "#ffffff",
      "#f0f3f6",
      "#d9dee3",
      "#bdc4cc",
      "#9ea7b3",
      "#7a828e",
      "#525964",
      "#272b33",
      "#272b33",
      "#0a0c10"
    ],
    "blue": [
      "#caeaff",
      "#addcff",
      "#91cbff",
      "#71b7ff",
      "#409eff",
      "#409eff",
      "#318bf8",
      "#2672f3",
      "#1e60d5",
      "#194fb1"
    ],
    "green": [
      "#acf7b6",
      "#72f088",
      "#4ae168",
      "#26cd4d",
      "#09b43a",
      "#09b43a",
      "#02a232",
      "#008c2c",
      "#007728",
      "#006222"
    ],
    "yellow": [
      "#fbe59e",
      "#fbd669",
      "#f7c843",
      "#f0b72f",
      "#e09b13",
      "#e09b13",
      "#c88508",
      "#ae7104",
      "#945d02",
      "#7b4900"
    ],
    "orange": [
      "#ffe1b4",
      "#ffcf86",
      "#ffb757",
      "#fe9a2d",
      "#e7811d",
      "#e7811d",
      "#d57014",
      "#bf5e0a",
      "#a74c00",
      "#8f3c00"
    ],
    "red": [
      "#ffdedb",
      "#ffc9c7",
      "#ffb1af",
      "#ff9492",
      "#ff6a69",
      "#ff6a69",
      "#ff4445",
      "#e82a2f",
      "#cc1421",
      "#ad0116"
    ],
    "purple": [
      "#f0dfff",
      "#e6ccff",
      "#dbb7ff",
      "#cb9eff",
      "#b780ff",
      "#b87fff",
      "#a66bff",
      "#954ffd",
      "#8031f7",
      "#6921d7"
    ],
    "pink": [
      "#ffdceb",
      "#ffc7e1",
      "#ffadd4",
      "#ff8dc7",
      "#ef6eb1",
      "#ef6eb1",
      "#e456a3",
      "#d23d91",
      "#b72c7d",
      "#9c1d6a"
    ],
    "coral": [
      "#ffded4",
      "#ffcbb9",
      "#ffb39b",
      "#ff967d",
      "#fc704f",
      "#fc704f",
      "#f75133",
      "#e03b21",
      "#c62612",
      "#a91500"
    ]
  }
}