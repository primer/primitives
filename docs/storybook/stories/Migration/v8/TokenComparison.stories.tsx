import React from 'react'
import {CSSTokenSwatch} from '../../StorybookComponents/CSSTokenSwatch/CSSTokenSwatch'
import {CSSTokenShadowSwatch} from '../../StorybookComponents/CSSTokenSwatch/CSSTokenShadowSwatch'
// eslint-disable-next-line import/extensions
import cssVars from './DeprecatedPrimitiveTokensMap.json'
// eslint-disable-next-line import/extensions
import appVars from './DeprecatedAppTokensMap.json'
// eslint-disable-next-line import/extensions
import patternVars from './DeprecatedPatternTokensMap.json'
// eslint-disable-next-line import/extensions
import cssShadowVars from './DeprecatedShadowTokensMap.json'
// eslint-disable-next-line import/extensions
import noChangeCssVars from './NoChangeTokensMap.json'
// eslint-disable-next-line import/extensions
import fallbackVars from '../../../../../tokens-next-private/fallbacks/color-fallbacks.json'
import {DataTable, Table} from '@primer/react/drafts'

export default {
  title: 'Migration/Tables',
  tags: ['excludeSnapshot'],
}

export const Primitives = () => {
  const data = Object.entries(cssVars).map(([key, value]) => {
    return {
      id: key,
      ...value,
    }
  })
  return (
    <Table.Container>
      <Table.Title as="h2" id="repositories">
        Deprecated token replacements
      </Table.Title>
      <DataTable
        aria-labelledby="repositories"
        aria-describedby="repositories-subtitle"
        data={data}
        columns={[
          {
            header: 'Old',
            field: 'id',
            rowHeader: true,
            renderCell: row => {
              return <CSSTokenSwatch color={row.id} />
            },
          },
          {
            header: 'Foreground',
            field: 'color',
            renderCell: row => {
              return <CSSTokenSwatch color={row.color} prevColor={row.id} />
            },
          },
          {
            header: 'Background',
            field: 'background',
            renderCell: row => {
              return <CSSTokenSwatch color={row.background} prevColor={row.id} />
            },
          },
          {
            header: 'Border',
            field: 'border',
            renderCell: row => {
              return <CSSTokenSwatch color={row.border} prevColor={row.id} />
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const PatternTokens = () => {
  const data = Object.entries(patternVars).map(([key, value]) => {
    return {
      id: key,
      ...value,
    }
  })
  return (
    <Table.Container>
      <Table.Title as="h2" id="repositories">
        Deprecated token replacements
      </Table.Title>
      <DataTable
        aria-labelledby="repositories"
        aria-describedby="repositories-subtitle"
        data={data}
        columns={[
          {
            header: 'Old',
            field: 'id',
            rowHeader: true,
            renderCell: row => {
              return <CSSTokenSwatch color={row.id} />
            },
          },
          {
            header: 'Foreground',
            field: 'color',
            renderCell: row => {
              return <CSSTokenSwatch color={row.color} prevColor={row.id} />
            },
          },
          {
            header: 'Background',
            field: 'background',
            renderCell: row => {
              return <CSSTokenSwatch color={row.background} prevColor={row.id} />
            },
          },
          {
            header: 'Border',
            field: 'border',
            renderCell: row => {
              return <CSSTokenSwatch color={row.border} prevColor={row.id} />
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const AppTokens = () => {
  const data = Object.entries(appVars).map(([key, value]) => {
    return {
      id: key,
      ...value,
    }
  })
  return (
    <Table.Container>
      <Table.Title as="h2" id="repositories">
        Deprecated token replacements
      </Table.Title>
      <DataTable
        aria-labelledby="repositories"
        aria-describedby="repositories-subtitle"
        data={data}
        columns={[
          {
            header: 'Old',
            field: 'id',
            rowHeader: true,
            renderCell: row => {
              return <CSSTokenSwatch color={row.id} />
            },
          },
          {
            header: 'Foreground',
            field: 'color',
            renderCell: row => {
              return <CSSTokenSwatch color={row.color} prevColor={row.id} />
            },
          },
          {
            header: 'Background',
            field: 'background',
            renderCell: row => {
              return <CSSTokenSwatch color={row.background} prevColor={row.id} />
            },
          },
          {
            header: 'Border',
            field: 'border',
            renderCell: row => {
              return <CSSTokenSwatch color={row.border} prevColor={row.id} />
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const Shadows = () => {
  const data = Object.entries(cssShadowVars).map(([key, value]) => {
    return {
      id: key,
      ...value,
    }
  })
  return (
    <Table.Container>
      <Table.Title as="h2" id="repositories">
        Deprecated token replacements
      </Table.Title>
      <DataTable
        aria-labelledby="repositories"
        aria-describedby="repositories-subtitle"
        data={data}
        columns={[
          {
            header: 'Old',
            field: 'id',
            rowHeader: true,
            renderCell: row => {
              return <CSSTokenShadowSwatch shadow={row.id} color="bgColor-muted" />
            },
          },
          {
            header: 'New',
            field: 'boxShadow',
            renderCell: row => {
              return <CSSTokenShadowSwatch shadow={row.boxShadow} color="bgColor-muted" />
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const NoChange = () => {
  const data = Object.entries(noChangeCssVars).map(([key, value]) => {
    return {
      id: key,
      ...value,
    }
  })
  return (
    <Table.Container>
      <Table.Title as="h2" id="repositories">
        Deprecated token replacements
      </Table.Title>
      <DataTable
        aria-labelledby="repositories"
        aria-describedby="repositories-subtitle"
        data={data}
        columns={[
          {
            header: 'Old',
            field: 'id',
            rowHeader: true,
            renderCell: row => {
              return <CSSTokenSwatch color={row.id} />
            },
          },
          {
            header: 'New',
            field: 'color',
            renderCell: row => {
              return <CSSTokenSwatch color={row.color} prevColor={row.id} />
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const Fallbacks = () => {
  const data = Object.entries(fallbackVars).map(([key, value]) => {
    return {
      id: key.replace(/^--/, ''),
      color: value.replace(/^var\(--|\)/g, '').replace(/^--/, ''),
    }
  })
  return (
    <Table.Container>
      <Table.Title as="h2" id="repositories">
        New tokens with fallbacks
      </Table.Title>
      <DataTable
        aria-labelledby="repositories"
        aria-describedby="repositories-subtitle"
        data={data}
        columns={[
          {
            header: 'New',
            field: 'id',
            rowHeader: true,
            renderCell: row => {
              return <CSSTokenSwatch color={row.id} />
            },
          },
          {
            header: 'Fallback',
            field: 'color',
            renderCell: row => {
              return <CSSTokenSwatch color={row.color} />
            },
          },
        ]}
      />
    </Table.Container>
  )
}
