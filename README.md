# Primer Primitives

This repo contains values for color, spacing, and typography primitives for use with [Primer][primer], GitHub's design system.

## Install

This repository is distributed on [npm][npm]. After [installing npm][install-npm], you can install `@primer/primitives` with this command.

```sh
$ npm install --save @primer/primitives
```

## Usage

Primitive data is served in several formats from the `dist/` folder:

* `dist/scss` contains [SCSS][scss] files that define CSS variables to be imported into other SCSS files
* `dist/json` contains JSON files for each set of primitives
* `dist/js` contains CommonJS-style JavaScript modules for each set of primitives, as well as an index file that loads all of the primitives for all primitive types; you can access this via `require('@primer/primitives')`. The JavaScript modules also include TypeScript typings files for use in TypeScript projects.

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/primer
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[scss]: https://sass-lang.com/
