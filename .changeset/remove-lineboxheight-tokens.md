---
"@primer/primitives": minor
---

Remove redundant `lineBoxHeight` tokens

The following tokens have been removed:

- `text-display-lineBoxHeight` - Duplicated `text-display-lineHeight` value
- `control-xsmall-lineBoxHeight`
- `control-small-lineBoxHeight`
- `control-medium-lineBoxHeight`
- `control-large-lineBoxHeight`
- `control-xlarge-lineBoxHeight`

These tokens were inconsistently defined (typography used unitless multipliers while controls used absolute dimensions) and were not providing clear value. The control sizing formula (`size = lineBoxHeight + 2 × paddingBlock`) can be derived from existing `size` and `paddingBlock` tokens. Breaking changes have been mitigated on the platform.
