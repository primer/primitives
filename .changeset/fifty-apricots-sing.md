---
'@primer/primitives': patch
---

Migrate prettylights syntax tokens to canonical `prettylights-syntax-*` naming while preserving legacy compatibility.

- Migrate ANSI colors to canonical `ansi-*` naming with deprecated `color-ansi-*` aliases.
- Keep `codeMirror-*` tokens unchanged.
- Add modern canonical prettylights syntax token names (for example `entityTag`, `storageModifierImport`, `stringRegexp`, `metaDiffRange`).
- Keep legacy `color-prettylights-syntax-*` names as deprecated aliases pointing to canonical replacements.
- Update fallback and Storybook migration artifacts to reflect canonical naming and legacy alias support.
- Update syntax docs/guidelines output to document `prettylights-syntax-[element]` as canonical with deprecated legacy alias notes.
