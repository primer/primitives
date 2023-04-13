import React from 'react'
// eslint-disable-next-line import/extensions
import sizeTokens from '../../../../tokens-next-private/docs/functional/size/size.json'
import {ControlSizeDemo} from '../StorybookComponents/ControlSizeDemo/ControlSizeDemo'
import {DataTable, Table} from '@primer/react/drafts'
import {InlineCode} from '../StorybookComponents/InlineCode/InlineCode'

export default {
  title: 'Size/Control',
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
}

export const ControlXsmall = () => {
  const sizeArray = Object.entries(sizeTokens.control.xsmall)
  const data = sizeArray.map(([key, value]) => {
    return {
      id: key,
      ...value,
    }
  })

  // get values for each item
  const getValueString = (sizeTokens, searchString) => {
    const sizeArray = Object.entries(sizeTokens.control.xsmall)
    const item = sizeArray.find(([key, value]) => key.includes(searchString))

    if (item) {
      const [, itemValue] = item
      return itemValue.name
    }

    return null
  }

  // get string for each item
  const gapValueString = getValueString(sizeTokens, 'gap')
  const paddingLeftValueString = getValueString(sizeTokens, 'paddingInline')
  const paddingRightValueString = getValueString(sizeTokens, 'paddingInline')
  const paddingTopValueString = getValueString(sizeTokens, 'paddingBlock')
  const paddingBottomValueString = getValueString(sizeTokens, 'paddingBlock')
  const lineBlockHeightPropValueString = getValueString(sizeTokens, 'lineBoxHeight')
  const blockSizeValueString = getValueString(sizeTokens, 'size')
  const condensedValueString = getValueString(sizeTokens, 'condensed')
  const normalValueString = getValueString(sizeTokens, 'normal')
  const spaciousValueString = getValueString(sizeTokens, 'spacious')

  // get boolean if item exists
  const gap = getValueString(sizeTokens, 'gap') ? true : false
  console.log(data)

  return (
    <Table.Container>
      <Table.Title as="h1" id="sizing">
        Control: xsmall
      </Table.Title>
      <DataTable
        aria-labelledby="repositories"
        aria-describedby="repositories-subtitle"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return (
                <ControlSizeDemo
                  gap={gapValueString}
                  paddingLeft={paddingLeftValueString}
                  paddingRight={paddingRightValueString}
                  paddingTop={paddingTopValueString}
                  paddingBottom={paddingBottomValueString}
                  blockSize={blockSizeValueString}
                  lineBox={lineBlockHeightPropValueString}
                  modifier={
                    condensedValueString
                      ? '-condensed'
                      : normalValueString
                      ? '-normal'
                      : spaciousValueString
                      ? '-spacious'
                      : '-normal'
                  }
                  highlightPaddingBottom={paddingBottomValueString}
                  highlightPaddingTop={paddingTopValueString}
                  highlightPaddingRight={paddingRightValueString}
                  highlightPaddingLeft={paddingLeftValueString}
                  highlightGap={gapValueString}
                  highlightHeight={blockSizeValueString}
                  highlightLineBoxHeight={lineBlockHeightPropValueString}
                />
              )
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
          // {
          //   header: 'Source value',
          //   field: 'original.value',
          //   rowHeader: true,
          //   renderCell: row => {
          //     return <p>{row.original.value}</p>
          //   },
          // },
        ]}
      />
    </Table.Container>
  )
}
