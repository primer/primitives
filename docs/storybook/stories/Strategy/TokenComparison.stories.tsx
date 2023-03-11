import React from 'react'
import {CSSTokenSwatch} from '../Components/CSSTokenSwatch'
import cssVars from './DeprecatedTokensMap.json'
import {DataTable, Table} from '@primer/react/drafts'

export default {
  title: 'Deprecation/ComparisonTable',
  // parameters: {
  //   storyType: 'swatch',
  // },
}

// const cssVariableNames = Object.keys(cssVariables)

// return (
//   <div>
//     {cssVariableNames.map(variableName => (
//       <div key={variableName}>
//         <span>{variableName}: </span>
//         <span>{JSON.stringify(cssVariables[variableName])}</span>
//       </div>
//     ))}
//   </div>
// )

export const ComparisionTable = () => {
  const cssVariableNames = Object.keys(cssVars)
  console.log(cssVariableNames)
  return (
    <table>
      <thead>
        <tr>
          <th>Old</th>
          <th>New</th>
        </tr>
      </thead>
      <tbody>
        {cssVariableNames.map(variableName => (
          <tr key={variableName}>
            <td>
              <CSSTokenSwatch color={variableName} />
            </td>
          </tr>
        ))}
        {/* <td>
          <CSSTokenSwatch color="base-color-pink-5" />
        </td> */}
      </tbody>
    </table>
  )
}

export const NewTable = () => {
  const cssVariableNames = Object.keys(cssVars)
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
            header: 'New',
            field: 'color',
            renderCell: row => {
              return <CSSTokenSwatch color={row.color} />
            },
          },
          // {
          //   header: 'Type',
          //   field: 'type',
          //   renderCell: row => {
          //     return <Label>{uppercase(row.type)}</Label>
          //   },
          // },
        ]}
      />
    </Table.Container>
  )
}
