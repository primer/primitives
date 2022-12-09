# Primer Primitives

[![npm package](https://img.shields.io/npm/v/@primer/primitives.svg?style=flat)](https://www.npmjs.com/package/@primer/primitives)

This repo contains values for color, spacing, and typography primitives for use with [Primer][primer], GitHub's design system.

![primer primitives diagram](https://user-images.githubusercontent.com/4608155/135384588-192c279f-020f-4544-a61f-559be6629f18.png)

## Install

This repository is distributed on [npm][npm]. After [installing npm][install-npm], you can install `@primer/primitives` with this command.

```sh
$ npm install --save @primer/primitives
```

## Usage

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

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/primer
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[scss]: https://sass-lang.com/
