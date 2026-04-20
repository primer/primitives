import React from 'react'
import {InlineCode} from '../StorybookComponents/InlineCode/InlineCode'
import {formatTokenValue} from './formatTokenValue'

/**
 * Reusable column definitions for token DataTables.
 * All size and typography stories share these same column shapes.
 */

export const tokenColumn = ({cssVar = false}: {cssVar?: boolean} = {}) => ({
  header: 'Token',
  field: 'name' as const,
  rowHeader: true,
  renderCell: (row: {name: string}) => <InlineCode value={row.name} copyClipboard cssVar={cssVar} />,
})

export const outputValueColumn = () => ({
  header: 'Output value',
  field: 'value' as const,
  rowHeader: true,
  renderCell: (row: {value: unknown}) => <p>{formatTokenValue(row.value)}</p>,
})

export const sourceValueColumn = () => ({
  header: 'Source value',
  field: 'original' as const,
  rowHeader: true,
  renderCell: (row: {original: {$value: unknown}}) => <p>{formatTokenValue(row.original.$value)}</p>,
})
