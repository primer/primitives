import React from 'react'
import {ColorTokenSwatch} from '../../StorybookComponents/ColorTokenSwatch/ColorTokenSwatch'
import {DataTable, Table, Stack} from '@primer/react/experimental'
import {InlineCode} from '../../StorybookComponents/InlineCode/InlineCode'
import {withColorTokens, type ColorTokens} from '../../utilities/withColorTokens'

export default {
  title: 'Color/Transparent',
  decorators: [withColorTokens],
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {
      showPanel: false,
    },
  },
}

export const Transparent = ({colorTokens}: {colorTokens: ColorTokens}) => {
  const data = Object.entries(colorTokens)
    .filter(([, token]) => token.alpha)
    .map(([name, token]) => {
      return {
        id: name,
        ...token,
      }
    })
  return (
    <Table.Container>
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
              return <InlineCode value={row.name} copyClipboard />
            },
          },
          {
            header: 'Base color',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              const rawValue = row.original.$value
              const cleanedValue =
                typeof rawValue === 'string'
                  ? rawValue.replace(/[{}]/g, '').replace(/\./g, '-')
                  : typeof rawValue === 'object' && rawValue !== null && 'hex' in rawValue
                    ? rawValue.hex
                    : row.value
              return (
                <Stack direction="horizontal" gap="condensed">
                  <ColorTokenSwatch bgColor={cleanedValue} /> <code>{cleanedValue}</code>
                </Stack>
              )
            },
          },
          {
            header: 'Alpha',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.alpha}</p>
            },
          },
          {
            header: 'Output value',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <InlineCode value={row.value} copyClipboard />
            },
          },
        ]}
      />
    </Table.Container>
  )
}
