# Primer Primitives

This repo contains values for color, spacing, and typography primitives for use with [Primer][primer], GitHub's design system.

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `@primer/primitives` with this command.

```sh
$ npm install --save @primer/primitives
```

## Usage

JSON is a highly interoperable format that can be used in many types of projects. You could write scripts to generate CSS, use with plugins for design tools, or import into a theme file for use with CSS-in-JS projects.

### Example

The Primer Primitives are exported as keys on the top-level export. `colors`, `spacing`, and `typography` are available:

```js
import { colors, spacing, typography } from '@primer/primitives'
```

In addition, Primer Primitives exports a `theme`, which is a great way of sharing system styles and works with popular CSS-in-JS libraries such as  [styled-components](https://www.styled-components.com/) and [emotion](https://emotion.sh/).

Here's an example using `styled-components`.

```js
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '@primer/primitives'

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

When used with libraries like [styled-system](https://jxnblk.com/styled-system/), you can make Primer Primitives available to style functions. In this example, we've imported the color function to the component's styles argument. The color values are from the color JSON object in Primer Primitives.

```js
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '@primer/primitives'
import { color } from 'styled-system'

const Alert = styled.div`
  ${color}
`

const App = props => (
  <ThemeProvider theme={theme}>
    <Alert color='green.0' bg='green.2' />
  </ThemeProvider>
)

```

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/primer
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
