# Primer Primitives

Design tokens for GitHub's Primer design system, built with Style Dictionary.

## MANDATORY Workflow

**After every change, run and fix any errors:**

```bash
npm run lint && npm run format:fix && npm run test && npm run build
```

## Key Files

- `src/tokens/` - Token definitions (JSON5)
- `DESIGN_TOKENS_SPEC.md` - Generated file, do not edit

## Plan Mode

- Make the plan extremely concise. Sacrifice grammar for the sake of concision.
- At the end of each plan, give me a list of unresolved questions to answer, if any.

## Detailed Guides

- [Token Authoring](contributor-docs/agents/token-authoring.md) - Token format, LLM metadata
- [Build System](contributor-docs/agents/build-system.md) - Build commands, outputs
