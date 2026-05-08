import React from 'react'
// eslint-disable-next-line import/extensions
import sizeTokens from '../../../../dist/docs/functional/typography/typography.json'
import {DataTable, Table} from '@primer/react/experimental'
import {TypographyDemo} from '../StorybookComponents/TypographyDemo/TypographyDemo'
import {getTokensByName} from '../utilities/getTokensByName'
import {formatTokenValue} from '../utilities/formatTokenValue'
import {tokenColumn, outputValueColumn} from '../utilities/commonTableColumns'

export default {
  title: 'Typography/Functional',
  parameters: {
    controls: {hideNoControlsWarning: true},
    tags: ['snapshotLight'],
  },
}

const allTextTokens = () =>
  getTokensByName(sizeTokens, 'text').map(token => ({
    id: token.name,
    ...token,
  }))

const cssPropertyColumn = () => ({
  header: 'Property',
  field: 'name' as const,
  rowHeader: true,
  renderCell: (row: {name: string}) => (
    <code>
      {row.name.includes('size')
        ? 'font-size'
        : row.name.includes('weight')
          ? 'font-weight'
          : row.name.includes('lineHeight')
            ? 'line-height'
            : row.name.includes('lineBoxHeight')
              ? 'height'
              : row.name.includes('shorthand')
                ? 'font'
                : undefined}
    </code>
  ),
})

const sourceValueSkipShorthandColumn = () => ({
  header: 'Source value',
  field: 'original' as const,
  rowHeader: true,
  renderCell: (row: {name: string; original: {$value: unknown}}) => (
    <p>{row.name.includes('shorthand') ? undefined : formatTokenValue(row.original.$value)}</p>
  ),
})

/**
 * Factory for typography style stories (Display, Title, Body, etc.)
 * Each story shows a TypographyDemo header and a table of individual tokens.
 */
const createTypographyStory = ({
  label,
  shorthand,
  includes,
}: {
  label: string
  shorthand: string
  includes: string[]
}) => {
  const Story = () => {
    const filteredData = allTextTokens().filter(
      item => !item.id.includes('shorthand') && includes.every(keyword => item.id.includes(keyword)),
    )

    return (
      <Table.Container>
        <TypographyDemo container id="type" fontShorthand={shorthand}>
          {label}
        </TypographyDemo>
        <DataTable
          aria-labelledby="type"
          data={filteredData}
          columns={[cssPropertyColumn(), tokenColumn(), outputValueColumn(), sourceValueSkipShorthandColumn()]}
        />
      </Table.Container>
    )
  }
  Story.tags = ['excludeSnapshot']
  return Story
}

export const FontFamily = () => {
  const data = getTokensByName(sizeTokens, 'fontStack').map(token => ({id: token.name, ...token}))

  return (
    <Table.Container>
      <h1 className="sr-only" id="type">
        Font family
      </h1>
      <DataTable
        aria-labelledby="type"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => (
              <TypographyDemo
                fontFamily={row.name}
                fontSize="text-title-size-medium"
                fontWeight="base-text-weight-normal"
              >
                {row.name.split('-').pop().split('-').pop()}
              </TypographyDemo>
            ),
          },
          tokenColumn(),
          {
            header: 'Output value',
            field: 'value' as const,
            rowHeader: true,
            width: 'auto',
            renderCell: (row: {value: unknown}) => <p>{formatTokenValue(row.value)}</p>,
          },
        ]}
      />
    </Table.Container>
  )
}
FontFamily.tags = ['excludeSnapshot']

export const FontShorthand = () => {
  const filteredData = allTextTokens().filter(item => item.id.includes('shorthand'))

  return (
    <Table.Container>
      <h1 className="sr-only" id="type">
        Font shorthand
      </h1>
      <DataTable
        aria-labelledby="type"
        data={filteredData}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => <TypographyDemo fontShorthand={row.name}>{row.name.split('-')[1]}</TypographyDemo>,
          },
          tokenColumn(),
          {
            header: 'Source value',
            field: 'original' as const,
            rowHeader: true,
            renderCell: (row: {
              original: {$value: {fontWeight?: string; fontSize?: string; fontFamily?: string; lineHeight?: string}}
            }) => (
              <div>
                <p>
                  font-weight: <code>{row.original.$value.fontWeight}</code>
                </p>
                <p>
                  font-size: <code>{row.original.$value.fontSize}</code>
                </p>
                <p>
                  font-family: <code>{row.original.$value.fontFamily}</code>
                </p>
                {row.original.$value.lineHeight && (
                  <p>
                    line-height: <code>{row.original.$value.lineHeight}</code>
                  </p>
                )}
              </div>
            ),
          },
        ]}
      />
    </Table.Container>
  )
}
FontShorthand.tags = ['excludeSnapshot']

export const Display = createTypographyStory({
  label: 'Display',
  shorthand: 'text-display-shorthand',
  includes: ['display'],
})

export const TitleLarge = createTypographyStory({
  label: 'Title large',
  shorthand: 'text-title-shorthand-large',
  includes: ['title', 'large'],
})

export const TitleMedium = createTypographyStory({
  label: 'Title medium',
  shorthand: 'text-title-shorthand-medium',
  includes: ['title', 'medium'],
})

export const TitleSmall = createTypographyStory({
  label: 'Title small',
  shorthand: 'text-title-shorthand-small',
  includes: ['title', 'small'],
})

export const Subtitle = createTypographyStory({
  label: 'Subtitle',
  shorthand: 'text-subtitle-shorthand',
  includes: ['subtitle'],
})

export const BodyLarge = createTypographyStory({
  label: 'Body large',
  shorthand: 'text-body-shorthand-large',
  includes: ['body', 'large'],
})

export const BodyMedium = createTypographyStory({
  label: 'Body medium',
  shorthand: 'text-body-shorthand-medium',
  includes: ['body', 'medium'],
})

export const BodySmall = createTypographyStory({
  label: 'Body small',
  shorthand: 'text-body-shorthand-small',
  includes: ['body', 'small'],
})

export const Caption = createTypographyStory({
  label: 'Caption',
  shorthand: 'text-caption-shorthand',
  includes: ['caption'],
})

export const CodeBlock = createTypographyStory({
  label: 'Code block',
  shorthand: 'text-codeBlock-shorthand',
  includes: ['codeBlock'],
})

export const InlineCodeBlock = createTypographyStory({
  label: 'Inline code block',
  shorthand: 'text-codeInline-shorthand',
  includes: ['codeInline'],
})

export const Overview = () => {
  const filteredData = allTextTokens().filter(item => item.id.includes('shorthand'))

  return (
    <Table.Container>
      <h1 className="sr-only" id="type">
        Overview
      </h1>
      <DataTable
        aria-labelledby="type"
        data={filteredData}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            width: 'auto',
            renderCell: row => (
              <TypographyDemo fontShorthand={row.name}>
                {row.name.split('-')[1]}
                {row.name.includes('large')
                  ? ' large'
                  : row.name.includes('small')
                    ? ' small'
                    : row.name.includes('medium')
                      ? ' medium'
                      : undefined}
              </TypographyDemo>
            ),
          },
          {
            header: 'Description',
            field: 'description' as const,
            rowHeader: true,
            width: 'auto',
            renderCell: (row: {description: string}) => (
              <p
                style={{
                  fontSize: 'var(--text-body-size-medium)',
                  lineHeight: 'var(--text-body-lineHeight-medium)',
                  fontWeight: 'var(--base-text-weight-normal)',
                  marginBottom: '0',
                }}
              >
                {row.description}
              </p>
            ),
          },
        ]}
      />
    </Table.Container>
  )
}
