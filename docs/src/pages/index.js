// TODO: migrate to TypeScript
import chroma from 'chroma-js'
import flatten from 'flat'
import flatMap from 'lodash.flatmap'
import groupBy from 'lodash.groupby'
import kebabCase from 'lodash.kebabcase'
import React from 'react'
import {Helmet} from 'react-helmet'
import {useFilters, useTable} from 'react-table'
import {sentenceCase} from 'sentence-case'
import primitives from '../../../dist/js'
import '../styles.css'

const TokenType = {
  Scale: 'Scale',
  Global: 'Global',
  Component: 'Component'
}

class Token {
  constructor(key, values, type) {
    this.key = key
    this.values = values
    this.type = type
  }

  get variable() {
    return `--color-${kebabCase(this.key)}`
  }
}

function getType(key) {
  const prefix = key.split('.')[0]

  if (['scale', 'auto'].includes(prefix)) {
    return TokenType.Scale
  }

  if (['auto', 'text', 'border', 'icon', 'shadow', 'bg', 'state', 'fade'].includes(prefix)) {
    return TokenType.Global
  }

  return TokenType.Component
}

// This is a custom filter UI for selecting
// a unique option from a list
function SelectColumnFilter({column: {filterValue, setFilter, preFilteredRows, id}}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined)
      }}
      style={{
        width: '100%',
        padding: '4px 8px',
        margin: 0,
        boxSizing: 'border-box',
        fontFamily: 'inherit',
        fontSize: '14px',
        border: '1px solid lightgray',
        borderRadius: 6,
        backgroundColor: filterValue ? 'papayawhip' : null
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default function IndexPage() {
  const data = React.useMemo(() => {
    return Object.entries(
      groupBy(
        flatMap(
          Object.entries(primitives.colors).map(([schemeName, scheme]) =>
            Object.entries(flatten(scheme)).map(([key, value]) => ({
              key,
              value,
              scheme: schemeName
            }))
          )
        ),
        'key'
      )
    ).map(entry => {
      const values = entry[1].reduce((acc, value) => {
        acc[value.scheme] = value.value
        return acc
      }, {})

      return new Token(entry[0], values, getType(entry[0]))
    })
  }, [])

  const columns = React.useMemo(
    () => [
      {
        Header: 'Key',
        accessor: 'key',
        Cell: props => {
          const value = props.cell.value
          const keys = value.split('.')
          return (
            <div style={{padding: 8, whiteSpace: 'nowrap'}}>
              {keys
                .map((key, index) => (
                  <InlineButton key={key} onClick={() => props.column.setFilter(keys.slice(0, index + 1).join('.'))}>
                    {key}
                  </InlineButton>
                ))
                .reduce((acc, value, index) => acc.concat(index > 0 ? <span>.</span> : undefined, value), [])}
            </div>
          )
        }
      },
      {
        Header: 'Type',
        accessor: 'type',
        Filter: SelectColumnFilter,
        Cell: props => {
          const value = props.cell.value
          return (
            <div style={{padding: 8}}>
              <InlineButton onClick={() => props.column.setFilter(value)}>{sentenceCase(value)}</InlineButton>
            </div>
          )
        }
      },
      ...Object.keys(primitives.colors)
        .reverse()
        .map(scheme => ({
          Header: sentenceCase(scheme),
          accessor: `values.${scheme}`,
          Cell: props => {
            const value = props.cell.value
            return (
              <div
                style={{
                  padding: 8,
                  color: primitives.colors[scheme].text.primary,
                  backgroundColor: primitives.colors[scheme].bg.canvas
                }}
              >
                <InlineButton
                  style={{display: 'inline-flex', alignItems: 'center'}}
                  onClick={() => props.column.setFilter(value)}
                >
                  {chroma.valid(value) ? (
                    <span
                      style={{
                        display: 'inline-block',
                        width: 14,
                        height: 14,
                        marginRight: 4,
                        backgroundColor: value,
                        borderRadius: 3
                      }}
                    />
                  ) : null}

                  <span style={{whiteSpace: 'nowrap'}}>{value}</span>
                </InlineButton>
              </div>
            )
          }
        }))
    ],
    []
  )

  return (
    <>
      <Helmet>
        <title>Primer Primitives</title>
      </Helmet>
      <Table columns={columns} data={data} />
    </>
  )
}

function InlineButton(props) {
  return (
    <button
      {...props}
      style={{
        display: 'inline',
        padding: '2px 4px',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        color: 'inherit',
        backgroundColor: 'rgba(120, 120, 120, 0.1)',
        border: 0,
        appearance: 'none',
        borderRadius: 6,
        cursor: 'pointer',
        ...props.style
      }}
    />
  )
}

const IndeterminateCheckbox = React.forwardRef(({indeterminate, ...rest}, ref) => {
  const defaultRef = React.useRef()
  const resolvedRef = ref || defaultRef

  React.useEffect(() => {
    if ('current' in resolvedRef) {
      resolvedRef.current.indeterminate = indeterminate
    }
  }, [resolvedRef, indeterminate])

  return <input type="checkbox" ref={resolvedRef} {...rest} />
})

// Define a default UI for filtering
function DefaultColumnFilter({column: {filterValue, preFilteredRows, setFilter}}) {
  const count = preFilteredRows.length

  return (
    <input
      type="search"
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Filter ${count} rows...`}
      style={{
        width: '100%',
        padding: '4px 8px',
        margin: 0,
        boxSizing: 'border-box',
        fontFamily: 'inherit',
        fontSize: '14px',
        border: '1px solid lightgray',
        borderRadius: 6,
        height: 28,
        backgroundColor: filterValue ? 'papayawhip' : null
      }}
    />
  )
}

function Table({columns, data}) {
  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter
    }),
    []
  )

  const tableInstance = useTable({columns, data, defaultColumn}, useFilters)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    getToggleHideAllColumnsProps
  } = tableInstance

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh'
      }}
    >
      <div
        style={{
          display: 'flex',
          padding: 8,
          backgroundColor: 'lightgray',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            display: 'flex'
          }}
        >
          <label style={{display: 'flex', alignItems: 'center', marginRight: 16}}>
            <IndeterminateCheckbox {...getToggleHideAllColumnsProps({style: {marginRight: 8}})} />
            All
          </label>
          {allColumns.map(column => (
            <label key={column.id} style={{display: 'flex', alignItems: 'center', marginRight: 16}}>
              <input type="checkbox" {...column.getToggleHiddenProps({style: {marginRight: 8}})} />
              {column.Header}
            </label>
          ))}
        </div>
        <span>Showing {rows.length} rows</span>
      </div>
      <div style={{width: '100vw', overflow: 'auto'}}>
        <table
          {...getTableProps({
            style: {borderCollapse: 'collapse', minWidth: '100%'}
          })}
        >
          <thead>
            {
              // Loop over the header rows
              headerGroups.map(headerGroup => (
                // Apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map(column => (
                      // Apply the header cell props
                      <th
                        {...column.getHeaderProps({
                          style: {
                            position: 'sticky',
                            top: 0,
                            padding: 8,
                            textAlign: 'left',
                            backgroundColor: 'white',
                            boxShadow: '0 1px 0 rgba(0,0,0,0.2)'
                          }
                        })}
                      >
                        <div>
                          {
                            // Render the header
                            column.render('Header')
                          }
                        </div>
                        {column.canFilter ? <div style={{marginTop: 4}}>{column.render('Filter')}</div> : null}
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {
              // Loop over the table rows
              rows.map(row => {
                // Prepare the row for display
                prepareRow(row)
                return (
                  // Apply the row props
                  <tr {...row.getRowProps()}>
                    {
                      // Loop over the rows cells
                      row.cells.map(cell => {
                        // Apply the cell props
                        return (
                          <td {...cell.getCellProps({style: {padding: 0}})}>
                            {
                              // Render the cell contents
                              cell.render('Cell')
                            }
                          </td>
                        )
                      })
                    }
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
