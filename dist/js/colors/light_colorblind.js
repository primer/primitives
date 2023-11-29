"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "canvasDefaultTransparent": "var(undefined, var(--color--canvas-default-transparent, var(--bgColor-default, var(--color-canvas-default, rgba(255,255,255,0)))))",
    "pageHeaderBg": "var(undefined, var(--color--page-header-bg, (theme) => `var(--bgColor-muted, var(--color-canvas-subtle, ${(0, utils_v1_1.get)('scale.gray.0')(theme)}))`))",
    "marketingIcon": {
        "primary": "var(undefined, var(--color-marketingIcon-primary, #218bff))",
        "secondary": "var(undefined, var(--color-marketingIcon-secondary, #54aeff))"
    },
    "diffBlob": {
        "addition": {
            "numText": "var(undefined, var(--color-addition-num-text, (obj) => (0, get_1.default)(obj, path)))",
            "fg": "var(undefined, var(--color-addition-fg, (obj) => (0, get_1.default)(obj, path)))",
            "numBg": "var(--borderColor-success-muted, var(--color-success-muted, rgba(84,174,255,0.4)))",
            "lineBg": "rgba(221,244,255,0.5)",
            "wordBg": "var(--borderColor-success-muted, var(--color-success-muted, rgba(84,174,255,0.4)))"
        },
        "deletion": {
            "numText": "var(undefined, var(--color-deletion-num-text, (obj) => (0, get_1.default)(obj, path)))",
            "fg": "var(undefined, var(--color-deletion-fg, (obj) => (0, get_1.default)(obj, path)))",
            "numBg": "var(--borderColor-danger-muted, var(--color-danger-muted, rgba(247,153,57,0.4)))",
            "lineBg": "rgba(255,245,232,0.5)",
            "wordBg": "rgba(255,188,109,0.5)"
        },
        "hunk": {
            "numBg": "var(undefined, var(--color-hunk-num-bg, (theme) => `var(--borderColor-accent-muted, var(--color-accent-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.blue.3'), 0.4)(theme)}))`))"
        },
        "expander": {
            "icon": "var(undefined, var(--color-expander-icon, (obj) => (0, get_1.default)(obj, path)))"
        },
        "selectedLineHighlightMixBlendMode": "var(undefined, var(--color-expander-selected-line-highlight-mix-blend-mode, multiply))"
    },
    "diffstat": {
        "deletionBorder": "var(undefined, var(--color-diffstat-deletion-border, (theme) => `var(undefined, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
        "additionBorder": "var(undefined, var(--color-diffstat-addition-border, (theme) => `var(undefined, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
        "additionBg": "#0969da"
    },
    "searchKeyword": {
        "hl": "var(undefined, var(--color-searchKeyword-hl, #fff8c5))"
    },
    "prettylights": {
        "syntax": {
            "comment": "var(undefined, var(--color-syntax-comment, #57606a))",
            "constant": "var(undefined, var(--color-syntax-constant, #0550ae))",
            "entity": "var(undefined, var(--color-syntax-entity, #6639ba))",
            "storageModifierImport": "var(undefined, var(--color-syntax-storage-modifier-import, #24292f))",
            "entityTag": "var(undefined, var(--color-syntax-entity-tag, #0550ae))",
            "keyword": "var(undefined, var(--color-syntax-keyword, #b35900))",
            "string": "var(undefined, var(--color-syntax-string, #0a3069))",
            "variable": "var(undefined, var(--color-syntax-variable, #8a4600))",
            "brackethighlighterUnmatched": "var(undefined, var(--color-syntax-brackethighlighter-unmatched, #6f3800))",
            "invalidIllegalText": "var(undefined, var(--color-syntax-invalid-illegal-text, #f6f8fa))",
            "invalidIllegalBg": "var(undefined, var(--color-syntax-invalid-illegal-bg, #6f3800))",
            "carriageReturnText": "var(undefined, var(--color-syntax-carriage-return-text, #f6f8fa))",
            "carriageReturnBg": "var(undefined, var(--color-syntax-carriage-return-bg, #b35900))",
            "stringRegexp": "var(undefined, var(--color-syntax-string-regexp, #0550ae))",
            "markupList": "var(undefined, var(--color-syntax-markup-list, #3b2300))",
            "markupHeading": "var(undefined, var(--color-syntax-markup-heading, #0550ae))",
            "markupItalic": "var(undefined, var(--color-syntax-markup-italic, #24292f))",
            "markupBold": "var(undefined, var(--color-syntax-markup-bold, #24292f))",
            "markupDeletedText": "var(undefined, var(--color-syntax-markup-deleted-text, #6f3800))",
            "markupDeletedBg": "var(undefined, var(--color-syntax-markup-deleted-bg, #fff5e8))",
            "markupInsertedText": "var(undefined, var(--color-syntax-markup-inserted-text, #0550ae))",
            "markupInsertedBg": "var(undefined, var(--color-syntax-markup-inserted-bg, #ddf4ff))",
            "markupChangedText": "var(undefined, var(--color-syntax-markup-changed-text, #8a4600))",
            "markupChangedBg": "var(undefined, var(--color-syntax-markup-changed-bg, #ffddb0))",
            "markupIgnoredText": "var(undefined, var(--color-syntax-markup-ignored-text, #eaeef2))",
            "markupIgnoredBg": "var(undefined, var(--color-syntax-markup-ignored-bg, #0550ae))",
            "metaDiffRange": "var(undefined, var(--color-syntax-meta-diff-range, #8250df))",
            "brackethighlighterAngle": "var(undefined, var(--color-syntax-brackethighlighter-angle, #57606a))",
            "sublimelinterGutterMark": "var(undefined, var(--color-syntax-sublimelinter-gutter-mark, #8c959f))",
            "constantOtherReferenceLink": "var(undefined, var(--color-syntax-constant-other-reference-link, #0a3069))"
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
        "selectionBg": "var(--codeMirror-selection-bgColor, var(--color-codemirror-selection-bg, (theme) => `var(--borderColor-accent-muted, var(--color-accent-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.blue.3'), 0.4)(theme)}))`))",
        "activelineBg": "var(--codeMirror-activeline-bgColor, var(--color-codemirror-activeline-bg, (theme) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.1'), 0.5)(theme)}))`))",
        "matchingbracketText": "var(--codeMirror-matchingBracket-fgColor, var(--color-codemirror-matchingbracket-text, (obj) => (0, get_1.default)(obj, path)))",
        "linesBg": "var(--codeMirror-lines-bgColor, var(--color-codemirror-lines-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
        "syntax": {
            "comment": "var(undefined, var(--color-syntax-comment, #24292f))",
            "constant": "var(undefined, var(--color-syntax-constant, #0550ae))",
            "entity": "var(undefined, var(--color-syntax-entity, #8250df))",
            "keyword": "var(undefined, var(--color-syntax-keyword, #b35900))",
            "storage": "var(undefined, var(--color-syntax-storage, #b35900))",
            "string": "var(undefined, var(--color-syntax-string, #0a3069))",
            "support": "var(undefined, var(--color-syntax-support, #0550ae))",
            "variable": "var(undefined, var(--color-syntax-variable, #8a4600))"
        }
    },
    "checks": {
        "bg": "var(undefined, var(--color-checks-bg, #24292f))",
        "runBorderWidth": "var(undefined, var(--color-checks-run-border-width, 0px))",
        "containerBorderWidth": "var(undefined, var(--color-checks-container-border-width, 0px))",
        "textPrimary": "var(undefined, var(--color-checks-text-primary, #f6f8fa))",
        "textSecondary": "var(undefined, var(--color-checks-text-secondary, #8c959f))",
        "textLink": "var(undefined, var(--color-checks-text-link, #54aeff))",
        "btnIcon": "var(undefined, var(--color-checks-btn-icon, #afb8c1))",
        "btnHoverIcon": "var(undefined, var(--color-checks-btn-hover-icon, #f6f8fa))",
        "btnHoverBg": "var(undefined, var(--color-checks-btn-hover-bg, rgba(255,255,255,0.125)))",
        "inputText": "var(undefined, var(--color-checks-input-text, #eaeef2))",
        "inputPlaceholderText": "var(undefined, var(--color-checks-input-placeholder-text, #8c959f))",
        "inputFocusText": "var(undefined, var(--color-checks-input-focus-text, #8c959f))",
        "inputBg": "var(undefined, var(--color-checks-input-bg, #32383f))",
        "inputShadow": "var(undefined, var(--color-checks-input-shadow, none))",
        "donutError": "var(undefined, var(--color-checks-donut-error, #dd7815))",
        "donutPending": "var(undefined, var(--color-checks-donut-pending, #bf8700))",
        "donutSuccess": "var(undefined, var(--color-checks-donut-success, (obj) => (0, get_1.default)(obj, path)))",
        "donutNeutral": "var(undefined, var(--color-checks-donut-neutral, #afb8c1))",
        "dropdownText": "var(undefined, var(--color-checks-dropdown-text, #afb8c1))",
        "dropdownBg": "var(undefined, var(--color-checks-dropdown-bg, #32383f))",
        "dropdownBorder": "var(undefined, var(--color-checks-dropdown-border, #424a53))",
        "dropdownShadow": "var(undefined, var(--color-checks-dropdown-shadow, rgba(27,31,36,0.3)))",
        "dropdownHoverText": "var(undefined, var(--color-checks-dropdown-hover-text, #f6f8fa))",
        "dropdownHoverBg": "var(undefined, var(--color-checks-dropdown-hover-bg, #424a53))",
        "dropdownBtnHoverText": "var(undefined, var(--color-checks-dropdown-btn-hover-text, #f6f8fa))",
        "dropdownBtnHoverBg": "var(undefined, var(--color-checks-dropdown-btn-hover-bg, #32383f))",
        "scrollbarThumbBg": "var(undefined, var(--color-checks-scrollbar-thumb-bg, #57606a))",
        "headerLabelText": "var(undefined, var(--color-checks-header-label-text, #d0d7de))",
        "headerLabelOpenText": "var(undefined, var(--color-checks-header-label-open-text, #f6f8fa))",
        "headerBorder": "var(undefined, var(--color-checks-header-border, #32383f))",
        "headerIcon": "var(undefined, var(--color-checks-header-icon, #8c959f))",
        "lineText": "var(undefined, var(--color-checks-line-text, #d0d7de))",
        "lineNumText": "var(undefined, var(--color-checks-line-num-text, rgba(140,149,159,0.75)))",
        "lineTimestampText": "var(undefined, var(--color-checks-line-timestamp-text, #8c959f))",
        "lineHoverBg": "var(undefined, var(--color-checks-line-hover-bg, #32383f))",
        "lineSelectedBg": "var(undefined, var(--color-checks-line-selected-bg, rgba(33,139,255,0.15)))",
        "lineSelectedNumText": "var(undefined, var(--color-checks-line-selected-num-text, #54aeff))",
        "lineDtFmText": "var(undefined, var(--color-checks-line-dt-fm-text, #24292f))",
        "lineDtFmBg": "var(undefined, var(--color-checks-line-dt-fm-bg, #9a6700))",
        "gateBg": "var(undefined, var(--color-checks-gate-bg, rgba(125,78,0,0.15)))",
        "gateText": "var(undefined, var(--color-checks-gate-text, #d0d7de))",
        "gateWaitingText": "var(undefined, var(--color-checks-gate-waiting-text, #d4a72c))",
        "stepHeaderOpenBg": "var(undefined, var(--color-checks-step-header-open-bg, #32383f))",
        "stepErrorText": "var(undefined, var(--color-checks-step-error-text, #f79939))",
        "stepWarningText": "var(undefined, var(--color-checks-step-warning-text, #d4a72c))",
        "loglineText": "var(undefined, var(--color-checks-logline-text, #8c959f))",
        "loglineNumText": "var(undefined, var(--color-checks-logline-num-text, rgba(140,149,159,0.75)))",
        "loglineDebugText": "var(undefined, var(--color-checks-logline-debug-text, #c297ff))",
        "loglineErrorText": "var(undefined, var(--color-checks-logline-error-text, #d0d7de))",
        "loglineErrorNumText": "var(undefined, var(--color-checks-logline-error-num-text, #f79939))",
        "loglineErrorBg": "var(undefined, var(--color-checks-logline-error-bg, rgba(138,70,0,0.15)))",
        "loglineWarningText": "var(undefined, var(--color-checks-logline-warning-text, #d0d7de))",
        "loglineWarningNumText": "var(undefined, var(--color-checks-logline-warning-num-text, #d4a72c))",
        "loglineWarningBg": "var(undefined, var(--color-checks-logline-warning-bg, rgba(125,78,0,0.15)))",
        "loglineCommandText": "var(undefined, var(--color-checks-logline-command-text, #54aeff))",
        "loglineSectionText": "var(undefined, var(--color-checks-logline-section-text, #54aeff))",
        "ansi": {
            "black": "var(undefined, var(--color-ansi-black, #24292f))",
            "blackBright": "var(undefined, var(--color-ansi-black-bright, #32383f))",
            "white": "var(undefined, var(--color-ansi-white, #d0d7de))",
            "whiteBright": "var(undefined, var(--color-ansi-white-bright, #d0d7de))",
            "gray": "var(undefined, var(--color-ansi-gray, #8c959f))",
            "red": "var(undefined, var(--color-ansi-red, #f79939))",
            "redBright": "var(undefined, var(--color-ansi-red-bright, #ffbc6d))",
            "green": "var(undefined, var(--color-ansi-green, #54aeff))",
            "greenBright": "var(undefined, var(--color-ansi-green-bright, #80ccff))",
            "yellow": "var(undefined, var(--color-ansi-yellow, #d4a72c))",
            "yellowBright": "var(undefined, var(--color-ansi-yellow-bright, #eac54f))",
            "blue": "var(undefined, var(--color-ansi-blue, #54aeff))",
            "blueBright": "var(undefined, var(--color-ansi-blue-bright, #80ccff))",
            "magenta": "var(undefined, var(--color-ansi-magenta, #c297ff))",
            "magentaBright": "var(undefined, var(--color-ansi-magenta-bright, #d8b9ff))",
            "cyan": "var(undefined, var(--color-ansi-cyan, #76e3ea))",
            "cyanBright": "var(undefined, var(--color-ansi-cyan-bright, #b3f0ff))"
        }
    },
    "project": {
        "headerBg": "var(undefined, var(--color-project-header-bg, #24292f))",
        "sidebarBg": "var(undefined, var(--color-project-sidebar-bg, #ffffff))",
        "gradientIn": "var(undefined, var(--color-project-gradient-in, #ffffff))",
        "gradientOut": "var(undefined, var(--color-project-gradient-out, rgba(255,255,255,0)))"
    },
    "mktg": {
        "btn": {
            "bg": "#1b1f23",
            "shadow": {
                "outline": "rgb(0 0 0 / 15%) 0 0 0 1px inset",
                "focus": "rgb(0 0 0 / 15%) 0 0 0 4px",
                "hover": "0 3px 2px rgba(0, 0, 0, 0.07), 0 7px 5px rgba(0, 0, 0, 0.04), 0 12px 10px rgba(0, 0, 0, 0.03), 0 22px 18px rgba(0, 0, 0, 0.03), 0 42px 33px rgba(0, 0, 0, 0.02), 0 100px 80px rgba(0, 0, 0, 0.02)",
                "hoverMuted": "rgb(0 0 0 / 70%) 0 0 0 2px inset"
            }
        }
    },
    "control": {
        "borderColor": {
            "emphasis": "#858F99"
        }
    },
    "avatar": {
        "bg": "#ffffff",
        "border": "var(undefined, var(--color-border-subtle, rgba(27,31,36,0.15)))",
        "stackFade": "#afb8c1",
        "stackFadeMore": "#d0d7de",
        "childShadow": "0 0 0 2px rgba(255,255,255,0.8)"
    },
    "topicTag": {
        "border": "rgba(0,0,0,0)"
    },
    "counter": {
        "border": "rgba(0,0,0,0)"
    },
    "selectMenu": {
        "backdropBorder": "rgba(0,0,0,0)",
        "tapHighlight": "rgba(175,184,193,0.5)",
        "tapFocusBg": "#b6e3ff"
    },
    "overlay": {
        "shadow": "0 1px 3px rgba(27,31,36,0.12), 0 8px 24px rgba(66,74,83,0.12)",
        "backdrop": "rgba(140,149,159,0.2)"
    },
    "header": {
        "text": "rgba(255,255,255,0.7)",
        "bg": "#24292f",
        "divider": "#57606a",
        "logo": "#ffffff"
    },
    "headerSearch": {
        "bg": "#24292f",
        "border": "#57606a"
    },
    "sidenav": {
        "selectedBg": "#ffffff"
    },
    "menu": {
        "bgActive": "rgba(0,0,0,0)"
    },
    "input": {
        "disabledBg": "var(--bgColor-disabled, var(--color-neutral-muted, rgba(175,184,193,0.2)))"
    },
    "timeline": {
        "badgeBg": "#eaeef2"
    },
    "ansi": {
        "black": "#24292f",
        "blackBright": "#57606a",
        "white": "#6e7781",
        "whiteBright": "#8c959f",
        "gray": "#6e7781",
        "red": "#b35900",
        "redBright": "#8a4600",
        "green": "#0550ae",
        "greenBright": "#0969da",
        "yellow": "#4d2d00",
        "yellowBright": "#633c01",
        "blue": "#0969da",
        "blueBright": "#218bff",
        "magenta": "#8250df",
        "magentaBright": "#a475f9",
        "cyan": "#1b7c83",
        "cyanBright": "#3192aa"
    },
    "btn": {
        "text": "#24292f",
        "bg": "#f6f8fa",
        "border": "var(undefined, var(--color-border-subtle, rgba(27,31,36,0.15)))",
        "shadow": "0 1px 0 rgba(27,31,36,0.04)",
        "insetShadow": "inset 0 1px 0 rgba(255,255,255,0.25)",
        "hoverBg": "#f3f4f6",
        "hoverBorder": "var(undefined, var(--color-border-subtle, rgba(27,31,36,0.15)))",
        "activeBg": "hsla(220,14%,93%,1)",
        "activeBorder": "var(undefined, var(--color-border-subtle, rgba(27,31,36,0.15)))",
        "selectedBg": "hsla(220,14%,94%,1)",
        "counterBg": "rgba(27,31,36,0.08)",
        "primary": {
            "text": "#ffffff",
            "bg": "#0969da",
            "border": "var(undefined, var(--color-border-subtle, rgba(27,31,36,0.15)))",
            "shadow": "0 1px 0 rgba(27,31,36,0.1)",
            "insetShadow": "inset 0 1px 0 rgba(255,255,255,0.03)",
            "hoverBg": "#0969da",
            "hoverBorder": "var(undefined, var(--color-border-subtle, rgba(27,31,36,0.15)))",
            "selectedBg": "hsla(212,92%,43%,1)",
            "selectedShadow": "inset 0 1px 0 rgba(0,33,85,0.2)",
            "disabledText": "rgba(255,255,255,0.8)",
            "disabledBg": "#80ccff",
            "disabledBorder": "var(undefined, var(--color-border-subtle, rgba(27,31,36,0.15)))",
            "icon": "rgba(255,255,255,0.8)",
            "counterBg": "rgba(0,33,85,0.2)"
        },
        "outline": {
            "text": "#0969da",
            "hoverText": "#ffffff",
            "hoverBg": "#0969da",
            "hoverBorder": "var(undefined, var(--color-border-subtle, rgba(27,31,36,0.15)))",
            "hoverShadow": "0 1px 0 rgba(27,31,36,0.1)",
            "hoverInsetShadow": "inset 0 1px 0 rgba(255,255,255,0.03)",
            "hoverCounterBg": "rgba(255,255,255,0.2)",
            "selectedText": "#ffffff",
            "selectedBg": "hsla(212,92%,42%,1)",
            "selectedBorder": "var(undefined, var(--color-border-subtle, rgba(27,31,36,0.15)))",
            "selectedShadow": "inset 0 1px 0 rgba(0,33,85,0.2)",
            "disabledText": "rgba(9,105,218,0.5)",
            "disabledBg": "#f6f8fa",
            "disabledCounterBg": "rgba(9,105,218,0.05)",
            "counterBg": "#0969da1a",
            "counterFg": "#0550ae",
            "hoverCounterFg": "#ffffff",
            "disabledCounterFg": "rgba(9,105,218,0.5)"
        },
        "danger": {
            "text": "#b35900",
            "hoverText": "#ffffff",
            "hoverBg": "#8a4600",
            "hoverBorder": "var(undefined, var(--color-border-subtle, rgba(27,31,36,0.15)))",
            "hoverShadow": "0 1px 0 rgba(27,31,36,0.1)",
            "hoverInsetShadow": "inset 0 1px 0 rgba(255,255,255,0.03)",
            "hoverCounterBg": "rgba(255,255,255,0.2)",
            "selectedText": "#ffffff",
            "selectedBg": "hsla(30,100%,32%,1)",
            "selectedBorder": "var(undefined, var(--color-border-subtle, rgba(27,31,36,0.15)))",
            "selectedShadow": "inset 0 1px 0 rgba(65,32,0,0.2)",
            "disabledText": "rgba(179,89,0,0.5)",
            "disabledBg": "#f6f8fa",
            "disabledCounterBg": "rgba(179,89,0,0.05)",
            "counterBg": "rgba(179,89,0,0.1)",
            "icon": "#b35900",
            "hoverIcon": "#ffffff",
            "counterFg": "#8a4600",
            "hoverCounterFg": "#ffffff",
            "disabledCounterFg": "rgba(179,89,0,0.5)"
        },
        "inactive": {
            "bg": "#eaeef2",
            "text": "#57606a"
        }
    },
    "underlinenav": {
        "icon": "var(--control-fgColor-placeholder, var(--color-fg-subtle, #6e7781))",
        "borderHover": "var(--bgColor-disabled, var(--color-neutral-muted, rgba(175,184,193,0.2)))"
    },
    "actionListItem": {
        "inlineDivider": "var(--borderColor-default, var(--color-border-default, rgba(208,215,222,0.48)))",
        "default": {
            "hoverBg": "rgba(208,215,222,0.32)",
            "hoverBorder": "rgba(0,0,0,0)",
            "activeBg": "rgba(208,215,222,0.48)",
            "activeBorder": "rgba(0,0,0,0)",
            "selectedBg": "rgba(208,215,222,0.24)"
        },
        "danger": {
            "hoverBg": "var(--bgColor-danger-muted, var(--color-danger-subtle, rgba(255,245,232,0.64)))",
            "activeBg": "var(--bgColor-danger-muted, var(--color-danger-subtle, #fff5e8))",
            "hoverText": "#b35900"
        }
    },
    "switchTrack": {
        "bg": "#eaeef2",
        "hoverBg": "hsla(210,24%,90%,1)",
        "activeBg": "hsla(210,24%,88%,1)",
        "disabledBg": "#8c959f",
        "fg": "#57606a",
        "disabledFg": "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #ffffff))",
        "border": "rgba(0,0,0,0)",
        "checked": {
            "bg": "var(--bgColor-accent-emphasis, var(--color-accent-emphasis, #0969da))",
            "hoverBg": "#0860CA",
            "activeBg": "#0757BA",
            "fg": "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #ffffff))",
            "disabledFg": "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #ffffff))",
            "border": "rgba(0,0,0,0)"
        }
    },
    "switchKnob": {
        "bg": "var(--bgColor-default, var(--color-canvas-default, #ffffff))",
        "disabledBg": "var(--bgColor-muted, var(--color-canvas-subtle, #f6f8fa))",
        "border": "#858F99",
        "checked": {
            "bg": "var(--bgColor-default, var(--color-canvas-default, #ffffff))",
            "disabledBg": "var(--bgColor-muted, var(--color-canvas-subtle, #f6f8fa))",
            "border": "var(--bgColor-accent-emphasis, var(--color-accent-emphasis, #0969da))"
        }
    },
    "segmentedControl": {
        "bg": "#eaeef2",
        "button": {
            "bg": "var(--bgColor-default, var(--color-canvas-default, #ffffff))",
            "hover": {
                "bg": "rgba(175,184,193,0.2)"
            },
            "active": {
                "bg": "rgba(175,184,193,0.4)"
            },
            "selected": {
                "border": "#8c959f"
            }
        }
    },
    "treeViewItem": {
        "chevron": {
            "hoverBg": "rgba(208,215,222,0.32)"
        },
        "directory": {
            "fill": "#54aeff"
        }
    },
    "fg": {
        "default": "#24292f",
        "muted": "#57606a",
        "subtle": "var(--control-fgColor-placeholder, var(--color-fg-subtle, #6e7781))",
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
        "subtle": "var(undefined, var(--color-border-subtle, rgba(27,31,36,0.15)))"
    },
    "shadow": {
        "small": "var(--shadow-resting-small, var(--color-shadow-small, 0 1px 0 rgba(27,31,36,0.04)))",
        "medium": "var(--shadow-resting-medium, var(--color-shadow-medium, 0 3px 6px rgba(140,149,159,0.15)))",
        "large": "var(--shadow-floating-large, var(--color-shadow-large, 0 8px 24px rgba(140,149,159,0.2)))",
        "extraLarge": "var(--shadow-floating-xlarge, var(--color-shadow-extra-large, 0 12px 28px rgba(140,149,159,0.3)))"
    },
    "neutral": {
        "emphasisPlus": "var(--bgColor-emphasis, var(--color-neutral-emphasis-plus, #24292f))",
        "emphasis": "var(undefined, var(--color-neutral-emphasis, #6e7781))",
        "muted": "var(--bgColor-disabled, var(--color-neutral-muted, rgba(175,184,193,0.2)))",
        "subtle": "var(--bgColor-neutral-muted, var(--color-neutral-subtle, rgba(234,238,242,0.5)))"
    },
    "accent": {
        "fg": "var(--focus-outlineColor, var(--color-accent-fg, #0969da))",
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
        "emphasis": "var(--control-borderColor-warning, var(--color-attention-emphasis, #9a6700))",
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
        "emphasis": "var(--control-borderColor-danger, var(--color-danger-emphasis, #b35900))",
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
            "disabled": "var(undefined, var(--color-fg-disabled, #8c959f))"
        },
        "canvas": {
            "backdrop": "var(undefined, var(--color-canvas-backdrop, rgba(27,31,36,0.5)))",
            "sticky": "var(undefined, var(--color-canvas-sticky, rgba(255,255,255,0.95)))"
        },
        "border": {
            "active": "var(undefined, var(--color-border-active, #fd8c73))",
            "contrast": "var(undefined, var(--color-border-contrast, rgba(27,31,36,0.1)))"
        },
        "shadow": {
            "highlight": "var(undefined, var(--color-shadow-highlight, inset 0 1px 0 rgba(255,255,255,0.25)))",
            "inset": "var(undefined, var(--color-shadow-inset, inset 0 1px 0 rgba(208,215,222,0.2)))"
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
};
