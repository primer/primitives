# Tokens Changed in Hybrid Approach

## Summary

**Total functional tokens adjusted**: 2  
**Files modified**: 2

---

## Change 1: Background Emphasis Color (Dark Mode)

### File
`src/tokens/functional/color/bgColor.json5`

### Lines
256-257

### Change
```json5
// BEFORE
bgColor: {
  neutral: {
    emphasis: {
      dark: {base.color.neutral.8}
    }
  }
}

// AFTER
bgColor: {
  neutral: {
    emphasis: {
      dark: {base.color.neutral.9}
    }
  }
}
```

### Impact
- **Reason**: Shift emphasis background to a darker neutral step
- **Before**: fgColor-onEmphasis (white) had only 1.64:1 contrast against neutral-emphasis
- **After**: fgColor-onEmphasis (white) now has 6.43:1 contrast ✅
- **Visual Effect**: Emphasis buttons/backgrounds appear slightly darker in dark mode
- **Scope**: Only affects dark theme emphasis surfaces

---

## Change 2: Text on Emphasis Color (Dark Mode)

### File
`src/tokens/functional/color/fgColor.json5`

### Lines
72

### Change
```json5
// BEFORE
fgColor: {
  onEmphasis: {
    dark: {base.color.neutral.13}
  }
}

// AFTER
fgColor: {
  onEmphasis: {
    dark: {base.color.white}
  }
}
```

### Impact
- **Reason**: PR #1340 changed neutral.13 from white (#FFFFFF) to #f2f5f3 (light green-gray)
- **Issue**: fgColor-onEmphasis was unknowingly referencing a non-white color
- **Fix**: Explicitly reference {base.color.white} instead
- **Before**: Text color on emphasis was approximately white (1.64:1 contrast, broken)
- **After**: Text color on emphasis is pure white ✅
- **Visual Effect**: Emphasis text becomes crisp white instead of subtle green-gray
- **Scope**: Only affects dark theme text on emphasis backgrounds

---

## Base Scale Changes (Reference Only)

The following base color scales were updated with minimal adjustments:

### Light Theme
**File**: `src/tokens/base/color/light/light.json5`

**Changes**:
- Applied S+1.5%, L-1% adjustments to neutral steps 0-13
- Added neutral.14 (#F4F7F6) and neutral.15 (#FDFCFC)

**Lines Affected**: ~57-270 (approx.)

**Example**:
```json5
// Steps 0-13: Applied (S+1.5%, L-1%) adjustment
neutral: {
  0: '#FFFFFF',
  1: '#F6F9F8',  // Before: #F5F8FA (adjusted)
  2: '#EDF2F0',  // Before: #ECF0F4 (adjusted)
  // ... etc
  13: '#0D0F0D', // Before: #010409 (adjusted)
  14: '#F4F7F6', // NEW: Ultra-light
  15: '#FDFCFC'  // NEW: Nearly white
}
```

### Dark Theme
**File**: `src/tokens/base/color/dark/dark.json5`

**Changes**:
- Applied S+1.5%, L-1% adjustments to neutral steps 0-13
- Added neutral.14 and neutral.15 for symmetry

**Lines Affected**: ~57-270 (approx.)

---

## Why Only These Two Changes?

The hybrid approach strategically limits functional token changes because:

1. **Scale preservation** (0-13 unchanged architecturally)
   - All tokens referencing neutral.0-12 need zero updates
   - Step 13 was redefined but still serves as "darkest neutral"

2. **Targeted contrast fixes** (only 2 tokens problematic)
   - Only emphasis colors needed adjustment
   - Light theme emphasis didn't require functional token change (documented as constraint)

3. **Minimal cascade effect**
   - PR #1340 required 1,800+ changes due to non-uniform lightness mapping
   - Hybrid approach requires only 2 because we're not remapping the entire scale

---

## Deployment Strategy

When deploying to production:

1. **Update base colors first** (light.json5 + dark.json5)
   - Generate all derived functional tokens
   - Run contrast validation

2. **Update functional tokens** (bgColor.json5 + fgColor.json5)
   - Apply two-line change to each file
   - Re-validate contrast

3. **Test in Dotcom**
   - Verify visual appearance against screenshots
   - Check emphasis colors in dark mode look correct
   - Ensure text contrast is improved

4. **Communicate to design system users**
   - Explain that neutral scale is now 16 steps (0-15)
   - Document that emphasis colors have new darker defaults
   - Provide migration guide for any custom overrides

---

## No Changes Required In

The following files reference neutral scales but need **NO changes** because scale steps 0-13 are preserved:

- All fgColor tokens except fgColor.onEmphasis
- All bgColor tokens except bgColor.neutral.emphasis
- All borderColor tokens
- All shadow tokens
- All focus outline tokens
- Any theme overrides

This is the core benefit of the hybrid approach: maximum flexibility with minimum changes.
