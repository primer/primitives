import React from 'react'
// eslint-disable-next-line import/extensions
import sizeTokens from '../../../../dist/docs/base/size/size.json'
import {SizeTokenSwatch} from '../StorybookComponents/SizeTokenSwatch/SizeTokenSwatch'
import {DataTable, Table} from '@primer/react/experimental'
import {getTokensByName} from '../utilities/getTokensByName'
import {tokenColumn, outputValueColumn, sourceValueColumn} from '../utilities/commonTableColumns'

export default {
  title: 'Size/Base',
  parameters: {
    controls: {hideNoControlsWarning: true},
    tags: ['snapshotLight'],
  },
}

export const Base = () => {
  const data = getTokensByName(sizeTokens, 'base')
    .map(token => ({id: token.name, ...token}))
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
            renderCell: row => <SizeTokenSwatch size={row.name} filled />,
          },
          tokenColumn({cssVar: true}),
          outputValueColumn(),
          sourceValueColumn(),
        ]}
      />
    </Table.Container>
  )
}
