import React, {Fragment} from 'react'
import themeGet from '@styled-system/theme-get'
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
  code {
      white-space: nowrap;
  }
`

const TableBox = styled.div`
  border: 1px solid ${themeGet('colors.border.muted')};
  border-bottom: none;
  padding: ${themeGet('space.2')} ${themeGet('space.3')};
  background-color: ${themeGet('colors.white')};
`

export function TypographyTable({
  filePath,
  tokenVariant,
  children,
  showOriginalValue = true,
  showProperty = true,
  example
}) {
  return (
    <Box
      sx={{
        display: 'grid',
        overflow: 'auto',
        marginBottom: '2rem',
        '& table': {
          display: 'table',
          overflow: 'unset'
        }
      }}
    >
      {children && <TableBox>{children}</TableBox>}
      <Table>
        <GlobalStyle />
        <Fragment>
          <thead>
            <tr>
              <Box as="th" textAlign="left">
                {showProperty ? 'Property' : 'Example'}
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
              const weight = token.name.includes('weight') ? true : false
              const size = token.name.includes('size') ? true : false
              const lineHeight = token.name.includes('lineHeight') ? true : false
              const lineBoxHeight = token.name.includes('lineBoxHeight') ? true : false
              const fontFamily = token.name.includes('fontStack') ? true : false
              const weightVariant = token.path.at(3)
              console.log(weightVariant)
              return (
                !token.name.includes('-shorthand') &&
                token.name.match(tokenVariant) && (
                  <tr>
                    <Box as="td">
                      {showProperty ? (
                        <InlineCode>
                          {weight
                            ? 'weight'
                            : size
                            ? 'font-size'
                            : lineHeight
                            ? 'line-height'
                            : lineBoxHeight
                            ? 'height'
                            : fontFamily
                            ? 'font-family'
                            : undefined}
                        </InlineCode>
                      ) : (
                        <TypographyBlock
                          fontFamily="var(--gh-fontStack-heading)"
                          fontSize="var(--gh-text-title-size-medium)"
                          fontWeight={weight && `var(--${token.name})`}
                          lineHeight="var(--gh-text-title-lineHeight-medium)"
                          children={`Text ${weightVariant}`}
                        />
                      )}
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
                    <Box
                      as="td"
                      sx={{
                        '> code': {
                          whiteSpace: 'normal'
                        }
                      }}
                    >
                      <InlineCode>
                        {token.value} {showOriginalValue && `\ ${token.original.value}`}
                      </InlineCode>
                    </Box>
                  </tr>
                )
              )
            })}
          </tbody>
        </Fragment>
      </Table>
    </Box>
  )
}
