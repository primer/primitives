import React, {Fragment, Component, FC} from 'react'
import {Box, Text} from '@primer/components'
import Table from '@primer/gatsby-theme-doctocat/src/components/table.js'
// import baseTokens from '../../../dist/new/tokens/tokensBase.js'
// import ghTokens from '../../../dist/new/tokens/tokensGH.js'
import tokens from '../../../dist/docs/docValues.json'
import styled, {createGlobalStyle} from 'styled-components'

interface TypographyBlockProps {
  variant?: string
  modifier?: string
}

const GlobalStyle = createGlobalStyle`
  :root {
    --scale-purple-3: #c297ff;
    --scale-pink-3: #8250df;
    --scale-yellow-1: #6639ba;
  }
`

const TypographyBlock: FC<TypographyBlockProps> = ({variant, modifier = ''}) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Box
        as="p"
        sx={{
          font: `var(--gh-text-${variant}-shorthand${modifier})`
        }}
      >
        This is a paragraph of text showing size
      </Box>
    </Fragment>
  )
}

export default TypographyBlock
