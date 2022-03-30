import React, {Fragment, FC} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import {Box} from '@primer/components'
import Table from '@primer/gatsby-theme-doctocat/src/components/table.js'
import FrameworkVariableTable from './FrameworkVariableTable'
import TokenInlineCode from '../TokenInlineCode'
import tokens from '../../../../dist/docs/docValues.json'
import Swatch from '../Swatch'

interface BaseSizeTableProps {
  filePath?: string
  showExample?: boolean
}

const BaseSizeTable: FC<BaseSizeTableProps> = ({filePath, showExample}) => {
  return (
    <Table>
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
            Value
          </Box>
          <Box as="th" textAlign="left">
            Pixel
          </Box>
        </tr>
      </thead>
      <tbody>
        {tokens[filePath].map(token => {
          const FrameworkVars = [
            {id: 'CSS', token: `--${token.name}`},
            {id: 'JS', token: `${token.path.join('.')}`}
          ]
          return (
            <tr>
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
                <TokenInlineCode>{token.original.value}</TokenInlineCode>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default BaseSizeTable
