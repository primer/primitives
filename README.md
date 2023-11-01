# Primer Primitives

[![npm package](https://img.shields.io/npm/v/@primer/primitives.svg?style=flat)](https://www.npmjs.com/package/@primer/primitives)

This repo contains values for color, spacing, and typography primitives for use with [Primer][primer], GitHub's design system.

![primer primitives diagram](https://user-images.githubusercontent.com/4608155/135384588-192c279f-020f-4544-a61f-559be6629f18.png)

## Install

This repository is distributed on [npm][npm]. After [installing npm][install-npm], you can install `@primer/primitives` with this command.

```sh
npm install --save @primer/primitives
```

## Usage

[Storybook](https://primer.style/primitives/storybook) | [Docs](https://primer.style/primitives/)

Primitive data is served in several formats from the `dist/` folder:

- `dist/scss` contains [SCSS][scss] files that define CSS variables to be imported into other SCSS files
- `dist/json` contains JSON files for each set of primitives
- `dist/js` contains CommonJS-style JavaScript modules for each set of primitives, as well as an index file that loads all of the primitives for all primitive types; you can access this via `require('@primer/primitives')`. The JavaScript modules also include TypeScript typings files for use in TypeScript projects.

## Deprecating variables

To deprecate a variable, define a mapping from the deprecated variable to its replacement(s) in a file called `deprecated.json` in the appropriate subdirectory of `data`:

```diff
  data/
    colors/
+     deprecated.json
    spacing/
    ...
```

```
// data/colors/deprecated.json

{
  "text.primary": "fg.default", // this means: `text.primary` is deprecated. Use `fg.default` instead
  "auto.blue.4": ["accent.fg, accent.emphasis"], // this means: `auto.blue.4` is deprecated. Use `accent.fg` or `accent.emphasis` instead
  "text.white": null // this means: `text.white` is deprecated. We don't have a replacement for it
}

```

During the build process, the `deprecated.json` files will be added to a `dist/deprecated` directory organized by variable category:

```diff
  dist/
    js/
    ts/
    json/
    scss/
+   deprecated/
+     colors.json
```

## Removing variables

When you're ready to remove a variable, first remove it's definitions:

```diff
// data/colors/vars/global_light.ts
import {get} from '../../../src/utils-v1'

export default {
  text: {
-   primary: get('scale.gray.9'),
    secondary: get('scale.gray.6')
  }
}
```

```diff
// data/colors/vars/global_dark.ts
import {get} from '../../../src/utils-v1'

export default {
  text: {
-   primary: get('scale.gray.1'),
    secondary: get('scale.gray.3')
  }
}
```

Then remove it from `deprecated.json` and add it to `removed.json`:

```diff
// data/colors/deprecated.json
{
- "text.primary": "fg.default"
}
```

```diff
// data/colors/removed.json
{
+ "text.primary": "fg.default"
}
```

During the build process, the `removed.json` files will be added to a `dist/removed` directory organized by variable category:

```diff
  dist/
    js/
    ts/
    json/
    scss/
    deprecated/
+   removed/
+     colors.json
```

## V8 Tokens

With `/primitives` version 8, design tokens have been moved to json files in the [src/tokens](./src/tokens/) directory. Those tokens are compiled with [style dictionary](https://amzn.github.io/style-dictionary/#/) in [scripts/buildTokens.ts](./scripts/buildTokens.ts).

To make working with tokens easier, we added some additional functionality on top of what style dictionary comes with:

### Extending and Overwriting

We have two main color modes: `light` and `dark`. Additionally we have specific accessibility modes based on those, such as `light high contrast`.

We added a way to create a mode by only including the changes from the main mode. We call this `overrides`.
`Overrides` are cerated in `src/tokens/functional/color/[light|dark]/overrides/` and have to be added to [themes.config.ts](./scripts/themes.config.ts) to work.
In the individual files, e.g. `light.high-contrast.json5` you can now add tokens in the same structure as in any main file, e.g. `primitives-light.json5` to replace them.

### Transforming Colors with Alpha and Mix

#### Alpha

You can create color tokens that inherit a color but have a different alpha value by adding the `alpha` property.
**Note:** The original alpha value will be replaced by your value. If you add `alpha: 0.4` to a color, it doesn't matter if the color you reference has no `alpha` or `alpha: 0.7`, the new token will always have newly the defined value of `alpha: 0.4`.

```js
{
  muted: {
    $value: '{base.color.blue.3}',
    alpha: 0.4, // the opacity value of the color === 40% opaque
    $type: 'color',
  }
}
```

#### Mix

In rare cases, you may need to create a color between two steps in the color scale, e.g. between `gray.4` and `gray.5`. A common example are interactive states, like `hover` where a full step on the color scale would be to much. For those cases you can use the `mix` property.

The `mix` proeprty mixes the color it gets into the main color from the `$value` attribute. The amount added is controlled by the `weight`. A weight of `0.1` adds 10% of the color, and a weight of `0.75` adds 75%.

A `mix` proprty must always have a `color` and a `weight` child. `color` can be a `hex` value or a reference to a valid color. The `weight` property must receive a value between `0.0` and `1`.

```js
{
  control: {
  $value: '{base.color.gray.4}', // main color
  $type: 'color',
  mix: {
    color: '{base.color.gray.5}', // color to mix into the main color
    weight: 0.2, // amount of the mix color that is added === 20% of gray.5 is mix into gray.4
  },
}
}
```

#### Extensions property

According to the [w3c design token specs](https://design-tokens.github.io/community-group/format/#design-token), the [`$extensions`](https://design-tokens.github.io/community-group/format/#extensions) property is used for additional meta data.

For our Figma export we use the following meta data:

- `collection` the collection that the token is added to within Figma
- `mode` the mode that the token is added to within the collection in Figma
- `scopes` the scopes that are assigned to the token in Figma, the actual Figma compatible `scopes` are retreive from an object in the [figmaAttributes transformer](./src/transformers/figmaAttributes.ts)

Code example

```js
  bgColor: {
    $value: '{borderColor.accent.muted}',
    $type: 'color',
    $extensions: {
      'org.primer.figma': {
        collection: 'pattern/mode',
        mode: 'light',
        scopes: ['bgColor'],
      },
    },
  }
```

#### Token names and @-hack

Token names have to be in camelCase or kebab-case and may only include letters, numbers and `-`. This is enforced by the token validation (`npm run lint:tokens`).
The only acception is the `@`-hack. This is used when you want to have a default value and sub-values, e.g. `bgColor.accent` and `bgColor.accent.muted`.
In this case you can create the follwing structure. The `@` will be removed from the name and act as the default value.

```js
{
  bgColor: {
    accent: {
      "@": {
        // values for accent (default)
      },
      "muted": {
        // values for accent-muted
      }
    }
  }
}
```

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/primer
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[scss]: https://sass-lang.com/
