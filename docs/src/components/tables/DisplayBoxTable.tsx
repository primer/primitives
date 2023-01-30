import React, {Fragment} from 'react'
import themeGet from '@styled-system/theme-get'
import styled from 'styled-components'
import {Box} from '@primer/react'
import TokenInlineCode from '../TokenInlineCode'
import InlineCode from '@primer/gatsby-theme-doctocat/src/components/inline-code'
import TokenTable from '../TokenTable'
import tokens from '../../../../tokens-v2-private/docs/docValues'
import TypographyBlock from '../typography-block'
import FrameworkVariableTable from './FrameworkVariableTable'

const TableBox = styled.div`
  border: 1px solid ${themeGet('colors.border.muted')};
  border-bottom: none;
  padding: 2rem;
  background-color: ${themeGet('colors.white')};
`

export function DisplayBoxTable({filePath, tokenVariant, children, showProperty = true}) {
  return (
    <Box
      sx={{
        display: 'grid',
        overflow: 'auto',
        marginBottom: '2rem',
        '& table': {
          display: 'table',
          overflow: 'unset',
        },
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
                Output value
              </Box>
              <Box as="th" textAlign="left">
                Source value
              </Box>
            </tr>
          </thead>
          <tbody>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {tokens[filePath].map(token => {
              const weight = token.name.includes('weight') ? true : false
              const size = token.name.includes('size') ? true : false
              const lineHeight = token.name.includes('lineHeight') ? true : false
              const lineBoxHeight = token.name.includes('lineBoxHeight') ? true : false
              const fontFamily = token.name.includes('fontStack') ? true : false
              const weightVariant = token.path[3]
              const FrameworkVars = [
                {id: 'CSS', token: `--${token.name}`},
                {id: 'JS', token: `${token.path.join('.')}`},
              ]
              return (
                !token.name.includes('-shorthand') &&
                token.name.match(tokenVariant) && (
                  <tr id={token.name} key={token.name}>
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
                          fontFamily="var(--primer-fontStack-heading)"
                          fontSize="var(--primer-text-title-size-medium)"
                          fontWeight={weight && `var(--${token.name})`}
                          lineHeight="var(--primer-text-title-lineHeight-medium)"
                        >{`Text ${weightVariant}`}</TypographyBlock>
                      )}
                    </Box>
                    <FrameworkVariableTable frameworks={FrameworkVars} />
                    <Box as="td">
                      <InlineCode>{token.value}</InlineCode>
                    </Box>
                    <Box as="td">
                      <InlineCode>
                        {token.original.value.includes('{') ? (
                          <a href={`#${token.original.value.replace(/[{}]/g, '').replace(/\./g, '-')}`}>
                            {token.original.value.replace(/[{}]/g, '')}
                          </a>
                        ) : (
                          token.original.value
                        )}
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
