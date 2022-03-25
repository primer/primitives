import React, {Fragment} from 'react'
import CopyClipboard from '@primer/gatsby-theme-doctocat/src/components/clipboard-copy'
import styled, {createGlobalStyle} from 'styled-components'
import {Box, Text} from '@primer/components'
import InlineCode from '@primer/gatsby-theme-doctocat/src/components/inline-code.js'
import Table from '@primer/gatsby-theme-doctocat/src/components/table.js'
// import baseTokens from '../../../dist/new/tokens/tokensBase.js'
// import ghTokens from '../../../dist/new/tokens/tokensGH.js'
import tokens from '../../../dist/docs/docValues.json'
import Swatch from './swatch'
import ControlVisual from './control'
import TypographyBlock from './typography-block'
// console.log(Object.entries(ghTokens.size.control))

const GlobalStyle = createGlobalStyle`
  :root {
      --scale-purple-1: #ecd8ff;
    --scale-purple-3: #c297ff;
    --scale-pink-3: #8250df;
    --scale-yellow-1: #6639ba;
    --color-fg-subtle: #6e7781;
  }
`

export function TypographyShorthandTable({filePath}) {
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
                  <Box as="td">
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
                            <InlineCode>--{token.name}</InlineCode>
                            <CopyClipboard value={`--${token.name}`} />
                          </td>
                        </tr>
                        <tr>
                          <th>JS</th>
                          <td>
                            <InlineCode>{token.path.join('.')}</InlineCode>
                            <CopyClipboard value={`${token.path.join('.')}`} />
                          </td>
                        </tr>
                      </tbody>
                    </Box>
                  </Box>
                  <td>
                    <Box sx={{display: 'flex', flexDirection: 'column', padding: '8px 16px', gap: '8px'}}>
                      <Box
                        sx={{
                          display: 'grid',
                          gridTemplateColumns: '8ch auto',
                          alignItems: 'center',
                          justifyItems: 'start',
                          gap: '16px'
                        }}
                      >
                        <Box
                          as="p"
                          sx={{
                            color: 'var(--color-fg-subtle)',
                            fontSize: '14px',
                            whiteSpace: 'nowrap',
                            margin: '0',
                            fontWeight: '600'
                          }}
                        >
                          Size:
                        </Box>
                        <InlineCode>{token.original.value.fontSize}</InlineCode>
                      </Box>
                      <Box
                        sx={{
                          display: 'grid',
                          gridTemplateColumns: '8ch auto',
                          alignItems: 'center',
                          justifyItems: 'start',
                          gap: '16px'
                        }}
                      >
                        <Box
                          as="p"
                          sx={{
                            color: 'var(--color-fg-subtle)',
                            fontSize: '14px',
                            whiteSpace: 'nowrap',
                            margin: '0',
                            fontWeight: '600'
                          }}
                        >
                          Line height:
                        </Box>
                        <InlineCode>{token.original.value.lineHeight}</InlineCode>
                      </Box>
                      <Box
                        sx={{
                          display: 'grid',
                          gridTemplateColumns: '8ch auto',
                          alignItems: 'center',
                          justifyItems: 'start',
                          gap: '16px'
                        }}
                      >
                        <Box
                          as="p"
                          sx={{
                            color: 'var(--color-fg-subtle)',
                            fontSize: '14px',
                            whiteSpace: 'nowrap',
                            margin: '0',
                            fontWeight: '600'
                          }}
                        >
                          Weight:
                        </Box>
                        <InlineCode>{token.original.value.fontWeight}</InlineCode>
                      </Box>
                    </Box>
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
