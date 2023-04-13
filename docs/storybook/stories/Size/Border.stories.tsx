import React from 'react'
// eslint-disable-next-line import/extensions
import borderTokens from '../../../../tokens-next-private/docs/functional/size/border.json'
import {SizeTokenSwatch} from '../StorybookComponents/SizeTokenSwatch/SizeTokenSwatch'
import {DataTable, Table} from '@primer/react/drafts'
import {InlineCode} from '../StorybookComponents/InlineCode/InlineCode'

export default {
  title: 'Size/Functional/Border',
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
}

export const Border = () => {
  const data = Object.entries(borderTokens).flatMap(([category, items]) => {
    if (category === 'outline') {
      const outlineFocusOffset = items.focus.offset
      return {
        name: outlineFocusOffset.name,
        value: outlineFocusOffset.value,
        id: outlineFocusOffset.name,
        originalValue: outlineFocusOffset.original.value,
        borderWidth: undefined,
        borderRadius: undefined,
        boxShadow: undefined,
        outlineFocusOffset: outlineFocusOffset.name,
      }
    }

    return Object.values(items).map(item => ({
      name: item.name,
      value: item.value,
      id: item.name,
      originalValue: item.original.value,
      borderWidth: category === 'borderWidth' ? item.name : undefined,
      borderRadius: category === 'borderRadius' ? item.name : undefined,
      boxShadow: category === 'borderInset' ? item.name : undefined,
    }))
  })

  return (
    <Table.Container>
      <Table.Title as="h1" id="sizing">
        Sizing and spacing
      </Table.Title>
      <DataTable
        aria-labelledby="sizing"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return (
                <SizeTokenSwatch
                  borderRadius={row.borderRadius}
                  borderSize={row.borderWidth}
                  boxShadow={row.boxShadow}
                  filled={row.borderRadius || row.outlineFocusOffset ? true : false}
                  outlineOffset={row.outlineFocusOffset}
                />
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
            field: 'originalValue',
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
