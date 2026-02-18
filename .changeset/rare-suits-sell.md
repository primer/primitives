---
'@primer/primitives': patch
---

Change dimension tokens to W3C DTCG format (breaking change)

- The transformers `dimensionToRem`, `dimensionToRemPxArray`, and `dimensionToPixelUnitless` now only accept W3C DTCG object-format dimension tokens. Legacy string-based dimension values are no longer supported and will throw errors.

- In the W3C DTCG format, only `px` and `rem` units are supported. Support for `em` units has been removed.
