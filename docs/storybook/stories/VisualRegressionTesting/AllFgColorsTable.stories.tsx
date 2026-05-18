import React from 'react'
import {themeTokens} from '../utilities/withColorTokens'
import {ThemeTokenTable} from './ThemeTokenTable'

const fgColorTokenNames = Object.keys(themeTokens.light).filter(name => name.startsWith('fgColor-'))

export default {
  title: 'VRT/fgColor',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {showPanel: false},
  },
  tags: ['snapshotLight'],
}

export const AllFgColorThemesInOneTable = () => {
  return <ThemeTokenTable title="fgColor" tokenNames={fgColorTokenNames} previewKind="foreground" />
}
