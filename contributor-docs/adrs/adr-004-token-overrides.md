# Token overrides

## Status

| Stage    | Status |
| -------- | ------ |
| Approved | ✅     |
| Adopted  | 🚧     |

## Context

When creating tokens, like `fgColor-default` we need to be able to define different color values for different conditions (mostly themes).
For example we use a dark color `#1f2328` in `light` mode and a light color `#f0f6fc` in dark mode.

In some cases we use different files, like `color-light.json5` and `color-dark.json5`, however this is not always practical. Specifically for component tokens, where it can be desired to create one token file per component, separate files for all color modes does not scale well.

## Decision

This ADR provides a solution for thoses cases by allowing to specifiy specific overrides for a token within the `$extensions` property.

```json5
{
  "button": {
    "default": {
      "bgColor": {
        $value: "{base.neutral.2}" // default value,
        $extensions: {
          "org.primer.overrides": {
            "dark": "{base.neutral.8}" // value use the dark mode,
          }
        }
      }
    }
  }
}
```

### Default value

The `$value` property always represents the `light` theme value, which we define to be the default. Any theme that does not specify an override, will use the default value from the `$value` property.

### Advanced overrides

To allow for more advanced overrides, you can provide an object with multiple properties instead of a value string.

```json5
{
  "button": {
    "default": {
      "bgColor": {
        $value: "{base.neutral.2}" // default value,
        $extensions: {
          "org.primer.overrides": {
            "dark": {
              $value: "{base.neutral.8}", // value use the dark theme
              $description: "A dark theme description", // specific description for dark theme
            },
            "dark-dimmed": "{base.neutral.9}" // value use the dark-dimmed theme
          }
        }
      }
    }
  }
}
```

This feature is implemented using a [`preprocessor`](https://styledictionary.com/reference/hooks/preprocessors/) for style dictionary. To enable this, you need to make two changes in any [`platform`](https://styledictionary.com/reference/config/#platform) configuration that should have this feature enabled:

Add the `themeOverrides` preprocessor to the platform config:

```diff
{
    prefix,
    buildPath,
+   preprocessors: ['themeOverrides'],
    transforms: [
      'name/pathToKebabCase',
      'color/hex',
      //...
    ]
}
```

Pass the current theme to the platform config options:

```diff
{
    prefix,
    buildPath,
    preprocessors: ['themeOverrides'],
    transforms: [
      'name/pathToKebabCase',
      'color/hex',
      //...
    ],
    options: {
      basePxFontSize: 16,
+     themeOverrides: {
+       theme: "dark",
+     },
    },
}
```

### Options

It is possible to change the `$extensions` property name and the default `value` property using the platform config options:

```diff
{
    prefix,
    buildPath,
    preprocessors: ['themeOverrides'],
    transforms: [
      'name/pathToKebabCase',
      'color/hex',
      //...
    ],
    options: {
      basePxFontSize: 16,
      themeOverrides: {
        theme: "dark",
+       extensionProp: "theme", // defaults to 'org.primer.overrides'
+       valueProp: "value", // defaults to "$value"
      },
    },
}
```

### Impact

- we can now move to dedicated component files in `primitives`, making editing a lot easier
- `primer/brand` can now integrate more of our workflows and tooling as they already use a "one file per component" model

### Alternatives

Creating dedicated theme files for each component, e.g. `button-light.json5`, `button-dark.json5`, `button-light-high-contrast.json5`, ...
