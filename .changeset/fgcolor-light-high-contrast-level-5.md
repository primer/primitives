---
"@primer/primitives": patch
---

Update light-high-contrast fgColor tokens to custom hex values between scale levels 5 and 6

Improves visual differentiation between status colors (open/closed/done) in the light high-contrast theme. The three affected tokens (fgColor.success, fgColor.danger, fgColor.done) previously resolved to base color scale level 6, making them too dark and visually indistinct. No single scale step satisfies both the 7:1 contrast minimum and chromatic distinction, so custom hex values interpolated between levels 5 and 6 are used instead, following the precedent set by dark high-contrast theme overrides.
