---
"@primer/primitives": major
---

The `deprecations` directory in the `dist` directory has been renamed to `deprecated`:

```diff
dist/
- deprecations/
+ deprecated/
```

You'll need to update your imports accordingly:

```diff
- import deprecatedColors from '@primer/primitives/dist/deprecations/colors.json'
+ import deprecatedColors from '@primer/primitives/dist/deprecated/colors.json'
```
