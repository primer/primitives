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

## Adding a New Token

1. Add to the appropriate file in `src/tokens/`:
   - `base/` - Primitive values (raw colors, sizes)
   - `functional/` - Semantic tokens (bgColor, fgColor, etc.)
   - `component/` - Component-specific tokens

2. Include required fields: `$value`, `$type`

3. Add `$description` for non-obvious tokens

4. Add `org.primer.llm` if it should appear in LLM guidelines

5. Run: `npm run lint && npm run test && npm run build`

## Removing or Renaming Tokens

When you remove or rename tokens in `src/tokens/`, you **must** document them in `src/tokens/removed/removed.json`.

### File format

`src/tokens/removed/removed.json` is a flat JSON object. Each key is the source token path (dot-separated, matching the nested key structure in the JSON5 source files). The value is either:

- `null` — token was fully deleted with no replacement
- `"new.token.path"` — token was renamed/replaced (points to the new name)

### Example

If you removed `fgColor.onInverse` and renamed `bgColor.accent` → `bgColor.accent.default`, add:

```json
{
  "fgColor.onInverse": null,
  "bgColor.accent": "bgColor.accent.default"
}
```

### How to derive the token path

Token paths come from the nested keys in the JSON5 source files, joined with `.`. For example, this token in `src/tokens/functional/color/fgColor.json5`:

```json5
{fgColor: {muted: {$value: '...', $type: 'color'}}}
```

has the path `fgColor.muted`. The file name/location does not matter — only the nested object keys matter.

### Rules

1. Create `src/tokens/removed/removed.json` if it doesn't exist
2. If it already exists, merge your entries into it (don't overwrite existing entries)
3. Every token path you delete or rename must have an entry
4. Use `null` for deletions, use the new token path string for renames
