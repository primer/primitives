// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React, {Fragment} from 'react'
import {Box} from '@primer/react'
import TokenTable from '../TokenTable'
import TokenInlineCode from '../TokenInlineCode'
import FrameworkVariableTable from './FrameworkVariableTable'
import tokens from '../../../../tokens-v2-private/docs/docValues'

interface BorderTableProps {
  filePath?: string
  borderWidth?: boolean
}

const BorderTable: React.FC<BorderTableProps> = ({filePath, borderWidth}) => {
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
              <Box as="th" textAlign="left">
                Output value
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
              const boxShadow = token.name.includes('borderInset') ? true : false
              const border = token.name.includes('borderWidth') ? true : false
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
                {id: 'JS', token: `${token.path.join('.')}`},
              ]
              if (borderWidth) {
                return (
                  (token.name.includes('-borderWidth-') || token.name.includes('-borderInset-')) &&
                  token.name.match(tokenVariant) && (
                    <tr id={token.name} key={token.name}>
                      <td>
                        <Box
                          as="div"
                          sx={{
                            backgroundColor: 'white',
                            border: border && `solid var(--primer-borderWidth-${tokenVariant}) #c297ff`,
                            height: '3rem',
                            width: '3rem',
                            borderRadius: 2,
                            boxShadow: boxShadow && `var(--primer-borderInset-${tokenVariant}) #c297ff`,
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
                          borderRadius: `var(--primer-borderRadius-${tokenVariant})`,
                        }}
                      />
                    </td>
                    <FrameworkVariableTable frameworks={FrameworkVars} />
                    <td>
                      <TokenInlineCode>{token.value}</TokenInlineCode>
                    </td>
                    <td>
                      <TokenInlineCode>
                        {token.original.value.includes('{') ? (
                          <a href={`#${token.original.value.replace(/[{}]/g, '').replace(/\./g, '-')}`}>
                            {token.original.value.replace(/[{}]/g, '')}
                          </a>
                        ) : (
                          token.original.value
                        )}
                      </TokenInlineCode>
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
