import React from 'react'
// eslint-disable-next-line import/extensions
import colorTokens from '../../../../../../tokens-next-private/docs/functional/themes/light.json'
import {ColorTokenSwatch} from '../../../StorybookComponents/ColorTokenSwatch/ColorTokenSwatch'
import {DataTable, Table} from '@primer/react/drafts'
import {InlineCode} from '../../../StorybookComponents/InlineCode/InlineCode'
import {getTokensByName} from '../../../utilities/getTokensByName'

export default {
  title: 'Color/Functional/Tables',
  parameters: {
    parameters: {
      controls: {hideNoControlsWarning: true},
      options: {
        showPanel: false,
      },
    },
  },
}

export const Foreground = () => {
  const data = getTokensByName(colorTokens, 'fgColor').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })
  return (
    <Table.Container>
      <Table.Title as="h1" id="pattern">
        Foreground
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
              return <ColorTokenSwatch textColor={row.name} />
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
        ]}
      />
    </Table.Container>
  )
}

export const Background = () => {
  const data = getTokensByName(colorTokens, 'bgColor').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })
  return (
    <Table.Container>
      <Table.Title as="h1" id="pattern">
        Background
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
        ]}
      />
    </Table.Container>
  )
}

export const Border = () => {
  const data = getTokensByName(colorTokens, 'borderColor').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })
  return (
    <Table.Container>
      <Table.Title as="h1" id="pattern">
        Border
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
              return <ColorTokenSwatch borderColor={row.name} />
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
        ]}
      />
    </Table.Container>
  )
}

export const Shadow = () => {
  const data = getTokensByName(colorTokens, 'shadow').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })
  return (
    <Table.Container>
      <Table.Title as="h1" id="pattern">
        Shadow
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
              return <ColorTokenSwatch shadowColor={row.name} />
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
        ]}
      />
    </Table.Container>
  )
}
