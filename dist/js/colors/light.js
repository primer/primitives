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
            "numText": "var(undefined, var(--color-addition-num-text, (theme) => `var(--control-fgColor-rest, var(--color-fg-default, ${(0, utils_v1_1.get)('scale.black')(theme)}))`))",
            "fg": "var(undefined, var(--color-addition-fg, (theme) => `var(--control-fgColor-rest, var(--color-fg-default, ${(0, utils_v1_1.get)('scale.black')(theme)}))`))",
            "numBg": "var(undefined, var(--color-addition-num-bg, #ccffd8))",
            "lineBg": "var(undefined, var(--color-addition-line-bg, #e6ffec))",
            "wordBg": "var(undefined, var(--color-addition-word-bg, #abf2bc))"
        },
        "deletion": {
            "numText": "var(undefined, var(--color-deletion-num-text, (theme) => `var(--control-fgColor-rest, var(--color-fg-default, ${(0, utils_v1_1.get)('scale.black')(theme)}))`))",
            "fg": "var(undefined, var(--color-deletion-fg, (theme) => `var(--control-fgColor-rest, var(--color-fg-default, ${(0, utils_v1_1.get)('scale.black')(theme)}))`))",
            "numBg": "var(undefined, var(--color-deletion-num-bg, #ffd7d5))",
            "lineBg": "var(undefined, var(--color-deletion-line-bg, (theme) => `var(--bgColor-danger-muted, var(--color-danger-subtle, ${(0, utils_v1_1.get)('scale.red.0')(theme)}))`))",
            "wordBg": "var(undefined, var(--color-deletion-word-bg, (theme) => `var(--borderColor-danger-muted, var(--color-danger-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.red.3'), 0.4)(theme)}))`))"
        },
        "hunk": {
            "numBg": "var(undefined, var(--color-hunk-num-bg, (theme) => `var(--borderColor-accent-muted, var(--color-accent-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.blue.3'), 0.4)(theme)}))`))"
        },
        "expander": {
            "icon": "var(undefined, var(--color-expander-icon, var(--control-iconColor-rest, var(--color-fg-muted, #656d76))))"
        },
        "selectedLineHighlightMixBlendMode": "var(undefined, var(--color-expander-selected-line-highlight-mix-blend-mode, multiply))"
    },
    "diffstat": {
        "deletionBorder": "var(undefined, var(--color-diffstat-deletion-border, (theme) => `var(undefined, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
        "additionBorder": "var(undefined, var(--color-diffstat-addition-border, (theme) => `var(undefined, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
        "additionBg": "var(undefined, var(--color-diffstat-addition-bg, var(--control-borderColor-success, var(--color-success-emphasis, #1f883d))))"
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
            "entityTag": "var(undefined, var(--color-syntax-entity-tag, #116329))",
            "keyword": "var(undefined, var(--color-syntax-keyword, #cf222e))",
            "string": "var(undefined, var(--color-syntax-string, #0a3069))",
            "variable": "var(undefined, var(--color-syntax-variable, #953800))",
            "brackethighlighterUnmatched": "var(undefined, var(--color-syntax-brackethighlighter-unmatched, #82071e))",
            "invalidIllegalText": "var(undefined, var(--color-syntax-invalid-illegal-text, #f6f8fa))",
            "invalidIllegalBg": "var(undefined, var(--color-syntax-invalid-illegal-bg, #82071e))",
            "carriageReturnText": "var(undefined, var(--color-syntax-carriage-return-text, #f6f8fa))",
            "carriageReturnBg": "var(undefined, var(--color-syntax-carriage-return-bg, #cf222e))",
            "stringRegexp": "var(undefined, var(--color-syntax-string-regexp, #116329))",
            "markupList": "var(undefined, var(--color-syntax-markup-list, #3b2300))",
            "markupHeading": "var(undefined, var(--color-syntax-markup-heading, #0550ae))",
            "markupItalic": "var(undefined, var(--color-syntax-markup-italic, #24292f))",
            "markupBold": "var(undefined, var(--color-syntax-markup-bold, #24292f))",
            "markupDeletedText": "var(undefined, var(--color-syntax-markup-deleted-text, #82071e))",
            "markupDeletedBg": "var(undefined, var(--color-syntax-markup-deleted-bg, #ffebe9))",
            "markupInsertedText": "var(undefined, var(--color-syntax-markup-inserted-text, #116329))",
            "markupInsertedBg": "var(undefined, var(--color-syntax-markup-inserted-bg, #dafbe1))",
            "markupChangedText": "var(undefined, var(--color-syntax-markup-changed-text, #953800))",
            "markupChangedBg": "var(undefined, var(--color-syntax-markup-changed-bg, #ffd8b5))",
            "markupIgnoredText": "var(undefined, var(--color-syntax-markup-ignored-text, #eaeef2))",
            "markupIgnoredBg": "var(undefined, var(--color-syntax-markup-ignored-bg, #0550ae))",
            "metaDiffRange": "var(undefined, var(--color-syntax-meta-diff-range, #8250df))",
            "brackethighlighterAngle": "var(undefined, var(--color-syntax-brackethighlighter-angle, #57606a))",
            "sublimelinterGutterMark": "var(undefined, var(--color-syntax-sublimelinter-gutter-mark, #8c959f))",
            "constantOtherReferenceLink": "var(undefined, var(--color-syntax-constant-other-reference-link, #0a3069))"
        }
    },
    "codemirror": {
        "text": "var(--codeMirror-fgColor, var(--color-codemirror-text, (theme) => `var(--control-fgColor-rest, var(--color-fg-default, ${(0, utils_v1_1.get)('scale.black')(theme)}))`))",
        "bg": "var(--codeMirror-bgColor, var(--color-codemirror-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
        "guttersBg": "var(--codeMirror-gutters-bgColor, var(--color-codemirror-gutters-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
        "guttermarkerText": "var(--codeMirror-gutterMarker-fgColor-default, var(--color-codemirror-guttermarker-text, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
        "guttermarkerSubtleText": "var(--codeMirror-gutterMarker-fgColor-muted, var(--color-codemirror-guttermarker-subtle-text, (theme) => `var(--control-fgColor-placeholder, var(--color-fg-subtle, ${(0, utils_v1_1.get)('scale.gray.5')(theme)}))`))",
        "linenumberText": "var(--codeMirror-lineNumber-fgColor, var(--color-codemirror-linenumber-text, var(--control-iconColor-rest, var(--color-fg-muted, #656d76))))",
        "cursor": "var(--codeMirror-cursor-fgColor, var(--color-codemirror-cursor, (theme) => `var(--control-fgColor-rest, var(--color-fg-default, ${(0, utils_v1_1.get)('scale.black')(theme)}))`))",
        "selectionBg": "var(--codeMirror-selection-bgColor, var(--color-codemirror-selection-bg, (theme) => `var(--borderColor-accent-muted, var(--color-accent-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.blue.3'), 0.4)(theme)}))`))",
        "activelineBg": "var(--codeMirror-activeline-bgColor, var(--color-codemirror-activeline-bg, (theme) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.1'), 0.5)(theme)}))`))",
        "matchingbracketText": "var(--codeMirror-matchingBracket-fgColor, var(--color-codemirror-matchingbracket-text, (theme) => `var(--control-fgColor-rest, var(--color-fg-default, ${(0, utils_v1_1.get)('scale.black')(theme)}))`))",
        "linesBg": "var(--codeMirror-lines-bgColor, var(--color-codemirror-lines-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
        "syntax": {
            "comment": "var(undefined, var(--color-syntax-comment, #24292f))",
            "constant": "var(undefined, var(--color-syntax-constant, #0550ae))",
            "entity": "var(undefined, var(--color-syntax-entity, #8250df))",
            "keyword": "var(undefined, var(--color-syntax-keyword, #cf222e))",
            "storage": "var(undefined, var(--color-syntax-storage, #cf222e))",
            "string": "var(undefined, var(--color-syntax-string, #0a3069))",
            "support": "var(undefined, var(--color-syntax-support, #0550ae))",
            "variable": "var(undefined, var(--color-syntax-variable, #953800))"
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
        "donutError": "var(undefined, var(--color-checks-donut-error, #fa4549))",
        "donutPending": "var(undefined, var(--color-checks-donut-pending, #bf8700))",
        "donutSuccess": "var(undefined, var(--color-checks-donut-success, var(--control-borderColor-success, var(--color-success-emphasis, #1f883d))))",
        "donutNeutral": "var(undefined, var(--color-checks-donut-neutral, #afb8c1))",
        "dropdownText": "var(undefined, var(--color-checks-dropdown-text, #afb8c1))",
        "dropdownBg": "var(undefined, var(--color-checks-dropdown-bg, #32383f))",
        "dropdownBorder": "var(undefined, var(--color-checks-dropdown-border, #424a53))",
        "dropdownShadow": "var(undefined, var(--color-checks-dropdown-shadow, rgba(31,35,40,0.3)))",
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
        "stepErrorText": "var(undefined, var(--color-checks-step-error-text, #ff8182))",
        "stepWarningText": "var(undefined, var(--color-checks-step-warning-text, #d4a72c))",
        "loglineText": "var(undefined, var(--color-checks-logline-text, #8c959f))",
        "loglineNumText": "var(undefined, var(--color-checks-logline-num-text, rgba(140,149,159,0.75)))",
        "loglineDebugText": "var(undefined, var(--color-checks-logline-debug-text, #c297ff))",
        "loglineErrorText": "var(undefined, var(--color-checks-logline-error-text, #d0d7de))",
        "loglineErrorNumText": "var(undefined, var(--color-checks-logline-error-num-text, #ff8182))",
        "loglineErrorBg": "var(undefined, var(--color-checks-logline-error-bg, rgba(164,14,38,0.15)))",
        "loglineWarningText": "var(undefined, var(--color-checks-logline-warning-text, #d0d7de))",
        "loglineWarningNumText": "var(undefined, var(--color-checks-logline-warning-num-text, #d4a72c))",
        "loglineWarningBg": "var(undefined, var(--color-checks-logline-warning-bg, rgba(125,78,0,0.15)))",
        "loglineCommandText": "var(undefined, var(--color-checks-logline-command-text, #54aeff))",
        "loglineSectionText": "var(undefined, var(--color-checks-logline-section-text, #4ac26b))",
        "ansi": {
            "black": "var(undefined, var(--color-ansi-black, #24292f))",
            "blackBright": "var(undefined, var(--color-ansi-black-bright, #32383f))",
            "white": "var(undefined, var(--color-ansi-white, #d0d7de))",
            "whiteBright": "var(undefined, var(--color-ansi-white-bright, #d0d7de))",
            "gray": "var(undefined, var(--color-ansi-gray, #8c959f))",
            "red": "var(undefined, var(--color-ansi-red, #ff8182))",
            "redBright": "var(undefined, var(--color-ansi-red-bright, #ffaba8))",
            "green": "var(undefined, var(--color-ansi-green, #4ac26b))",
            "greenBright": "var(undefined, var(--color-ansi-green-bright, #6fdd8b))",
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
            "emphasis": "var(undefined, var(--color-borderColor-emphasis, #858F99))"
        }
    },
    "avatar": {
        "bg": "var(--avatar-bgColor, var(--color-avatar-bg, #ffffff))",
        "border": "var(--avatar-borderColor, var(--color-avatar-border, (theme) => `var(undefined, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
        "stackFade": "var(--avatarStack-fade-bgColor-default, var(--color-avatar-stack-fade, #afb8c1))",
        "stackFadeMore": "var(--avatarStack-fade-bgColor-muted, var(--color-avatar-stack-fade-more, #d0d7de))",
        "childShadow": "var(--avatar-shadow, var(--color-avatar-child-shadow, 0 0 0 2px rgba(255,255,255,0.8)))"
    },
    "topicTag": {
        "border": "var(undefined, var(--color-topicTag-border, transparent))"
    },
    "counter": {
        "border": "var(--counter-borderColor, var(--color-counter-border, transparent))"
    },
    "selectMenu": {
        "backdropBorder": "var(undefined, var(--color-selectMenu-backdrop-border, transparent))",
        "tapHighlight": "var(undefined, var(--color-selectMenu-tap-highlight, rgba(175,184,193,0.5)))",
        "tapFocusBg": "var(undefined, var(--color-selectMenu-tap-focus-bg, #b6e3ff))"
    },
    "overlay": {
        "shadow": "var(--shadow-floating-small, var(--color-overlay-shadow, 0 1px 3px rgba(31,35,40,0.12), 0 8px 24px rgba(66,74,83,0.12)))",
        "backdrop": "var(--overlay-backdrop-bgColor, var(--color-overlay-backdrop, rgba(140,149,159,0.2)))"
    },
    "header": {
        "text": "var(--header-fgColor-default, var(--color-header-text, rgba(255,255,255,0.7)))",
        "bg": "var(--header-bgColor, var(--color-header-bg, #24292f))",
        "divider": "var(--header-borderColor-divider, var(--color-header-divider, #57606a))",
        "logo": "var(--header-fgColor-logo, var(--color-header-logo, #ffffff))"
    },
    "headerSearch": {
        "bg": "var(undefined, var(--color-headerSearch-bg, #24292f))",
        "border": "var(undefined, var(--color-headerSearch-border, #57606a))"
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
        "badgeBg": "var(--timelineBadge-bgColor, var(--color-timeline-badge-bg, #eaeef2))"
    },
    "ansi": {
        "black": "var(undefined, var(--color-ansi-black, #24292f))",
        "blackBright": "var(undefined, var(--color-ansi-black-bright, #57606a))",
        "white": "var(undefined, var(--color-ansi-white, #6e7781))",
        "whiteBright": "var(undefined, var(--color-ansi-white-bright, #8c959f))",
        "gray": "var(undefined, var(--color-ansi-gray, #6e7781))",
        "red": "var(undefined, var(--color-ansi-red, #cf222e))",
        "redBright": "var(undefined, var(--color-ansi-red-bright, #a40e26))",
        "green": "var(undefined, var(--color-ansi-green, #116329))",
        "greenBright": "var(undefined, var(--color-ansi-green-bright, #1a7f37))",
        "yellow": "var(undefined, var(--color-ansi-yellow, #4d2d00))",
        "yellowBright": "var(undefined, var(--color-ansi-yellow-bright, #633c01))",
        "blue": "var(undefined, var(--color-ansi-blue, #0969da))",
        "blueBright": "var(undefined, var(--color-ansi-blue-bright, #218bff))",
        "magenta": "var(undefined, var(--color-ansi-magenta, #8250df))",
        "magentaBright": "var(undefined, var(--color-ansi-magenta-bright, #a475f9))",
        "cyan": "var(undefined, var(--color-ansi-cyan, #1b7c83))",
        "cyanBright": "var(undefined, var(--color-ansi-cyan-bright, #3192aa))"
    },
    "btn": {
        "text": "var(--button-default-fgColor-rest, var(--color-btn-text, #24292f))",
        "bg": "var(--control-bgColor-rest, var(--color-btn-bg, #f6f8fa))",
        "border": "var(--control-borderColor-rest, var(--color-btn-border, (theme) => `var(undefined, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
        "shadow": "var(--button-default-shadow-resting, var(--color-btn-shadow, 0 1px 0 rgba(31,35,40,0.04)))",
        "insetShadow": "var(--button-default-shadow-inset, var(--color-btn-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.25)))",
        "hoverBg": "var(--control-bgColor-hover, var(--color-btn-hover-bg, #f3f4f6))",
        "hoverBorder": "var(--button-default-borderColor-hover, var(--color-btn-hover-border, (theme) => `var(undefined, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
        "activeBg": "var(--button-default-bgColor-active, var(--color-btn-active-bg, var(--control-bgColor-hover, var(--color-btn-hover-bg, hsla(220,14%,93%,1)))))",
        "activeBorder": "var(--button-default-borderColor-active, var(--color-btn-active-border, (theme) => `var(undefined, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
        "selectedBg": "var(--control-bgColor-active, var(--color-btn-selected-bg, var(--control-bgColor-hover, var(--color-btn-hover-bg, hsla(220,14%,94%,1)))))",
        "counterBg": "var(--buttonCounter-default-bgColor-rest, var(--color-btn-counter-bg, rgba(31,35,40,0.08)))",
        "primary": {
            "text": "var(undefined, var(--color-primary-text, #ffffff))",
            "bg": "var(undefined, var(--color-primary-bg, var(--control-borderColor-success, var(--color-success-emphasis, #1f883d))))",
            "border": "var(undefined, var(--color-primary-border, (theme) => `var(undefined, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
            "shadow": "var(undefined, var(--color-primary-shadow, 0 1px 0 rgba(31,35,40,0.1)))",
            "insetShadow": "var(undefined, var(--color-primary-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))",
            "hoverBg": "var(undefined, var(--color-primary-hover-bg, #1a7f37))",
            "hoverBorder": "var(undefined, var(--color-primary-hover-border, (theme) => `var(undefined, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
            "selectedBg": "var(undefined, var(--color-primary-selected-bg, var(undefined, var(--color-primary-hover-bg, hsla(137,66%,28%,1)))))",
            "selectedShadow": "var(undefined, var(--color-primary-selected-shadow, inset 0 1px 0 rgba(0,45,17,0.2)))",
            "disabledText": "var(undefined, var(--color-primary-disabled-text, rgba(255,255,255,0.8)))",
            "disabledBg": "var(undefined, var(--color-primary-disabled-bg, #94d3a2))",
            "disabledBorder": "var(undefined, var(--color-primary-disabled-border, (theme) => `var(undefined, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
            "icon": "var(undefined, var(--color-primary-icon, rgba(255,255,255,0.8)))",
            "counterBg": "var(undefined, var(--color-primary-counter-bg, rgba(0,45,17,0.2)))"
        },
        "outline": {
            "text": "var(undefined, var(--color-outline-text, #0969da))",
            "hoverText": "var(undefined, var(--color-outline-hover-text, #ffffff))",
            "hoverBg": "var(undefined, var(--color-outline-hover-bg, #0969da))",
            "hoverBorder": "var(undefined, var(--color-outline-hover-border, (theme) => `var(undefined, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
            "hoverShadow": "var(undefined, var(--color-outline-hover-shadow, 0 1px 0 rgba(31,35,40,0.1)))",
            "hoverInsetShadow": "var(undefined, var(--color-outline-hover-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))",
            "hoverCounterBg": "var(undefined, var(--color-outline-hover-counter-bg, rgba(255,255,255,0.2)))",
            "selectedText": "var(undefined, var(--color-outline-selected-text, #ffffff))",
            "selectedBg": "var(undefined, var(--color-outline-selected-bg, hsla(212,92%,42%,1)))",
            "selectedBorder": "var(undefined, var(--color-outline-selected-border, (theme) => `var(undefined, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
            "selectedShadow": "var(undefined, var(--color-outline-selected-shadow, inset 0 1px 0 rgba(0,33,85,0.2)))",
            "disabledText": "var(undefined, var(--color-outline-disabled-text, rgba(9,105,218,0.5)))",
            "disabledBg": "var(undefined, var(--color-outline-disabled-bg, #f6f8fa))",
            "disabledCounterBg": "var(undefined, var(--color-outline-disabled-counter-bg, rgba(9,105,218,0.05)))",
            "counterBg": "var(undefined, var(--color-outline-counter-bg, #0969da1a))",
            "counterFg": "var(undefined, var(--color-outline-counter-fg, #0550ae))",
            "hoverCounterFg": "var(undefined, var(--color-outline-hover-counter-fg, #ffffff))",
            "disabledCounterFg": "var(undefined, var(--color-outline-disabled-counter-fg, rgba(9,105,218,0.5)))"
        },
        "danger": {
            "text": "var(undefined, var(--color-danger-text, #cf222e))",
            "hoverText": "var(undefined, var(--color-danger-hover-text, #ffffff))",
            "hoverBg": "var(undefined, var(--color-danger-hover-bg, #a40e26))",
            "hoverBorder": "var(undefined, var(--color-danger-hover-border, (theme) => `var(undefined, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
            "hoverShadow": "var(undefined, var(--color-danger-hover-shadow, 0 1px 0 rgba(31,35,40,0.1)))",
            "hoverInsetShadow": "var(undefined, var(--color-danger-hover-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))",
            "hoverCounterBg": "var(undefined, var(--color-danger-hover-counter-bg, rgba(255,255,255,0.2)))",
            "selectedText": "var(undefined, var(--color-danger-selected-text, #ffffff))",
            "selectedBg": "var(undefined, var(--color-danger-selected-bg, hsla(356,72%,44%,1)))",
            "selectedBorder": "var(undefined, var(--color-danger-selected-border, (theme) => `var(undefined, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.black'), 0.15)(theme)}))`))",
            "selectedShadow": "var(undefined, var(--color-danger-selected-shadow, inset 0 1px 0 rgba(76,0,20,0.2)))",
            "disabledText": "var(undefined, var(--color-danger-disabled-text, rgba(207,34,46,0.5)))",
            "disabledBg": "var(undefined, var(--color-danger-disabled-bg, #f6f8fa))",
            "disabledCounterBg": "var(undefined, var(--color-danger-disabled-counter-bg, rgba(207,34,46,0.05)))",
            "counterBg": "var(undefined, var(--color-danger-counter-bg, rgba(207,34,46,0.1)))",
            "icon": "var(undefined, var(--color-danger-icon, #cf222e))",
            "hoverIcon": "var(undefined, var(--color-danger-hover-icon, #ffffff))",
            "counterFg": "var(undefined, var(--color-danger-counter-fg, #a40e26))",
            "hoverCounterFg": "var(undefined, var(--color-danger-hover-counter-fg, #ffffff))",
            "disabledCounterFg": "var(undefined, var(--color-danger-disabled-counter-fg, rgba(207,34,46,0.5)))"
        },
        "inactive": {
            "bg": "var(undefined, var(--color-inactive-bg, #eaeef2))",
            "text": "var(undefined, var(--color-inactive-text, #57606a))"
        }
    },
    "underlinenav": {
        "icon": "var(--underlineNav-iconColor-rest, var(--color-underlinenav-icon, (theme) => `var(--control-fgColor-placeholder, var(--color-fg-subtle, ${(0, utils_v1_1.get)('scale.gray.5')(theme)}))`))",
        "borderHover": "var(--underlineNav-borderColor-hover, var(--color-underlinenav-border-hover, (theme) => `var(--bgColor-disabled, var(--color-neutral-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.3'), 0.2)(theme)}))`))"
    },
    "actionListItem": {
        "inlineDivider": "var(undefined, var(--color-actionListItem-inline-divider, var(--borderColor-default, var(--color-border-default, rgba(208,215,222,0.48)))))",
        "default": {
            "hoverBg": "var(undefined, var(--color-default-hover-bg, rgba(208,215,222,0.32)))",
            "hoverBorder": "var(undefined, var(--color-default-hover-border, transparent))",
            "activeBg": "var(undefined, var(--color-default-active-bg, rgba(208,215,222,0.48)))",
            "activeBorder": "var(undefined, var(--color-default-active-border, transparent))",
            "selectedBg": "var(undefined, var(--color-default-selected-bg, rgba(208,215,222,0.24)))"
        },
        "danger": {
            "hoverBg": "var(undefined, var(--color-danger-hover-bg, var(--bgColor-danger-muted, var(--color-danger-subtle, rgba(255,235,233,0.64)))))",
            "activeBg": "var(undefined, var(--color-danger-active-bg, (theme) => `var(--bgColor-danger-muted, var(--color-danger-subtle, ${(0, utils_v1_1.get)('scale.red.0')(theme)}))`))",
            "hoverText": "var(undefined, var(--color-danger-hover-text, var(--control-danger-fgColor-rest, var(--color-danger-fg, #d1242f))))"
        }
    },
    "switchTrack": {
        "bg": "var(undefined, var(--color-switchTrack-bg, #eaeef2))",
        "hoverBg": "var(undefined, var(--color-switchTrack-hover-bg, hsla(210,24%,90%,1)))",
        "activeBg": "var(undefined, var(--color-switchTrack-active-bg, hsla(210,24%,88%,1)))",
        "disabledBg": "var(undefined, var(--color-switchTrack-disabled-bg, #8c959f))",
        "fg": "var(undefined, var(--color-switchTrack-fg, var(--control-iconColor-rest, var(--color-fg-muted, #656d76))))",
        "disabledFg": "var(undefined, var(--color-switchTrack-disabled-fg, (theme) => `var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
        "border": "var(undefined, var(--color-switchTrack-border, transparent))",
        "checked": {
            "bg": "var(undefined, var(--color-checked-bg, (theme) => `var(--bgColor-accent-emphasis, var(--color-accent-emphasis, ${(0, utils_v1_1.get)('scale.blue.5')(theme)}))`))",
            "hoverBg": "var(undefined, var(--color-checked-hover-bg, #0860CA))",
            "activeBg": "var(undefined, var(--color-checked-active-bg, #0757BA))",
            "fg": "var(undefined, var(--color-checked-fg, (theme) => `var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
            "disabledFg": "var(undefined, var(--color-checked-disabled-fg, (theme) => `var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
            "border": "var(undefined, var(--color-checked-border, transparent))"
        }
    },
    "switchKnob": {
        "bg": "var(undefined, var(--color-switchKnob-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
        "disabledBg": "var(undefined, var(--color-switchKnob-disabled-bg, (theme) => `var(--bgColor-muted, var(--color-canvas-subtle, ${(0, utils_v1_1.get)('scale.gray.0')(theme)}))`))",
        "border": "var(undefined, var(--color-switchKnob-border, #858F99))",
        "checked": {
            "bg": "var(undefined, var(--color-checked-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
            "disabledBg": "var(undefined, var(--color-checked-disabled-bg, (theme) => `var(--bgColor-muted, var(--color-canvas-subtle, ${(0, utils_v1_1.get)('scale.gray.0')(theme)}))`))",
            "border": "var(undefined, var(--color-checked-border, (theme) => `var(--bgColor-accent-emphasis, var(--color-accent-emphasis, ${(0, utils_v1_1.get)('scale.blue.5')(theme)}))`))"
        }
    },
    "segmentedControl": {
        "bg": "var(undefined, var(--color-segmentedControl-bg, #eaeef2))",
        "button": {
            "bg": "var(undefined, var(--color-button-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
            "hover": {
                "bg": "var(undefined, var(--color-hover-bg, rgba(175,184,193,0.2)))"
            },
            "active": {
                "bg": "var(undefined, var(--color-active-bg, rgba(175,184,193,0.4)))"
            },
            "selected": {
                "border": "var(undefined, var(--color-selected-border, #8c959f))"
            }
        }
    },
    "treeViewItem": {
        "chevron": {
            "hoverBg": "var(undefined, var(--color-chevron-hover-bg, rgba(208,215,222,0.32)))"
        },
        "directory": {
            "fill": "var(undefined, var(--color-directory-fill, #54aeff))"
        }
    },
    "fg": {
        "default": "var(--control-fgColor-rest, var(--color-fg-default, #1F2328))",
        "muted": "var(--control-iconColor-rest, var(--color-fg-muted, #656d76))",
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
        "subtle": "var(undefined, var(--color-border-subtle, rgba(31,35,40,0.15)))"
    },
    "shadow": {
        "small": "var(--shadow-resting-small, var(--color-shadow-small, 0 1px 0 rgba(31,35,40,0.04)))",
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
        "fg": "var(--fgColor-success, var(--color-success-fg, #1a7f37))",
        "emphasis": "var(--control-borderColor-success, var(--color-success-emphasis, #1f883d))",
        "muted": "var(--borderColor-success-muted, var(--color-success-muted, rgba(74,194,107,0.4)))",
        "subtle": "var(--bgColor-success-muted, var(--color-success-subtle, #dafbe1))"
    },
    "attention": {
        "fg": "var(--fgColor-attention, var(--color-attention-fg, #9a6700))",
        "emphasis": "var(--control-borderColor-warning, var(--color-attention-emphasis, #9a6700))",
        "muted": "var(--borderColor-attention-muted, var(--color-attention-muted, rgba(212,167,44,0.4)))",
        "subtle": "var(--bgColor-attention-muted, var(--color-attention-subtle, #fff8c5))"
    },
    "severe": {
        "fg": "var(--fgColor-severe, var(--color-severe-fg, #bc4c00))",
        "emphasis": "var(--bgColor-severe-emphasis, var(--color-severe-emphasis, #bc4c00))",
        "muted": "var(--borderColor-severe-muted, var(--color-severe-muted, rgba(251,143,68,0.4)))",
        "subtle": "var(--bgColor-severe-muted, var(--color-severe-subtle, #fff1e5))"
    },
    "danger": {
        "fg": "var(--control-danger-fgColor-rest, var(--color-danger-fg, #d1242f))",
        "emphasis": "var(--control-borderColor-danger, var(--color-danger-emphasis, #cf222e))",
        "muted": "var(--borderColor-danger-muted, var(--color-danger-muted, rgba(255,129,130,0.4)))",
        "subtle": "var(--bgColor-danger-muted, var(--color-danger-subtle, #ffebe9))"
    },
    "open": {
        "fg": "var(--fgColor-open, var(--color-open-fg, #1a7f37))",
        "emphasis": "var(--bgColor-open-emphasis, var(--color-open-emphasis, var(--control-borderColor-success, var(--color-success-emphasis, #1f883d))))",
        "muted": "var(--borderColor-open-muted, var(--color-open-muted, rgba(74,194,107,0.4)))",
        "subtle": "var(--bgColor-open-muted, var(--color-open-subtle, #dafbe1))"
    },
    "closed": {
        "fg": "var(--fgColor-closed, var(--color-closed-fg, var(--control-danger-fgColor-rest, var(--color-danger-fg, #d1242f))))",
        "emphasis": "var(--bgColor-closed-emphasis, var(--color-closed-emphasis, #cf222e))",
        "muted": "var(--borderColor-closed-muted, var(--color-closed-muted, rgba(255,129,130,0.4)))",
        "subtle": "var(--bgColor-closed-muted, var(--color-closed-subtle, #ffebe9))"
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
            "backdrop": "var(undefined, var(--color-canvas-backdrop, rgba(31,35,40,0.5)))",
            "sticky": "var(undefined, var(--color-canvas-sticky, rgba(255,255,255,0.95)))"
        },
        "border": {
            "active": "var(undefined, var(--color-border-active, #fd8c73))",
            "contrast": "var(undefined, var(--color-border-contrast, rgba(31,35,40,0.1)))"
        },
        "shadow": {
            "highlight": "var(undefined, var(--color-shadow-highlight, inset 0 1px 0 rgba(255,255,255,0.25)))",
            "inset": "var(undefined, var(--color-shadow-inset, inset 0 1px 0 rgba(208,215,222,0.2)))"
        }
    },
    "scale": {
        "black": "#1F2328",
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
            "#dafbe1",
            "#aceebb",
            "#6fdd8b",
            "#4ac26b",
            "#2da44e",
            "#1a7f37",
            "#116329",
            "#044f1e",
            "#003d16",
            "#002d11"
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
            "#fff1e5",
            "#ffd8b5",
            "#ffb77c",
            "#fb8f44",
            "#e16f24",
            "#bc4c00",
            "#953800",
            "#762c00",
            "#5c2200",
            "#471700"
        ],
        "red": [
            "#ffebe9",
            "#ffcecb",
            "#ffaba8",
            "#ff8182",
            "#fa4549",
            "#cf222e",
            "#a40e26",
            "#82071e",
            "#660018",
            "#4c0014"
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
