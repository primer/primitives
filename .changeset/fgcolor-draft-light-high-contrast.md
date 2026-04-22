---
"@primer/primitives": patch
---

Update light-high-contrast fgColor.draft to custom hex value between neutral scale levels 10 and 11

Lightens the draft state icon color in the light high-contrast theme from `{base.color.neutral.11}` (#393F46) to a custom value (#444B53) that is closer to the adjacent status colors in lightness while still clearing 7:1 contrast against all required backgrounds. This improves visual differentiation between draft (gray) and open/closed/done (green/red/purple) status icons in PR lists. Follows the same custom-hex approach used for fgColor.success, fgColor.danger, and fgColor.done in PR #1346.
