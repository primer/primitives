import React from 'react'
import {themeTokens} from '../utilities/withColorTokens'
import {ThemeTokenTable} from './ThemeTokenTable'

const displayFamilies = [
  'auburn',
  'blue',
  'brown',
  'coral',
  'cyan',
  'gray',
  'green',
  'lemon',
  'lime',
  'olive',
  'orange',
  'pine',
  'pink',
  'plum',
  'purple',
  'red',
  'teal',
  'white',
  'black',
  'yellow',
]

const displayTokenNames = Object.keys(themeTokens.light).filter(
  name => name.startsWith('display-') && !name.includes('-scale-'),
)

function displayNamesFor(families: string[]) {
  return displayTokenNames.filter(name => families.some(family => name.startsWith(`display-${family}-`)))
}

const displayGroups = [
  {id: 'warm-1', families: ['auburn', 'blue', 'brown', 'coral']},
  {id: 'cool-1', families: ['cyan', 'gray', 'green', 'lemon', 'lime']},
  {id: 'warm-2', families: ['olive', 'orange', 'pine', 'pink', 'plum']},
  {id: 'mixed-1', families: ['purple', 'red', 'teal', 'white', 'black', 'yellow']},
] as const

export default {
  title: 'VRT/Display themes',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {showPanel: false},
  },
}

export const DisplayColorsWarm = () => {
  return (
    <ThemeTokenTable
      title="Display colors warm"
      tokenNames={displayNamesFor(displayGroups[0].families)}
      previewKind="mixed"
    />
  )
}

export const DisplayColorsCool = () => {
  return (
    <ThemeTokenTable
      title="Display colors cool"
      tokenNames={displayNamesFor(displayGroups[1].families)}
      previewKind="mixed"
    />
  )
}

export const DisplayColorsWarmTwo = () => {
  return (
    <ThemeTokenTable
      title="Display colors warm two"
      tokenNames={displayNamesFor(displayGroups[2].families)}
      previewKind="mixed"
    />
  )
}

export const DisplayColorsMixed = () => {
  return (
    <ThemeTokenTable
      title="Display colors mixed"
      tokenNames={displayNamesFor(displayGroups[3].families)}
      previewKind="mixed"
    />
  )
}

DisplayColorsWarm.tags = ['snapshotLight']
DisplayColorsCool.tags = ['snapshotLight']
DisplayColorsWarmTwo.tags = ['snapshotLight']
DisplayColorsMixed.tags = ['snapshotLight']
