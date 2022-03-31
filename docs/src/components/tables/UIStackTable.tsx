import React, {Fragment, FC} from 'react'
import {Box} from '@primer/components'
import Table from '@primer/gatsby-theme-doctocat/src/components/table.js'
import TokenTable from '../TokenTable'
import TokenInlineCode from '../TokenInlineCode'
import FrameworkVariableTable from './FrameworkVariableTable'
import tokens from '../../../../dist/docs/docValues.json'
import StackVisual from '../Stack'

interface UIStackTableProps {
  filePath?: string
  tokenVariant?: string
}

const UIStackTable: FC<UIStackTableProps> = ({filePath, tokenVariant}) => {
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
              const gapProp = token.name.includes('gap') ? true : false
              const paddingProp = token.name.includes('padding') ? true : false
              const condensed = token.name.includes('condensed') ? true : false
              const normal = token.name.includes('normal') ? true : false
              const spacious = token.name.includes('spacious') ? true : false
              const FrameworkVars = [
                {id: 'CSS', token: `--${token.name}`},
                {id: 'JS', token: `${token.path.join('.')}`}
              ]
              return (
                token.name.includes('-stack-') &&
                token.name.match(tokenVariant) && (
                  <tr>
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

export default UIStackTable
