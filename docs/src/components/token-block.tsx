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

// export function TokenBlockVisual({filePath}) {
//   return tokens[filePath].map(token => {
//     console.log(token.name.includes('gap'))
//     const gapProp = token.name.includes('gap') ? token.value : null
//     const paddingLeft = token.name.includes('paddingInline') ? token.value : null
//     const paddingRight = token.name.includes('paddingInline') ? token.value : null
//     const paddingTop = token.name.includes('paddingBlock') ? token.value : null
//     const paddingBottom = token.name.includes('paddingBlock') ? token.value : null
//       const blockSize = token.name.includes('size') ? token.value : null
//   )
//     return (
//       <ControlVisual
//         gap={gapProp}
//         paddingLeft={paddingLeft}
//         paddingRight={paddingRight}
//         paddingTop={paddingTop}
//         paddingBottom={paddingBottom}
//         blockSize={blockSize}
//       />
//     )
//   })
// }

export function TokenBlock({filePath}) {
  // return <pre>{JSON.stringify(tokens[filePath], null, 2)}</pre>
  //   console.log(tokens)
  return (
    <Table>
      <GlobalStyle />
      <Fragment>
        <thead>
          <tr>
            <Box as="th" textAlign="left">
              CSS
            </Box>
            <Box as="th" textAlign="left">
              JS
            </Box>
            <Box as="th" textAlign="left">
              Value
            </Box>
          </tr>
        </thead>
        <tbody>
          {tokens[filePath].map(token => {
            return (
              token.name.includes('-small-') && (
                <tr>
                  <td>
                    <code>--{token.name}</code>
                  </td>
                  <td>
                    <code>{token.path.join('.')}</code>
                  </td>
                  <td>
                    <code>{token.value}</code>
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
