import React from 'react'
import {ColorTokenSwatch} from '../../StorybookComponents/ColorTokenSwatch/ColorTokenSwatch'
import {Banner, DataTable, Table} from '@primer/react/experimental'
import {InlineCode} from '../../StorybookComponents/InlineCode/InlineCode'
import {getTokensByName} from '../../utilities/getTokensByName'
import {Box} from '@primer/react'
import {ColorScaleByName} from '../../StorybookComponents/ColorScale/ColorScaleByName'
import {withColorTokens, type ColorTokens} from '../../utilities/withColorTokens'

export default {
  title: 'Color/Alpha/Display',
  decorators: [withColorTokens],
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {
      showPanel: false,
    },
  },
}

export const Foreground = ({colorTokens}: {colorTokens: ColorTokens}) => {
  const data = getTokensByName(colorTokens, 'display')
    .map(token => {
      return {
        id: token.name,
        ...token,
      }
    })
    .filter(token => token.name.includes('fgColor'))

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
}

export const Background = ({colorTokens}: {colorTokens: ColorTokens}) => {
  const data = getTokensByName(colorTokens, 'display')
    .map(token => {
      return {
        id: token.name,
        ...token,
      }
    })
    .filter(token => token.name.includes('bgColor'))
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
}

export const Border = ({colorTokens}: {colorTokens: ColorTokens}) => {
  const data = getTokensByName(colorTokens, 'display')
    .map(token => {
      return {
        id: token.name,
        ...token,
      }
    })
    .filter(token => token.name.includes('borderColor'))
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
}

export const Scales = ({colorTokens}: {colorTokens: ColorTokens}) => {
  const data = [
    ...new Set(
      getTokensByName(colorTokens, 'display')
        .map(token => {
          return {
            id: token.name,
            ...token,
          }
        })
        .filter(token => token.name.includes('scale'))
        .map(token => token.path.at(1)),
    ),
  ]

  return (
    <div>
      <h1 className="sr-only">Scales</h1>
      <Banner title="Display scales are designed for very limited use cases only." variant="warning">
        If you feel like they make sense in your case, please reach out to the Primer team.
      </Banner>
      <div className="ColorScale--grid" style={{paddingTop: '1rem'}}>
        {data.map(token => {
          return (
            <div key={token}>
              <ColorScaleByName colorBaseVariable={`display-${token}-scale`} steps={9} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
