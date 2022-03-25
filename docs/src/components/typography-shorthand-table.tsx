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
import FrameworkVariableTable from './framework-variables-table'
// console.log(Object.entries(ghTokens.size.control))

export function TypographyShorthandTable({filePath}) {
  return (
    <Table>
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
            const FrameworkVars = [
              {id: 'CSS', token: `--${token.name}`},
              {id: 'JS', token: `${token.path.join('.')}`}
            ]
            return (
              token.name.includes('-shorthand') && (
                <tr>
                  <Box as="td">
                    <TypographyBlock
                      variant={tokenVariantString}
                      modifier={small ? '-small' : medium ? '-medium' : large ? '-large' : undefined}
                    />
                  </Box>
                  <FrameworkVariableTable frameworks={FrameworkVars} />
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
                            color: 'fg.subtle',
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
                            color: 'fg.subtle',
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
                            color: 'fg.subtle',
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
