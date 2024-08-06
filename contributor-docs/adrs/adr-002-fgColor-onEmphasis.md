# fgColor-onEmphasis

## Status

| Stage    | Status        |
| -------- | ------------- |
| Approved | ✅<!-- ✅ --> |
| Adopted  | 🚧<!-- 🚧 --> |

## Context

In `dark-high-contrast` theme, the `fgColor-onEmphasis` token is `black`. However, in all other dark themes this value is `white`.

![table comparing text color across all themes](https://github.com/user-attachments/assets/196c30dc-cd63-4829-af3d-23a45fff3bde)

This is difficult to maintain and makes our themes less predictable. This was likely introduced so that the background colors would be more intense, but the actual contrast seems less optimal.

## Decision

In an effort to make maintaining design tokens easier and to make the package more predictable we will make the `fgColor-onEmphasis` white in `dark high contrast` as well, aligning it with all other light and dark themes.

Given that the background colors will become darker, we will integrate more high contrast borders into Primer components to compensate.

![high contrast border changes](https://github.com/user-attachments/assets/a964efdb-2034-4464-bc9a-41471bfc0f35)

### Impact

Some other tokens need to be adjusted in `dark high contrast` to assure accessible contrasts.
