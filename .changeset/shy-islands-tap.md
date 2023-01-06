---
'@primer/primitives': minor
---

Deprecated marketing design tokens for Button components

Marketing tokens will be served from `@primer/brand-primitives` in future.

```bash
npm install --save @primer/brand-primitives
```


```diff
- ---color-mktg-btn-bg
+ --brand-Button-background-base 
```

```diff
- --color-mktg-btn-shadow-outline
+ --brand-Button-shadow-default
```

```diff
- --color-mktg-btn-shadow-focus
+ --brand-Button-shadow-focus
```

```diff
- --color-mktg-btn-shadow-hover
+ --brand-Button-shadow-primary-hover
```

```diff
- --color-mktg-btn-shadow-muted
+ --color-mktg-btn-shadow-hover-muted
```

:link: [See the `0.9.0` for all other tokens.](https://unpkg.com/browse/@primer/brand-primitives@0.9.0/lib/design-tokens/css/tokens/functional/components/button/colors-with-modes.css)