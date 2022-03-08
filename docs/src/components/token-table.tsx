import React, {Fragment} from 'react'
import {Box, Text} from '@primer/components'
import Table from '@primer/gatsby-theme-doctocat/src/components/table.js'
// import baseTokens from '../../../dist/new/tokens/tokensBase.js'
// import ghTokens from '../../../dist/new/tokens/tokensGH.js'
import tokens from '../../../dist/docs/docValues.json'

// console.log(Object.entries(ghTokens.size.control))

export function NewTable({filePath}) {
  // return <pre>{JSON.stringify(tokens[filePath], null, 2)}</pre>
  return (
    <Table>
      <thead>
        <tr>
          <Box as="th" textAlign="left">
            CSS variable
          </Box>
          <Box as="th" textAlign="left">
            JS variable
          </Box>
          <Box as="th" textAlign="left">
            Value
          </Box>
          <Box as="th" textAlign="left">
            Pixel equivalant
          </Box>
        </tr>
      </thead>
      <tbody>
        {tokens[filePath].map(token => {
          return (
            <tr>
              <td>
                <code>--{token.name}</code>
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
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
