import React, {Fragment, FC} from 'react'
import {Box} from '@primer/components'
import Table from '@primer/gatsby-theme-doctocat/src/components/table.js'
import TokenInlineCode from '../TokenInlineCode'
import FrameworkVariableTable from './FrameworkVariableTable'
import tokens from '../../../../dist/docs/docValues.json'
import ControlStackVisual from '../ControlStack'

interface UIControlStackTableProps {
  filePath?: string
  tokenVariant?: string
}

const UIControlStackTable: FC<UIControlStackTableProps> = ({filePath, tokenVariant}) => {
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
            <Box as="th" textAlign="left">
              px
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
              {id: 'JS', token: `${token.path.join('.')}`}
            ]
            return (
              token.name.includes('-controlStack-') &&
              token.name.match(tokenVariant) && (
                <tr>
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
                    <TokenInlineCode>{token.original.value}</TokenInlineCode>
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

export default UIControlStackTable
