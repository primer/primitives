"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "canvasDefaultTransparent": "var(--bgColor-transparent, var(--color-canvas-default-transparent, var(--bgColor-default, var(--color-canvas-default, rgba(34,39,46,0)))))",
    "pageHeaderBg": "var(--page-header-bgColor, var(--color-page-header-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.gray.9')(theme)}))`))",
    "marketingIcon": {
        "primary": "var(--color-marketing-icon-primary, #6cb6ff)",
        "secondary": "var(--color-marketing-icon-secondary, #316dca)"
    },
    "diffBlob": {
        "addition": {
            "numText": "var(--diffBlob-addition-fgColor-num, var(--color-diff-blob-addition-num-text, (obj) => (0, get_1.default)(obj, path)))",
            "fg": "var(--diffBlob-addition-fgColor-text, var(--color-diff-blob-addition-fg, (obj) => (0, get_1.default)(obj, path)))",
            "numBg": "var(--diffBlob-addition-bgColor-num, var(--color-diff-blob-addition-num-bg, rgba(87,171,90,0.3)))",
            "lineBg": "var(--diffBlob-addition-bgColor-line, var(--color-diff-blob-addition-line-bg, (theme) => `var(--bgColor-success-muted, var(--color-success-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.green.4'), 0.15)(theme)}))`))",
            "wordBg": "var(--diffBlob-addition-bgColor-word, var(--color-diff-blob-addition-word-bg, (theme) => `var(--borderColor-success-muted, var(--color-success-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.green.4'), 0.4)(theme)}))`))"
        },
        "deletion": {
            "numText": "var(--diffBlob-deletion-fgColor-num, var(--color-diff-blob-deletion-num-text, (obj) => (0, get_1.default)(obj, path)))",
            "fg": "var(--diffBlob-deletion-fgColor-text, var(--color-diff-blob-deletion-fg, (obj) => (0, get_1.default)(obj, path)))",
            "numBg": "var(--diffBlob-deletion-bgColor-num, var(--color-diff-blob-deletion-num-bg, rgba(229,83,75,0.3)))",
            "lineBg": "var(--diffBlob-deletion-bgColor-line, var(--color-diff-blob-deletion-line-bg, (theme) => `var(--bgColor-danger-muted, var(--color-danger-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.red.4'), 0.1)(theme)}))`))",
            "wordBg": "var(--diffBlob-deletion-bgColor-word, var(--color-diff-blob-deletion-word-bg, (theme) => `var(--borderColor-danger-muted, var(--color-danger-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.red.4'), 0.4)(theme)}))`))"
        },
        "hunk": {
            "numBg": "var(--diffBlob-hunk-bgColor-num, var(--color-diff-blob-hunk-num-bg, (theme) => `var(--borderColor-accent-muted, var(--color-accent-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.blue.4'), 0.4)(theme)}))`))"
        },
        "expander": {
            "icon": "#adbac7"
        },
        "selectedLineHighlightMixBlendMode": "var(--color-diff-blob-selected-line-highlight-mix-blend-mode, screen)"
    },
    "diffstat": {
        "deletionBorder": "var(--color-diffstat-deletion-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`)",
        "additionBorder": "var(--color-diffstat-addition-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`)",
        "additionBg": "var(--diffStat-addition-bgColor, var(--color-diffstat-addition-bg, #57ab5a))"
    },
    "searchKeyword": {
        "hl": "var(--highlight-neutral-bgColor, var(--color-search-keyword-hl, rgba(198,144,38,0.4)))"
    },
    "prettylights": {
        "syntax": {
            "comment": "var(--color-prettylights-syntax-comment, #768390)",
            "constant": "var(--color-prettylights-syntax-constant, #6cb6ff)",
            "entity": "var(--color-prettylights-syntax-entity, #dcbdfb)",
            "storageModifierImport": "var(--color-prettylights-syntax-storage-modifier-import, #adbac7)",
            "entityTag": "var(--color-prettylights-syntax-entity-tag, #8ddb8c)",
            "keyword": "var(--color-prettylights-syntax-keyword, #f47067)",
            "string": "var(--color-prettylights-syntax-string, #96d0ff)",
            "variable": "var(--color-prettylights-syntax-variable, #f69d50)",
            "brackethighlighterUnmatched": "var(--color-prettylights-syntax-brackethighlighter-unmatched, #e5534b)",
            "invalidIllegalText": "var(--color-prettylights-syntax-invalid-illegal-text, #cdd9e5)",
            "invalidIllegalBg": "var(--color-prettylights-syntax-invalid-illegal-bg, #922323)",
            "carriageReturnText": "var(--color-prettylights-syntax-carriage-return-text, #cdd9e5)",
            "carriageReturnBg": "var(--color-prettylights-syntax-carriage-return-bg, #ad2e2c)",
            "stringRegexp": "var(--color-prettylights-syntax-string-regexp, #8ddb8c)",
            "markupList": "var(--color-prettylights-syntax-markup-list, #eac55f)",
            "markupHeading": "var(--color-prettylights-syntax-markup-heading, #316dca)",
            "markupItalic": "var(--color-prettylights-syntax-markup-italic, #adbac7)",
            "markupBold": "var(--color-prettylights-syntax-markup-bold, #adbac7)",
            "markupDeletedText": "var(--color-prettylights-syntax-markup-deleted-text, #ffd8d3)",
            "markupDeletedBg": "var(--color-prettylights-syntax-markup-deleted-bg, #78191b)",
            "markupInsertedText": "var(--color-prettylights-syntax-markup-inserted-text, #b4f1b4)",
            "markupInsertedBg": "var(--color-prettylights-syntax-markup-inserted-bg, #1b4721)",
            "markupChangedText": "var(--color-prettylights-syntax-markup-changed-text, #ffddb0)",
            "markupChangedBg": "var(--color-prettylights-syntax-markup-changed-bg, #682d0f)",
            "markupIgnoredText": "var(--color-prettylights-syntax-markup-ignored-text, #adbac7)",
            "markupIgnoredBg": "var(--color-prettylights-syntax-markup-ignored-bg, #255ab2)",
            "metaDiffRange": "var(--color-prettylights-syntax-meta-diff-range, #dcbdfb)",
            "brackethighlighterAngle": "var(--color-prettylights-syntax-brackethighlighter-angle, #768390)",
            "sublimelinterGutterMark": "var(--color-prettylights-syntax-sublimelinter-gutter-mark, #545d68)",
            "constantOtherReferenceLink": "var(--color-prettylights-syntax-constant-other-reference-link, #96d0ff)"
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
        "selectionBg": "var(--codeMirror-selection-bgColor, var(--color-codemirror-selection-bg, (theme) => `var(--borderColor-accent-muted, var(--color-accent-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.blue.4'), 0.4)(theme)}))`))",
        "activelineBg": "var(--codeMirror-activeline-bgColor, var(--color-codemirror-activeline-bg, (theme) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.1)(theme)}))`))",
        "matchingbracketText": "var(--codeMirror-matchingBracket-fgColor, var(--color-codemirror-matchingbracket-text, (obj) => (0, get_1.default)(obj, path)))",
        "linesBg": "var(--codeMirror-lines-bgColor, var(--color-codemirror-lines-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.gray.9')(theme)}))`))",
        "syntax": {
            "comment": "var(--codeMirror-syntax-fgColor-comment, var(--color-codemirror-syntax-comment, #768390))",
            "constant": "var(--codeMirror-syntax-fgColor-constant, var(--color-codemirror-syntax-constant, #6cb6ff))",
            "entity": "var(--codeMirror-syntax-fgColor-entity, var(--color-codemirror-syntax-entity, #dcbdfb))",
            "keyword": "var(--codeMirror-syntax-fgColor-keyword, var(--color-codemirror-syntax-keyword, #f47067))",
            "storage": "var(--codeMirror-syntax-fgColor-storage, var(--color-codemirror-syntax-storage, #f47067))",
            "string": "var(--codeMirror-syntax-fgColor-string, var(--color-codemirror-syntax-string, #96d0ff))",
            "support": "var(--codeMirror-syntax-fgColor-support, var(--color-codemirror-syntax-support, #6cb6ff))",
            "variable": "var(--codeMirror-syntax-fgColor-variable, var(--color-codemirror-syntax-variable, #f69d50))"
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
        "inputBg": "var(--color-checks-input-bg, #2d333b)",
        "inputShadow": "var(--color-checks-input-shadow, 0 0 0 1px (theme) => `var(--borderColor-default, var(--color-border-default, ${(0, utils_v1_1.get)('scale.gray.6')(theme)}))`)",
        "donutError": "var(--color-checks-donut-error, #e5534b)",
        "donutPending": "var(--color-checks-donut-pending, #c69026)",
        "donutSuccess": "var(--color-checks-donut-success, #46954a)",
        "donutNeutral": "var(--color-checks-donut-neutral, #768390)",
        "dropdownText": "var(--color-checks-dropdown-text, (obj) => (0, get_1.default)(obj, path))",
        "dropdownBg": "var(--color-checks-dropdown-bg, (theme) => `var(--overlay-bgColor, var(--color-canvas-overlay, ${(0, utils_v1_1.get)('scale.gray.8')(theme)}))`)",
        "dropdownBorder": "var(--color-checks-dropdown-border, (theme) => `var(--borderColor-default, var(--color-border-default, ${(0, utils_v1_1.get)('scale.gray.6')(theme)}))`)",
        "dropdownShadow": "var(--color-checks-dropdown-shadow, rgba(28,33,40,0.3))",
        "dropdownHoverText": "var(--color-checks-dropdown-hover-text, (obj) => (0, get_1.default)(obj, path))",
        "dropdownHoverBg": "var(--color-checks-dropdown-hover-bg, (theme) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.1)(theme)}))`)",
        "dropdownBtnHoverText": "var(--color-checks-dropdown-btn-hover-text, (obj) => (0, get_1.default)(obj, path))",
        "dropdownBtnHoverBg": "var(--color-checks-dropdown-btn-hover-bg, (theme) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.1)(theme)}))`)",
        "scrollbarThumbBg": "var(--color-checks-scrollbar-thumb-bg, (theme) => `var(--borderColor-neutral-muted, var(--color-neutral-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.4)(theme)}))`)",
        "headerLabelText": "var(--color-checks-header-label-text, (obj) => (0, get_1.default)(obj, path))",
        "headerLabelOpenText": "var(--color-checks-header-label-open-text, (obj) => (0, get_1.default)(obj, path))",
        "headerBorder": "var(--color-checks-header-border, (theme) => `var(--borderColor-muted, var(--color-border-muted, ${(0, utils_v1_1.get)('scale.gray.7')(theme)}))`)",
        "headerIcon": "var(--color-checks-header-icon, (obj) => (0, get_1.default)(obj, path))",
        "lineText": "var(--color-checks-line-text, (obj) => (0, get_1.default)(obj, path))",
        "lineNumText": "var(--color-checks-line-num-text, (theme) => `var(--fgColor-muted, var(--color-fg-subtle, ${(0, utils_v1_1.get)('scale.gray.4')(theme)}))`)",
        "lineTimestampText": "var(--color-checks-line-timestamp-text, (theme) => `var(--fgColor-muted, var(--color-fg-subtle, ${(0, utils_v1_1.get)('scale.gray.4')(theme)}))`)",
        "lineHoverBg": "var(--color-checks-line-hover-bg, (theme) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.1)(theme)}))`)",
        "lineSelectedBg": "var(--color-checks-line-selected-bg, (theme) => `var(--bgColor-accent-muted, var(--color-accent-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.blue.4'), 0.1)(theme)}))`)",
        "lineSelectedNumText": "var(--color-checks-line-selected-num-text, (obj) => (0, get_1.default)(obj, path))",
        "lineDtFmText": "var(--color-checks-line-dt-fm-text, (theme) => `var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, ${(0, utils_v1_1.get)('scale.white')(theme)}))`)",
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
            "black": "var(--color-checks-ansi-black, #22272e)",
            "blackBright": "var(--color-checks-ansi-black-bright, #2d333b)",
            "white": "var(--color-checks-ansi-white, #909dab))",
            "whiteBright": "var(--color-checks-ansi-white-bright, #909dab)",
            "gray": "var(--color-checks-ansi-gray, #636e7b)",
            "red": "var(--color-checks-ansi-red, #f47067)",
            "redBright": "var(--color-checks-ansi-red-bright, #ff938a)",
            "green": "var(--color-checks-ansi-green, #57ab5a)",
            "greenBright": "var(--color-checks-ansi-green-bright, #6bc46d)",
            "yellow": "var(--color-checks-ansi-yellow, #c69026)",
            "yellowBright": "var(--color-checks-ansi-yellow-bright, #daaa3f)",
            "blue": "var(--color-checks-ansi-blue, #539bf5)",
            "blueBright": "var(--color-checks-ansi-blue-bright, #6cb6ff)",
            "magenta": "var(--color-checks-ansi-magenta, #b083f0)",
            "magentaBright": "var(--color-checks-ansi-magenta-bright, #dcbdfb)",
            "cyan": "var(--color-checks-ansi-cyan, #76e3ea)",
            "cyanBright": "var(--color-checks-ansi-cyan-bright, #b3f0ff)"
        }
    },
    "project": {
        "headerBg": "var(--color-project-header-bg, #22272e)",
        "sidebarBg": "var(--color-project-sidebar-bg, #2d333b)",
        "gradientIn": "var(--color-project-gradient-in, #2d333b)",
        "gradientOut": "var(--color-project-gradient-out, rgba(45,51,59,0))"
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
        "bg": "var(--avatar-bgColor, var(--color-avatar-bg, rgba(205,217,229,0.1)))",
        "border": "var(--avatar-borderColor, var(--color-avatar-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`))",
        "stackFade": "var(--avatarStack-fade-bgColor-default, var(--color-avatar-stack-fade, #444c56))",
        "stackFadeMore": "var(--avatarStack-fade-bgColor-muted, var(--color-avatar-stack-fade-more, #373e47))",
        "childShadow": "var(--avatar-shadow, var(--color-avatar-child-shadow, 0 0 0 2px #22272e))"
    },
    "topicTag": {
        "border": "var(--topicTag-borderColor, var(--color-topic-tag-border, transparent))"
    },
    "counter": {
        "border": "var(--counter-borderColor, var(--color-counter-border, transparent))"
    },
    "selectMenu": {
        "backdropBorder": "var(--selectMenu-borderColor, var(--color-select-menu-backdrop-border, #545d68))",
        "tapHighlight": "var(--control-bgColor-active, var(--color-select-menu-tap-highlight, rgba(68,76,86,0.5)))",
        "tapFocusBg": "var(--selectMenu-bgColor-active, var(--color-select-menu-tap-focus-bg, #143d79))"
    },
    "overlay": {
        "shadow": "var(--shadow-floating-small, var(--color-overlay-shadow, 0 0 0 1px #444c56, 0 16px 32px rgba(28,33,40,0.85)))",
        "backdrop": "var(--overlay-backdrop-bgColor, var(--color-overlay-backdrop, rgba(45,51,59,0.4)))"
    },
    "header": {
        "text": "var(--header-fgColor-default, var(--color-header-text, rgba(205,217,229,0.7)))",
        "bg": "var(--header-bgColor, var(--color-header-bg, #2d333b))",
        "divider": "var(--header-borderColor-divider, var(--color-header-divider, #768390))",
        "logo": "var(--header-fgColor-logo, var(--color-header-logo, #cdd9e5))"
    },
    "headerSearch": {
        "bg": "var(--headerSearch-bgColor, var(--color-header-search-bg, #22272e))",
        "border": "var(--headerSearch-borderColor, var(--color-header-search-border, #444c56))"
    },
    "sidenav": {
        "selectedBg": "var(--sideNav-bgColor-selected, var(--color-sidenav-selected-bg, #373e47))"
    },
    "menu": {
        "bgActive": "var(--menu-bgColor-active, var(--color-menu-bg-active, #2d333b))"
    },
    "input": {
        "disabledBg": "var(--control-bgColor-disabled, var(--color-input-disabled-bg, var(--borderColor-neutral-muted, var(--color-neutral-muted, rgba(99,110,123,0)))))"
    },
    "timeline": {
        "badgeBg": "var(--timelineBadge-bgColor, var(--color-timeline-badge-bg, #373e47))"
    },
    "ansi": {
        "black": "var(--color-ansi-black, #545d68)",
        "blackBright": "var(--color-ansi-black-bright, #636e7b)",
        "white": "var(--color-ansi-white, #909dab)",
        "whiteBright": "var(--color-ansi-white-bright, #cdd9e5)",
        "gray": "var(--color-ansi-gray, #636e7b)",
        "red": "var(--color-ansi-red, #f47067)",
        "redBright": "var(--color-ansi-red-bright, #ff938a)",
        "green": "var(--color-ansi-green, #57ab5a)",
        "greenBright": "var(--color-ansi-green-bright, #6bc46d)",
        "yellow": "var(--color-ansi-yellow, #c69026)",
        "yellowBright": "var(--color-ansi-yellow-bright, #daaa3f)",
        "blue": "var(--color-ansi-blue, #539bf5)",
        "blueBright": "var(--color-ansi-blue-bright, #6cb6ff)",
        "magenta": "var(--color-ansi-magenta, #b083f0)",
        "magentaBright": "var(--color-ansi-magenta-bright, #dcbdfb)",
        "cyan": "var(--color-ansi-cyan, #39c5cf)",
        "cyanBright": "var(--color-ansi-cyan-bright, #56d4dd)"
    },
    "btn": {
        "text": "var(--button-default-fgColor-rest, var(--color-btn-text, #adbac7))",
        "bg": "var(--button-default-bgColor-rest, var(--color-btn-bg, #373e47))",
        "border": "var(--button-default-borderColor-rest, var(--color-btn-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`))",
        "shadow": "var(--button-default-shadow-resting, var(--color-btn-shadow, 0 0 transparent))",
        "insetShadow": "var(--button-default-shadow-inset, var(--color-btn-inset-shadow, 0 0 transparent))",
        "hoverBg": "var(--button-default-bgColor-hover, var(--color-btn-hover-bg, #444c56))",
        "hoverBorder": "var(--button-default-borderColor-hover, var(--color-btn-hover-border, #768390))",
        "activeBg": "var(--button-default-bgColor-active, var(--color-btn-active-bg, hsla(213,12%,27%,1)))",
        "activeBorder": "var(--button-default-borderColor-active, var(--color-btn-active-border, #636e7b))",
        "selectedBg": "var(--button-default-bgColor-selected, var(--color-btn-selected-bg, #2d333b))",
        "counterBg": "var(--buttonCounter-default-bgColor-rest, var(--color-btn-counter-bg, #444c56))",
        "primary": {
            "text": "var(--button-primary-fgColor-rest, var(--color-btn-primary-text, #ffffff))",
            "bg": "var(--button-primary-bgColor-rest, var(--color-btn-primary-bg, #347d39))",
            "border": "var(--button-primary-borderColor-rest, var(--color-btn-primary-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`))",
            "shadow": "var(--shadow-resting-small, var(--color-btn-primary-shadow, 0 0 transparent))",
            "insetShadow": "var(--shadow-highlight, var(--color-btn-primary-inset-shadow, 0 0 transparent))",
            "hoverBg": "var(--button-primary-bgColor-hover, var(--color-btn-primary-hover-bg, #46954a))",
            "hoverBorder": "var(--button-primary-borderColor-hover, var(--color-btn-primary-hover-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`))",
            "selectedBg": "var(--button-primary-bgColor-active, var(--color-btn-primary-selected-bg, #347d39))",
            "selectedShadow": "var(--button-primary-shadow-selected, var(--color-btn-primary-selected-shadow, 0 0 transparent))",
            "disabledText": "var(--button-primary-fgColor-disabled, var(--color-btn-primary-disabled-text, rgba(205,217,229,0.5)))",
            "disabledBg": "var(--button-primary-bgColor-disabled, var(--color-btn-primary-disabled-bg, rgba(52,125,57,0.6)))",
            "disabledBorder": "var(--button-primary-borderColor-disabled, var(--color-btn-primary-disabled-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`))",
            "icon": "var(--button-primary-iconColor-rest, var(--color-btn-primary-icon, #cdd9e5))",
            "counterBg": "var(--buttonCounter-primary-bgColor-rest, var(--color-btn-primary-counter-bg, rgba(17,52,23,0.2)))"
        },
        "outline": {
            "text": "var(--button-outline-fgColor-rest, var(--color-btn-outline-text, #4184e4))",
            "hoverText": "var(--button-outline-fgColor-hover, var(--color-btn-outline-hover-text, #539bf5))",
            "hoverBg": "var(--button-outline-bgColor-hover, var(--color-btn-outline-hover-bg, #444c56))",
            "hoverBorder": "var(--button-outline-borderColor-hover, var(--color-btn-outline-hover-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`))",
            "hoverShadow": "var(--shadow-resting-small, var(--color-btn-outline-hover-shadow, 0 1px 0 rgba(28,33,40,0.1)))// HI_KATIE: no matches",
            "hoverInsetShadow": "var(--shadow-highlight, var(--color-btn-outline-hover-inset-shadow, inset 0 1px 0 rgba(205,217,229,0.03)))// HI_KATIE: no matches",
            "hoverCounterBg": "var(--buttonCounter-outline-bgColor-hover, var(--color-btn-outline-hover-counter-bg, rgba(15,45,92,0.2)))",
            "selectedText": "var(--button-outline-fgColor-active, var(--color-btn-outline-selected-text, #cdd9e5))",
            "selectedBg": "var(--button-outline-bgColor-active, var(--color-btn-outline-selected-bg, #1b4b91))",
            "selectedBorder": "var(--button-outline-borderColor-active, var(--color-btn-outline-selected-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`))",
            "selectedShadow": "var(--button-outline-shadow-selected, var(--color-btn-outline-selected-shadow, 0 0 transparent))",
            "disabledText": "var(--button-outline-fgColor-disabled, var(--color-btn-outline-disabled-text, rgba(83,155,245,0.5)))",
            "disabledBg": "var(--button-outline-bgColor-disabled, var(--color-btn-outline-disabled-bg, #22272e))",
            "disabledCounterBg": "var(--buttonCounter-outline-bgColor-disabled, var(--color-btn-outline-disabled-counter-bg, rgba(49,109,202,0.05)))",
            "counterBg": "var(--buttonCounter-outline-bgColor-rest, var(--color-btn-outline-counter-bg, rgba(15,45,92,0.2)))",
            "hoverCounterFg": "var(--buttonCounter-outline-fgColor-hover, var(--color-btn-outline-hover-counter-fg, #539bf5))",
            "disabledCounterFg": "var(--buttonCounter-outline-fgColor-disabled, var(--color-btn-outline-disabled-counter-fg, rgba(83,155,245,0.5)))",
            "counterFg": "var(--buttonCounter-outline-fgColor-rest, var(--color-btn-outline-counter-fg, #4184e4))"
        },
        "danger": {
            "text": "var(--button-danger-fgColor-rest, var(--color-btn-danger-text, #e5534b))",
            "hoverText": "var(--button-danger-fgColor-hover, var(--color-btn-danger-hover-text, (theme) => `var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
            "hoverBg": "var(--button-danger-bgColor-hover, var(--color-btn-danger-hover-bg, #c93c37))",
            "hoverBorder": "var(--button-danger-borderColor-hover, var(--color-btn-danger-hover-border, #e5534b))",
            "hoverShadow": "var(--shadow-resting-small, var(--color-btn-danger-hover-shadow, 0 0 transparent))",
            "hoverInsetShadow": "var(--shadow-highlight, var(--color-btn-danger-hover-inset-shadow, 0 0 transparent))",
            "hoverIcon": "var(--button-danger-iconColor-hover, var(--color-btn-danger-hover-icon, (theme) => `var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
            "hoverCounterBg": "var(--buttonCounter-danger-bgColor-hover, var(--color-btn-danger-hover-counter-bg, rgba(255,255,255,0.2)))",
            "selectedText": "var(--button-danger-fgColor-active, var(--color-btn-danger-selected-text, #ffffff))",
            "selectedBg": "var(--button-danger-bgColor-active, var(--color-btn-danger-selected-bg, #ad2e2c))",
            "selectedBorder": "var(--button-danger-borderColor-active, var(--color-btn-danger-selected-border, #f47067))",
            "selectedShadow": "var(--button-danger-shadow-selected, var(--color-btn-danger-selected-shadow, 0 0 transparent))",
            "disabledText": "var(--button-danger-fgColor-disabled, var(--color-btn-danger-disabled-text, rgba(229,83,75,0.5)))",
            "disabledBg": "var(--button-danger-bgColor-disabled, var(--color-btn-danger-disabled-bg, #22272e))",
            "disabledCounterBg": "var(--buttonCounter-danger-bgColor-disabled, var(--color-btn-danger-disabled-counter-bg, rgba(201,60,55,0.05)))",
            "counterBg": "var(--buttonCounter-danger-bgColor-rest, var(--color-btn-danger-counter-bg, rgba(93,15,18,0.2)))",
            "icon": "var(--button-danger-iconColor-rest, var(--color-btn-danger-icon, #e5534b))",
            "counterFg": "var(--buttonCounter-danger-fgColor-rest, var(--color-btn-danger-counter-fg, (theme) => `var(--fgColor-danger, var(--color-danger-fg, ${(0, utils_v1_1.get)('scale.red.4')(theme)}))`))",
            "disabledCounterFg": "var(--buttonCounter-danger-fgColor-disabled, var(--color-btn-danger-disabled-counter-fg, var(--fgColor-danger, var(--color-danger-fg, rgba(229,83,75,0.5)))))",
            "hoverCounterFg": "var(--buttonCounter-danger-fgColor-hover, var(--color-btn-danger-hover-counter-fg, #cdd9e5))"
        },
        "inactive": {
            "bg": "var(--button-inactive-bgColor-rest, var(--color-btn-inactive-bg, #373e47))",
            "text": "var(--button-inactive-fgColor-rest, var(--color-btn-inactive-text, #768390))"
        }
    },
    "underlinenav": {
        "icon": "var(--underlineNav-iconColor-rest, var(--color-underlinenav-icon, (theme) => `var(--fgColor-muted, var(--color-fg-subtle, ${(0, utils_v1_1.get)('scale.gray.4')(theme)}))`))",
        "borderHover": "var(--underlineNav-borderColor-hover, var(--color-underlinenav-border-hover, (theme) => `var(--borderColor-neutral-muted, var(--color-neutral-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.4)(theme)}))`))"
    },
    "actionListItem": {
        "inlineDivider": "var(--borderColor-muted, var(--color-action-list-item-inline-divider, var(--borderColor-default, var(--color-border-default, rgba(68,76,86,0.48)))))",
        "default": {
            "hoverBg": "var(--control-transparent-bgColor-hover, var(--color-action-list-item-default-hover-bg, rgba(144,157,171,0.12)))",
            "hoverBorder": "var(--control-transparent-borderColor-hover, var(--color-action-list-item-default-hover-border, transparent))",
            "activeBg": "var(--control-transparent-bgColor-active, var(--color-action-list-item-default-active-bg, rgba(144,157,171,0.2)))",
            "activeBorder": "var(--control-transparent-borderColor-active, var(--color-action-list-item-default-active-border, transparent))",
            "selectedBg": "var(--control-transparent-bgColor-selected, var(--color-action-list-item-default-selected-bg, rgba(144,157,171,0.08)))"
        },
        "danger": {
            "hoverBg": "var(--control-danger-bgColor-hover, var(--color-action-list-item-danger-hover-bg, rgba(229,83,75,0.16)))",
            "activeBg": "var(--control-danger-bgColor-active, var(--color-action-list-item-danger-active-bg, rgba(229,83,75,0.24)))",
            "hoverText": "var(--control-danger-fgColor-hover, var(--color-action-list-item-danger-hover-text, #f47067))"
        }
    },
    "switchTrack": {
        "bg": "var(--controlTrack-bgColor-rest, var(--color-switch-track-bg, (theme) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.1)(theme)}))`))",
        "hoverBg": "var(--controlTrack-bgColor-hover, var(--color-switch-track-hover-bg, var(--bgColor-neutral-muted, var(--color-neutral-subtle, hsla(213,11%,69%,0.1)))))",
        "activeBg": "var(--controlTrack-bgColor-active, var(--color-switch-track-active-bg, (theme) => `var(--borderColor-neutral-muted, var(--color-neutral-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.4)(theme)}))`))",
        "disabledBg": "var(--controlTrack-bgColor-disabled, var(--color-switch-track-disabled-bg, #373e47))",
        "fg": "var(--controlTrack-fgColor-rest, var(--color-switch-track-fg, (obj) => (0, get_1.default)(obj, path)))",
        "disabledFg": "var(--controlTrack-fgColor-disabled, var(--color-switch-track-disabled-fg, #1c2128))",
        "border": "var(--controlTrack-borderColor-rest, var(--color-switch-track-border, transparent))",
        "checked": {
            "bg": "var(--control-checked-bgColor-rest, var(--color-switch-track-checked-bg, rgba(49,109,202,0.35)))",
            "hoverBg": "var(--control-checked-bgColor-hover, var(--color-switch-track-checked-hover-bg, rgba(49,109,202,0.5)))",
            "activeBg": "var(--control-checked-bgColor-active, var(--color-switch-track-checked-active-bg, rgba(49,109,202,0.65)))",
            "fg": "var(--control-checked-fgColor-rest, var(--color-switch-track-checked-fg, (theme) => `var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
            "disabledFg": "var(--control-checked-fgColor-disabled, var(--color-switch-track-checked-disabled-fg, #1c2128))",
            "border": "var(--borderColor-transparent, var(--color-switch-track-checked-border, transparent))"
        }
    },
    "switchKnob": {
        "bg": "var(--controlKnob-bgColor-rest, var(--color-switch-knob-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.gray.9')(theme)}))`))",
        "border": "var(--controlKnob-borderColor-rest, var(--color-switch-knob-border, #606771))",
        "disabledBg": "var(--controlKnob-bgColor-disabled, var(--color-switch-knob-disabled-bg, (theme) => `var(--bgColor-muted, var(--color-canvas-subtle, ${(0, utils_v1_1.get)('scale.gray.8')(theme)}))`))",
        "checked": {
            "bg": "var(--controlKnob-bgColor-checked, var(--color-switch-knob-checked-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.gray.9')(theme)}))`))",
            "disabledBg": "var(--controlKnob-bgColor-disabled, var(--color-switch-knob-checked-disabled-bg, (theme) => `var(--bgColor-muted, var(--color-canvas-subtle, ${(0, utils_v1_1.get)('scale.gray.8')(theme)}))`))",
            "border": "var(--controlKnob-borderColor-checked, var(--color-switch-knob-checked-border, rgba(49,109,202,0.35)))"
        }
    },
    "segmentedControl": {
        "bg": "var(--controlTrack-bgColor-rest, var(--color-segmented-control-bg, (theme) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.1)(theme)}))`))",
        "button": {
            "bg": "var(--controlKnob-bgColor-rest, var(--color-segmented-control-button-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.gray.9')(theme)}))`))",
            "hover": {
                "bg": "var(--controlTrack-bgColor-hover, var(--color-segmented-control-button-hover-bg, #444c56))"
            },
            "active": {
                "bg": "var(--controlTrack-bgColor-active, var(--color-segmented-control-button-active-bg, #373e47))"
            },
            "selected": {
                "border": "var(--controlKnob-borderColor-rest, var(--color-segmented-control-button-selected-border, #636e7b))"
            }
        }
    },
    "treeViewItem": {
        "chevron": {
            "hoverBg": "var(--control-transparent-bgColor-hover, var(--color-tree-view-item-chevron-hover-bg, rgba(144,157,171,0.12)))"
        },
        "directory": {
            "fill": "var(--treeViewItem-leadingVisual-bgColor-rest, var(--color-tree-view-item-directory-fill, (obj) => (0, get_1.default)(obj, path)))"
        }
    },
    "fg": {
        "default": "#adbac7",
        "muted": "#768390",
        "subtle": "var(--fgColor-muted, var(--color-fg-subtle, #636e7b))",
        "onEmphasis": "var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, #cdd9e5))"
    },
    "canvas": {
        "default": "var(--bgColor-default, var(--color-canvas-default, #22272e))",
        "overlay": "var(--overlay-bgColor, var(--color-canvas-overlay, #2d333b))",
        "inset": "var(--bgColor-inset, var(--color-canvas-inset, #1c2128))",
        "subtle": "var(--bgColor-muted, var(--color-canvas-subtle, #2d333b))"
    },
    "border": {
        "default": "var(--borderColor-default, var(--color-border-default, #444c56))",
        "muted": "var(--borderColor-muted, var(--color-border-muted, #373e47))",
        "subtle": "var(--borderColor-muted, var(--color-border-subtle, rgba(205,217,229,0.1)))"
    },
    "shadow": {
        "small": "var(--shadow-resting-small, var(--color-shadow-small, 0 0 transparent))",
        "medium": "var(--shadow-resting-medium, var(--color-shadow-medium, 0 3px 6px #1c2128))",
        "large": "var(--shadow-floating-large, var(--color-shadow-large, 0 8px 24px #1c2128))",
        "extraLarge": "var(--shadow-floating-xlarge, var(--color-shadow-extra-large, 0 12px 48px #1c2128))"
    },
    "neutral": {
        "emphasisPlus": "var(--bgColor-emphasis, var(--color-neutral-emphasis-plus, #636e7b))",
        "emphasis": "var(--bgColor-neutral-emphasis, var(--color-neutral-emphasis, #636e7b))",
        "muted": "var(--borderColor-neutral-muted, var(--color-neutral-muted, rgba(99,110,123,0.4)))",
        "subtle": "var(--bgColor-neutral-muted, var(--color-neutral-subtle, rgba(99,110,123,0.1)))"
    },
    "accent": {
        "fg": "#539bf5",
        "emphasis": "var(--bgColor-accent-emphasis, var(--color-accent-emphasis, #316dca))",
        "muted": "var(--borderColor-accent-muted, var(--color-accent-muted, rgba(65,132,228,0.4)))",
        "subtle": "var(--bgColor-accent-muted, var(--color-accent-subtle, rgba(65,132,228,0.1)))"
    },
    "success": {
        "fg": "var(--fgColor-success, var(--color-success-fg, #57ab5a))",
        "emphasis": "var(--bgColor-success-emphasis, var(--color-success-emphasis, #347d39))",
        "muted": "var(--borderColor-success-muted, var(--color-success-muted, rgba(70,149,74,0.4)))",
        "subtle": "var(--bgColor-success-muted, var(--color-success-subtle, rgba(70,149,74,0.15)))"
    },
    "attention": {
        "fg": "var(--fgColor-attention, var(--color-attention-fg, #c69026))",
        "emphasis": "var(--bgColor-attention-emphasis, var(--color-attention-emphasis, #966600))",
        "muted": "var(--borderColor-attention-muted, var(--color-attention-muted, rgba(174,124,20,0.4)))",
        "subtle": "var(--bgColor-attention-muted, var(--color-attention-subtle, rgba(174,124,20,0.15)))"
    },
    "severe": {
        "fg": "var(--fgColor-severe, var(--color-severe-fg, #cc6b2c))",
        "emphasis": "var(--bgColor-severe-emphasis, var(--color-severe-emphasis, #ae5622))",
        "muted": "var(--borderColor-severe-muted, var(--color-severe-muted, rgba(204,107,44,0.4)))",
        "subtle": "var(--bgColor-severe-muted, var(--color-severe-subtle, rgba(204,107,44,0.1)))"
    },
    "danger": {
        "fg": "var(--fgColor-danger, var(--color-danger-fg, #e5534b))",
        "emphasis": "var(--borderColor-danger-emphasis, var(--color-danger-emphasis, #c93c37))",
        "muted": "var(--borderColor-danger-muted, var(--color-danger-muted, rgba(229,83,75,0.4)))",
        "subtle": "var(--bgColor-danger-muted, var(--color-danger-subtle, rgba(229,83,75,0.1)))"
    },
    "open": {
        "fg": "var(--fgColor-open, var(--color-open-fg, #57ab5a))",
        "emphasis": "var(--bgColor-open-emphasis, var(--color-open-emphasis, #347d39))",
        "muted": "var(--borderColor-open-muted, var(--color-open-muted, rgba(70,149,74,0.4)))",
        "subtle": "var(--bgColor-open-muted, var(--color-open-subtle, rgba(70,149,74,0.15)))"
    },
    "closed": {
        "fg": "var(--fgColor-closed, var(--color-closed-fg, #e5534b))",
        "emphasis": "var(--bgColor-closed-emphasis, var(--color-closed-emphasis, #c93c37))",
        "muted": "var(--borderColor-closed-muted, var(--color-closed-muted, rgba(229,83,75,0.4)))",
        "subtle": "var(--bgColor-closed-muted, var(--color-closed-subtle, rgba(229,83,75,0.15)))"
    },
    "done": {
        "fg": "var(--fgColor-done, var(--color-done-fg, #986ee2))",
        "emphasis": "var(--bgColor-done-emphasis, var(--color-done-emphasis, #8256d0))",
        "muted": "var(--borderColor-done-muted, var(--color-done-muted, rgba(152,110,226,0.4)))",
        "subtle": "var(--bgColor-done-muted, var(--color-done-subtle, rgba(152,110,226,0.1)))"
    },
    "sponsors": {
        "fg": "var(--fgColor-sponsors, var(--color-sponsors-fg, #c96198))",
        "emphasis": "var(--bgColor-sponsors-emphasis, var(--color-sponsors-emphasis, #ae4c82))",
        "muted": "var(--borderColor-sponsors-muted, var(--color-sponsors-muted, rgba(201,97,152,0.4)))",
        "subtle": "var(--bgColor-sponsors-muted, var(--color-sponsors-subtle, rgba(201,97,152,0.1)))"
    },
    "primer": {
        "fg": {
            "disabled": "var(--fgColor-disabled, var(--color-primer-fg-disabled, #545d68))"
        },
        "canvas": {
            "backdrop": "var(--overlay-backdrop-bgColor, var(--color-primer-canvas-backdrop, rgba(28,33,40,0.8)))",
            "sticky": "var(--color-primer-canvas-sticky, rgba(34,39,46,0.95))"
        },
        "border": {
            "active": "var(--underlineNav-borderColor-active, var(--color-primer-border-active, #ec775c))",
            "contrast": "var(--borderColor-muted, var(--color-primer-border-contrast, rgba(205,217,229,0.2)))"
        },
        "shadow": {
            "highlight": "var(--shadow-highlight, var(--color-primer-shadow-highlight, 0 0 transparent))",
            "inset": "var(--shadow-inset, var(--color-primer-shadow-inset, 0 0 transparent))"
        }
    },
    "scale": {
        "black": "#1c2128",
        "white": "#cdd9e5",
        "gray": [
            "#cdd9e5",
            "#adbac7",
            "#909dab",
            "#768390",
            "#636e7b",
            "#545d68",
            "#444c56",
            "#373e47",
            "#2d333b",
            "#22272e"
        ],
        "blue": [
            "#c6e6ff",
            "#96d0ff",
            "#6cb6ff",
            "#539bf5",
            "#4184e4",
            "#316dca",
            "#255ab2",
            "#1b4b91",
            "#143d79",
            "#0f2d5c"
        ],
        "green": [
            "#b4f1b4",
            "#8ddb8c",
            "#6bc46d",
            "#57ab5a",
            "#46954a",
            "#347d39",
            "#2b6a30",
            "#245829",
            "#1b4721",
            "#113417"
        ],
        "yellow": [
            "#fbe090",
            "#eac55f",
            "#daaa3f",
            "#c69026",
            "#ae7c14",
            "#966600",
            "#805400",
            "#6c4400",
            "#593600",
            "#452700"
        ],
        "orange": [
            "#ffddb0",
            "#ffbc6f",
            "#f69d50",
            "#e0823d",
            "#cc6b2c",
            "#ae5622",
            "#94471b",
            "#7f3913",
            "#682d0f",
            "#4d210c"
        ],
        "red": [
            "#ffd8d3",
            "#ffb8b0",
            "#ff938a",
            "#f47067",
            "#e5534b",
            "#c93c37",
            "#ad2e2c",
            "#922323",
            "#78191b",
            "#5d0f12"
        ],
        "purple": [
            "#eedcff",
            "#dcbdfb",
            "#dcbdfb",
            "#b083f0",
            "#986ee2",
            "#8256d0",
            "#6b44bc",
            "#5936a2",
            "#472c82",
            "#352160"
        ],
        "pink": [
            "#ffd7eb",
            "#ffb3d8",
            "#fc8dc7",
            "#e275ad",
            "#c96198",
            "#ae4c82",
            "#983b6e",
            "#7e325a",
            "#69264a",
            "#551639"
        ],
        "coral": [
            "#ffdacf",
            "#ffb9a5",
            "#f79981",
            "#ec775c",
            "#de5b41",
            "#c2442d",
            "#a93524",
            "#8d291b",
            "#771d13",
            "#5d1008"
        ]
    }
};
