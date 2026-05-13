# Color scale calibration targets

## Status

| Stage    | Status  |
| -------- | ------- |
| Approved | ✅      |
| Adopted  | ✅      |

## Context

When adding or calibrating a new color scale, there is no single document specifying the exact contrast ratio each step should produce against the reference colors used in accessibility testing. ADR-012 documents the approximate profile; this ADR records the exact calibration targets — one decimal precision with an allowed tolerance — that each step must land within.

Two groups of scales are defined separately because they serve different WCAG criteria:

- **Neutral scale**: UI-only. Targets WCAG 2.1 §1.4.11 non-text contrast (≥ 3:1). Steps are calibrated as backgrounds and borders, not text/icon colors. See ADR-003.
- **Hue scales** (`blue`, `green`, `red`, `purple`, `pink`, `orange`, `yellow`, `coral`, and the 11 new hues): Calibrated to support text/icon use (≥ 4.5:1) at steps 7+ and background/border use at lower steps.

Reference colors per theme:

| Theme         | `bgColor-default`           | `bgColor-muted`             | `fgColor-muted`             |
| ------------- | --------------------------- | --------------------------- | --------------------------- |
| Light         | `#ffffff` (white)           | `#f6f8fa` (neutral.1)       | `#59636e` (neutral.7)       |
| Dark          | `#0d1117` (neutral.1)       | `#151b23` (neutral.2)       | `#606c7b` (neutral.6)       |
| Light HC      | `#ffffff` (white)           | `#eff2f5` (neutral.2)       | —                           |
| Dark HC       | `#010409` (base-color-black) | `#151b23` (neutral.2)      | —                           |

---

## Decision

### Tolerance convention

- **General steps** (0–5, 8–11): ± 0.5
- **Threshold steps** (6 and 7): ± 0.2 — these must strictly clear their WCAG boundary (3:1 and 4.5:1 respectively)
- **HC steps** (all): ± 0.15 — HC scales follow a precise exponential CR profile; stay tight

---

## Neutral scale

> The neutral scale is for **UI use only** (backgrounds, borders, component states). It follows WCAG §1.4.11 non-text contrast (≥ 3:1), not text contrast (≥ 4.5:1). Neutral steps are not intended for use as text or icon colors — use `fgColor-*` functional tokens instead.

### Neutral — light mode

Reference: `bgColor-default` = `#ffffff`, `bgColor-muted` = `#f6f8fa`

| Step | Hex       | vs `bgColor-default` | vs `bgColor-muted` | vs `fgColor-muted` | Role                            |
| :--: | :-------- | :------------------: | :----------------: | :----------------: | :------------------------------ |
|  1   | `#f6f8fa` |        1.06          |       1.00         |       5.74         | page background (`bgColor-muted`) |
|  2   | `#eff2f5` |        1.12          |       1.06         |       5.44         | subtle bg, inset areas          |
|  3   | `#e6eaef` |        1.21          |       1.13         |       5.06         | hover bg                        |
|  4   | `#dae0e7` |        1.33          |       1.25         |       4.60         | active bg                       |
|  5   | `#c8d1da` |        1.55          |       1.45         |       3.96         | disabled bg                     |
|  6   | `#818b98` |        3.45          |       3.24         |       1.77         | **border min** (3:1 threshold)  |
|  7   | `#59636e` |        6.11          |       5.74         |       1.00         | `fgColor-muted` anchor          |
|  8   | `#454c54` |        8.70          |       8.17         |       1.42         | muted text (via functional token) |
|  9   | `#393f46` |       10.64          |      10.00         |       1.74         | default text (via functional token) |
|  10  | `#25292e` |       14.63          |      13.74         |       2.39         | bold/heading text (via functional token) |

> Step 0 = `#ffffff` (white) — no contrast to test.
> Step 11 = `#1f2328` (base-color-black) — not part of neutral steps, used as reference only.

### Neutral — dark mode

Reference: `bgColor-default` = `#0d1117` (neutral.1), `bgColor-muted` = `#151b23` (neutral.2)

| Step | Hex       | vs `bgColor-default` | vs `bgColor-muted` | vs `fgColor-muted` | Role                             |
| :--: | :-------- | :------------------: | :----------------: | :----------------: | :------------------------------- |
|  1   | `#0d1117` |        1.00          |       1.09         |       3.54         | `bgColor-default` anchor         |
|  2   | `#151b23` |        1.09          |       1.00         |       3.24         | `bgColor-muted` anchor           |
|  3   | `#212830` |        1.27          |       1.16         |       2.78         | subtle bg                        |
|  4   | `#2a323c` |        1.46          |       1.34         |       2.43         | hover bg                         |
|  5   | `#3d444d` |        1.92          |       1.76         |       1.84         | active/disabled bg               |
|  6   | `#606c7b` |        3.54          |       3.24         |       1.00         | **border min** (3:1 threshold); `fgColor-muted` anchor |
|  7   | `#8c97a6` |        6.39          |       5.85         |       1.81         | muted text (via functional token) |
|  8   | `#b7bfc8` |       10.18          |       9.32         |       2.88         | default text (via functional token) |
|  9   | `#d1d8e0` |       13.17          |      12.05         |       3.72         | bold text (via functional token) |
|  10  | `#f0f6fc` |       17.39          |      15.91         |       4.91         | maximum contrast                 |

---

## Hue scales

### Hue scales — light mode

Reference: `bgColor-default` = `#ffffff`, `bgColor-muted` = `#f6f8fa`

Values are derived from the calibrated neutral/blue scales. Hue scales (green, red, purple, etc.) may vary ± 10–15% from these ratios at mid-range steps due to perceptual luminance differences, but must land at the same threshold steps.

| Step | vs `bgColor-default` (target) | vs `bgColor-muted` (target) | vs step 1 (target) | Notes                         |
| :--: | :---------------------------: | :-------------------------: | :----------------: | :---------------------------- |
|  0   |         ~1.0 – 1.1            |         ~1.0 – 1.1          |      1.0 – 1.1     | lightest; near-white          |
|  1   |         ~1.1 – 1.1            |         ~1.0 – 1.1          |       1.00         | scale-tinted muted bg         |
|  2   |         1.1 – 1.2             |         1.0 – 1.1           |       1.0 – 1.1    |                               |
|  3   |         1.2 – 1.4             |         1.1 – 1.3           |       1.1 – 1.4    |                               |
|  4   |         1.3 – 1.8             |         1.2 – 1.7           |       1.2 – 1.7    |                               |
|  5   |         1.5 – 2.5             |         1.4 – 2.3           |       1.4 – 2.3    |                               |
|  6   |   **≥ 3.0 and ≤ 3.8**        |   **≥ 2.9 and ≤ 3.5**      |  ≥ 2.9 and ≤ 3.5  | **must clear 3:1; must not clear 4.5:1** |
|  7   |   **≥ 4.5 and ≤ 7.0**        |   **≥ 4.3 and ≤ 6.5**      |  ≥ 4.3 and ≤ 6.5  | **first text-capable step**   |
|  8   |         7.0 – 10.0            |         6.5 – 9.5           |       6.5 – 9.5    |                               |
|  9   |         9.5 – 13.0            |         9.0 – 12.5          |       9.0 – 12.5   |                               |
|  10  |         12.0 – 17.0           |         11.5 – 16.5         |      11.5 – 16.5   |                               |
|  11  |         14.0 – 21.0           |         13.0 – 20.0         |      13.0 – 20.0   |                               |

### Hue scales — dark mode

Reference: `bgColor-default` = `#0d1117`, `bgColor-muted` = `#151b23`

| Step | vs `bgColor-default` (target) | vs `bgColor-muted` (target) | Notes                              |
| :--: | :---------------------------: | :-------------------------: | :--------------------------------- |
|  0   |         ~1.0 – 1.2            |         ~1.0 – 1.2          | darkest                            |
|  1   |         ~1.0 – 1.2            |         ~1.0 – 1.2          |                                    |
|  2   |         1.1 – 1.4             |         1.0 – 1.3           |                                    |
|  3   |         1.3 – 1.9             |         1.1 – 1.7           |                                    |
|  4   |         1.5 – 2.5             |         1.4 – 2.3           |                                    |
|  5   |         2.5 – 3.5             |         2.2 – 3.2           |                                    |
|  6   |   **≥ 3.5 and ≤ 5.0**        |   **≥ 3.1 and ≤ 4.5**      | **must clear 3:1 vs bgColor-muted** |
|  7   |   **≥ 5.0 and ≤ 7.5**        |   **≥ 4.5 and ≤ 7.0**      | **first text-capable step**         |
|  8   |         7.0 – 11.0            |         6.5 – 10.0          |                                    |
|  9   |         9.0 – 14.0            |         8.0 – 13.0          |                                    |
|  10  |         12.0 – 17.0           |         11.0 – 16.0         |                                    |
|  11  |         14.0 – 21.0           |         13.0 – 19.0         |                                    |

---

## High-contrast scales

HC scales have tighter tolerances (± 0.15) because they follow an explicit exponential CR profile to ensure reliable 7:1 text contrast across all functional token pairings.

### Dark HC hue scales

Reference: `bgColor-default` = `#010409` (base-color-black), `bgColor-muted` = `#151b23`

The per-step targets below were derived from the calibrated red/blue scales and represent the intended CR vs `#010409`. All 19 hue scales must hit these targets.

| Step | Target CR vs `#010409` | Allowed range       | Target CR vs `bgColor-muted` | Allowed range      |
| :--: | :--------------------: | :-----------------: | :--------------------------: | :----------------: |
|  0   |          1.22          |   1.10 – 1.35       |           1.03               |   0.95 – 1.15      |
|  1   |          1.67          |   1.55 – 1.80       |           1.41               |   1.30 – 1.55      |
|  2   |          2.73          |   2.60 – 2.85       |           2.30               |   2.15 – 2.45      |
|  3   |          3.61          |   3.45 – 3.75       |           3.05               |   2.90 – 3.20      |
|  4   |          4.70          |   4.55 – 4.85       |           3.94               |   3.78 – 4.10      |
|  5   |          6.03          |   5.88 – 6.18       |           5.10               |   4.95 – 5.25      |
|  6   |          7.35          |   7.20 – 7.50       |           6.22               |   6.05 – 6.40      |
|  7   |          8.46          |   8.30 – 8.62       |           7.14               |   6.97 – 7.32      |
|  8   |          9.68          |   9.50 – 9.85       |           8.19               |   8.00 – 8.38      |
|  9   |         11.89          |  11.70 – 12.10      |          10.02               |   9.83 – 10.22     |
|  10  |         14.11          |  13.90 – 14.35      |          11.94               |  11.73 – 12.16     |
|  11  |         16.35          |  16.10 – 16.60      |          13.86               |  13.60 – 14.10     |

### Dark HC neutral scale

The neutral scale in dark HC follows the same steps as dark default neutral (steps 1–10). It is UI-only; the 7:1 text contrast requirement does not apply here.

| Step | Hex       | Target CR vs `#010409` | Allowed range  | Target CR vs `bgColor-muted` | Allowed range |
| :--: | :-------- | :--------------------: | :------------: | :--------------------------: | :-----------: |
|  1   | `#0d1117` |          1.09          |  1.02 – 1.17   |            1.09              |  1.02 – 1.17  |
|  2   | `#151b23` |          1.19          |  1.10 – 1.28   |            1.00              |  0.95 – 1.08  |
|  3   | `#212830` |          1.38          |  1.28 – 1.48   |            1.16              |  1.08 – 1.26  |
|  4   | `#2a323c` |          1.58          |  1.47 – 1.70   |            1.34              |  1.25 – 1.44  |
|  5   | `#3d444d` |          2.09          |  1.95 – 2.22   |            1.76              |  1.64 – 1.88  |
|  6   | `#606c7b` |          3.84          |  3.65 – 4.05   |            3.24              |  3.10 – 3.40  |
|  7   | `#8c97a6` |          6.94          |  6.75 – 7.15   |            5.85              |  5.70 – 6.00  |
|  8   | `#b7bfc8` |         11.05          | 10.80 – 11.30  |            9.32              |  9.10 – 9.55  |
|  9   | `#d1d8e0` |         14.29          | 14.00 – 14.60  |           12.05              | 11.80 – 12.30 |
|  10  | `#f0f6fc` |         18.87          | 18.50 – 19.30  |           15.91              | 15.55 – 16.30 |

### Light HC hue scales

Reference: `bgColor-default` = `#ffffff`, `bgColor-muted` = `#eff2f5` (neutral.2)

Light HC step targets follow the same threshold rules as light default, but with one stricter requirement: every text-capable step must also clear 7:1 vs `bgColor-muted` (not just 4.5:1), consistent with the 7:1 HC requirement.

| Step | Target CR vs `#ffffff` | Allowed range     | Target CR vs `bgColor-muted` | Allowed range     |
| :--: | :--------------------: | :---------------: | :--------------------------: | :---------------: |
|  0   |         ~1.0           |   1.0 – 1.15      |          ~1.1                |   1.0 – 1.2       |
|  1   |         ~1.1           |   1.0 – 1.2       |          ~1.0                |   1.0 – 1.15      |
|  2   |         ~1.2           |   1.1 – 1.35      |          ~1.1                |   1.0 – 1.2       |
|  3   |         ~1.5           |   1.3 – 1.8       |          ~1.4                |   1.2 – 1.6       |
|  4   |         ~2.2           |   1.8 – 2.6       |          ~2.0                |   1.7 – 2.4       |
|  5   |         ~3.4           |   2.9 – 3.9       |          ~3.0                |   2.6 – 3.4       |
|  6   |   **≥ 4.5 and ≤ 6.0** |  4.3 – 5.5        |  **≥ 4.0 and ≤ 5.5**        |   3.8 – 5.3       |
|  7   |   **≥ 7.0 and ≤ 10.0**|  6.8 – 9.5        |  **≥ 6.5 and ≤ 9.0**        |   6.3 – 8.8       |
|  8   |       9.0 – 13.0       |  8.5 – 13.5       |         8.5 – 12.5           |   8.0 – 13.0      |
|  9   |      11.0 – 16.0       | 10.5 – 16.5       |        10.5 – 15.5           |  10.0 – 16.0      |
|  10  |      13.0 – 18.0       | 12.5 – 18.5       |        12.0 – 17.0           |  11.5 – 17.5      |
|  11  |      15.0 – 21.0       | 14.5 – 21.5       |        14.0 – 20.0           |  13.5 – 20.5      |

### Light HC neutral scale

Light HC neutral shares the same hex values as light default neutral. The reference for calibration is `bgColor-muted` = `#eff2f5` (neutral.2 in light HC, slightly darker than the light default neutral.1).

| Step | Hex       | Target CR vs `#ffffff` | Allowed range  | Target CR vs `bgColor-muted` | Allowed range |
| :--: | :-------- | :--------------------: | :------------: | :--------------------------: | :-----------: |
|  1   | `#f6f8fa` |          1.06          |  1.02 – 1.12   |            1.06              |  1.02 – 1.12  |
|  2   | `#eff2f5` |          1.12          |  1.07 – 1.18   |            1.00              |  0.95 – 1.06  |
|  3   | `#e6eaef` |          1.21          |  1.15 – 1.28   |            1.08              |  1.03 – 1.15  |
|  4   | `#dae0e7` |          1.33          |  1.27 – 1.40   |            1.18              |  1.12 – 1.25  |
|  5   | `#c8d1da` |          1.55          |  1.48 – 1.63   |            1.38              |  1.31 – 1.46  |
|  6   | `#818b98` |          3.45          |  3.30 – 3.60   |            3.07              |  2.93 – 3.22  |
|  7   | `#59636e` |          6.11          |  5.95 – 6.28   |            5.44              |  5.30 – 5.59  |
|  8   | `#454c54` |          8.70          |  8.48 – 8.93   |            7.74              |  7.54 – 7.95  |
|  9   | `#393f46` |         10.64          | 10.38 – 10.91  |            9.47              |  9.22 – 9.73  |
|  10  | `#25292e` |         14.63          | 14.25 – 15.02  |           13.02              | 12.68 – 13.38 |

---

## Impact

- When **adding a new hue scale**, use the light/dark default tables above to validate each step before committing. Step 6 and 7 tolerances are hard — do not loosen them.
- When **calibrating a dark HC hue**, use the per-step target column (vs `#010409`) and stay within ± 0.15. The exponential curve is intentional and must be preserved for functional token contrast guarantees.
- When **adjusting neutral**, the neutral-specific tables apply. Do not use hue-scale targets for neutral.
- Exact hex values are shown only for neutral (anchored scales). Hue scales will vary by hue but must land within the CR ranges shown.
