# W3C Design Token Format Guide (2025.10)

**Reference:** https://www.designtokens.org/tr/2025.10/

This guide distills the W3C Design Tokens Community Group specification (Candidate Recommendation) into key rules for creating and validating tokens in Primer Primitives.

## File Format

- **Media type:** `application/design-tokens+json` (or `application/json`)
- **File extensions:** `.tokens.json` (preferred)
- **Format:** Valid JSON per RFC 8259

## Token Structure

Every token MUST have:

- **`$value`** (required): The actual token value
- **`$type`** (required): One of the predefined types below

Optional properties:

- **`$description`** (string): Purpose and usage guidance
- **`$extensions`** (object): Custom metadata (vendor/tool-specific)
- **`$deprecated`** (boolean): Mark token as deprecated

```json
{
  "token-name": {
    "$type": "color",
    "$value": "#000000",
    "$description": "Primary text color",
    "$deprecated": false,
    "$extensions": {
      "org.vendor.custom": {"custom-field": "value"}
    }
  }
}
```

## Token Naming Rules

Token names (keys) MUST:

- Be valid JSON strings
- NOT start with `$` (reserved for spec properties)
- NOT contain: `{`, `}`, `.` (reserved for references)
- Be case-sensitive (avoid names differing only by case)

Valid: `token-name`, `tokenName`, `token_name`
Invalid: `$token-name`, `token.name`, `{token}`

## Types (Predefined)

| Type           | Value Format           | Example                                                                        |
| -------------- | ---------------------- | ------------------------------------------------------------------------------ |
| `color`        | Color object or string | `{ "colorSpace": "srgb", "components": [1, 0, 0], "alpha": 1 }` or `"#ff0000"` |
| `dimension`    | Number + unit          | `{ "value": 16, "unit": "px" }`                                                |
| `font-family`  | String                 | `"Arial"`                                                                      |
| `font-weight`  | Number or string       | `400` or `"bold"`                                                              |
| `duration`     | Number + unit (ms, s)  | `{ "value": 300, "unit": "ms" }`                                               |
| `cubic-bezier` | Array of 4 numbers     | `[0.42, 0, 0.58, 1]`                                                           |
| `number`       | Plain number           | `1.5`                                                                          |

## Composite Types

Composite tokens have multiple named child values (same type):

| Type         | Structure                                                         | Example                        |
| ------------ | ----------------------------------------------------------------- | ------------------------------ |
| `shadow`     | `{ color, offsetX, offsetY, blur, spread }`                       | Shadow with color + dimensions |
| `border`     | `{ color, width, style }`                                         | Border properties              |
| `stroke`     | `{ color, width }` or string                                      | Border/stroke style            |
| `transition` | `{ duration, delay, timingFunction }`                             | Animation properties           |
| `gradient`   | Array of color stops                                              | Multi-step color gradient      |
| `typography` | `{ fontFamily, fontSize, fontWeight, lineHeight, letterSpacing }` | Text styling                   |

## Groups

Groups are arbitrary categories of tokens. Structure:

```json
{
  "group-name": {
    "$description": "Optional group description",
    "$extensions": {"org.vendor.meta": {}},
    "token-1": {"$type": "...", "$value": "..."},
    "token-2": {"$type": "...", "$value": "..."}
  }
}
```

Groups can contain both tokens and nested groups. Groups MAY have `$extensions` and `$deprecated` but NOT `$type` or `$value`.

## References (Aliases)

A token's value can reference another token:

**Curly brace syntax (recommended):**

```json
{
  "color-primary": {"$type": "color", "$value": "#0969da"},
  "color-button-primary": {"$type": "color", "$value": "{color-primary}"}
}
```

**JSON Pointer syntax (required support):**

```json
{
  "color-button-primary": {"$type": "color", "$value": "{#/$defs/color-primary}"}
}
```

Rules:

- Cannot be circular (A → B → C → A is invalid)
- Can chain references (A → B → C is valid)
- Resolved type MUST match if both are specified

## Extensions

Use `$extensions` for tool-specific or vendor-specific metadata:

```json
{
  "token": {
    "$type": "color",
    "$value": "#000000",
    "$extensions": {
      "org.primer.llm": {
        "usage": ["property1", "property2"],
        "rules": "When to use this token"
      },
      "org.primer.figma": {
        "collection": "pattern/category",
        "scopes": ["property1", "property2"]
      }
    }
  }
}
```

Extension keys SHOULD use reverse domain notation (e.g., `org.primer.*`).

## Best Practices

1. **Use $type explicitly** - Even if resolvable via reference, specify `$type` for clarity
2. **Document with $description** - Explain intent, not just the value
3. **Keep groups logical** - Group related tokens, not by type alone
4. **Use namespaces** - Separate concerns (e.g., `spacing`, `color`, `motion`)
5. **Avoid case-only naming** - Use clear prefixes to distinguish tokens
6. **Validate references** - Check for circular and missing token references
7. **Extend thoughtfully** - Use `$extensions` for tool metadata, not core semantics

## Validation Checklist

For every token:

- [ ] Has `$value` property
- [ ] Has `$type` property (color, dimension, etc.)
- [ ] Name does not start with `$`
- [ ] Name does not contain `.`, `{`, `}`
- [ ] `$description` present for semantic tokens
- [ ] If referencing token, value matches resolved type
- [ ] No circular references
- [ ] `$extensions` uses `org.vendor.*` pattern

For every group:

- [ ] Contains only tokens or nested groups
- [ ] Does NOT have `$type` or `$value`
- [ ] May have `$description`, `$extensions`, `$deprecated`

## Migration from Custom Formats

If migrating from a non-W3C format:

1. Ensure all tokens have `$value` (required)
2. Specify `$type` explicitly (infer from current value if needed)
3. Move custom metadata to `$extensions`
4. Replace dot notation with group hierarchy
5. Update references to use curly brace or JSON Pointer syntax
6. Validate no circular references exist
7. Test with W3C-compliant token tools

## References

- **Official Spec:** https://www.designtokens.org/tr/2025.10/format/
- **Color Module:** https://www.designtokens.org/tr/2025.10/color/
- **Resolver:** https://www.designtokens.org/tr/2025.10/resolver/
- **DTCG GitHub:** https://github.com/design-tokens/community-group
