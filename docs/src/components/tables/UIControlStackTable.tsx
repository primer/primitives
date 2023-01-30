// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React, {Fragment} from 'react'
import {Box} from '@primer/react'
import TokenTable from '../TokenTable'
import TokenInlineCode from '../TokenInlineCode'
import FrameworkVariableTable from './FrameworkVariableTable'
import tokens from '../../../../tokens-v2-private/docs/docValues'
import ControlStackVisual from '../ControlStack'

interface UIControlStackTableProps {
  filePath?: string
  tokenVariant?: string
}

const UIControlStackTable: React.FC<UIControlStackTableProps> = ({filePath, tokenVariant}) => {
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
                Output value
              </Box>
              <Box as="th" textAlign="left">
                Source value
              </Box>
            </tr>
          </thead>
          <tbody>
            {tokens[filePath].map(token => {
              const condensed = token.name.includes('condensed') ? true : false
              const auto = token.name.includes('auto') ? true : false
              const spacious = token.name.includes('spacious') ? true : false
              const small = token.name.includes('small') ? true : false
              const medium = token.name.includes('medium') ? true : false
              const large = token.name.includes('large') ? true : false
              const FrameworkVars = [
                {id: 'CSS', token: `--${token.name}`},
                {id: 'JS', token: `${token.path.join('.')}`},
              ]
              return (
                token.name.includes('-controlStack-') &&
                token.name.match(tokenVariant) && (
                  <tr id={token.name} key={token.name}>
                    <td>
                      <ControlStackVisual
                        modifier={condensed ? 'condensed' : auto ? 'auto' : spacious ? 'spacious' : undefined}
                        variant={small ? '-small' : medium ? '-medium' : large ? '-large' : undefined}
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

export default UIControlStackTable
