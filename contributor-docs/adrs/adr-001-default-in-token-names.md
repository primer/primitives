# Using `default` in token names

## Status

| Stage    | Status      |
| -------- | ----------- |
| Approved | ✅ |
| Adopted  | 🚧 |

## Context
Currently we already have some tokens that use `default` like `fgColor-default` or `bgColor-default`. Using default is a great way for consumers to know which option to choose if they don't have specific needs.
However, we do not offer defaults for all cases where it would be possible and helpful. It makes sense to standardise this apporach.

## Decision
Moving forward we will add `default` options where ever it makes sense. However, the `default` option should always be a reference to another token, e.g.
- `small`
- `medium`
- `large`
- `default` -> ref: `medium`

### Impact
This will make it easier for consumers to choose the right token.

### Alternatives
We could remove all uses of default, however this would a) be a breaking change and b) make it harder to use our tokens.
