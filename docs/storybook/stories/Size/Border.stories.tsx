import React from 'react'
// eslint-disable-next-line import/extensions
import sizeTokens from '../../../../dist/docs/functional/size/border.json'
import {SizeTokenSwatch} from '../StorybookComponents/SizeTokenSwatch/SizeTokenSwatch'
import {DataTable, Table} from '@primer/react/drafts'
import {InlineCode} from '../StorybookComponents/InlineCode/InlineCode'
import {getTokensByName} from '../utilities/getTokensByName'

export default {
  title: 'Size/Functional/Border',
  parameters: {
    controls: {hideNoControlsWarning: true},
    tags: ['snapshotLight'],
  },
}

export const BorderSize = () => {
  const borderInset = getTokensByName(sizeTokens, 'boxShadow').map(token => {
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
            renderCell: row => {
              return (
                <SizeTokenSwatch
                  borderSize={row.name.startsWith('borderWidth') ? row.name : undefined}
                  boxShadow={row.name.startsWith('boxShadow') ? row.name : undefined}
                />
              )
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
BorderSize.tags = ['snapshotLight']

export const BorderRadius = () => {
  const data = getTokensByName(sizeTokens, 'borderRadius').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

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
            renderCell: row => {
              return <SizeTokenSwatch borderRadius={row.name} filled />
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
BorderRadius.tags = ['snapshotLight']

export const Outline = () => {
  const data = getTokensByName(sizeTokens, 'outline').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

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
            renderCell: row => {
              return (
                <SizeTokenSwatch
                  outlineOffset={row.name.includes('offset') ? row.name : undefined}
                  outlineWidth={row.name.includes('width')}
                />
              )
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
Outline.tags = ['snapshotLight']
