import React, {Fragment} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import {Box, Text} from '@primer/components'
import Table from '@primer/gatsby-theme-doctocat/src/components/table.js'
// import baseTokens from '../../../dist/new/tokens/tokensBase.js'
// import ghTokens from '../../../dist/new/tokens/tokensGH.js'
import tokens from '../../../dist/docs/docValues.json'
import Swatch from './swatch'
import ControlVisual from './control'
// console.log(Object.entries(ghTokens.size.control))

const GlobalStyle = createGlobalStyle`
  code {
      white-space: nowrap;
        background: var(--scale-purple-1);
        border-radius: 6px;
        padding: 2px 6px;
        flex: 0 1 auto;
  }
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
            console.log(tokenVariant)
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

                  <Box as="td" sx={{padding: '0 !important'}}>
                    <Box
                      as="table"
                      sx={{
                        '& tr': {
                          border: 'none !important',
                          display: 'grid',
                          gridTemplateColumns: '3ch 2fr',
                          alignItems: 'center',
                          justifyItems: 'start',
                          gap: '16px'
                        },
                        '& td': {border: 'none !important', padding: '0 !important', display: 'flex'},
                        '& th': {
                          border: 'none !important',
                          color: 'var(--color-fg-subtle)',
                          fontSize: '14px',
                          padding: '0 !important'
                        },
                        '& tr:nth-child(2n)': {background: 'transparent !important'},
                        '& tbody': {
                          display: 'flex',
                          flexDirection: 'column',
                          padding: '8px 16px',
                          gap: '8px'
                        }
                      }}
                    >
                      <tbody>
                        <tr>
                          <th>CSS</th>
                          <td>
                            <code>--{token.name}</code>
                          </td>
                        </tr>
                        <tr>
                          <th>JS</th>
                          <td>
                            <code>{token.path.join('.')}</code>
                          </td>
                        </tr>
                      </tbody>
                    </Box>
                  </Box>
                  <td>
                    <code>{token.value}</code>
                  </td>
                  <td>
                    <code>{token.original.value}</code>
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
