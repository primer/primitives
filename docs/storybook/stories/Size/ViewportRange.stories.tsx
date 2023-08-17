import React from 'react'
// eslint-disable-next-line import/extensions
import sizeTokens from '../../../../tokens-next-private/docs/functional/size/viewport.json'
import {DataTable, Table} from '@primer/react/drafts'
import {InlineCode} from '../StorybookComponents/InlineCode/InlineCode'
import {getTokensByName} from '../utilities/getTokensByName'

export default {
  title: 'Size/Functional/Viewport',
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
  tags: ['excludeSnapshot'],
}

export const Viewport = () => {
  const data = getTokensByName(sizeTokens, 'viewportRange').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })
  return (
    <Table.Container>
      <h1 className="sr-only" id="sizing">
        Viewport ranges
      </h1>
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
            field: 'original',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}
