import React from 'react'
// eslint-disable-next-line import/extensions
import sizeTokens from '../../../../tokens-next-private/docs/functional/size/size.json'
import sizeTokensFine from '../../../../tokens-next-private/docs/functional/size/size-fine.json'
import sizeTokensCoarse from '../../../../tokens-next-private/docs/functional/size/size-coarse.json'
import {ControlSizeDemo} from '../StorybookComponents/ControlSizeDemo/ControlSizeDemo'
import {ControlStackDemo} from '../StorybookComponents/ControlStackDemo/ControlStackDemo'
import {DataTable, Table} from '@primer/react/drafts'
import {InlineCode} from '../StorybookComponents/InlineCode/InlineCode'
import {getTokensByName} from '../utilities/getTokensByName'

export default {
  title: 'Size/Functional/Control',
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
}

export const XSmall = () => {
  const data = getTokensByName(sizeTokens, 'control-xsmall').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  // get string for each item
  const gapValueString = getTokensByName(sizeTokens, 'control-xsmall-gap')[0].name
  const paddingBlockValueString = getTokensByName(sizeTokens, 'control-xsmall-paddingBlock')[0].name
  const lineBlockHeightPropValueString = getTokensByName(sizeTokens, 'control-xsmall-lineBoxHeight')[0].name
  const blockSizeValueString = getTokensByName(sizeTokens, 'control-xsmall-size')[0].name
  const condensedValueString = getTokensByName(sizeTokens, 'control-xsmall-paddingInline-condensed')[0].name
  const normalValueString = getTokensByName(sizeTokens, 'control-xsmall-paddingInline-normal')[0].name
  const spaciousValueString = getTokensByName(sizeTokens, 'control-xsmall-paddingInline-spacious')[0].name

  return (
    <Table.Container>
      <Table.Title as="h1" id="sizing">
        Control: xsmall
      </Table.Title>
      <DataTable
        aria-labelledby="sizing"
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
                  paddingInline={
                    row.name.includes('spacious')
                      ? spaciousValueString
                      : row.name.includes('condensed')
                      ? condensedValueString
                      : normalValueString
                  }
                  paddingBlock={paddingBlockValueString}
                  blockSize={blockSizeValueString}
                  lineBox={lineBlockHeightPropValueString}
                  highlightPaddingBlock={row.name.startsWith('control-xsmall-paddingBlock') ? true : false}
                  highlightPaddingInline={row.name.startsWith('control-xsmall-paddingInline') ? true : false}
                  highlightGap={row.name.startsWith('control-xsmall-gap') ? true : false}
                  highlightHeight={row.name.startsWith('control-xsmall-size') ? true : false}
                  highlightLineBoxHeight={row.name.startsWith('control-xsmall-lineBoxHeight') ? true : false}
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

export const Small = () => {
  const data = getTokensByName(sizeTokens, 'control-small').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  // get string for each item
  const gapValueString = getTokensByName(sizeTokens, 'control-small-gap')[0].name
  const paddingBlockValueString = getTokensByName(sizeTokens, 'control-small-paddingBlock')[0].name
  const lineBlockHeightPropValueString = getTokensByName(sizeTokens, 'control-small-lineBoxHeight')[0].name
  const blockSizeValueString = getTokensByName(sizeTokens, 'control-small-size')[0].name
  const condensedValueString = getTokensByName(sizeTokens, 'control-small-paddingInline-condensed')[0].name
  const normalValueString = getTokensByName(sizeTokens, 'control-small-paddingInline-normal')[0].name

  return (
    <Table.Container>
      <Table.Title as="h1" id="sizing">
        Control: small
      </Table.Title>
      <DataTable
        aria-labelledby="sizing"
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
                  paddingInline={row.name.includes('condensed') ? condensedValueString : normalValueString}
                  paddingBlock={paddingBlockValueString}
                  blockSize={blockSizeValueString}
                  lineBox={lineBlockHeightPropValueString}
                  highlightPaddingBlock={row.name.startsWith('control-small-paddingBlock') ? true : false}
                  highlightPaddingInline={row.name.startsWith('control-small-paddingInline') ? true : false}
                  highlightGap={row.name.startsWith('control-small-gap') ? true : false}
                  highlightHeight={row.name.startsWith('control-small-size') ? true : false}
                  highlightLineBoxHeight={row.name.startsWith('control-small-lineBoxHeight') ? true : false}
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

export const Medium = () => {
  const data = getTokensByName(sizeTokens, 'control-medium').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  // get string for each item
  const gapValueString = getTokensByName(sizeTokens, 'control-medium-gap')[0].name
  const paddingBlockValueString = getTokensByName(sizeTokens, 'control-medium-paddingBlock')[0].name
  const lineBlockHeightPropValueString = getTokensByName(sizeTokens, 'control-medium-lineBoxHeight')[0].name
  const blockSizeValueString = getTokensByName(sizeTokens, 'control-medium-size')[0].name
  const condensedValueString = getTokensByName(sizeTokens, 'control-medium-paddingInline-condensed')[0].name
  const normalValueString = getTokensByName(sizeTokens, 'control-medium-paddingInline-normal')[0].name
  const spaciousValueString = getTokensByName(sizeTokens, 'control-xsmall-paddingInline-spacious')[0].name

  return (
    <Table.Container>
      <Table.Title as="h1" id="sizing">
        Control: medium
      </Table.Title>
      <DataTable
        aria-labelledby="sizing"
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
                  paddingInline={
                    row.name.includes('spacious')
                      ? spaciousValueString
                      : row.name.includes('condensed')
                      ? condensedValueString
                      : normalValueString
                  }
                  paddingBlock={paddingBlockValueString}
                  blockSize={blockSizeValueString}
                  lineBox={lineBlockHeightPropValueString}
                  highlightPaddingBlock={row.name.startsWith('control-medium-paddingBlock') ? true : false}
                  highlightPaddingInline={row.name.startsWith('control-medium-paddingInline') ? true : false}
                  highlightGap={row.name.startsWith('control-medium-gap') ? true : false}
                  highlightHeight={row.name.startsWith('control-medium-size') ? true : false}
                  highlightLineBoxHeight={row.name.startsWith('control-medium-lineBoxHeight') ? true : false}
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

export const Large = () => {
  const data = getTokensByName(sizeTokens, 'control-large').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  // get string for each item
  const gapValueString = getTokensByName(sizeTokens, 'control-large-gap')[0].name
  const paddingBlockValueString = getTokensByName(sizeTokens, 'control-large-paddingBlock')[0].name
  const lineBlockHeightPropValueString = getTokensByName(sizeTokens, 'control-large-lineBoxHeight')[0].name
  const blockSizeValueString = getTokensByName(sizeTokens, 'control-large-size')[0].name
  const spaciousValueString = getTokensByName(sizeTokens, 'control-large-paddingInline-spacious')[0].name
  const normalValueString = getTokensByName(sizeTokens, 'control-large-paddingInline-normal')[0].name

  return (
    <Table.Container>
      <Table.Title as="h1" id="sizing">
        Control: large
      </Table.Title>
      <DataTable
        aria-labelledby="sizing"
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
                  paddingInline={row.name.includes('spacious') ? spaciousValueString : normalValueString}
                  paddingBlock={paddingBlockValueString}
                  blockSize={blockSizeValueString}
                  lineBox={lineBlockHeightPropValueString}
                  highlightPaddingBlock={row.name.startsWith('control-large-paddingBlock') ? true : false}
                  highlightPaddingInline={row.name.startsWith('control-large-paddingInline') ? true : false}
                  highlightGap={row.name.startsWith('control-large-gap') ? true : false}
                  highlightHeight={row.name.startsWith('control-large-size') ? true : false}
                  highlightLineBoxHeight={row.name.startsWith('control-large-lineBoxHeight') ? true : false}
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

export const XLarge = () => {
  const data = getTokensByName(sizeTokens, 'control-xlarge').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  // get string for each item
  const gapValueString = getTokensByName(sizeTokens, 'control-xlarge-gap')[0].name
  const paddingBlockValueString = getTokensByName(sizeTokens, 'control-xlarge-paddingBlock')[0].name
  const lineBlockHeightPropValueString = getTokensByName(sizeTokens, 'control-xlarge-lineBoxHeight')[0].name
  const blockSizeValueString = getTokensByName(sizeTokens, 'control-xlarge-size')[0].name
  const spaciousValueString = getTokensByName(sizeTokens, 'control-xlarge-paddingInline-spacious')[0].name
  const normalValueString = getTokensByName(sizeTokens, 'control-xlarge-paddingInline-normal')[0].name

  return (
    <Table.Container>
      <Table.Title as="h1" id="sizing">
        Control: xlarge
      </Table.Title>
      <DataTable
        aria-labelledby="sizing"
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
                  paddingInline={row.name.includes('spacious') ? spaciousValueString : normalValueString}
                  paddingBlock={paddingBlockValueString}
                  blockSize={blockSizeValueString}
                  lineBox={lineBlockHeightPropValueString}
                  highlightPaddingBlock={row.name.startsWith('control-xlarge-paddingBlock') ? true : false}
                  highlightPaddingInline={row.name.startsWith('control-xlarge-paddingInline') ? true : false}
                  highlightGap={row.name.startsWith('control-xlarge-gap') ? true : false}
                  highlightHeight={row.name.startsWith('control-xlarge-size') ? true : false}
                  highlightLineBoxHeight={row.name.startsWith('control-xlarge-lineBoxHeight') ? true : false}
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

export const ControlStackRegular = () => {
  const data = getTokensByName(sizeTokens, 'controlStack').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  return (
    <Table.Container>
      <Table.Title as="h1" id="sizing">
        Control stack
      </Table.Title>
      <DataTable
        aria-labelledby="sizing"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return (
                <ControlStackDemo
                  gap={row.name}
                  size={
                    row.name.includes('small')
                      ? 'control-small-size'
                      : row.name.includes('medium')
                      ? 'control-medium-size'
                      : 'control-large-size'
                  }
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

export const ControlStackResponsive = () => {
  const data = getTokensByName(sizeTokensFine, 'controlStack').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  const coarseSmallValue = getTokensByName(sizeTokensCoarse, 'controlStack-small-gap-auto')[0].value
  const coarseMediumValue = getTokensByName(sizeTokensCoarse, 'controlStack-medium-gap-auto')[0].value

  return (
    <Table.Container>
      <Table.Title as="h1" id="sizing">
        Responsive control stack
      </Table.Title>
      <DataTable
        aria-labelledby="sizing"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return (
                <ControlStackDemo
                  gap={row.name}
                  size={row.name.includes('-small-') ? 'control-small-size' : 'control-medium-size'}
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
            header: 'Pointer: coarse value',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.name.includes('small') ? coarseSmallValue : coarseMediumValue}</p>
            },
          },
          {
            header: 'Pointer: fine value',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}
