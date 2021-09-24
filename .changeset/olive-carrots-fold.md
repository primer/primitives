---
"@primer/primitives": minor
---

 The [`dist`](https://unpkg.com/browse/@primer/primitives/dist/) directory now contains a `removed` directory with data about removed variables organized by category:

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

  Each JSON file in the `removed` directory contains a mapping of removed variables to replacement variables. Example:

  ```js
  // dist/removed/colors.json
  {
    "text.primary": "fg.default", // this means: `text.primary` is deprecated. Use `fg.default` instead
    "auto.blue.4": ["accent.fg, accent.emphasis"], // this means: `auto.blue.4` is deprecated. Use `accent.fg` or `accent.emphasis` instead
    "text.white": null // this means: `text.white` is deprecated. We don't have a replacement for it
  }
  ```

  This data will allow you to write linters to prevent usage of removed variables.
