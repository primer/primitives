# Spacing Guidelines

How to use spacing and sizing tokens for consistent layouts.

## Control Sizing & Padding

- Use the control size tokens (`--control-*-size`) for height and matching padding tokens per size.
- Choose padding density via suffixes: `-condensed`, `-normal` (default), `-spacious`.

## Stack Spacing

- Use stack tokens for layout gaps (`--stack-gap-*`, `--stack-padding-*`).
- For control groups, use control stack tokens (e.g., `--controlStack-*-gap-*`).

## Rules

- MUST use control tokens for interactive elements (buttons, inputs)
- MUST use stack tokens for layout spacing
- MUST match padding density to the control's purpose
- SHOULD use `medium` size as the default
