import React from 'react'
// eslint-disable-next-line import/extensions
import functionalMotionTokens from '../../../../dist/docs/functional/motion/motion.json'
import {DataTable, Table} from '@primer/react/experimental'
import {InlineCode} from '../StorybookComponents/InlineCode/InlineCode'
import {getTokensByName} from '../utilities/getTokensByName'
import {CubicBezier} from '../StorybookComponents/BezierCurve/BezierCurve'
import {Card} from '../StorybookComponents/Card/Card'

export default {
  title: 'Motion/Functional',
  parameters: {
    controls: {hideNoControlsWarning: true},
    tags: ['snapshotLight'],
  },
}

export const Functional = () => {
  const data = getTokensByName(functionalMotionTokens, 'motion').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  return (
    <>
      <Table.Container>
        <h2 id="duration">Duration</h2>
        <DataTable
          aria-labelledby="duration"
          data={data.filter(item => item.type === 'duration')}
          columns={[
            {
              header: 'Token',
              field: 'name',
              rowHeader: true,
              renderCell: row => {
                return <InlineCode value={row.name} cssVar={true} copyClipboard />
              },
            },
            {
              header: 'Output value',
              field: 'value',
              rowHeader: true,
              renderCell: row => {
                const val = typeof row.value === 'object' ? `${row.value.value}${row.value.unit}` : row.value
                return <p>{val}</p>
              },
            },
            {
              header: 'Reference',
              field: 'original',
              rowHeader: true,
              renderCell: row => {
                return <p>{row.original.$value}</p>
              },
            },
            {
              header: 'Description',
              field: 'description',
              rowHeader: true,
              renderCell: row => {
                return <p>{row.description}</p>
              },
            },
          ]}
        />
      </Table.Container>

      <h2 id="easing">Easing</h2>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'start', gap: 8, flexWrap: 'wrap'}}>
        {data
          .filter(item => item.type === 'cubicBezier')
          .map(item => (
            <Card
              key={item.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
                minWidth: 200,
                maxWidth: 300,
              }}
            >
              <CubicBezier bezier={item.value} />
              <p>[{item.value.join(', ')}]</p>
              <InlineCode value={item.name} cssVar={true} copyClipboard />
              <p style={{fontSize: 12, textAlign: 'center', color: '#666'}}>{item.description}</p>
            </Card>
          ))}
      </div>

      <Table.Container>
        <h2 id="transition">Transition</h2>
        <DataTable
          aria-labelledby="transition"
          data={data.filter(item => item.type === 'transition')}
          columns={[
            {
              header: 'Token',
              field: 'name',
              rowHeader: true,
              renderCell: row => {
                return <InlineCode value={row.name} cssVar={true} copyClipboard />
              },
            },
            {
              header: 'Output value',
              field: 'value',
              rowHeader: true,
              renderCell: row => {
                if (typeof row.value !== 'object') return <p>{row.value}</p>
                const dur =
                  typeof row.value.duration === 'object'
                    ? `${row.value.duration.value}${row.value.duration.unit}`
                    : row.value.duration
                const tf = Array.isArray(row.value.timingFunction)
                  ? `cubic-bezier(${row.value.timingFunction.join(', ')})`
                  : row.value.timingFunction
                const delay =
                  row.value.delay != null
                    ? ` ${typeof row.value.delay === 'object' ? `${row.value.delay.value}${row.value.delay.unit}` : row.value.delay}`
                    : ''
                return <p>{`${dur} ${tf}${delay}`}</p>
              },
            },
            {
              header: 'Description',
              field: 'description',
              rowHeader: true,
              renderCell: row => {
                return <p>{row.description}</p>
              },
            },
          ]}
        />
      </Table.Container>
    </>
  )
}
