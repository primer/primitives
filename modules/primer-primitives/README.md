# Primer Primitives

Color, spacing, and typography primitives for use with [Primer][primer], GitHub's design system.

[![npm version](https://img.shields.io/npm/v/primer-primitives.svg)](https://www.npmjs.org/package/primer-primitives)

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `primer-primitives` with this command.

```sh
$ npm install --save primer-primitives
```

## Usage

JSON is a highly interoperable format that can be used in many types of projects. You could write scripts to generate CSS, use with plugins for design tools, or import into a theme file for use with CSS-in-JS projects.

### Example

This shows an example for a React.js project. You can import Primer Primitives to provide theme values to a `ThemeProvider`. This is a great way of sharing system styles and can be achieved with popular CSS-in-JS libraries such as [styled-components](https://www.styled-components.com/) and [emotion](https://emotion.sh/).


```js
import primitives from 'primer-primitives'

const theme = {
  colors: primitives.colors,
  fontSizes: primitives.fontSizes,
  space: primitives.space
}

export default theme
```

This makes the Primer Primitives values for color, typography, and spacing available for styling components. Here's an example using `styled-components`.

```js
import styled from 'styled-components'

const Alert = styled.div`
  color: ${props => props.theme.colors.green[9]};
  background-color: ${props => props.theme.colors.green[2]};
`

export default Alert

```

When used with libraries like [styled-system](https://jxnblk.com/styled-system/), you can make Primer Primitives available to style functions. In this example, we've imported the color function to the component's styles argument. The color values are from our the color JSON object in our Primer Primitives.

```js
import styled from 'styled-components'
import { color } from 'styled-system'

const Alert = styled.div`
  ${color}
`

export default Alert
```


Now, this component will have two style props available: color to set foreground color, and bg to set background color.

```html
<Alert color='green.9' bg='green.2'>
  Tomato
</Alert>
```

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/primer
[primer-primitives]: https://github.com/primer/primer-primitives/tree/master/modules/primer-primitives
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
