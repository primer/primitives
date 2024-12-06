# Design token structure

## Status

| Stage    | Status |
| -------- | ------ |
| Approved | ✅     |
| Adopted  | ✅     |

## Context

With a refactor to `JSON` files and [Style Dictionary](https://amzn.github.io/style-dictionary) for our design token build pipeline we have the opportunity to align them to the proposed [W3C design token standards](https://design-tokens.github.io/community-group/format/)[^1].

[^1]: This only concerns the _source_ `JSON` files, not any output file in `dist/`.

Adapting the standard will make our setup more future-proof and allow us to more easily interact with tools in the ecosystem. We anticipate that most tools, like Style Dictionary or Figma will support the W3C standard once it is finalized.

## Decision

Our design tokens adhere to the current [w3c draft](https://design-tokens.github.io/community-group/format/).

### Impact

Tokens must be defined as valid w3c tokens within a nested `JSON` object. This means tokens must adhere to the following structure.

### Valid token properties

Our design tokens are required to have a `$value` property and may have any or all of the other properties.

| Property                                                                           | Key              | Token type | Accepted value             | Description                                                                                                                              |
| ---------------------------------------------------------------------------------- | ---------------- | ---------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Value                                                                              | `"$value"`       | all        | Any valid token value      | **Required**. The value of the token                                                                                                     |
| [Type](https://design-tokens.github.io/community-group/format/#type-0)             | `"$type"`        | string     | Any valid token value      | **Required**. The type of the token                                                                                                      |
| [Description](https://design-tokens.github.io/community-group/format/#description) | `"$description"` | all        | String                     | A description that is added in some platforms like `css` or `figma`                                                                      |
| Alpha                                                                              | `"alpha"`        | `"color"`  | Number between `0` and `1` | Will be applied to the color value resulting in a semi-transparent color.                                                                |
| Deprecated                                                                         | `"$deprecated"`  | all        | String or boolean          | Marks a token as deprecated, the value of this property is used as the suggested replacement. Use `null` if no replacement is available. |
| Extensions                                                                         | `"$extensions"`  | all        | Object                     | This object allows to add custom properties to any token                                                                                 |

#### Supported `$extensions`

It is recommended that direct child uses a key of the format `org.[yourOrg].[key]`. In Primers case this is `org.primer.[key]`. This is to avoid possible naming collision with other tools that may add to the `$extensions` object.

##### `org.primer.figma`

This object is used to provide information to the [Primer Design Token Manager](https://www.figma.com/community/plugin/1248222134491413101/primer-design-token-importer) plugin we use to import our tokens into Figma.

```json5
{
  $extensions: {
    'org.primer.figma': {
      collection: 'mode', // the collection in which to import the token
      group: 'component', // (optional) if the token should be within a specific group in the plugin (allows to hide this group from export)
      scopes: ['borderColor'], // which scope the token should get in Figma
    },
  },
}
```

| property   | possible values                                                                                                                                                                                                                                                                    | description                                                                                                     |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| collection | one of: `base/color/light`, `base/color/light-high-contrast`, `base/color/dark`, `base/color/dark-dimmed`, `base/color/dark-high-contrast`, `base/typography`, `mode`, `pattern/mode`, `base/size`, `functional/size`, `pattern/size`, `typography`                                | the Figma collection in which to import the token                                                               |
| group      | any string                                                                                                                                                                                                                                                                         | (optional) if the token should be within a specific group in the plugin (allows to hide this group from export) |
| scopes     | an array of one or more of: `all`, `bgColor`, `fgColor`, `borderColor`, `borderWidth`, `size`, `gap`, `radius`, `effectColor`, `effectFloat`, `opacity`, `fontFamily`, `fontStyle`, `fontWeight`, `fontSize`, `lineHeight`, `letterSpacing`, `paragraphSpacing`, `paragraphIndent` | the Figma scope(s) that will be assigned to the token in Figma                                                  |

##### `org.primer.overrides`

This object is used to provide overrides for a specific theme. The usage is still TBD.

```json5
{
  $extensions: {
    'org.primer.overrides': {
      light: '{base.color.green.5}',
      dark: {
        $value: '{base.color.green.8}',
        $description: 'An special description for the dark theme',
      },
    },
  },
}
```

### Valid token types and values

| Token                                                                                | $type           | Accepted value                                                                                                                                                            | Example                                 |
| ------------------------------------------------------------------------------------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| [Color](https://design-tokens.github.io/community-group/format/#color)               | `"color"`       | Hex3/6/8 string                                                                                                                                                           | `"#ABC"`, `"#AABBCC"`, `"#AABBCCFF"`    |
| [Size](https://design-tokens.github.io/community-group/format/#dimension)            | `"dimension"`   | Size string with `px` or `rem` unit                                                                                                                                       | `"16px"`, `"16rem"`                     |
| [Font family](https://design-tokens.github.io/community-group/format/#font-family)   | `"fontFamily"`  | String or array of strings                                                                                                                                                | `"Helvetica"`, `["Helvetica", "Arial"]` |
| [Font weight](https://design-tokens.github.io/community-group/format/#font-weight)   | `"fontWeight"`  | [number](https://design-tokens.github.io/community-group/format/#font-weight) or [fontWeight string](https://design-tokens.github.io/community-group/format/#font-weight) | `300`, `"semi-bold"`                    |
| [Duration](https://design-tokens.github.io/community-group/format/#duration)         | `"duration"`    | Duration string with `ms` unit                                                                                                                                            | `"300ms"`                               |
| [Cubic bezier](https://design-tokens.github.io/community-group/format/#cubic-bezier) | `"cubicBezier"` | Valid cubic bezier array with 4 numbers                                                                                                                                   | `[0, 0, 0.5, 1]`                        |

#### Composite token types

A composite token is a token that consists of multiple properties, like a _text style_ that has a `fontWeight` and a `fontSize`.

##### Text style

A [text style design token](https://design-tokens.github.io/community-group/format/#typography) must have the `$type` set to `typography`. The following properties are all required for this token.

| Property      | Accepted value                               | Example                                 |
| ------------- | -------------------------------------------- | --------------------------------------- |
| fontFamily    | `fontFamily` token value                     | `"Helvetica"`, `["Helvetica", "Arial"]` |
| fontSize      | `dimension` token value                      | `"16px"`, `"2rem"`                      |
| fontWeight    | `fontWeight` token value                     | `300`, `"semi-bold"`                    |
| letterSpacing | `dimension` token value                      | `"0rem"`, `"0.1px"`                     |
| lineHeight    | string of unitless number or `dimension`[^2] | `"1"`, `"24px"`                         |

[^2]: Value for lineHeight is still in discussion: <https://github.com/design-tokens/community-group/pull/86#discussion_r768137006>

##### Other composite token types

Other types that are available in the w3c standard but currently not used in our build process are:

- [shadow](https://design-tokens.github.io/community-group/format/#shadow)
- [gradient](https://design-tokens.github.io/community-group/format/#gradient)
- [stroke style](https://design-tokens.github.io/community-group/format/#stroke-style)
- [border](https://design-tokens.github.io/community-group/format/#border)
- [transition](https://design-tokens.github.io/community-group/format/#transition)

##### Token value alias / reference

If a token references another tokens `$value` the [dot notation syntax](https://design-tokens.github.io/community-group/format/#aliases-references) must be used.

```js
{
  "danger": {
    "$value": "{base.color.scale.red.5}",
    "$type": "color"
  }
}
```

### Alternatives

<!-- Describe the available alternatives if any, and why the current apporach was chosen -->

### Note

This ADR was moved over from `github/primer`, you can still [read the original ADR](https://github.com/github/primer/blob/9769214ce4442db228b6f3c6a72b830d942632e1/adrs/2022-09-28-design-token-structure.md).
