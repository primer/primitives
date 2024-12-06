# Repository structure for primer primitives

## Status

| Stage    | Status |
| -------- | ------ |
| Approved | ✅     |
| Adopted  | ✅     |

## Context

With an update of our design token repository [`primer/primitives`](https://github.com/primer/primitives) we are also refreshing the structure of the repository and the shape of the output.

### Why is this important?

While the input is only used by the Primer team, the output is shared in the bundle and consumed by other teams at GitHub. Changing the output will result in breaking changes that need to be address by consumers.

### Why do we need to change?

We intend to future-proof our build system by adopting ([Style Dictionary](https://amzn.github.io/style-dictionary)) conventions that align tightly to the proposed [W3C design token standards](https://design-tokens.github.io/community-group/format/).

Additionally moving to a `json` format and a known tool will make contributions easier for people with different levels of knowledge of the tools and the repo.

## Decision

The Primer primitives repository has three main concerns: source, transformation, output.

#### Token source files

Token source files should be stored as `.json` or `.json5` files in the `src/tokens/` directory.
The input files are simple definitions of tokens that can be manually or automatically created.
There must not be any interpolation done in the source files. Changes must only be done during the transformation process.

We are using JSON files because it is the [current recommendation](https://design-tokens.github.io/community-group/format/#extensions) for design token files from the w3c.

It is also a language-agnostic data interchange format that makes it easy for anyone to edit input token files without code knowledge.

#### Token transformation

Token transformation via [Style Dictionary](https://amzn.github.io/style-dictionary) is done in the `scripts/build.ts` file. Custom functions that are used in the `scripts/build.ts` file should be store in the `src/` directory.

The `src` directory is organized in subdirectories that reflect [Style Dictionary](https://amzn.github.io/style-dictionary) functionality.

```bash
src/
  actions/
  filters/
  formats/
  parsers/
  platforms/
  preprocessors/
  schemas/
  test-utilities/
  tokens/ # source tokens (`.json` or `.json5`)
  transformers/
  types/ # types for tokens used in typescript output of tokens
  utilities/ # functions that don't directly map to one of the core concepts
```

#### Token output files

The token output files are placed in the `dist/` folder.
Once an output file is written it should not be change during the build or release step.

### Design token source

#### Source folder structure

The source design tokens are placed in the `base/` and `functional/` folders.

```bash
src/tokens/
  # base color, size and typography scale to be used in functional tokens
  base/
    color/
      dark/
        dark.json
        dark.dimmed.json
        # ...
    light  /
      light.json
      light.tritanopia.json
      # ...

    size/
      size.json

    typography/
      typography.json

  fallback/
    color-fallbacks.json

  functional/
    border/
      dark.json
      light.json

    color/
      dark/
        app-dark.json5
        patterns-dark.json5
        # ...
        overrides/
          dark.dimmed.json5
          # ...
      light/
        app-light.json5
        patterns-light.json5
        # ...
        overrides/
          light.high-contrast.json5
          # ...

    motion/
      loading.json5
      patterns.json
      #...

    shadow/
      dark.json5
      light.json5

    size/
      border.json5
      breakpoints.json5
      #...

    typography/
      typography.json5

  removed/
    color.json # removed colors
    size.json # removed sizes
    typography.json # removed typography
```

#### Token source files

Token source files must be `.json` or `.json5` files that adhere to the [w3c standard](https://design-tokens.github.io/community-group/format/). The only exception are the files in `removed/`.
To learn more about token source files refer to the [design token structure adr](./2022-09-28-design-token-structure.md).

##### Removed tokens source files

The source files in `removed/` hold a simple one-dimensional object specifing the path of a removed token in dot notation and the replacement or `null` if no replacement is available.

```json
{
  "fade.white85": null,
  "alert.info.text": "fg.default"
}
```

### Design token output

This is relevant for consumers of the package.

#### Output folder structure

```bash
dist/
  css/
    base/
      color/
        dark.css
        dark-dimmed.css
        light.css
        #...
      size/
        size.css
      typography/
        typography.css
    functional/
      themes/
        dark.css
        dark-dimmed.css
        light.css
        #...
      size/
        size.css
        border.css
        breakpoints.css
        #...
      typography/
        typography.css

  js/
    base/
      color/
      size/
      typography/
      #...
    functional/
      themes/
      size/
      typography/
      #...

  ts/
    @types/
      base/
        color/
          BaseColor.d.ts
        size/
        typography/
        #...
      functional/
        themes/
          FunctionalColors.d.ts
        size/
        typography/
        #...

    color/
      base/
        dark.ts
        dark-dimmed.ts
        light.ts
        #...
      functional/
        dark.ts
        dark-dimmed.ts
        light.ts
        #...

  docJson/
    tokens.json # all tokens in one file

  scss/ # will probably be removed in the future
    color/
    size/
    typography/

  deprecated/
    color.json # deprecated colors
    size.json # deprecated sizes
    typography.json # deprecated typography

  removed/
    color.json # removed colors
    size.json # removed sizes
    typography.json # removed typography
```

#### Output files

Generally token output files should not reference any design tokens from the base scales and only include tokens we want to be used.

###### CSS

```css
/* Base colors */
:root {
  --base-color-scale-black: #000000;
  --base-color-scale-blue-0:  /*#...*;
}

/* Functional colors */
[data-color-mode='light'][data-light-theme='light'],
[data-color-mode='auto'][data-light-theme='light'] {
  --primer-color-fg-default: #c9d1d9;
  --primer-color-fg-muted: #8b949e;
  --primer-color-fg-subtle: #6e7681;
  --primer-color-fg-on-emphasis: #fff;
}
```

###### Doc JSON

A flattened JSON file, that does not have nesting of tokens anymore. Instead the entire `path` of the token is used as the name.

```js
{
"button-default-bgColor-rest": {
    "$extensions": {
      "org.primer.figma": {
        "collection": "mode",
        "group": "component (internal)",
        "scopes": ["bgColor"]
      }
    },
    "filePath": "src/tokens/functional/color/dark/patterns-dark.json5",
    "isSource": true,
    "original": {
      "$value": "{control.bgColor.rest}",
      "$type": "color",
      "$extensions": {
        "org.primer.figma": {
          "collection": "mode",
          "group": "component (internal)",
          "scopes": ["bgColor"]
        }
      }
    },
    "name": "button-default-bgColor-rest",
    "attributes": {},
    "path": ["button", "default", "bgColor", "rest"],
    "value": "#262c36",
    "type": "color"
  },
}
```

###### Fallbacks

A one dimensional JSON object with concatenated token path and the css fallback value.

```json
{
  "--topicTag-borderColor": "var(--color-topic-tag-border)",
  "--highlight-neutral-bgColor": "var(--color-search-keyword-hl)",
  "--control-minTarget-fine": "1rem"
}
```

##### Figma

A JSON file with an Array of one-dimensional objects, representing each token. Values are converted to Figma-readable formats. This file is used with the [Primer Design Token Manager Plugin](https://www.figma.com/community/plugin/1248222134491413101/primer-design-token-importer) for Figma.

```json5
[
  {
    name: 'highlight/neutral/bgColor',
    value: {
      r: 0.8235294117647058,
      g: 0.6,
      b: 0.13333333333333333,
      a: 0.4,
    },
    type: 'COLOR',
    alpha: 0.4,
    refId: 'mode/highlight/neutral/bgColor',
    reference: 'base/color/dark/base/color/yellow/3',
    collection: 'mode',
    mode: 'dark',
    group: 'component',
    scopes: ['FRAME_FILL', 'SHAPE_FILL'],
  },
  //...
]
```

##### StyleLint

A specific JSON file to be used with [Primers styleLint config](https://github.com/primer/stylelint-config).

##### Deprecated and removed output files

The output files in `deprecated/` and `removed/` are a simple one-dimensional object in JSON notation.
The key specifies the path of the deprecated or removed token and the value the token that should be used as a replacement or `null` if no replacement is suggested.

```json
{
  "fade.white85": null,
  "alert.info.text": "fg.default"
}
```

If no depreacted or removed token is currently defined, no file will be created.

### Impact

— [Minor]: The [W3C design token standard](https://design-tokens.github.io/community-group/format/) is still a draft. There may be minor changes in the future we would have to deal with.

### Alternatives

<!-- Describe the available alternatives if any, and why the current apporach was chosen -->

### Note

This ADR was moved over from `github/primer`, the original can be found here: <https://github.com/github/primer/blob/9769214ce4442db228b6f3c6a72b830d942632e1/adrs/2022-09-22-primer-primitive-structure.md>
