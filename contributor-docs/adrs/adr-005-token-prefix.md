# Prefix for primitives

## Status

| Stage    | Status      |
| -------- | ----------- |
| Approved | 🚧 |
| Adopted  | <!-- 🚧 --> |

## Context

Currently primitives have no prefix, which means once converted to css they can be used like `--fgColor-default`. This is very convenient but could lead to naming collisions or confusion if folks use their own css variables e.g. is `--button-fgColor-default` a token coming from primitive or a local variable?

To solve this we could add a prefix like `primer` or `product` to our tokens, resulting in css variables like `--primer-fgColor-default`.

To decide this, the following questions need to be answered:

1. Do we think that this is a legit problem that is serious enough to invest somewhat significant resources into?  
   -> No, because we did not get any issues or other reports of complications with token naming collisions. We also have not had any reports of people running into issues where they have a hard time differentiating between their own tokens and primitives.

~2. If yes, what is an appropriate prefix?~

3. If no, do we need some kind of guidance in primer.style, or are we good without it?
    -> Without specific issues there is no specific need for guidance.

## Decision

We will not add a prefix to our primitives at this time. The main reason being that we have no reports of issues and the effort required to implement it, specifically to update usage on github.com, will be quite significant.

### Impact

- We will need to a) keep both prefixed and non-prefixed tokens for quite a while and b) work on removing all non-prefixed tokens from dotCom doing PRs and using stylelint.

### Alternatives

Not using a prefix and keeping it as is.
