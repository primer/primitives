import React from 'react'
import {themeTokens} from '../utilities/withColorTokens'
import {ThemeTokenTable} from './ThemeTokenTable'

const dataTokenNames = Object.keys(themeTokens.light).filter(name => name.startsWith('data-'))

export default {
  title: 'VRT/data',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {showPanel: false},
  },
  tags: ['snapshotLight'],
}

export const AllDataThemesInOneTable = () => {
  return <ThemeTokenTable title="data" tokenNames={dataTokenNames} previewKind="mixed" />
}
