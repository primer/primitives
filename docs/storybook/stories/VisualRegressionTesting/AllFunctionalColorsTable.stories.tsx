import React from 'react'
import {themeTokens} from '../utilities/withColorTokens'
import {ThemeTokenTable} from './ThemeTokenTable'

const excludedPrefixes = ['bgColor-', 'fgColor-', 'borderColor-', 'display-', 'data-', 'shadow-']

const functionalTokenNames = Object.keys(themeTokens.light).filter(
  name => !excludedPrefixes.some(prefix => name.startsWith(prefix)),
)

export default {
  title: 'VRT/Other functional colors',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {showPanel: false},
  },
  tags: ['snapshotLight'],
}

export const OtherFunctionalColors = () => {
  return <ThemeTokenTable title="Other functional colors" tokenNames={functionalTokenNames} previewKind="mixed" />
}
