import React, {Fragment, useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import {Box, Text} from '@primer/components'
import Table from '@primer/gatsby-theme-doctocat/src/components/table.js'
import FrameworkVariableTable from './framework-variables-table'
import InlineCode from '@primer/gatsby-theme-doctocat/src/components/inline-code.js'
// import baseTokens from '../../../dist/new/tokens/tokensBase.js'
// import ghTokens from '../../../dist/new/tokens/tokensGH.js'
import tokens from '../../../dist/docs/docValues.json'
import Swatch from './swatch'
import {CopyToClipboard} from 'react-copy-to-clipboard'

// console.log(Object.entries(ghTokens.size.control))

const GlobalStyle = createGlobalStyle`
  code {
      white-space: nowrap;
  }
`

export function NewTable({filePath}) {
  // return <pre>{JSON.stringify(tokens[filePath], null, 2)}</pre>
  //   const [value, setValue] = useState('My copy text')
  const [copied, setCopied] = useState(false)

  return (
    <Table>
      <GlobalStyle />
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
              <td>
                <Swatch color="var(--scale-purple-3)" height={token.value} width={token.value} />
              </td>
              <FrameworkVariableTable frameworks={FrameworkVars} />
              <td>
                <InlineCode>{token.value}</InlineCode>
              </td>
              <td>
                <InlineCode>{token.original.value}</InlineCode>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
