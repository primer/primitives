import React from 'react'
import {themeTokens} from '../utilities/withColorTokens'
import {ThemeTokenTable} from './ThemeTokenTable'

const displayTokenNames = Object.keys(themeTokens.light).filter(name => name.startsWith('display-'))

export default {
  title: 'VRT/All display themes',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {showPanel: false},
  },
  tags: ['snapshotLight'],
}

export const AllDisplayThemesInOneTable = () => {
  return <ThemeTokenTable title="All display themes" tokenNames={displayTokenNames} previewKind="mixed" />
}
