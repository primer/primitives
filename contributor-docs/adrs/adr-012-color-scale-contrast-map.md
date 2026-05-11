# Color scale contrast map

## Status

| Stage    | Status |
| -------- | ------ |
| Approved | ✅     |
| Adopted  | ✅     |

## Context

Each color scale has 12 steps (0–11). The purpose of a step — background, border, text — depends on which WCAG contrast thresholds it meets against the functional tokens that anchor the light and dark modes.

This ADR documents the contrast profile of each step so contributors can quickly determine which steps are appropriate for which roles, without having to manually calculate ratios.

## Decision

### How to read the table

Each table column answers the question: *"If I place this step as a foreground color on that background (or vice versa), does it pass?"*

| Column | Reference color (light mode) | Use case |
| --- | --- | --- |
| vs `fgColor-default` | `#000000` (black) | Step used **as a background** with default text on top |
| vs `bgColor-default` | `#ffffff` (white) | Step used **as text / icon / border** on the page background |
| vs `bgColor-muted` | `#f6f8fa` (neutral.1) | Step used **as text / icon / border** on the muted background |
| vs `fgColor-muted` | `#59636e` (neutral.7) | Step used **as a background** with muted text on top |
| vs step 1 | scale step 1 | Step used **as text / border** on a scale-tinted muted background |

Contrast ratios are approximate (±10–15% depending on hue). Neutral and blue scales produce nearly identical values at every step, so a single table covers both.

Thresholds follow [WCAG 2.1](https://www.w3.org/TR/WCAG21/):
- **≥4.5:1** — normal text, icons (`AA`)
- **≥3:1** — large text, UI component borders, focus rings (`AA large`)

### Scale structure

All scales now share a unified 12-step structure:

| Group | Scales | Steps | Step 0 |
| --- | --- | --- | --- |
| **All scales** | `neutral`, `blue`, `green`, `yellow`, `orange`, `red`, `purple`, `pink`, `coral` | 12 (0–11) | Pure white (`#ffffff`) |

### Light mode — all scales (12 steps)

> Values shown as `~ratio · ≥4.5:1 · ≥3:1`. Neutral and blue produce nearly identical values at every step. Hue scales (green, yellow, orange, red, purple, pink, coral) vary ±10–15% due to perceptual luminance differences, but land at the same threshold steps.

| Step | vs `fgColor-default` | vs `bgColor-default` | vs `bgColor-muted` | vs `fgColor-muted` | vs step 1 |
| ---- | :------------------: | :------------------: | :----------------: | :----------------: | :-------: |
|      | ~ratio · ≥4.5        | ~ratio · ≥4.5 · ≥3   | ~ratio · ≥4.5 · ≥3 | ~ratio · ≥4.5 · ≥3 | ~ratio · ≥4.5 · ≥3 |
| 0    | ~21 · ✅              | ~1 · ❌ · ❌           | ~1 · ❌ · ❌         | ~6 · ✅ · ✅         | ~1 · ❌ · ❌ |
| 1    | ~20 · ✅              | ~1 · ❌ · ❌           | ~1 · ❌ · ❌         | ~6 · ✅ · ✅         | ~1 · ❌ · ❌ |
| 2    | ~19 · ✅              | ~1 · ❌ · ❌           | ~1 · ❌ · ❌         | ~5 · ✅ · ✅         | ~1 · ❌ · ❌ |
| 3    | ~17 · ✅              | ~1 · ❌ · ❌           | ~1 · ❌ · ❌         | ~5 · ✅ · ✅         | ~1 · ❌ · ❌ |
| 4    | ~16 · ✅              | ~1 · ❌ · ❌           | ~1 · ❌ · ❌         | ~5 · ✅ · ✅         | ~1 · ❌ · ❌ |
| 5    | ~14 · ✅              | ~2 · ❌ · ❌           | ~1 · ❌ · ❌         | ~4 · ❌ · ✅         | ~1 · ❌ · ❌ |
| 6    | ~6 · ✅               | ~3 · ❌ · ✅           | ~3 · ❌ · ✅         | ~2 · ❌ · ❌         | ~3 · ❌ · ✅ |
| 7    | ~3 · ❌               | ~6 · ✅ · ✅           | ~6 · ✅ · ✅         | ~1 · ❌ · ❌         | ~6 · ✅ · ✅ |
| 8    | ~2 · ❌               | ~9 · ✅ · ✅           | ~8 · ✅ · ✅         | ~1 · ❌ · ❌         | ~8 · ✅ · ✅ |
| 9    | ~2 · ❌               | ~11 · ✅ · ✅          | ~10 · ✅ · ✅        | ~2 · ❌ · ❌         | ~10 · ✅ · ✅ |
| 10   | ~1 · ❌               | ~15 · ✅ · ✅          | ~14 · ✅ · ✅        | ~2 · ❌ · ❌         | ~14 · ✅ · ✅ |
| 11   | ~1 · ❌               | ~21 · ✅ · ✅          | ~20 · ✅ · ✅        | ~3 · ❌ · ✅         | ~20 · ✅ · ✅ |

### Key thresholds

All scales share the same thresholds at the same step numbers:

| Role | Step | Notes |
| --- | :---: | --- |
| Background for `fgColor-default` text | steps 0–6 | All clear 4.5:1 vs. black |
| Background for `fgColor-muted` text | steps 0–4 | Step 5 clears only 3:1 |
| Border (3:1 threshold) | **step 6** | First step to clear 3:1 UI component threshold |
| Text / icon (4.5:1 threshold) | **step 7** | First step to clear full WCAG AA |
| Text / icon on step 1 bg (4.5:1) | **step 7** | Step 1 is close to `bgColor-muted` in lightness |

### Dark mode — scale direction

In **light mode**, all scales run from lightest (step 0 = white) to darkest (step 11). In **dark mode**, the direction differs by scale group:

| Group | Scales | Dark step 0 | Dark step 11 |
| --- | --- | --- | --- |
| **Neutral, blue** | `neutral`, `blue` | Darkest (near-black, ~7–10%L) | Lightest (~97%L) |
| **Hue scales** | `green`, `yellow`, `orange`, `red`, `purple`, `pink`, `coral` | Lightest (vivid, ~74–93%L) | Darkest (~5–20%L) |

> Note: The hue scales in dark mode retain 0=lightest convention from the original design. Neutral and blue were aligned to 0=darkest to match the dark-mode backgrounds. This inconsistency may be resolved in a future revision.

The same contrast relationships hold in dark mode, but the step-to-role mapping flips for neutral/blue:

| Role | Light mode | Dark mode (neutral/blue) |
| --- | --- | --- |
| Background steps | 0–5 (lightest) | 0–5 (darkest) |
| Border step (≥3:1) | step 6 | step 6 |
| Text / icon steps (≥4.5:1) | 7–11 (darkest) | 7–11 (lightest) |

In practice: when writing a dark-mode override for a neutral/blue token that references step 9 in light mode, the corresponding dark-mode color is a **low-numbered step** (e.g. step 2 or 3).

### Impact

**All scales (12 steps, 0 = white in light mode):**
- Steps 0–5 are background-only in light mode. Avoid using them as text or border colors.
- Step 6 is the transition step: suitable for borders and large-text only (≥3:1), not normal text.
- Steps 7–11 are suitable as text, icon, or border colors on any light background.
- Steps 0–4 are light enough for `fgColor-muted` text to pass 4.5:1.
- Actual contrast ratios vary ±10–15% by hue due to perceptual luminance differences. Always verify specific pairings before relying on them for accessibility compliance.
