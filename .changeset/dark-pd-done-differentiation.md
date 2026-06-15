---
'@primer/primitives': minor
---

Differentiate `fgColor.done` from `fgColor.upsell` in the dark protanopia & deuteranopia theme.

Previously both resolved to the same purple (`base.color.purple.4` / `#AB7DF8`), making status indicators using `done` (e.g. closed-as-completed issues, merged PRs) visually indistinguishable from indicators using `upsell` (often used for "in progress" promotional UI). Under deutan/protan simulation, purple also collapses toward the same hue as `open`, `success`, and `attention`, leaving no perceptually safe chromatic slot for `done`.

- `fgColor.done` in `dark-protanopia-deuteranopia` now resolves to `base.color.neutral.10` (`#B7BDC8`), one step brighter than `fgColor.closed` / `fgColor.muted` (`neutral.9`) so the two neutral-coded states stay distinguishable by lightness.
- `fgColor.upsell` in `dark-protanopia-deuteranopia` is pinned to `base.color.purple.4` so promotional content keeps its purple, independent of the `done` change.

The high-contrast variant of this theme is unchanged in this release because the available neutral scale slots are already occupied (`closed`, `draft`, and body text); a separate fix is being scoped for HC.
