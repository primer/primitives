import React from 'react'
// eslint-disable-next-line import/extensions
import sizeTokens from '../../../../dist/docs/functional/size/size.json'
import sizeTokensFine from '../../../../dist/docs/functional/size/size-fine.json'
import sizeTokensCoarse from '../../../../dist/docs/functional/size/size-coarse.json'
import {ControlSizeDemo} from '../StorybookComponents/ControlSizeDemo/ControlSizeDemo'
import {ControlStackDemo} from '../StorybookComponents/ControlStackDemo/ControlStackDemo'
import {TouchTargetDemo} from '../StorybookComponents/TouchTargetDemo/TouchTargetDemo'
import {DataTable, Table} from '@primer/react/experimental'
import {getTokensByName} from '../utilities/getTokensByName'
import {formatTokenValue} from '../utilities/formatTokenValue'
import {tokenColumn, outputValueColumn, sourceValueColumn} from '../utilities/commonTableColumns'

export default {
  title: 'Size/Functional/Control',
  parameters: {
    controls: {hideNoControlsWarning: true},
    tags: ['snapshotLight'],
  },
}

const createControlSizeStory = (size: string) => {
  const prefix = `control-${size}`
  const Story = () => {
    const data = getTokensByName(sizeTokens, prefix).map(token => ({
      id: token.name,
      ...token,
    }))

    const gap = getTokensByName(sizeTokens, `${prefix}-gap`)[0]?.name ?? ''
    const paddingBlock = getTokensByName(sizeTokens, `${prefix}-paddingBlock`)[0]?.name ?? ''
    const lineBoxHeight = getTokensByName(sizeTokens, `${prefix}-lineBoxHeight`)[0]?.name ?? ''
    const blockSize = getTokensByName(sizeTokens, `${prefix}-size`)[0]?.name ?? ''
    const condensed = getTokensByName(sizeTokens, `${prefix}-paddingInline-condensed`)[0]?.name ?? ''
    const normal = getTokensByName(sizeTokens, `${prefix}-paddingInline-normal`)[0]?.name ?? ''
    const spacious = getTokensByName(sizeTokens, `${prefix}-paddingInline-spacious`)[0]?.name ?? ''

    return (
      <Table.Container>
        <Table.Title as="h1" id="sizing">
          Control: {size}
        </Table.Title>
        <DataTable
          aria-labelledby="sizing"
          data={data}
          columns={[
            {
              header: 'Sample',
              field: 'name',
              rowHeader: true,
              renderCell: row => (
                <ControlSizeDemo
                  gap={gap}
                  paddingInline={
                    row.name.includes('spacious') ? spacious : row.name.includes('condensed') ? condensed : normal
                  }
                  paddingBlock={paddingBlock}
                  blockSize={blockSize}
                  lineBox={lineBoxHeight}
                  highlightPaddingBlock={row.name.startsWith(`${prefix}-paddingBlock`)}
                  highlightPaddingInline={row.name.startsWith(`${prefix}-paddingInline`)}
                  highlightGap={row.name.startsWith(`${prefix}-gap`)}
                  highlightHeight={row.name.startsWith(`${prefix}-size`)}
                  highlightLineBoxHeight={row.name.startsWith(`${prefix}-lineBoxHeight`)}
                />
              ),
            },
            tokenColumn({cssVar: true}),
            outputValueColumn(),
            sourceValueColumn(),
          ]}
        />
      </Table.Container>
    )
  }
  return Story
}

export const XSmall = createControlSizeStory('xsmall')
export const Small = createControlSizeStory('small')
export const Medium = createControlSizeStory('medium')
export const Large = createControlSizeStory('large')
export const XLarge = createControlSizeStory('xlarge')

export const ControlStackRegular = () => {
  const data = getTokensByName(sizeTokens, 'controlStack').map(token => ({
    id: token.name,
    ...token,
  }))

  return (
    <Table.Container>
      <h1 className="sr-only" id="sizing">
        Control stack
      </h1>
      <DataTable
        aria-labelledby="sizing"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => (
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
            ),
          },
          tokenColumn({cssVar: true}),
          outputValueColumn(),
          sourceValueColumn(),
        ]}
      />
    </Table.Container>
  )
}

export const ControlStackResponsive = () => {
  const data = getTokensByName(sizeTokensFine, 'controlStack').map(token => ({
    id: token.name,
    ...token,
  }))

  const coarseSmallValue = getTokensByName(sizeTokensCoarse, 'controlStack-small-gap-auto')[0]?.value ?? ''
  const coarseMediumValue = getTokensByName(sizeTokensCoarse, 'controlStack-medium-gap-auto')[0]?.value ?? ''

  return (
    <Table.Container>
      <h1 className="sr-only" id="sizing">
        Responsive control stack
      </h1>
      <DataTable
        aria-labelledby="sizing"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => (
              <ControlStackDemo
                gap={row.name}
                size={row.name.includes('-small-') ? 'control-small-size' : 'control-medium-size'}
              />
            ),
          },
          tokenColumn({cssVar: true}),
          {
            header: 'Pointer: coarse value',
            field: 'value' as const,
            rowHeader: true,
            renderCell: (row: {name: string}) => (
              <p>{row.name.includes('small') ? coarseSmallValue : coarseMediumValue}</p>
            ),
          },
          {
            header: 'Pointer: fine value',
            field: 'value' as const,
            rowHeader: true,
            renderCell: (row: {value: unknown}) => <p>{formatTokenValue(row.value)}</p>,
          },
        ]}
      />
    </Table.Container>
  )
}

export const ControlTouchTarget = () => {
  const data = getTokensByName(sizeTokens, 'control-minTarget').map(token => ({
    id: token.name,
    ...token,
  }))

  return (
    <Table.Container>
      <h1 className="sr-only" id="sizing">
        Touch target
      </h1>
      <DataTable
        aria-labelledby="sizing"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => <TouchTargetDemo size={row.name} />,
          },
          tokenColumn({cssVar: true}),
          outputValueColumn(),
          sourceValueColumn(),
        ]}
      />
    </Table.Container>
  )
}

export const ControlTouchTargetResponsive = () => {
  const data = getTokensByName(sizeTokensFine, 'control-minTarget').map(token => ({
    id: token.name,
    ...token,
  }))

  const coarseValue = getTokensByName(sizeTokensCoarse, 'control-minTarget-auto')[0]?.value ?? ''

  return (
    <Table.Container>
      <h1 className="sr-only" id="sizing">
        Responsive touch target
      </h1>
      <DataTable
        aria-labelledby="sizing"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => <TouchTargetDemo size={row.name} />,
          },
          tokenColumn({cssVar: true}),
          {
            header: 'Pointer: coarse value',
            field: 'value' as const,
            rowHeader: true,
            renderCell: () => <p>{coarseValue}</p>,
          },
          {
            header: 'Pointer: fine value',
            field: 'value' as const,
            rowHeader: true,
            renderCell: (row: {value: unknown}) => <p>{formatTokenValue(row.value)}</p>,
          },
        ]}
      />
    </Table.Container>
  )
}
