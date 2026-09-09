# Color scale calibration targets

## Status

| Stage    | Status |
| -------- | ------ |
| Approved | ✅     |
| Adopted  | ✅     |

## Context

When adding or calibrating a base color scale, we need a single markdown reference that matches the Storybook contrast overlay. This document records the exact overlay references and the current contrast shape of the base scales so an AI can rebuild the scales even if the hue changes.

Two groups of scales are defined separately because they serve different WCAG criteria:

- **Neutral scale**: UI-only. Targets WCAG 2.1 §1.4.11 non-text contrast (≥ 3:1). Steps are calibrated as backgrounds and borders, not text/icon colors. See ADR-003.
- **All other base color scales** (`gray` plus the 18 chromatic hue scales): Calibrated to preserve the same per-step contrast envelope across the Storybook overlay references even when the hue changes.

Storybook overlay references per theme:

| Theme    | `fgColor-default` | `fgColor-muted` | `bgColor-default` | `bgColor-muted` | `borderColor-default` |
| -------- | ----------------- | --------------- | ----------------- | --------------- | --------------------- |
| Light    | `#1f2328`         | `#59636e`       | `#ffffff`         | `#f6f8fa`       | `#dae0e7`             |
| Dark     | `#f0f6fc`         | `#8c97a6`       | `#0d1117`         | `#151b23`       | `#3d444d`             |
| Light HC | `#010409`         | `#454c54`       | `#ffffff`         | `#e6eaef`       | `#454c54`             |
| Dark HC  | `#ffffff`         | `#8c97a6`       | `#010409`         | `#151b23`       | `#8c97a6`             |

---

## Decision

### Tolerance convention

- **Neutral**: match the exact per-theme values below unless you intentionally change the neutral anchors.
- **All other base scales**: preserve the per-step contrast envelope below. Hue may change; the contrast profile should not.
- **Threshold steps** still matter most:
  - step 6 = border / non-text threshold territory
  - step 7+ = text-capable territory in default themes
  - HC ramps stay tighter and steeper than default themes

---

## Neutral scale

> The neutral scale is UI-only. Use it to rebuild page, surface, and border progression. Do not treat it as the chromatic text ramp.

| Theme    | Step | Hex       | vs `fgColor-default` | vs `fgColor-muted` | vs `bgColor-default` | vs `bgColor-muted` | vs `borderColor-default` |
| -------- | ---- | --------- | -------------------- | ------------------ | -------------------- | ------------------ | ------------------------ |
| Light    | 0    | `#ffffff` | 15.8                 | 6.1                | 1                    | 1.1                | 1.3                      |
| Light    | 1    | `#f6f8fa` | 14.8                 | 5.7                | 1.1                  | 1                  | 1.2                      |
| Light    | 2    | `#eff2f5` | 14.1                 | 5.4                | 1.1                  | 1.1                | 1.2                      |
| Light    | 3    | `#e6eaef` | 13.1                 | 5.1                | 1.2                  | 1.1                | 1.1                      |
| Light    | 4    | `#dae0e7` | 11.9                 | 4.6                | 1.3                  | 1.2                | 1                        |
| Light    | 5    | `#c8d1da` | 10.2                 | 4                  | 1.5                  | 1.5                | 1.2                      |
| Light    | 6    | `#818b98` | 4.6                  | 1.8                | 3.5                  | 3.2                | 2.6                      |
| Light    | 7    | `#59636e` | 2.6                  | 1                  | 6.1                  | 5.7                | 4.6                      |
| Light    | 8    | `#454c54` | 1.8                  | 1.4                | 8.7                  | 8.2                | 6.5                      |
| Light    | 9    | `#393f46` | 1.5                  | 1.7                | 10.6                 | 10                 | 8                        |
| Light    | 10   | `#25292e` | 1.1                  | 2.4                | 14.6                 | 13.7               | 11                       |
| Light    | 11   | `#1f2328` | 1                    | 2.6                | 15.8                 | 14.8               | 11.9                     |
| Dark     | 0    | `#010409` | 18.9                 | 6.9                | 1.1                  | 1.2                | 2.1                      |
| Dark     | 1    | `#0d1117` | 17.4                 | 6.4                | 1                    | 1.1                | 1.9                      |
| Dark     | 2    | `#151b23` | 15.9                 | 5.8                | 1.1                  | 1                  | 1.8                      |
| Dark     | 3    | `#212830` | 13.7                 | 5                  | 1.3                  | 1.2                | 1.5                      |
| Dark     | 4    | `#2a323c` | 11.9                 | 4.4                | 1.5                  | 1.3                | 1.3                      |
| Dark     | 5    | `#3d444d` | 9                    | 3.3                | 1.9                  | 1.8                | 1                        |
| Dark     | 6    | `#606c7b` | 4.9                  | 1.8                | 3.5                  | 3.2                | 1.8                      |
| Dark     | 7    | `#8c97a6` | 2.7                  | 1                  | 6.4                  | 5.8                | 3.3                      |
| Dark     | 8    | `#b7bfc8` | 1.7                  | 1.6                | 10.2                 | 9.3                | 5.3                      |
| Dark     | 9    | `#d1d8e0` | 1.3                  | 2.1                | 13.2                 | 12                 | 6.9                      |
| Dark     | 10   | `#f0f6fc` | 1                    | 2.7                | 17.4                 | 15.9               | 9                        |
| Dark     | 11   | `#ffffff` | 1.1                  | 3                  | 18.9                 | 17.3               | 9.8                      |
| Light HC | 0    | `#ffffff` | 20.5                 | 8.7                | 1                    | 1.2                | 8.7                      |
| Light HC | 1    | `#f6f8fa` | 19.3                 | 8.2                | 1.1                  | 1.1                | 8.2                      |
| Light HC | 2    | `#eff2f5` | 18.3                 | 7.7                | 1.1                  | 1.1                | 7.7                      |
| Light HC | 3    | `#e6eaef` | 17                   | 7.2                | 1.2                  | 1                  | 7.2                      |
| Light HC | 4    | `#dae0e7` | 15.4                 | 6.5                | 1.3                  | 1.1                | 6.5                      |
| Light HC | 5    | `#c8d1da` | 13.3                 | 5.6                | 1.5                  | 1.3                | 5.6                      |
| Light HC | 6    | `#818b98` | 5.9                  | 2.5                | 3.5                  | 2.9                | 2.5                      |
| Light HC | 7    | `#59636e` | 3.4                  | 1.4                | 6.1                  | 5.1                | 1.4                      |
| Light HC | 8    | `#454c54` | 2.4                  | 1                  | 8.7                  | 7.2                | 1                        |
| Light HC | 9    | `#393f46` | 1.9                  | 1.2                | 10.6                 | 8.8                | 1.2                      |
| Light HC | 10   | `#25292e` | 1.4                  | 1.7                | 14.6                 | 12.1               | 1.7                      |
| Light HC | 11   | `#010409` | 1                    | 2.4                | 20.5                 | 17                 | 2.4                      |
| Dark HC  | 0    | `#010409` | 20.5                 | 11.1               | 1                    | 1.2                | 11.1                     |
| Dark HC  | 1    | `#0d1117` | 18.9                 | 10.2               | 1.1                  | 1.1                | 10.2                     |
| Dark HC  | 2    | `#151b23` | 17.3                 | 9.3                | 1.2                  | 1                  | 9.3                      |
| Dark HC  | 3    | `#212830` | 14.9                 | 8                  | 1.4                  | 1.2                | 8                        |
| Dark HC  | 4    | `#2a323c` | 13                   | 7                  | 1.6                  | 1.3                | 7                        |
| Dark HC  | 5    | `#3d444d` | 9.8                  | 5.3                | 2.1                  | 1.8                | 5.3                      |
| Dark HC  | 6    | `#606c7b` | 5.3                  | 2.9                | 3.8                  | 3.2                | 2.9                      |
| Dark HC  | 7    | `#8c97a6` | 3                    | 1.6                | 6.9                  | 5.8                | 1.6                      |
| Dark HC  | 8    | `#b7bfc8` | 1.9                  | 1                  | 11.1                 | 9.3                | 1                        |
| Dark HC  | 9    | `#d1d8e0` | 1.4                  | 1.3                | 14.3                 | 12                 | 1.3                      |
| Dark HC  | 10   | `#f0f6fc` | 1.1                  | 1.7                | 18.9                 | 15.9               | 1.7                      |
| Dark HC  | 11   | `#ffffff` | 1                    | 1.9                | 20.5                 | 17.3               | 1.9                      |

---

## Impact

## All other base color scales

> This table is the rebuild envelope for the 19 non-neutral scales currently shown in Storybook (`gray` plus the chromatic hues). Keep each rebuilt hue inside the same step band unless there is an intentional contrast-model change.

| Theme    | Step | Scale count | vs `fgColor-default` | vs `fgColor-muted` | vs `bgColor-default` | vs `bgColor-muted` | vs `borderColor-default` |
| -------- | ---- | ----------- | -------------------- | ------------------ | -------------------- | ------------------ | ------------------------ |
| Light    | 0    | 19          | 14.5–15.6            | 5.6–6.1            | 1–1.1                | 1–1.1              | 1.2–1.3                  |
| Light    | 1    | 19          | 13.8–15.5            | 5.3–6              | 1–1.1                | 1–1.1              | 1.2–1.3                  |
| Light    | 2    | 19          | 13.1–14.7            | 5.1–5.7            | 1.1–1.2              | 1–1.1              | 1.1–1.2                  |
| Light    | 3    | 19          | 11.1–12.1            | 4.3–4.7            | 1.3–1.4              | 1.2–1.3            | 1–1.1                    |
| Light    | 4    | 19          | 8.3–9.5              | 3.2–3.7            | 1.7–1.9              | 1.6–1.8            | 1.3–1.4                  |
| Light    | 5    | 19          | 6.4–7                | 2.5–2.7            | 2.2–2.5              | 2.1–2.3            | 1.7–1.9                  |
| Light    | 6    | 19          | 4.5–5                | 1.8–1.9            | 3.1–3.5              | 3–3.3              | 2.4–2.6                  |
| Light    | 7    | 19          | 2.6–3.3              | 1–1.3              | 4.9–6.1              | 4.6–5.7            | 3.7–4.6                  |
| Light    | 8    | 19          | 1.8–2.7              | 1–1.4              | 5.9–8.7              | 5.6–8.1            | 4.4–6.5                  |
| Light    | 9    | 19          | 1.5–2.1              | 1.2–1.7            | 7.6–10.6             | 7.1–10             | 5.7–8                    |
| Light    | 10   | 19          | 1.1–1.6              | 1.6–2.4            | 9.7–14.7             | 9.1–13.8           | 7.3–11                   |
| Light    | 11   | 19          | 1–1.2                | 2.1–2.6            | 12.9–15.9            | 12.1–15            | 9.7–12                   |
| Dark     | 0    | 19          | 17–18.3              | 6.3–6.7            | 1–1.1                | 1.1                | 1.9–2                    |
| Dark     | 1    | 19          | 15.2–17.1            | 5.6–6.3            | 1–1.1                | 1–1.1              | 1.7–1.9                  |
| Dark     | 2    | 19          | 12.8–15              | 4.7–5.5            | 1.2–1.4              | 1.1–1.2            | 1.4–1.7                  |
| Dark     | 3    | 19          | 9.7–12               | 3.6–4.4            | 1.4–1.8              | 1.3–1.6            | 1.1–1.3                  |
| Dark     | 4    | 19          | 7.5–9                | 2.8–3.3            | 1.9–2.3              | 1.8–2.1            | 1–1.2                    |
| Dark     | 5    | 19          | 5.5–6.1              | 2–2.2              | 2.9–3.2              | 2.6–2.9            | 1.5–1.6                  |
| Dark     | 6    | 19          | 3.2–4.3              | 1.2–1.6            | 4.1–5.5              | 3.7–5              | 2.1–2.8                  |
| Dark     | 7    | 19          | 1.8–3.1              | 1–1.5              | 5.6–9.7              | 5.1–8.9            | 2.9–5.1                  |
| Dark     | 8    | 19          | 1.4–2.3              | 1.2–1.9            | 7.4–12.3             | 6.8–11.3           | 3.9–6.4                  |
| Dark     | 9    | 19          | 1.2–1.8              | 1.5–2.3            | 9.7–14.9             | 8.9–13.6           | 5.1–7.7                  |
| Dark     | 10   | 19          | 1.1–1.4              | 1.9–2.4            | 12–15.4              | 11–14              | 6.2–8                    |
| Dark     | 11   | 19          | 1.1–1.2              | 2.2–2.6            | 14.3–16.5            | 13.1–15.1          | 7.5–8.6                  |
| Light HC | 0    | 19          | 20.3–20.4            | 8.6                | 1                    | 1.2                | 8.6                      |
| Light HC | 1    | 19          | 18.6–18.7            | 7.9                | 1.1                  | 1.1                | 7.9                      |
| Light HC | 2    | 19          | 17–17.2              | 7.2–7.3            | 1.2                  | 1                  | 7.2–7.3                  |
| Light HC | 3    | 19          | 13.3–13.4            | 5.6–5.7            | 1.5                  | 1.3                | 5.6–5.7                  |
| Light HC | 4    | 19          | 9.2–9.3              | 3.9–4              | 2.2                  | 1.8                | 3.9–4                    |
| Light HC | 5    | 19          | 6.1–6.2              | 2.6                | 3.3–3.4              | 2.8                | 2.6                      |
| Light HC | 6    | 19          | 4                    | 1.7                | 5.1                  | 4.2–4.3            | 1.7                      |
| Light HC | 7    | 19          | 2.5–2.6              | 1.1                | 8–8.1                | 6.7                | 1.1                      |
| Light HC | 8    | 19          | 2                    | 1.2                | 10.1–10.3            | 8.4–8.5            | 1.2                      |
| Light HC | 9    | 19          | 1.6–1.7              | 1.4                | 12.4–12.6            | 10.2–10.4          | 1.4                      |
| Light HC | 10   | 19          | 1.4                  | 1.7                | 14.5–14.6            | 12–12.1            | 1.7                      |
| Light HC | 11   | 19          | 1.2                  | 1.9                | 16.8–16.9            | 13.9–14            | 1.9                      |
| Dark HC  | 0    | 19          | 16.7–16.9            | 9–9.1              | 1.2                  | 1                  | 9–9.1                    |
| Dark HC  | 1    | 19          | 12.2–12.4            | 6.6–6.7            | 1.6–1.7              | 1.4                | 6.6–6.7                  |
| Dark HC  | 2    | 19          | 7.4–7.6              | 4–4.1              | 2.7–2.8              | 2.3                | 4–4.1                    |
| Dark HC  | 3    | 19          | 5.7                  | 3–3.1              | 3.6                  | 3–3.1              | 3–3.1                    |
| Dark HC  | 4    | 19          | 4.3–4.4              | 2.3–2.4            | 4.7                  | 3.9–4              | 2.3–2.4                  |
| Dark HC  | 5    | 19          | 3.4                  | 1.8                | 6–6.1                | 5–5.1              | 1.8                      |
| Dark HC  | 6    | 19          | 2.8                  | 1.5                | 7.3–7.4              | 6.1–6.3            | 1.5                      |
| Dark HC  | 7    | 19          | 2.4                  | 1.3                | 8.4–8.5              | 7.1–7.2            | 1.3                      |
| Dark HC  | 8    | 19          | 2.1                  | 1.1                | 9.6–9.8              | 8.1–8.2            | 1.1                      |
| Dark HC  | 9    | 19          | 1.7                  | 1.1                | 11.8–12              | 10–10.1            | 1.1                      |
| Dark HC  | 10   | 19          | 1.4–1.5              | 1.3                | 14–14.2              | 11.8–12            | 1.3                      |
| Dark HC  | 11   | 19          | 1.2–1.3              | 1.5                | 16.2–16.5            | 13.7–13.9          | 1.5                      |

### How to use this when rebuilding

- **Neutral**: treat the table as exact. If the neutral anchors move, regenerate the whole table.
- **All other base scales**: pick any hue, then rebuild the 12-step ramp so each step lands inside the row for that theme and step.
- **Do not copy exact hexes across hues**; copy the contrast shape.
- **If a step misses multiple columns**, prioritize `bgColor-default`, `bgColor-muted`, and `borderColor-default` first for steps 0–6, then `fgColor-muted` / `fgColor-default` from step 7 upward.
- **If Storybook overlay references change**, regenerate the tables before recalibrating the scales.
