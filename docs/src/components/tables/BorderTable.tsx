import React, {Fragment, FC} from 'react'
import {Box} from '@primer/components'
import Table from '@primer/gatsby-theme-doctocat/src/components/table.js'
import TokenTable from '../TokenTable'
import TokenInlineCode from '../TokenInlineCode'
import FrameworkVariableTable from './FrameworkVariableTable'
import tokens from '../../../../dist/docs/docValues.json'

interface BorderTableProps {
  filePath?: string
  borderWidth?: boolean
}

const BorderTable: FC<BorderTableProps> = ({filePath, borderWidth}) => {
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
                Value
              </Box>
              <Box as="th" textAlign="left">
                px
              </Box>
            </tr>
          </thead>
          <tbody>
            {tokens[filePath].map(token => {
              const thin = token.name.includes('thin') ? true : false
              const normal = token.name.includes('normal') ? true : false
              const thick = token.name.includes('thick') ? true : false
              const small = token.name.includes('small') ? true : false
              const medium = token.name.includes('medium') ? true : false
              const large = token.name.includes('large') ? true : false
              const full = token.name.includes('full') ? true : false
              const tokenVariant = thin
                ? 'thin'
                : normal
                ? 'normal'
                : thick
                ? 'thick'
                : small
                ? 'small'
                : medium
                ? 'medium'
                : large
                ? 'large'
                : full
                ? 'full'
                : undefined
              const FrameworkVars = [
                {id: 'CSS', token: `--${token.name}`},
                {id: 'JS', token: `${token.path.join('.')}`}
              ]
              if (borderWidth) {
                return (
                  (token.name.includes('-borderWidth-') || token.name.includes('-borderBoxShadow-')) &&
                  token.name.match(tokenVariant) && (
                    <tr>
                      <td>
                        <Box
                          as="div"
                          sx={{
                            backgroundColor: 'white',
                            borderStyle: 'solid',
                            borderWidth: `var(--gh-borderWidth-${tokenVariant})`,
                            borderColor: '#c297ff',
                            height: '3rem',
                            width: '3rem',
                            borderRadius: 2,
                            boxShadow: `var(--gh-borderWidth-${tokenVariant})`
                          }}
                        />
                      </td>
                      <FrameworkVariableTable frameworks={FrameworkVars} />
                      <td>
                        <TokenInlineCode>{token.value}</TokenInlineCode>
                      </td>
                      <td>
                        <TokenInlineCode>{token.original.value}</TokenInlineCode>
                      </td>
                    </tr>
                  )
                )
              }
              return (
                token.name.includes('-borderRadius-') &&
                token.name.match(tokenVariant) && (
                  <tr>
                    <td>
                      <Box
                        as="div"
                        sx={{
                          backgroundColor: 'white',
                          borderStyle: 'solid',
                          borderWidth: 2,
                          borderColor: '#c297ff',
                          height: '3rem',
                          width: '3rem',
                          borderRadius: `var(--gh-borderRadius-${tokenVariant})`
                        }}
                      />
                    </td>
                    <FrameworkVariableTable frameworks={FrameworkVars} />
                    <td>
                      <TokenInlineCode>{token.value}</TokenInlineCode>
                    </td>
                    <td>
                      <TokenInlineCode>{token.original.value}</TokenInlineCode>
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

export default BorderTable
