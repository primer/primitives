import React from 'react'
import {CSSTokenSwatch} from '../Components/CSSTokenSwatch'
// eslint-disable-next-line import/extensions
import cssVars from './DeprecatedTokensMap.json'
// eslint-disable-next-line import/extensions
import noChangeCssVars from './NoChangeTokensMap.json'
import {DataTable, Table} from '@primer/react/drafts'

export default {
  title: 'Deprecation/Tables',
}

export const Deprecated = () => {
  const data = Object.entries(cssVars).map(([key, value]) => {
    return {
      id: key,
      ...value,
    }
  })
  return (
    <Table.Container>
      <Table.Title as="h2" id="repositories">
        Deprecated token replacements
      </Table.Title>
      <DataTable
        aria-labelledby="repositories"
        aria-describedby="repositories-subtitle"
        data={data}
        columns={[
          {
            header: 'Old',
            field: 'id',
            rowHeader: true,
            renderCell: row => {
              return <CSSTokenSwatch color={row.id} />
            },
          },
          {
            header: 'Foreground',
            field: 'color',
            renderCell: row => {
              return <CSSTokenSwatch color={row.color} />
            },
          },
          {
            header: 'Background',
            field: 'background',
            renderCell: row => {
              return <CSSTokenSwatch color={row.background} />
            },
          },
          {
            header: 'Border',
            field: 'border',
            renderCell: row => {
              return <CSSTokenSwatch color={row.border} />
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const NoChange = () => {
  const data = Object.entries(noChangeCssVars).map(([key, value]) => {
    return {
      id: key,
      ...value,
    }
  })
  return (
    <Table.Container>
      <Table.Title as="h2" id="repositories">
        Deprecated token replacements
      </Table.Title>
      <DataTable
        aria-labelledby="repositories"
        aria-describedby="repositories-subtitle"
        data={data}
        columns={[
          {
            header: 'Old',
            field: 'id',
            rowHeader: true,
            renderCell: row => {
              return <CSSTokenSwatch color={row.id} />
            },
          },
          {
            header: 'New',
            field: 'color',
            renderCell: row => {
              return <CSSTokenSwatch color={row.color} />
            },
          },
        ]}
      />
    </Table.Container>
  )
}
