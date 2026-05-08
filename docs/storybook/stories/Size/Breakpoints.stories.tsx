import React from 'react'
// eslint-disable-next-line import/extensions
import sizeTokens from '../../../../dist/docs/functional/size/breakpoints.json'
import {DataTable, Table} from '@primer/react/experimental'
import {getTokensByName} from '../utilities/getTokensByName'
import {tokenColumn, outputValueColumn, sourceValueColumn} from '../utilities/commonTableColumns'

export default {
  title: 'Size/Functional/Breakpoints',
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
}

export const Breakpoints = () => {
  const data = getTokensByName(sizeTokens, 'breakpoint').map(token => ({id: token.name, ...token}))

  return (
    <Table.Container>
      <h1 className="sr-only" id="breakpoints">
        Breakpoints
      </h1>
      <DataTable
        aria-labelledby="breakpoints"
        data={data}
        columns={[tokenColumn({cssVar: true}), outputValueColumn(), sourceValueColumn()]}
      />
    </Table.Container>
  )
}
