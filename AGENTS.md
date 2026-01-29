# Primer Primitives

Design tokens for GitHub's Primer design system, built with Style Dictionary.

## Required Workflow

**After every change, run and fix any errors:**

```bash
npm run lint && npm run format:fix && npm run test && npm run build
```

## Key Files

- `src/tokens/` - Token definitions (JSON5)
- `DESIGN_TOKENS_SPEC.md` - Generated file, do not edit

## Detailed Guides

- [Token Authoring](contributor-docs/agents/token-authoring.md) - Token format, LLM metadata
- [Build System](contributor-docs/agents/build-system.md) - Build commands, outputs
