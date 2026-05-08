import React from 'react'
// eslint-disable-next-line import/extensions
import {SizeTokenSwatch} from '../StorybookComponents/SizeTokenSwatch/SizeTokenSwatch'
import {DataTable, Table} from '@primer/react/experimental'
import {getTokensByName} from '../utilities/getTokensByName'
import sizeTokens from '../../../../dist/docs/functional/size/border.json'
import radiusTokens from '../../../../dist/docs/functional/size/radius.json'
import {tokenColumn, outputValueColumn, sourceValueColumn} from '../utilities/commonTableColumns'

export default {
  title: 'Size/Functional/Border',
  parameters: {
    controls: {hideNoControlsWarning: true},
    tags: ['snapshotLight'],
  },
}

export const BorderSize = () => {
  const borderInset = getTokensByName(sizeTokens, 'boxShadow').map(token => ({id: token.name, ...token}))
  const borderWidth = getTokensByName(sizeTokens, 'borderWidth').map(token => ({id: token.name, ...token}))
  const data = borderWidth.concat(borderInset).map((item, index) => ({...item, index}))

  return (
    <Table.Container>
      <h1 className="sr-only" id="sizing">
        Border size
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
              <SizeTokenSwatch
                borderSize={row.name.startsWith('borderWidth') ? row.name : undefined}
                boxShadow={row.name.startsWith('boxShadow') ? row.name : undefined}
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
BorderSize.tags = ['snapshotLight']

export const BorderRadius = () => {
  const data = getTokensByName(radiusTokens, 'borderRadius').map(token => ({id: token.name, ...token}))

  return (
    <Table.Container>
      <h1 className="sr-only" id="sizing">
        Border radius
      </h1>
      <DataTable
        aria-labelledby="sizing"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => <SizeTokenSwatch borderRadius={row.name} filled />,
          },
          tokenColumn({cssVar: true}),
          outputValueColumn(),
          sourceValueColumn(),
        ]}
      />
    </Table.Container>
  )
}
BorderRadius.tags = ['snapshotLight']

export const Outline = () => {
  const data = getTokensByName(sizeTokens, 'outline').map(token => ({id: token.name, ...token}))

  return (
    <Table.Container>
      <h1 className="sr-only" id="sizing">
        Focus outline
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
              <SizeTokenSwatch
                outlineOffset={row.name.includes('offset') ? row.name : undefined}
                outlineWidth={row.name.includes('width')}
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
Outline.tags = ['snapshotLight']
