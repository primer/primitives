import React from 'react'
// eslint-disable-next-line import/extensions
import baseMotionTokens from '../../../../dist/docs/base/motion/motion.json'
import {DataTable, Table} from '@primer/react/experimental'
import {InlineCode} from '../StorybookComponents/InlineCode/InlineCode'
import {getTokensByName} from '../utilities/getTokensByName'
import {CubicBezier} from '../StorybookComponents/BezierCurve/BezierCurve'
import {Card} from '../StorybookComponents/Card/Card'

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
                return <InlineCode value={row.name} cssVar={true} copyClipboard />
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

      <h2 id="easing">Base easing</h2>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'start', gap: 8}}>
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
            </Card>
          ))}
      </div>
    </>
  )
}
