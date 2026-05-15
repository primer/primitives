import React from 'react'
import {themeTokens} from '../utilities/withColorTokens'
import {ThemeTokenTable} from './ThemeTokenTable'

const dataTokenNames = Object.keys(themeTokens.light).filter(name => name.startsWith('data-'))

export default {
  title: 'VRT/All data themes',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {showPanel: false},
  },
  tags: ['snapshotLight'],
}

export const AllDataThemesInOneTable = () => {
  return <ThemeTokenTable title="All data themes" tokenNames={dataTokenNames} previewKind="mixed" />
}
