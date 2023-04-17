import React from 'react'
// eslint-disable-next-line import/extensions
import sizeTokens from '../../../../tokens-next-private/docs/functional/size/size.json'
import {ControlSizeDemo} from '../StorybookComponents/ControlSizeDemo/ControlSizeDemo'
import {DataTable, Table} from '@primer/react/drafts'
import {InlineCode} from '../StorybookComponents/InlineCode/InlineCode'
import {getTokensByName} from '../utilities/getTokensByName'

export default {
  title: 'Size/Control',
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
}

export const ControlXsmall = () => {
  // const sizeArray = Object.entries(sizeTokens.control.xsmall)
  const data = getTokensByName(sizeTokens, 'control-xsmall').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })
  console.log(data)

  // // get values for each item
  // const getValueString = (sizeTokens, searchString) => {
  //   const sizeArray = Object.entries(sizeTokens.control.xsmall)
  //   const item = sizeArray.find(([key, value]) => key.includes(searchString))

  //   if (item) {
  //     const [, itemValue] = item
  //     return itemValue.name
  //   }

  //   return null
  // }

  // get string for each item
  const gapValueString = getTokensByName(sizeTokens, 'control-xsmall-gap')[0].value
  const paddingLeftValueString = getTokensByName(sizeTokens, 'control-xsmall-paddingInline')[0].value
  const paddingRightValueString = getTokensByName(sizeTokens, 'control-xsmall-paddingInline')[0].value
  const paddingTopValueString = getTokensByName(sizeTokens, 'control-xsmall-paddingBlock')[0].value
  const paddingBottomValueString = getTokensByName(sizeTokens, 'control-xsmall-paddingBlock')[0].value
  const lineBlockHeightPropValueString = getTokensByName(sizeTokens, 'control-xsmall-lineBoxHeight')[0].value
  const blockSizeValueString = getTokensByName(sizeTokens, 'control-xsmall-size')[0].value
  // const condensedValueString = getTokensByName(sizeTokens, 'control-xsmall-condensed')[0].value
  // const normalValueString = getTokensByName(sizeTokens, 'control-xsmall-normal')[0].value
  // const spaciousValueString = getTokensByName(sizeTokens, 'control-xsmall-spacious')[0].value

  // get boolean if item exists
  // const gap = getValueString(sizeTokens, 'gap') ? true : false
  // console.log(data)

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
                  // modifier={
                  //   condensedValueString
                  //     ? '-condensed'
                  //     : normalValueString
                  //     ? '-normal'
                  //     : spaciousValueString
                  //     ? '-spacious'
                  //     : '-normal'
                  // }
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
