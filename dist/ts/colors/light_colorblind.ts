export default {
  "canvasDefaultTransparent": "var(--bgColor-transparent, var(--color-canvas-default-transparent, var(--bgColor-default, var(--color-canvas-default, rgba(255,255,255,0)))))",
  "pageHeaderBg": "var(--page-header-bgColor, var(--color-page-header-bg, (theme) => `var(--bgColor-muted, var(--color-canvas-subtle, ${(0, utils_v1_1.get)('scale.gray.0')(theme)}))`))",
  "marketingIcon": {
    "primary": "var(--color-marketing-icon-primary, #218bff)",
    "secondary": "var(--color-marketing-icon-secondary, #54aeff)"
  },
  "diffBlob": {
    "addition": {
      "numText": "var(--diffBlob-addition-fgColor-num, var(--color-diff-blob-addition-num-text, (obj) => (0, get_1.default)(obj, path)))",
      "fg": "var(--diffBlob-addition-fgColor-text, var(--color-diff-blob-addition-fg, (obj) => (0, get_1.default)(obj, path)))",
      "numBg": "var(--borderColor-success-muted, var(--color-success-muted, rgba(84,174,255,0.4)))",
      "lineBg": "rgba(221,244,255,0.5)",
      "wordBg": "var(--borderColor-success-muted, var(--color-success-muted, rgba(84,174,255,0.4)))"
    },
    "deletion": {
      "numText": "var(--diffBlob-deletion-fgColor-num, var(--color-diff-blob-deletion-num-text, (obj) => (0, get_1.default)(obj, path)))",
      "fg": "var(--diffBlob-deletion-fgColor-text, var(--color-diff-blob-deletion-fg, (obj) => (0, get_1.default)(obj, path)))",
      "numBg": "var(--borderColor-danger-muted, var(--color-danger-muted, rgba(247,153,57,0.4)))",
      "lineBg": "rgba(255,245,232,0.5)",
      "wordBg": "rgba(255,188,109,0.5)"
    },
    "hunk": {
      "numBg": "var(--diffBlob-hunk-bgColor-num, var(--color-diff-blob-hunk-num-bg, (theme) => `var(--borderColor-accent-muted, var(--color-accent-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.blue.3'), 0.4)(theme)}))`))"
    },
    "expander": {
      "icon": "var(--diffBlob-expander-iconColor, var(--color-diff-blob-expander-icon, (obj) => (0, get_1.default)(obj, path)))"
    },
    "selectedLineHighlightMixBlendMode": "var(--color-diff-blob-selected-line-highlight-mix-blend-mode, multiply)"
  },
  "diffstat": {
    "deletionBorder": "var(--color-diffstat-deletion-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`)",
    "additionBorder": "var(--color-diffstat-addition-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`)",
    "additionBg": "var(undefined, var(--color-diffstat-addition-bg, (obj) => (0, get_1.default)(obj, path)))"
  },
  "searchKeyword": {
    "hl": "var(--highlight-neutral-bgColor, var(--color-search-keyword-hl, #fff8c5))"
  },
  "prettylights": {
    "syntax": {
      "comment": "var(--color-prettylights-syntax-comment, #57606a)",
      "constant": "var(--color-prettylights-syntax-constant, #0550ae)",
      "entity": "var(--color-prettylights-syntax-entity, #6639ba)",
      "storageModifierImport": "var(--color-prettylights-syntax-storage-modifier-import, #24292f)",
      "entityTag": "var(--color-prettylights-syntax-entity-tag, #0550ae)",
      "keyword": "var(--color-prettylights-syntax-keyword, #b35900)",
      "string": "var(--color-prettylights-syntax-string, #0a3069)",
      "variable": "var(--color-prettylights-syntax-variable, #8a4600)",
      "brackethighlighterUnmatched": "var(--color-prettylights-syntax-brackethighlighter-unmatched, #6f3800)",
      "invalidIllegalText": "var(--color-prettylights-syntax-invalid-illegal-text, #f6f8fa)",
      "invalidIllegalBg": "var(--color-prettylights-syntax-invalid-illegal-bg, #6f3800)",
      "carriageReturnText": "var(--color-prettylights-syntax-carriage-return-text, #f6f8fa)",
      "carriageReturnBg": "var(--color-prettylights-syntax-carriage-return-bg, #b35900)",
      "stringRegexp": "var(--color-prettylights-syntax-string-regexp, #0550ae)",
      "markupList": "var(--color-prettylights-syntax-markup-list, #3b2300)",
      "markupHeading": "var(--color-prettylights-syntax-markup-heading, #0550ae)",
      "markupItalic": "var(--color-prettylights-syntax-markup-italic, #24292f)",
      "markupBold": "var(--color-prettylights-syntax-markup-bold, #24292f)",
      "markupDeletedText": "var(--color-prettylights-syntax-markup-deleted-text, #6f3800)",
      "markupDeletedBg": "var(--color-prettylights-syntax-markup-deleted-bg, #fff5e8)",
      "markupInsertedText": "var(--color-prettylights-syntax-markup-inserted-text, #0550ae)",
      "markupInsertedBg": "var(--color-prettylights-syntax-markup-inserted-bg, #ddf4ff)",
      "markupChangedText": "var(--color-prettylights-syntax-markup-changed-text, #8a4600)",
      "markupChangedBg": "var(--color-prettylights-syntax-markup-changed-bg, #ffddb0)",
      "markupIgnoredText": "var(--color-prettylights-syntax-markup-ignored-text, #eaeef2)",
      "markupIgnoredBg": "var(--color-prettylights-syntax-markup-ignored-bg, #0550ae)",
      "metaDiffRange": "var(--color-prettylights-syntax-meta-diff-range, #8250df)",
      "brackethighlighterAngle": "var(--color-prettylights-syntax-brackethighlighter-angle, #57606a)",
      "sublimelinterGutterMark": "var(--color-prettylights-syntax-sublimelinter-gutter-mark, #8c959f)",
      "constantOtherReferenceLink": "var(--color-prettylights-syntax-constant-other-reference-link, #0a3069)"
    }
  },
  "codemirror": {
    "text": "var(--codeMirror-fgColor, var(--color-codemirror-text, (obj) => (0, get_1.default)(obj, path)))",
    "bg": "var(--codeMirror-bgColor, var(--color-codemirror-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
    "guttersBg": "var(--codeMirror-gutters-bgColor, var(--color-codemirror-gutters-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
    "guttermarkerText": "var(--codeMirror-gutterMarker-fgColor-default, var(--color-codemirror-guttermarker-text, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
    "guttermarkerSubtleText": "var(--codeMirror-gutterMarker-fgColor-muted, var(--color-codemirror-guttermarker-subtle-text, (theme) => `var(--fgColor-muted, var(--color-fg-subtle, ${(0, utils_v1_1.get)('scale.gray.5')(theme)}))`))",
    "linenumberText": "var(--codeMirror-lineNumber-fgColor, var(--color-codemirror-linenumber-text, (obj) => (0, get_1.default)(obj, path)))",
    "cursor": "var(--codeMirror-cursor-fgColor, var(--color-codemirror-cursor, (obj) => (0, get_1.default)(obj, path)))",
    "selectionBg": "var(--codeMirror-selection-bgColor, var(--color-codemirror-selection-bg, (theme) => `var(--borderColor-accent-muted, var(--color-accent-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.blue.3'), 0.4)(theme)}))`))",
    "activelineBg": "var(--codeMirror-activeline-bgColor, var(--color-codemirror-activeline-bg, (theme) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.1'), 0.5)(theme)}))`))",
    "matchingbracketText": "var(--codeMirror-matchingBracket-fgColor, var(--color-codemirror-matchingbracket-text, (obj) => (0, get_1.default)(obj, path)))",
    "linesBg": "var(--codeMirror-lines-bgColor, var(--color-codemirror-lines-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
    "syntax": {
      "comment": "var(--codeMirror-syntax-fgColor-comment, var(--color-codemirror-syntax-comment, #24292f))",
      "constant": "var(--codeMirror-syntax-fgColor-constant, var(--color-codemirror-syntax-constant, #0550ae))",
      "entity": "var(--codeMirror-syntax-fgColor-entity, var(--color-codemirror-syntax-entity, #8250df))",
      "keyword": "var(--codeMirror-syntax-fgColor-keyword, var(--color-codemirror-syntax-keyword, #b35900))",
      "storage": "var(--codeMirror-syntax-fgColor-storage, var(--color-codemirror-syntax-storage, #b35900))",
      "string": "var(--codeMirror-syntax-fgColor-string, var(--color-codemirror-syntax-string, #0a3069))",
      "support": "var(--codeMirror-syntax-fgColor-support, var(--color-codemirror-syntax-support, #0550ae))",
      "variable": "var(--codeMirror-syntax-fgColor-variable, var(--color-codemirror-syntax-variable, #8a4600))"
    }
  },
  "checks": {
    "bg": "var(--color-checks-bg, #24292f)",
    "runBorderWidth": "var(--color-checks-run-border-width, 0px)",
    "containerBorderWidth": "var(--color-checks-container-border-width, 0px)",
    "textPrimary": "var(--color-checks-text-primary, #f6f8fa)",
    "textSecondary": "var(--color-checks-text-secondary, #8c959f)",
    "textLink": "var(--color-checks-text-link, #54aeff)",
    "btnIcon": "var(--color-checks-btn-icon, #afb8c1)",
    "btnHoverIcon": "var(--color-checks-btn-hover-icon, #f6f8fa)",
    "btnHoverBg": "var(--color-checks-btn-hover-bg, rgba(255,255,255,0.125))",
    "inputText": "var(--color-checks-input-text, #eaeef2)",
    "inputPlaceholderText": "var(--color-checks-input-placeholder-text, #8c959f)",
    "inputFocusText": "var(--color-checks-input-focus-text, #8c959f)",
    "inputBg": "var(--color-checks-input-bg, #32383f)",
    "inputShadow": "var(--color-checks-input-shadow, none)",
    "donutError": "var(--color-checks-donut-error, #dd7815)",
    "donutPending": "var(--color-checks-donut-pending, #bf8700)",
    "donutSuccess": "var(--color-checks-donut-success, (obj) => (0, get_1.default)(obj, path))",
    "donutNeutral": "var(--color-checks-donut-neutral, #afb8c1)",
    "dropdownText": "var(--color-checks-dropdown-text, #afb8c1)",
    "dropdownBg": "var(--color-checks-dropdown-bg, #32383f)",
    "dropdownBorder": "var(--color-checks-dropdown-border, #424a53)",
    "dropdownShadow": "var(--color-checks-dropdown-shadow, rgba(27,31,36,0.3))",
    "dropdownHoverText": "var(--color-checks-dropdown-hover-text, #f6f8fa)",
    "dropdownHoverBg": "var(--color-checks-dropdown-hover-bg, #424a53)",
    "dropdownBtnHoverText": "var(--color-checks-dropdown-btn-hover-text, #f6f8fa)",
    "dropdownBtnHoverBg": "var(--color-checks-dropdown-btn-hover-bg, #32383f)",
    "scrollbarThumbBg": "var(--color-checks-scrollbar-thumb-bg, #57606a)",
    "headerLabelText": "var(--color-checks-header-label-text, #d0d7de)",
    "headerLabelOpenText": "var(--color-checks-header-label-open-text, #f6f8fa)",
    "headerBorder": "var(--color-checks-header-border, #32383f)",
    "headerIcon": "var(--color-checks-header-icon, #8c959f)",
    "lineText": "var(--color-checks-line-text, #d0d7de)",
    "lineNumText": "var(--color-checks-line-num-text, rgba(140,149,159,0.75))",
    "lineTimestampText": "var(--color-checks-line-timestamp-text, #8c959f)",
    "lineHoverBg": "var(--color-checks-line-hover-bg, #32383f)",
    "lineSelectedBg": "var(--color-checks-line-selected-bg, rgba(33,139,255,0.15))",
    "lineSelectedNumText": "var(--color-checks-line-selected-num-text, #54aeff)",
    "lineDtFmText": "var(--color-checks-line-dt-fm-text, #24292f)",
    "lineDtFmBg": "var(--color-checks-line-dt-fm-bg, #9a6700)",
    "gateBg": "var(--color-checks-gate-bg, rgba(125,78,0,0.15))",
    "gateText": "var(--color-checks-gate-text, #d0d7de)",
    "gateWaitingText": "var(--color-checks-gate-waiting-text, #d4a72c)",
    "stepHeaderOpenBg": "var(--color-checks-step-header-open-bg, #32383f)",
    "stepErrorText": "var(--color-checks-step-error-text, #f79939)",
    "stepWarningText": "var(--color-checks-step-warning-text, #d4a72c)",
    "loglineText": "var(--color-checks-logline-text, #8c959f)",
    "loglineNumText": "var(--color-checks-logline-num-text, rgba(140,149,159,0.75))",
    "loglineDebugText": "var(--color-checks-logline-debug-text, #c297ff)",
    "loglineErrorText": "var(--color-checks-logline-error-text, #d0d7de)",
    "loglineErrorNumText": "var(--color-checks-logline-error-num-text, #f79939)",
    "loglineErrorBg": "var(--color-checks-logline-error-bg, rgba(138,70,0,0.15))",
    "loglineWarningText": "var(--color-checks-logline-warning-text, #d0d7de)",
    "loglineWarningNumText": "var(--color-checks-logline-warning-num-text, #d4a72c)",
    "loglineWarningBg": "var(--color-checks-logline-warning-bg, rgba(125,78,0,0.15))",
    "loglineCommandText": "var(--color-checks-logline-command-text, #54aeff)",
    "loglineSectionText": "var(--color-checks-logline-section-text, #54aeff)",
    "ansi": {
      "black": "var(--color-checks-ansi-black, #24292f)",
      "blackBright": "var(--color-checks-ansi-black-bright, #32383f)",
      "white": "var(--color-checks-ansi-white, #d0d7de)",
      "whiteBright": "var(--color-checks-ansi-white-bright, #d0d7de)",
      "gray": "var(--color-checks-ansi-gray, #8c959f)",
      "red": "var(--color-checks-ansi-red, #f79939)",
      "redBright": "var(--color-checks-ansi-red-bright, #ffbc6d)",
      "green": "var(--color-checks-ansi-green, #54aeff)",
      "greenBright": "var(--color-checks-ansi-green-bright, #80ccff)",
      "yellow": "var(--color-checks-ansi-yellow, #d4a72c)",
      "yellowBright": "var(--color-checks-ansi-yellow-bright, #eac54f)",
      "blue": "var(--color-checks-ansi-blue, #54aeff)",
      "blueBright": "var(--color-checks-ansi-blue-bright, #80ccff)",
      "magenta": "var(--color-checks-ansi-magenta, #c297ff)",
      "magentaBright": "var(--color-checks-ansi-magenta-bright, #d8b9ff)",
      "cyan": "var(--color-checks-ansi-cyan, #76e3ea)",
      "cyanBright": "var(--color-checks-ansi-cyan-bright, #b3f0ff)"
    }
  },
  "project": {
    "headerBg": "var(--color-project-header-bg, #24292f)",
    "sidebarBg": "var(--color-project-sidebar-bg, #ffffff)",
    "gradientIn": "var(--color-project-gradient-in, #ffffff)",
    "gradientOut": "var(--color-project-gradient-out, rgba(255,255,255,0))"
  },
  "mktg": {
    "btn": {
      "bg": "var(--color-mktg-btn-bg, #1b1f23))",
      "shadow": {
        "outline": "var(--color-mktg-btn-shadow-outline, rgb(0 0 0 / 15%) 0 0 0 1px inset))",
        "focus": "var(--color-mktg-btn-shadow-focus, rgb(0 0 0 / 15%) 0 0 0 4px))",
        "hover": "var(--color-mktg-btn-shadow-hover, 0 3px 2px rgba(0, 0, 0, 0.07), 0 7px 5px rgba(0, 0, 0, 0.04), 0 12px 10px rgba(0, 0, 0, 0.03), 0 22px 18px rgba(0, 0, 0, 0.03), 0 42px 33px rgba(0, 0, 0, 0.02), 0 100px 80px rgba(0, 0, 0, 0.02)))",
        "hoverMuted": "var(--color-mktg-btn-shadow-hover-muted, rgb(0 0 0 / 70%) 0 0 0 2px inset))"
      }
    }
  },
  "control": {
    "borderColor": {
      "emphasis": "var(var(--color-control-border-color-emphasis, #858F99)"
    }
  },
  "avatar": {
    "bg": "var(--avatar-bgColor, var(--color-avatar-bg, #ffffff))",
    "border": "var(--avatar-borderColor, var(--color-avatar-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
    "stackFade": "var(--avatarStack-fade-bgColor-default, var(--color-avatar-stack-fade, #afb8c1))",
    "stackFadeMore": "var(--avatarStack-fade-bgColor-muted, var(--color-avatar-stack-fade-more, #d0d7de))",
    "childShadow": "var(--avatar-shadow, var(--color-avatar-child-shadow, 0 0 0 2px rgba(255,255,255,0.8)))"
  },
  "topicTag": {
    "border": "var(--topicTag-borderColor, var(--color-topic-tag-border, transparent))"
  },
  "counter": {
    "border": "var(--counter-borderColor, var(--color-counter-border, transparent))"
  },
  "selectMenu": {
    "backdropBorder": "var(--selectMenu-borderColor, var(--color-select-menu-backdrop-border, transparent))",
    "tapHighlight": "var(--control-bgColor-active, var(--color-select-menu-tap-highlight, rgba(175,184,193,0.5)))",
    "tapFocusBg": "var(--selectMenu-bgColor-active, var(--color-select-menu-tap-focus-bg, #b6e3ff))"
  },
  "overlay": {
    "shadow": "var(--shadow-floating-small, var(--color-overlay-shadow, 0 1px 3px rgba(27,31,36,0.12), 0 8px 24px rgba(66,74,83,0.12)))",
    "backdrop": "var(--overlay-backdrop-bgColor, var(--color-overlay-backdrop, rgba(140,149,159,0.2)))"
  },
  "header": {
    "text": "var(--header-fgColor-default, var(--color-header-text, rgba(255,255,255,0.7)))",
    "bg": "var(--header-bgColor, var(--color-header-bg, #24292f))",
    "divider": "var(--header-borderColor-divider, var(--color-header-divider, #57606a))",
    "logo": "var(--header-fgColor-logo, var(--color-header-logo, #ffffff))"
  },
  "headerSearch": {
    "bg": "var(--headerSearch-bgColor, var(--color-header-search-bg, #24292f))",
    "border": "var(--headerSearch-borderColor, var(--color-header-search-border, #57606a))"
  },
  "sidenav": {
    "selectedBg": "var(--sideNav-bgColor-selected, var(--color-sidenav-selected-bg, #ffffff))"
  },
  "menu": {
    "bgActive": "var(--menu-bgColor-active, var(--color-menu-bg-active, transparent))"
  },
  "input": {
    "disabledBg": "var(--control-bgColor-disabled, var(--color-input-disabled-bg, (theme) => `var(--borderColor-neutral-muted, var(--color-neutral-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.3'), 0.2)(theme)}))`))"
  },
  "timeline": {
    "badgeBg": "var(--timelineBadge-bgColor, var(--color-timeline-badge-bg, #eaeef2))"
  },
  "ansi": {
    "black": "var(--color-ansi-black, #24292f)",
    "blackBright": "var(--color-ansi-black-bright, #57606a)",
    "white": "var(--color-ansi-white, #6e7781)",
    "whiteBright": "var(--color-ansi-white-bright, #8c959f)",
    "gray": "var(--color-ansi-gray, #6e7781)",
    "red": "var(--color-ansi-red, #b35900)",
    "redBright": "var(--color-ansi-red-bright, #8a4600)",
    "green": "var(--color-ansi-green, #0550ae)",
    "greenBright": "var(--color-ansi-green-bright, #0969da)",
    "yellow": "var(--color-ansi-yellow, #4d2d00)",
    "yellowBright": "var(--color-ansi-yellow-bright, #633c01)",
    "blue": "var(--color-ansi-blue, #0969da)",
    "blueBright": "var(--color-ansi-blue-bright, #218bff)",
    "magenta": "var(--color-ansi-magenta, #8250df)",
    "magentaBright": "var(--color-ansi-magenta-bright, #a475f9)",
    "cyan": "var(--color-ansi-cyan, #1b7c83)",
    "cyanBright": "var(--color-ansi-cyan-bright, #3192aa)"
  },
  "btn": {
    "text": "var(--button-default-fgColor-rest, var(--color-btn-text, #24292f))",
    "bg": "var(--button-default-bgColor-rest, var(--color-btn-bg, #f6f8fa))",
    "border": "var(--button-default-borderColor-rest var(--color-btn-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
    "shadow": "var(--button-default-shadow-resting, var(--color-btn-shadow, 0 1px 0 rgba(27,31,36,0.04)))",
    "insetShadow": "var(--button-default-shadow-inset, var(--color-btn-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.25)))",
    "hoverBg": "var(--button-default-bgColor-hover, var(--color-btn-hover-bg, #f3f4f6))",
    "hoverBorder": "var(--button-default-borderColor-hover, var(--color-btn-hover-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
    "activeBg": "var(--button-default-bgColor-active, var(--color-btn-active-bg, var(--button-default-bgColor-hover, var(--color-btn-hover-bg, hsla(220,14%,93%,1)))))",
    "activeBorder": "var(--button-default-borderColor-active, var(--color-btn-active-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
    "selectedBg": "var(--button-default-bgColor-selected, var(--color-btn-selected-bg, var(--button-default-bgColor-hover, var(--color-btn-hover-bg, hsla(220,14%,94%,1)))))",
    "counterBg": "var(--buttonCounter-default-bgColor-rest, var(--color-btn-counter-bg, rgba(27,31,36,0.08)))",
    "primary": {
      "text": "var(--button-primary-fgColor-rest, var(--color-btn-primary-text, #ffffff))",
      "bg": "var(--button-primary-bgColor-rest, var(--color-btn-primary-bg, (obj) => (0, get_1.default)(obj, path)))",
      "border": "var(--button-primary-borderColor-rest, var(--color-btn-primary-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
      "shadow": "var(--shadow-resting-small, var(--color-btn-primary-shadow, 0 1px 0 rgba(27,31,36,0.1)))",
      "insetShadow": "var(--shadow-highlight, var(--color-btn-primary-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))",
      "hoverBg": "#0969da",
      "hoverBorder": "var(--button-primary-borderColor-hover, var(--color-btn-primary-hover-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
      "selectedBg": "var(--button-primary-bgColor-active, var(--color-btn-primary-selected-bg, hsla(212,92%,43%,1)))",
      "selectedShadow": "var(--button-primary-shadow-selected, var(--color-btn-primary-selected-shadow, inset 0 1px 0 rgba(0,33,85,0.2)))",
      "disabledText": "var(--button-primary-fgColor-disabled, var(--color-btn-primary-disabled-text, rgba(255,255,255,0.8)))",
      "disabledBg": "#80ccff",
      "disabledBorder": "var(--button-primary-borderColor-disabled, var(--color-btn-primary-disabled-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
      "icon": "var(--button-primary-iconColor-rest, var(--color-btn-primary-icon, rgba(255,255,255,0.8)))",
      "counterBg": "var(--buttonCounter-primary-bgColor-rest, var(--color-btn-primary-counter-bg, rgba(0,33,85,0.2)))"
    },
    "outline": {
      "text": "var(--button-outline-fgColor-rest, var(--color-btn-outline-text, #0969da))",
      "hoverText": "var(--button-outline-fgColor-hover, var(--color-btn-outline-hover-text, #ffffff))",
      "hoverBg": "var(--button-outline-bgColor-hover, var(--color-btn-outline-hover-bg, #0969da))",
      "hoverBorder": "var(--button-outline-borderColor-hover, var(--color-btn-outline-hover-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
      "hoverShadow": "var(--shadow-resting-small, var(--color-btn-outline-hover-shadow, 0 1px 0 rgba(27,31,36,0.1)))",
      "hoverInsetShadow": "var(--shadow-highlight, var(--color-btn-outline-hover-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))",
      "hoverCounterBg": "var(--buttonCounter-outline-bgColor-hover, var(--color-btn-outline-hover-counter-bg, rgba(255,255,255,0.2)))",
      "selectedText": "var(--button-outline-fgColor-active, var(--color-btn-outline-selected-text, #ffffff))",
      "selectedBg": "var(--button-outline-bgColor-active, var(--color-btn-outline-selected-bg, hsla(212,92%,42%,1)))",
      "selectedBorder": "var(--button-outline-borderColor-active, var(--color-btn-outline-selected-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
      "selectedShadow": "var(--button-outline-shadow-selected, var(--color-btn-outline-selected-shadow, inset 0 1px 0 rgba(0,33,85,0.2)))",
      "disabledText": "var(--button-outline-fgColor-disabled, var(--color-btn-outline-disabled-text, rgba(9,105,218,0.5)))",
      "disabledBg": "var(--button-outline-bgColor-disabled, var(--color-btn-outline-disabled-bg, #f6f8fa))",
      "disabledCounterBg": "var(--buttonCounter-outline-bgColor-disabled, var(--color-btn-outline-disabled-counter-bg, rgba(9,105,218,0.05)))",
      "counterBg": "var(--buttonCounter-outline-bgColor-rest, var(--color-btn-outline-counter-bg, #0969da1a))",
      "counterFg": "var(--buttonCounter-outline-fgColor-rest, var(--color-btn-outline-counter-fg, #0550ae))",
      "hoverCounterFg": "var(--buttonCounter-outline-fgColor-hover, var(--color-btn-outline-hover-counter-fg, #ffffff))",
      "disabledCounterFg": "var(--buttonCounter-outline-fgColor-disabled, var(--color-btn-outline-disabled-counter-fg, rgba(9,105,218,0.5)))"
    },
    "danger": {
      "text": "var(--button-danger-fgColor-rest, var(--color-btn-danger-text, #b35900))",
      "hoverText": "var(--button-danger-fgColor-hover, var(--color-btn-danger-hover-text, #ffffff))",
      "hoverBg": "var(--button-danger-bgColor-hover, var(--color-btn-danger-hover-bg, #8a4600))",
      "hoverBorder": "var(--button-danger-borderColor-hover, var(--color-btn-danger-hover-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
      "hoverShadow": "var(--shadow-resting-small, var(--color-btn-danger-hover-shadow, 0 1px 0 rgba(27,31,36,0.1)))",
      "hoverInsetShadow": "var(--shadow-highlight, var(--color-btn-danger-hover-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))",
      "hoverCounterBg": "var(--buttonCounter-danger-bgColor-hover, var(--color-btn-danger-hover-counter-bg, rgba(255,255,255,0.2)))",
      "selectedText": "var(--button-danger-fgColor-active, var(--color-btn-danger-selected-text, #ffffff))",
      "selectedBg": "var(--button-danger-bgColor-active, var(--color-btn-danger-selected-bg, hsla(30,100%,32%,1)))",
      "selectedBorder": "var(--button-danger-borderColor-active, var(--color-btn-danger-selected-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
      "selectedShadow": "var(--button-danger-shadow-selected, var(--color-btn-danger-selected-shadow, inset 0 1px 0 rgba(65,32,0,0.2)))",
      "disabledText": "var(--button-danger-fgColor-disabled, var(--color-btn-danger-disabled-text, rgba(179,89,0,0.5)))",
      "disabledBg": "var(--button-danger-bgColor-disabled, var(--color-btn-danger-disabled-bg, #f6f8fa))",
      "disabledCounterBg": "var(--buttonCounter-danger-bgColor-disabled, var(--color-btn-danger-disabled-counter-bg, rgba(179,89,0,0.05)))",
      "counterBg": "var(--buttonCounter-danger-bgColor-rest, var(--color-btn-danger-counter-bg, rgba(179,89,0,0.1)))",
      "icon": "var(--button-danger-iconColor-rest, var(--color-btn-danger-icon, #b35900))",
      "hoverIcon": "var(--button-danger-iconColor-hover, var(--color-btn-danger-hover-icon, #ffffff))",
      "counterFg": "var(--buttonCounter-danger-fgColor-rest, var(--color-btn-danger-counter-fg, #8a4600))",
      "hoverCounterFg": "var(--buttonCounter-danger-fgColor-hover, var(--color-btn-danger-hover-counter-fg, #ffffff))",
      "disabledCounterFg": "var(--buttonCounter-danger-fgColor-disabled, var(--color-btn-danger-disabled-counter-fg, rgba(179,89,0,0.5)))"
    },
    "inactive": {
      "bg": "var(--button-inactive-bgColor-rest, var(--color-btn-inactive-bg, #eaeef2))",
      "text": "var(--button-inactive-fgColor-rest, var(--color-btn-inactive-text, #57606a))"
    }
  },
  "underlinenav": {
    "icon": "var(--underlineNav-iconColor-rest, var(--color-underlinenav-icon, (theme) => `var(--fgColor-muted, var(--color-fg-subtle, ${(0, utils_v1_1.get)('scale.gray.5')(theme)}))`))",
    "borderHover": "var(--underlineNav-borderColor-hover, var(--color-underlinenav-border-hover, (theme) => `var(--borderColor-neutral-muted, var(--color-neutral-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.3'), 0.2)(theme)}))`))"
  },
  "actionListItem": {
    "inlineDivider": "var(--borderColor-muted, var(--color-action-list-item-inline-divider, var(--borderColor-default, var(--color-border-default, rgba(208,215,222,0.48)))))",
    "default": {
      "hoverBg": "var(--control-transparent-bgColor-hover, var(--color-action-list-item-default-hover-bg, rgba(208,215,222,0.32)))",
      "hoverBorder": "var(--control-transparent-borderColor-hover, var(--color-action-list-item-default-hover-border, transparent))",
      "activeBg": "var(--control-transparent-bgColor-active, var(--color-action-list-item-default-active-bg, rgba(208,215,222,0.48)))",
      "activeBorder": "var(--control-transparent-borderColor-active, var(--color-action-list-item-default-active-border, transparent))",
      "selectedBg": "var(--control-transparent-bgColor-selected, var(--color-action-list-item-default-selected-bg, rgba(208,215,222,0.24)))"
    },
    "danger": {
      "hoverBg": "var(--control-danger-bgColor-hover, var(--color-action-list-item-default-danger-hover-bg, var(--bgColor-danger-muted, var(--color-danger-subtle, rgba(255,245,232,0.64)))))",
      "activeBg": "var(--control-danger-bgColor-active, var(--color-action-list-item-default-danger-active-bg, (theme) => `var(--bgColor-danger-muted, var(--color-danger-subtle, ${(0, utils_v1_1.get)('scale.red.0')(theme)}))`))",
      "hoverText": "var(--control-danger-fgColor-hover, var(--color-action-list-item-default-danger-hover-text, (obj) => (0, get_1.default)(obj, path)))"
    }
  },
  "switchTrack": {
    "bg": "var(--controlTrack-bgColor-rest, var(--color-switch-track-bg, #eaeef2))",
    "hoverBg": "var(--controlTrack-bgColor-hover, var(--color-switch-track-hover-bg, hsla(210,24%,90%,1)))",
    "activeBg": "var(--controlTrack-bgColor-active, var(--color-switch-track-active-bg, hsla(210,24%,88%,1)))",
    "disabledBg": "var(--controlTrack-bgColor-disabled, var(--color-switch-track-disabled-bg, #8c959f))",
    "fg": "var(--controlTrack-fgColor-rest, var(--color-switch-track-fg, (obj) => (0, get_1.default)(obj, path)))",
    "disabledFg": "var(--controlTrack-fgColor-disabled, var(--color-switch-track-disabled-fg, (theme) => `var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
    "border": "var(--controlTrack-borderColor-rest, var(--color-switch-track-border, transparent))",
    "checked": {
      "bg": "var(--control-checked-bgColor-rest, var(--color-switch-track-checked-bg, (theme) => `var(--bgColor-accent-emphasis, var(--color-accent-emphasis, ${(0, utils_v1_1.get)('scale.blue.5')(theme)}))`))",
      "hoverBg": "var(--control-checked-bgColor-hover, var(--color-switch-track-checked-hover-bg, #0860CA))",
      "activeBg": "var(--control-checked-bgColor-active, var(--color-switch-track-checked-active-bg, #0757BA))",
      "fg": "var(--control-checked-fgColor-rest, var(--color-switch-track-checked-fg, (theme) => `var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
      "disabledFg": "var(--control-checked-fgColor-disabled, var(--color-switch-track-checked-disabled-fg, (theme) => `var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
      "border": "var(--borderColor-transparent, var(--color-switch-track-checked-border, transparent))"
    }
  },
  "switchKnob": {
    "bg": "var(--controlKnob-bgColor-rest, var(--color-switch-knob-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
    "disabledBg": "var(--controlKnob-bgColor-disabled, var(--color-switch-knob-disabled-bg, (theme) => `var(--bgColor-muted, var(--color-canvas-subtle, ${(0, utils_v1_1.get)('scale.gray.0')(theme)}))`))",
    "border": "var(--controlKnob-borderColor-rest, var(--color-switch-knob-border, #858F99))",
    "checked": {
      "bg": "var(--controlKnob-bgColor-checked, var(--color-switch-knob-checked-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
      "disabledBg": "var(--controlKnob-bgColor-disabled, var(--color-switch-knob-checked-disabled-bg, (theme) => `var(--bgColor-muted, var(--color-canvas-subtle, ${(0, utils_v1_1.get)('scale.gray.0')(theme)}))`))",
      "border": "var(--controlKnob-borderColor-checked, var(--color-switch-knob-checked-border, (theme) => `var(--bgColor-accent-emphasis, var(--color-accent-emphasis, ${(0, utils_v1_1.get)('scale.blue.5')(theme)}))`))"
    }
  },
  "segmentedControl": {
    "bg": "var(--controlTrack-bgColor-rest, var(--color-segmented-control-bg, #eaeef2))",
    "button": {
      "bg": "var(--controlKnob-bgColor-rest, var(--color-segmented-control-button-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
      "hover": {
        "bg": "var(--controlTrack-bgColor-hover, var(--color-segmented-control-button-hover-bg, rgba(175,184,193,0.2)))"
      },
      "active": {
        "bg": "var(--controlTrack-bgColor-active, var(--color-segmented-control-button-hover-active-bg, rgba(175,184,193,0.4)))"
      },
      "selected": {
        "border": "var(--controlKnob-borderColor-rest, var(--color-segmented-control-button-hover-active-selected-border, #8c959f))"
      }
    }
  },
  "treeViewItem": {
    "chevron": {
      "hoverBg": "var(--control-transparent-bgColor-hover, var(--color-tree-view-item-chevron-hover-bg, rgba(208,215,222,0.32)))"
    },
    "directory": {
      "fill": "var(--treeViewItem-leadingVisual-bgColor-rest, var(--color-tree-view-item-chevron-directory-fill, #54aeff))"
    }
  },
  "fg": {
    "default": "#24292f",
    "muted": "#57606a",
    "subtle": "var(--fgColor-muted, var(--color-fg-subtle, #6e7781))",
    "onEmphasis": "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #ffffff))"
  },
  "canvas": {
    "default": "var(--bgColor-default, var(--color-canvas-default, #ffffff))",
    "overlay": "var(--overlay-bgColor, var(--color-canvas-overlay, #ffffff))",
    "inset": "var(--bgColor-inset, var(--color-canvas-inset, #f6f8fa))",
    "subtle": "var(--bgColor-muted, var(--color-canvas-subtle, #f6f8fa))"
  },
  "border": {
    "default": "var(--borderColor-default, var(--color-border-default, #d0d7de))",
    "muted": "var(--borderColor-muted, var(--color-border-muted, hsla(210,18%,87%,1)))",
    "subtle": "var(--borderColor-muted, var(--color-border-subtle, rgba(27,31,36,0.15)))"
  },
  "shadow": {
    "small": "var(--shadow-resting-small, var(--color-shadow-small, 0 1px 0 rgba(27,31,36,0.04)))",
    "medium": "var(--shadow-resting-medium, var(--color-shadow-medium, 0 3px 6px rgba(140,149,159,0.15)))",
    "large": "var(--shadow-floating-large, var(--color-shadow-large, 0 8px 24px rgba(140,149,159,0.2)))",
    "extraLarge": "var(--shadow-floating-xlarge, var(--color-shadow-extra-large, 0 12px 28px rgba(140,149,159,0.3)))"
  },
  "neutral": {
    "emphasisPlus": "var(--bgColor-emphasis, var(--color-neutral-emphasis-plus, #24292f))",
    "emphasis": "var(--bgColor-neutral-emphasis, var(--color-neutral-emphasis, #6e7781))",
    "muted": "var(--borderColor-neutral-muted, var(--color-neutral-muted, rgba(175,184,193,0.2)))",
    "subtle": "var(--bgColor-neutral-muted, var(--color-neutral-subtle, rgba(234,238,242,0.5)))"
  },
  "accent": {
    "fg": "var(--fgColor-accent, var(--color-accent-fg, #0969da))",
    "emphasis": "var(--bgColor-accent-emphasis, var(--color-accent-emphasis, #0969da))",
    "muted": "var(--borderColor-accent-muted, var(--color-accent-muted, rgba(84,174,255,0.4)))",
    "subtle": "var(--bgColor-accent-muted, var(--color-accent-subtle, #ddf4ff))"
  },
  "success": {
    "fg": "var(--fgColor-success, var(--color-success-fg, #0969da))",
    "emphasis": "#0969da",
    "muted": "var(--borderColor-success-muted, var(--color-success-muted, rgba(84,174,255,0.4)))",
    "subtle": "var(--bgColor-success-muted, var(--color-success-subtle, #ddf4ff))"
  },
  "attention": {
    "fg": "var(--fgColor-attention, var(--color-attention-fg, #9a6700))",
    "emphasis": "var(--bgColor-attention-emphasis, var(--color-attention-emphasis, #9a6700))",
    "muted": "var(--borderColor-attention-muted, var(--color-attention-muted, rgba(212,167,44,0.4)))",
    "subtle": "var(--bgColor-attention-muted, var(--color-attention-subtle, #fff8c5))"
  },
  "severe": {
    "fg": "var(--fgColor-severe, var(--color-severe-fg, #b35900))",
    "emphasis": "var(--bgColor-severe-emphasis, var(--color-severe-emphasis, #b35900))",
    "muted": "var(--borderColor-severe-muted, var(--color-severe-muted, rgba(247,153,57,0.4)))",
    "subtle": "var(--bgColor-severe-muted, var(--color-severe-subtle, #fff5e8))"
  },
  "danger": {
    "fg": "#b35900",
    "emphasis": "var(--borderColor-danger-emphasis, var(--color-danger-emphasis, #b35900))",
    "muted": "var(--borderColor-danger-muted, var(--color-danger-muted, rgba(247,153,57,0.4)))",
    "subtle": "var(--bgColor-danger-muted, var(--color-danger-subtle, #fff5e8))"
  },
  "open": {
    "fg": "#b35900",
    "emphasis": "#dd7815",
    "muted": "rgba(247,153,57,0.4)",
    "subtle": "#fff5e8"
  },
  "closed": {
    "fg": "#6e7781",
    "emphasis": "#6e7781",
    "muted": "rgba(175,184,193,0.4)",
    "subtle": "#f6f8fa"
  },
  "done": {
    "fg": "var(--fgColor-done, var(--color-done-fg, #8250df))",
    "emphasis": "var(--bgColor-done-emphasis, var(--color-done-emphasis, #8250df))",
    "muted": "var(--borderColor-done-muted, var(--color-done-muted, rgba(194,151,255,0.4)))",
    "subtle": "var(--bgColor-done-muted, var(--color-done-subtle, #fbefff))"
  },
  "sponsors": {
    "fg": "var(--fgColor-sponsors, var(--color-sponsors-fg, #bf3989))",
    "emphasis": "var(--bgColor-sponsors-emphasis, var(--color-sponsors-emphasis, #bf3989))",
    "muted": "var(--borderColor-sponsors-muted, var(--color-sponsors-muted, rgba(255,128,200,0.4)))",
    "subtle": "var(--bgColor-sponsors-muted, var(--color-sponsors-subtle, #ffeff7))"
  },
  "primer": {
    "fg": {
      "disabled": "var(--fgColor-disabled, var(--color-primer-fg-disabled, #8c959f))"
    },
    "canvas": {
      "backdrop": "var(--overlay-backdrop-bgColor, var(--color-primer-fg-canvas-backdrop, rgba(27,31,36,0.5)))",
      "sticky": "var(--color-primer-canvas-sticky, rgba(255,255,255,0.95))"
    },
    "border": {
      "active": "var(--underlineNav-borderColor-active, var(--color-primer-border-active, #fd8c73))",
      "contrast": "var(--borderColor-muted, var(--color-primer-border-contrast, rgba(27,31,36,0.1)))"
    },
    "shadow": {
      "highlight": "var(--shadow-highlight, var(--color-primer-shadow-highlight, inset 0 1px 0 rgba(255,255,255,0.25)))",
      "inset": "var(--shadow-inset, var(--color-primer-shadow-inset, inset 0 1px 0 rgba(208,215,222,0.2)))"
    }
  },
  "scale": {
    "black": "#1b1f24",
    "white": "#ffffff",
    "gray": [
      "#f6f8fa",
      "#eaeef2",
      "#d0d7de",
      "#afb8c1",
      "#8c959f",
      "#6e7781",
      "#57606a",
      "#424a53",
      "#32383f",
      "#24292f"
    ],
    "blue": [
      "#ddf4ff",
      "#b6e3ff",
      "#80ccff",
      "#54aeff",
      "#218bff",
      "#0969da",
      "#0550ae",
      "#033d8b",
      "#0a3069",
      "#002155"
    ],
    "green": [
      "#ddf4ff",
      "#b6e3ff",
      "#80ccff",
      "#54aeff",
      "#218bff",
      "#0969da",
      "#0550ae",
      "#033d8b",
      "#0a3069",
      "#002155"
    ],
    "yellow": [
      "#fff8c5",
      "#fae17d",
      "#eac54f",
      "#d4a72c",
      "#bf8700",
      "#9a6700",
      "#7d4e00",
      "#633c01",
      "#4d2d00",
      "#3b2300"
    ],
    "orange": [
      "#fff5e8",
      "#ffddb0",
      "#ffbc6d",
      "#f79939",
      "#dd7815",
      "#b35900",
      "#8a4600",
      "#6f3800",
      "#572c00",
      "#412000"
    ],
    "red": [
      "#fff5e8",
      "#ffddb0",
      "#ffbc6d",
      "#f79939",
      "#dd7815",
      "#b35900",
      "#8a4600",
      "#6f3800",
      "#572c00",
      "#412000"
    ],
    "purple": [
      "#fbefff",
      "#ecd8ff",
      "#d8b9ff",
      "#c297ff",
      "#a475f9",
      "#8250df",
      "#6639ba",
      "#512a97",
      "#3e1f79",
      "#2e1461"
    ],
    "pink": [
      "#ffeff7",
      "#ffd3eb",
      "#ffadda",
      "#ff80c8",
      "#e85aad",
      "#bf3989",
      "#99286e",
      "#772057",
      "#611347",
      "#4d0336"
    ],
    "coral": [
      "#fff0eb",
      "#ffd6cc",
      "#ffb4a1",
      "#fd8c73",
      "#ec6547",
      "#c4432b",
      "#9e2f1c",
      "#801f0f",
      "#691105",
      "#510901"
    ]
  }
}