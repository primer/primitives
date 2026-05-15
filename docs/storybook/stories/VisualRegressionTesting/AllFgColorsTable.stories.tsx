import React from 'react'
import {themeTokens} from '../utilities/withColorTokens'
import {ThemeTokenTable} from './ThemeTokenTable'

const fgColorTokenNames = Object.keys(themeTokens.light).filter(name => name.startsWith('fgColor-'))

export default {
  title: 'VRT/All fgColor themes',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {showPanel: false},
  },
  tags: ['snapshotLight'],
}

export const AllFgColorThemesInOneTable = () => {
  return <ThemeTokenTable title="All fgColor themes" tokenNames={fgColorTokenNames} previewKind="foreground" />
}
