import React from 'react'
import {ColorScale} from '../../StorybookComponents/ColorScale/ColorScale'

export default {
  title: 'Color/Base/Scales',
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
}

const bgColors = [
  'color-scale-black',
  'color-scale-white',
  'color-scale-gray-0',
  'color-scale-gray-1',
  'color-scale-gray-2',
  'color-scale-gray-3',
  'color-scale-gray-4',
  'color-scale-gray-5',
  'color-scale-gray-6',
  'color-scale-gray-7',
  'color-scale-gray-8',
  'color-scale-gray-9',
  'color-scale-blue-0',
  'color-scale-blue-1',
  'color-scale-blue-2',
  'color-scale-blue-3',
  'color-scale-blue-4',
  'color-scale-blue-5',
  'color-scale-blue-6',
  'color-scale-blue-7',
  'color-scale-blue-8',
  'color-scale-blue-9',
  'color-scale-green-0',
  'color-scale-green-1',
  'color-scale-green-2',
  'color-scale-green-3',
  'color-scale-green-4',
  'color-scale-green-5',
  'color-scale-green-6',
  'color-scale-green-7',
  'color-scale-green-8',
  'color-scale-green-9',
  'color-scale-yellow-0',
  'color-scale-yellow-1',
  'color-scale-yellow-2',
  'color-scale-yellow-3',
  'color-scale-yellow-4',
  'color-scale-yellow-5',
  'color-scale-yellow-6',
  'color-scale-yellow-7',
  'color-scale-yellow-8',
  'color-scale-yellow-9',
  'color-scale-orange-0',
  'color-scale-orange-1',
  'color-scale-orange-2',
  'color-scale-orange-3',
  'color-scale-orange-4',
  'color-scale-orange-5',
  'color-scale-orange-6',
  'color-scale-orange-7',
  'color-scale-orange-8',
  'color-scale-orange-9',
  'color-scale-red-0',
  'color-scale-red-1',
  'color-scale-red-2',
  'color-scale-red-3',
  'color-scale-red-4',
  'color-scale-red-5',
  'color-scale-red-6',
  'color-scale-red-7',
  'color-scale-red-8',
  'color-scale-red-9',
  'color-scale-purple-0',
  'color-scale-purple-1',
  'color-scale-purple-2',
  'color-scale-purple-3',
  'color-scale-purple-4',
  'color-scale-purple-5',
  'color-scale-purple-6',
  'color-scale-purple-7',
  'color-scale-purple-8',
  'color-scale-purple-9',
  'color-scale-pink-0',
  'color-scale-pink-1',
  'color-scale-pink-2',
  'color-scale-pink-3',
  'color-scale-pink-4',
  'color-scale-pink-5',
  'color-scale-pink-6',
  'color-scale-pink-7',
  'color-scale-pink-8',
  'color-scale-pink-9',
  'color-scale-coral-0',
  'color-scale-coral-1',
  'color-scale-coral-2',
  'color-scale-coral-3',
  'color-scale-coral-4',
  'color-scale-coral-5',
  'color-scale-coral-6',
  'color-scale-coral-7',
  'color-scale-coral-8',
  'color-scale-coral-9',
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

export const Gray = () => {
  const grayColors = bgColors.filter(color => color.includes('gray'))
  return (
    <div>
      {grayColors.map(color => (
        <>
          <ColorScale color={color} key={color} />
        </>
      ))}
    </div>
  )
}
Gray.tags = ['excludeSnapshot']

export const Blue = () => {
  const blueColors = bgColors.filter(color => color.includes('blue'))
  return (
    <div>
      {blueColors.map(color => (
        <>
          <ColorScale color={color} key={color} />
        </>
      ))}
    </div>
  )
}
Blue.tags = ['excludeSnapshot']

export const Green = () => {
  const greenColors = bgColors.filter(color => color.includes('green'))
  return (
    <div>
      {greenColors.map(color => (
        <>
          <ColorScale color={color} key={color} />
        </>
      ))}
    </div>
  )
}
Green.tags = ['excludeSnapshot']

export const Yellow = () => {
  const yellowColors = bgColors.filter(color => color.includes('yellow'))
  return (
    <div>
      {yellowColors.map(color => (
        <>
          <ColorScale color={color} key={color} />
        </>
      ))}
    </div>
  )
}
Yellow.tags = ['excludeSnapshot']

export const Orange = () => {
  const orangeColors = bgColors.filter(color => color.includes('orange'))
  return (
    <div>
      {orangeColors.map(color => (
        <>
          <ColorScale color={color} key={color} />
        </>
      ))}
    </div>
  )
}
Orange.tags = ['excludeSnapshot']

export const Red = () => {
  const redColors = bgColors.filter(color => color.includes('red'))
  return (
    <div>
      {redColors.map(color => (
        <>
          <ColorScale color={color} key={color} />
        </>
      ))}
    </div>
  )
}
Red.tags = ['excludeSnapshot']

export const Purple = () => {
  const purpleColors = bgColors.filter(color => color.includes('purple'))
  return (
    <div>
      {purpleColors.map(color => (
        <>
          <ColorScale color={color} key={color} />
        </>
      ))}
    </div>
  )
}
Purple.tags = ['excludeSnapshot']

export const Pink = () => {
  const pinkColors = bgColors.filter(color => color.includes('pink'))
  return (
    <div>
      {pinkColors.map(color => (
        <>
          <ColorScale color={color} key={color} />
        </>
      ))}
    </div>
  )
}
Pink.tags = ['excludeSnapshot']

export const Coral = () => {
  const coralColors = bgColors.filter(color => color.includes('coral'))
  return (
    <div>
      {coralColors.map(color => (
        <>
          <ColorScale color={color} key={color} />
        </>
      ))}
    </div>
  )
}
Coral.tags = ['excludeSnapshot']

export const Black = () => {
  const blackColors = bgColors.filter(color => color.includes('black'))
  return (
    <div>
      {blackColors.map(color => (
        <>
          <ColorScale color={color} key={color} />
        </>
      ))}
    </div>
  )
}
Black.tags = ['excludeSnapshot']

export const White = () => {
  const whiteColors = bgColors.filter(color => color.includes('white'))
  return (
    <div>
      {whiteColors.map(color => (
        <>
          <ColorScale color={color} key={color} />
        </>
      ))}
    </div>
  )
}
White.tags = ['excludeSnapshot']
