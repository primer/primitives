import React, {Fragment, Component, FC} from 'react'
import {Box, Text} from '@primer/components'
import Table from '@primer/gatsby-theme-doctocat/src/components/table.js'
// import baseTokens from '../../../dist/new/tokens/tokensBase.js'
// import ghTokens from '../../../dist/new/tokens/tokensGH.js'
import tokens from '../../../dist/docs/docValues.json'
import styled, {createGlobalStyle} from 'styled-components'

interface ControlVisualProps {
  paddingLeft?: string
  paddingRight?: string
  paddingTop?: string
  paddingBottom?: string
  gap?: string
  color?: string
  blockSize?: string
}

const GlobalStyle = createGlobalStyle`
  :root {
    --scale-purple-3: #c297ff;
  }
`

const ControlVisual: FC<ControlVisualProps> = ({
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  gap,
  color,
  blockSize
}) => {
  return (
    <Fragment>
      <GlobalStyle />
      <div
        style={{
          display: 'inline-grid',
          width: '200px',
          gridTemplateAreas: `'pTop pTop pTop pTop pTop' 'pLeft icon gap label pRight' 'pBottom pBottom pBottom pBottom pBottom'`,
          gridTemplateRows: 'repeat(3, min-content)',
          borderRadius: 'var(--gh-borderRadius-medium)',
          border: 'solid 1px var(--scale-purple-3)',
          height: blockSize
        }}
      >
        <span
          style={{
            gridArea: 'pTop',
            height: paddingTop,
            backgroundColor: 'var(--scale-purple-3)'
          }}
        ></span>
        <span style={{gridArea: 'pLeft', width: paddingLeft}}></span>
        <span style={{gridArea: 'icon'}}>o</span>
        <span style={{gridArea: 'gap', width: gap, backgroundColor: 'var(--scale-purple-3)'}}></span>
        <span style={{gridArea: 'label'}}>label</span>
        <span style={{gridArea: 'pRight', width: paddingRight}}></span>
        <span style={{gridArea: 'pBottom', height: paddingBottom}}></span>
      </div>
    </Fragment>
  )
}

export default ControlVisual
