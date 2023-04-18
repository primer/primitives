import React from 'react'
// eslint-disable-next-line import/extensions
import sizeTokens from '../../../../tokens-next-private/docs/functional/typography/typography.json'
import {DataTable, Table} from '@primer/react/drafts'
import {InlineCode} from '../StorybookComponents/InlineCode/InlineCode'
import {TypographyDemo} from '../StorybookComponents/TypographyDemo/TypographyDemo'
import {getTokensByName} from '../utilities/getTokensByName'

export default {
  title: 'Typography/Functional',
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
}

export const FontFamily = () => {
  const data = getTokensByName(sizeTokens, 'fontStack').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  return (
    <Table.Container>
      <Table.Title as="h1" id="type">
        Font family
      </Table.Title>
      <DataTable
        aria-labelledby="type"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return (
                <TypographyDemo
                  fontFamily={row.name}
                  fontSize="text-title-size-medium"
                  fontWeight="base-text-weight-normal"
                >
                  {row.name.split('-').pop().split('-').pop()}
                </TypographyDemo>
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
            field: 'original',
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

export const FontShorthand = () => {
  const data = getTokensByName(sizeTokens, 'text').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  const filteredData = data.filter(item => item.id.includes('shorthand'))

  console.log(filteredData)

  return (
    <Table.Container>
      <Table.Title as="h1" id="type">
        Font shorthand
      </Table.Title>
      <DataTable
        aria-labelledby="type"
        data={filteredData}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <TypographyDemo fontShorthand={row.name}>{row.name.split('-')[1]}</TypographyDemo>
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
            header: 'Source value',
            field: 'original',
            rowHeader: true,
            renderCell: row => {
              return (
                <>
                  <p>
                    font-weight: <code>{row.original.value.fontSize}</code>
                  </p>
                  <p>
                    font-size: <code>{row.original.value.fontSize}</code>
                  </p>
                  <p>
                    font-family: <code>{row.original.value.fontFamily}</code>
                  </p>
                  {row.original.value.lineHeight && (
                    <p>
                      line-height: <code>{row.original.value.lineHeight}</code>
                    </p>
                  )}
                </>
              )
            },
          },
        ]}
      />
    </Table.Container>
  )
}
