---
"@primer/primitives": major
---

# Updated neutral base color scales

## Changes

- Theme specific neutral scales have been replaced with two new scales: `light` and `dark`.
- The new `light` and `dark` scales are inverted, where 0 is the lightest shade in `light` and the darkest shade in `dark`.
- Functional color tokens have been updated to use the new `light` and `dark` scales, and several overrides have been removed due to the new inverted design.

## Migration

- Functional color tokens all work as expected and have been tested to meet minimum contrast requirements.
- If you are using `primer/primitives` base color scales directly, you may need to update how those colors are applied. See the migration table which outlines approximately how the new colors map to the old colors.

### Light scale migration

| Old color | New color |
| --------- | --------- |
| `0`       | `0`       |
| `1`       | `2`       |
| `2`       | `5`       |
| `3`       | `7`       |
| `4`       | `7`       |
| `5`       | `8`       |
| `6`       | `8`       |
| `7`       | `9`       |
| `8`       | `10`      |
| `9`       | `11`      |

### Dark scale migration

| Old color | New color |
| --------- | --------- |
| `9`       | `0`       |
| `8`       | `1`       |
| `7`       | `2`       |
| `6`       | `4`       |
| `5`       | `6`       |
| `4`       | `7`       |
| `3`       | `8`       |
| `2`       | `9`       |
| `1`       | `10`      |
| `0`       | `11`      |

### Dark high contrast scale migration

| Old color | New color |
| --------- | --------- |
| `9`       | `0`       |
| `8`       | `3`       |
| `7`       | `5`       |
| `6`       | `6`       |
| `5`       | `7`       |
| `4`       | `8`       |
| `3`       | `9`       |
| `2`       | `10`      |
| `1`       | `11`      |

### Dark dimmed scale migration

| Old color | New color |
| --------- | --------- |
| `9`       | `1`       |
| `8`       | `2`       |
| `7`       | `4`       |
| `6`       | `5`       |
| `5`       | `6`       |
| `4`       | `7`       |
| `3`       | `7`       |
| `2`       | `8`       |
| `1`       | `9`       |
| `0`       | `10`      |


### Light high contrast scale migration

| Old color | New color |
| --------- | --------- |
| `0`       | `white`   |
| `1`       | `2`       |
| `2`       | `5`       |
| `3`       | `7`       |
| `4`       | `7`       |
| `5`       | `8`       |
| `6`       | `9`       |
| `7`       | `10`      |
| `8`       | `11`      |
| `9`       | `black`   |
