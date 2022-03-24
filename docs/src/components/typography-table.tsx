import React, {Fragment} from 'react'
import CopyClipboard from '@primer/gatsby-theme-doctocat/src/components/clipboard-copy'
import styled, {createGlobalStyle} from 'styled-components'
import {Box, Text} from '@primer/components'
import Table from '@primer/gatsby-theme-doctocat/src/components/table.js'
// import baseTokens from '../../../dist/new/tokens/tokensBase.js'
// import ghTokens from '../../../dist/new/tokens/tokensGH.js'
import tokens from '../../../dist/docs/docValues.json'
import Swatch from './swatch'
import ControlVisual from './control'
import TypographyBlock from './typography-block'
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

export function TypographyTable({filePath}) {
  return (
    <Table>
      <GlobalStyle />
      <Fragment>
        <Box
          as="dt"
          sx={{
            display: 'grid',
            gridTemplateAreas: `'exampleTitle . .' 'example example example' 'tokenLabel valueLabel usageLabel' 'token value usage'`,
            gridTemplateRows: 'min-content min-content min-content min-content',
            gridTemplateColumns: '1fr 1fr 1fr',
            border: 'solid 1px deeppink'
          }}
        >
          <Box as="dt" sx={{gridArea: 'exampleTitle'}}>
            Example
          </Box>
          <Box as="dd" sx={{gridArea: 'example'}}>
            blah
          </Box>
          <Box as="dt" sx={{gridArea: 'tokenLabel'}}>
            Token
          </Box>
          <Box as="dd" sx={{gridArea: 'token'}}>
            code
          </Box>
          <Box as="dt" sx={{gridArea: 'valueLabel'}}>
            Value
          </Box>
          <Box as="dd" sx={{gridArea: 'value'}}>
            value
          </Box>
          <Box as="dt" sx={{gridArea: 'usageLabel'}}>
            Usage
          </Box>
          <Box as="dd" sx={{gridArea: 'usage'}}>
            Headings
          </Box>
        </Box>
        <thead>
          <tr>
            <th>Hello</th>
          </tr>
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
              Usage
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
            const small = token.name.includes('small') ? true : false
            const medium = token.name.includes('medium') ? true : false
            const large = token.name.includes('large') ? true : false
            const tokenVariant = token.name.includes('codeInline')
              ? 'codeInline'
              : token.name.includes('codeBlock')
              ? 'codeBlock'
              : token.name.includes('caption')
              ? 'caption'
              : token.name.includes('body')
              ? 'body'
              : token.name.includes('subtitle')
              ? 'subtitle'
              : token.name.includes('title')
              ? 'title'
              : token.name.includes('display')
              ? 'display'
              : 'test'
            const tokenVariantString = tokenVariant.replace(/-/g, '')
            console.log(tokenVariant)
            return (
              token.name.includes('-shorthand') && (
                <tr>
                  <Box as="td" sx={{padding: '0 !important'}}>
                    <TypographyBlock
                      variant={tokenVariantString}
                      modifier={small ? '-small' : medium ? '-medium' : large ? '-large' : undefined}
                    />
                  </Box>
                  <Box as="td" sx={{padding: '0 !important'}}>
                    <Box
                      as="table"
                      sx={{
                        width: '100%',
                        '& tr': {
                          border: 'none !important',
                          display: 'grid',
                          gridTemplateColumns: '3ch 2fr',
                          alignItems: 'center',
                          justifyItems: 'start',
                          gap: '16px'
                        },
                        '& td': {
                          border: 'none !important',
                          padding: '0 !important',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '16px',
                          width: '100%'
                        },
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
                        },
                        '& button': {
                          height: '23.5px',
                          width: '23.5px',
                          padding: '0',
                          display: 'grid'
                        },
                        '& button > svg': {
                          height: '12px',
                          width: '12px',
                          placeSelf: 'center'
                        }
                      }}
                    >
                      <tbody>
                        <tr>
                          <th>CSS</th>
                          <td>
                            <code>--{token.name}</code>
                            <CopyClipboard value={`--${token.name}`} />
                          </td>
                        </tr>
                        <tr>
                          <th>JS</th>
                          <td>
                            <code>{token.path.join('.')}</code>
                            <CopyClipboard value={`${token.path.join('.')}`} />
                          </td>
                        </tr>
                      </tbody>
                    </Box>
                    <Box as="table">
                      <thead>
                        <tr>
                          <th>Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>CSS</th>
                          <td>
                            <code>--{token.name}</code>
                            <CopyClipboard value={`--${token.name}`} />
                          </td>
                        </tr>
                      </tbody>
                    </Box>
                  </Box>
                  {/* <td>
                    <code>{token.value}</code>
                  </td> */}
                  <td>
                    <p>{token.value}</p>
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
