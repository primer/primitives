# Design Tokens Master Guide

> Metadata: This file defines the Logic and Rules for the design system. For individual token definitions and raw values, refer to DESIGN_TOKENS_SPEC.md.

---

## Core Rule

**You are a CSS expert. Never use raw values (hex, px, etc.). Only use semantic tokens.**

---

## Logic Matrix: Color Pairings

| Background Token       | Foreground Token       | Notes                     |
| ---------------------- | ---------------------- | ------------------------- |
| `--bgColor-*-emphasis` | `--fgColor-onEmphasis` | MUST pair                 |
| `--bgColor-*-muted`    | `--fgColor-{semantic}` | MUST use semantic fg      |
| `--bgColor-default`    | `--fgColor-default`    | Standard pairing          |
| `--bgColor-muted`      | `--fgColor-default`    | NEVER use `fgColor-muted` |

**Contrast Requirements:**

| Context         | Ratio | Standard |
| --------------- | ----- | -------- |
| Normal text     | 4.5:1 | WCAG AA  |
| Large text / UI | 3:1   | WCAG AA  |

---

## Pattern Compression

### Control Tokens

```
--control-[size]-[property]
  ├── size: xsmall | small | medium | large | xlarge
  └── property: size | paddingInline-[density] | paddingBlock
                 └── density: condensed | normal | spacious
```

### Stack Tokens

```
--stack-[property]-[size]
  ├── property: gap | padding
  └── size: condensed | normal | spacious

--controlStack-[size]-gap-[density]
  ├── size: small | medium | large
  └── density: condensed | auto | spacious
```

### Typography Tokens

```
--text-[role]-shorthand-[size]
  ├── role: display | title | body | subtitle | caption | codeBlock | codeInline
  └── size: small | medium | large
```

---

## Keyword Enforcement (RFC 2119)

### Motion

| Keyword | Rule                                                           |
| ------- | -------------------------------------------------------------- |
| MUST    | Use motion for interactive state changes (hover, focus, press) |
| MUST    | Keep animations ≤300ms for UI interactions                     |
| MUST    | Respect `prefers-reduced-motion` media query                   |
| MUST    | Provide instant alternatives when motion is reduced            |
| SHOULD  | Use 100-200ms for micro-interactions                           |
| SHOULD  | Use 200-300ms for state changes                                |
| NEVER   | Exceed 500ms for UI interactions                               |
| NEVER   | Use motion purely for decoration                               |
| NEVER   | Create indefinitely looping motion without user control        |
| NEVER   | Rely solely on motion to convey information                    |

### Typography

| Keyword    | Rule                                                                                                            |
| ---------- | --------------------------------------------------------------------------------------------------------------- |
| **MUST**   | Use **shorthand** tokens (e.g., `font: var(...)`) to ensure `line-height` and `font-weight` are synchronized.   |
| **MUST**   | Use `text-codeBlock` for multi-line blocks and `text-codeInline` for inline spans.                              |
| **SHOULD** | Match the token to the **semantic role** (e.g., use `title` tokens for headers, not just a large `body` token). |
| **SHOULD** | Downgrade one size level for mobile viewports (e.g., `title-large` → `title-medium`).                           |
| **NEVER**  | Use individual `font-size` or `line-height` tokens if a shorthand variant is available.                         |
| **NEVER**  | Use `text-caption-shorthand` for multi-line body text (accessibility/readability failure).                      |

### Spacing

| Keyword | Rule                                        |
| ------- | ------------------------------------------- |
| MUST    | Use control tokens for interactive elements |
| MUST    | Use stack tokens for layout spacing         |
| MUST    | Match padding density to control's purpose  |
| SHOULD  | Use `medium` size as default                |

---

## Decision Tree: Easing Selection

1. Is element entering/exiting viewport? → ease-out (default)
2. Is element moving/morphing on screen? → ease-in-out
3. Is this a hover state change? → ease
4. Is this constant motion (loaders)? → linear

---

## Golden Example: Reference Component

```css
/* Button: All 5 interactive states with correct token usage */
.btn {
  /* Base styles */
  background-color: var(--control-bgColor-rest);
  color: var(--fgColor-default);
  border: none;
  border-radius: var(--borderRadius-medium);
  padding-block: var(--control-medium-paddingBlock);
  padding-inline: var(--control-medium-paddingInline-normal);
  font: var(--text-body-shorthand-medium);
  cursor: pointer;

  /* Motion: MUST be <300ms */
  transition:
    background-color 150ms ease,
    box-shadow 150ms ease,
    transform 100ms ease;
}

/* State: Hover */
.btn:hover {
  background-color: var(--control-bgColor-hover);
}

/* State: Focus-visible (MUST use :focus-visible, not :focus) */
.btn:focus-visible {
  outline: var(--focus-outline);
  outline-offset: var(--outline-focus-offset);
}

/* State: Active/Pressed */
.btn:active {
  background-color: var(--control-bgColor-active);
  transform: scale(0.98);
}

/* State: Disabled */
.btn:disabled {
  background-color: var(--bgColor-disabled);
  color: var(--fgColor-disabled);
  cursor: not-allowed;
  opacity: 1; /* NEVER use opacity for disabled */
}

/* Accessibility: MUST respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
```

---

## Interactive States Checklist

All interactive elements MUST define:

| State    | Selector                               | Required                 |
| -------- | -------------------------------------- | ------------------------ |
| Rest     | `.element`                             | ✓                        |
| Hover    | `:hover`                               | ✓                        |
| Focus    | `:focus-visible`                       | ✓ (NEVER `:focus` alone) |
| Active   | `:active`                              | ✓                        |
| Disabled | `:disabled` / `[aria-disabled="true"]` | ✓                        |

---

## Hallucination Guard

> **If you suggest a token name not found in this spec or the system, suffix it with `/* check-token */`.**
