import React from 'react'
import {ColorScale} from '../../StorybookComponents/ColorScale/ColorScale'

export default {
  title: 'Color/Base/Scales',
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
}

const tempNewBaseColors = [
  'base-display-color-grayWhite',
  'base-display-color-white',
  'base-display-color-black',
  'base-display-color-gray-0',
  'base-display-color-gray-1',
  'base-display-color-gray-2',
  'base-display-color-gray-3',
  'base-display-color-gray-4',
  'base-display-color-gray-5',
  'base-display-color-gray-6',
  'base-display-color-gray-7',
  'base-display-color-gray-8',
  'base-display-color-gray-9',
]

const bgColors = [
  'base-color-black',
  'base-color-white',
  'base-color-gray-0',
  'base-color-gray-1',
  'base-color-gray-2',
  'base-color-gray-3',
  'base-color-gray-4',
  'base-color-gray-5',
  'base-color-gray-6',
  'base-color-gray-7',
  'base-color-gray-8',
  'base-color-gray-9',
  'base-color-blue-0',
  'base-color-blue-1',
  'base-color-blue-2',
  'base-color-blue-3',
  'base-color-blue-4',
  'base-color-blue-5',
  'base-color-blue-6',
  'base-color-blue-7',
  'base-color-blue-8',
  'base-color-blue-9',
  'base-color-green-0',
  'base-color-green-1',
  'base-color-green-2',
  'base-color-green-3',
  'base-color-green-4',
  'base-color-green-5',
  'base-color-green-6',
  'base-color-green-7',
  'base-color-green-8',
  'base-color-green-9',
  'base-color-yellow-0',
  'base-color-yellow-1',
  'base-color-yellow-2',
  'base-color-yellow-3',
  'base-color-yellow-4',
  'base-color-yellow-5',
  'base-color-yellow-6',
  'base-color-yellow-7',
  'base-color-yellow-8',
  'base-color-yellow-9',
  'base-color-orange-0',
  'base-color-orange-1',
  'base-color-orange-2',
  'base-color-orange-3',
  'base-color-orange-4',
  'base-color-orange-5',
  'base-color-orange-6',
  'base-color-orange-7',
  'base-color-orange-8',
  'base-color-orange-9',
  'base-color-red-0',
  'base-color-red-1',
  'base-color-red-2',
  'base-color-red-3',
  'base-color-red-4',
  'base-color-red-5',
  'base-color-red-6',
  'base-color-red-7',
  'base-color-red-8',
  'base-color-red-9',
  'base-color-purple-0',
  'base-color-purple-1',
  'base-color-purple-2',
  'base-color-purple-3',
  'base-color-purple-4',
  'base-color-purple-5',
  'base-color-purple-6',
  'base-color-purple-7',
  'base-color-purple-8',
  'base-color-purple-9',
  'base-color-pink-0',
  'base-color-pink-1',
  'base-color-pink-2',
  'base-color-pink-3',
  'base-color-pink-4',
  'base-color-pink-5',
  'base-color-pink-6',
  'base-color-pink-7',
  'base-color-pink-8',
  'base-color-pink-9',
  'base-color-coral-0',
  'base-color-coral-1',
  'base-color-coral-2',
  'base-color-coral-3',
  'base-color-coral-4',
  'base-color-coral-5',
  'base-color-coral-6',
  'base-color-coral-7',
  'base-color-coral-8',
  'base-color-coral-9',
]

export const AllScales = () => {
  return (
    <div className="ColorScale--grid">
      <Gray />
      <Blue />

      <Green />
      <Yellow />

      <Orange />
      <Red />

      <Purple />
      <Pink />

      <Coral />
      <Black />
      <White />
    </div>
  )
}
AllScales.tags = ['includeSnapshot']

export const Gray = () => {
  const grayColors = bgColors.filter(color => color.includes('gray-'))
  return (
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
      <div>
        {grayColors.map(color => (
          <ColorScale color={color} key={color} />
        ))}
      </div>
      <div style={{display: 'flex', flexDirection: 'column-reverse'}}>
        {tempNewBaseColors.map(color => (
          <ColorScale color={color} key={color} />
        ))}
      </div>
    </div>
  )
}

export const Blue = () => {
  const blueColors = bgColors.filter(color => color.includes('blue'))
  return (
    <div>
      {blueColors.map(color => (
        <ColorScale color={color} key={color} />
      ))}
    </div>
  )
}

export const Green = () => {
  const greenColors = bgColors.filter(color => color.includes('green'))
  return (
    <div>
      {greenColors.map(color => (
        <ColorScale color={color} key={color} />
      ))}
    </div>
  )
}

export const Yellow = () => {
  const yellowColors = bgColors.filter(color => color.includes('yellow'))
  return (
    <div>
      {yellowColors.map(color => (
        <ColorScale color={color} key={color} />
      ))}
    </div>
  )
}

export const Orange = () => {
  const orangeColors = bgColors.filter(color => color.includes('orange'))
  return (
    <div>
      {orangeColors.map(color => (
        <ColorScale color={color} key={color} />
      ))}
    </div>
  )
}

export const Red = () => {
  const redColors = bgColors.filter(color => color.includes('red'))
  return (
    <div>
      {redColors.map(color => (
        <ColorScale color={color} key={color} />
      ))}
    </div>
  )
}

export const Purple = () => {
  const purpleColors = bgColors.filter(color => color.includes('purple'))
  return (
    <div>
      {purpleColors.map(color => (
        <ColorScale color={color} key={color} />
      ))}
    </div>
  )
}

export const Pink = () => {
  const pinkColors = bgColors.filter(color => color.includes('pink'))
  return (
    <div>
      {pinkColors.map(color => (
        <ColorScale color={color} key={color} />
      ))}
    </div>
  )
}

export const Coral = () => {
  const coralColors = bgColors.filter(color => color.includes('coral'))
  return (
    <div>
      {coralColors.map(color => (
        <ColorScale color={color} key={color} />
      ))}
    </div>
  )
}

export const Black = () => {
  const blackColors = bgColors.filter(color => color.includes('black'))
  return (
    <div>
      {blackColors.map(color => (
        <ColorScale color={color} key={color} />
      ))}
    </div>
  )
}

export const White = () => {
  const whiteColors = bgColors.filter(color => color.includes('white'))
  return (
    <div>
      {whiteColors.map(color => (
        <ColorScale color={color} border key={color} />
      ))}
    </div>
  )
}
