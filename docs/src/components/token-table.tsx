import React, {Fragment, useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import {Box, Text} from '@primer/components'
import Table from '@primer/gatsby-theme-doctocat/src/components/table.js'
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
            CSS
          </Box>
          <Box as="th" textAlign="left">
            JS
          </Box>
          <Box as="th" textAlign="left">
            Value
          </Box>
          <Box as="th" textAlign="left">
            Pixel equivalant
          </Box>
          <Box as="th" textAlign="left">
            Visual
          </Box>
        </tr>
      </thead>
      <tbody>
        {tokens[filePath].map(token => {
          console.log(token.name.includes('gap'))
          return (
            <tr>
              <td>
                <CopyToClipboard text={token.name} onCopy={() => setCopied(true)}>
                  <code>--{token.name}</code>
                </CopyToClipboard>
              </td>
              <td>
                <code>{token.path.join('.')}</code>
              </td>
              <td>
                <code>{token.value}</code>
              </td>
              <td>
                <code>{token.original.value}</code>
              </td>
              <td>
                <Swatch color="var(--scale-purple-3)" height={token.value} width={token.value} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
