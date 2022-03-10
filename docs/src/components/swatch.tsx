import React, {Fragment, Component, FC} from 'react'
import {Box, Text} from '@primer/components'
import Table from '@primer/gatsby-theme-doctocat/src/components/table.js'
// import baseTokens from '../../../dist/new/tokens/tokensBase.js'
// import ghTokens from '../../../dist/new/tokens/tokensGH.js'
import tokens from '../../../dist/docs/docValues.json'
import styled, {createGlobalStyle} from 'styled-components'

interface SwatchProps {
  height?: any
  width?: string
  color?: string
}

const GlobalStyle = createGlobalStyle`
  :root {
    --scale-purple-3: #c297ff;
  }
`

const Swatch: FC<SwatchProps> = ({height, width, color}) => {
  return (
    <Fragment>
      <GlobalStyle />
      <div
        style={{height: height, width: width, backgroundColor: color, borderRadius: 'var(--gh-borderRadius-small)'}}
      ></div>
    </Fragment>
  )
}

export default Swatch
