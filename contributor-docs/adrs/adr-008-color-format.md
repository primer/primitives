# Supported color formats in primer primitives

## Status

| Stage    | Status |
| -------- | ------ |
| Approved | ✅     |
| Adopted  | ✅     |

## Context

This ADR explains why we are using `hex` colors for _source design tokens_ in primer primitives.

Design tokens are color, size and typographic values stored in `.json` files. They can be converted to platform specific outputs (e.g. _css variables_) through a transformation tool like `style dictionary`.

In the context of this ADR `design tokens` refer only to the source values in the `.json` files. NOT to any of the transformed output files.

As part of the design token refactoring we align them with the [w3c design token standard](https://design-tokens.github.io/community-group/format/#terminology). This helps futureproof the setup and allows us to use third party tools that can interpret the w3c token standard.

## Decision

All color design tokens SHOULD use a `hex6` value or reference a valid color design token.

If a color should to be semi-transparent a separate `alpha` property SHOULD be specified on the design token.

```js
"bg": {
  "$value": "#0074cc",
  "alpha": 0.5,
  "$type": "color"
},
"icon": {
  "$value": "{color.fg.default}",
  "alpha": 0.5,
  "$type": "color"
}
```

This allows design tokens to pre-emptively follow the latest proposals for [w3c color tokens](https://design-tokens.github.io/community-group/format/#color), which requires a `hex` value.
To make reading token files easier and not mix `alpha` and `hex8`, the `alpha` property SHOULD always be preferred over `hex8` values. Since the `alpha` property works for both `hex` values and referenced tokens it allows us to only use one way to specifiy opacity.

The output (`css`, `scss`, `js`) formats are not effected by this. A design token can be transformered to `hex`, `rgba`, `hsla`, the iOS rgb format or any other format.

For example the following token `color-button-primary-bg`:

```js
{
  color: {
    button: {
      primary: {
        bg: {
          $value: "#0074cc",
          $type: "color"
        }
     }
    }
  }
}
```

Can be converted to this css:

```css
:root {
  --color-button-primary-bg: rgb(0, 116, 204);
}
```

### Impact

This allows design tokens to be compatible with the w3c design token standard. It also makes copying colors between tools easier.

But, it makes manipulating values directly in the `.json` file harder. This is actually a benefit as colors must be changed with the entire system in mind, which is easier in a tool like figma or [prism](https://primer.style/prism/).

### Alternatives

### RGBA

`RGBA` has the benefit of being easier to read. This is the only benefit over `hex` and it is not valid within the `w3c standard`. They are also harder to copy between tools.

### HSL

`HSL` seems easy to edit, but changing the lightness value produces vastly different perceived levels of lightness between colors[^1] and should be avoided. This is why [`HSLuv`](https://www.hsluv.org/) is used in [prism](https://primer.style/prism/) and to create primer color scales. HSL is also a hard to copy between tools.

We want to discourage a workflow were people _tinker_ with colors in the `.json` files. People should work on colors in a tool like [prism](https://primer.style/prism/) with the entire color system in mind. This means the ease of copying `hex` colors outweighs the better readability of `RGBA` and `HSL`.

## Accepted risks

### The w3c draft could evolve in a way that invalidates this ADR

- This would require changing our color tokens to a different format.
- Since we are coming from a `hex` format, we would have to do the same if we would decided to use a different color format for the input now.
- The worst outcome seems to be that we have delayed the work of converting all colors. The best outcome would be that this work will never be necessary. This is why we accept this risk.
- custom properties like `alpha` could be restricted in the future which would require us to do a rework

## References

- [w3c design token standard](https://design-tokens.github.io/community-group/format/#color)
- [The problem with hsl](https://www.boronine.com/2012/03/26/Color-Spaces-for-Human-Beings/)
- [w3c token progress](https://www.w3.org/community/design-tokens/)
- [w3c discussion on custom props](https://github.com/design-tokens/community-group/issues/174#issuecomment-1276571751)

[^1]: <https://design-tokens.github.io/community-group/format/#color>

This ADR was move from its original place in github/primer ([see original](https://github.com/github/primer/blob/85827cee9022657301b88c3548e8dd6e3f728afa/adrs/2022-10-04-supported-color-format.md)).
