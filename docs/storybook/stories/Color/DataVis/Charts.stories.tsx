import React from 'react'
import {ColorTokenSwatch} from '../../StorybookComponents/ColorTokenSwatch/ColorTokenSwatch'
import {DataTable, Table} from '@primer/react/experimental'
import {InlineCode} from '../../StorybookComponents/InlineCode/InlineCode'
import {getTokensByName} from '../../utilities/getTokensByName'
import {withColorTokens, type ColorTokens} from '../../utilities/withColorTokens'

export default {
  title: 'Color/DataVis',
  decorators: [withColorTokens],
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {
      showPanel: false,
    },
  },
}

export const HighchartsAccentColors = ({colorTokens}: {colorTokens: ColorTokens}) => {
  const data = getTokensByName(colorTokens, 'data')
    .filter(({type, name}) => type === 'color' && !name.includes('muted'))
    .map(token => {
      return {
        id: token.name,
        ...token,
      }
    })
  return (
    <Table.Container>
      <Table.Title as="h1" id="pattern">
        Data visualization colors
      </Table.Title>
      <DataTable
        aria-labelledby="pattern"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <ColorTokenSwatch bgColor={row.name} />
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
        ]}
      />
    </Table.Container>
  )
}

export const HighchartsMutedColors = ({colorTokens}: {colorTokens: ColorTokens}) => {
  const data = getTokensByName(colorTokens, 'data')
    .filter(({type, name}) => type === 'color' && name.includes('muted'))
    .map(token => {
      return {
        id: token.name,
        ...token,
      }
    })
  return (
    <Table.Container>
      <Table.Title as="h1" id="pattern">
        Data visualization colors
      </Table.Title>
      <DataTable
        aria-labelledby="pattern"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <ColorTokenSwatch bgColor={row.name} />
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
        ]}
      />
    </Table.Container>
  )
}
