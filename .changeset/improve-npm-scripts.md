---
"@primer/primitives": patch
---

Improve npm script names for consistency and clarity

- Rename `build:config` → `build:types`
- Rename `validate:contrast` → `check:contrast`
- Rename `format:fix` → `format` and `format` → `format:check`
- Rename `install:storybook` → `storybook:install` and `start:storybook` → `storybook`
- Add `check` script combining lint, format check, test, and build
- Fix double clean in build pipeline (`prebuild` + explicit `clean`)
- Add `--max-warnings=0` to `lint` script
- Fix double-space typo in format command
- Normalize `./scripts/` → `scripts/` path prefixes
