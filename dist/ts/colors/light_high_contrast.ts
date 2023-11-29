export default {
  "canvasDefaultTransparent": "var(undefined, var(--color--canvas-default-transparent, var(--bgColor-default, var(--color-canvas-default, rgba(255,255,255,0)))))",
  "pageHeaderBg": "var(--bgColor-default, var(--color-canvas-default, #ffffff))",
  "marketingIcon": {
    "primary": "var(undefined, var(--color-marketingIcon-primary, #1168e3))",
    "secondary": "var(undefined, var(--color-marketingIcon-secondary, #368cf9))"
  },
  "diffBlob": {
    "addition": {
      "numText": "var(undefined, var(--color-addition-num-text, (obj) => (0, get_1.default)(obj, path)))",
      "fg": "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #ffffff))",
      "numBg": "var(undefined, var(--color-addition-num-bg, #ccffd8))",
      "lineBg": "var(undefined, var(--color-addition-line-bg, #e6ffec))",
      "wordBg": "#055d20"
    },
    "deletion": {
      "numText": "var(undefined, var(--color-deletion-num-text, (obj) => (0, get_1.default)(obj, path)))",
      "fg": "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #ffffff))",
      "numBg": "var(undefined, var(--color-deletion-num-bg, #ffd7d5))",
      "lineBg": "var(undefined, var(--color-deletion-line-bg, (theme) => `var(--bgColor-danger-muted, var(--color-danger-subtle, ${(0, utils_v1_1.get)('scale.red.0')(theme)}))`))",
      "wordBg": "var(--control-borderColor-danger, var(--color-danger-emphasis, #a0111f))"
    },
    "hunk": {
      "numBg": "#9cd7ff"
    },
    "expander": {
      "icon": "var(undefined, var(--color-expander-icon, (obj) => (0, get_1.default)(obj, path)))"
    },
    "selectedLineHighlightMixBlendMode": "var(undefined, var(--color-expander-selected-line-highlight-mix-blend-mode, multiply))"
  },
  "diffstat": {
    "deletionBorder": "var(undefined, var(--color-diffstat-deletion-border, (obj) => {\n        const resolvedValue = resolveValue(value, obj);\n        // Instead of value being #hex, the value is now var(--v, #hex)\n        const hexColorValue = getFallbackValueFromVar(resolvedValue);\n        const hexColorValueWithTransparency = (0, color2k_1.transparentize)(hexColorValue, 1 - amount).replace(/ /g, '');\n        return resolvedValue.replace(hexColorValue, hexColorValueWithTransparency);\n    }))",
    "additionBorder": "var(undefined, var(--color-diffstat-addition-border, (obj) => {\n        const resolvedValue = resolveValue(value, obj);\n        // Instead of value being #hex, the value is now var(--v, #hex)\n        const hexColorValue = getFallbackValueFromVar(resolvedValue);\n        const hexColorValueWithTransparency = (0, color2k_1.transparentize)(hexColorValue, 1 - amount).replace(/ /g, '');\n        return resolvedValue.replace(hexColorValue, hexColorValueWithTransparency);\n    }))",
    "additionBg": "var(undefined, var(--color-diffstat-addition-bg, (obj) => (0, get_1.default)(obj, path)))"
  },
  "searchKeyword": {
    "hl": "var(undefined, var(--color-searchKeyword-hl, #fcf7be))"
  },
  "prettylights": {
    "syntax": {
      "comment": "var(undefined, var(--color-syntax-comment, #4b535d))",
      "constant": "var(undefined, var(--color-syntax-constant, #023b95))",
      "entity": "var(undefined, var(--color-syntax-entity, #512598))",
      "storageModifierImport": "var(undefined, var(--color-syntax-storage-modifier-import, #0e1116))",
      "entityTag": "var(undefined, var(--color-syntax-entity-tag, #024c1a))",
      "keyword": "var(undefined, var(--color-syntax-keyword, #a0111f))",
      "string": "var(undefined, var(--color-syntax-string, #032563))",
      "variable": "var(undefined, var(--color-syntax-variable, #702c00))",
      "brackethighlighterUnmatched": "var(undefined, var(--color-syntax-brackethighlighter-unmatched, #6e011a))",
      "invalidIllegalText": "var(undefined, var(--color-syntax-invalid-illegal-text, #ffffff))",
      "invalidIllegalBg": "var(undefined, var(--color-syntax-invalid-illegal-bg, #6e011a))",
      "carriageReturnText": "var(undefined, var(--color-syntax-carriage-return-text, #ffffff))",
      "carriageReturnBg": "var(undefined, var(--color-syntax-carriage-return-bg, #a0111f))",
      "stringRegexp": "var(undefined, var(--color-syntax-string-regexp, #024c1a))",
      "markupList": "var(undefined, var(--color-syntax-markup-list, #2e1800))",
      "markupHeading": "var(undefined, var(--color-syntax-markup-heading, #023b95))",
      "markupItalic": "var(undefined, var(--color-syntax-markup-italic, #0e1116))",
      "markupBold": "var(undefined, var(--color-syntax-markup-bold, #0e1116))",
      "markupDeletedText": "var(undefined, var(--color-syntax-markup-deleted-text, #6e011a))",
      "markupDeletedBg": "var(undefined, var(--color-syntax-markup-deleted-bg, #fff0ee))",
      "markupInsertedText": "var(undefined, var(--color-syntax-markup-inserted-text, #024c1a))",
      "markupInsertedBg": "var(undefined, var(--color-syntax-markup-inserted-bg, #d2fedb))",
      "markupChangedText": "var(undefined, var(--color-syntax-markup-changed-text, #702c00))",
      "markupChangedBg": "var(undefined, var(--color-syntax-markup-changed-bg, #ffc67b))",
      "markupIgnoredText": "var(undefined, var(--color-syntax-markup-ignored-text, #e7ecf0))",
      "markupIgnoredBg": "var(undefined, var(--color-syntax-markup-ignored-bg, #023b95))",
      "metaDiffRange": "var(undefined, var(--color-syntax-meta-diff-range, #622cbc))",
      "brackethighlighterAngle": "var(undefined, var(--color-syntax-brackethighlighter-angle, #4b535d))",
      "sublimelinterGutterMark": "var(undefined, var(--color-syntax-sublimelinter-gutter-mark, #88929d))",
      "constantOtherReferenceLink": "var(undefined, var(--color-syntax-constant-other-reference-link, #032563))"
    }
  },
  "codemirror": {
    "text": "var(--codeMirror-fgColor, var(--color-codemirror-text, (obj) => (0, get_1.default)(obj, path)))",
    "bg": "var(--codeMirror-bgColor, var(--color-codemirror-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
    "guttersBg": "var(--codeMirror-gutters-bgColor, var(--color-codemirror-gutters-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
    "guttermarkerText": "var(--codeMirror-gutterMarker-fgColor-default, var(--color-codemirror-guttermarker-text, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
    "guttermarkerSubtleText": "var(--codeMirror-gutterMarker-fgColor-muted, var(--color-codemirror-guttermarker-subtle-text, (theme) => `var(--control-fgColor-placeholder, var(--color-fg-subtle, ${(0, utils_v1_1.get)('scale.gray.5')(theme)}))`))",
    "linenumberText": "var(--codeMirror-lineNumber-fgColor, var(--color-codemirror-linenumber-text, (obj) => (0, get_1.default)(obj, path)))",
    "cursor": "var(--codeMirror-cursor-fgColor, var(--color-codemirror-cursor, (obj) => (0, get_1.default)(obj, path)))",
    "selectionBg": "var(--codeMirror-selection-bgColor, var(--color-codemirror-selection-bg, (obj) => (0, get_1.default)(obj, path)))",
    "activelineBg": "var(--codeMirror-activeline-bgColor, var(--color-codemirror-activeline-bg, (obj) => (0, get_1.default)(obj, path)))",
    "matchingbracketText": "var(--codeMirror-matchingBracket-fgColor, var(--color-codemirror-matchingbracket-text, (obj) => (0, get_1.default)(obj, path)))",
    "linesBg": "var(--codeMirror-lines-bgColor, var(--color-codemirror-lines-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
    "syntax": {
      "comment": "var(undefined, var(--color-syntax-comment, #0e1116))",
      "constant": "var(undefined, var(--color-syntax-constant, #023b95))",
      "entity": "var(undefined, var(--color-syntax-entity, #622cbc))",
      "keyword": "var(undefined, var(--color-syntax-keyword, #a0111f))",
      "storage": "var(undefined, var(--color-syntax-storage, #a0111f))",
      "string": "var(undefined, var(--color-syntax-string, #032563))",
      "support": "var(undefined, var(--color-syntax-support, #023b95))",
      "variable": "var(undefined, var(--color-syntax-variable, #702c00))"
    }
  },
  "checks": {
    "bg": "var(undefined, var(--color-checks-bg, #0e1116))",
    "runBorderWidth": "var(undefined, var(--color-checks-run-border-width, 0px))",
    "containerBorderWidth": "var(undefined, var(--color-checks-container-border-width, 0px))",
    "textPrimary": "var(undefined, var(--color-checks-text-primary, #ffffff))",
    "textSecondary": "var(undefined, var(--color-checks-text-secondary, #88929d))",
    "textLink": "var(undefined, var(--color-checks-text-link, #368cf9))",
    "btnIcon": "var(undefined, var(--color-checks-btn-icon, #acb6c0))",
    "btnHoverIcon": "var(undefined, var(--color-checks-btn-hover-icon, #ffffff))",
    "btnHoverBg": "var(undefined, var(--color-checks-btn-hover-bg, rgba(255,255,255,0.125)))",
    "inputText": "var(undefined, var(--color-checks-input-text, #e7ecf0))",
    "inputPlaceholderText": "var(undefined, var(--color-checks-input-placeholder-text, #88929d))",
    "inputFocusText": "var(undefined, var(--color-checks-input-focus-text, #88929d))",
    "inputBg": "var(undefined, var(--color-checks-input-bg, #20252c))",
    "inputShadow": "var(undefined, var(--color-checks-input-shadow, none))",
    "donutError": "var(undefined, var(--color-checks-donut-error, #d5232c))",
    "donutPending": "var(undefined, var(--color-checks-donut-pending, #956400))",
    "donutSuccess": "var(undefined, var(--color-checks-donut-success, (obj) => (0, get_1.default)(obj, path)))",
    "donutNeutral": "var(undefined, var(--color-checks-donut-neutral, #acb6c0))",
    "dropdownText": "var(undefined, var(--color-checks-dropdown-text, #acb6c0))",
    "dropdownBg": "var(undefined, var(--color-checks-dropdown-bg, #20252c))",
    "dropdownBorder": "var(undefined, var(--color-checks-dropdown-border, #343b43))",
    "dropdownShadow": "var(undefined, var(--color-checks-dropdown-shadow, rgba(1,4,9,0.3)))",
    "dropdownHoverText": "var(undefined, var(--color-checks-dropdown-hover-text, #ffffff))",
    "dropdownHoverBg": "var(undefined, var(--color-checks-dropdown-hover-bg, #343b43))",
    "dropdownBtnHoverText": "var(undefined, var(--color-checks-dropdown-btn-hover-text, #ffffff))",
    "dropdownBtnHoverBg": "var(undefined, var(--color-checks-dropdown-btn-hover-bg, #20252c))",
    "scrollbarThumbBg": "var(undefined, var(--color-checks-scrollbar-thumb-bg, #4b535d))",
    "headerLabelText": "var(undefined, var(--color-checks-header-label-text, #ced5dc))",
    "headerLabelOpenText": "var(undefined, var(--color-checks-header-label-open-text, #ffffff))",
    "headerBorder": "var(undefined, var(--color-checks-header-border, #20252c))",
    "headerIcon": "var(undefined, var(--color-checks-header-icon, #88929d))",
    "lineText": "var(undefined, var(--color-checks-line-text, #ced5dc))",
    "lineNumText": "var(undefined, var(--color-checks-line-num-text, rgba(136,146,157,0.75)))",
    "lineTimestampText": "var(undefined, var(--color-checks-line-timestamp-text, #88929d))",
    "lineHoverBg": "var(undefined, var(--color-checks-line-hover-bg, #20252c))",
    "lineSelectedBg": "var(undefined, var(--color-checks-line-selected-bg, rgba(17,104,227,0.15)))",
    "lineSelectedNumText": "var(undefined, var(--color-checks-line-selected-num-text, #368cf9))",
    "lineDtFmText": "var(undefined, var(--color-checks-line-dt-fm-text, #0e1116))",
    "lineDtFmBg": "var(undefined, var(--color-checks-line-dt-fm-bg, #744500))",
    "gateBg": "var(undefined, var(--color-checks-gate-bg, rgba(96,55,0,0.15)))",
    "gateText": "var(undefined, var(--color-checks-gate-text, #ced5dc))",
    "gateWaitingText": "var(undefined, var(--color-checks-gate-waiting-text, #b58407))",
    "stepHeaderOpenBg": "var(undefined, var(--color-checks-step-header-open-bg, #20252c))",
    "stepErrorText": "var(undefined, var(--color-checks-step-error-text, #ee5a5d))",
    "stepWarningText": "var(undefined, var(--color-checks-step-warning-text, #b58407))",
    "loglineText": "var(undefined, var(--color-checks-logline-text, #88929d))",
    "loglineNumText": "var(undefined, var(--color-checks-logline-num-text, rgba(136,146,157,0.75)))",
    "loglineDebugText": "var(undefined, var(--color-checks-logline-debug-text, #a371f7))",
    "loglineErrorText": "var(undefined, var(--color-checks-logline-error-text, #ced5dc))",
    "loglineErrorNumText": "var(undefined, var(--color-checks-logline-error-num-text, #ee5a5d))",
    "loglineErrorBg": "var(undefined, var(--color-checks-logline-error-bg, rgba(134,6,29,0.15)))",
    "loglineWarningText": "var(undefined, var(--color-checks-logline-warning-text, #ced5dc))",
    "loglineWarningNumText": "var(undefined, var(--color-checks-logline-warning-num-text, #b58407))",
    "loglineWarningBg": "var(undefined, var(--color-checks-logline-warning-bg, rgba(96,55,0,0.15)))",
    "loglineCommandText": "var(undefined, var(--color-checks-logline-command-text, #368cf9))",
    "loglineSectionText": "var(undefined, var(--color-checks-logline-section-text, #26a148))",
    "ansi": {
      "black": "var(undefined, var(--color-ansi-black, #0e1116))",
      "blackBright": "var(undefined, var(--color-ansi-black-bright, #20252c))",
      "white": "var(undefined, var(--color-ansi-white, #ced5dc))",
      "whiteBright": "var(undefined, var(--color-ansi-white-bright, #ced5dc))",
      "gray": "var(undefined, var(--color-ansi-gray, #88929d))",
      "red": "var(undefined, var(--color-ansi-red, #ee5a5d))",
      "redBright": "var(undefined, var(--color-ansi-red-bright, #ff8e8a))",
      "green": "var(undefined, var(--color-ansi-green, #26a148))",
      "greenBright": "var(undefined, var(--color-ansi-green-bright, #43c663))",
      "yellow": "var(undefined, var(--color-ansi-yellow, #b58407))",
      "yellowBright": "var(undefined, var(--color-ansi-yellow-bright, #d5a824))",
      "blue": "var(undefined, var(--color-ansi-blue, #368cf9))",
      "blueBright": "var(undefined, var(--color-ansi-blue-bright, #67b3fd))",
      "magenta": "var(undefined, var(--color-ansi-magenta, #a371f7))",
      "magentaBright": "var(undefined, var(--color-ansi-magenta-bright, #c49bff))",
      "cyan": "var(undefined, var(--color-ansi-cyan, #76e3ea))",
      "cyanBright": "var(undefined, var(--color-ansi-cyan-bright, #b3f0ff))"
    }
  },
  "project": {
    "headerBg": "var(undefined, var(--color-project-header-bg, #0e1116))",
    "sidebarBg": "var(undefined, var(--color-project-sidebar-bg, #ffffff))",
    "gradientIn": "var(undefined, var(--color-project-gradient-in, #ffffff))",
    "gradientOut": "var(undefined, var(--color-project-gradient-out, rgba(255,255,255,0)))"
  },
  "mktg": {
    "btn": {
      "bg": "var(--control-bgColor-rest, var(--color-btn-bg, #1b1f23))",
      "shadow": {
        "outline": "var(undefined, var(--color-shadow-outline, rgb(0 0 0 / 15%) 0 0 0 1px inset))",
        "focus": "var(undefined, var(--color-shadow-focus, rgb(0 0 0 / 15%) 0 0 0 4px))",
        "hover": "var(undefined, var(--color-shadow-hover, 0 3px 2px rgba(0, 0, 0, 0.07), 0 7px 5px rgba(0, 0, 0, 0.04), 0 12px 10px rgba(0, 0, 0, 0.03), 0 22px 18px rgba(0, 0, 0, 0.03), 0 42px 33px rgba(0, 0, 0, 0.02), 0 100px 80px rgba(0, 0, 0, 0.02)))",
        "hoverMuted": "var(undefined, var(--color-shadow-hover-muted, rgb(0 0 0 / 70%) 0 0 0 2px inset))"
      }
    }
  },
  "control": {
    "borderColor": {
      "emphasis": "#20252c"
    }
  },
  "avatar": {
    "bg": "var(--avatar-bgColor, var(--color-avatar-bg, #ffffff))",
    "border": "var(--avatar-borderColor, var(--color-avatar-border, (obj) => {\n        const resolvedValue = resolveValue(value, obj);\n        // Instead of value being #hex, the value is now var(--v, #hex)\n        const hexColorValue = getFallbackValueFromVar(resolvedValue);\n        const hexColorValueWithTransparency = (0, color2k_1.transparentize)(hexColorValue, 1 - amount).replace(/ /g, '');\n        return resolvedValue.replace(hexColorValue, hexColorValueWithTransparency);\n    }))",
    "stackFade": "var(--avatarStack-fade-bgColor-default, var(--color-avatar-stack-fade, #acb6c0))",
    "stackFadeMore": "var(--avatarStack-fade-bgColor-muted, var(--color-avatar-stack-fade-more, #ced5dc))",
    "childShadow": "var(--avatar-shadow, var(--color-avatar-child-shadow, 0 0 0 2px rgba(255,255,255,0.8)))"
  },
  "topicTag": {
    "border": "var(--bgColor-accent-emphasis, var(--color-accent-emphasis, #0349b4))"
  },
  "counter": {
    "border": "#20252c"
  },
  "selectMenu": {
    "backdropBorder": "var(undefined, var(--color-selectMenu-backdrop-border, transparent))",
    "tapHighlight": "var(undefined, var(--color-selectMenu-tap-highlight, rgba(172,182,192,0.5)))",
    "tapFocusBg": "var(undefined, var(--color-selectMenu-tap-focus-bg, #9cd7ff))"
  },
  "overlay": {
    "shadow": "var(--shadow-floating-small, var(--color-overlay-shadow, 0 1px 3px rgba(1,4,9,0.12), 0 8px 24px rgba(52,59,67,0.12)))",
    "backdrop": "var(--overlay-backdrop-bgColor, var(--color-overlay-backdrop, rgba(136,146,157,0.2)))"
  },
  "header": {
    "text": "var(--header-fgColor-default, var(--color-header-text, rgba(255,255,255,0.7)))",
    "bg": "var(--header-bgColor, var(--color-header-bg, #0e1116))",
    "divider": "#acb6c0",
    "logo": "var(--header-fgColor-logo, var(--color-header-logo, #ffffff))"
  },
  "headerSearch": {
    "bg": "var(undefined, var(--color-headerSearch-bg, #0e1116))",
    "border": "var(undefined, var(--color-headerSearch-border, #4b535d))"
  },
  "sidenav": {
    "selectedBg": "var(--sideNav-bgColor-selected, var(--color-sidenav-selected-bg, #ffffff))"
  },
  "menu": {
    "bgActive": "var(--menu-bgColor-active, var(--color-menu-bg-active, transparent))"
  },
  "input": {
    "disabledBg": "var(--control-bgColor-disabled, var(--color-input-disabled-bg, (theme) => `var(--bgColor-disabled, var(--color-neutral-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.3'), 0.2)(theme)}))`))"
  },
  "timeline": {
    "badgeBg": "var(--timelineBadge-bgColor, var(--color-timeline-badge-bg, #e7ecf0))"
  },
  "ansi": {
    "black": "var(undefined, var(--color-ansi-black, #0e1116))",
    "blackBright": "var(undefined, var(--color-ansi-black-bright, #4b535d))",
    "white": "var(undefined, var(--color-ansi-white, #66707b))",
    "whiteBright": "var(undefined, var(--color-ansi-white-bright, #88929d))",
    "gray": "var(undefined, var(--color-ansi-gray, #66707b))",
    "red": "var(undefined, var(--color-ansi-red, #a0111f))",
    "redBright": "var(undefined, var(--color-ansi-red-bright, #86061d))",
    "green": "var(undefined, var(--color-ansi-green, #024c1a))",
    "greenBright": "var(undefined, var(--color-ansi-green-bright, #055d20))",
    "yellow": "var(undefined, var(--color-ansi-yellow, #3f2200))",
    "yellowBright": "var(undefined, var(--color-ansi-yellow-bright, #4e2c00))",
    "blue": "var(undefined, var(--color-ansi-blue, #0349b4))",
    "blueBright": "var(undefined, var(--color-ansi-blue-bright, #1168e3))",
    "magenta": "var(undefined, var(--color-ansi-magenta, #622cbc))",
    "magentaBright": "var(undefined, var(--color-ansi-magenta-bright, #844ae7))",
    "cyan": "var(undefined, var(--color-ansi-cyan, #1b7c83))",
    "cyanBright": "var(undefined, var(--color-ansi-cyan-bright, #3192aa))"
  },
  "btn": {
    "text": "var(--button-default-fgColor-rest, var(--color-btn-text, #0e1116))",
    "bg": "#e7ecf0",
    "border": "rgba(1,4,9,0.8)",
    "shadow": "var(--button-default-shadow-resting, var(--color-btn-shadow, 0 1px 0 rgba(1,4,9,0.04)))",
    "insetShadow": "var(--button-default-shadow-inset, var(--color-btn-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.25)))",
    "hoverBg": "#ced5dc",
    "hoverBorder": "var(--button-default-borderColor-hover, var(--color-btn-hover-border, (obj) => {\n        const resolvedValue = resolveValue(value, obj);\n        // Instead of value being #hex, the value is now var(--v, #hex)\n        const hexColorValue = getFallbackValueFromVar(resolvedValue);\n        const hexColorValueWithTransparency = (0, color2k_1.transparentize)(hexColorValue, 1 - amount).replace(/ /g, '');\n        return resolvedValue.replace(hexColorValue, hexColorValueWithTransparency);\n    }))",
    "activeBg": "#acb6c0",
    "activeBorder": "var(--button-default-borderColor-active, var(--color-btn-active-border, (obj) => {\n        const resolvedValue = resolveValue(value, obj);\n        // Instead of value being #hex, the value is now var(--v, #hex)\n        const hexColorValue = getFallbackValueFromVar(resolvedValue);\n        const hexColorValueWithTransparency = (0, color2k_1.transparentize)(hexColorValue, 1 - amount).replace(/ /g, '');\n        return resolvedValue.replace(hexColorValue, hexColorValueWithTransparency);\n    }))",
    "selectedBg": "#acb6c0",
    "counterBg": "var(--buttonCounter-default-bgColor-rest, var(--color-btn-counter-bg, rgba(1,4,9,0.08)))",
    "primary": {
      "text": "var(undefined, var(--color-primary-text, #ffffff))",
      "bg": "#055d20",
      "border": "#013d14",
      "shadow": "var(undefined, var(--color-primary-shadow, 0 1px 0 rgba(1,4,9,0.1)))",
      "insetShadow": "var(undefined, var(--color-primary-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))",
      "hoverBg": "#024c1a",
      "hoverBorder": "#013d14",
      "selectedBg": "var(undefined, var(--color-primary-selected-bg, hsla(139,95%,13%,1)))",
      "selectedShadow": "var(undefined, var(--color-primary-selected-shadow, inset 0 1px 0 rgba(0,35,11,0.2)))",
      "disabledText": "var(undefined, var(--color-primary-disabled-text, rgba(255,255,255,0.8)))",
      "disabledBg": "var(undefined, var(--color-primary-disabled-bg, #94d3a2))",
      "disabledBorder": "var(undefined, var(--color-primary-disabled-border, (obj) => {\n        const resolvedValue = resolveValue(value, obj);\n        // Instead of value being #hex, the value is now var(--v, #hex)\n        const hexColorValue = getFallbackValueFromVar(resolvedValue);\n        const hexColorValueWithTransparency = (0, color2k_1.transparentize)(hexColorValue, 1 - amount).replace(/ /g, '');\n        return resolvedValue.replace(hexColorValue, hexColorValueWithTransparency);\n    }))",
      "icon": "var(undefined, var(--color-primary-icon, rgba(255,255,255,0.8)))",
      "counterBg": "var(undefined, var(--color-primary-counter-bg, rgba(0,35,11,0.2)))"
    },
    "outline": {
      "text": "#023b95",
      "hoverText": "var(undefined, var(--color-outline-hover-text, #ffffff))",
      "hoverBg": "var(--bgColor-accent-emphasis, var(--color-accent-emphasis, #0349b4))",
      "hoverBorder": "#022f7a",
      "hoverShadow": "var(undefined, var(--color-outline-hover-shadow, 0 1px 0 rgba(1,4,9,0.1)))",
      "hoverInsetShadow": "var(undefined, var(--color-outline-hover-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))",
      "hoverCounterBg": "var(undefined, var(--color-outline-hover-counter-bg, rgba(255,255,255,0.2)))",
      "selectedText": "var(undefined, var(--color-outline-selected-text, #ffffff))",
      "selectedBg": "#022f7a",
      "selectedBorder": "#022f7a",
      "selectedShadow": "var(undefined, var(--color-outline-selected-shadow, inset 0 1px 0 rgba(2,26,74,0.2)))",
      "disabledText": "rgba(3,73,180,0.5)",
      "disabledBg": "#e7ecf0",
      "disabledCounterBg": "var(undefined, var(--color-outline-disabled-counter-bg, rgba(3,73,180,0.05)))",
      "counterBg": "var(undefined, var(--color-outline-counter-bg, #0969da1a))",
      "counterFg": "var(undefined, var(--color-outline-counter-fg, #023b95))",
      "hoverCounterFg": "var(undefined, var(--color-outline-hover-counter-fg, #ffffff))",
      "disabledCounterFg": "var(undefined, var(--color-outline-disabled-counter-fg, rgba(3,73,180,0.5)))"
    },
    "danger": {
      "text": "#86061d",
      "hoverText": "var(undefined, var(--color-danger-hover-text, #ffffff))",
      "hoverBg": "var(--control-borderColor-danger, var(--color-danger-emphasis, #a0111f))",
      "hoverBorder": "#6e011a",
      "hoverShadow": "var(undefined, var(--color-danger-hover-shadow, 0 1px 0 rgba(1,4,9,0.1)))",
      "hoverInsetShadow": "var(undefined, var(--color-danger-hover-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))",
      "hoverCounterBg": "var(undefined, var(--color-danger-hover-counter-bg, rgba(255,255,255,0.2)))",
      "selectedText": "var(undefined, var(--color-danger-selected-text, #ffffff))",
      "selectedBg": "#6e011a",
      "selectedBorder": "#6e011a",
      "selectedShadow": "var(undefined, var(--color-danger-selected-shadow, inset 0 1px 0 rgba(67,0,17,0.2)))",
      "disabledText": "var(undefined, var(--color-danger-disabled-text, rgba(160,17,31,0.5)))",
      "disabledBg": "#e7ecf0",
      "disabledCounterBg": "var(undefined, var(--color-danger-disabled-counter-bg, rgba(160,17,31,0.05)))",
      "counterBg": "var(undefined, var(--color-danger-counter-bg, rgba(160,17,31,0.1)))",
      "icon": "#86061d",
      "hoverIcon": "var(undefined, var(--color-danger-hover-icon, #ffffff))",
      "counterFg": "var(undefined, var(--color-danger-counter-fg, #86061d))",
      "hoverCounterFg": "var(undefined, var(--color-danger-hover-counter-fg, #ffffff))",
      "disabledCounterFg": "var(undefined, var(--color-danger-disabled-counter-fg, rgba(160,17,31,0.5)))"
    },
    "inactive": {
      "bg": "var(undefined, var(--color-inactive-bg, #e7ecf0))",
      "text": "var(undefined, var(--color-inactive-text, #4b535d))"
    }
  },
  "underlinenav": {
    "icon": "var(--underlineNav-iconColor-rest, var(--color-underlinenav-icon, (theme) => `var(--control-fgColor-placeholder, var(--color-fg-subtle, ${(0, utils_v1_1.get)('scale.gray.5')(theme)}))`))",
    "borderHover": "var(--underlineNav-borderColor-hover, var(--color-underlinenav-border-hover, (theme) => `var(--bgColor-disabled, var(--color-neutral-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.3'), 0.2)(theme)}))`))"
  },
  "actionListItem": {
    "inlineDivider": "#88929d",
    "default": {
      "hoverBg": "#e7ecf0",
      "hoverBorder": "#88929d",
      "activeBg": "#ced5dc",
      "activeBorder": "#20252c",
      "selectedBg": "#ced5dc"
    },
    "danger": {
      "hoverBg": "var(--control-borderColor-danger, var(--color-danger-emphasis, #a0111f))",
      "activeBg": "#6e011a",
      "hoverText": "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #ffffff))"
    }
  },
  "switchTrack": {
    "bg": "var(undefined, var(--color-neutral-emphasis, #66707b))",
    "hoverBg": "var(undefined, var(--color-neutral-emphasis, hsla(211,9%,47%,1)))",
    "activeBg": "var(undefined, var(--color-neutral-emphasis, hsla(211,9%,49%,1)))",
    "disabledBg": "var(undefined, var(--color-switchTrack-disabled-bg, #88929d))",
    "fg": "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #ffffff))",
    "disabledFg": "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #ffffff))",
    "border": "var(undefined, var(--color-switchTrack-border, transparent))",
    "checked": {
      "bg": "var(undefined, var(--color-checked-bg, (theme) => `var(--bgColor-accent-emphasis, var(--color-accent-emphasis, ${(0, utils_v1_1.get)('scale.blue.5')(theme)}))`))",
      "hoverBg": "var(undefined, var(--color-checked-hover-bg, #0860CA))",
      "activeBg": "var(undefined, var(--color-checked-active-bg, #0757BA))",
      "fg": "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #ffffff))",
      "disabledFg": "var(undefined, var(--color-checked-disabled-fg, (theme) => `var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
      "border": "var(undefined, var(--color-checked-border, transparent))"
    }
  },
  "switchKnob": {
    "bg": "var(undefined, var(--color-switchKnob-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
    "disabledBg": "var(undefined, var(--color-switchKnob-disabled-bg, (obj) => (0, get_1.default)(obj, path)))",
    "border": "#20252c",
    "checked": {
      "bg": "var(undefined, var(--color-checked-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
      "disabledBg": "var(undefined, var(--color-checked-disabled-bg, (obj) => (0, get_1.default)(obj, path)))",
      "border": "var(--bgColor-accent-emphasis, var(--color-accent-emphasis, #0349b4))"
    }
  },
  "segmentedControl": {
    "bg": "var(undefined, var(--color-segmentedControl-bg, #e7ecf0))",
    "button": {
      "bg": "var(undefined, var(--color-button-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
      "hover": {
        "bg": "var(undefined, var(--color-hover-bg, rgba(172,182,192,0.2)))"
      },
      "active": {
        "bg": "var(undefined, var(--color-active-bg, rgba(172,182,192,0.4)))"
      },
      "selected": {
        "border": "var(undefined, var(--color-selected-border, #88929d))"
      }
    }
  },
  "treeViewItem": {
    "chevron": {
      "hoverBg": "#ced5dc"
    },
    "directory": {
      "fill": "var(undefined, var(--color-directory-fill, #368cf9))"
    }
  },
  "fg": {
    "default": "#0e1116",
    "muted": "#0e1116",
    "subtle": "var(--control-fgColor-placeholder, var(--color-fg-subtle, #66707b))",
    "onEmphasis": "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #ffffff))"
  },
  "canvas": {
    "default": "var(--bgColor-default, var(--color-canvas-default, #ffffff))",
    "overlay": "var(--overlay-bgColor, var(--color-canvas-overlay, #ffffff))",
    "inset": "#ffffff",
    "subtle": "#e7ecf0"
  },
  "border": {
    "default": "#20252c",
    "muted": "#88929d",
    "subtle": "rgba(1,4,9,0.8)"
  },
  "shadow": {
    "small": "var(--shadow-resting-small, var(--color-shadow-small, 0 1px 0 rgba(1,4,9,0.04)))",
    "medium": "var(--shadow-resting-medium, var(--color-shadow-medium, 0 3px 6px rgba(136,146,157,0.15)))",
    "large": "var(--shadow-floating-large, var(--color-shadow-large, 0 8px 24px rgba(136,146,157,0.2)))",
    "extraLarge": "var(--shadow-floating-xlarge, var(--color-shadow-extra-large, 0 12px 28px rgba(136,146,157,0.3)))"
  },
  "neutral": {
    "emphasisPlus": "var(--bgColor-emphasis, var(--color-neutral-emphasis-plus, #0e1116))",
    "emphasis": "var(undefined, var(--color-neutral-emphasis, #66707b))",
    "muted": "var(--bgColor-disabled, var(--color-neutral-muted, rgba(172,182,192,0.2)))",
    "subtle": "#e7ecf0"
  },
  "accent": {
    "fg": "var(--focus-outlineColor, var(--color-accent-fg, #0349b4))",
    "emphasis": "var(--bgColor-accent-emphasis, var(--color-accent-emphasis, #0349b4))",
    "muted": "#368cf9",
    "subtle": "var(--bgColor-accent-muted, var(--color-accent-subtle, #dff7ff))"
  },
  "success": {
    "fg": "var(--fgColor-success, var(--color-success-fg, #055d20))",
    "emphasis": "#055d20",
    "muted": "#26a148",
    "subtle": "var(--bgColor-success-muted, var(--color-success-subtle, #d2fedb))"
  },
  "attention": {
    "fg": "var(--fgColor-attention, var(--color-attention-fg, #744500))",
    "emphasis": "#744500",
    "muted": "#b58407",
    "subtle": "var(--bgColor-attention-muted, var(--color-attention-subtle, #fcf7be))"
  },
  "severe": {
    "fg": "var(--fgColor-severe, var(--color-severe-fg, #873800))",
    "emphasis": "var(--bgColor-severe-emphasis, var(--color-severe-emphasis, #873800))",
    "muted": "#dc6d1a",
    "subtle": "var(--bgColor-severe-muted, var(--color-severe-subtle, #fff2d5))"
  },
  "danger": {
    "fg": "var(--control-danger-fgColor-rest, var(--color-danger-fg, #d1242f))",
    "emphasis": "var(--control-borderColor-danger, var(--color-danger-emphasis, #a0111f))",
    "muted": "#ee5a5d",
    "subtle": "var(--bgColor-danger-muted, var(--color-danger-subtle, #fff0ee))"
  },
  "open": {
    "fg": "var(--fgColor-open, var(--color-open-fg, #055d20))",
    "emphasis": "var(--bgColor-open-emphasis, var(--color-open-emphasis, (obj) => (0, get_1.default)(obj, path)))",
    "muted": "var(--borderColor-open-muted, var(--color-open-muted, rgba(38,161,72,0.4)))",
    "subtle": "var(--bgColor-open-muted, var(--color-open-subtle, #d2fedb))"
  },
  "closed": {
    "fg": "var(--fgColor-closed, var(--color-closed-fg, var(--control-danger-fgColor-rest, var(--color-danger-fg, #d1242f))))",
    "emphasis": "var(--bgColor-closed-emphasis, var(--color-closed-emphasis, #a0111f))",
    "muted": "var(--borderColor-closed-muted, var(--color-closed-muted, rgba(238,90,93,0.4)))",
    "subtle": "var(--bgColor-closed-muted, var(--color-closed-subtle, #fff0ee))"
  },
  "done": {
    "fg": "var(--fgColor-done, var(--color-done-fg, #622cbc))",
    "emphasis": "var(--bgColor-done-emphasis, var(--color-done-emphasis, #622cbc))",
    "muted": "#a371f7",
    "subtle": "var(--bgColor-done-muted, var(--color-done-subtle, #faf0fe))"
  },
  "sponsors": {
    "fg": "var(--fgColor-sponsors, var(--color-sponsors-fg, #971368))",
    "emphasis": "var(--bgColor-sponsors-emphasis, var(--color-sponsors-emphasis, #971368))",
    "muted": "#ed4baf",
    "subtle": "var(--bgColor-sponsors-muted, var(--color-sponsors-subtle, #feeff7))"
  },
  "primer": {
    "fg": {
      "disabled": "var(undefined, var(--color-fg-disabled, #88929d))"
    },
    "canvas": {
      "backdrop": "var(undefined, var(--color-canvas-backdrop, rgba(1,4,9,0.5)))",
      "sticky": "var(undefined, var(--color-canvas-sticky, rgba(255,255,255,0.95)))"
    },
    "border": {
      "active": "var(undefined, var(--color-border-active, #ef5b48))",
      "contrast": "var(undefined, var(--color-border-contrast, rgba(1,4,9,0.1)))"
    },
    "shadow": {
      "highlight": "var(undefined, var(--color-shadow-highlight, inset 0 1px 0 rgba(255,255,255,0.25)))",
      "inset": "var(undefined, var(--color-shadow-inset, inset 0 1px 0 rgba(206,213,220,0.2)))"
    }
  },
  "scale": {
    "black": "#010409",
    "white": "#ffffff",
    "gray": [
      "#ffffff",
      "#e7ecf0",
      "#ced5dc",
      "#acb6c0",
      "#88929d",
      "#66707b",
      "#4b535d",
      "#343b43",
      "#20252c",
      "#0e1116"
    ],
    "blue": [
      "#dff7ff",
      "#9cd7ff",
      "#67b3fd",
      "#368cf9",
      "#1168e3",
      "#0349b4",
      "#023b95",
      "#022f7a",
      "#032563",
      "#021a4a"
    ],
    "green": [
      "#d2fedb",
      "#82e596",
      "#43c663",
      "#26a148",
      "#117f32",
      "#055d20",
      "#024c1a",
      "#013d14",
      "#003110",
      "#00230b"
    ],
    "yellow": [
      "#fcf7be",
      "#f0ce53",
      "#d5a824",
      "#b58407",
      "#956400",
      "#744500",
      "#603700",
      "#4e2c00",
      "#3f2200",
      "#2e1800"
    ],
    "orange": [
      "#fff2d5",
      "#ffc67b",
      "#f99636",
      "#dc6d1a",
      "#b45105",
      "#873800",
      "#702c00",
      "#5b2300",
      "#491b00",
      "#361200"
    ],
    "red": [
      "#fff0ee",
      "#ffc1bc",
      "#ff8e8a",
      "#ee5a5d",
      "#d5232c",
      "#a0111f",
      "#86061d",
      "#6e011a",
      "#5a0016",
      "#430011"
    ],
    "purple": [
      "#faf0fe",
      "#e0c5ff",
      "#c49bff",
      "#a371f7",
      "#844ae7",
      "#622cbc",
      "#512598",
      "#411d7b",
      "#341763",
      "#260f49"
    ],
    "pink": [
      "#feeff7",
      "#ffbde0",
      "#fc87ca",
      "#ed4baf",
      "#c9248e",
      "#971368",
      "#7d0c57",
      "#660847",
      "#53043a",
      "#3e022b"
    ],
    "coral": [
      "#fff0ed",
      "#ffc2b6",
      "#ff8f7e",
      "#ef5b48",
      "#cd3425",
      "#9f1710",
      "#870706",
      "#6f0107",
      "#5b0002",
      "#430200"
    ]
  }
}