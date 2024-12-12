# Primer Primitives

[![npm package](https://img.shields.io/npm/v/@primer/primitives.svg?style=flat)](https://www.npmjs.com/package/@primer/primitives) [![Storybook](https://github.com/primer/primitives/actions/workflows/deploy.yml/badge.svg)](https://primer.style/primitives/storybook/) [![A11y contrast check](https://github.com/primer/primitives/actions/workflows/a11y-contrast.yml/badge.svg)](https://github.com/primer/primitives/actions/workflows/a11y-contrast.yml)

This repo contains values for color, spacing, and typography primitives for use with [Primer][primer], GitHub's design system.

![primer primitives diagram showing how the package connects with other primer libraries](./readme-light.png#gh-light-mode-only)
![primer primitives diagram showing how the package connects with other primer libraries](./readme-dark.png#gh-dark-mode-only)

## Install

This repository is distributed on [npm][npm]. After [installing npm][install-npm], you can install `@primer/primitives` with this command.

```sh
npm install --save @primer/primitives
```

## Usage

[Storybook](https://primer.style/primitives/storybook) | [Docs](https://primer.style/foundations/primitives/getting-started)

See [Primitives documentation](https://primer.style/foundations/primitives/getting-started) for more information on theming and using CSS variables.

Data is served from the `dist/` folder:

- `dist/css` contains CSS files with values available as CSS variables

All available imports:

```css
/* size/typography */
@import '@primer/primitives/dist/css/base/size/size.css';
@import '@primer/primitives/dist/css/base/typography/typography.css';
@import '@primer/primitives/dist/css/functional/size/border.css';
@import '@primer/primitives/dist/css/functional/size/breakpoints.css';
@import '@primer/primitives/dist/css/functional/size/size.css';
@import '@primer/primitives/dist/css/functional/size/viewport.css';
@import '@primer/primitives/dist/css/functional/typography/typography.css';

/* color */
@import '@primer/primitives/dist/css/functional/themes/light.css';
@import '@primer/primitives/dist/css/functional/themes/light-tritanopia.css';
@import '@primer/primitives/dist/css/functional/themes/light-high-contrast.css';
@import '@primer/primitives/dist/css/functional/themes/light-colorblind.css';
@import '@primer/primitives/dist/css/functional/themes/dark.css';
@import '@primer/primitives/dist/css/functional/themes/dark-colorblind.css';
@import '@primer/primitives/dist/css/functional/themes/dark-dimmed.css';
@import '@primer/primitives/dist/css/functional/themes/dark-high-contrast.css';
@import '@primer/primitives/dist/css/functional/themes/dark-tritanopia.css';
```

## Design token data

Design token data is stored in the [src/tokens](./src/tokens/) directory. These tokens are compiled with [style dictionary](https://amzn.github.io/style-dictionary/#/) in [scripts/buildTokens.ts](./scripts/buildTokens.ts).

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

```json5
{
  muted: {
    $value: '{base.color.blue.3}',
    alpha: 0.4, // the opacity value of the color === 40% opaque
    $type: 'color',
  },
}
```

#### Extensions property

According to the [w3c design token specs](https://design-tokens.github.io/community-group/format/#design-token), the [`$extensions`](https://design-tokens.github.io/community-group/format/#extensions) property is used for additional meta data.

For our Figma export we use the following meta data:

- `collection` the collection that the token is added to within Figma
- `mode` the mode that the token is added to within the collection in Figma
- `scopes` the scopes that are assigned to the token in Figma, the actual Figma compatible `scopes` are retreive from an object in the [figmaAttributes transformer](./src/transformers/figmaAttributes.ts)

Code example

```json5
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

```json5
{
  bgColor: {
    accent: {
      '@': {
        // values for bgColor-accent (default)
      },
      muted: {
        // values for bgColor-accent-muted
      },
    },
  },
}
```

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/primer
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
