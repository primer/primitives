import React from 'react'
// eslint-disable-next-line import/extensions
import sizeTokens from '../../../../dist/docs/functional/size/viewport.json'
import {DataTable, Table} from '@primer/react/experimental'
import {getTokensByName} from '../utilities/getTokensByName'
import {tokenColumn, outputValueColumn, sourceValueColumn} from '../utilities/commonTableColumns'

export default {
  title: 'Size/Functional/Viewport',
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
}

export const Viewport = () => {
  const data = getTokensByName(sizeTokens, 'viewportRange').map(token => ({id: token.name, ...token}))

  return (
    <Table.Container>
      <h1 className="sr-only" id="sizing">
        Viewport ranges
      </h1>
      <DataTable
        aria-labelledby="sizing"
        data={data}
        columns={[tokenColumn({cssVar: true}), outputValueColumn(), sourceValueColumn()]}
      />
    </Table.Container>
  )
}
