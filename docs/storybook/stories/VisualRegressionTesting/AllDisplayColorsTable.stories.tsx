import React from 'react'
import {themeTokens} from '../utilities/withColorTokens'
import {ThemeTokenTable} from './ThemeTokenTable'

const displayTokenNames = Object.keys(themeTokens.light).filter(
  name => name.startsWith('display-') && !name.includes('-scale-'),
)

function displayNamesFor(families: string[]) {
  return displayTokenNames.filter(name => families.some(family => name.startsWith(`display-${family}-`)))
}

const displayGroups = [
  {id: 'warm-1', title: 'Display colors warm one', families: ['auburn', 'blue', 'brown']},
  {id: 'warm-2', title: 'Display colors warm two', families: ['coral', 'cyan', 'gray']},
  {id: 'mid-1', title: 'Display colors mid one', families: ['green', 'indigo', 'lemon', 'lime']},
  {id: 'mid-2', title: 'Display colors mid two', families: ['olive', 'orange', 'pine', 'pink']},
  {
    id: 'bright',
    title: 'Display colors bright',
    families: ['plum', 'purple', 'red', 'teal', 'white', 'black', 'yellow'],
  },
] as const

export default {
  title: 'VRT/Display themes',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {showPanel: false},
  },
}

export const DisplayColorsWarmOne = () => {
  return (
    <ThemeTokenTable
      title={displayGroups[0].title}
      tokenNames={displayNamesFor(displayGroups[0].families)}
      previewKind="mixed"
    />
  )
}

export const DisplayColorsWarmTwo = () => {
  return (
    <ThemeTokenTable
      title={displayGroups[1].title}
      tokenNames={displayNamesFor(displayGroups[1].families)}
      previewKind="mixed"
    />
  )
}

export const DisplayColorsMidOne = () => {
  return (
    <ThemeTokenTable
      title={displayGroups[2].title}
      tokenNames={displayNamesFor(displayGroups[2].families)}
      previewKind="mixed"
    />
  )
}

export const DisplayColorsMidTwo = () => {
  return (
    <ThemeTokenTable
      title={displayGroups[3].title}
      tokenNames={displayNamesFor(displayGroups[3].families)}
      previewKind="mixed"
    />
  )
}

export const DisplayColorsBright = () => {
  return (
    <ThemeTokenTable
      title={displayGroups[4].title}
      tokenNames={displayNamesFor(displayGroups[4].families)}
      previewKind="mixed"
    />
  )
}

DisplayColorsWarmOne.tags = ['snapshotLight']
DisplayColorsWarmTwo.tags = ['snapshotLight']
DisplayColorsMidOne.tags = ['snapshotLight']
DisplayColorsMidTwo.tags = ['snapshotLight']
DisplayColorsBright.tags = ['snapshotLight']
