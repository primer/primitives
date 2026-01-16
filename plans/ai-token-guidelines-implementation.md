# AI Token Guidelines - Implementation Plan

## Overview

Create a Style Dictionary format that outputs a dedicated JSON file with token usage guidelines for AI assistants, separate from the CSS output.

## Source Format (W3C Design Tokens)

Use existing `$description` and add `$extensions` for AI-relevant metadata:

```json
{
  "borderRadius": {
    "large": {
      "$value": "0.75rem",
      "$type": "dimension",
      "$description": "Large border radius (12px). Use for larger containers, dialogs, or when more visual softness is desired.",
      "$extensions": {
        "org.primer.ai": {
          "usage": ["button", "dialog", "card"],
          "rules": "MUST use for buttons"
        }
      }
    }
  }
}
```

## Output Format (AI Guidelines JSON)

Flat structure optimized for AI context:

```json
{
  "borderRadius-large": {
    "description": "Large border radius (12px). Use for larger containers, dialogs, or when more visual softness is desired.",
    "usage": ["button", "dialog", "card"],
    "rules": "MUST use for buttons"
  }
}
```

---

## Files to Create (8)

| File | Purpose |
|------|---------|
| `src/filters/hasAiExtensions.ts` | Filter for tokens with `org.primer.ai` extensions |
| `src/filters/hasAiExtensions.test.ts` | Unit tests |
| `src/formats/jsonAiGuidelines.ts` | Format outputting flat AI-optimized JSON |
| `src/formats/jsonAiGuidelines.test.ts` | Unit tests |
| `src/platforms/aiGuidelines.ts` | Platform configuration |
| `src/types/aiExtensions.d.ts` | TypeScript types |
| `integration/ai-guidelines.test.ts` | Integration tests |
| `contributor-docs/ai-token-guidelines.md` | Documentation |

## Files to Modify (6)

| File | Change |
|------|--------|
| `src/filters/index.ts` | Export `hasAiExtensions` |
| `src/formats/index.ts` | Export `jsonAiGuidelines` |
| `src/platforms/index.ts` | Export `aiGuidelines` |
| `src/primerStyleDictionary.ts` | Register `json/ai-guidelines` format |
| `scripts/buildTokens.ts` | Add AI guidelines build step |
| `README.md` | Document feature |

## Token Files to Enhance (10-15)

Priority tokens in `src/tokens/functional/`:
- `size/border.json5` - borderWidth tokens
- `color/bgColor.json5` - background colors
- `color/fgColor.json5` - foreground colors
- `shadow/shadow.json5` - shadows
- `size/size.json5` - spacing

---

## Implementation Steps

### Step 1: Add AI Extensions to Token Files (50-75 min)

Add `$extensions['org.primer.ai']` to 10-15 high-priority tokens:

```json5
{
  "borderWidth": {
    "thick": {
      "$value": "2px",
      "$type": "dimension",
      "$description": "Thick 2px border for emphasis...",
      "$extensions": {
        "org.primer.figma": { /* existing */ },
        "org.primer.ai": {
          "usage": ["focus-indicator", "selected-state", "emphasis-border"],
          "rules": "MUST use for focus rings on interactive elements. Do NOT use for subtle dividers."
        }
      }
    }
  }
}
```

### Step 2: Create AI Guidelines Filter (30 min)

**File**: `src/filters/hasAiExtensions.ts`

```typescript
import type {TransformedToken} from 'style-dictionary/types'

export const hasAiExtensions = (token: TransformedToken): boolean => {
  return (
    token.$extensions !== undefined &&
    typeof token.$extensions === 'object' &&
    'org.primer.ai' in token.$extensions
  )
}
```

### Step 3: Create AI Guidelines Format (60 min)

**File**: `src/formats/jsonAiGuidelines.ts`

```typescript
import {format} from 'prettier'
import type {FormatFn, FormatFnArguments} from 'style-dictionary/types'
import {sortByName} from 'style-dictionary/utils'

export const jsonAiGuidelines: FormatFn = ({dictionary}: FormatFnArguments) => {
  const tokens = dictionary.allTokens.sort(sortByName)
  
  const aiGuidelines: Record<string, {
    description?: string
    usage?: string[]
    rules?: string
  }> = {}
  
  for (const token of tokens) {
    const aiExt = token.$extensions?.['org.primer.ai']
    if (!aiExt) continue
    
    const guideline: {
      description?: string
      usage?: string[]
      rules?: string
    } = {}
    
    if (token.$description && typeof token.$description === 'string') {
      guideline.description = token.$description
    }
    if (aiExt.usage && Array.isArray(aiExt.usage)) {
      guideline.usage = aiExt.usage
    }
    if (aiExt.rules && typeof aiExt.rules === 'string') {
      guideline.rules = aiExt.rules
    }
    
    if (Object.keys(guideline).length > 0) {
      aiGuidelines[token.name] = guideline
    }
  }
  
  const output = JSON.stringify(aiGuidelines, null, 2)
  return format(output, {parser: 'json', printWidth: 120})
}
```

### Step 4: Register Format (5 min)

**File**: `src/primerStyleDictionary.ts`

```typescript
import {jsonAiGuidelines} from './formats/index.js'

PrimerStyleDictionary.registerFormat({
  name: 'json/ai-guidelines',
  format: jsonAiGuidelines,
})
```

### Step 5: Create AI Guidelines Platform (20 min)

**File**: `src/platforms/aiGuidelines.ts`

```typescript
import type {PlatformInitializer} from '../types/platformInitializer.js'
import {hasAiExtensions} from '../filters/index.js'
import type {PlatformConfig} from 'style-dictionary/types'

export const aiGuidelines: PlatformInitializer = (
  outputFile: string,
  prefix: string | undefined,
  buildPath: string
): PlatformConfig => ({
  prefix,
  buildPath,
  transforms: ['name/pathToKebabCase'],
  files: [
    {
      destination: outputFile,
      format: 'json/ai-guidelines',
      filter: hasAiExtensions,
      options: {
        outputReferences: false,
      },
    },
  ],
})
```

### Step 6: Integrate into Build (30 min)

**File**: `scripts/buildTokens.ts`

Add AI guidelines build section:

```typescript
/** -----------------------------------
 * AI Guidelines - Combined output
 * ----------------------------------- */
const aiSD = await PrimerStyleDictionary.extend({
  source: [
    'src/tokens/base/**/*.json5',
    'src/tokens/functional/**/*.json5',
  ],
  platforms: {
    aiGuidelines: aiGuidelines('ai/ai-token-guidelines.json', undefined, buildOptions.buildPath),
  },
  log: {
    warnings: 'disabled',
    verbosity: 'silent',
    errors: { brokenReferences: 'throw' },
  },
})
await aiSD.buildAllPlatforms()
```

### Step 7: Verify Package Config (5 min)

`package.json` already includes `"dist"` in files field - no changes needed.

### Step 8: Add Type Definitions (20 min)

**File**: `src/types/aiExtensions.d.ts`

```typescript
export interface AiExtensions {
  usage?: string[]
  rules?: string
}

export interface PrimerTokenExtensions {
  'org.primer.ai'?: AiExtensions
  'org.primer.figma'?: Record<string, unknown>
  'org.primer.overrides'?: Record<string, unknown>
  [key: string]: unknown
}
```

### Step 9: Documentation (40 min)

**File**: `contributor-docs/ai-token-guidelines.md`

Document:
- Overview and purpose
- Source format with examples
- Output format
- How to add AI guidelines to tokens
- Best practices

### Step 10: Testing (45 min)

- Unit tests for filter and format
- Integration test for generated file
- Manual verification

---

## Build Order

1. **Infrastructure** (Steps 2-6): Filter → Format → Platform → Register → Build integration
2. **Token Extensions** (Step 1): Add `$extensions['org.primer.ai']` to priority tokens  
3. **Polish** (Steps 7-10): Types, docs, tests

## Output

`dist/ai/ai-token-guidelines.json` (auto-included in npm package)

## Estimated Time

5-6 hours total

## Validation Checklist

- [ ] Filter correctly identifies tokens with AI extensions
- [ ] Format outputs valid JSON in correct structure
- [ ] Build process generates `dist/ai/ai-token-guidelines.json`
- [ ] File is included in npm package
- [ ] Only tokens with AI extensions are included
- [ ] All three fields (description, usage, rules) are correctly extracted
- [ ] Token names are flattened (kebab-case)
- [ ] No build errors or warnings
- [ ] Tests pass (unit + integration)
- [ ] Documentation is complete
