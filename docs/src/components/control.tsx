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
  lineBox?: string
}

const GlobalStyle = createGlobalStyle`
  :root {
    --scale-purple-3: #c297ff;
    --scale-pink-3: #8250df;
    --scale-yellow-1: #6639ba;
  }
`

const ControlVisual: FC<ControlVisualProps> = ({
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  gap,
  color,
  blockSize,
  lineBox
}) => {
  return (
    <Fragment>
      <GlobalStyle />
      <div
        style={{
          display: 'inline-grid',
          gridTemplateAreas: `'pTop pTop pTop pTop pTop' 'pLeft icon gap label pRight' 'pBottom pBottom pBottom pBottom pBottom'`,
          gridTemplateRows: 'min-content minmax(0, 1fr) min-content',
          gridTemplateColumns: 'repeat(5, min-content)',
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
        <span style={{gridArea: 'pLeft', width: paddingLeft, backgroundColor: 'var(--scale-pink-3)'}}></span>
        <span style={{gridArea: 'icon', display: 'flex', alignItems: 'center'}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M5.75 4A1.75 1.75 0 004 5.75v4.5c0 .966.784 1.75 1.75 1.75h4.5A1.75 1.75 0 0012 10.25v-4.5A1.75 1.75 0 0010.25 4h-4.5z"
            ></path>
          </svg>
        </span>
        <span style={{gridArea: 'gap', width: gap, backgroundColor: 'var(--scale-yellow-1)'}}></span>
        <span style={{gridArea: 'label', lineHeight: lineBox}}>label</span>
        <span style={{gridArea: 'pRight', width: paddingRight, backgroundColor: 'var(--scale-pink-3)'}}></span>
        <span style={{gridArea: 'pBottom', height: paddingBottom, backgroundColor: 'var(--scale-purple-3)'}}></span>
      </div>
    </Fragment>
  )
}

export default ControlVisual
