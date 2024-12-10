# Color contrast requirements

## Status

| Stage    | Status |
| -------- | ------ |
| Approved | ✅     |
| Adopted  | ✅     |

## Context

As part of the work to [fix critical accessibility issues](https://github.com/github/primer/issues/1371) in our default color modes we compiled a list of color contrast requirements[^discussions/1272].
We compiled a simple and clear list from all relevant pages of the [WCAG 2.1 spec](https://www.w3.org/TR/WCAG21/).

The requirements are generally helpful guidelines but specifically required to be [WCAG 2.1](https://www.w3.org/TR/WCAG21/) compliant.
This in turn is important for governmental requirements like [Section 508 of the The Rehabilitation Act](https://www.section508.gov/manage/laws-and-policies/)[^issues/1302] and the [European Accessibility Act (EAA)](https://ec.europa.eu/social/main.jsp?catId=1202&intPageId=5581&langId=en).

## Decision

### Text contrast

| Contrast pair                            | Ratio           | Description                                                                                                                                       |
| ---------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Text vs. backgrounds<sup>_</sup>_(bg)\* | `4.5:1`[^1.4.3] | Any text color vs. any background color it can be used on                                                                                         |
| Link vs. Text                            | `3:1`           | Links need to have a `4.5:1` ratio against the background AND a `3:1` ratio against surrounding text or be underlined[^link]                      |
| Placeholder text vs. bg                  | `4.5:1`         | Placeholder text must have a `4.5:1` contrast to the background e.g. input background[^placeholder], or a visible text label[^1.4.3] must be used |
| Disabled text vs. bg                     | `none`          | Disabled text (text in a disabled control) does not have any contrast requirements[^1.4.3]                                                        |
| Decorative text<sup>\*\*</sup> vs. bg    | `none`          | Decorative text does not have any contrast requirements[^1.4.3]                                                                                   |

<sup>*</sup> *Backgrounds is any color an element like text is placed on, like the page background, the background color of a `card` component or the fill of an `input` field.*  
<sup>\*\*</sup>*Decorative text is defined as serving only an aesthetic purpose, providing no information, and having no functionality.[^pure-decoration]\*

### State contrast

| Contrast pair                                   | Ratio  | Description                                                                                         |
| ----------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------- |
| Focus border vs. bg                             | `3:1`  | Focus border (1 or 2px) against adjacent colors[^focus]                                             |
| States within component; e.g. resting vs. hover | `none` | There is no specific color contrast requirement between two states of a component[^wcag/issues/849] |
| States that exist together                      | `3:1`  | This is referring to something like the selected and unselected state in a segmented control        |

### Border contrast

| Contrast pair                      | Ratio  | Description                                                                                                                                                                                                             |
| ---------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Border of *empty* control vs. bg   | `3:1`  | An empty control without any text or icon must have a background or border that has a `3:1` contrast with the bg[^understanding-1.4.11][^issue/1302/eric]                                                               |
| Border of control with text vs. bg | `none` | If text passes `4.5:1`, no background or border contrast is required[^understanding-1.4.11][^issue/1302/eric]                                                                                                           |
| Decorative border vs. bg           | `none` | Borders that mark regions of a page, view, or component and don't mark boundaries of interaction are largely seen as decorative[^pure-decoration] or graphical and have no contrast requirements[^understanding-1.4.11] |

### Impact

We are auditing primer `light default` and `dark default` mode and exploring solutions for issues we discover.

### Alternatives

<!-- Describe the available alternatives if any, and why the current apporach was chosen -->

### Risks

- WCAG specs are sometimes complex and vague and may be subject to mis-interpretation. If this is the case we must adjust the rules above.

## References

[^discussions/1272]: <https://github.com/github/primer/discussions/1272>

[^issues/1302]: <https://github.com/github/primer/issues/1302>

[^pure-decoration]: <https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html#dfn-pure-decoration>

[^wcag/issues/849]: <https://github.com/w3c/wcag/issues/849>

[^understanding-1.4.11]: <https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html>

[^issue/1302/eric]: <https://github.com/github/primer/issues/1302#issuecomment-1268991566>

[^1.4.3]: <https://www.w3.org/TR/WCAG21/#contrast-minimum>

[^placeholder]: <https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#:~:text=The%20minimum%20contrast%20success%20criterion%20(1.4.3)%20applies%20to%20text%20in%20the%20page,%20including%20placeholder%20text>

[^focus]: <https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-minimum.html>

[^link]: <https://www.w3.org/TR/WCAG20-TECHS/G183.html>
