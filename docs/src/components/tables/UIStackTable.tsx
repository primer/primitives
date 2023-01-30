// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React, {Fragment} from 'react'
import {Box} from '@primer/react'
import TokenTable from '../TokenTable'
import TokenInlineCode from '../TokenInlineCode'
import FrameworkVariableTable from './FrameworkVariableTable'
import tokens from '../../../../tokens-v2-private/docs/docValues'
import StackVisual from '../Stack'

interface UIStackTableProps {
  filePath?: string
  tokenVariant?: string
}

const UIStackTable: React.FC<UIStackTableProps> = ({filePath, tokenVariant}) => {
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
              const gapProp = token.name.includes('gap') ? true : false
              const paddingProp = token.name.includes('padding') ? true : false
              const condensed = token.name.includes('condensed') ? true : false
              const normal = token.name.includes('normal') ? true : false
              const spacious = token.name.includes('spacious') ? true : false
              const FrameworkVars = [
                {id: 'CSS', token: `--${token.name}`},
                {id: 'JS', token: `${token.path.join('.')}`},
              ]
              return (
                token.name.includes('-stack-') &&
                token.name.match(tokenVariant) && (
                  <tr id={token.name} key={token.name}>
                    <td>
                      <StackVisual
                        modifier={condensed ? 'condensed' : normal ? 'normal' : spacious ? 'spacious' : undefined}
                        gap={gapProp}
                        padding={paddingProp}
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

export default UIStackTable
