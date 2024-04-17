import React from 'react'
// eslint-disable-next-line import/extensions
import sizeTokens from '../../../../dist/docs/functional/size/size.json'
import {StackDemo} from '../StorybookComponents/StackDemo/StackDemo'
import {DataTable, Table} from '@primer/react/drafts'
import {InlineCode} from '../StorybookComponents/InlineCode/InlineCode'
import {getTokensByName} from '../utilities/getTokensByName'

export default {
  title: 'Size/Functional/Stack',
  parameters: {
    controls: {hideNoControlsWarning: true},
    tags: ['snapshotLight'],
  },
}

export const Stack = () => {
  const data = getTokensByName(sizeTokens, 'stack').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  return (
    <Table.Container>
      <h1 className="sr-only" id="sizing">
        Stack
      </h1>
      <DataTable
        aria-labelledby="sizing"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return (
                <StackDemo
                  gap={row.name.includes('gap') ? row.name : undefined}
                  padding={row.name.includes('padding') ? row.name : undefined}
                />
              )
            },
          },
          {
            header: 'Token',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <InlineCode value={row.name} copyClipboard />
            },
          },
          {
            header: 'Output value',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
          {
            header: 'Source value',
            field: 'original.value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.original.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}
