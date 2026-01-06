import React from 'react'
// eslint-disable-next-line import/extensions
import lightColorTokens from '../../../../../dist/docs/functional/themes/light.json'
import lightColorblindColorTokens from '../../../../../dist/docs/functional/themes/light-colorblind.json'
import lightColorblindHighContrastColorTokens from '../../../../../dist/docs/functional/themes/light-colorblind-high-contrast.json'
import lightTritanopiaColorTokens from '../../../../../dist/docs/functional/themes/light-tritanopia.json'
import lightTritanopiaHighContrastColorTokens from '../../../../../dist/docs/functional/themes/light-tritanopia-high-contrast.json'
import lightHighContrastColorTokens from '../../../../../dist/docs/functional/themes/light-high-contrast.json'
import darkColorTokens from '../../../../../dist/docs/functional/themes/dark.json'
import darkDimmedColorTokens from '../../../../../dist/docs/functional/themes/dark-dimmed.json'
import darkDimmedHighContrastColorTokens from '../../../../../dist/docs/functional/themes/dark-dimmed-high-contrast.json'
import darkColorblindColorTokens from '../../../../../dist/docs/functional/themes/dark-colorblind.json'
import darkColorblindHighContrastColorTokens from '../../../../../dist/docs/functional/themes/dark-colorblind-high-contrast.json'
import darkTritanopiaColorTokens from '../../../../../dist/docs/functional/themes/dark-tritanopia.json'
import darkTritanopiaHighContrastColorTokens from '../../../../../dist/docs/functional/themes/dark-tritanopia-high-contrast.json'
import darkHighContrastColorTokens from '../../../../../dist/docs/functional/themes/dark-high-contrast.json'
import {ColorTokenSwatch} from '../../StorybookComponents/ColorTokenSwatch/ColorTokenSwatch'
import {DataTable, Table} from '@primer/react/experimental'
import {InlineCode} from '../../StorybookComponents/InlineCode/InlineCode'
import {getTokensByName} from '../../utilities/getTokensByName'
import type StyleDictionary from 'style-dictionary'

// Map theme names to their corresponding JSON data
const themeTokens: Record<string, Record<string, StyleDictionary.TransformedToken>> = {
  light: lightColorTokens,
  light_colorblind: lightColorblindColorTokens,
  light_colorblind_high_contrast: lightColorblindHighContrastColorTokens,
  light_tritanopia: lightTritanopiaColorTokens,
  light_tritanopia_high_contrast: lightTritanopiaHighContrastColorTokens,
  light_high_contrast: lightHighContrastColorTokens,
  dark: darkColorTokens,
  dark_dimmed: darkDimmedColorTokens,
  dark_dimmed_high_contrast: darkDimmedHighContrastColorTokens,
  dark_colorblind: darkColorblindColorTokens,
  dark_colorblind_high_contrast: darkColorblindHighContrastColorTokens,
  dark_tritanopia: darkTritanopiaColorTokens,
  dark_tritanopia_high_contrast: darkTritanopiaHighContrastColorTokens,
  dark_high_contrast: darkHighContrastColorTokens,
}

// Helper function to get tokens for the current theme
function getColorTokensForTheme(theme: string): Record<string, StyleDictionary.TransformedToken> {
  return themeTokens[theme]
}

export default {
  title: 'Color/Functional/Tables',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {
      showPanel: false,
    },
  },
}

export const Foreground = {
  render: (_args: unknown, context: {globals: {theme: string}}) => {
    const colorTokens = getColorTokensForTheme(context.globals.theme)
    const data = getTokensByName(colorTokens, 'fgColor').map(token => {
      return {
        id: token.name,
        ...token,
      }
    })
    return (
      <Table.Container>
        <h1 className="sr-only" id="table-heading">
          Foreground
        </h1>
        <DataTable
          aria-labelledby="pattern"
          data={data}
          columns={[
            {
              header: 'Sample',
              field: 'name',
              rowHeader: true,
              renderCell: row => {
                return <ColorTokenSwatch textColor={row.name} />
              },
            },
            {
              header: 'Token',
              field: 'name',
              rowHeader: true,
              renderCell: row => {
                return <InlineCode value={row.name} copyClipboard cssVar />
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
          ]}
        />
      </Table.Container>
    )
  },
}

export const Background = {
  render: (_args: unknown, context: {globals: {theme: string}}) => {
    const colorTokens = getColorTokensForTheme(context.globals.theme)
    const data = getTokensByName(colorTokens, 'bgColor').map(token => {
      return {
        id: token.name,
        ...token,
      }
    })
    return (
      <Table.Container>
        <h1 className="sr-only" id="table-heading">
          Background
        </h1>
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
                return <InlineCode value={row.name} copyClipboard cssVar />
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
          ]}
        />
      </Table.Container>
    )
  },
}

export const Border = {
  render: (_args: unknown, context: {globals: {theme: string}}) => {
    const colorTokens = getColorTokensForTheme(context.globals.theme)
    const data = getTokensByName(colorTokens, 'borderColor').map(token => {
      return {
        id: token.name,
        ...token,
      }
    })
    return (
      <Table.Container>
        <h1 className="sr-only" id="table-heading">
          Border
        </h1>
        <DataTable
          aria-labelledby="pattern"
          data={data}
          columns={[
            {
              header: 'Sample',
              field: 'name',
              rowHeader: true,
              renderCell: row => {
                return <ColorTokenSwatch borderColor={row.name} />
              },
            },
            {
              header: 'Token',
              field: 'name',
              rowHeader: true,
              renderCell: row => {
                return <InlineCode value={row.name} copyClipboard cssVar />
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
          ]}
        />
      </Table.Container>
    )
  },
}

export const Shadow = {
  render: (_args: unknown, context: {globals: {theme: string}}) => {
    const colorTokens = getColorTokensForTheme(context.globals.theme)
    const data = getTokensByName(colorTokens, 'shadow').map(token => {
      return {
        id: token.name,
        ...token,
      }
    })
    return (
      <Table.Container>
        <h1 className="sr-only" id="table-heading">
          Shadow
        </h1>
        <DataTable
          aria-labelledby="pattern"
          data={data}
          columns={[
            {
              header: 'Sample',
              field: 'name',
              rowHeader: true,
              renderCell: row => {
                return <ColorTokenSwatch shadowColor={row.name} />
              },
            },
            {
              header: 'Token',
              field: 'name',
              rowHeader: true,
              renderCell: row => {
                return <InlineCode value={row.name} copyClipboard cssVar />
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
          ]}
        />
      </Table.Container>
    )
  },
}
