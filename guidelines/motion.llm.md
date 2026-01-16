# Motion Guidelines

Motion enhances user understanding and provides feedback. Keep it subtle and purposeful.

## Core Principles

- MUST use motion for interactive state changes (hover, focus, press)
- MUST keep motion subtle—users should feel it, not notice it
- MUST use motion to support understanding, not distract
- SHOULD keep animations under 300ms for UI interactions
- NEVER use motion purely for decoration
- NEVER create motion that loops indefinitely without user control

## When to Use Motion

- MUST animate hover states on interactive elements (buttons, links, cards)
- MUST animate focus states for keyboard navigation
- MUST animate state transitions (expand/collapse, show/hide)
- SHOULD animate page/view transitions
- SHOULD animate loading states to indicate progress
- NEVER animate static content or non-interactive elements

## Easing Selection

1. **Element entering or exiting viewport?** → `ease-out` (default)
2. **Moving or morphing on screen?** → `ease-in-out`
3. **Hover state change?** → `ease`
4. **Constant motion (loaders)?** → `linear`

## Duration Guidelines

- MUST use 100-200ms for micro-interactions (hover, focus)
- SHOULD use 200-300ms for state changes (expand, collapse)
- SHOULD use 300-500ms for larger transitions (modals, page changes)
- NEVER exceed 500ms for UI interactions

## Accessibility

- MUST respect `prefers-reduced-motion` media query
- MUST provide instant alternatives when motion is reduced
- NEVER rely solely on motion to convey information
