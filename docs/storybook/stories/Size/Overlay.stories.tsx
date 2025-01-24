import React from 'react'
// eslint-disable-next-line import/extensions
import sizeTokens from '../../../../dist/docs/functional/size/size.json'
import {DataTable, Table} from '@primer/react/experimental'
import {InlineCode} from '../StorybookComponents/InlineCode/InlineCode'
import {getTokensByName} from '../utilities/getTokensByName'

export default {
  title: 'Size/Functional/Overlay',
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
  tags: ['snapshotLight'],
}

export const Overlay = () => {
  const data = getTokensByName(sizeTokens, 'overlay').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })
  return (
    <Table.Container>
      <h1 className="sr-only" id="overlau">
        Overlay
      </h1>
      <DataTable
        aria-labelledby="overlay"
        data={data}
        columns={[
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
            field: 'original',
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
