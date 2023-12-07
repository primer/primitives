"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "canvasDefaultTransparent": "var(--bgColor-transparent, var(--color-canvas-default-transparent, var(--bgColor-default, var(--color-canvas-default, rgba(255,255,255,0)))))",
    "pageHeaderBg": "var(--bgColor-default, var(--color-canvas-default, #ffffff))",
    "marketingIcon": {
        "primary": "var(--color-marketing-icon-primary, #1168e3)",
        "secondary": "var(--color-marketing-icon-secondary, #368cf9)"
    },
    "diffBlob": {
        "addition": {
            "numText": "var(--diffBlob-addition-fgColor-num, var(--color-diff-blob-addition-num-text, (obj) => (0, get_1.default)(obj, path)))",
            "fg": "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #ffffff))",
            "numBg": "var(--diffBlob-addition-bgColor-num, var(--color-diff-blob-addition-num-bg, #ccffd8))",
            "lineBg": "var(--diffBlob-addition-bgColor-line, var(--color-diff-blob-addition-line-bg, #e6ffec))",
            "wordBg": "#055d20"
        },
        "deletion": {
            "numText": "var(--diffBlob-deletion-fgColor-num, var(--color-diff-blob-deletion-num-text, (obj) => (0, get_1.default)(obj, path)))",
            "fg": "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #ffffff))",
            "numBg": "var(--diffBlob-deletion-bgColor-num, var(--color-diff-blob-deletion-num-bg, #ffd7d5))",
            "lineBg": "var(--diffBlob-deletion-bgColor-line, var(--color-diff-blob-deletion-line-bg, (theme) => `var(--bgColor-danger-muted, var(--color-danger-subtle, ${(0, utils_v1_1.get)('scale.red.0')(theme)}))`))",
            "wordBg": "var(--borderColor-danger-emphasis, var(--color-danger-emphasis, #a0111f))"
        },
        "hunk": {
            "numBg": "#9cd7ff"
        },
        "expander": {
            "icon": "var(--diffBlob-expander-iconColor, var(--color-diff-blob-expander-icon, (obj) => (0, get_1.default)(obj, path)))"
        },
        "selectedLineHighlightMixBlendMode": "var(--color-diff-blob-selected-line-highlight-mix-blend-mode, multiply)"
    },
    "diffstat": {
        "deletionBorder": "var(--color-diffstat-deletion-border, (obj) => {\n        const resolvedValue = resolveValue(value, obj);\n        // Instead of value being #hex, the value is now var(--v, #hex)\n        const hexColorValue = getFallbackValueFromVar(resolvedValue);\n        const hexColorValueWithTransparency = (0, color2k_1.transparentize)(hexColorValue, 1 - amount).replace(/ /g, '');\n        return resolvedValue.replace(hexColorValue, hexColorValueWithTransparency);\n    })",
        "additionBorder": "var(--color-diffstat-addition-border, (obj) => {\n        const resolvedValue = resolveValue(value, obj);\n        // Instead of value being #hex, the value is now var(--v, #hex)\n        const hexColorValue = getFallbackValueFromVar(resolvedValue);\n        const hexColorValueWithTransparency = (0, color2k_1.transparentize)(hexColorValue, 1 - amount).replace(/ /g, '');\n        return resolvedValue.replace(hexColorValue, hexColorValueWithTransparency);\n    })",
        "additionBg": "var(undefined, var(--color-diffstat-addition-bg, (obj) => (0, get_1.default)(obj, path)))"
    },
    "searchKeyword": {
        "hl": "var(--highlight-neutral-bgColor, var(--color-search-keyword-hl, #fcf7be))"
    },
    "prettylights": {
        "syntax": {
            "comment": "var(--color-prettylights-syntax-comment, #4b535d)",
            "constant": "var(--color-prettylights-syntax-constant, #023b95)",
            "entity": "var(--color-prettylights-syntax-entity, #512598)",
            "storageModifierImport": "var(--color-prettylights-syntax-storage-modifier-import, #0e1116)",
            "entityTag": "var(--color-prettylights-syntax-entity-tag, #024c1a)",
            "keyword": "var(--color-prettylights-syntax-keyword, #a0111f)",
            "string": "var(--color-prettylights-syntax-string, #032563)",
            "variable": "var(--color-prettylights-syntax-variable, #702c00)",
            "brackethighlighterUnmatched": "var(--color-prettylights-syntax-brackethighlighter-unmatched, #6e011a)",
            "invalidIllegalText": "var(--color-prettylights-syntax-invalid-illegal-text, #ffffff)",
            "invalidIllegalBg": "var(--color-prettylights-syntax-invalid-illegal-bg, #6e011a)",
            "carriageReturnText": "var(--color-prettylights-syntax-carriage-return-text, #ffffff)",
            "carriageReturnBg": "var(--color-prettylights-syntax-carriage-return-bg, #a0111f)",
            "stringRegexp": "var(--color-prettylights-syntax-string-regexp, #024c1a)",
            "markupList": "var(--color-prettylights-syntax-markup-list, #2e1800)",
            "markupHeading": "var(--color-prettylights-syntax-markup-heading, #023b95)",
            "markupItalic": "var(--color-prettylights-syntax-markup-italic, #0e1116)",
            "markupBold": "var(--color-prettylights-syntax-markup-bold, #0e1116)",
            "markupDeletedText": "var(--color-prettylights-syntax-markup-deleted-text, #6e011a)",
            "markupDeletedBg": "var(--color-prettylights-syntax-markup-deleted-bg, #fff0ee)",
            "markupInsertedText": "var(--color-prettylights-syntax-markup-inserted-text, #024c1a)",
            "markupInsertedBg": "var(--color-prettylights-syntax-markup-inserted-bg, #d2fedb)",
            "markupChangedText": "var(--color-prettylights-syntax-markup-changed-text, #702c00)",
            "markupChangedBg": "var(--color-prettylights-syntax-markup-changed-bg, #ffc67b)",
            "markupIgnoredText": "var(--color-prettylights-syntax-markup-ignored-text, #e7ecf0)",
            "markupIgnoredBg": "var(--color-prettylights-syntax-markup-ignored-bg, #023b95)",
            "metaDiffRange": "var(--color-prettylights-syntax-meta-diff-range, #622cbc)",
            "brackethighlighterAngle": "var(--color-prettylights-syntax-brackethighlighter-angle, #4b535d)",
            "sublimelinterGutterMark": "var(--color-prettylights-syntax-sublimelinter-gutter-mark, #88929d)",
            "constantOtherReferenceLink": "var(--color-prettylights-syntax-constant-other-reference-link, #032563)"
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
        "selectionBg": "var(--codeMirror-selection-bgColor, var(--color-codemirror-selection-bg, (obj) => (0, get_1.default)(obj, path)))",
        "activelineBg": "var(--codeMirror-activeline-bgColor, var(--color-codemirror-activeline-bg, (obj) => (0, get_1.default)(obj, path)))",
        "matchingbracketText": "var(--codeMirror-matchingBracket-fgColor, var(--color-codemirror-matchingbracket-text, (obj) => (0, get_1.default)(obj, path)))",
        "linesBg": "var(--codeMirror-lines-bgColor, var(--color-codemirror-lines-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
        "syntax": {
            "comment": "var(--codeMirror-syntax-fgColor-comment, var(--color-codemirror-syntax-comment, #0e1116))",
            "constant": "var(--codeMirror-syntax-fgColor-constant, var(--color-codemirror-syntax-constant, #023b95))",
            "entity": "var(--codeMirror-syntax-fgColor-entity, var(--color-codemirror-syntax-entity, #622cbc))",
            "keyword": "var(--codeMirror-syntax-fgColor-keyword, var(--color-codemirror-syntax-keyword, #a0111f))",
            "storage": "var(--codeMirror-syntax-fgColor-storage, var(--color-codemirror-syntax-storage, #a0111f))",
            "string": "var(--codeMirror-syntax-fgColor-string, var(--color-codemirror-syntax-string, #032563))",
            "support": "var(--codeMirror-syntax-fgColor-support, var(--color-codemirror-syntax-support, #023b95))",
            "variable": "var(--codeMirror-syntax-fgColor-variable, var(--color-codemirror-syntax-variable, #702c00))"
        }
    },
    "checks": {
        "bg": "var(--color-checks-bg, #0e1116)",
        "runBorderWidth": "var(--color-checks-run-border-width, 0px)",
        "containerBorderWidth": "var(--color-checks-container-border-width, 0px)",
        "textPrimary": "var(--color-checks-text-primary, #ffffff)",
        "textSecondary": "var(--color-checks-text-secondary, #88929d)",
        "textLink": "var(--color-checks-text-link, #368cf9)",
        "btnIcon": "var(--color-checks-btn-icon, #acb6c0)",
        "btnHoverIcon": "var(--color-checks-btn-hover-icon, #ffffff)",
        "btnHoverBg": "var(--color-checks-btn-hover-bg, rgba(255,255,255,0.125))",
        "inputText": "var(--color-checks-input-text, #e7ecf0)",
        "inputPlaceholderText": "var(--color-checks-input-placeholder-text, #88929d)",
        "inputFocusText": "var(--color-checks-input-focus-text, #88929d)",
        "inputBg": "var(--color-checks-input-bg, #20252c)",
        "inputShadow": "var(--color-checks-input-shadow, none)",
        "donutError": "var(--color-checks-donut-error, #d5232c)",
        "donutPending": "var(--color-checks-donut-pending, #956400)",
        "donutSuccess": "var(--color-checks-donut-success, (obj) => (0, get_1.default)(obj, path))",
        "donutNeutral": "var(--color-checks-donut-neutral, #acb6c0)",
        "dropdownText": "var(--color-checks-dropdown-text, #acb6c0)",
        "dropdownBg": "var(--color-checks-dropdown-bg, #20252c)",
        "dropdownBorder": "var(--color-checks-dropdown-border, #343b43)",
        "dropdownShadow": "var(--color-checks-dropdown-shadow, rgba(1,4,9,0.3))",
        "dropdownHoverText": "var(--color-checks-dropdown-hover-text, #ffffff)",
        "dropdownHoverBg": "var(--color-checks-dropdown-hover-bg, #343b43)",
        "dropdownBtnHoverText": "var(--color-checks-dropdown-btn-hover-text, #ffffff)",
        "dropdownBtnHoverBg": "var(--color-checks-dropdown-btn-hover-bg, #20252c)",
        "scrollbarThumbBg": "var(--color-checks-scrollbar-thumb-bg, #4b535d)",
        "headerLabelText": "var(--color-checks-header-label-text, #ced5dc)",
        "headerLabelOpenText": "var(--color-checks-header-label-open-text, #ffffff)",
        "headerBorder": "var(--color-checks-header-border, #20252c)",
        "headerIcon": "var(--color-checks-header-icon, #88929d)",
        "lineText": "var(--color-checks-line-text, #ced5dc)",
        "lineNumText": "var(--color-checks-line-num-text, rgba(136,146,157,0.75))",
        "lineTimestampText": "var(--color-checks-line-timestamp-text, #88929d)",
        "lineHoverBg": "var(--color-checks-line-hover-bg, #20252c)",
        "lineSelectedBg": "var(--color-checks-line-selected-bg, rgba(17,104,227,0.15))",
        "lineSelectedNumText": "var(--color-checks-line-selected-num-text, #368cf9)",
        "lineDtFmText": "var(--color-checks-line-dt-fm-text, #0e1116)",
        "lineDtFmBg": "var(--color-checks-line-dt-fm-bg, #744500)",
        "gateBg": "var(--color-checks-gate-bg, rgba(96,55,0,0.15))",
        "gateText": "var(--color-checks-gate-text, #ced5dc)",
        "gateWaitingText": "var(--color-checks-gate-waiting-text, #b58407)",
        "stepHeaderOpenBg": "var(--color-checks-step-header-open-bg, #20252c)",
        "stepErrorText": "var(--color-checks-step-error-text, #ee5a5d)",
        "stepWarningText": "var(--color-checks-step-warning-text, #b58407)",
        "loglineText": "var(--color-checks-logline-text, #88929d)",
        "loglineNumText": "var(--color-checks-logline-num-text, rgba(136,146,157,0.75))",
        "loglineDebugText": "var(--color-checks-logline-debug-text, #a371f7)",
        "loglineErrorText": "var(--color-checks-logline-error-text, #ced5dc)",
        "loglineErrorNumText": "var(--color-checks-logline-error-num-text, #ee5a5d)",
        "loglineErrorBg": "var(--color-checks-logline-error-bg, rgba(134,6,29,0.15))",
        "loglineWarningText": "var(--color-checks-logline-warning-text, #ced5dc)",
        "loglineWarningNumText": "var(--color-checks-logline-warning-num-text, #b58407)",
        "loglineWarningBg": "var(--color-checks-logline-warning-bg, rgba(96,55,0,0.15))",
        "loglineCommandText": "var(--color-checks-logline-command-text, #368cf9)",
        "loglineSectionText": "var(--color-checks-logline-section-text, #26a148)",
        "ansi": {
            "black": "var(--color-checks-ansi-black, #0e1116)",
            "blackBright": "var(--color-checks-ansi-black-bright, #20252c)",
            "white": "var(--color-checks-ansi-white, #ced5dc)",
            "whiteBright": "var(--color-checks-ansi-white-bright, #ced5dc)",
            "gray": "var(--color-checks-ansi-gray, #88929d)",
            "red": "var(--color-checks-ansi-red, #ee5a5d)",
            "redBright": "var(--color-checks-ansi-red-bright, #ff8e8a)",
            "green": "var(--color-checks-ansi-green, #26a148)",
            "greenBright": "var(--color-checks-ansi-green-bright, #43c663)",
            "yellow": "var(--color-checks-ansi-yellow, #b58407)",
            "yellowBright": "var(--color-checks-ansi-yellow-bright, #d5a824)",
            "blue": "var(--color-checks-ansi-blue, #368cf9)",
            "blueBright": "var(--color-checks-ansi-blue-bright, #67b3fd)",
            "magenta": "var(--color-checks-ansi-magenta, #a371f7)",
            "magentaBright": "var(--color-checks-ansi-magenta-bright, #c49bff)",
            "cyan": "var(--color-checks-ansi-cyan, #76e3ea)",
            "cyanBright": "var(--color-checks-ansi-cyan-bright, #b3f0ff)"
        }
    },
    "project": {
        "headerBg": "var(--color-project-header-bg, #0e1116)",
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
        "backdropBorder": "var(--selectMenu-borderColor, var(--color-select-menu-backdrop-border, transparent))",
        "tapHighlight": "var(--control-bgColor-active, var(--color-select-menu-tap-highlight, rgba(172,182,192,0.5)))",
        "tapFocusBg": "var(--selectMenu-bgColor-active, var(--color-select-menu-tap-focus-bg, #9cd7ff))"
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
        "bg": "var(--headerSearch-bgColor, var(--color-header-search-bg, #0e1116))",
        "border": "var(--headerSearch-borderColor, var(--color-header-search-border, #4b535d))"
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
        "badgeBg": "var(--timelineBadge-bgColor, var(--color-timeline-badge-bg, #e7ecf0))"
    },
    "ansi": {
        "black": "var(--color-ansi-black, #0e1116)",
        "blackBright": "var(--color-ansi-black-bright, #4b535d)",
        "white": "var(--color-ansi-white, #66707b)",
        "whiteBright": "var(--color-ansi-white-bright, #88929d)",
        "gray": "var(--color-ansi-gray, #66707b)",
        "red": "var(--color-ansi-red, #a0111f)",
        "redBright": "var(--color-ansi-red-bright, #86061d)",
        "green": "var(--color-ansi-green, #024c1a)",
        "greenBright": "var(--color-ansi-green-bright, #055d20)",
        "yellow": "var(--color-ansi-yellow, #3f2200)",
        "yellowBright": "var(--color-ansi-yellow-bright, #4e2c00)",
        "blue": "var(--color-ansi-blue, #0349b4)",
        "blueBright": "var(--color-ansi-blue-bright, #1168e3)",
        "magenta": "var(--color-ansi-magenta, #622cbc)",
        "magentaBright": "var(--color-ansi-magenta-bright, #844ae7)",
        "cyan": "var(--color-ansi-cyan, #1b7c83)",
        "cyanBright": "var(--color-ansi-cyan-bright, #3192aa)"
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
            "text": "var(--button-primary-fgColor-rest, var(--color-btn-primary-text, #ffffff))",
            "bg": "#055d20",
            "border": "#013d14",
            "shadow": "var(--shadow-resting-small, var(--color-btn-primary-shadow, 0 1px 0 rgba(1,4,9,0.1)))",
            "insetShadow": "var(--shadow-highlight, var(--color-btn-primary-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))",
            "hoverBg": "#024c1a",
            "hoverBorder": "#013d14",
            "selectedBg": "var(--button-primary-bgColor-active, var(--color-btn-primary-selected-bg, hsla(139,95%,13%,1)))",
            "selectedShadow": "var(--button-primary-shadow-selected, var(--color-btn-primary-selected-shadow, inset 0 1px 0 rgba(0,35,11,0.2)))",
            "disabledText": "var(--button-primary-fgColor-disabled, var(--color-btn-primary-disabled-text, rgba(255,255,255,0.8)))",
            "disabledBg": "var(--button-primary-bgColor-disabled, var(--color-btn-primary-disabled-bg, #94d3a2))",
            "disabledBorder": "var(--button-primary-borderColor-disabled, var(--color-btn-primary-disabled-border, (obj) => {\n        const resolvedValue = resolveValue(value, obj);\n        // Instead of value being #hex, the value is now var(--v, #hex)\n        const hexColorValue = getFallbackValueFromVar(resolvedValue);\n        const hexColorValueWithTransparency = (0, color2k_1.transparentize)(hexColorValue, 1 - amount).replace(/ /g, '');\n        return resolvedValue.replace(hexColorValue, hexColorValueWithTransparency);\n    }))",
            "icon": "var(--button-primary-iconColor-rest, var(--color-btn-primary-icon, rgba(255,255,255,0.8)))",
            "counterBg": "var(--buttonCounter-primary-bgColor-rest, var(--color-btn-primary-counter-bg, rgba(0,35,11,0.2)))"
        },
        "outline": {
            "text": "#023b95",
            "hoverText": "var(--button-outline-fgColor-hover, var(--color-btn-outline-hover-text, #ffffff))",
            "hoverBg": "var(--bgColor-accent-emphasis, var(--color-accent-emphasis, #0349b4))",
            "hoverBorder": "#022f7a",
            "hoverShadow": "var(--shadow-resting-small, var(--color-btn-outline-hover-shadow, 0 1px 0 rgba(1,4,9,0.1)))",
            "hoverInsetShadow": "var(--shadow-highlight, var(--color-btn-outline-hover-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))",
            "hoverCounterBg": "var(--buttonCounter-outline-bgColor-hover, var(--color-btn-outline-hover-counter-bg, rgba(255,255,255,0.2)))",
            "selectedText": "var(--button-outline-fgColor-active, var(--color-btn-outline-selected-text, #ffffff))",
            "selectedBg": "#022f7a",
            "selectedBorder": "#022f7a",
            "selectedShadow": "var(--button-outline-shadow-selected, var(--color-btn-outline-selected-shadow, inset 0 1px 0 rgba(2,26,74,0.2)))",
            "disabledText": "rgba(3,73,180,0.5)",
            "disabledBg": "#e7ecf0",
            "disabledCounterBg": "var(--buttonCounter-outline-bgColor-disabled, var(--color-btn-outline-disabled-counter-bg, rgba(3,73,180,0.05)))",
            "counterBg": "var(--buttonCounter-outline-bgColor-rest, var(--color-btn-outline-counter-bg, #0969da1a))",
            "counterFg": "var(--buttonCounter-outline-fgColor-rest, var(--color-btn-outline-counter-fg, #023b95))",
            "hoverCounterFg": "var(--buttonCounter-outline-fgColor-hover, var(--color-btn-outline-hover-counter-fg, #ffffff))",
            "disabledCounterFg": "var(--buttonCounter-outline-fgColor-disabled, var(--color-btn-outline-disabled-counter-fg, rgba(3,73,180,0.5)))"
        },
        "danger": {
            "text": "#86061d",
            "hoverText": "var(--button-danger-fgColor-hover, var(--color-btn-danger-hover-text, #ffffff))",
            "hoverBg": "var(--borderColor-danger-emphasis, var(--color-danger-emphasis, #a0111f))",
            "hoverBorder": "#6e011a",
            "hoverShadow": "var(--shadow-resting-small, var(--color-btn-danger-hover-shadow, 0 1px 0 rgba(1,4,9,0.1)))",
            "hoverInsetShadow": "var(--shadow-highlight, var(--color-btn-danger-hover-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))",
            "hoverCounterBg": "var(--buttonCounter-danger-bgColor-hover, var(--color-btn-danger-hover-counter-bg, rgba(255,255,255,0.2)))",
            "selectedText": "var(--button-danger-fgColor-active, var(--color-btn-danger-selected-text, #ffffff))",
            "selectedBg": "#6e011a",
            "selectedBorder": "#6e011a",
            "selectedShadow": "var(--button-danger-shadow-selected, var(--color-btn-danger-selected-shadow, inset 0 1px 0 rgba(67,0,17,0.2)))",
            "disabledText": "var(--button-danger-fgColor-disabled, var(--color-btn-danger-disabled-text, rgba(160,17,31,0.5)))",
            "disabledBg": "#e7ecf0",
            "disabledCounterBg": "var(--buttonCounter-danger-bgColor-disabled, var(--color-btn-danger-disabled-counter-bg, rgba(160,17,31,0.05)))",
            "counterBg": "var(--buttonCounter-danger-bgColor-rest, var(--color-btn-danger-counter-bg, rgba(160,17,31,0.1)))",
            "icon": "#86061d",
            "hoverIcon": "var(--button-danger-iconColor-hover, var(--color-btn-danger-hover-icon, #ffffff))",
            "counterFg": "var(--buttonCounter-danger-fgColor-rest, var(--color-btn-danger-counter-fg, #86061d))",
            "hoverCounterFg": "var(--buttonCounter-danger-fgColor-hover, var(--color-btn-danger-hover-counter-fg, #ffffff))",
            "disabledCounterFg": "var(--buttonCounter-danger-fgColor-disabled, var(--color-btn-danger-disabled-counter-fg, rgba(160,17,31,0.5)))"
        },
        "inactive": {
            "bg": "var(--button-inactive-bgColor-rest, var(--color-btn-inactive-bg, #e7ecf0))",
            "text": "var(--button-inactive-fgColor-rest, var(--color-btn-inactive-text, #4b535d))"
        }
    },
    "underlinenav": {
        "icon": "var(--underlineNav-iconColor-rest, var(--color-underlinenav-icon, (theme) => `var(--fgColor-muted, var(--color-fg-subtle, ${(0, utils_v1_1.get)('scale.gray.5')(theme)}))`))",
        "borderHover": "var(--underlineNav-borderColor-hover, var(--color-underlinenav-border-hover, (theme) => `var(--borderColor-neutral-muted, var(--color-neutral-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.3'), 0.2)(theme)}))`))"
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
            "hoverBg": "var(--borderColor-danger-emphasis, var(--color-danger-emphasis, #a0111f))",
            "activeBg": "#6e011a",
            "hoverText": "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #ffffff))"
        }
    },
    "switchTrack": {
        "bg": "var(--bgColor-neutral-emphasis, var(--color-neutral-emphasis, #66707b))",
        "hoverBg": "var(--bgColor-neutral-emphasis, var(--color-neutral-emphasis, hsla(211,9%,47%,1)))",
        "activeBg": "var(--bgColor-neutral-emphasis, var(--color-neutral-emphasis, hsla(211,9%,49%,1)))",
        "disabledBg": "var(--controlTrack-bgColor-disabled, var(--color-switch-track-disabled-bg, #88929d))",
        "fg": "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #ffffff))",
        "disabledFg": "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #ffffff))",
        "border": "var(--controlTrack-borderColor-rest, var(--color-switch-track-border, transparent))",
        "checked": {
            "bg": "var(--control-checked-bgColor-rest, var(--color-switch-track-checked-bg, (theme) => `var(--bgColor-accent-emphasis, var(--color-accent-emphasis, ${(0, utils_v1_1.get)('scale.blue.5')(theme)}))`))",
            "hoverBg": "var(--control-checked-bgColor-hover, var(--color-switch-track-checked-hover-bg, #0860CA))",
            "activeBg": "var(--control-checked-bgColor-active, var(--color-switch-track-checked-active-bg, #0757BA))",
            "fg": "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #ffffff))",
            "disabledFg": "var(--control-checked-fgColor-disabled, var(--color-switch-track-checked-disabled-fg, (theme) => `var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
            "border": "var(--borderColor-transparent, var(--color-switch-track-checked-border, transparent))"
        }
    },
    "switchKnob": {
        "bg": "var(--controlKnob-bgColor-rest, var(--color-switch-knob-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
        "disabledBg": "var(--controlKnob-bgColor-disabled, var(--color-switch-knob-disabled-bg, (obj) => (0, get_1.default)(obj, path)))",
        "border": "#20252c",
        "checked": {
            "bg": "var(--controlKnob-bgColor-checked, var(--color-switch-knob-checked-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
            "disabledBg": "var(--controlKnob-bgColor-disabled, var(--color-switch-knob-checked-disabled-bg, (obj) => (0, get_1.default)(obj, path)))",
            "border": "var(--bgColor-accent-emphasis, var(--color-accent-emphasis, #0349b4))"
        }
    },
    "segmentedControl": {
        "bg": "var(--controlTrack-bgColor-rest, var(--color-segmented-control-bg, #e7ecf0))",
        "button": {
            "bg": "var(--controlKnob-bgColor-rest, var(--color-segmented-control-button-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
            "hover": {
                "bg": "var(--controlTrack-bgColor-hover, var(--color-segmented-control-button-hover-bg, rgba(172,182,192,0.2)))"
            },
            "active": {
                "bg": "var(--controlTrack-bgColor-active, var(--color-segmented-control-button-hover-active-bg, rgba(172,182,192,0.4)))"
            },
            "selected": {
                "border": "var(--controlKnob-borderColor-rest, var(--color-segmented-control-button-hover-active-selected-border, #88929d))"
            }
        }
    },
    "treeViewItem": {
        "chevron": {
            "hoverBg": "#ced5dc"
        },
        "directory": {
            "fill": "var(--treeViewItem-leadingVisual-bgColor-rest, var(--color-tree-view-item-chevron-directory-fill, #368cf9))"
        }
    },
    "fg": {
        "default": "#0e1116",
        "muted": "#0e1116",
        "subtle": "var(--fgColor-muted, var(--color-fg-subtle, #66707b))",
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
        "emphasis": "var(--bgColor-neutral-emphasis, var(--color-neutral-emphasis, #66707b))",
        "muted": "var(--borderColor-neutral-muted, var(--color-neutral-muted, rgba(172,182,192,0.2)))",
        "subtle": "#e7ecf0"
    },
    "accent": {
        "fg": "var(--fgColor-accent, var(--color-accent-fg, #0349b4))",
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
        "fg": "var(--fgColor-danger, var(--color-danger-fg, #d1242f))",
        "emphasis": "var(--borderColor-danger-emphasis, var(--color-danger-emphasis, #a0111f))",
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
        "fg": "var(--fgColor-closed, var(--color-closed-fg, var(--fgColor-danger, var(--color-danger-fg, #d1242f))))",
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
            "disabled": "var(--fgColor-disabled, var(--color-primer-fg-disabled, #88929d))"
        },
        "canvas": {
            "backdrop": "var(--overlay-backdrop-bgColor, var(--color-primer-fg-canvas-backdrop, rgba(1,4,9,0.5)))",
            "sticky": "var(--color-primer-canvas-sticky, rgba(255,255,255,0.95))"
        },
        "border": {
            "active": "var(--underlineNav-borderColor-active, var(--color-primer-border-active, #ef5b48))",
            "contrast": "var(--borderColor-muted, var(--color-primer-border-contrast, rgba(1,4,9,0.1)))"
        },
        "shadow": {
            "highlight": "var(--shadow-highlight, var(--color-primer-shadow-highlight, inset 0 1px 0 rgba(255,255,255,0.25)))",
            "inset": "var(--shadow-inset, var(--color-primer-shadow-inset, inset 0 1px 0 rgba(206,213,220,0.2)))"
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
};
