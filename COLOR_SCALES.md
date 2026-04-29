# Color Scales in Primer Design Tokens

This document explains how color scales work in primer/primitives, how they're structured, and the constraints that guide them.

## Overview

Primer's color system is built on **base color scales** — semantic palettes (neutral, blue, green, red, etc.) that serve as the foundation for **functional tokens** (fgColor, bgColor, borderColor, etc.).

- **Base scales:** Raw color values organized by hue and lightness step
- **Functional tokens:** Semantic aliases that layer contrast requirements, accessibility rules, and theme-aware logic on top of base scales
- **Themes:** Light, dark, dark-dimmed, high-contrast variants that reuse the same functional token names with different values

## Base Color Scales

### Scale Structure

Each base scale has **14 steps** (0–13):

| Step | Purpose | Light Theme (neutral example) |
|------|---------|-------------------------------|
| 0 | **Brightest/Lightest** | `#ffffff` (white) |
| 1–7 | **Light backgrounds** | `#f6f8fa` → `#c8d1da` (gradual darkening) |
| 8–11 | **Text & borders** | `#818b98` → `#393f46` (medium to dark gray) |
| 12–13 | **Darkest/Highest contrast** | `#25292e` → `#1f2328` (black) |

**Why 14 steps?** They provide:
- Enough granularity for fine contrast control (especially in mid-tones, steps 5–8)
- Semantic meaning tied to use cases (light backgrounds, text, borders)
- Predictable progression for interpolation and theme adaptation

### Current Scales

Primer defines base scales for:
- **Neutral** (gray, used for defaults, text, borders)
- **Blue** (primary accent color)
- **Green** (success)
- **Red** (danger)
- **Yellow** (warning)
- **Purple** (emphasis)
- Plus specialized scales: orange, pink, coral, lime, cyan, indigo

### Scale Files

All base scales are defined in JSON5 files:

```
src/tokens/base/color/
├── light/
│   ├── light.json5              # Base light theme (default 0-13 steps)
│   ├── light.high-contrast.json5
│   ├── display-light.json5      # Display color scales (accent colors)
├── dark/
│   ├── dark.json5
│   ├── dark.dimmed.json5
│   ├── dark.high-contrast.json5
│   └── display-dark.json5
```

## Functional Tokens Layer

### Why Functional Tokens Exist

**Problem:** If consumers directly used base scales, they'd have to:
- Know which step is safe for text on which background
- Remember which step means "hover" vs. "active"
- Rewrite logic for each new theme

**Solution:** Functional tokens abstract this complexity:

```json5
// Bad: consumer has to think about steps
color: {base.color.neutral.5}   // Is this readable on neutral.0? Need to check contrast

// Good: semantic name, works across all themes
color: {fgColor.default}  // Guaranteed to meet 4.5:1 contrast on default bg
```

### Examples of Functional Tokens

| Token | Purpose | Light Value | Dark Value |
|-------|---------|-------------|-----------|
| `fgColor.default` | Main text | `neutral.12` | `neutral.1` |
| `fgColor.muted` | Secondary text (lower contrast) | `neutral.8` | `neutral.4` |
| `bgColor.default` | Main background | `neutral.0` | `neutral.13` |
| `bgColor.emphasis` | Highlighted background | `blue.1` | `blue.9` |
| `borderColor.default` | Standard border | `neutral.6` | `neutral.7` |

### Functional Token Structure

Functional tokens live in:

```
src/tokens/functional/
├── color/
│   ├── fgColor.json5
│   ├── bgColor.json5
│   ├── borderColor.json5
│   ├── control.json5            # Buttons, inputs, selects
│   ├── button.json5
│   ├── avatar.json5
│   ├── counter.json5
│   └── [100+ more specialized tokens]
```

Each functional token file references base scales:

```json5
{
  fgColor: {
    default: {
      $value: '{base.color.neutral.12}',  // ← References step 12 of neutral scale
      $type: 'color'
    },
    muted: {
      $value: '{base.color.neutral.8}',   // ← Step 8 for lower contrast
      $type: 'color'
    }
  }
}
```

**Theme-aware behavior:**
The same `fgColor.default` token can resolve to different values in light vs. dark themes by updating the reference:

```json5
// light.json5
fgColor.default: '{base.color.neutral.12}'   // Dark text on light bg

// dark.json5  
fgColor.default: '{base.color.neutral.1}'    // Light text on dark bg
```

## Contrast Requirements

Primer enforces [WCAG 2.1 AA compliance](https://www.w3.org/TR/WCAG21/) via documented contrast rules:

### Text Contrast

| Pair | Ratio | Rule |
|------|-------|------|
| Text vs. background | **4.5:1** | Required for all text |
| Links vs. surrounding text | **3:1** | In addition to 4.5:1 against bg |
| Placeholder text vs. bg | **4.5:1** | Or use visible label |
| Disabled text | None | No requirement |

### Non-Text Contrast

| Pair | Ratio | Rule |
|------|-------|------|
| Focus border vs. adjacent colors | **3:1** | Outline around interactive controls |
| Empty control border vs. bg | **3:1** | Unfilled buttons, empty inputs |
| States shown together | **3:1** | Selected vs. unselected in segmented controls |
| Decorative elements | None | No requirement |

### Contrast Checking

Primer runs automated contrast checks via `scripts/colorContrast.ts`:

```bash
npm run build:tokens          # Generates all token files
npm run check:contrast        # Runs contrast test
```

**Output:** `color-contrast-check.json` lists all failed pairs with:
- Actual contrast ratio
- Required ratio
- Which colors failed
- Specific theme/context

**Example violation:**
```json
{
  "contrastPair": "fgColor.muted vs. bgColor.default",
  "pass": "❌",
  "contrastRatio": "3.8:1",
  "minimumContrastRatio": "4.5:1",
  "theme": "light"
}
```

## Neutral Scale: Contrast Patterns & Architecture

The neutral scale is not arbitrary—it's deliberately structured in **three semantic regions** with distinct contrast characteristics:

### Scale Regions (Light Theme Example)

| Region | Steps | HSL Lightness | Purpose | Contrast vs. White |
|--------|-------|--------------|---------|-------------------|
| **Light backgrounds** | 0–7 | 100 → 82 | Page backgrounds, containers, dividers | 1.0–1.6:1 |
| **Transition zone** | 6–8 | 82 → 55 | Borders, subtle separators | 1.4–3.5:1 |
| **Text & foreground** | 8–13 | 55 → 14 | Text, icons, interactive UI | 3.5–15:1 |

### The 7↔8 Break: Architecture, Not Accident

The step progression is **not linear**:

- **Steps 0–7:** Lightness drops ~2–3% per step (subtle, for backgrounds)
- **Step 7→8:** Lightness drops 27% (intentional break!)
- **Steps 8–13:** Lightness drops ~8% per step (for text readability)

This architecture encodes two distinct jobs:
1. **Light zone (0–7):** Safe for backgrounds; text on these needs high contrast
2. **Text zone (8–13):** Safe for readable text; minimal contrast to white (3.5:1)

### Contrast Matrix: Neutral Steps vs. Functional Tokens (Light)

**vs. `bgColor.default` (white #FFFFFF):**
- Steps 0–7: 1.0–1.6:1 ✗ (too similar; use for backgrounds only)
- Steps 8–9: 3.4–6.1:1 ✓ (readable text)
- Steps 10–13: 8.7–15.8:1 ✓ (very readable text)

**vs. `bgColor.muted` (#F6F8FA):**
- Steps 0–7: 1.0–1.5:1 ✗ (too similar)
- Steps 8–9: 3.2–5.7:1 ✓ (readable text)
- Steps 10–13: 8.2–14.8:1 ✓ (very readable text)

**vs. `fgColor.default` (neutral.13 #1f2328):**
- Steps 0–8: 4.6–15.8:1 ✓ (all safe on dark text)
- Steps 9–13: 1.0–2.6:1 ✗ (too similar to dark text)
- **Use case:** Light backgrounds where dark text is already placed

**vs. `fgColor.muted` (neutral.9 #59636E):**
- Steps 0–7: 3.96–6.1:1 ✓ (all safe on medium text)
- Steps 8–13: 1.0–2.4:1 ✗ (too similar to medium text)
- **Use case:** Light backgrounds where medium text is already placed

### Design Insight: Why Functional Tokens Anchor at Specific Steps

The functional tokens are anchored to specific steps because they encode contrast relationships:

```
bgColor.default   → neutral.0  (white, safe for all text)
bgColor.muted     → neutral.1  (light gray, safe for dark text)
fgColor.default   → neutral.13 (black, safe on all light backgrounds)
fgColor.muted     → neutral.9  (medium gray, safe on light backgrounds 0–7)
```

Any change to base neutral scale steps automatically affects all these relationships. If step 6 changes color, any functional token referencing step 6 changes everywhere it's used.

### Best Practice: Scale Changes & Cascades

**Problem:** If you shift the neutral scale (e.g., blue-gray → green-gray), existing semantic steps may no longer work:
- Old step 6 might be too light for its use case
- Old step 9 might not have enough contrast anymore
- Requires remapping: old step N → new step N+1 or N+2
- **This cascades:** if you remap functional token references, ~1,800+ usages change

**Solution:** Add new steps instead of remapping
- Extend scale from 13 to 16 steps (add 14, 15 in light zone)
- Keep steps 0–13 semantics unchanged
- Functional tokens still reference 0–13 (zero changes)
- New steps provide extra granularity where needed

## How Changes Propagate

### Scenario: Update neutral scale (like PR #1340)

1. **Change base scale** (light.json5, dark.json5, etc.):
   ```json5
   neutral: {
     5: { $value: '#new-hex' }  // ← Old hex was #old-hex
   }
   ```

2. **Functional tokens automatically updated:**
   - Any token referencing `{base.color.neutral.5}` now uses the new hex
   - No manual edits needed for those references

3. **But:** If the new hex breaks contrast, we have two options:
   - **Option A:** Bump the reference to a darker step
     ```json5
     fgColor.muted: '{base.color.neutral.9}'  // Changed from neutral.8
     ```
     → This cascades: any reference to `neutral.8` must be updated
   
   - **Option B:** Add new steps to preserve old semantic meaning
     ```json5
     neutral: {
       14: { $value: '#new-light-variant' },
       15: { $value: '#new-lighter-variant' }
     }
     ```
     → Fewer cascading changes, but more scale maintenance

### Current Problem (PR #1340)

Shifting base `neutral` from blue-gray to green-gray:
- Some old steps need to shift `+1` positions (old step 6 → new step 7)
- Other steps need `+2` (old step 5 → new step 7, too)
- **Non-uniform mapping** → ~1,800 manual reference updates across functional tokens

**Why this happens:**
- Step progression isn't linear (lightness gaps vary)
- Color shift (blue → green) changes perceptual intensity
- Can't reliably map old steps to new steps without contrast checking each one

## Best Practices for Scale Changes

1. **Preserve step semantics:** If you change a scale, keep the same step doing roughly the same job (e.g., step 6 should still be "medium gray suitable for borders")

2. **Extend if needed:** Rather than reordering, add steps (14, 15, 16, etc.) to absorb changes without fracturing existing references

3. **Test contrast holistically:** After any change, run the contrast script and review all failures together—don't fix them ad-hoc

4. **Document mapping:** If you do change step meanings, create a migration guide showing old→new references

5. **Consider functional token impact:** Count the cascading reference changes before committing to a scale change

## Themes

Primer currently has **8 color modes:**

| Name | Purpose | Base Scales |
|------|---------|-------------|
| `light` (default) | Standard light mode | 14 steps per scale |
| `dark` | Standard dark mode | 14 steps per scale |
| `dark-dimmed` | Reduced contrast dark mode | 14 steps per scale |
| `light-high-contrast` | WCAG AAA (7:1) for light | 14 steps per scale |
| `dark-high-contrast` | WCAG AAA (7:1) for dark | 14 steps per scale |
| `dark-colorblind-high-contrast` | Protanopia-friendly HC dark | 14 steps per scale |
| `light-tritanopia-high-contrast` | Tritanopia-friendly HC light | 14 steps per scale |
| Display themes | Accent color scales only | Same 14 steps |

Each theme is built from the same **functional token definitions**, but with different base scale values.

## Key Files

| File | Purpose |
|------|---------|
| `src/tokens/base/color/light/light.json5` | Base scales for light mode (source of truth) |
| `src/tokens/functional/color/fgColor.json5` | Text color token definitions |
| `src/tokens/functional/color/bgColor.json5` | Background color tokens |
| `scripts/colorContrast.ts` | Contrast checker |
| `scripts/colorContrast.config.ts` | Contrast requirements (4.5:1, 3:1, etc.) |
| `contributor-docs/adrs/adr-010-color-contrast.md` | Design rationale for contrast rules |

## Questions?

- **Why base scales?** Provide reusable, predictable primitives
- **Why 14 steps?** Balance between granularity and semantic clarity
- **Why functional tokens?** Hide complexity, ensure accessibility, enable themes
- **Why enforce contrast?** Legal requirement (WCAG 2.1) + ethical duty (accessibility)

---

**Version:** April 2026  
**Author:** Primer Design Systems team
