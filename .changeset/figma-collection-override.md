---
"@primer/primitives": patch
---

Fix Figma base scale output for override themes (dark-dimmed, dark-high-contrast, light-high-contrast) to include all tokens. Previously, inherited tokens (e.g. neutral, black, transparent) retained the parent theme's collection name and were missing from the override theme's Figma collection.
