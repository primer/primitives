---
"@primer/primitives": patch
---

Update light-high-contrast fgColor tokens from base color scale level 6 to level 5

Improves visual differentiation between status colors in the light high-contrast theme. The seven affected tokens (fgColor.accent, fgColor.success, fgColor.attention, fgColor.severe, fgColor.danger, fgColor.done, fgColor.sponsors) were previously resolving to scale level 6, making them too dark and visually indistinct from one another. Moving to level 5 produces lighter, more saturated colors that are easier to tell apart while maintaining contrast ratios well above the 7:1 minimum required for high contrast themes.

Resolves github/accessibility-external#1607
