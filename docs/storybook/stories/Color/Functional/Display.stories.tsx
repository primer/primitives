import React from 'react'
// eslint-disable-next-line import/extensions
import colorTokens from '../../../../../tokens-next-private/docs/functional/themes/light.json'
import {ColorTokenSwatch} from '../../StorybookComponents/ColorTokenSwatch/ColorTokenSwatch'
import {DataTable, Table} from '@primer/react/drafts'
import {InlineCode} from '../../StorybookComponents/InlineCode/InlineCode'
import {getTokensByName} from '../../utilities/getTokensByName'
import {Button} from '@primer/react'
import {StarFillIcon} from '@primer/octicons-react'

export default {
  title: 'Color/Alpha/Display',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {
      showPanel: false,
    },
    tags: ['excludeSnapshot'],
  },
}

export const Foreground = () => {
  const data = getTokensByName(colorTokens, 'display')
    .map(token => {
      return {
        id: token.name,
        ...token,
      }
    })
    .filter(token => token.name.includes('fgColor'))

  return (
    <Table.Container>
      <h1 className="sr-only" id="table-heading">
        Foreground
      </h1>
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
  const data = getTokensByName(colorTokens, 'display')
    .map(token => {
      return {
        id: token.name,
        ...token,
      }
    })
    .filter(token => token.name.includes('bgColor'))
  return (
    <Table.Container>
      <h1 className="sr-only" id="table-heading">
        Background
      </h1>
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
  const data = getTokensByName(colorTokens, 'display')
    .map(token => {
      return {
        id: token.name,
        ...token,
      }
    })
    .filter(token => token.name.includes('borderColor'))
  return (
    <Table.Container>
      <h1 className="sr-only" id="table-heading">
        Border
      </h1>
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

export const ButtonTest = () => {
  return (
    <Button leadingVisual={StarFillIcon} sx={{svg: {color: 'var(--button-star-iconColor)'}}}>
      Test
    </Button>
  )
}
