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
  }
`

export function TokenBlock({filePath}) {
  // return <pre>{JSON.stringify(tokens[filePath], null, 2)}</pre>
  return (
    <Table>
      <GlobalStyle />
      {tokens[filePath].map(token => {
        console.log(token.name.includes('gap'))
        const gapProp = token.name.includes('gap') ? token.value : null
        const paddingLeft = token.name.includes('paddingInline') ? token.value : null
        const paddingRight = token.name.includes('paddingInline') ? token.value : null
        const paddingTop = token.name.includes('paddingBlock') ? token.value : null
        const paddingBottom = token.name.includes('paddingBlock') ? token.value : null
        const blockSize = token.name.includes('size') ? token.value : null
        return (
          <Fragment>
            {token.name.includes('-xsmall-') && (
              <Fragment>
                <thead>
                  <th>
                    <Box>
                      {' '}
                      <ControlVisual
                        gap={gapProp}
                        paddingLeft={paddingLeft}
                        paddingRight={paddingRight}
                        paddingTop={paddingTop}
                        paddingBottom={paddingBottom}
                        blockSize={blockSize}
                      />
                    </Box>
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <th>CSS variable</th>
                    <td>
                      <code>--{token.name}</code>
                    </td>
                  </tr>
                  <tr>
                    <th>JS variable</th>
                    <td>
                      <code>{token.path.join('.')}</code>
                    </td>
                  </tr>
                  <tr>
                    <th>Value</th>
                    <td>
                      <code>{token.value}</code>
                    </td>
                  </tr>
                </tbody>
              </Fragment>
            )}
          </Fragment>
        )
      })}
    </Table>
  )
}
