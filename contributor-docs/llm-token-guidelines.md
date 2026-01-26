# AI Token Guidelines

This document describes how to add AI-specific usage guidelines to design tokens for consumption by AI assistants like GitHub Copilot.

## Overview

AI Token Guidelines is a feature that outputs a dedicated JSON file (`dist/ai/ai-token-guidelines.json`) containing usage guidelines for AI assistants. This file helps AI tools understand how and when to use specific design tokens.

## Source Format

Add AI guidelines to tokens using the `$extensions['org.primer.ai']` namespace, following the existing pattern for Figma extensions:

```json5
{
  borderRadius: {
    large: {
      $value: '12px',
      $type: 'dimension',
      $description: 'Large border radius (12px). Use for larger containers, dialogs, or when more visual softness is desired.',
      $extensions: {
        'org.primer.figma': {
          /* existing Figma extensions */
        },
        'org.primer.ai': {
          usage: ['button', 'dialog', 'card', 'modal'],
          rules: 'MUST use for all buttons. Recommended for dialogs and modals.',
        },
      },
    },
  },
}
```

### Extension Properties

| Property | Type       | Description                                                        |
| -------- | ---------- | ------------------------------------------------------------------ |
| `usage`  | `string[]` | Array of use cases where this token applies                        |
| `rules`  | `string`   | Prescriptive guidance using RFC 2119 keywords (MUST, SHOULD, etc.) |

The `$description` field from the token itself is also included in the output.

## Output Format

The build process generates `dist/ai/ai-token-guidelines.json` with a flat structure:

```json
{
  "borderRadius-large": {
    "description": "Large border radius (12px). Use for larger containers, dialogs, or when more visual softness is desired.",
    "usage": ["button", "dialog", "card", "modal"],
    "rules": "MUST use for all buttons. Recommended for dialogs and modals."
  },
  "borderWidth-thick": {
    "description": "Thick 2px border for emphasis...",
    "usage": ["focus-indicator", "selected-state"],
    "rules": "MUST use for focus rings on interactive elements."
  }
}
```

## Adding AI Guidelines to Tokens

### Step 1: Identify High-Priority Tokens

Focus on tokens where AI assistants commonly make mistakes or need explicit guidance:

- Focus indicators and accessibility-related tokens
- Semantic color tokens (danger, success, accent)
- Border radius for specific component types
- Shadow tokens for elevation hierarchy

### Step 2: Add the Extension

Add `org.primer.ai` to the token's `$extensions`:

```json5
{
  bgColor: {
    danger: {
      emphasis: {
        $value: '{base.color.red.5}',
        $type: 'color',
        $description: 'Emphasized danger background for critical errors',
        $extensions: {
          'org.primer.figma': {
            /* ... */
          },
          'org.primer.ai': {
            usage: ['delete-button', 'critical-alert'],
            rules: 'MUST use for destructive action buttons. Use fgColor.onEmphasis for text.',
          },
        },
      },
    },
  },
}
```

### Step 3: Build and Verify

```bash
npm run build:tokens
```

Check that your token appears in `dist/ai/ai-token-guidelines.json`.

## Best Practices

### Writing Good Usage Arrays

- Use lowercase, hyphenated terms: `focus-indicator`, `delete-button`
- Be specific about component types: `modal` instead of `overlay`
- Include common synonyms if helpful

### Writing Effective Rules

Use RFC 2119 keywords for clarity:

- **MUST** - Absolute requirement
- **MUST NOT** - Absolute prohibition
- **SHOULD** - Recommended but not required
- **SHOULD NOT** - Discouraged but not prohibited
- **MAY** - Optional

Example rules:

- ✅ "MUST use for focus rings on interactive elements"
- ✅ "Do NOT use for subtle dividers"
- ✅ "SHOULD pair with fgColor.onEmphasis for text"
- ❌ "Use this for buttons" (too vague, no clear directive)

## Architecture

### Files

| File                              | Purpose                                  |
| --------------------------------- | ---------------------------------------- |
| `src/filters/hasAiExtensions.ts`  | Filter for tokens with `org.primer.ai`   |
| `src/formats/jsonAiGuidelines.ts` | Format outputting flat AI-optimized JSON |
| `src/platforms/aiGuidelines.ts`   | Platform configuration                   |

### Build Integration

The AI guidelines build step in `scripts/buildTokens.ts` processes all functional tokens and outputs only those with AI extensions.

## Testing

Run the tests to verify your changes:

```bash
npm test -- src/filters/hasAiExtensions.test.ts
npm test -- src/formats/jsonAiGuidelines.test.ts
```
