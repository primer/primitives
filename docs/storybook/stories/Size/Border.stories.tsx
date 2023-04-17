import React from 'react'
// eslint-disable-next-line import/extensions
import sizeTokens from '../../../../tokens-next-private/docs/functional/size/border.json'
import {SizeTokenSwatch} from '../StorybookComponents/SizeTokenSwatch/SizeTokenSwatch'
import {DataTable, Table} from '@primer/react/drafts'
import {InlineCode} from '../StorybookComponents/InlineCode/InlineCode'
import {getTokensByName} from '../utilities/getTokensByName'

export default {
  title: 'Size/Functional/Border',
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
}

export const BorderSize = () => {
  const borderInset = getTokensByName(sizeTokens, 'borderInset').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  const borderWidth = getTokensByName(sizeTokens, 'borderWidth').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  const data = borderWidth.concat(borderInset).map((item, index) => ({
    ...item,
    index,
  }))

  return (
    <Table.Container>
      <Table.Title as="h1" id="sizing">
        Border size
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
                  borderSize={row.name.startsWith('borderWidth') ? row.name : undefined}
                  boxShadow={row.name.startsWith('borderInset') ? row.name : undefined}
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
            field: 'original',
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

export const BorderRadius = () => {
  const data = getTokensByName(sizeTokens, 'borderRadius').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  return (
    <Table.Container>
      <Table.Title as="h1" id="sizing">
        Border radius
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
              return <SizeTokenSwatch borderRadius={row.name} filled />
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
              return <p>{row.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const Outline = () => {
  const data = getTokensByName(sizeTokens, 'outline').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  return (
    <Table.Container>
      <Table.Title as="h1" id="sizing">
        Focus outline
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
              return <SizeTokenSwatch filled outlineOffset={row.name} />
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
              return <p>{row.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}
