"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "canvasDefaultTransparent": "var(undefined, var(--color--canvas-default-transparent, rgba(10,12,16,0)))",
    "pageHeaderBg": "var(undefined, var(--color--page-header-bg, (obj) => (0, get_1.default)(obj, path)))",
    "marketingIcon": {
        "primary": "var(undefined, var(--color-marketingIcon-primary, #91cbff))",
        "secondary": "var(undefined, var(--color-marketingIcon-secondary, #409eff))"
    },
    "diffBlob": {
        "addition": {
            "numText": "var(undefined, var(--color-addition-num-text, (obj) => (0, get_1.default)(obj, path)))",
            "fg": "#0a0c10",
            "numBg": "var(undefined, var(--color-addition-num-bg, rgba(38,205,77,0.3)))",
            "lineBg": "var(undefined, var(--color-addition-line-bg, (obj) => {\n        const resolvedValue = resolveValue(value, obj);\n        // Instead of value being #hex, the value is now var(--v, #hex)\n        const hexColorValue = getFallbackValueFromVar(resolvedValue);\n        const hexColorValueWithTransparency = (0, color2k_1.transparentize)(hexColorValue, 1 - amount).replace(/ /g, '');\n        return resolvedValue.replace(hexColorValue, hexColorValueWithTransparency);\n    }))",
            "wordBg": "var(undefined, var(--color-addition-word-bg, (obj) => (0, get_1.default)(obj, path)))"
        },
        "deletion": {
            "numText": "var(undefined, var(--color-deletion-num-text, (obj) => (0, get_1.default)(obj, path)))",
            "fg": "#0a0c10",
            "numBg": "var(undefined, var(--color-deletion-num-bg, rgba(255,106,105,0.3)))",
            "lineBg": "var(undefined, var(--color-deletion-line-bg, (obj) => {\n        const resolvedValue = resolveValue(value, obj);\n        // Instead of value being #hex, the value is now var(--v, #hex)\n        const hexColorValue = getFallbackValueFromVar(resolvedValue);\n        const hexColorValueWithTransparency = (0, color2k_1.transparentize)(hexColorValue, 1 - amount).replace(/ /g, '');\n        return resolvedValue.replace(hexColorValue, hexColorValueWithTransparency);\n    }))",
            "wordBg": "var(undefined, var(--color-deletion-word-bg, (obj) => (0, get_1.default)(obj, path)))"
        },
        "hunk": {
            "numBg": "rgba(64,158,255,0.4)"
        },
        "expander": {
            "icon": "#f0f3f6"
        },
        "selectedLineHighlightMixBlendMode": "var(undefined, var(--color-expander-selected-line-highlight-mix-blend-mode, screen))"
    },
    "diffstat": {
        "deletionBorder": "#ffb1af",
        "additionBorder": "#4ae168",
        "additionBg": "var(undefined, var(--color-diffstat-addition-bg, #26cd4d))"
    },
    "searchKeyword": {
        "hl": "var(undefined, var(--color-searchKeyword-hl, rgba(240,183,47,0.4)))"
    },
    "prettylights": {
        "syntax": {
            "comment": "var(undefined, var(--color-syntax-comment, #bdc4cc))",
            "constant": "var(undefined, var(--color-syntax-constant, #91cbff))",
            "entity": "var(undefined, var(--color-syntax-entity, #dbb7ff))",
            "storageModifierImport": "var(undefined, var(--color-syntax-storage-modifier-import, #f0f3f6))",
            "entityTag": "var(undefined, var(--color-syntax-entity-tag, #72f088))",
            "keyword": "var(undefined, var(--color-syntax-keyword, #ff9492))",
            "string": "var(undefined, var(--color-syntax-string, #addcff))",
            "variable": "var(undefined, var(--color-syntax-variable, #ffb757))",
            "brackethighlighterUnmatched": "var(undefined, var(--color-syntax-brackethighlighter-unmatched, #ff6a69))",
            "invalidIllegalText": "var(undefined, var(--color-syntax-invalid-illegal-text, #ffffff))",
            "invalidIllegalBg": "var(undefined, var(--color-syntax-invalid-illegal-bg, #e82a2f))",
            "carriageReturnText": "var(undefined, var(--color-syntax-carriage-return-text, #ffffff))",
            "carriageReturnBg": "var(undefined, var(--color-syntax-carriage-return-bg, #ff4445))",
            "stringRegexp": "var(undefined, var(--color-syntax-string-regexp, #72f088))",
            "markupList": "var(undefined, var(--color-syntax-markup-list, #fbd669))",
            "markupHeading": "var(undefined, var(--color-syntax-markup-heading, #409eff))",
            "markupItalic": "var(undefined, var(--color-syntax-markup-italic, #f0f3f6))",
            "markupBold": "var(undefined, var(--color-syntax-markup-bold, #f0f3f6))",
            "markupDeletedText": "var(undefined, var(--color-syntax-markup-deleted-text, #ffdedb))",
            "markupDeletedBg": "var(undefined, var(--color-syntax-markup-deleted-bg, #cc1421))",
            "markupInsertedText": "var(undefined, var(--color-syntax-markup-inserted-text, #acf7b6))",
            "markupInsertedBg": "var(undefined, var(--color-syntax-markup-inserted-bg, #007728))",
            "markupChangedText": "var(undefined, var(--color-syntax-markup-changed-text, #ffe1b4))",
            "markupChangedBg": "var(undefined, var(--color-syntax-markup-changed-bg, #a74c00))",
            "markupIgnoredText": "var(undefined, var(--color-syntax-markup-ignored-text, #f0f3f6))",
            "markupIgnoredBg": "var(undefined, var(--color-syntax-markup-ignored-bg, #318bf8))",
            "metaDiffRange": "var(undefined, var(--color-syntax-meta-diff-range, #dbb7ff))",
            "brackethighlighterAngle": "var(undefined, var(--color-syntax-brackethighlighter-angle, #bdc4cc))",
            "sublimelinterGutterMark": "var(undefined, var(--color-syntax-sublimelinter-gutter-mark, #7a828e))",
            "constantOtherReferenceLink": "var(undefined, var(--color-syntax-constant-other-reference-link, #addcff))"
        }
    },
    "codemirror": {
        "text": "var(--codeMirror-fgColor, var(--color-codemirror-text, (obj) => (0, get_1.default)(obj, path)))",
        "bg": "var(--codeMirror-bgColor, var(--color-codemirror-bg, (obj) => (0, get_1.default)(obj, path)))",
        "guttersBg": "var(--codeMirror-gutters-bgColor, var(--color-codemirror-gutters-bg, (obj) => (0, get_1.default)(obj, path)))",
        "guttermarkerText": "var(--codeMirror-gutterMarker-fgColor-default, var(--color-codemirror-guttermarker-text, (obj) => (0, get_1.default)(obj, path)))",
        "guttermarkerSubtleText": "var(--codeMirror-gutterMarker-fgColor-muted, var(--color-codemirror-guttermarker-subtle-text, (obj) => (0, get_1.default)(obj, path)))",
        "linenumberText": "var(--codeMirror-lineNumber-fgColor, var(--color-codemirror-linenumber-text, (obj) => (0, get_1.default)(obj, path)))",
        "cursor": "var(--codeMirror-cursor-fgColor, var(--color-codemirror-cursor, (obj) => (0, get_1.default)(obj, path)))",
        "selectionBg": "rgba(64,158,255,0.4)",
        "activelineBg": "var(--codeMirror-activeline-bgColor, var(--color-codemirror-activeline-bg, (obj) => {\n        const resolvedValue = resolveValue(value, obj);\n        // Instead of value being #hex, the value is now var(--v, #hex)\n        const hexColorValue = getFallbackValueFromVar(resolvedValue);\n        const hexColorValueWithTransparency = (0, color2k_1.transparentize)(hexColorValue, 1 - amount).replace(/ /g, '');\n        return resolvedValue.replace(hexColorValue, hexColorValueWithTransparency);\n    }))",
        "matchingbracketText": "var(--codeMirror-matchingBracket-fgColor, var(--color-codemirror-matchingbracket-text, (obj) => (0, get_1.default)(obj, path)))",
        "linesBg": "var(--codeMirror-lines-bgColor, var(--color-codemirror-lines-bg, (obj) => (0, get_1.default)(obj, path)))",
        "syntax": {
            "comment": "var(undefined, var(--color-syntax-comment, #bdc4cc))",
            "constant": "var(undefined, var(--color-syntax-constant, #91cbff))",
            "entity": "var(undefined, var(--color-syntax-entity, #dbb7ff))",
            "keyword": "var(undefined, var(--color-syntax-keyword, #ff9492))",
            "storage": "var(undefined, var(--color-syntax-storage, #ff9492))",
            "string": "var(undefined, var(--color-syntax-string, #addcff))",
            "support": "var(undefined, var(--color-syntax-support, #91cbff))",
            "variable": "var(undefined, var(--color-syntax-variable, #ffb757))"
        }
    },
    "checks": {
        "bg": "var(undefined, var(--color-checks-bg, (obj) => (0, get_1.default)(obj, path)))",
        "runBorderWidth": "var(undefined, var(--color-checks-run-border-width, 1px))",
        "containerBorderWidth": "var(undefined, var(--color-checks-container-border-width, 1px))",
        "textPrimary": "var(undefined, var(--color-checks-text-primary, (obj) => (0, get_1.default)(obj, path)))",
        "textSecondary": "var(undefined, var(--color-checks-text-secondary, (obj) => (0, get_1.default)(obj, path)))",
        "textLink": "var(undefined, var(--color-checks-text-link, (obj) => (0, get_1.default)(obj, path)))",
        "btnIcon": "var(undefined, var(--color-checks-btn-icon, (obj) => (0, get_1.default)(obj, path)))",
        "btnHoverIcon": "var(undefined, var(--color-checks-btn-hover-icon, (obj) => (0, get_1.default)(obj, path)))",
        "btnHoverBg": "var(undefined, var(--color-checks-btn-hover-bg, (obj) => {\n        const resolvedValue = resolveValue(value, obj);\n        // Instead of value being #hex, the value is now var(--v, #hex)\n        const hexColorValue = getFallbackValueFromVar(resolvedValue);\n        const hexColorValueWithTransparency = (0, color2k_1.transparentize)(hexColorValue, 1 - amount).replace(/ /g, '');\n        return resolvedValue.replace(hexColorValue, hexColorValueWithTransparency);\n    }))",
        "inputText": "var(undefined, var(--color-checks-input-text, (obj) => (0, get_1.default)(obj, path)))",
        "inputPlaceholderText": "var(undefined, var(--color-checks-input-placeholder-text, (obj) => (0, get_1.default)(obj, path)))",
        "inputFocusText": "var(undefined, var(--color-checks-input-focus-text, (obj) => (0, get_1.default)(obj, path)))",
        "inputBg": "var(undefined, var(--color-checks-input-bg, #272b33))",
        "inputShadow": "var(undefined, var(--color-checks-input-shadow, 0 0 0 1px (obj) => (0, get_1.default)(obj, path)))",
        "donutError": "var(undefined, var(--color-checks-donut-error, #ff6a69))",
        "donutPending": "var(undefined, var(--color-checks-donut-pending, #f0b72f))",
        "donutSuccess": "var(undefined, var(--color-checks-donut-success, #09b43a))",
        "donutNeutral": "var(undefined, var(--color-checks-donut-neutral, #bdc4cc))",
        "dropdownText": "var(undefined, var(--color-checks-dropdown-text, (obj) => (0, get_1.default)(obj, path)))",
        "dropdownBg": "var(undefined, var(--color-checks-dropdown-bg, (obj) => (0, get_1.default)(obj, path)))",
        "dropdownBorder": "var(undefined, var(--color-checks-dropdown-border, (obj) => (0, get_1.default)(obj, path)))",
        "dropdownShadow": "var(undefined, var(--color-checks-dropdown-shadow, rgba(1,4,9,0.3)))",
        "dropdownHoverText": "var(undefined, var(--color-checks-dropdown-hover-text, (obj) => (0, get_1.default)(obj, path)))",
        "dropdownHoverBg": "var(undefined, var(--color-checks-dropdown-hover-bg, (obj) => {\n        const resolvedValue = resolveValue(value, obj);\n        // Instead of value being #hex, the value is now var(--v, #hex)\n        const hexColorValue = getFallbackValueFromVar(resolvedValue);\n        const hexColorValueWithTransparency = (0, color2k_1.transparentize)(hexColorValue, 1 - amount).replace(/ /g, '');\n        return resolvedValue.replace(hexColorValue, hexColorValueWithTransparency);\n    }))",
        "dropdownBtnHoverText": "var(undefined, var(--color-checks-dropdown-btn-hover-text, (obj) => (0, get_1.default)(obj, path)))",
        "dropdownBtnHoverBg": "var(undefined, var(--color-checks-dropdown-btn-hover-bg, (obj) => {\n        const resolvedValue = resolveValue(value, obj);\n        // Instead of value being #hex, the value is now var(--v, #hex)\n        const hexColorValue = getFallbackValueFromVar(resolvedValue);\n        const hexColorValueWithTransparency = (0, color2k_1.transparentize)(hexColorValue, 1 - amount).replace(/ /g, '');\n        return resolvedValue.replace(hexColorValue, hexColorValueWithTransparency);\n    }))",
        "scrollbarThumbBg": "var(undefined, var(--color-checks-scrollbar-thumb-bg, (obj) => {\n        const resolvedValue = resolveValue(value, obj);\n        // Instead of value being #hex, the value is now var(--v, #hex)\n        const hexColorValue = getFallbackValueFromVar(resolvedValue);\n        const hexColorValueWithTransparency = (0, color2k_1.transparentize)(hexColorValue, 1 - amount).replace(/ /g, '');\n        return resolvedValue.replace(hexColorValue, hexColorValueWithTransparency);\n    }))",
        "headerLabelText": "var(undefined, var(--color-checks-header-label-text, (obj) => (0, get_1.default)(obj, path)))",
        "headerLabelOpenText": "var(undefined, var(--color-checks-header-label-open-text, (obj) => (0, get_1.default)(obj, path)))",
        "headerBorder": "var(undefined, var(--color-checks-header-border, (obj) => (0, get_1.default)(obj, path)))",
        "headerIcon": "var(undefined, var(--color-checks-header-icon, (obj) => (0, get_1.default)(obj, path)))",
        "lineText": "var(undefined, var(--color-checks-line-text, (obj) => (0, get_1.default)(obj, path)))",
        "lineNumText": "var(undefined, var(--color-checks-line-num-text, (obj) => (0, get_1.default)(obj, path)))",
        "lineTimestampText": "var(undefined, var(--color-checks-line-timestamp-text, (obj) => (0, get_1.default)(obj, path)))",
        "lineHoverBg": "var(undefined, var(--color-checks-line-hover-bg, (obj) => {\n        const resolvedValue = resolveValue(value, obj);\n        // Instead of value being #hex, the value is now var(--v, #hex)\n        const hexColorValue = getFallbackValueFromVar(resolvedValue);\n        const hexColorValueWithTransparency = (0, color2k_1.transparentize)(hexColorValue, 1 - amount).replace(/ /g, '');\n        return resolvedValue.replace(hexColorValue, hexColorValueWithTransparency);\n    }))",
        "lineSelectedBg": "var(undefined, var(--color-checks-line-selected-bg, (obj) => {\n        const resolvedValue = resolveValue(value, obj);\n        // Instead of value being #hex, the value is now var(--v, #hex)\n        const hexColorValue = getFallbackValueFromVar(resolvedValue);\n        const hexColorValueWithTransparency = (0, color2k_1.transparentize)(hexColorValue, 1 - amount).replace(/ /g, '');\n        return resolvedValue.replace(hexColorValue, hexColorValueWithTransparency);\n    }))",
        "lineSelectedNumText": "var(undefined, var(--color-checks-line-selected-num-text, (obj) => (0, get_1.default)(obj, path)))",
        "lineDtFmText": "var(undefined, var(--color-checks-line-dt-fm-text, (obj) => (0, get_1.default)(obj, path)))",
        "lineDtFmBg": "var(undefined, var(--color-checks-line-dt-fm-bg, (obj) => (0, get_1.default)(obj, path)))",
        "gateBg": "var(undefined, var(--color-checks-gate-bg, (obj) => {\n        const resolvedValue = resolveValue(value, obj);\n        // Instead of value being #hex, the value is now var(--v, #hex)\n        const hexColorValue = getFallbackValueFromVar(resolvedValue);\n        const hexColorValueWithTransparency = (0, color2k_1.transparentize)(hexColorValue, 1 - amount).replace(/ /g, '');\n        return resolvedValue.replace(hexColorValue, hexColorValueWithTransparency);\n    }))",
        "gateText": "var(undefined, var(--color-checks-gate-text, (obj) => (0, get_1.default)(obj, path)))",
        "gateWaitingText": "var(undefined, var(--color-checks-gate-waiting-text, (obj) => (0, get_1.default)(obj, path)))",
        "stepHeaderOpenBg": "var(undefined, var(--color-checks-step-header-open-bg, (obj) => (0, get_1.default)(obj, path)))",
        "stepErrorText": "var(undefined, var(--color-checks-step-error-text, (obj) => (0, get_1.default)(obj, path)))",
        "stepWarningText": "var(undefined, var(--color-checks-step-warning-text, (obj) => (0, get_1.default)(obj, path)))",
        "loglineText": "var(undefined, var(--color-checks-logline-text, (obj) => (0, get_1.default)(obj, path)))",
        "loglineNumText": "var(undefined, var(--color-checks-logline-num-text, (obj) => (0, get_1.default)(obj, path)))",
        "loglineDebugText": "var(undefined, var(--color-checks-logline-debug-text, (obj) => (0, get_1.default)(obj, path)))",
        "loglineErrorText": "var(undefined, var(--color-checks-logline-error-text, (obj) => (0, get_1.default)(obj, path)))",
        "loglineErrorNumText": "var(undefined, var(--color-checks-logline-error-num-text, (obj) => (0, get_1.default)(obj, path)))",
        "loglineErrorBg": "var(undefined, var(--color-checks-logline-error-bg, (obj) => {\n        const resolvedValue = resolveValue(value, obj);\n        // Instead of value being #hex, the value is now var(--v, #hex)\n        const hexColorValue = getFallbackValueFromVar(resolvedValue);\n        const hexColorValueWithTransparency = (0, color2k_1.transparentize)(hexColorValue, 1 - amount).replace(/ /g, '');\n        return resolvedValue.replace(hexColorValue, hexColorValueWithTransparency);\n    }))",
        "loglineWarningText": "var(undefined, var(--color-checks-logline-warning-text, (obj) => (0, get_1.default)(obj, path)))",
        "loglineWarningNumText": "var(undefined, var(--color-checks-logline-warning-num-text, (obj) => (0, get_1.default)(obj, path)))",
        "loglineWarningBg": "var(undefined, var(--color-checks-logline-warning-bg, (obj) => {\n        const resolvedValue = resolveValue(value, obj);\n        // Instead of value being #hex, the value is now var(--v, #hex)\n        const hexColorValue = getFallbackValueFromVar(resolvedValue);\n        const hexColorValueWithTransparency = (0, color2k_1.transparentize)(hexColorValue, 1 - amount).replace(/ /g, '');\n        return resolvedValue.replace(hexColorValue, hexColorValueWithTransparency);\n    }))",
        "loglineCommandText": "var(undefined, var(--color-checks-logline-command-text, (obj) => (0, get_1.default)(obj, path)))",
        "loglineSectionText": "var(undefined, var(--color-checks-logline-section-text, (obj) => (0, get_1.default)(obj, path)))",
        "ansi": {
            "black": "var(undefined, var(--color-ansi-black, #0a0c10))",
            "blackBright": "var(undefined, var(--color-ansi-black-bright, #272b33))",
            "white": "var(undefined, var(--color-ansi-white, #d9dee3))",
            "whiteBright": "var(undefined, var(--color-ansi-white-bright, #d9dee3))",
            "gray": "var(undefined, var(--color-ansi-gray, #9ea7b3))",
            "red": "var(undefined, var(--color-ansi-red, #ff9492))",
            "redBright": "var(undefined, var(--color-ansi-red-bright, #ffb1af))",
            "green": "var(undefined, var(--color-ansi-green, #26cd4d))",
            "greenBright": "var(undefined, var(--color-ansi-green-bright, #4ae168))",
            "yellow": "var(undefined, var(--color-ansi-yellow, #f0b72f))",
            "yellowBright": "var(undefined, var(--color-ansi-yellow-bright, #f7c843))",
            "blue": "var(undefined, var(--color-ansi-blue, #71b7ff))",
            "blueBright": "var(undefined, var(--color-ansi-blue-bright, #91cbff))",
            "magenta": "var(undefined, var(--color-ansi-magenta, #cb9eff))",
            "magentaBright": "var(undefined, var(--color-ansi-magenta-bright, #dbb7ff))",
            "cyan": "var(undefined, var(--color-ansi-cyan, #76e3ea))",
            "cyanBright": "var(undefined, var(--color-ansi-cyan-bright, #b3f0ff))"
        }
    },
    "project": {
        "headerBg": "var(undefined, var(--color-project-header-bg, #0a0c10))",
        "sidebarBg": "var(undefined, var(--color-project-sidebar-bg, #272b33))",
        "gradientIn": "var(undefined, var(--color-project-gradient-in, #272b33))",
        "gradientOut": "var(undefined, var(--color-project-gradient-out, rgba(39,43,51,0)))"
    },
    "mktg": {
        "btn": {
            "bg": "#f6f8fa",
            "shadow": {
                "outline": "rgb(255 255 255 / 25%) 0 0 0 1px inset",
                "focus": "rgb(255 255 255 / 25%) 0 0 0 4px",
                "hover": "0 4px 7px rgba(0, 0, 0, 0.15), 0 100px 80px rgba(255, 255, 255, 0.02), 0 42px 33px rgba(255, 255, 255, 0.024), 0 22px 18px rgba(255, 255, 255, 0.028), 0 12px 10px rgba(255, 255, 255, 0.034), 0 7px 5px rgba(255, 255, 255, 0.04), 0 3px 2px rgba(255, 255, 255, 0.07)",
                "hoverMuted": "rgb(255 255 255) 0 0 0 2px inset"
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
        "border": "#409eff"
    },
    "counter": {
        "border": "var(--counter-borderColor, var(--color-counter-border, transparent))"
    },
    "selectMenu": {
        "backdropBorder": "var(undefined, var(--color-selectMenu-backdrop-border, #7a828e))",
        "tapHighlight": "var(undefined, var(--color-selectMenu-tap-highlight, rgba(82,89,100,0.5)))",
        "tapFocusBg": "var(undefined, var(--color-selectMenu-tap-focus-bg, #1e60d5))"
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
        "bg": "var(undefined, var(--color-headerSearch-bg, #0a0c10))",
        "border": "var(undefined, var(--color-headerSearch-border, #525964))"
    },
    "sidenav": {
        "selectedBg": "var(--sideNav-bgColor-selected, var(--color-sidenav-selected-bg, #272b33))"
    },
    "menu": {
        "bgActive": "var(--menu-bgColor-active, var(--color-menu-bg-active, #272b33))"
    },
    "input": {
        "disabledBg": "var(--control-bgColor-disabled, var(--color-input-disabled-bg, rgba(158,167,179,0)))"
    },
    "timeline": {
        "badgeBg": "var(--timelineBadge-bgColor, var(--color-timeline-badge-bg, #272b33))"
    },
    "ansi": {
        "black": "var(undefined, var(--color-ansi-black, #7a828e))",
        "blackBright": "var(undefined, var(--color-ansi-black-bright, #9ea7b3))",
        "white": "var(undefined, var(--color-ansi-white, #d9dee3))",
        "whiteBright": "var(undefined, var(--color-ansi-white-bright, #ffffff))",
        "gray": "var(undefined, var(--color-ansi-gray, #9ea7b3))",
        "red": "var(undefined, var(--color-ansi-red, #ff9492))",
        "redBright": "var(undefined, var(--color-ansi-red-bright, #ffb1af))",
        "green": "var(undefined, var(--color-ansi-green, #26cd4d))",
        "greenBright": "var(undefined, var(--color-ansi-green-bright, #4ae168))",
        "yellow": "var(undefined, var(--color-ansi-yellow, #f0b72f))",
        "yellowBright": "var(undefined, var(--color-ansi-yellow-bright, #f7c843))",
        "blue": "var(undefined, var(--color-ansi-blue, #71b7ff))",
        "blueBright": "var(undefined, var(--color-ansi-blue-bright, #91cbff))",
        "magenta": "var(undefined, var(--color-ansi-magenta, #cb9eff))",
        "magentaBright": "var(undefined, var(--color-ansi-magenta-bright, #dbb7ff))",
        "cyan": "var(undefined, var(--color-ansi-cyan, #39c5cf))",
        "cyanBright": "var(undefined, var(--color-ansi-cyan-bright, #56d4dd))"
    },
    "btn": {
        "text": "var(--button-default-fgColor-rest, var(--color-btn-text, #f0f3f6))",
        "bg": "var(--control-bgColor-rest, var(--color-btn-bg, #272b33))",
        "border": "var(--control-borderColor-rest, var(--color-btn-border, (obj) => (0, get_1.default)(obj, path)))",
        "shadow": "var(--button-default-shadow-resting, var(--color-btn-shadow, 0 0 transparent))",
        "insetShadow": "var(--button-default-shadow-inset, var(--color-btn-inset-shadow, 0 0 transparent))",
        "hoverBg": "var(--control-bgColor-hover, var(--color-btn-hover-bg, #525964))",
        "hoverBorder": "var(--button-default-borderColor-hover, var(--color-btn-hover-border, #bdc4cc))",
        "activeBg": "var(--button-default-bgColor-active, var(--color-btn-active-bg, hsla(217,10%,33%,1)))",
        "activeBorder": "var(--button-default-borderColor-active, var(--color-btn-active-border, #9ea7b3))",
        "selectedBg": "rgba(82,89,100,0.9)",
        "counterBg": "var(--buttonCounter-default-bgColor-rest, var(--color-btn-counter-bg, #525964))",
        "primary": {
            "text": "#0a0c10",
            "bg": "var(undefined, var(--color-primary-bg, #09b43a))",
            "border": "#4ae168",
            "shadow": "var(undefined, var(--color-primary-shadow, 0 0 transparent))",
            "insetShadow": "var(undefined, var(--color-primary-inset-shadow, 0 0 transparent))",
            "hoverBg": "#26cd4d",
            "hoverBorder": "#4ae168",
            "selectedBg": "var(undefined, var(--color-primary-selected-bg, #09b43a))",
            "selectedShadow": "var(undefined, var(--color-primary-selected-shadow, 0 0 transparent))",
            "disabledText": "rgba(10,12,16,0.5)",
            "disabledBg": "rgba(9,180,58,0.6)",
            "disabledBorder": "rgba(74,225,104,0.4)",
            "icon": "#0a0c10",
            "counterBg": "rgba(1,4,9,0.15)"
        },
        "outline": {
            "text": "var(undefined, var(--color-outline-text, #409eff))",
            "hoverText": "var(undefined, var(--color-outline-hover-text, #71b7ff))",
            "hoverBg": "var(undefined, var(--color-outline-hover-bg, #525964))",
            "hoverBorder": "var(undefined, var(--color-outline-hover-border, (obj) => (0, get_1.default)(obj, path)))",
            "hoverShadow": "var(undefined, var(--color-outline-hover-shadow, 0 1px 0 rgba(1,4,9,0.1)))",
            "hoverInsetShadow": "var(undefined, var(--color-outline-hover-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))",
            "hoverCounterBg": "var(undefined, var(--color-outline-hover-counter-bg, rgba(25,79,177,0.2)))",
            "selectedText": "var(undefined, var(--color-outline-selected-text, #ffffff))",
            "selectedBg": "var(undefined, var(--color-outline-selected-bg, #2672f3))",
            "selectedBorder": "var(undefined, var(--color-outline-selected-border, (obj) => (0, get_1.default)(obj, path)))",
            "selectedShadow": "var(undefined, var(--color-outline-selected-shadow, 0 0 transparent))",
            "disabledText": "var(undefined, var(--color-outline-disabled-text, rgba(113,183,255,0.5)))",
            "disabledBg": "var(undefined, var(--color-outline-disabled-bg, #0a0c10))",
            "disabledCounterBg": "var(undefined, var(--color-outline-disabled-counter-bg, rgba(64,158,255,0.05)))",
            "counterBg": "var(undefined, var(--color-outline-counter-bg, rgba(25,79,177,0.2)))",
            "hoverCounterFg": "var(undefined, var(--color-outline-hover-counter-fg, #71b7ff))",
            "disabledCounterFg": "var(undefined, var(--color-outline-disabled-counter-fg, rgba(113,183,255,0.5)))",
            "counterFg": "var(undefined, var(--color-outline-counter-fg, #409eff))"
        },
        "danger": {
            "text": "var(undefined, var(--color-danger-text, #ff6a69))",
            "hoverText": "var(undefined, var(--color-danger-hover-text, (obj) => (0, get_1.default)(obj, path)))",
            "hoverBg": "var(undefined, var(--color-danger-hover-bg, #ff6a69))",
            "hoverBorder": "var(undefined, var(--color-danger-hover-border, #ff6a69))",
            "hoverShadow": "var(undefined, var(--color-danger-hover-shadow, 0 0 transparent))",
            "hoverInsetShadow": "var(undefined, var(--color-danger-hover-inset-shadow, 0 0 transparent))",
            "hoverIcon": "var(undefined, var(--color-danger-hover-icon, (obj) => (0, get_1.default)(obj, path)))",
            "hoverCounterBg": "rgba(1,4,9,0.15)",
            "selectedText": "var(undefined, var(--color-danger-selected-text, #ffffff))",
            "selectedBg": "var(undefined, var(--color-danger-selected-bg, #ff4445))",
            "selectedBorder": "var(undefined, var(--color-danger-selected-border, #ff9492))",
            "selectedShadow": "var(undefined, var(--color-danger-selected-shadow, 0 0 transparent))",
            "disabledText": "var(undefined, var(--color-danger-disabled-text, rgba(255,106,105,0.5)))",
            "disabledBg": "var(undefined, var(--color-danger-disabled-bg, #0a0c10))",
            "disabledCounterBg": "var(undefined, var(--color-danger-disabled-counter-bg, rgba(255,106,105,0.05)))",
            "counterBg": "rgba(1,4,9,0.15)",
            "icon": "var(undefined, var(--color-danger-icon, #ff6a69))",
            "counterFg": "var(undefined, var(--color-danger-counter-fg, (obj) => (0, get_1.default)(obj, path)))",
            "disabledCounterFg": "var(undefined, var(--color-danger-disabled-counter-fg, rgba(255,106,105,0.5)))",
            "hoverCounterFg": "var(undefined, var(--color-danger-hover-counter-fg, #ffffff))"
        },
        "inactive": {
            "bg": "var(undefined, var(--color-inactive-bg, #272b33))",
            "text": "var(undefined, var(--color-inactive-text, #bdc4cc))"
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
            "hoverBg": "#ff6a69",
            "activeBg": "#ff4445",
            "hoverText": "#0a0c10"
        }
    },
    "switchTrack": {
        "bg": "#9ea7b3",
        "hoverBg": "hsla(214,12%,61%,1)",
        "activeBg": "hsla(214,12%,58%,1)",
        "disabledBg": "var(undefined, var(--color-switchTrack-disabled-bg, #272b33))",
        "fg": "#0a0c10",
        "disabledFg": "var(undefined, var(--color-switchTrack-disabled-fg, #010409))",
        "border": "var(undefined, var(--color-switchTrack-border, transparent))",
        "checked": {
            "bg": "#409eff",
            "hoverBg": "var(undefined, var(--color-checked-hover-bg, rgba(64,158,255,0.5)))",
            "activeBg": "var(undefined, var(--color-checked-active-bg, rgba(64,158,255,0.65)))",
            "fg": "var(undefined, var(--color-checked-fg, (obj) => (0, get_1.default)(obj, path)))",
            "disabledFg": "var(undefined, var(--color-checked-disabled-fg, #010409))",
            "border": "var(undefined, var(--color-checked-border, transparent))"
        }
    },
    "switchKnob": {
        "bg": "var(undefined, var(--color-switchKnob-bg, (obj) => (0, get_1.default)(obj, path)))",
        "border": "#9ea7b3",
        "disabledBg": "var(undefined, var(--color-switchKnob-disabled-bg, (obj) => (0, get_1.default)(obj, path)))",
        "checked": {
            "bg": "var(undefined, var(--color-checked-bg, (obj) => (0, get_1.default)(obj, path)))",
            "disabledBg": "var(undefined, var(--color-checked-disabled-bg, (obj) => (0, get_1.default)(obj, path)))",
            "border": "#409eff"
        }
    },
    "segmentedControl": {
        "bg": "var(undefined, var(--color-segmentedControl-bg, (obj) => {\n        const resolvedValue = resolveValue(value, obj);\n        // Instead of value being #hex, the value is now var(--v, #hex)\n        const hexColorValue = getFallbackValueFromVar(resolvedValue);\n        const hexColorValueWithTransparency = (0, color2k_1.transparentize)(hexColorValue, 1 - amount).replace(/ /g, '');\n        return resolvedValue.replace(hexColorValue, hexColorValueWithTransparency);\n    }))",
        "button": {
            "bg": "var(undefined, var(--color-button-bg, (obj) => (0, get_1.default)(obj, path)))",
            "hover": {
                "bg": "var(undefined, var(--color-hover-bg, #525964))"
            },
            "active": {
                "bg": "var(undefined, var(--color-active-bg, #272b33))"
            },
            "selected": {
                "border": "var(undefined, var(--color-selected-border, #9ea7b3))"
            }
        }
    },
    "treeViewItem": {
        "chevron": {
            "hoverBg": "#525964"
        },
        "directory": {
            "fill": "var(undefined, var(--color-directory-fill, (obj) => (0, get_1.default)(obj, path)))"
        }
    },
    "fg": {
        "default": "#f0f3f6",
        "muted": "#f0f3f6",
        "subtle": "#9ea7b3",
        "onEmphasis": "#0a0c10"
    },
    "canvas": {
        "default": "#0a0c10",
        "overlay": "#272b33",
        "inset": "#010409",
        "subtle": "#272b33"
    },
    "border": {
        "default": "#7a828e",
        "muted": "#7a828e",
        "subtle": "#7a828e"
    },
    "shadow": {
        "small": "0 0 transparent",
        "medium": "0 3px 6px #010409",
        "large": "0 8px 24px #010409",
        "extraLarge": "0 12px 48px #010409"
    },
    "neutral": {
        "emphasisPlus": "#ffffff",
        "emphasis": "#9ea7b3",
        "muted": "rgba(158,167,179,0.4)",
        "subtle": "rgba(158,167,179,0.1)"
    },
    "accent": {
        "fg": "#71b7ff",
        "emphasis": "#409eff",
        "muted": "#409eff",
        "subtle": "rgba(64,158,255,0.1)"
    },
    "success": {
        "fg": "#26cd4d",
        "emphasis": "#09b43a",
        "muted": "#09b43a",
        "subtle": "rgba(9,180,58,0.15)"
    },
    "attention": {
        "fg": "#f0b72f",
        "emphasis": "#e09b13",
        "muted": "#e09b13",
        "subtle": "rgba(224,155,19,0.15)"
    },
    "severe": {
        "fg": "#e7811d",
        "emphasis": "#e7811d",
        "muted": "#e7811d",
        "subtle": "rgba(231,129,29,0.1)"
    },
    "danger": {
        "fg": "#ff6a69",
        "emphasis": "#ff6a69",
        "muted": "#ff6a69",
        "subtle": "rgba(255,106,105,0.1)"
    },
    "open": {
        "fg": "#26cd4d",
        "emphasis": "#09b43a",
        "muted": "rgba(9,180,58,0.4)",
        "subtle": "rgba(9,180,58,0.15)"
    },
    "closed": {
        "fg": "#ff6a69",
        "emphasis": "#ff6a69",
        "muted": "rgba(255,106,105,0.4)",
        "subtle": "rgba(255,106,105,0.15)"
    },
    "done": {
        "fg": "#b780ff",
        "emphasis": "#b87fff",
        "muted": "#b780ff",
        "subtle": "rgba(183,128,255,0.1)"
    },
    "sponsors": {
        "fg": "#ef6eb1",
        "emphasis": "#ef6eb1",
        "muted": "#ef6eb1",
        "subtle": "rgba(239,110,177,0.1)"
    },
    "primer": {
        "fg": {
            "disabled": "#7a828e"
        },
        "canvas": {
            "backdrop": "rgba(1,4,9,0.8)",
            "sticky": "rgba(10,12,16,0.95)"
        },
        "border": {
            "active": "#ff967d",
            "contrast": "rgba(255,255,255,0.2)"
        },
        "shadow": {
            "highlight": "0 0 transparent",
            "inset": "0 0 transparent"
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
};
