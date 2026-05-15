import React from 'react'
import {themeTokens} from '../utilities/withColorTokens'
import {ThemeTokenTable} from './ThemeTokenTable'

const borderColorTokenNames = Object.keys(themeTokens.light).filter(name => name.startsWith('borderColor-'))

export default {
  title: 'VRT/All borderColor themes',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {showPanel: false},
  },
  tags: ['snapshotLight'],
}

export const AllBorderColorThemesInOneTable = () => {
  return <ThemeTokenTable title="All borderColor themes" tokenNames={borderColorTokenNames} previewKind="border" />
}
