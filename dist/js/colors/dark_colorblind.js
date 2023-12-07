"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "canvasDefaultTransparent": "var(--bgColor-transparent, var(--color-canvas-default-transparent, var(--bgColor-default, var(--color-canvas-default, rgba(13,17,23,0)))))",
    "pageHeaderBg": "var(--page-header-bgColor, var(--color-page-header-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.gray.9')(theme)}))`))",
    "marketingIcon": {
        "primary": "var(--color-marketing-icon-primary, #79c0ff)",
        "secondary": "var(--color-marketing-icon-secondary, #1f6feb)"
    },
    "diffBlob": {
        "addition": {
            "numText": "var(--diffBlob-addition-fgColor-num, var(--color-diff-blob-addition-num-text, (obj) => (0, get_1.default)(obj, path)))",
            "fg": "var(--diffBlob-addition-fgColor-text, var(--color-diff-blob-addition-fg, (obj) => (0, get_1.default)(obj, path)))",
            "numBg": "var(--diffBlob-addition-bgColor-num, var(--color-diff-blob-addition-num-bg, rgba(88,166,255,0.3)))",
            "lineBg": "var(--diffBlob-addition-bgColor-line, var(--color-diff-blob-addition-line-bg, (theme) => `var(--bgColor-success-muted, var(--color-success-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.green.4'), 0.15)(theme)}))`))",
            "wordBg": "var(--diffBlob-addition-bgColor-word, var(--color-diff-blob-addition-word-bg, (theme) => `var(--borderColor-success-muted, var(--color-success-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.green.4'), 0.4)(theme)}))`))"
        },
        "deletion": {
            "numText": "var(--diffBlob-deletion-fgColor-num, var(--color-diff-blob-deletion-num-text, (obj) => (0, get_1.default)(obj, path)))",
            "fg": "var(--diffBlob-deletion-fgColor-text, var(--color-diff-blob-deletion-fg, (obj) => (0, get_1.default)(obj, path)))",
            "numBg": "var(--diffBlob-deletion-bgColor-num, var(--color-diff-blob-deletion-num-bg, rgba(212,118,22,0.3)))",
            "lineBg": "var(--diffBlob-deletion-bgColor-line, var(--color-diff-blob-deletion-line-bg, (theme) => `var(--bgColor-danger-muted, var(--color-danger-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.red.4'), 0.1)(theme)}))`))",
            "wordBg": "var(--diffBlob-deletion-bgColor-word, var(--color-diff-blob-deletion-word-bg, (theme) => `var(--borderColor-danger-muted, var(--color-danger-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.red.4'), 0.4)(theme)}))`))"
        },
        "hunk": {
            "numBg": "var(--diffBlob-hunk-bgColor-num, var(--color-diff-blob-hunk-num-bg, (theme) => `var(--borderColor-accent-muted, var(--color-accent-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.blue.4'), 0.4)(theme)}))`))"
        },
        "expander": {
            "icon": "var(--diffBlob-expander-iconColor, var(--color-diff-blob-expander-icon, (obj) => (0, get_1.default)(obj, path)))"
        },
        "selectedLineHighlightMixBlendMode": "var(--color-diff-blob-selected-line-highlight-mix-blend-mode, screen)"
    },
    "diffstat": {
        "deletionBorder": "var(--color-diffstat-deletion-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`)",
        "additionBorder": "var(--color-diffstat-addition-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`)",
        "additionBg": "var(--diffStat-addition-bgColor, var(--color-diffstat-addition-bg, #58a6ff))"
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
            "entityTag": "var(--color-prettylights-syntax-entity-tag, #a5d6ff)",
            "keyword": "var(--color-prettylights-syntax-keyword, #ec8e2c)",
            "string": "var(--color-prettylights-syntax-string, #a5d6ff)",
            "variable": "var(--color-prettylights-syntax-variable, #fdac54)",
            "brackethighlighterUnmatched": "var(--color-prettylights-syntax-brackethighlighter-unmatched, #d47616)",
            "invalidIllegalText": "var(--color-prettylights-syntax-invalid-illegal-text, #f0f6fc)",
            "invalidIllegalBg": "var(--color-prettylights-syntax-invalid-illegal-bg, #6c3906)",
            "carriageReturnText": "var(--color-prettylights-syntax-carriage-return-text, #f0f6fc)",
            "carriageReturnBg": "var(--color-prettylights-syntax-carriage-return-bg, #914d04)",
            "stringRegexp": "var(--color-prettylights-syntax-string-regexp, #a5d6ff)",
            "markupList": "var(--color-prettylights-syntax-markup-list, #f2cc60)",
            "markupHeading": "var(--color-prettylights-syntax-markup-heading, #1f6feb)",
            "markupItalic": "var(--color-prettylights-syntax-markup-italic, #c9d1d9)",
            "markupBold": "var(--color-prettylights-syntax-markup-bold, #c9d1d9)",
            "markupDeletedText": "var(--color-prettylights-syntax-markup-deleted-text, #ffe2bb)",
            "markupDeletedBg": "var(--color-prettylights-syntax-markup-deleted-bg, #4e2906)",
            "markupInsertedText": "var(--color-prettylights-syntax-markup-inserted-text, #cae8ff)",
            "markupInsertedBg": "var(--color-prettylights-syntax-markup-inserted-bg, #0c2d6b)",
            "markupChangedText": "var(--color-prettylights-syntax-markup-changed-text, #ffe2bb)",
            "markupChangedBg": "var(--color-prettylights-syntax-markup-changed-bg, #4e2906)",
            "markupIgnoredText": "var(--color-prettylights-syntax-markup-ignored-text, #c9d1d9)",
            "markupIgnoredBg": "var(--color-prettylights-syntax-markup-ignored-bg, #1158c7)",
            "metaDiffRange": "var(--color-prettylights-syntax-meta-diff-range, #d2a8ff)",
            "brackethighlighterAngle": "var(--color-prettylights-syntax-brackethighlighter-angle, #8b949e)",
            "sublimelinterGutterMark": "var(--color-prettylights-syntax-sublimelinter-gutter-mark, #484f58)",
            "constantOtherReferenceLink": "var(--color-prettylights-syntax-constant-other-reference-link, #a5d6ff)"
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
            "comment": "var(--codeMirror-syntax-fgColor-comment, var(--color-codemirror-syntax-comment, #8b949e))",
            "constant": "var(--codeMirror-syntax-fgColor-constant, var(--color-codemirror-syntax-constant, #79c0ff))",
            "entity": "var(--codeMirror-syntax-fgColor-entity, var(--color-codemirror-syntax-entity, #d2a8ff))",
            "keyword": "var(--codeMirror-syntax-fgColor-keyword, var(--color-codemirror-syntax-keyword, #ec8e2c))",
            "storage": "var(--codeMirror-syntax-fgColor-storage, var(--color-codemirror-syntax-storage, #ec8e2c))",
            "string": "var(--codeMirror-syntax-fgColor-string, var(--color-codemirror-syntax-string, #a5d6ff))",
            "support": "var(--codeMirror-syntax-fgColor-support, var(--color-codemirror-syntax-support, #79c0ff))",
            "variable": "var(--codeMirror-syntax-fgColor-variable, var(--color-codemirror-syntax-variable, #fdac54))"
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
        "inputBg": "var(--color-checks-input-bg, #161b22)",
        "inputShadow": "var(--color-checks-input-shadow, 0 0 0 1px (theme) => `var(--borderColor-default, var(--color-border-default, ${(0, utils_v1_1.get)('scale.gray.6')(theme)}))`)",
        "donutError": "var(--color-checks-donut-error, #d47616)",
        "donutPending": "var(--color-checks-donut-pending, #d29922)",
        "donutSuccess": "var(--color-checks-donut-success, #388bfd)",
        "donutNeutral": "var(--color-checks-donut-neutral, #8b949e)",
        "dropdownText": "var(--color-checks-dropdown-text, (obj) => (0, get_1.default)(obj, path))",
        "dropdownBg": "var(--color-checks-dropdown-bg, (theme) => `var(--overlay-bgColor, var(--color-canvas-overlay, ${(0, utils_v1_1.get)('scale.gray.8')(theme)}))`)",
        "dropdownBorder": "var(--color-checks-dropdown-border, (theme) => `var(--borderColor-default, var(--color-border-default, ${(0, utils_v1_1.get)('scale.gray.6')(theme)}))`)",
        "dropdownShadow": "var(--color-checks-dropdown-shadow, rgba(1,4,9,0.3))",
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
            "black": "var(--color-checks-ansi-black, #0d1117)",
            "blackBright": "var(--color-checks-ansi-black-bright, #161b22)",
            "white": "var(--color-checks-ansi-white, #b1bac4))",
            "whiteBright": "var(--color-checks-ansi-white-bright, #b1bac4)",
            "gray": "var(--color-checks-ansi-gray, #6e7681)",
            "red": "var(--color-checks-ansi-red, #ec8e2c)",
            "redBright": "var(--color-checks-ansi-red-bright, #fdac54)",
            "green": "var(--color-checks-ansi-green, #58a6ff)",
            "greenBright": "var(--color-checks-ansi-green-bright, #79c0ff)",
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
        "border": "var(--avatar-borderColor, var(--color-avatar-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`))",
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
        "disabledBg": "var(--control-bgColor-disabled, var(--color-input-disabled-bg, var(--borderColor-neutral-muted, var(--color-neutral-muted, rgba(110,118,129,0)))))"
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
        "red": "var(--color-ansi-red, #ec8e2c)",
        "redBright": "var(--color-ansi-red-bright, #fdac54)",
        "green": "var(--color-ansi-green, #58a6ff)",
        "greenBright": "var(--color-ansi-green-bright, #79c0ff)",
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
        "border": "var(--button-default-borderColor-rest, var(--color-btn-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`))",
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
            "bg": "var(--button-primary-bgColor-rest, var(--color-btn-primary-bg, #1f6feb))",
            "border": "var(--button-primary-borderColor-rest, var(--color-btn-primary-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`))",
            "shadow": "var(--shadow-resting-small, var(--color-btn-primary-shadow, 0 0 transparent))",
            "insetShadow": "var(--shadow-highlight, var(--color-btn-primary-inset-shadow, 0 0 transparent))",
            "hoverBg": "var(--button-primary-bgColor-hover, var(--color-btn-primary-hover-bg, #388bfd))",
            "hoverBorder": "var(--button-primary-borderColor-hover, var(--color-btn-primary-hover-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`))",
            "selectedBg": "var(--button-primary-bgColor-active, var(--color-btn-primary-selected-bg, #1f6feb))",
            "selectedShadow": "var(--button-primary-shadow-selected, var(--color-btn-primary-selected-shadow, 0 0 transparent))",
            "disabledText": "var(--button-primary-fgColor-disabled, var(--color-btn-primary-disabled-text, rgba(255,255,255,0.5)))",
            "disabledBg": "var(--button-primary-bgColor-disabled, var(--color-btn-primary-disabled-bg, rgba(31,111,235,0.6)))",
            "disabledBorder": "var(--button-primary-borderColor-disabled, var(--color-btn-primary-disabled-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`))",
            "icon": "var(--button-primary-iconColor-rest, var(--color-btn-primary-icon, #ffffff))",
            "counterBg": "var(--buttonCounter-primary-bgColor-rest, var(--color-btn-primary-counter-bg, rgba(5,29,77,0.2)))"
        },
        "outline": {
            "text": "var(--button-outline-fgColor-rest, var(--color-btn-outline-text, #388bfd))",
            "hoverText": "var(--button-outline-fgColor-hover, var(--color-btn-outline-hover-text, #58a6ff))",
            "hoverBg": "var(--button-outline-bgColor-hover, var(--color-btn-outline-hover-bg, #30363d))",
            "hoverBorder": "var(--button-outline-borderColor-hover, var(--color-btn-outline-hover-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`))",
            "hoverShadow": "var(--shadow-resting-small, var(--color-btn-outline-hover-shadow, 0 1px 0 rgba(1,4,9,0.1)))// HI_KATIE: no matches",
            "hoverInsetShadow": "var(--shadow-highlight, var(--color-btn-outline-hover-inset-shadow, inset 0 1px 0 rgba(255,255,255,0.03)))// HI_KATIE: no matches",
            "hoverCounterBg": "var(--buttonCounter-outline-bgColor-hover, var(--color-btn-outline-hover-counter-bg, rgba(5,29,77,0.2)))",
            "selectedText": "var(--button-outline-fgColor-active, var(--color-btn-outline-selected-text, #ffffff))",
            "selectedBg": "var(--button-outline-bgColor-active, var(--color-btn-outline-selected-bg, #0d419d))",
            "selectedBorder": "var(--button-outline-borderColor-active, var(--color-btn-outline-selected-border, (theme) => `var(--borderColor-muted, var(--color-border-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.0'), 0.1)(theme)}))`))",
            "selectedShadow": "var(--button-outline-shadow-selected, var(--color-btn-outline-selected-shadow, 0 0 transparent))",
            "disabledText": "var(--button-outline-fgColor-disabled, var(--color-btn-outline-disabled-text, rgba(88,166,255,0.5)))",
            "disabledBg": "var(--button-outline-bgColor-disabled, var(--color-btn-outline-disabled-bg, #0d1117))",
            "disabledCounterBg": "var(--buttonCounter-outline-bgColor-disabled, var(--color-btn-outline-disabled-counter-bg, rgba(31,111,235,0.05)))",
            "counterBg": "var(--buttonCounter-outline-bgColor-rest, var(--color-btn-outline-counter-bg, rgba(5,29,77,0.2)))",
            "hoverCounterFg": "var(--buttonCounter-outline-fgColor-hover, var(--color-btn-outline-hover-counter-fg, #58a6ff))",
            "disabledCounterFg": "var(--buttonCounter-outline-fgColor-disabled, var(--color-btn-outline-disabled-counter-fg, rgba(88,166,255,0.5)))",
            "counterFg": "var(--buttonCounter-outline-fgColor-rest, var(--color-btn-outline-counter-fg, #388bfd))"
        },
        "danger": {
            "text": "var(--button-danger-fgColor-rest, var(--color-btn-danger-text, #d47616))",
            "hoverText": "var(--button-danger-fgColor-hover, var(--color-btn-danger-hover-text, (theme) => `var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
            "hoverBg": "var(--button-danger-bgColor-hover, var(--color-btn-danger-hover-bg, #b76100))",
            "hoverBorder": "var(--button-danger-borderColor-hover, var(--color-btn-danger-hover-border, #d47616))",
            "hoverShadow": "var(--shadow-resting-small, var(--color-btn-danger-hover-shadow, 0 0 transparent))",
            "hoverInsetShadow": "var(--shadow-highlight, var(--color-btn-danger-hover-inset-shadow, 0 0 transparent))",
            "hoverIcon": "var(--button-danger-iconColor-hover, var(--color-btn-danger-hover-icon, (theme) => `var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
            "hoverCounterBg": "var(--buttonCounter-danger-bgColor-hover, var(--color-btn-danger-hover-counter-bg, rgba(255,255,255,0.2)))",
            "selectedText": "var(--button-danger-fgColor-active, var(--color-btn-danger-selected-text, #ffffff))",
            "selectedBg": "var(--button-danger-bgColor-active, var(--color-btn-danger-selected-bg, #914d04))",
            "selectedBorder": "var(--button-danger-borderColor-active, var(--color-btn-danger-selected-border, #ec8e2c))",
            "selectedShadow": "var(--button-danger-shadow-selected, var(--color-btn-danger-selected-shadow, 0 0 transparent))",
            "disabledText": "var(--button-danger-fgColor-disabled, var(--color-btn-danger-disabled-text, rgba(212,118,22,0.5)))",
            "disabledBg": "var(--button-danger-bgColor-disabled, var(--color-btn-danger-disabled-bg, #0d1117))",
            "disabledCounterBg": "var(--buttonCounter-danger-bgColor-disabled, var(--color-btn-danger-disabled-counter-bg, rgba(183,97,0,0.05)))",
            "counterBg": "var(--buttonCounter-danger-bgColor-rest, var(--color-btn-danger-counter-bg, rgba(51,28,4,0.2)))",
            "icon": "var(--button-danger-iconColor-rest, var(--color-btn-danger-icon, #d47616))",
            "counterFg": "var(--buttonCounter-danger-fgColor-rest, var(--color-btn-danger-counter-fg, (theme) => `var(--fgColor-danger, var(--color-danger-fg, ${(0, utils_v1_1.get)('scale.red.4')(theme)}))`))",
            "disabledCounterFg": "var(--buttonCounter-danger-fgColor-disabled, var(--color-btn-danger-disabled-counter-fg, var(--fgColor-danger, var(--color-danger-fg, rgba(212,118,22,0.5)))))",
            "hoverCounterFg": "var(--buttonCounter-danger-fgColor-hover, var(--color-btn-danger-hover-counter-fg, #ffffff))"
        },
        "inactive": {
            "bg": "var(--button-inactive-bgColor-rest, var(--color-btn-inactive-bg, #21262d))",
            "text": "var(--button-inactive-fgColor-rest, var(--color-btn-inactive-text, #8b949e))"
        }
    },
    "underlinenav": {
        "icon": "var(--underlineNav-iconColor-rest, var(--color-underlinenav-icon, (theme) => `var(--fgColor-muted, var(--color-fg-subtle, ${(0, utils_v1_1.get)('scale.gray.4')(theme)}))`))",
        "borderHover": "var(--underlineNav-borderColor-hover, var(--color-underlinenav-border-hover, (theme) => `var(--borderColor-neutral-muted, var(--color-neutral-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.4)(theme)}))`))"
    },
    "actionListItem": {
        "inlineDivider": "var(--borderColor-muted, var(--color-action-list-item-inline-divider, var(--borderColor-default, var(--color-border-default, rgba(48,54,61,0.48)))))",
        "default": {
            "hoverBg": "var(--control-transparent-bgColor-hover, var(--color-action-list-item-default-hover-bg, rgba(177,186,196,0.12)))",
            "hoverBorder": "var(--control-transparent-borderColor-hover, var(--color-action-list-item-default-hover-border, transparent))",
            "activeBg": "var(--control-transparent-bgColor-active, var(--color-action-list-item-default-active-bg, rgba(177,186,196,0.2)))",
            "activeBorder": "var(--control-transparent-borderColor-active, var(--color-action-list-item-default-active-border, transparent))",
            "selectedBg": "var(--control-transparent-bgColor-selected, var(--color-action-list-item-default-selected-bg, rgba(177,186,196,0.08)))"
        },
        "danger": {
            "hoverBg": "var(--control-danger-bgColor-hover, var(--color-action-list-item-danger-hover-bg, rgba(212,118,22,0.16)))",
            "activeBg": "var(--control-danger-bgColor-active, var(--color-action-list-item-danger-active-bg, rgba(212,118,22,0.24)))",
            "hoverText": "var(--control-danger-fgColor-hover, var(--color-action-list-item-danger-hover-text, #ec8e2c))"
        }
    },
    "switchTrack": {
        "bg": "var(--controlTrack-bgColor-rest, var(--color-switch-track-bg, (theme) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.1)(theme)}))`))",
        "hoverBg": "var(--controlTrack-bgColor-hover, var(--color-switch-track-hover-bg, var(--bgColor-neutral-muted, var(--color-neutral-subtle, hsla(215,8%,72%,0.1)))))",
        "activeBg": "var(--controlTrack-bgColor-active, var(--color-switch-track-active-bg, (theme) => `var(--borderColor-neutral-muted, var(--color-neutral-muted, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.4)(theme)}))`))",
        "disabledBg": "var(--controlTrack-bgColor-disabled, var(--color-switch-track-disabled-bg, #21262d))",
        "fg": "var(--controlTrack-fgColor-rest, var(--color-switch-track-fg, (obj) => (0, get_1.default)(obj, path)))",
        "disabledFg": "var(--controlTrack-fgColor-disabled, var(--color-switch-track-disabled-fg, #010409))",
        "border": "var(--controlTrack-borderColor-rest, var(--color-switch-track-border, transparent))",
        "checked": {
            "bg": "var(--control-checked-bgColor-rest, var(--color-switch-track-checked-bg, rgba(31,111,235,0.35)))",
            "hoverBg": "var(--control-checked-bgColor-hover, var(--color-switch-track-checked-hover-bg, rgba(31,111,235,0.5)))",
            "activeBg": "var(--control-checked-bgColor-active, var(--color-switch-track-checked-active-bg, rgba(31,111,235,0.65)))",
            "fg": "var(--control-checked-fgColor-rest, var(--color-switch-track-checked-fg, (theme) => `var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, ${(0, utils_v1_1.get)('scale.white')(theme)}))`))",
            "disabledFg": "var(--control-checked-fgColor-disabled, var(--color-switch-track-checked-disabled-fg, #010409))",
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
            "border": "var(--controlKnob-borderColor-checked, var(--color-switch-knob-checked-border, rgba(31,111,235,0.35)))"
        }
    },
    "segmentedControl": {
        "bg": "var(--controlTrack-bgColor-rest, var(--color-segmented-control-bg, (theme) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${(0, utils_v1_1.alpha)((0, utils_v1_1.get)('scale.gray.4'), 0.1)(theme)}))`))",
        "button": {
            "bg": "var(--controlKnob-bgColor-rest, var(--color-segmented-control-button-bg, (theme) => `var(--bgColor-default, var(--color-canvas-default, ${(0, utils_v1_1.get)('scale.gray.9')(theme)}))`))",
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
            "fill": "var(--treeViewItem-leadingVisual-bgColor-rest, var(--color-tree-view-item-directory-fill, (obj) => (0, get_1.default)(obj, path)))"
        }
    },
    "fg": {
        "default": "#c9d1d9",
        "muted": "#8b949e",
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
        "fg": "#58a6ff",
        "emphasis": "var(--bgColor-accent-emphasis, var(--color-accent-emphasis, #1f6feb))",
        "muted": "var(--borderColor-accent-muted, var(--color-accent-muted, rgba(56,139,253,0.4)))",
        "subtle": "var(--bgColor-accent-muted, var(--color-accent-subtle, rgba(56,139,253,0.1)))"
    },
    "success": {
        "fg": "var(--fgColor-success, var(--color-success-fg, #58a6ff))",
        "emphasis": "var(--bgColor-success-emphasis, var(--color-success-emphasis, #1f6feb))",
        "muted": "var(--borderColor-success-muted, var(--color-success-muted, rgba(56,139,253,0.4)))",
        "subtle": "var(--bgColor-success-muted, var(--color-success-subtle, rgba(56,139,253,0.15)))"
    },
    "attention": {
        "fg": "var(--fgColor-attention, var(--color-attention-fg, #d29922))",
        "emphasis": "var(--bgColor-attention-emphasis, var(--color-attention-emphasis, #9e6a03))",
        "muted": "var(--borderColor-attention-muted, var(--color-attention-muted, rgba(187,128,9,0.4)))",
        "subtle": "var(--bgColor-attention-muted, var(--color-attention-subtle, rgba(187,128,9,0.15)))"
    },
    "severe": {
        "fg": "var(--fgColor-severe, var(--color-severe-fg, #d47616))",
        "emphasis": "var(--bgColor-severe-emphasis, var(--color-severe-emphasis, #b76100))",
        "muted": "var(--borderColor-severe-muted, var(--color-severe-muted, rgba(212,118,22,0.4)))",
        "subtle": "var(--bgColor-severe-muted, var(--color-severe-subtle, rgba(212,118,22,0.1)))"
    },
    "danger": {
        "fg": "var(--fgColor-danger, var(--color-danger-fg, #d47616))",
        "emphasis": "var(--borderColor-danger-emphasis, var(--color-danger-emphasis, #b76100))",
        "muted": "var(--borderColor-danger-muted, var(--color-danger-muted, rgba(212,118,22,0.4)))",
        "subtle": "var(--bgColor-danger-muted, var(--color-danger-subtle, rgba(212,118,22,0.1)))"
    },
    "open": {
        "fg": "#ec8e2c",
        "emphasis": "#b76100",
        "muted": "rgba(212,118,22,0.4)",
        "subtle": "rgba(212,118,22,0.15)"
    },
    "closed": {
        "fg": "#8b949e",
        "emphasis": "#6e7681",
        "muted": "rgba(110,118,129,0.4)",
        "subtle": "rgba(110,118,129,0.1)"
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
            "#ffe2bb",
            "#ffc981",
            "#fdac54",
            "#ec8e2c",
            "#d47616",
            "#b76100",
            "#914d04",
            "#6c3906",
            "#4e2906",
            "#331c04"
        ],
        "red": [
            "#ffe2bb",
            "#ffc981",
            "#fdac54",
            "#ec8e2c",
            "#d47616",
            "#b76100",
            "#914d04",
            "#6c3906",
            "#4e2906",
            "#331c04"
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
