---
'@primer/primitives': minor
---

Add `'Noto Sans Backtick Fix'` before `'Noto Sans'` in the `fontStack.system`, `fontStack.sansSerif`, and `fontStack.sansSerifDisplay` tokens.

This is step 1 of a two-step rollout coordinated with `github/github-ui`. The `hx_browsers.scss` file in `github/github-ui` declares an `@font-face` under the family name `'Noto Sans'` that only covers `U+60` (backtick) as a workaround for a rendering bug. Per [CSS Fonts L4 §5.1](https://drafts.csswg.org/css-fonts-4/#font-face-rule), declaring an `@font-face` under `'Noto Sans'` shadows the system-installed Noto Sans for the whole page, causing body text on Linux Firefox to fall through to Helvetica/Arial/Nimbus (see [primer/css#3107](https://github.com/primer/css/issues/3107) and [github/primer#6890](https://github.com/github/primer/issues/6890)).

Adding `'Noto Sans Backtick Fix'` to the stack is a no-op at runtime until `github/github-ui` renames its `@font-face` to match in step 2. Once renamed, the workaround still applies for backticks while `'Noto Sans'` resolves to the system font for the rest of the text.
