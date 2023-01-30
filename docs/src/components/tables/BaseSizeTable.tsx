// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React from 'react'
import {Box} from '@primer/react'
import FrameworkVariableTable from './FrameworkVariableTable'
import TokenInlineCode from '../TokenInlineCode'
import TokenTable from '../TokenTable'
import tokens from '../../../../tokens-v2-private/docs/docValues'
import Swatch from './Swatch'

interface BaseSizeTableProps {
  filePath?: string
  showExample?: boolean
}

const BaseSizeTable: React.FC<BaseSizeTableProps> = ({filePath, showExample}) => {
  return (
    <Box as="div" sx={{overflow: 'auto'}}>
      <TokenTable>
        <thead>
          <tr>
            {showExample && (
              <Box as="th" textAlign="left">
                Example
              </Box>
            )}
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
            const FrameworkVars = [
              {id: 'CSS', token: `--${token.name}`},
              {id: 'JS', token: `${token.path.join('.')}`},
            ]
            return (
              <tr id={token.name} key={token.name}>
                {showExample && (
                  <td>
                    <Swatch color="done.emphasis" height={token.value} width={token.value} />
                  </td>
                )}
                <FrameworkVariableTable frameworks={FrameworkVars} />
                <td>
                  <TokenInlineCode>{token.value}</TokenInlineCode>
                </td>
                <td>
                  <TokenInlineCode>
                    {token.original.value.includes('{') && !token.original.value.includes('calc') ? (
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
          })}
        </tbody>
      </TokenTable>
    </Box>
  )
}

export default BaseSizeTable
