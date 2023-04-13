import React from 'react'
// eslint-disable-next-line import/extensions
import sizeTokens from '../../../../tokens-next-private/docs/base/size/size.json'
import {SizeTokenSwatch} from '../StorybookComponents/SizeTokenSwatch/SizeTokenSwatch'
import {DataTable, Table} from '@primer/react/drafts'
import {InlineCode} from '../StorybookComponents/InlineCode/InlineCode'

export default {
  title: 'Size/Base',
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
}

export const Base = () => {
  const sizeArray = Object.entries(sizeTokens.base.size)
  const data = sizeArray.map(([key, value]) => {
    return {
      id: key,
      ...value,
    }
  })
  return (
    <Table.Container>
      <Table.Title as="h1" id="sizing">
        Sizing and spacing
      </Table.Title>
      <DataTable
        aria-labelledby="repositories"
        aria-describedby="repositories-subtitle"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <SizeTokenSwatch size={row.name} filled />
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
