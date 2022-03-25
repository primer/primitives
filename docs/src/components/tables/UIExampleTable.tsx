import React, {Fragment} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import {Box, Text} from '@primer/components'
import Table from '@primer/gatsby-theme-doctocat/src/components/table.js'
import TokenInlineCode from '../TokenInlineCode'
import FrameworkVariableTable from './FrameworkVariableTable'
import tokens from '../../../../dist/docs/docValues.json'
import ControlVisual from '../control'

const GlobalStyle = createGlobalStyle`
  :root {
      --scale-purple-1: #ecd8ff;
    --scale-purple-3: #c297ff;
    --scale-pink-3: #8250df;
    --scale-yellow-1: #6639ba;
    --color-fg-subtle: #6e7781;
  }
`

export function TokenBlock({filePath, tokenVariant}) {
  return (
    <Table>
      <GlobalStyle />
      <Fragment>
        <thead>
          <tr>
            <Box as="th" textAlign="left">
              Example
            </Box>
            <Box as="th" textAlign="left">
              Token
            </Box>
            <Box as="th" textAlign="left">
              Value
            </Box>
            <Box as="th" textAlign="left">
              px
            </Box>
          </tr>
        </thead>
        <tbody>
          {tokens[filePath].map(token => {
            const gapProp = token.name.includes('gap') ? true : false
            const paddingLeft = token.name.includes('paddingInline') ? true : false
            const paddingRight = token.name.includes('paddingInline') ? true : false
            const paddingTop = token.name.includes('paddingBlock') ? true : false
            const paddingBottom = token.name.includes('paddingBlock') ? true : false
            const lineBlockHeightProp = token.name.includes('lineBoxHeight') ? true : false
            const blockSize = token.name.includes('size') ? true : false
            const condensed = token.name.includes('condensed') ? true : false
            const normal = token.name.includes('normal') ? true : false
            const spacious = token.name.includes('spacious') ? true : false
            const tokenVariantString = tokenVariant.replace(/-/g, '')
            const FrameworkVars = [
              {id: 'CSS', token: `--${token.name}`},
              {id: 'JS', token: `${token.path.join('.')}`}
            ]
            return (
              token.name.includes('-control-') &&
              token.name.match(tokenVariant) && (
                <tr>
                  <td>
                    <ControlVisual
                      gap={tokenVariantString}
                      paddingLeft={tokenVariantString}
                      paddingRight={tokenVariantString}
                      paddingTop={tokenVariantString}
                      paddingBottom={tokenVariantString}
                      blockSize={tokenVariantString}
                      lineBox={tokenVariantString}
                      modifier={condensed ? '-condensed' : normal ? '-normal' : spacious ? '-spacious' : undefined}
                      highlightPaddingBottom={paddingBottom}
                      highlightPaddingTop={paddingTop}
                      highlightPaddingRight={paddingRight}
                      highlightPaddingLeft={paddingLeft}
                      highlightGap={gapProp}
                      highlightHeight={blockSize}
                      highlightLineBoxHeight={lineBlockHeightProp}
                    />
                  </td>
                  <FrameworkVariableTable frameworks={FrameworkVars} />
                  <td>
                    <TokenInlineCode>{token.value}</TokenInlineCode>
                  </td>
                  <td>
                    <TokenInlineCode>{token.original.value}</TokenInlineCode>
                  </td>
                </tr>
              )
            )
          })}
        </tbody>
      </Fragment>
    </Table>
  )
}
