---
'@primer/primitives': minor
---

Add `'Noto Sans Backtick Fix'` before `'Noto Sans'` in `fontStack.system`, `fontStack.sansSerif`, and `fontStack.sansSerifDisplay`. The new family name is a non-shadowing alias for a consumer-defined `@font-face`, fixing body text falling through to Helvetica/Arial on Linux Firefox (see [primer/css#3107](https://github.com/primer/css/issues/3107), [github/primer#6890](https://github.com/github/primer/issues/6890)).
