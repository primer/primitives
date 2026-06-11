import React from 'react'
import {ColorTokenSwatch} from '../../StorybookComponents/ColorTokenSwatch/ColorTokenSwatch'
import {DataTable, Table} from '@primer/react/experimental'
import {InlineCode} from '../../StorybookComponents/InlineCode/InlineCode'
import {getTokensByName} from '../../utilities/getTokensByName'
import {withColorTokens, type ColorTokens} from '../../utilities/withColorTokens'
import {formatTokenValue} from '../../utilities/formatTokenValue'

export default {
  title: 'Color/DataVis',
  decorators: [withColorTokens],
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {
      showPanel: false,
    },
  },
}

// ─── Chart colors ────────────────────────────────────────────────────────────
// Uses data-vis tokens: data-{color}-color-emphasis (lines/dots) and
// data-{color}-color-muted (area fills)

const CHART_COLORS = ['blue', 'green', 'orange', 'red', 'purple', 'teal', 'yellow', 'pink'] as const

// Deterministic sample data — 12 monthly data points per series
const SERIES_DATA: Record<string, number[]> = {
  blue: [30, 45, 35, 50, 60, 55, 70, 65, 75, 80, 70, 85],
  green: [20, 25, 30, 28, 35, 42, 38, 45, 50, 48, 55, 60],
  orange: [15, 20, 18, 25, 22, 30, 35, 32, 40, 38, 42, 45],
  red: [40, 38, 42, 40, 45, 40, 38, 42, 40, 45, 42, 48],
  purple: [10, 15, 12, 18, 15, 20, 18, 22, 20, 25, 22, 28],
  teal: [50, 52, 55, 58, 60, 63, 65, 62, 68, 72, 75, 78],
  yellow: [5, 8, 10, 12, 10, 15, 12, 18, 15, 20, 18, 22],
  pink: [25, 28, 30, 32, 35, 38, 40, 42, 44, 46, 48, 50],
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// ─── SVG chart helpers ────────────────────────────────────────────────────────

const CHART_W = 880
const CHART_H = 240
const PAD_LEFT = 36
const PAD_RIGHT = 16
const PAD_TOP = 12
const PAD_BOTTOM = 32

const Y_MIN = 0
const Y_MAX = 100
const COLS = MONTHS.length - 1 // 11 intervals

function xPos(i: number): number {
  return PAD_LEFT + (i / COLS) * (CHART_W - PAD_LEFT - PAD_RIGHT)
}

function yPos(v: number): number {
  return PAD_TOP + (1 - (v - Y_MIN) / (Y_MAX - Y_MIN)) * (CHART_H - PAD_TOP - PAD_BOTTOM)
}

function toPoints(values: number[]): string {
  return values.map((v, i) => `${xPos(i)},${yPos(v)}`).join(' ')
}

function toAreaPath(values: number[]): string {
  const top = values.map((v, i) => `${xPos(i)},${yPos(v)}`).join(' L ')
  const baseline = yPos(Y_MIN)
  const lastX = xPos(values.length - 1)
  const firstX = xPos(0)
  return `M ${firstX},${baseline} L ${top} L ${lastX},${baseline} Z`
}

// ─── Y-axis tick labels ───────────────────────────────────────────────────────

const Y_TICKS = [0, 25, 50, 75, 100]

function ChartFrame() {
  return (
    <>
      {Y_TICKS.map(tick => (
        <g key={tick}>
          <line
            x1={PAD_LEFT}
            y1={yPos(tick)}
            x2={CHART_W - PAD_RIGHT}
            y2={yPos(tick)}
            stroke="var(--borderColor-muted)"
            strokeWidth={1}
          />
          <text
            x={PAD_LEFT - 6}
            y={yPos(tick)}
            textAnchor="end"
            dominantBaseline="middle"
            fontSize={10}
            fill="var(--fgColor-muted)"
          >
            {tick}
          </text>
        </g>
      ))}
      {MONTHS.map((m, i) => (
        <text
          key={m}
          x={xPos(i)}
          y={CHART_H - PAD_BOTTOM + 14}
          textAnchor="middle"
          fontSize={10}
          fill="var(--fgColor-muted)"
        >
          {m}
        </text>
      ))}
    </>
  )
}

function ChartLegend() {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '8px'}}>
      {CHART_COLORS.map(color => (
        <span
          key={color}
          style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--fgColor-muted)'}}
        >
          <span
            style={{
              display: 'inline-block',
              width: 12,
              height: 12,
              borderRadius: 2,
              backgroundColor: `var(--data-${color}-color-emphasis)`,
              flexShrink: 0,
            }}
          />
          {color}
        </span>
      ))}
    </div>
  )
}

// ─── Heading helper ───────────────────────────────────────────────────────────

const SectionHeading = ({children, as = 'h2'}: {children: React.ReactNode; as?: 'h1' | 'h2'}) => {
  const Tag = as
  return (
    <Tag
      style={{
        fontSize: as === 'h1' ? '16px' : '14px',
        fontWeight: 600,
        margin: '0 0 12px',
        color: 'var(--fgColor-default)',
      }}
    >
      {children}
    </Tag>
  )
}

// ─── Stories ─────────────────────────────────────────────────────────────────

export const LineChart = () => {
  return (
    <div style={{padding: '24px'}}>
      <SectionHeading as="h1">Line chart</SectionHeading>
      <svg
        viewBox={`0 0 ${CHART_W} ${CHART_H}`}
        width="100%"
        style={{display: 'block', overflow: 'visible'}}
        aria-label="Line chart showing display colors"
      >
        <ChartFrame />
        {CHART_COLORS.map(color => (
          <polyline
            key={color}
            points={toPoints(SERIES_DATA[color])}
            fill="none"
            stroke={`var(--data-${color}-color-emphasis)`}
            strokeWidth={2}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        ))}
        {CHART_COLORS.map(color =>
          SERIES_DATA[color].map((v, i) => (
            <circle
              key={`${color}-${i}`}
              cx={xPos(i)}
              cy={yPos(v)}
              r={3}
              fill={`var(--data-${color}-color-emphasis)`}
            />
          )),
        )}
      </svg>
      <ChartLegend />
    </div>
  )
}

export const AreaChart = () => {
  return (
    <div style={{padding: '24px'}}>
      <SectionHeading as="h1">Area chart</SectionHeading>
      <svg
        viewBox={`0 0 ${CHART_W} ${CHART_H}`}
        width="100%"
        style={{display: 'block', overflow: 'visible'}}
        aria-label="Area chart showing display colors"
      >
        <ChartFrame />
        {/* Fill areas rendered first (below lines) */}
        {CHART_COLORS.map(color => (
          <path
            key={`area-${color}`}
            d={toAreaPath(SERIES_DATA[color])}
            fill={`var(--data-${color}-color-muted)`}
            stroke="none"
            opacity={0.85}
          />
        ))}
        {/* Lines on top */}
        {CHART_COLORS.map(color => (
          <polyline
            key={`line-${color}`}
            points={toPoints(SERIES_DATA[color])}
            fill="none"
            stroke={`var(--data-${color}-color-emphasis)`}
            strokeWidth={1.5}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        ))}
      </svg>
      <ChartLegend />
    </div>
  )
}

export const Foreground = ({colorTokens}: {colorTokens: ColorTokens}) => {
  const data = getTokensByName(colorTokens, 'display')
    .filter(token => token.name.includes('fgColor'))
    .map(token => ({id: token.name, ...token}))

  return (
    <Table.Container>
      <Table.Title as="h1" id="fg-heading">
        Foreground
      </Table.Title>
      <DataTable
        aria-labelledby="fg-heading"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => <ColorTokenSwatch textColor={row.name} />,
          },
          {
            header: 'Token',
            field: 'name',
            rowHeader: true,
            renderCell: row => <InlineCode value={row.name} copyClipboard cssVar />,
          },
          {
            header: 'Output value',
            field: 'value',
            rowHeader: true,
            renderCell: row => <p>{formatTokenValue(row.value)}</p>,
          },
        ]}
      />
    </Table.Container>
  )
}

export const Background = ({colorTokens}: {colorTokens: ColorTokens}) => {
  const data = getTokensByName(colorTokens, 'display')
    .filter(token => token.name.includes('bgColor'))
    .map(token => ({id: token.name, ...token}))

  return (
    <Table.Container>
      <Table.Title as="h1" id="bg-heading">
        Background
      </Table.Title>
      <DataTable
        aria-labelledby="bg-heading"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => <ColorTokenSwatch bgColor={row.name} />,
          },
          {
            header: 'Token',
            field: 'name',
            rowHeader: true,
            renderCell: row => <InlineCode value={row.name} copyClipboard cssVar />,
          },
          {
            header: 'Output value',
            field: 'value',
            rowHeader: true,
            renderCell: row => <p>{formatTokenValue(row.value)}</p>,
          },
        ]}
      />
    </Table.Container>
  )
}

export const DataVisAccentColors = ({colorTokens}: {colorTokens: ColorTokens}) => {
  const data = getTokensByName(colorTokens, 'data')
    .filter(({type, name}) => type === 'color' && !name.includes('muted'))
    .map(token => ({id: token.name, ...token}))

  return (
    <Table.Container>
      <Table.Title as="h1" id="datavis-accent-heading">
        Data visualization accent colors
      </Table.Title>
      <DataTable
        aria-labelledby="datavis-accent-heading"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => <ColorTokenSwatch bgColor={row.name} />,
          },
          {
            header: 'Token',
            field: 'name',
            rowHeader: true,
            renderCell: row => <InlineCode value={row.name} copyClipboard cssVar />,
          },
          {
            header: 'Output value',
            field: 'value',
            rowHeader: true,
            renderCell: row => <p>{formatTokenValue(row.value)}</p>,
          },
        ]}
      />
    </Table.Container>
  )
}

export const DataVisMutedColors = ({colorTokens}: {colorTokens: ColorTokens}) => {
  const data = getTokensByName(colorTokens, 'data')
    .filter(({type, name}) => type === 'color' && name.includes('muted'))
    .map(token => ({id: token.name, ...token}))

  return (
    <Table.Container>
      <Table.Title as="h1" id="datavis-muted-heading">
        Data visualization muted colors
      </Table.Title>
      <DataTable
        aria-labelledby="datavis-muted-heading"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => <ColorTokenSwatch bgColor={row.name} />,
          },
          {
            header: 'Token',
            field: 'name',
            rowHeader: true,
            renderCell: row => <InlineCode value={row.name} copyClipboard cssVar />,
          },
          {
            header: 'Output value',
            field: 'value',
            rowHeader: true,
            renderCell: row => <p>{formatTokenValue(row.value)}</p>,
          },
        ]}
      />
    </Table.Container>
  )
}

export const Border = ({colorTokens}: {colorTokens: ColorTokens}) => {
  const data = getTokensByName(colorTokens, 'display')
    .filter(token => token.name.includes('borderColor'))
    .map(token => ({id: token.name, ...token}))

  return (
    <Table.Container>
      <Table.Title as="h1" id="border-heading">
        Border
      </Table.Title>
      <DataTable
        aria-labelledby="border-heading"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => <ColorTokenSwatch borderColor={row.name} />,
          },
          {
            header: 'Token',
            field: 'name',
            rowHeader: true,
            renderCell: row => <InlineCode value={row.name} copyClipboard cssVar />,
          },
          {
            header: 'Output value',
            field: 'value',
            rowHeader: true,
            renderCell: row => <p>{formatTokenValue(row.value)}</p>,
          },
        ]}
      />
    </Table.Container>
  )
}
