# Neutral Scale Comparison: 16-Step Hybrid Approach vs PR #1340

## 📋 What's in This Directory

This analysis documents the **Hybrid Approach** to resolving Primer's neutral color scale transition (PR #1340), comparing it against the original blue-gray-to-green-gray mapping.

### Files

- **`index.html`** — Interactive visual comparison with color swatches side-by-side
- **`SCALE_COMPARISON.md`** — Detailed technical documentation with contrast metrics and token changes
- **`TOKENS_CHANGED.md`** — Quick reference of exactly which tokens were modified
- **`README.md`** — This file

## 🎯 Quick Summary

| Metric | PR #1340 | Hybrid Approach |
|--------|----------|-----------------|
| **Functional token changes** | 1,800+ | **2** ✅ |
| **Scale preservation** | 0-13 remapped | **0-13 unchanged** ✅ |
| **Contrast violations** | 0 | ~70 (marginal) |
| **Implementation complexity** | Very High | **Low** ✅ |

## 📊 View the Comparison

### Option 1: Interactive HTML (Recommended)
```bash
open docs/scale-analysis/index.html
```
Shows color swatches, hex values, and visual side-by-side comparison.

### Option 2: Read the Markdown
```bash
cat docs/scale-analysis/SCALE_COMPARISON.md
```
Full technical details, contrast metrics, and analysis.

### Option 3: Token Changes Reference
```bash
cat docs/scale-analysis/TOKENS_CHANGED.md
```
Quick list of exact file/line changes.

## 🔍 Key Finding

The **Hybrid Approach** reduces functional token updates from **1,800+ to just 2**:

1. **`bgColor.neutral.emphasis`** (dark mode): `neutral.8` → `neutral.9`
   - Improves contrast from 1.64:1 to 6.43:1 ✅

2. **`fgColor.onEmphasis`** (dark mode): `neutral.13` → `{base.color.white}`
   - Fixes broken reference (PR #1340 changed neutral.13 from white)

**Plus**: Minimal palette adjustments (S+1.5%, L-1%) to improve overall contrast

## 💡 Why This Matters

- **PR #1340 problem**: Blue-gray → Green-gray hue shift creates non-uniform lightness mapping
  - Example: Some neutral references shift from step 7→8, others from 8→9
  - Cascades across 1,800+ functional token references throughout the system
  - Makes maintenance rigid and review-heavy

- **Hybrid solution**: Keep scale steps 0-13 completely unchanged
  - Add steps 14-15 for ultra-light zone (new capacity)
  - Adjust palette subtly (S+1.5%, L-1%)
  - Fix contrast with 2 targeted token shifts
  - Result: ~70 remaining violations (mostly <0.5:1 below threshold, acceptable)

## 📈 Contrast Validation

**Before Hybrid Adjustments**: 190 violations
**After Hybrid Adjustments**: ~70 violations
**Improvement**: 63% reduction

Most remaining violations are in non-critical contexts (decorative elements, non-text surfaces).

## 🚀 Next Steps

1. Review visual comparison (`index.html`)
2. Validate that remaining 70 violations are acceptable
3. Get stakeholder approval on approach
4. Decide: Iterate further or deploy hybrid approach?

## 📚 Context

- **Base branch**: `main` (Primer primitives)
- **Experiment branch**: `experiment/16-step-neutral` (working implementation)
- **Related PR**: [#1340 - Blue-gray to green-gray transition](https://github.com/primer/primitives/pull/1340)

## 🔗 See Also

- `docs/color-scales-guide/` — Comprehensive guide on Primer color scale architecture
- PR #1361 — COLOR_SCALES.md documentation (in progress)
- `experiment/16-step-neutral` — Live branch with 16-step implementation
