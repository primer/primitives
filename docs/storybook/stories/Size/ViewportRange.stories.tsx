import React from 'react'
// eslint-disable-next-line import/extensions
import viewportTokens from '../../../../tokens-next-private/docs/functional/size/viewport.json'
import {DataTable, Table} from '@primer/react/drafts'
import {InlineCode} from '../StorybookComponents/InlineCode/InlineCode'

export default {
  title: 'Size/Functional/Viewport',
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
}

export const Viewport = () => {
  const data = Object.entries(viewportTokens).flatMap(([category, items]) =>
    Object.values(items).map(item => ({
      name: item.name,
      value: item.value,
      originalValue: item.original.value,
      id: item.name,
    })),
  )

  return (
    <Table.Container>
      <Table.Title as="h1" id="viewports">
        Viewport ranges
      </Table.Title>
      <DataTable
        aria-labelledby="viewports"
        data={data}
        columns={[
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
            field: 'originalValue',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.originalValue}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}
