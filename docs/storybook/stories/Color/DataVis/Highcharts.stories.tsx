import React from 'react'
// eslint-disable-next-line import/extensions
import colorTokens from '../../../../../tokens-next-private/docs/functional/themes/light.json'
import {ColorTokenSwatch} from '../../StorybookComponents/ColorTokenSwatch/ColorTokenSwatch'
import {DataTable, Table} from '@primer/react/drafts'
import {InlineCode} from '../../StorybookComponents/InlineCode/InlineCode'
import {getTokensByName} from '../../utilities/getTokensByName'
import './highcharts.css'

export default {
  title: 'Color/DataVis',
  parameters: {
    parameters: {
      controls: {hideNoControlsWarning: true},
      options: {
        showPanel: false,
      },
    },
  },
}

const highchartColors = [
  'highcharts-color-0',
  'highcharts-color-1',
  'highcharts-color-2',
  'highcharts-color-3',
  'highcharts-color-4',
  'highcharts-color-5',
  'highcharts-color-6',
  'highcharts-color-7',
  'highcharts-color-8',
  'highcharts-color-9',
  'highcharts-background-color',
  'highcharts-neutral-color-100',
  'highcharts-neutral-color-80',
  'highcharts-neutral-color-60',
  'highcharts-neutral-color-40',
  'highcharts-neutral-color-20',
  'highcharts-neutral-color-10',
  'highcharts-neutral-color-5',
  'highcharts-neutral-color-3',
  'highcharts-highlight-color-100',
  'highcharts-highlight-color-80',
  'highcharts-highlight-color-60',
  'highcharts-highlight-color-20',
  'highcharts-highlight-color-10',
  'highcharts-positive-color',
  'highcharts-negative-color',
]

const primerDataVisColors = [
  'highcharts-color-0',
  'highcharts-color-1',
  'highcharts-color-2',
  'highcharts-color-3',
  'highcharts-color-4',
  'highcharts-color-5',
  'highcharts-color-6',
  'highcharts-color-7',
  'highcharts-color-8',
  'highcharts-color-9',
  'highcharts-background-color',
  'highcharts-neutral-color-100',
  'highcharts-neutral-color-80',
  'highcharts-neutral-color-60',
  'highcharts-neutral-color-40',
  'highcharts-neutral-color-20',
  'highcharts-neutral-color-10',
  'highcharts-neutral-color-5',
  'highcharts-neutral-color-3',
  'highcharts-highlight-color-100',
  'highcharts-highlight-color-80',
  'highcharts-highlight-color-60',
  'bgColor-accent-muted',
  'bgColor-accent-muted',
  'bgColor-success-emphasis',
  'bgColor-danger-emphasis',
]

export const Highcharts = () => {
  return (
    <Table.Container>
      <Table.Title as="h1" id="pattern">
        Primer color mappings to Highcharts
      </Table.Title>
      <DataTable
        aria-labelledby="pattern"
        data={highchartColors.map((color, index) => ({name: color, primerColor: primerDataVisColors[index] || ''}))}
        columns={[
          {
            header: 'Highcarts',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <ColorTokenSwatch bgColor={row.name} />
            },
          },
          {
            header: 'Primer Data Vis Colors',
            field: 'primerColor',
            rowHeader: true,
            renderCell: row => {
              return <ColorTokenSwatch bgColor={row.primerColor} />
            },
          },
        ]}
      />
    </Table.Container>
  )
}
