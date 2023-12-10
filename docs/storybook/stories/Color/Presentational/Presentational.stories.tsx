import React from 'react'
import {ColorScale} from '../../StorybookComponents/ColorScale/ColorScale'

export default {
  title: 'Color/Presentational',
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
}

const bgColors = [
  'color-presentational-gray-0',
  'color-presentational-gray-1',
  'color-presentational-gray-2',
  'color-presentational-gray-3',
  'color-presentational-gray-4',
  'color-presentational-gray-5',
  'color-presentational-gray-6',
  'color-presentational-gray-7',
  'color-presentational-gray-8',
  'color-presentational-gray-9',
  'color-presentational-brown-0',
  'color-presentational-brown-1',
  'color-presentational-brown-2',
  'color-presentational-brown-3',
  'color-presentational-brown-4',
  'color-presentational-brown-5',
  'color-presentational-brown-6',
  'color-presentational-brown-7',
  'color-presentational-brown-8',
  'color-presentational-brown-9',
  'color-presentational-auburn-0',
  'color-presentational-auburn-1',
  'color-presentational-auburn-2',
  'color-presentational-auburn-3',
  'color-presentational-auburn-4',
  'color-presentational-auburn-5',
  'color-presentational-auburn-6',
  'color-presentational-auburn-7',
  'color-presentational-auburn-8',
  'color-presentational-auburn-9',
  'color-presentational-amber-0',
  'color-presentational-amber-1',
  'color-presentational-amber-2',
  'color-presentational-amber-3',
  'color-presentational-amber-4',
  'color-presentational-amber-5',
  'color-presentational-amber-6',
  'color-presentational-amber-7',
  'color-presentational-amber-8',
  'color-presentational-amber-9',
  'color-presentational-blue-0',
  'color-presentational-blue-1',
  'color-presentational-blue-2',
  'color-presentational-blue-3',
  'color-presentational-blue-4',
  'color-presentational-blue-5',
  'color-presentational-blue-6',
  'color-presentational-blue-7',
  'color-presentational-blue-8',
  'color-presentational-blue-9',
  'color-presentational-green-0',
  'color-presentational-green-1',
  'color-presentational-green-2',
  'color-presentational-green-3',
  'color-presentational-green-4',
  'color-presentational-green-5',
  'color-presentational-green-6',
  'color-presentational-green-7',
  'color-presentational-green-8',
  'color-presentational-green-9',
  'color-presentational-yellow-0',
  'color-presentational-yellow-1',
  'color-presentational-yellow-2',
  'color-presentational-yellow-3',
  'color-presentational-yellow-4',
  'color-presentational-yellow-5',
  'color-presentational-yellow-6',
  'color-presentational-yellow-7',
  'color-presentational-yellow-8',
  'color-presentational-yellow-9',
  'color-presentational-lemon-0',
  'color-presentational-lemon-1',
  'color-presentational-lemon-2',
  'color-presentational-lemon-3',
  'color-presentational-lemon-4',
  'color-presentational-lemon-5',
  'color-presentational-lemon-6',
  'color-presentational-lemon-7',
  'color-presentational-lemon-8',
  'color-presentational-lemon-9',
  'color-presentational-lime-0',
  'color-presentational-lime-1',
  'color-presentational-lime-2',
  'color-presentational-lime-3',
  'color-presentational-lime-4',
  'color-presentational-lime-5',
  'color-presentational-lime-6',
  'color-presentational-lime-7',
  'color-presentational-lime-8',
  'color-presentational-lime-9',
  'color-presentational-orange-0',
  'color-presentational-orange-1',
  'color-presentational-orange-2',
  'color-presentational-orange-3',
  'color-presentational-orange-4',
  'color-presentational-orange-5',
  'color-presentational-orange-6',
  'color-presentational-orange-7',
  'color-presentational-orange-8',
  'color-presentational-orange-9',
  'color-presentational-red-0',
  'color-presentational-red-1',
  'color-presentational-red-2',
  'color-presentational-red-3',
  'color-presentational-red-4',
  'color-presentational-red-5',
  'color-presentational-red-6',
  'color-presentational-red-7',
  'color-presentational-red-8',
  'color-presentational-red-9',
  'color-presentational-purple-0',
  'color-presentational-purple-1',
  'color-presentational-purple-2',
  'color-presentational-purple-3',
  'color-presentational-purple-4',
  'color-presentational-purple-5',
  'color-presentational-purple-6',
  'color-presentational-purple-7',
  'color-presentational-purple-8',
  'color-presentational-purple-9',
  'color-presentational-olive-0',
  'color-presentational-olive-1',
  'color-presentational-olive-2',
  'color-presentational-olive-3',
  'color-presentational-olive-4',
  'color-presentational-olive-5',
  'color-presentational-olive-6',
  'color-presentational-olive-7',
  'color-presentational-olive-8',
  'color-presentational-olive-9',
  'color-presentational-plum-0',
  'color-presentational-plum-1',
  'color-presentational-plum-2',
  'color-presentational-plum-3',
  'color-presentational-plum-4',
  'color-presentational-plum-5',
  'color-presentational-plum-6',
  'color-presentational-plum-7',
  'color-presentational-plum-8',
  'color-presentational-plum-9',
  'color-presentational-pink-0',
  'color-presentational-pink-1',
  'color-presentational-pink-2',
  'color-presentational-pink-3',
  'color-presentational-pink-4',
  'color-presentational-pink-5',
  'color-presentational-pink-6',
  'color-presentational-pink-7',
  'color-presentational-pink-8',
  'color-presentational-pink-9',
  'color-presentational-coral-0',
  'color-presentational-coral-1',
  'color-presentational-coral-2',
  'color-presentational-coral-3',
  'color-presentational-coral-4',
  'color-presentational-coral-5',
  'color-presentational-coral-6',
  'color-presentational-coral-7',
  'color-presentational-coral-8',
  'color-presentational-coral-9',
]
const colors = (colorName: string) => [...Array(10).keys()].map(i => `color-presentational-${colorName}-${i}`)

const ShowColorScale = ({color: colorName}: {color: string}) => {
  return (
    <div>
      {colors(colorName.toLowerCase()).map(color => (
        <>
          <ColorScale color={color} key={color} />
        </>
      ))}
    </div>
  )
}

export const AllScales = () => {
  return (
    <div className="ColorScale--grid">
      <Gray />
      <Brown />
      <Auburn />
      <Orange />
      <Amber />
      <Yellow />
      <Lemon />
      <Olive />
      <Lime />
      <Green />
      <Pine />
      <Teal />
      <Cyan />
      <Blue />
      <Indigo />
      <Purple />
      <Plum />
      <Pink />
      <Red />
      <Coral />
    </div>
  )
}

export const Gray = () => <ShowColorScale color="gray" />
Gray.tags = ['excludeSnapshot']

export const Brown = () => <ShowColorScale color="Brown" />
Brown.tags = ['excludeSnapshot']

export const Auburn = () => <ShowColorScale color="Auburn" />
Auburn.tags = ['excludeSnapshot']

export const Amber = () => <ShowColorScale color="Amber" />
Amber.tags = ['excludeSnapshot']

export const Orange = () => <ShowColorScale color="Orange" />
Orange.tags = ['excludeSnapshot']

export const Yellow = () => <ShowColorScale color="Yellow" />
Yellow.tags = ['excludeSnapshot']

export const Lemon = () => <ShowColorScale color="Lemon" />
Lemon.tags = ['excludeSnapshot']

export const Olive = () => <ShowColorScale color="Olive" />
Olive.tags = ['excludeSnapshot']

export const Lime = () => <ShowColorScale color="Lime" />
Lime.tags = ['excludeSnapshot']

export const Green = () => <ShowColorScale color="Green" />
Green.tags = ['excludeSnapshot']

export const Pine = () => <ShowColorScale color="Pine" />
Pine.tags = ['excludeSnapshot']

export const Teal = () => <ShowColorScale color="Teal" />
Teal.tags = ['excludeSnapshot']

export const Cyan = () => <ShowColorScale color="Cyan" />
Cyan.tags = ['excludeSnapshot']

export const Blue = () => <ShowColorScale color="Blue" />
Blue.tags = ['excludeSnapshot']

export const Indigo = () => <ShowColorScale color="Indigo" />
Indigo.tags = ['excludeSnapshot']

export const Purple = () => <ShowColorScale color="Purple" />
Purple.tags = ['excludeSnapshot']

export const Plum = () => <ShowColorScale color="Plum" />
Plum.tags = ['excludeSnapshot']

export const Pink = () => <ShowColorScale color="Pink" />
Pink.tags = ['excludeSnapshot']

export const Red = () => <ShowColorScale color="Red" />
Red.tags = ['excludeSnapshot']

export const Coral = () => <ShowColorScale color="Coral" />
Coral.tags = ['excludeSnapshot']
