---
"@primer/primitives": patch
---

Consolidate focus outline tokens into `src/tokens/component/focus.json5` with consistent kebab-case naming (`focus-outline-color`, `focus-outline-width`, `focus-outline-offset`). Deprecated aliases for the old names are included for backward compatibility.

Route focus dimension tokens (`--focus-outline-width`, `--focus-outline-offset`, `--outline-focus-offset`, `--outline-focus-width`) to `css/functional/size/border.css` instead of theme CSS files, since these values are static and don't vary by theme.
