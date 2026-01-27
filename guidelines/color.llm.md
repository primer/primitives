# Color Guidelines

How to use color tokens correctly for accessible, themeable interfaces.

## Pairing Rules

- MUST use `--fgColor-onEmphasis` for text on any `-emphasis` background
- MUST use `--fgColor-{semantic}` for text on any `-muted` background
- MUST use `--fgColor-default` for text on `--bgColor-default` or `--bgColor-muted`
- NEVER pair `--fgColor-muted` with `--bgColor-muted` (insufficient contrast)

## Contrast Requirements

- MUST ensure 4.5:1 contrast ratio for normal text (WCAG AA)
- MUST ensure 3:1 contrast ratio for large text and UI components
- SHOULD use semantic token pairings which are pre-validated for contrast
