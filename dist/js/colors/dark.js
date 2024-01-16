"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "canvasDefaultTransparent": "var(--bgColor-transparent, var(--color-canvas-default-transparent, rgba(13,17,23,0)))",
    "pageHeaderBg": "var(--page-header-bgColor, var(--color-page-header-bg, #0d1117))",
    "marketingIcon": {
        "primary": "var(--color-marketing-icon-primary, #79c0ff)",
        "secondary": "var(--color-marketing-icon-secondary, #1f6feb)"
    },
    "diffBlob": {
        "addition": {
            "numText": "var(--diffBlob-addition-fgColor-num, var(--color-diff-blob-addition-num-text, #e6edf3))",
            "fg": "var(--diffBlob-addition-fgColor-text, var(--color-diff-blob-addition-fg, #e6edf3))",
            "numBg": "var(--diffBlob-addition-bgColor-num, var(--color-diff-blob-addition-num-bg, rgba(63,185,80,0.3)))",
            "lineBg": "var(--diffBlob-addition-bgColor-line, var(--color-diff-blob-addition-line-bg, rgba(46,160,67,0.15)))",
            "wordBg": "var(--diffBlob-addition-bgColor-word, var(--color-diff-blob-addition-word-bg, rgba(46,160,67,0.4)))"
        },
        "deletion": {
            "numText": "var(--diffBlob-deletion-fgColor-num, var(--color-diff-blob-deletion-num-text, #e6edf3))",
            "fg": "var(--diffBlob-deletion-fgColor-text, var(--color-diff-blob-deletion-fg, #e6edf3))",
            "numBg": "var(--diffBlob-deletion-bgColor-num, var(--color-diff-blob-deletion-num-bg, rgba(248,81,73,0.3)))",
            "lineBg": "var(--diffBlob-deletion-bgColor-line, var(--color-diff-blob-deletion-line-bg, rgba(248,81,73,0.1)))",
            "wordBg": "var(--diffBlob-deletion-bgColor-word, var(--color-diff-blob-deletion-word-bg, rgba(248,81,73,0.4)))"
        },
        "hunk": {
            "numBg": "var(--diffBlob-hunk-bgColor-num, var(--color-diff-blob-hunk-num-bg, rgba(56,139,253,0.4)))"
        },
        "expander": {
            "icon": "var(--diffBlob-expander-iconColor, var(--color-diff-blob-expander-icon, #848d97))"
        },
        "selectedLineHighlightMixBlendMode": "var(--color-diff-blob-selected-line-highlight-mix-blend-mode, screen)"
    },
    "diffstat": {
        "deletionBorder": "var(--color-diffstat-deletion-border, rgba(240,246,252,0.1))",
        "additionBorder": "var(--color-diffstat-addition-border, rgba(240,246,252,0.1))",
        "additionBg": "var(--diffStat-addition-bgColor, var(--color-diffstat-addition-bg, #3fb950))"
    },
    "searchKeyword": {
        "hl": "var(--highlight-neutral-bgColor, var(--color-search-keyword-hl, rgba(210,153,34,0.4)))"
    },
    "prettylights": {
        "syntax": {
            "comment": "var(--color-prettylights-syntax-comment, #8b949e)",
            "constant": "var(--color-prettylights-syntax-constant, #79c0ff)",
            "entity": "var(--color-prettylights-syntax-entity, #d2a8ff)",
            "storageModifierImport": "var(--color-prettylights-syntax-storage-modifier-import, #c9d1d9)",
            "entityTag": "var(--color-prettylights-syntax-entity-tag, #7ee787)",
            "keyword": "var(--color-prettylights-syntax-keyword, #ff7b72)",
            "string": "var(--color-prettylights-syntax-string, #a5d6ff)",
            "variable": "var(--color-prettylights-syntax-variable, #ffa657)",
            "brackethighlighterUnmatched": "var(--color-prettylights-syntax-brackethighlighter-unmatched, #f85149)",
            "invalidIllegalText": "var(--color-prettylights-syntax-invalid-illegal-text, #f0f6fc)",
            "invalidIllegalBg": "var(--color-prettylights-syntax-invalid-illegal-bg, #8e1519)",
            "carriageReturnText": "var(--color-prettylights-syntax-carriage-return-text, #f0f6fc)",
            "carriageReturnBg": "var(--color-prettylights-syntax-carriage-return-bg, #b62324)",
            "stringRegexp": "var(--color-prettylights-syntax-string-regexp, #7ee787)",
            "markupList": "var(--color-prettylights-syntax-markup-list, #f2cc60)",
            "markupHeading": "var(--color-prettylights-syntax-markup-heading, #1f6feb)",
            "markupItalic": "var(--color-prettylights-syntax-markup-italic, #c9d1d9)",
            "markupBold": "var(--color-prettylights-syntax-markup-bold, #c9d1d9)",
            "markupDeletedText": "var(--color-prettylights-syntax-markup-deleted-text, #ffdcd7)",
            "markupDeletedBg": "var(--color-prettylights-syntax-markup-deleted-bg, #67060c)",
            "markupInsertedText": "var(--color-prettylights-syntax-markup-inserted-text, #aff5b4)",
            "markupInsertedBg": "var(--color-prettylights-syntax-markup-inserted-bg, #033a16)",
            "markupChangedText": "var(--color-prettylights-syntax-markup-changed-text, #ffdfb6)",
            "markupChangedBg": "var(--color-prettylights-syntax-markup-changed-bg, #5a1e02)",
            "markupIgnoredText": "var(--color-prettylights-syntax-markup-ignored-text, #c9d1d9)",
            "markupIgnoredBg": "var(--color-prettylights-syntax-markup-ignored-bg, #1158c7)",
            "metaDiffRange": "var(--color-prettylights-syntax-meta-diff-range, #d2a8ff)",
            "brackethighlighterAngle": "var(--color-prettylights-syntax-brackethighlighter-angle, #8b949e)",
            "sublimelinterGutterMark": "var(--color-prettylights-syntax-sublimelinter-gutter-mark, #484f58)",
            "constantOtherReferenceLink": "var(--color-prettylights-syntax-constant-other-reference-link, #a5d6ff)"
        }
    },
    "codemirror": {
        "text": "var(--codeMirror-fgColor, var(--color-codemirror-text, #e6edf3))",
        "bg": "var(--codeMirror-bgColor, var(--color-codemirror-bg, #0d1117))",
        "guttersBg": "var(--codeMirror-gutters-bgColor, var(--color-codemirror-gutters-bg, #0d1117))",
        "guttermarkerText": "var(--codeMirror-gutterMarker-fgColor-default, var(--color-codemirror-guttermarker-text, #0d1117))",
        "guttermarkerSubtleText": "var(--codeMirror-gutterMarker-fgColor-muted, var(--color-codemirror-guttermarker-subtle-text, #6e7681))",
        "linenumberText": "var(--codeMirror-lineNumber-fgColor, var(--color-codemirror-linenumber-text, #848d97))",
        "cursor": "var(--codeMirror-cursor-fgColor, var(--color-codemirror-cursor, #e6edf3))",
        "selectionBg": "var(--codeMirror-selection-bgColor, var(--color-codemirror-selection-bg, rgba(56,139,253,0.4)))",
        "activelineBg": "var(--codeMirror-activeline-bgColor, var(--color-codemirror-activeline-bg, rgba(110,118,129,0.1)))",
        "matchingbracketText": "var(--codeMirror-matchingBracket-fgColor, var(--color-codemirror-matchingbracket-text, #e6edf3))",
        "linesBg": "var(--codeMirror-lines-bgColor, var(--color-codemirror-lines-bg, #0d1117))",
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
        "bg": "var(--color-checks-bg, #010409)",
        "runBorderWidth": "var(--color-checks-run-border-width, 1px)",
        "containerBorderWidth": "var(--color-checks-container-border-width, 1px)",
        "textPrimary": "var(--color-checks-text-primary, #e6edf3)",
        "textSecondary": "var(--color-checks-text-secondary, #848d97)",
        "textLink": "var(--color-checks-text-link, #2f81f7)",
        "btnIcon": "var(--color-checks-btn-icon, #848d97)",
        "btnHoverIcon": "var(--color-checks-btn-hover-icon, #e6edf3)",
        "btnHoverBg": "var(--color-checks-btn-hover-bg, rgba(110,118,129,0.1))",
        "inputText": "var(--color-checks-input-text, #848d97)",
        "inputPlaceholderText": "var(--color-checks-input-placeholder-text, #6e7681)",
        "inputFocusText": "var(--color-checks-input-focus-text, #e6edf3)",
        "inputBg": "var(--color-checks-input-bg, #161b22)",
        "inputShadow": "var(--color-checks-input-shadow, 0 0 0 1px #30363d)",
        "donutError": "var(--color-checks-donut-error, #f85149)",
        "donutPending": "var(--color-checks-donut-pending, #d29922)",
        "donutSuccess": "var(--color-checks-donut-success, #2ea043)",
        "donutNeutral": "var(--color-checks-donut-neutral, #8b949e)",
        "dropdownText": "var(--color-checks-dropdown-text, #e6edf3)",
        "dropdownBg": "var(--color-checks-dropdown-bg, #161b22)",
        "dropdownBorder": "var(--color-checks-dropdown-border, #30363d)",
        "dropdownShadow": "var(--color-checks-dropdown-shadow, rgba(1,4,9,0.3))",
        "dropdownHoverText": "var(--color-checks-dropdown-hover-text, #e6edf3)",
        "dropdownHoverBg": "var(--color-checks-dropdown-hover-bg, rgba(110,118,129,0.1))",
        "dropdownBtnHoverText": "var(--color-checks-dropdown-btn-hover-text, #e6edf3)",
        "dropdownBtnHoverBg": "var(--color-checks-dropdown-btn-hover-bg, rgba(110,118,129,0.1))",
        "scrollbarThumbBg": "var(--color-checks-scrollbar-thumb-bg, rgba(110,118,129,0.4))",
        "headerLabelText": "var(--color-checks-header-label-text, #848d97)",
        "headerLabelOpenText": "var(--color-checks-header-label-open-text, #e6edf3)",
        "headerBorder": "var(--color-checks-header-border, #21262d)",
        "headerIcon": "var(--color-checks-header-icon, #848d97)",
        "lineText": "var(--color-checks-line-text, #848d97)",
        "lineNumText": "var(--color-checks-line-num-text, #6e7681)",
        "lineTimestampText": "var(--color-checks-line-timestamp-text, #6e7681)",
        "lineHoverBg": "var(--color-checks-line-hover-bg, rgba(110,118,129,0.1))",
        "lineSelectedBg": "var(--color-checks-line-selected-bg, rgba(56,139,253,0.1))",
        "lineSelectedNumText": "var(--color-checks-line-selected-num-text, #2f81f7)",
        "lineDtFmText": "var(--color-checks-line-dt-fm-text, #ffffff)",
        "lineDtFmBg": "var(--color-checks-line-dt-fm-bg, #9e6a03)",
        "gateBg": "var(--color-checks-gate-bg, rgba(187,128,9,0.15))",
        "gateText": "var(--color-checks-gate-text, #848d97)))",
        "gateWaitingText": "var(--color-checks-gate-waiting-text, #d29922)",
        "stepHeaderOpenBg": "var(--color-checks-step-header-open-bg, #161b22)",
        "stepErrorText": "var(--color-checks-step-error-text, #f85149)",
        "stepWarningText": "var(--color-checks-step-warning-text, #d29922)",
        "loglineText": "var(--color-checks-logline-text, #848d97)",
        "loglineNumText": "var(--color-checks-logline-num-text, #6e7681)",
        "loglineDebugText": "var(--color-checks-logline-debug-text, #a371f7)",
        "loglineErrorText": "var(--color-checks-logline-error-text, #848d97)",
        "loglineErrorNumText": "var(--color-checks-logline-error-num-text, #6e7681)",
        "loglineErrorBg": "var(--color-checks-logline-error-bg, rgba(248,81,73,0.1))",
        "loglineWarningText": "var(--color-checks-logline-warning-text, #848d97)",
        "loglineWarningNumText": "var(--color-checks-logline-warning-num-text, #d29922)",
        "loglineWarningBg": "var(--color-checks-logline-warning-bg, rgba(187,128,9,0.15))",
        "loglineCommandText": "var(--color-checks-logline-command-text, #2f81f7)",
        "loglineSectionText": "var(--color-checks-logline-section-text, #3fb950)",
        "ansi": {
            "black": "var(--color-checks-ansi-black, #0d1117)",
            "blackBright": "var(--color-checks-ansi-black-bright, #161b22)",
            "white": "var(--color-checks-ansi-white, #b1bac4))",
            "whiteBright": "var(--color-checks-ansi-white-bright, #b1bac4)",
            "gray": "var(--color-checks-ansi-gray, #6e7681)",
            "red": "var(--color-checks-ansi-red, #ff7b72)",
            "redBright": "var(--color-checks-ansi-red-bright, #ffa198)",
            "green": "var(--color-checks-ansi-green, #3fb950)",
            "greenBright": "var(--color-checks-ansi-green-bright, #56d364)",
            "yellow": "var(--color-checks-ansi-yellow, #d29922)",
            "yellowBright": "var(--color-checks-ansi-yellow-bright, #e3b341)",
            "blue": "var(--color-checks-ansi-blue, #58a6ff)",
            "blueBright": "var(--color-checks-ansi-blue-bright, #79c0ff)",
            "magenta": "var(--color-checks-ansi-magenta, #bc8cff)",
            "magentaBright": "var(--color-checks-ansi-magenta-bright, #d2a8ff)",
            "cyan": "var(--color-checks-ansi-cyan, #76e3ea)",
            "cyanBright": "var(--color-checks-ansi-cyan-bright, #b3f0ff)"
        }
    },
    "project": {
        "headerBg": "var(--color-project-header-bg, #0d1117)",
        "sidebarBg": "var(--color-project-sidebar-bg, #161b22)",
        "gradientIn": "var(--color-project-gradient-in, #161b22)",
        "gradientOut": "var(--color-project-gradient-out, rgba(22,27,34,0))"
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
            "emphasis": "var(--color-control-border-color-emphasis, #606771)"
        }
    },
    "avatar": {
        "bg": "var(--avatar-bgColor, var(--color-avatar-bg, rgba(255,255,255,0.1)))",
        "border": "var(--avatar-borderColor, var(--color-avatar-border, rgba(240,246,252,0.1)))",
        "stackFade": "var(--avatarStack-fade-bgColor-default, var(--color-avatar-stack-fade, #30363d))",
        "stackFadeMore": "var(--avatarStack-fade-bgColor-muted, var(--color-avatar-stack-fade-more, #21262d))",
        "childShadow": "var(--avatar-shadow, var(--color-avatar-child-shadow, 0 0 0 2px #0d1117))"
    },
    "topicTag": {
        "border": "var(--topicTag-borderColor, var(--color-topic-tag-border, transparent))"
    },
    "counter": {
        "border": "var(--counter-borderColor, var(--color-counter-border, transparent))"
    },
    "selectMenu": {
        "backdropBorder": "var(--selectMenu-borderColor, var(--color-select-menu-backdrop-border, #484f58))",
        "tapHighlight": "var(--control-bgColor-active, var(--color-select-menu-tap-highlight, rgba(48,54,61,0.5)))",
        "tapFocusBg": "var(--selectMenu-bgColor-active, var(--color-select-menu-tap-focus-bg, #0c2d6b))"
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
        "bg": "var(--headerSearch-bgColor, var(--color-header-search-bg, #0d1117))",
        "border": "var(--headerSearch-borderColor, var(--color-header-search-border, #30363d))"
    },
    "sidenav": {
        "selectedBg": "var(--sideNav-bgColor-selected, var(--color-sidenav-selected-bg, #21262d))"
    },
    "menu": {
        "bgActive": "var(--menu-bgColor-active, var(--color-menu-bg-active, #161b22))"
    },
    "input": {
        "disabledBg": "var(--control-bgColor-disabled, var(--color-input-disabled-bg, rgba(110,118,129,0)))"
    },
    "timeline": {
        "badgeBg": "var(--timelineBadge-bgColor, var(--color-timeline-badge-bg, #21262d))"
    },
    "ansi": {
        "black": "var(--color-ansi-black, #484f58)",
        "blackBright": "var(--color-ansi-black-bright, #6e7681)",
        "white": "var(--color-ansi-white, #b1bac4)",
        "whiteBright": "var(--color-ansi-white-bright, #ffffff)",
        "gray": "var(--color-ansi-gray, #6e7681)",
        "red": "var(--color-ansi-red, #ff7b72)",
        "redBright": "var(--color-ansi-red-bright, #ffa198)",
        "green": "var(--color-ansi-green, #3fb950)",
        "greenBright": "var(--color-ansi-green-bright, #56d364)",
        "yellow": "var(--color-ansi-yellow, #d29922)",
        "yellowBright": "var(--color-ansi-yellow-bright, #e3b341)",
        "blue": "var(--color-ansi-blue, #58a6ff)",
        "blueBright": "var(--color-ansi-blue-bright, #79c0ff)",
        "magenta": "var(--color-ansi-magenta, #bc8cff)",
        "magentaBright": "var(--color-ansi-magenta-bright, #d2a8ff)",
        "cyan": "var(--color-ansi-cyan, #39c5cf)",
        "cyanBright": "var(--color-ansi-cyan-bright, #56d4dd)"
    },
    "btn": {
        "text": "var(--button-default-fgColor-rest, var(--color-btn-text, #c9d1d9))",
        "bg": "var(--button-default-bgColor-rest, var(--color-btn-bg, #21262d))",
        "border": "var(--button-default-borderColor-rest, var(--color-btn-border, rgba(240,246,252,0.1)))",
        "shadow": "var(--button-default-shadow-resting, var(--color-btn-shadow, 0 0 transparent))",
        "insetShadow": "var(--button-default-shadow-inset, var(--color-btn-inset-shadow, 0 0 transparent))",
        "hoverBg": "var(--button-default-bgColor-hover, var(--color-btn-hover-bg, #30363d))",
        "hoverBorder": "var(--button-default-borderColor-hover, var(--color-btn-hover-border, #8b949e))",
        "activeBg": "var(--button-default-bgColor-active, var(--color-btn-active-bg, hsla(212,12%,18%,1)))",
        "activeBorder": "var(--button-default-borderColor-active, var(--color-btn-active-border, #6e7681))",
        "selectedBg": "var(--button-default-bgColor-selected, var(--color-btn-selected-bg, #161b22))",
        "counterBg": "var(--buttonCounter-default-bgColor-rest, var(--color-btn-counter-bg, #30363d))",
        "primary": {
            "text": "var(--button-primary-fgColor-rest, var(--color-btn-primary-text, #ffffff))",
            "bg": "var(--button-primary-bgColor-rest, var(--color-btn-primary-bg, #238636))",
            "border": "var(--button-primary-borderColor-rest, var(--color-btn-primary-border, rgba(240,246,252,0.1)))",
            "shadow": "var(--shadow-resting-small, var(--color-btn-primary-shadow, 0 0 transparent))",
            "insetShadow": "var(--shadow-highlight, var(--color-btn-primary-inset-shadow, 0 0 transparent))",
            "hoverBg": "var(--button-primary-bgColor-hover, var(--color-btn-primary-hover-bg, #2ea043))",
            "hoverBorder": "var(--button-primary-borderColor-hover, var(--color-btn-primary-hover-border, rgba(240,246,252,0.1)))",
            "selectedBg": "var(--button-primary-bgColor-active, var(--color-btn-primary-selected-bg, #238636))",
            "selectedShadow": "var(--button-primary-shadow-selected, var(--color-btn-primary-selected-shadow, 0 0 transparent))",
            "disabledText": "var(--button-primary-fgColor-disabled, var(--color-btn-primary-disabled-text, rgba(255,255,255,0.5)))",
            "disabledBg": "var(--button-primary-bgColor-disabled, var(--color-btn-primary-disabled-bg, rgba(35,134,54,0.6)))",
            "disabledBorder": "var(--button-primary-borderColor-disabled, var(--color-btn-primary-disabled-border, rgba(240,246,252,0.1)))",
            "icon": "var(--button-primary-iconColor-rest, var(--color-btn-primary-icon, #ffffff))",
            "counterBg": "var(--buttonCounter-primary-bgColor-rest, var(--color-btn-primary-counter-bg, rgba(4,38,15,0.2)))"
        },
        "outline": {
            "text": "var(--button-outline-fgColor-rest, var(--color-btn-outline-text, #388bfd))",
            "hoverText": "var(--button-outline-fgColor-hover, var(--color-btn-outline-hover-text, #58a6ff))",
            "hoverBg": "var(--button-outline-bgColor-hover, var(--color-btn-outline-hover-bg, #30363d))",
            "hoverBorder": "var(--button-outline-borderColor-hover, var(--color-btn-outline-hover-border, rgba(240,246,252,0.1)))",
            "hoverShadow": "var(--shadow-resting-small, var(--color-btn-outline-hover-shadow, 0 1px 0 rgba(1,4,9,0.1)))",
            "hoverInsetShadow": "var(--shadow-highlight, var(--color-btn-outline-hover-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))",
            "hoverCounterBg": "var(--buttonCounter-outline-bgColor-hover, var(--color-btn-outline-hover-counter-bg, rgba(5,29,77,0.2)))",
            "selectedText": "var(--button-outline-fgColor-active, var(--color-btn-outline-selected-text, #ffffff))",
            "selectedBg": "var(--button-outline-bgColor-active, var(--color-btn-outline-selected-bg, #0d419d))",
            "selectedBorder": "var(--button-outline-borderColor-active, var(--color-btn-outline-selected-border, rgba(240,246,252,0.1)))",
            "selectedShadow": "var(--button-outline-shadow-selected, var(--color-btn-outline-selected-shadow, 0 0 transparent))",
            "disabledText": "var(--button-outline-fgColor-disabled, var(--color-btn-outline-disabled-text, rgba(88,166,255,0.5)))",
            "disabledBg": "var(--button-outline-bgColor-disabled, var(--color-btn-outline-disabled-bg, #0d1117))",
            "disabledCounterBg": "var(--buttonCounter-outline-bgColor-disabled, var(--color-btn-outline-disabled-counter-bg, rgba(31,111,235,0.05)))",
            "counterBg": "var(--buttonCounter-outline-bgColor-rest, var(--color-btn-outline-counter-bg, rgba(5,29,77,0.2)))",
            "hoverCounterFg": "var(--buttonCounter-outline-fgColor-hover, var(--color-btn-outline-hover-counter-fg, #58a6ff))",
            "disabledCounterFg": "var(--buttonCounter-outline-fgColor-disabled, var(--color-btn-outline-disabled-counter-fg, rgba(47,129,247,0.5)))",
            "counterFg": "var(--buttonCounter-outline-fgColor-rest, var(--color-btn-outline-counter-fg, #388bfd))"
        },
        "danger": {
            "text": "var(--button-danger-fgColor-rest, var(--color-btn-danger-text, #f85149))",
            "hoverText": "var(--button-danger-fgColor-hover, var(--color-btn-danger-hover-text, #ffffff))",
            "hoverBg": "var(--button-danger-bgColor-hover, var(--color-btn-danger-hover-bg, #da3633))",
            "hoverBorder": "var(--button-danger-borderColor-hover, var(--color-btn-danger-hover-border, #f85149))",
            "hoverShadow": "var(--shadow-resting-small, var(--color-btn-danger-hover-shadow, 0 0 transparent))",
            "hoverInsetShadow": "var(--shadow-highlight, var(--color-btn-danger-hover-inset-shadow, 0 0 transparent))",
            "hoverIcon": "var(--button-danger-iconColor-hover, var(--color-btn-danger-hover-icon, #ffffff))",
            "hoverCounterBg": "var(--buttonCounter-danger-bgColor-hover, var(--color-btn-danger-hover-counter-bg, rgba(255,255,255,0.2)))",
            "selectedText": "var(--button-danger-fgColor-active, var(--color-btn-danger-selected-text, #ffffff))",
            "selectedBg": "var(--button-danger-bgColor-active, var(--color-btn-danger-selected-bg, #b62324))",
            "selectedBorder": "var(--button-danger-borderColor-active, var(--color-btn-danger-selected-border, #ff7b72))",
            "selectedShadow": "var(--button-danger-shadow-selected, var(--color-btn-danger-selected-shadow, 0 0 transparent))",
            "disabledText": "var(--button-danger-fgColor-disabled, var(--color-btn-danger-disabled-text, rgba(248,81,73,0.5)))",
            "disabledBg": "var(--button-danger-bgColor-disabled, var(--color-btn-danger-disabled-bg, #0d1117))",
            "disabledCounterBg": "var(--buttonCounter-danger-bgColor-disabled, var(--color-btn-danger-disabled-counter-bg, rgba(218,54,51,0.05)))",
            "counterBg": "var(--buttonCounter-danger-bgColor-rest, var(--color-btn-danger-counter-bg, rgba(73,2,2,0.2)))",
            "icon": "var(--button-danger-iconColor-rest, var(--color-btn-danger-icon, #f85149))",
            "counterFg": "var(--buttonCounter-danger-fgColor-rest, var(--color-btn-danger-counter-fg, #f85149))",
            "disabledCounterFg": "var(--buttonCounter-danger-fgColor-disabled, var(--color-btn-danger-disabled-counter-fg, rgba(248,81,73,0.5)))",
            "hoverCounterFg": "var(--buttonCounter-danger-fgColor-hover, var(--color-btn-danger-hover-counter-fg, #ffffff))"
        },
        "inactive": {
            "bg": "var(--button-inactive-bgColor-rest, var(--color-btn-inactive-bg, #21262d))",
            "text": "var(--button-inactive-fgColor-rest, var(--color-btn-inactive-text, #8b949e))"
        }
    },
    "underlinenav": {
        "icon": "var(--underlineNav-iconColor-rest, var(--color-underlinenav-icon, #6e7681))",
        "borderHover": "var(--underlineNav-borderColor-hover, var(--color-underlinenav-border-hover, rgba(110,118,129,0.4)))"
    },
    "actionListItem": {
        "inlineDivider": "var(--borderColor-muted, var(--color-action-list-item-inline-divider, vrgba(48,54,61,0.48)))",
        "default": {
            "hoverBg": "var(--control-transparent-bgColor-hover, var(--color-action-list-item-default-hover-bg, rgba(177,186,196,0.12)))",
            "hoverBorder": "var(--control-transparent-borderColor-hover, var(--color-action-list-item-default-hover-border, transparent))",
            "activeBg": "var(--control-transparent-bgColor-active, var(--color-action-list-item-default-active-bg, rgba(177,186,196,0.2)))",
            "activeBorder": "var(--control-transparent-borderColor-active, var(--color-action-list-item-default-active-border, transparent))",
            "selectedBg": "var(--control-transparent-bgColor-selected, var(--color-action-list-item-default-selected-bg, rgba(177,186,196,0.08)))"
        },
        "danger": {
            "hoverBg": "var(--control-danger-bgColor-hover, var(--color-action-list-item-danger-hover-bg, rgba(248,81,73,0.16)))",
            "activeBg": "var(--control-danger-bgColor-active, var(--color-action-list-item-danger-active-bg, rgba(248,81,73,0.24)))",
            "hoverText": "var(--control-danger-fgColor-hover, var(--color-action-list-item-danger-hover-text, #ff7b72))"
        }
    },
    "switchTrack": {
        "bg": "var(--controlTrack-bgColor-rest, var(--color-switch-track-bg, rgba(110,118,129,0.1)))",
        "hoverBg": "var(--controlTrack-bgColor-hover, var(--color-switch-track-hover-bg, hsla(215,8%,72%,0.1)))",
        "activeBg": "var(--controlTrack-bgColor-active, var(--color-switch-track-active-bg, rgba(110,118,129,0.4)))",
        "disabledBg": "var(--controlTrack-bgColor-disabled, var(--color-switch-track-disabled-bg, #21262d))",
        "fg": "var(--controlTrack-fgColor-rest, var(--color-switch-track-fg, #848d97))",
        "disabledFg": "var(--controlTrack-fgColor-disabled, var(--color-switch-track-disabled-fg, #010409))",
        "border": "var(--controlTrack-borderColor-rest, var(--color-switch-track-border, transparent))",
        "checked": {
            "bg": "var(--control-checked-bgColor-rest, var(--color-switch-track-checked-bg, rgba(31,111,235,0.35)))",
            "hoverBg": "var(--control-checked-bgColor-hover, var(--color-switch-track-checked-hover-bg, rgba(31,111,235,0.5)))",
            "activeBg": "var(--control-checked-bgColor-active, var(--color-switch-track-checked-active-bg, rgba(31,111,235,0.65)))",
            "fg": "var(--control-checked-fgColor-rest, var(--color-switch-track-checked-fg, #ffffff))",
            "disabledFg": "var(--control-checked-fgColor-disabled, var(--color-switch-track-checked-disabled-fg, #010409))",
            "border": "var(--borderColor-transparent, var(--color-switch-track-checked-border, transparent))"
        }
    },
    "switchKnob": {
        "bg": "var(--controlKnob-bgColor-rest, var(--color-switch-knob-bg, #0d1117))",
        "border": "var(--controlKnob-borderColor-rest, var(--color-switch-knob-border, #606771))",
        "disabledBg": "var(--controlKnob-bgColor-disabled, var(--color-switch-knob-disabled-bg, #161b22))",
        "checked": {
            "bg": "var(--controlKnob-bgColor-checked, var(--color-switch-knob-checked-bg, #0d1117))",
            "disabledBg": "var(--controlKnob-bgColor-disabled, var(--color-switch-knob-checked-disabled-bg, #161b22))",
            "border": "var(--controlKnob-borderColor-checked, var(--color-switch-knob-checked-border, rgba(31,111,235,0.35)))"
        }
    },
    "segmentedControl": {
        "bg": "var(--controlTrack-bgColor-rest, var(--color-segmented-control-bg, rgba(110,118,129,0.1)))",
        "button": {
            "bg": "var(--controlKnob-bgColor-rest, var(--color-segmented-control-button-bg, #0d1117))",
            "hover": {
                "bg": "var(--controlTrack-bgColor-hover, var(--color-segmented-control-button-hover-bg, #30363d))"
            },
            "active": {
                "bg": "var(--controlTrack-bgColor-active, var(--color-segmented-control-button-active-bg, #21262d))"
            },
            "selected": {
                "border": "var(--controlKnob-borderColor-rest, var(--color-segmented-control-button-selected-border, #6e7681))"
            }
        }
    },
    "treeViewItem": {
        "chevron": {
            "hoverBg": "var(--control-transparent-bgColor-hover, var(--color-tree-view-item-chevron-hover-bg, rgba(177,186,196,0.12)))"
        },
        "directory": {
            "fill": "var(--treeViewItem-leadingVisual-bgColor-rest, var(--color-tree-view-item-directory-fill, #848d97))"
        }
    },
    "fg": {
        "default": "var(--fgColor-default, var(--color-fg-default, #e6edf3))",
        "muted": "var(--fgColor-muted, var(--color-fg-muted, #848d97))",
        "subtle": "var(--fgColor-muted, var(--color-fg-subtle, #6e7681))",
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
        "subtle": "var(--borderColor-muted, var(--color-border-subtle, rgba(240,246,252,0.1)))"
    },
    "shadow": {
        "small": "var(--shadow-resting-small, var(--color-shadow-small, 0 0 transparent))",
        "medium": "var(--shadow-resting-medium, var(--color-shadow-medium, 0 3px 6px #010409))",
        "large": "var(--shadow-floating-large, var(--color-shadow-large, 0 8px 24px #010409))",
        "extraLarge": "var(--shadow-floating-xlarge, var(--color-shadow-extra-large, 0 12px 48px #010409))"
    },
    "neutral": {
        "emphasisPlus": "var(--bgColor-emphasis, var(--color-neutral-emphasis-plus, #6e7681))",
        "emphasis": "var(--bgColor-neutral-emphasis, var(--color-neutral-emphasis, #6e7681))",
        "muted": "var(--borderColor-neutral-muted, var(--color-neutral-muted, rgba(110,118,129,0.4)))",
        "subtle": "var(--bgColor-neutral-muted, var(--color-neutral-subtle, rgba(110,118,129,0.1)))"
    },
    "accent": {
        "fg": "var(--fgColor-accent, var(--color-accent-fg, #2f81f7))",
        "emphasis": "var(--bgColor-accent-emphasis, var(--color-accent-emphasis, #1f6feb))",
        "muted": "var(--borderColor-accent-muted, var(--color-accent-muted, rgba(56,139,253,0.4)))",
        "subtle": "var(--bgColor-accent-muted, var(--color-accent-subtle, rgba(56,139,253,0.1)))"
    },
    "success": {
        "fg": "var(--fgColor-success, var(--color-success-fg, #3fb950))",
        "emphasis": "var(--bgColor-success-emphasis, var(--color-success-emphasis, #238636))",
        "muted": "var(--borderColor-success-muted, var(--color-success-muted, rgba(46,160,67,0.4)))",
        "subtle": "var(--bgColor-success-muted, var(--color-success-subtle, rgba(46,160,67,0.15)))"
    },
    "attention": {
        "fg": "var(--fgColor-attention, var(--color-attention-fg, #d29922))",
        "emphasis": "var(--bgColor-attention-emphasis, var(--color-attention-emphasis, #9e6a03))",
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
        "fg": "var(--fgColor-danger, var(--color-danger-fg, #f85149))",
        "emphasis": "var(--borderColor-danger-emphasis, var(--color-danger-emphasis, #da3633))",
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
            "disabled": "var(--fgColor-disabled, var(--color-primer-fg-disabled, #484f58))"
        },
        "canvas": {
            "backdrop": "var(--overlay-backdrop-bgColor, var(--color-primer-canvas-backdrop, rgba(1,4,9,0.8)))",
            "sticky": "var(--color-primer-canvas-sticky, rgba(13,17,23,0.95))"
        },
        "border": {
            "active": "var(--underlineNav-borderColor-active, var(--color-primer-border-active, #f78166))",
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
};
