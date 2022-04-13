## Directory structure

`tokens/`: JSON formatted design data organized by namespace and category
`tokens/base`: lowest level data, never reference other tokens
`tokens/functional`: contextual data often referencing base tokens. Opinionated UI values that combine to form components and patterns

## Naming convention

[namespace]-[item]-[variant]-[property]-[modifier]

```
{
    "gh": { <------------------------------------------------ Namespace
        "control": { <--------------------------------------- Item
            "xsmall": { <------------------------------------ Variant
                "paddingInline": { <------------------------- Property
                    "condensed": { <------------------------- Modifier
                        "value": "8px" 
                    }, 
                }
            }
        }
    }
}
```

## Build

`yarn run build`

Tokens are transforms and built with [style-dictionary](https://amzn.github.io/style-dictionary/#/). The [config](./build.js) contains custom transforms, formats, and exports to generate tokens for each platform. We currently support CSS vars, TS and JS.

### Transforms

- `pxToRem`: raw token data includes pixel values that are transformed to `rem` based off a common browser default font-size of 16px.
- `name/css`: adds `-` dashes between the token path to form a CSS variable.
- `name/js`: adds `.` dots between the token path to form a JS variable.
- `attribute/css`: adds `--` two dashes before the token name to form a CSS variable.
- `typography/shorthand`: compiles individual typography tokens into one shorthand to be used with the `font` property.

## Formats

-`css/touch-target-mobile`: wraps mobile scoped tokens in a media query `(pointer: coarse)`.
-`css/touch-target-desktop`: wraps desktop scoped tokens in a media query `(pointer: fine)`.
- `custom/format/custom-media`: injects viewport tokens into a `@custom-media` query (requires PostCSS).
- `json/docs`: builds a JSON file of all token data to be consumed by documentation.
