---
'@primer/primitives': major
---

Expand display color scale from 10 to 12 steps (0–11) and add 11 new hues with high-contrast calibration.

- **Breaking**: Display base color scale remapped from steps 0–9 (mapped to base 2–11) to steps 0–11 (mapped to base 0–11). Any code referencing display scale steps by index will need to be updated.
- Add 11 new hues to all base color scales and display/label functional tokens: auburn, brown, lemon, olive, lime, pine, teal, cyan, indigo, plum, coral.
- Calibrate light high-contrast base color steps to a consistent WCAG contrast ratio profile vs white (s0=1.01 → s11=16.86:1 across all 19 hues).
- Calibrate dark high-contrast base color steps to the inverted CR profile vs black (s11=1.01 → s0=16.86:1 across all 19 hues).
- Add label `borderColor` tokens and light/dark HC overrides for all 19 hues.
- Migrate `label.json5` component tokens from `base.display.color.*` references to direct `base.color.*` references.
