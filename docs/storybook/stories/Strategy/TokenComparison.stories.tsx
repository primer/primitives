import React from 'react'
import {CSSTokenSwatch} from '../Components/CSSTokenSwatch'
// eslint-disable-next-line import/extensions
import cssVars from './DeprecatedTokensMap.json'
import {DataTable, Table} from '@primer/react/drafts'

export default {
  title: 'Deprecation/ComparisonTable',
}
export const ComparisionTable = () => {
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
          // {
          //   header: 'New',
          //   field: 'color',
          //   renderCell: row => {
          //     return <CSSTokenSwatch color={row.color} />
          //   },
          // },
        ]}
      />
    </Table.Container>
  )
}
