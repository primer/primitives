# Brand Color Contrast Requirements

Generated contrast analysis for light mode base colors against key reference surfaces.

## Neutral Scale Analysis

Reference surfaces used in all tests (light mode):

- **bgColor-default**: #ffffff (page background)
- **bgColor-muted**: #F6F8FA (secondary/muted background)
- **fgColor-default**: #25292E (primary text)
- **fgColor-muted**: #818B98 (secondary text)

### Full Contrast Matrix

## Neutral Scale - Full Contrast Matrix

| Step | bg-default | bg-muted | fg-default | fg-muted | Minimum    |
| ---- | ---------- | -------- | ---------- | -------- | ---------- |
| 0    | 1.00:1     | 1.06:1   | 14.63:1    | 3.45:1   | **1.00:1** |
| 1    | 1.06:1     | 1.00:1   | 13.74:1    | 3.24:1   | **1.00:1** |
| 2    | 1.12:1     | 1.06:1   | 13.02:1    | 3.07:1   | **1.06:1** |
| 3    | 1.21:1     | 1.13:1   | 12.11:1    | 2.86:1   | **1.13:1** |
| 4    | 1.26:1     | 1.18:1   | 11.63:1    | 2.74:1   | **1.18:1** |
| 5    | 1.33:1     | 1.25:1   | 11.01:1    | 2.60:1   | **1.25:1** |
| 6    | 1.43:1     | 1.34:1   | 10.25:1    | 2.42:1   | **1.34:1** |
| 7    | 1.55:1     | 1.45:1   | 9.47:1     | 2.23:1   | **1.45:1** |
| 8    | 3.45:1     | 3.24:1   | 4.24:1     | 1.00:1   | **1.00:1** |
| 9    | 6.11:1     | 5.74:1   | 2.39:1     | 1.77:1   | **1.77:1** |
| 10   | 8.70:1     | 8.17:1   | 1.68:1     | 2.52:1   | **1.68:1** |
| 11   | 10.64:1    | 10.00:1  | 1.37:1     | 3.08:1   | **1.37:1** |
| 12   | 14.63:1    | 13.74:1  | 1.00:1     | 4.24:1   | **1.00:1** |
| 13   | 15.80:1    | 14.84:1  | 1.08:1     | 4.57:1   | **1.08:1** |

### Minimum Requirements by Step

| Step | Minimum Contrast |
| ---- | ---------------- |
| 0    | **1.00:1**       |
| 1    | **1.00:1**       |
| 2    | **1.06:1**       |
| 3    | **1.13:1**       |
| 4    | **1.18:1**       |
| 5    | **1.25:1**       |
| 6    | **1.34:1**       |
| 7    | **1.45:1**       |
| 8    | **1.00:1**       |
| 9    | **1.77:1**       |
| 10   | **1.68:1**       |
| 11   | **1.37:1**       |
| 12   | **1.00:1**       |
| 13   | **1.08:1**       |

## Interpretation Guide

- **Minimum Contrast**: The lowest contrast ratio achieved for that step across all 4 reference surfaces
- **Brand team should ensure**: Each base color step achieves at least its minimum contrast value against all 4 surfaces
- **Use cases**:
  - Steps 0–7 (light zone): Good for backgrounds; test text readability on these
  - Steps 8–13 (text zone): Safe for readable text; minimal contrast to backgrounds

## How to Use This Data

1. When adjusting brand colors, test each new step against bgColor-default, bgColor-muted, fgColor-default, and fgColor-muted
2. Ensure the actual contrast ratio meets or exceeds the minimum shown above
3. If any step falls below minimum, adjust the color value until it meets the standard

---

_Generated from `scripts/generateContrastRequirements.ts`_
