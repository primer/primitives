---
"@primer/primitives": minor
---

The [`dist`](https://unpkg.com/browse/@primer/primitives/dist/) directory now contains a `deprecations` directory with variable deprecation data organized by category:

```diff
  dist/
    js/
    ts/
    json/
    scss/
+   deprecations/
+     colors.json
```

Each JSON file in the `deprecations` directory contains a mapping of deprecated variables to replacement variables. Example:

```js
// dist/decprecations/colors.json
{
  "text.primary": "fg.default", // this means: `text.primary` is deprecated. Use `fg.default` instead
  "auto.blue.4": ["accent.fg, accent.emphasis"], // this means: `auto.blue.4` is deprecated. Use `accent.fg` or `accent.emphasis` instead
  "text.white": null // this means: `text.white` is deprecated. We don't have a replacement for it
}
```

This data will allow consumers of `@primer/primitives` (e.g. [Primer React](https://primer.style/react) and [Primer ViewComponents](https://primer.style/view-components)) to write linters to prevent usage of deprecated variables.
