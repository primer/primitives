import React from 'react'
// eslint-disable-next-line import/extensions
import baseMotionTokens from '../../../../dist/docs/base/motion/motion.json'
import {DataTable, Table} from '@primer/react/drafts'
import {InlineCode} from '../StorybookComponents/InlineCode/InlineCode'
import {getTokensByName} from '../utilities/getTokensByName'

export default {
  title: 'Motion/Base',
  parameters: {
    controls: {hideNoControlsWarning: true},
    tags: ['snapshotLight'],
  },
}

export const Base = () => {
  const data = getTokensByName(baseMotionTokens, 'base').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  return (
    <>
      <Table.Container>
        <h2 id="weight">Base duration</h2>
        <DataTable
          aria-labelledby="weight"
          data={data
            .filter(item => item.type === 'duration')
            .sort((a, b) => a.name.replace('base-duration-', '') - b.name.replace('base-duration-', ''))}
          columns={[
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
                return <p>{row.original.$value}</p>
              },
            },
          ]}
        />
      </Table.Container>
      <Table.Container>
        <h2 id="easing">Base easing</h2>
        <DataTable
          aria-labelledby="easing"
          data={data.filter(item => item.type === 'cubicBezier')}
          columns={[
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
                return <p>{JSON.stringify(row.value)}</p>
              },
            },
            {
              header: 'Source value',
              field: 'original',
              rowHeader: true,
              renderCell: row => {
                return <p>{JSON.stringify(row.original.$value)}</p>
              },
            },
          ]}
        />
      </Table.Container>
    </>
  )
}
