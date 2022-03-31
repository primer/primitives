import React, {Fragment} from 'react'
import themeGet from '@styled-system/theme-get'
import CopyClipboard from '@primer/gatsby-theme-doctocat/src/components/clipboard-copy'
import styled, {createGlobalStyle} from 'styled-components'
import {Box, Text} from '@primer/components'
import TokenInlineCode from '../TokenInlineCode'
import InlineCode from '@primer/gatsby-theme-doctocat/src/components/inline-code.js'
import Table from '@primer/gatsby-theme-doctocat/src/components/table.js'
import TokenTable from '../TokenTable'
import tokens from '../../../../dist/docs/docValues.json'
import TypographyBlock from '../typography-block'
import FrameworkVariableTable from './FrameworkVariableTable'

const TableBox = styled.div`
  border: 1px solid ${themeGet('colors.border.muted')};
  border-bottom: none;
  padding: 2rem;
  background-color: ${themeGet('colors.white')};
`

export function DisplayBoxTable({filePath, tokenVariant, children, showOriginalValue = true, showProperty = true}) {
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
      <TokenTable>
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
              const weightVariant = token.path[3]
              const FrameworkVars = [
                {id: 'CSS', token: `--${token.name}`},
                {id: 'JS', token: `${token.path.join('.')}`}
              ]
              return (
                !token.name.includes('-shorthand') &&
                token.name.match(tokenVariant) && (
                  <tr>
                    <Box as="td">
                      {showProperty ? (
                        <TokenInlineCode>
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
                        </TokenInlineCode>
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
                    <FrameworkVariableTable frameworks={FrameworkVars} />
                    <Box as="td">
                      <InlineCode>
                        {token.value} {showOriginalValue && `/ ${token.original.value}`}
                      </InlineCode>
                    </Box>
                  </tr>
                )
              )
            })}
          </tbody>
        </Fragment>
      </TokenTable>
    </Box>
  )
}
