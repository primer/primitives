# Primer Design Token Guidelines

Quick reference for using Primer design tokens correctly.

## Tokens

- MUST use CSS custom properties (design tokens) for all values—never raw values like `#fff` or `16px`

## Interactive Elements

- MUST define all five states for interactive elements (rest, hover, focus, active/pressed, disabled)
- MUST use `:focus-visible` (not `:focus`) for keyboard focus styles
- NEVER remove hover or focus states for aesthetics

## Motion

Use subtle motion to enhance interactivity and understanding. All interactive states (hover, focus, press) MUST have motion transitions. Keep animations under 300ms and respect `prefers-reduced-motion`.

→ [Full motion guidelines](motion.llm.md)

## Color

- Use semantic pairings (fg/bg) and enforce contrast requirements.
- See: [color guidelines](color.llm.md)

## Spacing

- Use control/stack tokens for sizing, padding, and gaps.
- See: [spacing guidelines](spacing.llm.md)

## Typography

- Use shorthand text tokens and follow responsive guidance.
- See: [typography guidelines](typography.llm.md)
