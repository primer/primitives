---
'@primer/primitives': patch
---

Update shadow tokens to use W3C DTCG object format for dimension values

- Shadow token dimension properties (`offsetX`, `offsetY`, `blur`, `spread`) now use object format `{ value: number, unit: "px" }` instead of legacy strings like `"1px"`
- Updated `shadowToCss` transformer to handle W3C dimension objects
- Updated `ShadowTokenValue` type to require `DimensionTokenValue` for dimension properties
- Legacy string format for shadow dimensions is no longer supported
