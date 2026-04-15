# Token Authoring

Guide for creating and modifying design tokens.

## Token File Format

Tokens are defined in JSON5 files in `src/tokens/`:

```json5
{
  tokenName: {
    $value: '{reference.to.other.token}', // or literal like '16px'
    $type: 'color', // color, dimension, shadow, duration, etc.
    $description: 'Human-readable description',
    $extensions: {
      'org.primer.figma': {
        /* Figma export config */
      },
      'org.primer.overrides': {
        /* Theme-specific values */
      },
      'org.primer.llm': {
        /* LLM guidelines metadata */
      },
    },
  },
}
```

## Token References

Use curly brace syntax to reference other tokens:

```json5
{
  bgColor: {
    accent: {
      $value: '{base.color.blue.5}',
      $type: 'color',
    },
  },
}
```

## Theme Overrides

Override values for specific themes in `org.primer.overrides`:

```json5
{
  $value: '{base.color.neutral.0}',
  $type: 'color',
  $extensions: {
    'org.primer.overrides': {
      dark: '{base.color.neutral.9}',
      'dark-high-contrast': '{base.color.neutral.10}',
    },
  },
}
```

## LLM Metadata

Add `org.primer.llm` to include tokens in `DESIGN_TOKENS_SPEC.md`:

```json5
'org.primer.llm': {
  usage: ['button-background', 'interactive-element'],  // Max 3 items
  rules: 'Use for primary interactive backgrounds. Pair with fgColor.onEmphasis for text.',
}
```

### Guidelines for LLM Metadata

- **usage**: List 1-3 concrete use cases
- **rules**: Include MUST/SHOULD/Do NOT guidance when applicable
- Only add to tokens that benefit from explicit documentation

## Deprecating and Renaming Tokens

When renaming a token, keep the old name as a deprecated alias:

```json5
{
  // New canonical token
  ansi: {
    red: {
      $value: '{base.color.red.5}',
      $type: 'color',
      $description: 'ANSI red for errors and alerts in terminal output',
      $extensions: { /* figma, overrides, etc. */ },
    },
  },
  // Deprecated alias pointing to new token
  color: {
    ansi: {
      red: {
        $value: '{ansi.red}',
        $type: 'color',
        $deprecated: '{ansi.red}',
        $description: 'Deprecated. Use ansi.red instead.',
        $extensions: {
          'org.primer.figma': { /* keep for Figma backward compat */ },
        },
      },
    },
  },
}
```

Key rules for deprecated aliases:
- `$value` references the new canonical token
- `$deprecated` contains the new token path (same as `$value`)
- `$description` says "Deprecated. Use {new.path} instead."
- Keep `org.primer.figma` on aliases for Figma backward compatibility
- Do NOT add `org.primer.overrides` on aliases (overrides live on canonical tokens only)
- Do NOT add `org.primer.llm` on aliases

## Naming Conventions

Functional color token groups use domain-specific prefixes:

| Group | CSS pattern | Example |
|---|---|---|
| `bgColor.*` | `--bgColor-*` | `--bgColor-accent-emphasis` |
| `fgColor.*` | `--fgColor-*` | `--fgColor-danger` |
| `borderColor.*` | `--borderColor-*` | `--borderColor-default` |
| `ansi.*` | `--ansi-*` | `--ansi-red` |
| `prettylights.syntax.*` | `--prettylights-syntax-*` | `--prettylights-syntax-keyword` |

**Deprecated prefixes** (still emitted as `var()` aliases):
- `--color-ansi-*` → use `--ansi-*` instead
- `--color-prettylights-syntax-*` → use `--prettylights-syntax-*` instead

## Adding a New Token

1. Add to the appropriate file in `src/tokens/`:
   - `base/` - Primitive values (raw colors, sizes)
   - `functional/` - Semantic tokens (bgColor, fgColor, etc.)
   - `component/` - Component-specific tokens

2. Include required fields: `$value`, `$type`

3. Add `$description` for non-obvious tokens

4. Add `org.primer.llm` if it should appear in LLM guidelines

5. Run: `npm run lint && npm run test && npm run build`
