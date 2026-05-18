import React from 'react'
import {themeTokens} from '../utilities/withColorTokens'
import {ThemeTokenTable} from './ThemeTokenTable'

const shadowTokenNames = Object.keys(themeTokens.light).filter(name => name.startsWith('shadow-'))

export default {
  title: 'VRT/shadow',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {showPanel: false},
  },
  tags: ['snapshotLight'],
}

export const AllShadowThemesInOneTable = () => {
  return <ThemeTokenTable title="shadow" tokenNames={shadowTokenNames} previewKind="shadow" />
}
