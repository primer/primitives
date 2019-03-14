# Primer Primitives

This package contains the [color](#colors), [spacing](#spacing), and [typography](#typography) primitives (AKA constants or "tokens") that form the foundation of [Primer], GitHub's design system.

## Install

This repository is distributed with [npm]. You can install it with:

```sh
$ npm install --save @primer/primitives
```

## Usage

The package's default JavaScript export is an object with the following keys:

* `colors` is the [colors](#colors) object
* `space` is the [spacing](#spacing) object
* `fontSizes` is from [typography](#typography)
* `lineHeights` is from [typography](#typography)

There are separate exports for `colors`, `space`, and `typography`. For instance, to enumerate the colors:

```js
// all of the following are equivalent:
let {colors} = require('@primer/primitives')
colors = require('@primer/primitives/colors')
colors = require('@primer/primitives/colors.json')

for (const [name, value] of Object.entries(colors)) {
  console.log(`colors.${name} = ${JSON.stringify(value)}`)
}
```

## Theme

This default export object is suitable for use as a theme source in CSS-in-JS libraries such as [styled-components] and [emotion], and is specifically tailored for use with [styled-system]'s style functions.

### Examples

Here's an example using [styled-components]:

```js
import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import theme from '@primer/primitives'

const Alert = styled.div`
  color: ${props => props.theme.colors.green[9]};
  background-color: ${props => props.theme.colors.green[2]};
`

const App = props => (
  <ThemeProvider theme={theme}>
    <Alert />
  </ThemeProvider>
)
```

And [styled-system]:

```js
import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {color} from 'styled-system'
import theme from '@primer/primitives'

const Alert = styled.div`
  ${color}
`

const App = props => (
  <ThemeProvider theme={theme}>
    <Alert color='green.0' bg='green.2' {...props} />
  </ThemeProvider>
)
```

Refer to the [styled-system table](https://styled-system.com/table) for more information.

## Colors

The colors object represents Primer's [color system]. The following keys represent single RGB hex colors:

* `black` is not "pure" black, but is darker than the darkest gray
* `white` is pure white (`#fff`)

The rest of the keys are arrays representing gradients of a certain hue, from lightest to darkest:

* `gray`
* `blue`
* `green`
* `yellow`
* `orange`
* `red`
* `purple`

## Spacing

The `space` object is an array of numeric pixel values that represent Primer's [spacing scale].

## Typography

These primitives are the foundation of Primer's [typography styles]. These keys are merged into the [theme object](#theme):

* `fontSizes` represents Primer's font size scale in pixels, from smallest to largest.
* `lineHeights` is an object with keys for each of Primer's named line heights: `default`, `condensed`, and `condensedUltra`.

The typography primitives are also available in JavaScript via the `@primer/primitives/typography` export, with or without the `.json` filename extension.


## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[color system]: https://primer.style/css/support/color-system
[spacing scale]: https://primer.style/css/support/spacing
[typography styles]: https://primer.style/css/support/spacing
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[npm]: https://www.npmjs.com/
[primer]: https://primer.style
[styled-system]: https://styled-system.com/
[styled-components]: https://www.styled-components.com/
[emotion]: https://emotion.sh/
