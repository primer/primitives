import React from 'react'
// eslint-disable-next-line import/extensions
import sizeTokens from '../../../../tokens-v3-private/docs/base/size/size.json'
import {CSSTokenSwatch} from '../Components/CSSTokenSwatch'
import {CSSTokenShadowSwatch} from '../Components/CSSTokenShadowSwatch'
import {DataTable, Table} from '@primer/react/drafts'

export default {
  title: 'Size/Space',
}

export const Primitives = () => {
  const sizeArray = Object.entries(sizeTokens.base.size)
  const data = sizeArray.map(([key, value]) => {
    return {
      id: key,
      ...value,
    }
  })
  // const data = Object.entries(sizeTokens).map(
  //   ([
  //     key,
  //     {
  //       value,
  //       original: {value: originalValue},
  //       name,
  //     },
  //   ]) => {
  //     return {
  //       id: key,
  //       value,
  //       originalValue,
  //       name,
  //     }
  //   },
  // )

  console.log(data)
  return (
    <Table.Container>
      <Table.Title as="h2" id="sizing">
        Sizing and spacing
      </Table.Title>
      <DataTable
        aria-labelledby="repositories"
        aria-describedby="repositories-subtitle"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
          {
            header: 'Token',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.name}</p>
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
            field: 'original.value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.original.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}
