import React from 'react'
// eslint-disable-next-line import/extensions
import lightColorTokens from '../../../../../dist/docs/functional/themes/light.json'
import darkColorTokens from '../../../../../dist/docs/functional/themes/dark.json'
import lightHCColorTokens from '../../../../../dist/docs/functional/themes/light-high-contrast.json'
import darkHCColorTokens from '../../../../../dist/docs/functional/themes/dark-high-contrast.json'
import darkDimmedColorTokens from '../../../../../dist/docs/functional/themes/dark-dimmed.json'
import {ColorTokenSwatch} from '../../StorybookComponents/ColorTokenSwatch/ColorTokenSwatch'
import {DataTable, Table, Stack} from '@primer/react/experimental'
import {InlineCode} from '../../StorybookComponents/InlineCode/InlineCode'

export default {
  title: 'Color/Transparent',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {
      showPanel: false,
    },
    theme: 'dark',
  },
}

export const Light = () => {
  const data = Object.entries(lightColorTokens)
    .filter(([name, token]) => token.alpha)
    .map(([name, token]) => {
      return {
        id: name,
        ...token,
      }
    })
  return (
    <Table.Container>
      {/* <Table.Title as="h1" id="pattern">
        Light transparent colors (avoid using the global theme picker)
      </Table.Title> */}
      <DataTable
        aria-labelledby="pattern"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <ColorTokenSwatch bgColor={row.name} />
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
            header: 'Base color',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              const cleanedValue = `${row.original.$value.replace(/[{}]/g, '').replace(/\./g, '-')}`
              return (
                <Stack direction="horizontal" gap="condensed">
                  <ColorTokenSwatch bgColor={cleanedValue} /> <code>{cleanedValue}</code>
                </Stack>
              )
            },
          },
          {
            header: 'Alpha',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.alpha}</p>
            },
          },
          {
            header: 'Output value',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <InlineCode value={row.value} copyClipboard />
            },
          },
        ]}
      />
    </Table.Container>
  )
}
Light.decorators = [
  Story => (
    <div data-color-mode="light" data-light-theme="light" data-dark-theme="light">
      <Story />
    </div>
  ),
]

export const Dark = () => {
  const data = Object.entries(darkColorTokens)
    .filter(([name, token]) => token.alpha)
    .map(([name, token]) => {
      return {
        id: name,
        ...token,
      }
    })
  return (
    <Table.Container>
      {/* <Table.Title as="h1" id="pattern">
        Light transparent colors (avoid using the global theme picker)
      </Table.Title> */}
      <DataTable
        aria-labelledby="pattern"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <ColorTokenSwatch bgColor={row.name} />
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
            header: 'Base color',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              const cleanedValue = `${row.original.$value.replace(/[{}]/g, '').replace(/\./g, '-')}`
              return (
                <Stack direction="horizontal" gap="condensed">
                  <ColorTokenSwatch bgColor={cleanedValue} /> <code>{cleanedValue}</code>
                </Stack>
              )
            },
          },
          {
            header: 'Alpha',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.alpha}</p>
            },
          },
          {
            header: 'Output value',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <InlineCode value={row.value} copyClipboard />
            },
          },
        ]}
      />
    </Table.Container>
  )
}
Dark.decorators = [
  Story => (
    <div data-color-mode="dark" data-light-theme="dark" data-dark-theme="dark">
      <Story />
    </div>
  ),
]

export const LightHighContrast = () => {
  const data = Object.entries(lightHCColorTokens)
    .filter(([name, token]) => token.alpha)
    .map(([name, token]) => {
      return {
        id: name,
        ...token,
      }
    })
  return (
    <Table.Container>
      {/* <Table.Title as="h1" id="pattern">
        Light transparent colors (avoid using the global theme picker)
      </Table.Title> */}
      <DataTable
        aria-labelledby="pattern"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <ColorTokenSwatch bgColor={row.name} />
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
            header: 'Base color',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              const cleanedValue = `${row.original.$value.replace(/[{}]/g, '').replace(/\./g, '-')}`
              return (
                <Stack direction="horizontal" gap="condensed">
                  <ColorTokenSwatch bgColor={cleanedValue} /> <code>{cleanedValue}</code>
                </Stack>
              )
            },
          },
          {
            header: 'Alpha',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.alpha}</p>
            },
          },
          {
            header: 'Output value',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <InlineCode value={row.value} copyClipboard />
            },
          },
        ]}
      />
    </Table.Container>
  )
}
LightHighContrast.decorators = [
  Story => (
    <div data-color-mode="light" data-light-theme="light_high_contrast" data-dark-theme="light_high_contrast">
      <Story />
    </div>
  ),
]

export const DarkHighContrast = () => {
  const data = Object.entries(darkHCColorTokens)
    .filter(([name, token]) => token.alpha)
    .map(([name, token]) => {
      return {
        id: name,
        ...token,
      }
    })
  return (
    <Table.Container>
      {/* <Table.Title as="h1" id="pattern">
        Light transparent colors (avoid using the global theme picker)
      </Table.Title> */}
      <DataTable
        aria-labelledby="pattern"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <ColorTokenSwatch bgColor={row.name} />
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
            header: 'Base color',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              const cleanedValue = `${row.original.$value.replace(/[{}]/g, '').replace(/\./g, '-')}`
              return (
                <Stack direction="horizontal" gap="condensed">
                  <ColorTokenSwatch bgColor={cleanedValue} /> <code>{cleanedValue}</code>
                </Stack>
              )
            },
          },
          {
            header: 'Alpha',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.alpha}</p>
            },
          },
          {
            header: 'Output value',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <InlineCode value={row.value} copyClipboard />
            },
          },
        ]}
      />
    </Table.Container>
  )
}
DarkHighContrast.decorators = [
  Story => (
    <div data-color-mode="dark" data-light-theme="dark_high_contrast" data-dark-theme="dark_high_contrast">
      <Story />
    </div>
  ),
]

export const DarkDimmed = () => {
  const data = Object.entries(darkDimmedColorTokens)
    .filter(([name, token]) => token.alpha)
    .map(([name, token]) => {
      return {
        id: name,
        ...token,
      }
    })
  return (
    <Table.Container>
      <DataTable
        aria-labelledby="pattern"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <ColorTokenSwatch bgColor={row.name} />
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
            header: 'Base color',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              const cleanedValue = `${row.original.$value.replace(/[{}]/g, '').replace(/\./g, '-')}`
              return (
                <Stack direction="horizontal" gap="condensed">
                  <ColorTokenSwatch bgColor={cleanedValue} /> <code>{cleanedValue}</code>
                </Stack>
              )
            },
          },
          {
            header: 'Alpha',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.alpha}</p>
            },
          },
          {
            header: 'Output value',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <InlineCode value={row.value} copyClipboard />
            },
          },
        ]}
      />
    </Table.Container>
  )
}
DarkDimmed.decorators = [
  Story => (
    <div data-color-mode="dark" data-light-theme="dark_dimmed" data-dark-theme="dark_dimmed">
      <Story />
    </div>
  ),
]
