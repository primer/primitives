# Functional Spacing Tokens

## Overview

Functional spacing tokens provide a unified semantic scale for `gap`, `padding`, and `margin`. Instead of using role-specific tokens (e.g., `--gap-sm`, `--padding-sm`) or ad-hoc base sizes, a single namespace (`--space-*`) drives consistent visual density across all three properties.

**Key insight:** Spacing intent is about visual density, not CSS property. A "comfortable" gap should visually match "comfortable" padding.

## The Scale

| Tier | Token         | Value | Visual Density            | Use Case                          |
| ---- | ------------- | ----- | ------------------------- | --------------------------------- |
| 1    | `--space-xxs` | 2px   | Ultra-compact             | Form separators, tight divisions  |
| 2    | `--space-xs`  | 4px   | Compact                   | Small components, badges          |
| 3    | `--space-sm`  | 8px   | **Comfortable (default)** | Most components, standard layouts |
| 4    | `--space-md`  | 12px  | Relaxed                   | Breathing room, internal padding  |
| 5    | `--space-lg`  | 16px  | Spacious                  | Major layout divisions            |
| 6    | `--space-xl`  | 24px  | Expansive                 | Large sections, page structure    |

## Usage

### The Same Token Works for All Three Properties

```css
/* All use the same token — visual density drives the choice, not the CSS property */

.flex-container {
  display: flex;
  gap: var(--space-sm); /* 8px between flex items */
}

.card {
  padding: var(--space-sm); /* 8px inside card */
}

.card + .card {
  margin-top: var(--space-sm); /* 8px between cards */
}

/* When you need more breathing room, use the next tier — same everywhere */

.spacious-layout {
  display: grid;
  gap: var(--space-lg); /* 16px grid spacing */
}

.section {
  padding: var(--space-lg); /* 16px internal padding */
  margin-bottom: var(--space-lg); /* 16px after section */
}
```

### Edge Cases: When to Use Base Tokens

If you need an unusual size (3px, 6px, 10px, 20px), use base tokens and document why:

```css
.unusual-case {
  padding: var(--base-size-6); /* 6px — custom requirement from design */
}
```

**Why base tokens remain:** Functional scales intentionally cover ~95% of intentional uses. Edge cases exist and shouldn't force scale redesign.

## AI-Friendly Design

Machine-readable metadata in token definitions enables AI to learn and apply patterns:

```yaml
space-sm:
  value: 8px
  scale_position: 3
  visual_density: comfortable
  properties: [gap, padding, margin]
  use_cases: [default component spacing, flex separation, card padding]
```

**Why this helps AI:**

- **Single namespace** = AI learns one scale, not three separate ones
- **Ordinal position** = AI understands relative density (position 1 = compact, position 6 = expansive)
- **Property-agnostic** = AI reasons about intent ("I need comfortable spacing") independent of CSS property
- **Unified examples** = AI can pattern-match across similar designs

## Migration Path

### Phase 1 (Now): Define Tokens

- ✅ Functional spacing tokens added to `@primer/primitives`
- ✅ TypeScript types generated
- ✅ CSS custom properties exported

### Phase 2: Documentation & Adoption

- Create Storybook gallery showing all 6 tiers with visual examples
- Document spacing patterns (gap in flex/grid, padding in containers, margin between stacks)
- Publish migration guide: "when to use functional tokens vs. base tokens"

### Phase 3: Integration & Linting

- Integrate into `github-ui` and `@primer/react` components
- Optional: Add lint rule suggesting functional tokens when base-size values detected

### Phase 4: Governance

- Encode into component creation tools (Copilot scaffolding)
- Enforce via lint rules in CI

## Related

- **Issue:** [github/core-ux#1804](https://github.com/github/core-ux/issues/1804) — Spacing token improvements proposal
- **Pattern:** Similar to functional motion tokens ([#1350](https://github.com/primer/primitives/pull/1350)), color tokens
- **Validation:** Data from [github-ui analysis](../../../github-ui) shows 95% coverage with 6-tier scale

## FAQ

**Q: Why not separate tokens for gap, padding, margin?**
A: Visual density matters more than the CSS property. A "comfortable" visual gap should feel like "comfortable" padding.

**Q: What about rem vs px?**
A: Px matches Primer's current practice and base tokens. Accessibility is preserved via browser zoom and user preferences.

**Q: Should Primer/React export helper components like `<Stack space="sm" />`?**
A: Yes — phase 2/3 will add ready-made components and utilities. Tokens are the foundation.
