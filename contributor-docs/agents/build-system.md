# Build System

Guide for understanding and modifying the token build pipeline.

## Build Commands

```bash
npm run build           # Full build (all outputs)
npm run build:tokens    # CSS, JSON, docs outputs
npm run build:fallbacks # Fallback theme files
npm run build:figma     # Figma-specific outputs
npm run build:config    # TypeScript definitions
npm run build:llm       # LLM guidelines (DESIGN_TOKENS_SPEC.md)
```

## Other Commands

```bash
npm run lint:fix          # Auto-fix linting issues
npm run format:fix        # Auto-fix formatting
npm run validate:contrast # Check color contrast ratios
```

## Build Architecture

This repo uses [Style Dictionary](https://styledictionary.com/) with custom extensions:

| Directory            | Purpose                                   |
| -------------------- | ----------------------------------------- |
| `src/platforms/`     | Output platform configs (CSS, JSON, etc.) |
| `src/formats/`       | Custom output formatters                  |
| `src/transformers/`  | Value transformations                     |
| `src/filters/`       | Token filtering logic                     |
| `src/preprocessors/` | Pre-build token processing                |
| `src/parsers/`       | Token file parsing                        |

## Key Files

| File                           | Purpose                                 |
| ------------------------------ | --------------------------------------- |
| `scripts/buildTokens.ts`       | Main build orchestration                |
| `scripts/buildLlm.ts`          | LLM guidelines build + shared constants |
| `src/primerStyleDictionary.ts` | Style Dictionary configuration          |
| `src/schemas/`                 | Zod schemas for token validation        |

## Modifying Build Output

### Add a new output format

1. Create formatter in `src/formats/`
2. Register in `src/primerStyleDictionary.ts`
3. Add platform config in `src/platforms/`
4. Update build script if needed

### Modify token transformation

1. Check existing transformers in `src/transformers/`
2. Create or modify transformer
3. Register in platform config

### Filter tokens from output

1. Check existing filters in `src/filters/`
2. Create or modify filter
3. Apply in platform config's `files[].filter`
