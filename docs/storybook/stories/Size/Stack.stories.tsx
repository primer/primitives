import React from 'react'
// eslint-disable-next-line import/extensions
import sizeTokens from '../../../../dist/docs/functional/size/size.json'
import {StackDemo} from '../StorybookComponents/StackDemo/StackDemo'
import {DataTable, Table} from '@primer/react/experimental'
import {getTokensByName} from '../utilities/getTokensByName'
import {tokenColumn, outputValueColumn, sourceValueColumn} from '../utilities/commonTableColumns'

export default {
  title: 'Size/Functional/Stack',
  parameters: {
    controls: {hideNoControlsWarning: true},
    tags: ['snapshotLight'],
  },
}

export const Stack = () => {
  const data = getTokensByName(sizeTokens, 'stack').map(token => ({id: token.name, ...token}))

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
            renderCell: row => (
              <StackDemo
                gap={row.name.includes('gap') ? row.name : undefined}
                padding={row.name.includes('padding') ? row.name : undefined}
              />
            ),
          },
          tokenColumn({cssVar: true}),
          outputValueColumn(),
          sourceValueColumn(),
        ]}
      />
    </Table.Container>
  )
}
