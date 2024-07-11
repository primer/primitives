# fgColor-onEmphasis

## Status

| Stage | Status |
| --- | --- |
| Approved | 🚧<!-- ✅ --> |
| Adopted | 🚧<!-- 🚧 --> |

## Context

The `fgColor-onEmphasis` token is using a white color for all color themes apart from `dark high contrast`.
![image](https://github.com/user-attachments/assets/196c30dc-cd63-4829-af3d-23a45fff3bde)

There is no need for this. We assume this was done to have the background colors a little bit more intense, but the actual contrast seems less optimal.
It also presents a lot of complication as the colors have to be inverted for just this seem.

## Decision

In an effort to make maintaining design tokens easier and to make the package more predictable we will make the `fgColor-onEmphasis` white in `dark high contrast` as well, aligning it with all other light and dark themes.

### Impact

Some other tokens need to be adjusted in `dark high contrast` to assure accessible contrasts.
