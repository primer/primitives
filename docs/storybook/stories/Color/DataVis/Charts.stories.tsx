import React from 'react'
// eslint-disable-next-line import/extensions
import colorTokens from '../../../../../dist/docs/functional/themes/light.json'
import {ColorTokenSwatch} from '../../StorybookComponents/ColorTokenSwatch/ColorTokenSwatch'
import {DataTable, Table} from '@primer/react/experimental'
import {InlineCode} from '../../StorybookComponents/InlineCode/InlineCode'
import {getTokensByName} from '../../utilities/getTokensByName'

export default {
  title: 'Color/DataVis',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {
      showPanel: false,
    },
  },
}

export const HighchartsAccentColors = () => {
  const data = getTokensByName(colorTokens, 'data')
    .filter(({type}) => type === 'color')
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

export const HighchartsGradients = () => {
  const data = getTokensByName(colorTokens, 'data')
    .filter(({type}) => type === 'gradient')
    .map(token => {
      console.log(token)

      return {
        id: token.name,
        ...token,
      }
    })
  return (
    <Table.Container>
      <Table.Title as="h1" id="pattern">
        Data visualization gradients
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
              return <ColorTokenSwatch gradientStops={row.value} />
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
              return <p>{row.value.map(({color, position}) => `${color} ${position * 100}%`).join(', ')}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}
