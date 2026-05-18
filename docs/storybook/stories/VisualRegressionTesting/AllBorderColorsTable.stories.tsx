import React from 'react'
import {themeTokens} from '../utilities/withColorTokens'
import {ThemeTokenTable} from './ThemeTokenTable'

const borderColorTokenNames = Object.keys(themeTokens.light).filter(name => name.startsWith('borderColor-'))

export default {
  title: 'VRT/borderColor',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {showPanel: false},
  },
  tags: ['snapshotLight'],
}

export const AllBorderColorThemesInOneTable = () => {
  return <ThemeTokenTable title="borderColor" tokenNames={borderColorTokenNames} previewKind="border" />
}
