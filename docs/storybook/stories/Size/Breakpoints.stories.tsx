import React from 'react'
// eslint-disable-next-line import/extensions
import breakpointTokens from '../../../../tokens-next-private/docs/functional/size/breakpoints.json'
import {DataTable, Table} from '@primer/react/drafts'
import {InlineCode} from '../StorybookComponents/InlineCode/InlineCode'

export default {
  title: 'Size/Functional/Breakpoints',
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
}

export const Breakpoints = () => {
  const data = Object.entries(breakpointTokens).flatMap(([category, items]) =>
    Object.values(items).map(item => ({
      name: item.name,
      value: item.value,
      originalValue: item.original.value,
      id: item.name,
    })),
  )

  return (
    <Table.Container>
      <Table.Title as="h1" id="breakpoints">
        Breakpoints
      </Table.Title>
      <DataTable
        aria-labelledby="breakpoints"
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
