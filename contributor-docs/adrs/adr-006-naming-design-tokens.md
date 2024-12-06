# Design token naming guidelines

## Status

| Stage    | Status |
| -------- | ------ |
| Approved | ✅     |
| Adopted  | ✅     |

## Context

In an effort to strengthen and extend Primer's design data layer, `primer-primitives`, the team has designed a new set of tokens that systemize sizing, spacing, typography and more in a way that any Primer framework can consume (see related [epic](https://github.com/github/primer/issues/681)).

With the addition of this expanded set of design tokens, we need a standard naming convention to ensure consistency across token groups. A standard naming convention helps us better communicate, document, and author design tokens.

This convention applies to all tokens including component, sizing, spacing, typography, motion and color.

## Decision

The design token naming convention will be based on three categories: **base, component/pattern, functional**. Each category is a subset of the over-arching convention.

`prefix-namespace-pattern-variant*-property-variant*-scale`

\*variant scope changes based on the category

<img width="4325" alt="graphic listing out namespace, pattern, variant, property, variant, and scale all color coded to match ADR docs" src="https://user-images.githubusercontent.com/18661030/208748416-6d753724-617c-4df4-b502-c15d9a2e0459.png">

## Base

Base tokens represent global, constant values. These are the lowest level tokens and map directly to a raw value.

<img width="4026" alt="a graphic illustrating five words, uniquely colored and displayed left to right in a horizontal direction. Words are prefix, namespace (with an asterix), property (with an asterix), variant and scale. Followed by color coded tokens, which will be described in the next section." src="https://user-images.githubusercontent.com/18661030/208561424-b3381019-2354-4403-a94b-bc5697272a46.png">

[prefix]-[namespace*]-[property*]-[variant]-[scale]

### Example `base` tokens

```
brand-base-color-lime-5
base-size-4
base-color-green-5
base-fontWeight-semibold
```

## Functional

<img width="4026" alt="a graphic illustrating six words, each uniquely color coded and displayed left to right in a horizontal direction. Words are prefix, type, property (with an asterix), variant and scale. Followed by example tokens that are similarly color coded and will be described again in the next section." src="https://user-images.githubusercontent.com/18661030/208748480-73e418ec-21d9-45b7-a514-2fb48f0076d2.png">

[prefix]-[property*]-[variant]-[scale]

```
bgColor-inset
borderColor-default
brand-borderWidth-thin
boxShadow-inset-thick
```

## Component/pattern

Component/pattern represents component and pattern specific tokens which should only be used in component CSS.

<img width="4026" alt="a graphic illustrating six words, each uniquely color coded and displayed left to right in a horizontal direction. Words are prefix, pattern, variant, type, property (with an asterix) and scale. Followed by similarly color coded tokens, which will be described again in the next section." src="https://user-images.githubusercontent.com/18661030/208748528-ba2f7db7-a167-48c7-8861-68203a0b98de.png">

[prefix]-[pattern*]-[variant]-[property*]-[scale]

### Example `component`/`pattern` tokens

```
control-danger-bgColor-hover
button-primary-bgColor-rest
brand-control-xsmall-paddingInline-normal
text-codeInline-fontSize
```

## Naming convention

### Prefix

**[prefix]**-[namespace]-[pattern]-[variant]-[property]-[variant]-[scale]

Prefix provides top-level encapsulation of a particular flavor of Primer, such as Primer Brand. It can be used for protected base tokens like Brand color scales, or value overrides for traditional Primer tokens in order to avoid collisions.

`brand-`: used for marketing/brand specific tokens.

### Namespace

[prefix]-**[namespace]**-[pattern]-[variant]-[property]-[variant]-[scale]

Namespace creates a scope used to identify how a token may be used. For example, `base` tokens are the lowest level and are generally used as a reference for functional tokens (the next step above).

`base-`: represents global, constant values. These are the lowest level tokens and map directly to a raw value.

### Pattern

[prefix]-[namespace]-**[pattern]**-[variant]-[property]-[variant]-[scale]

Pattern represents a group of design decisions, or a specific Primer component. Whenever possible, aim to use a name that is generic enough to influence related components. In the example below, the item `control` can be used for multiple types of controls like buttons, inputs, or interactive action list items.

For pattern and component names that are multi-word, use camelCase to separate each word.

✅

**underlineNav**-borderColor-active

❌

**UnderlineNav**-borderColor-active

<hr>

### Variant

[prefix]-[namespace]-[pattern]-**[variant]**-[property]-**[variant]**-[scale]

Variant can be used to either modify the **pattern** or **property**. Only one variant is allowed per token. It typically represents a stylistic variant of a token such as color (danger) or size (small).

✅

controlStack-**small**-gap-condensed

borderColor-**danger**-default

<hr>

### Property (required)

[prefix]-[namespace]-[pattern]-[variant]-**[property]**-[variant]-[scale]

Property is used to represent an item’s style. It usually matches a [CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#index), but it can also store other conceptual definitions such as `size`, `minTarget`, etc. Use camelCase for multi-word properties.

✅

control-medium-**paddingInline**-condensed

text-display-**letterSpacing**

❌

control-medium-padding_inline-condensed

text-display-letter-spacing

<hr>

### Scale

[prefix]-[namespace]-[pattern]-[variant]-[property]-[variant]-**[scale]**

Scale represents ordinals to describe things like state, density, thickness, range, and speed. Scale names strive to follow our [size naming convention standards](https://github.com/github/primer/blob/main/adrs/2022-02-09-size-naming-guidelines.md).

<hr>

✅

textColor-accent-**default**

controlStack-large-gap-**spacious**

❌

textColor-accent

controlStack-large-gap-enormous

<hr>

### Token name block delimiters

Individual name blocks for each token should be separated with a single character that is relevant to each Primer framework. For example, use the `-` dash character for CSS variables and `.` dot character for JavaScript.

```
✅
control-medium-size-paddingInline-condensed
control.medium.size.paddingInline.condensed

❌
control-medium-size-paddingInline--condensed
control~medium~size~padding~inline~condensed
```

### Impact

This extended naming convention better supports both complex and simple tokens. With the addition of patterns, we can support component tokens where needed. The addition of type and property enforces clarity around where and how a token will be used.

- Addresses this [consequence](https://github.com/github/primer/blob/main/adrs/2022-01-27-color-utilities-vs-variables.md#consequences) from previous color tokens work, where token names differed between platforms and didn't convey which property to be used with.
- These guidelines will be used to write tests and a JSON schema in `/primitives` to assist with token maintenance.
- Color tokens can be brought into the new token build process, and we can begin to deprecate older color tokens.

#### Consequences

- Removing the default `primer` namespace is a breaking change, but we are in a good position to handle breaking changes _now_.
- Brand tokens need to be refactored to meet these guidelines.

### Alternatives

<!-- Describe the available alternatives if any, and why the current apporach was chosen -->

### Note

This ADR was moved over from `github/primer`, [read the original ADR](https://github.com/github/primer/blob/9769214ce4442db228b6f3c6a72b830d942632e1/adrs/2022-03-31-design-token-naming-guidelines.md).
