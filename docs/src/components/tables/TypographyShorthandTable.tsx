import React, {Fragment} from 'react'
import {Box} from '@primer/react'
import TokenInlineCode from '../TokenInlineCode'
import TokenTable from '../TokenTable'
import tokens from '../../../../tokens-v2-private/docs/docValues'
import TypographyBlock from '../typography-block'
import FrameworkVariableTable from './FrameworkVariableTable'

export function TypographyShorthandTable({filePath}) {
  return (
    <Box as="div" sx={{overflow: 'auto'}}>
      <TokenTable>
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
                Source value
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
                {id: 'JS', token: `${token.path.join('.')}`},
              ]
              return (
                token.name.includes('-shorthand') && (
                  <tr id={token.name} key={token.name}>
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
                            gap: '16px',
                          }}
                        >
                          <Box
                            as="p"
                            sx={{
                              color: 'fg.subtle',
                              fontSize: '14px',
                              whiteSpace: 'nowrap',
                              margin: '0',
                              fontWeight: '600',
                            }}
                          >
                            Size:
                          </Box>
                          <TokenInlineCode>
                            {token.original.value.fontSize.includes('{') ? (
                              <a href={`#${token.original.value.fontSize.replace(/[{}]/g, '').replace(/\./g, '-')}`}>
                                {token.original.value.fontSize.replace(/[{}]/g, '')}
                              </a>
                            ) : (
                              token.original.value.fontSize
                            )}
                          </TokenInlineCode>
                        </Box>
                        <Box
                          sx={{
                            display: 'grid',
                            gridTemplateColumns: '8ch auto',
                            alignItems: 'center',
                            justifyItems: 'start',
                            gap: '16px',
                          }}
                        >
                          <Box
                            as="p"
                            sx={{
                              color: 'fg.subtle',
                              fontSize: '14px',
                              whiteSpace: 'nowrap',
                              margin: '0',
                              fontWeight: '600',
                            }}
                          >
                            Line height:
                          </Box>
                          <TokenInlineCode>
                            {token.original.value.lineHeight && token.original.value.lineHeight.includes('{') ? (
                              <a href={`#${token.original.value.lineHeight.replace(/[{}]/g, '').replace(/\./g, '-')}`}>
                                {token.original.value.lineHeight.replace(/[{}]/g, '')}
                              </a>
                            ) : (
                              token.original.value.lineHeight
                            )}
                          </TokenInlineCode>
                        </Box>
                        <Box
                          sx={{
                            display: 'grid',
                            gridTemplateColumns: '8ch auto',
                            alignItems: 'center',
                            justifyItems: 'start',
                            gap: '16px',
                          }}
                        >
                          <Box
                            as="p"
                            sx={{
                              color: 'fg.subtle',
                              fontSize: '14px',
                              whiteSpace: 'nowrap',
                              margin: '0',
                              fontWeight: '600',
                            }}
                          >
                            Weight:
                          </Box>
                          <TokenInlineCode>
                            {token.original.value.fontWeight.includes('{') ? (
                              <a href={`#${token.original.value.fontWeight.replace(/[{}]/g, '').replace(/\./g, '-')}`}>
                                {token.original.value.fontWeight.replace(/[{}]/g, '')}
                              </a>
                            ) : (
                              token.original.value.fontWeight
                            )}
                          </TokenInlineCode>
                        </Box>
                      </Box>
                    </td>
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
