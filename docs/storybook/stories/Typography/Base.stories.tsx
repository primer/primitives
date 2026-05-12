import React from 'react'
// eslint-disable-next-line import/extensions
import sizeTokens from '../../../../dist/docs/base/typography/typography.json'
import {DataTable, Table} from '@primer/react/experimental'
import {TypographyDemo} from '../StorybookComponents/TypographyDemo/TypographyDemo'
import {getTokensByName} from '../utilities/getTokensByName'
import {tokenColumn, outputValueColumn, sourceValueColumn} from '../utilities/commonTableColumns'

export default {
  title: 'Typography/Base',
  parameters: {
    controls: {hideNoControlsWarning: true},
    tags: ['snapshotLight'],
  },
}

export const Base = () => {
  const data = getTokensByName(sizeTokens, 'base').map(token => ({id: token.name, ...token}))

  return (
    <Table.Container>
      <h1 className="sr-only" id="weight">
        Base weight
      </h1>
      <DataTable
        aria-labelledby="weight"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => (
              <TypographyDemo fontWeight={row.name} fontShorthand="text-title-shorthand-medium">
                {row.name.split('-').pop().split('-').pop()}
              </TypographyDemo>
            ),
          },
          tokenColumn(),
          outputValueColumn(),
          sourceValueColumn(),
        ]}
      />
    </Table.Container>
  )
}
