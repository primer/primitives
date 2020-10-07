import {BaseStyles, Box, Text} from '@primer/components'
import flatMap from 'lodash.flatmap'
import groupBy from 'lodash.groupby'
import kebabCase from 'lodash.kebabcase'
import merge from 'lodash.merge'
import React from 'react'
import {Helmet} from 'react-helmet'
import {sentenceCase} from 'sentence-case'
import primitives from '../../../dist/js'

const DataCell = props => <Box as="td" p={3} {...props} />

const HeaderCell = props => (
  <DataCell as="th" bg="gray.1" sx={{textAlign: 'left', position: 'sticky', top: 0}} {...props} />
)

const colors = getColorArray(primitives.colors)

export default function Home() {
  return (
    <BaseStyles>
      <Helmet>
        <title>Primer Primitives</title>
      </Helmet>
      <div>
        <table
          style={{
            width: '100%',
            margin: '0 auto',
            position: 'relative'
          }}
        >
          <thead>
            <tr>
              <HeaderCell>Key</HeaderCell>
              <HeaderCell>Variable</HeaderCell>
              {Object.keys(colors[0].modes)
                .reverse()
                .map(mode => (
                  <HeaderCell key={mode}>{sentenceCase(mode)} mode</HeaderCell>
                ))}
            </tr>
          </thead>
          <tbody>
            {colors.map(color => (
              <Box as="tr" key={color.key} sx={{borderBottom: '1px solid', borderColor: 'border.gray'}}>
                <DataCell>
                  <Text fontFamily="mono">{color.key}</Text>
                </DataCell>
                <DataCell>
                  <Text fontFamily="mono">{color.variable}</Text>
                </DataCell>
                {Object.entries(color.modes)
                  .reverse()
                  .map(([mode, value]) => (
                    <DataCell key={`${color.key} ${mode}`}>
                      <Box
                        as="span"
                        display="inline-block"
                        width={16}
                        height={16}
                        bg={value}
                        style={{
                          borderRadius: 999,
                          verticalAlign: 'text-top'
                        }}
                      />
                      <Text fontFamily="mono" ml={2}>
                        {value}
                      </Text>
                    </DataCell>
                  ))}
              </Box>
            ))}
          </tbody>
        </table>
      </div>
    </BaseStyles>
  )
}

type ObjectLiteral = {[key: string]: ObjectLiteral} | string | string[]

// { a: { b: 'foo', c: 'bar' } } -> { 'a.b': 'foo', 'a.c': 'bar' }
function flattenObject(
  obj: ObjectLiteral,
  combineKeys: (a: string, b: string) => string = (a, b) => `${a}.${b}`
): {[key: string]: string} {
  return Object.assign(
    {},
    ...Object.entries(obj).map(([key, value]) => {
      if (typeof value === 'object') {
        return Object.entries(flattenObject(value, combineKeys)).reduce(
          (acc, entry) => ({
            ...acc,
            [combineKeys(key, entry[0])]: entry[1]
          }),
          {}
        )
      } else {
        return {[key]: value}
      }
    })
  )
}

interface Color {
  key: string
  variable: string
  modes: {[mode: string]: string}
}

function getColorArray(colors: {[mode: string]: ObjectLiteral}): Color[] {
  return Object.values(
    groupBy(
      flatMap(Object.entries(colors), ([mode, modeColors]) =>
        Object.entries(flattenObject(modeColors)).map(([key, value]) => ({key, modes: {[mode]: value}}))
      ),
      'key'
    )
  )
    .map(color => merge.apply(null, color))
    .map(color => ({
      ...color,
      variable: `var(--color-${kebabCase(color.key)})`
    }))
}
