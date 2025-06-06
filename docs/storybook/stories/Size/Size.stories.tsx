import React from 'react'
// eslint-disable-next-line import/extensions
import sizeTokens from '../../../../dist/docs/base/size/size.json'
import {SizeTokenSwatch} from '../StorybookComponents/SizeTokenSwatch/SizeTokenSwatch'
import {DataTable, Table} from '@primer/react/experimental'
import {InlineCode} from '../StorybookComponents/InlineCode/InlineCode'
import {getTokensByName} from '../utilities/getTokensByName'

export default {
  title: 'Size/Base',
  parameters: {
    controls: {hideNoControlsWarning: true},
    tags: ['snapshotLight'],
  },
}

export const Base = () => {
  const data = getTokensByName(sizeTokens, 'base')
    .map(token => {
      return {
        id: token.name,
        ...token,
      }
    })
    .sort((a, b) => {
      const numA = parseInt(a.name.split('-').pop() || '0', 10)
      const numB = parseInt(b.name.split('-').pop() || '0', 10)
      return numA - numB
    })

  return (
    <Table.Container>
      <h1 className="sr-only" id="sizing">
        Base size
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
              return <SizeTokenSwatch size={row.name} filled />
            },
          },
          {
            header: 'Token',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <InlineCode value={row.name} copyClipboard cssVar />
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
            field: 'original.$value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.original.$value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}
