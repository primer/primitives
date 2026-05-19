import React from 'react'
import {DataTable, Stack, Table} from '@primer/react/experimental'
import {ColorTokenSwatch} from '../../StorybookComponents/ColorTokenSwatch/ColorTokenSwatch'
import {InlineCode} from '../../StorybookComponents/InlineCode/InlineCode'
import {getTokensByName} from '../../utilities/getTokensByName'
import {withColorTokens} from '../../utilities/withColorTokens'
import {formatTokenValue} from '../../utilities/formatTokenValue'

export default {
  title: 'Color/Display/Display Colors',
  decorators: [withColorTokens],
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {
      showPanel: false,
    },
  },
}

const colors = [
  'gray',
  'blue',
  'indigo',
  'cyan',
  'teal',
  'pine',
  'green',
  'lime',
  'olive',
  'lemon',
  'yellow',
  'orange',
  'red',
  'coral',
  'pink',
  'plum',
  'purple',
  'brown',
  'auburn',
]

const labelStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '8px',
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: '18px',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  textDecoration: 'none',
}

const SectionHeading = ({children}) => (
  <h2
    style={{
      fontSize: '14px',
      fontWeight: 600,
      marginBottom: '8px',
      marginTop: '0',
      color: 'var(--fgColor-default)',
    }}
  >
    {children}
  </h2>
)

export const DisplayColors = () => {
  return (
    <Stack direction="vertical" gap="spacious" style={{padding: '24px'}}>
      <div>
        <SectionHeading>Emphasis</SectionHeading>
        <Stack direction="horizontal" gap="condensed" wrap="wrap">
          {colors.map(color => (
            <span
              key={color}
              style={{
                ...labelStyle,
                backgroundColor: `var(--display-${color}-bgColor-emphasis)`,
                color: `var(--fgColor-onEmphasis)`,
              }}
            >
              {color}
            </span>
          ))}
        </Stack>
      </div>

      <div>
        <SectionHeading>Muted</SectionHeading>
        <Stack direction="horizontal" gap="condensed" wrap="wrap">
          {colors.map(color => (
            <span
              key={color}
              style={{
                ...labelStyle,
                backgroundColor: `var(--display-${color}-bgColor-muted)`,
                color: `var(--display-${color}-fgColor)`,
              }}
            >
              {color}
            </span>
          ))}
        </Stack>
      </div>

      <div>
        <SectionHeading>Emphasis with border</SectionHeading>
        <Stack direction="horizontal" gap="condensed" wrap="wrap">
          {colors.map(color => (
            <span
              key={color}
              style={{
                ...labelStyle,
                backgroundColor: `var(--display-${color}-bgColor-emphasis)`,
                color: `var(--fgColor-onEmphasis)`,
                boxShadow: `inset 0 0 0 1px var(--display-${color}-borderColor-emphasis)`,
              }}
            >
              {color}
            </span>
          ))}
        </Stack>
      </div>

      <div>
        <SectionHeading>Muted with border</SectionHeading>
        <Stack direction="horizontal" gap="condensed" wrap="wrap">
          {colors.map(color => (
            <span
              key={color}
              style={{
                ...labelStyle,
                backgroundColor: `var(--display-${color}-bgColor-muted)`,
                color: `var(--display-${color}-fgColor)`,
                boxShadow: `inset 0 0 0 1px var(--display-${color}-borderColor-muted)`,
              }}
            >
              {color}
            </span>
          ))}
        </Stack>
      </div>

      <div>
        <SectionHeading>Color combinations</SectionHeading>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          {colors.map(color => (
            <div
              key={color}
              style={{
                display: 'flex',
                gap: '4px',
              }}
            >
              <span
                style={{
                  ...labelStyle,
                  backgroundColor: `var(--display-${color}-bgColor-muted)`,
                  color: `var(--display-${color}-fgColor)`,
                }}
              >
                {color}
              </span>
              <span
                style={{
                  ...labelStyle,
                  backgroundColor: `var(--display-${color}-bgColor-muted)`,
                  color: `var(--display-${color}-fgColor)`,
                  boxShadow: `inset 0 0 0 1px var(--display-${color}-borderColor-muted)`,
                }}
              >
                {color}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Stack>
  )
}

export const Foreground = ({colorTokens}) => {
  const data = getTokensByName(colorTokens, 'display')
    .filter(token => token.name.includes('fgColor'))
    .map(token => ({id: token.name, ...token}))

  return (
    <Stack direction="vertical" gap="spacious" style={{padding: '24px'}}>
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
    </Stack>
  )
}

export const Background = ({colorTokens}) => {
  const data = getTokensByName(colorTokens, 'display')
    .filter(token => token.name.includes('bgColor'))
    .map(token => ({id: token.name, ...token}))

  return (
    <Stack direction="vertical" gap="spacious" style={{padding: '24px'}}>
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
    </Stack>
  )
}

export const Border = ({colorTokens}) => {
  const data = getTokensByName(colorTokens, 'display')
    .filter(token => token.name.includes('borderColor'))
    .map(token => ({id: token.name, ...token}))

  return (
    <Stack direction="vertical" gap="spacious" style={{padding: '24px'}}>
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
    </Stack>
  )
}
