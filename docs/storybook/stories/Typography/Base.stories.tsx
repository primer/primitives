import React from 'react'
// eslint-disable-next-line import/extensions
import sizeTokens from '../../../../dist/docs/base/typography/typography.json'
import {DataTable, Table} from '@primer/react/experimental'
import {InlineCode} from '../StorybookComponents/InlineCode/InlineCode'
import {TypographyDemo} from '../StorybookComponents/TypographyDemo/TypographyDemo'
import {getTokensByName} from '../utilities/getTokensByName'

export default {
  title: 'Typography/Base',
  parameters: {
    controls: {hideNoControlsWarning: true},
    tags: ['snapshotLight'],
  },
}

export const Base = () => {
  const data = getTokensByName(sizeTokens, 'base').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

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
            renderCell: row => {
              return (
                <TypographyDemo fontWeight={row.name} fontShorthand="text-title-shorthand-medium">
                  {row.name.split('-').pop().split('-').pop()}
                </TypographyDemo>
              )
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
