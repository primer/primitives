# Color token name variants

## Status

| Stage    | Status |
| -------- | ------ |
| Approved | ✅     |
| Adopted  | ✅     |

## Context

As part of the new design token build process and naming convention, colors have all been moved over to the new system. Variant names have been reconciled as well to improve consistency and reduce confusion.

## Decision

See details about the `variant` part of a token in the [ADR for color token naming](./2023-03-28-color-token-naming.md).

We will use the following naming convention for color variants:

- `default` - The default color variant for a given token. Example: `fgColor-default`
- `muted` - The secondary color variant for a given token. Example: `fgColor-muted`
- `emphasis` - The opposite of "muted", emphasis is a stronger color variant. Example: `bgColor-accent-emphasis`

In this model, `muted` is used universally to mean "secondary" or "less important". Previously, we used a combination of `subtle` and `muted`.

The term `subtle` is being deprecated and replaced with `muted` tokens. This decreases the number of variants we need to maintain and is (ideally) easier to use.

### Impact

If we need to extend the number of variants in the future, it will be difficult to find a term to represent a third color variant. Using terms like "secondary" opens us up to the ability to add "tertiary" and so on if we need it. However, we want to keep the surface area of color variants as small as possible.

### Alternatives

<!-- Describe the available alternatives if any, and why the current apporach was chosen -->

This ADR has been moved from its original place in github/primer ([view original](https://github.com/github/primer/blob/85827cee9022657301b88c3548e8dd6e3f728afa/adrs/2023-03-28-color-token-name-variants.md)).
