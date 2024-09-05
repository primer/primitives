# Title

## Status

| Stage    | Status |
| -------- | ------ |
| Approved | ✅     |
| Adopted  | ✅     |

## Decision

Individual theme neutral scales will be replaced with two new neutral scales: `light` and `dark`. These scales have additional values (13 total) to accommodate contrast adjustments and state.

This document outlines key design decisions made for these new neutral scales.

## Context

### General scale generation

The goal was to make adjustments with minimal impact on the existing theme designs. For light default, shade 1 (0 in legacy) remains the same value as it's a prominent background color used throughout GitHub. All other steps are based on this value by adjusting saturation and lightness.

### Saturation adjustments

**Light**

Shade 1 leans blue with roughly 30% saturation and is the most blue shade of the scale. The saturation gradually declines with a more abrupt drop at shade 8 where the lightness is 55%. Therefore, the darker shades lean more neutral.

**Dark**

Shade 12 leans blue with roughly 70% saturation. The saturation gradually declines until shade 6 where it begins to increase eventually landing at roughly 30%.

### Each step serves a purpose

0 – 6: Backgrounds
7 – 8: Borders
9 – 13: Text and icons

### Increase background shades

The new scales accommodate component states such as rest, hover, and active for all levels of contrast (dimmed, default, high) by providing additional shades with subtle lightness adjustments. A lower contrast theme may start at shade 1 for rest, 2 for hover and 3 for active, while a higher contrast theme may start at shade 3 for rest, 4 for hover and 5 for active.

### Add minimum shade for 3:1 contrast

Step 8 in both light and dark is the minimum border contrast for interactive controls against `bgColor-muted` or shade 0 in default themes. This is a 3:1 contrast ratio for WCAG AA compliance. We don't use this shade for all interactive borders today, but it's available for use in the future.

### Impact

- Maintaining 2 scales is easier than 5 scales
- We can remove color mix hacks and overrides for state colors
- We can adjust light default to be WCAG compliant and still have room to add a new "light bright" theme with these scales
- High contrast themes have more flexibility

### Alternatives

We add a 6th neutral scale for a future "light bright" theme.
