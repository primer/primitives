import React from 'react'
import {ColorScale} from '../../StorybookComponents/ColorScale/ColorScale'

export default {
  title: 'Color/Base/Display Scales',
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
}

const bgColors = [
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
  'base-display-color-indigo-0',
  'base-display-color-indigo-1',
  'base-display-color-indigo-2',
  'base-display-color-indigo-3',
  'base-display-color-indigo-4',
  'base-display-color-indigo-5',
  'base-display-color-indigo-6',
  'base-display-color-indigo-7',
  'base-display-color-indigo-8',
  'base-display-color-indigo-9',
  'base-display-color-blue-0',
  'base-display-color-blue-1',
  'base-display-color-blue-2',
  'base-display-color-blue-3',
  'base-display-color-blue-4',
  'base-display-color-blue-5',
  'base-display-color-blue-6',
  'base-display-color-blue-7',
  'base-display-color-blue-8',
  'base-display-color-blue-9',
  'base-display-color-cyan-0',
  'base-display-color-cyan-1',
  'base-display-color-cyan-2',
  'base-display-color-cyan-3',
  'base-display-color-cyan-4',
  'base-display-color-cyan-5',
  'base-display-color-cyan-6',
  'base-display-color-cyan-7',
  'base-display-color-cyan-8',
  'base-display-color-cyan-9',
  'base-display-color-teal-0',
  'base-display-color-teal-1',
  'base-display-color-teal-2',
  'base-display-color-teal-3',
  'base-display-color-teal-4',
  'base-display-color-teal-5',
  'base-display-color-teal-6',
  'base-display-color-teal-7',
  'base-display-color-teal-8',
  'base-display-color-teal-9',
  'base-display-color-pine-0',
  'base-display-color-pine-1',
  'base-display-color-pine-2',
  'base-display-color-pine-3',
  'base-display-color-pine-4',
  'base-display-color-pine-5',
  'base-display-color-pine-6',
  'base-display-color-pine-7',
  'base-display-color-pine-8',
  'base-display-color-pine-9',
  'base-display-color-green-0',
  'base-display-color-green-1',
  'base-display-color-green-2',
  'base-display-color-green-3',
  'base-display-color-green-4',
  'base-display-color-green-5',
  'base-display-color-green-6',
  'base-display-color-green-7',
  'base-display-color-green-8',
  'base-display-color-green-9',
  'base-display-color-lime-0',
  'base-display-color-lime-1',
  'base-display-color-lime-2',
  'base-display-color-lime-3',
  'base-display-color-lime-4',
  'base-display-color-lime-5',
  'base-display-color-lime-6',
  'base-display-color-lime-7',
  'base-display-color-lime-8',
  'base-display-color-lime-9',
  'base-display-color-olive-0',
  'base-display-color-olive-1',
  'base-display-color-olive-2',
  'base-display-color-olive-3',
  'base-display-color-olive-4',
  'base-display-color-olive-5',
  'base-display-color-olive-6',
  'base-display-color-olive-7',
  'base-display-color-olive-8',
  'base-display-color-olive-9',
  'base-display-color-lemon-0',
  'base-display-color-lemon-1',
  'base-display-color-lemon-2',
  'base-display-color-lemon-3',
  'base-display-color-lemon-4',
  'base-display-color-lemon-5',
  'base-display-color-lemon-6',
  'base-display-color-lemon-7',
  'base-display-color-lemon-8',
  'base-display-color-lemon-9',
  'base-display-color-yellow-0',
  'base-display-color-yellow-1',
  'base-display-color-yellow-2',
  'base-display-color-yellow-3',
  'base-display-color-yellow-4',
  'base-display-color-yellow-5',
  'base-display-color-yellow-6',
  'base-display-color-yellow-7',
  'base-display-color-yellow-8',
  'base-display-color-yellow-9',
  'base-display-color-orange-0',
  'base-display-color-orange-1',
  'base-display-color-orange-2',
  'base-display-color-orange-3',
  'base-display-color-orange-4',
  'base-display-color-orange-5',
  'base-display-color-orange-6',
  'base-display-color-orange-7',
  'base-display-color-orange-8',
  'base-display-color-orange-9',
  'base-display-color-amber-0',
  'base-display-color-amber-1',
  'base-display-color-amber-2',
  'base-display-color-amber-3',
  'base-display-color-amber-4',
  'base-display-color-amber-5',
  'base-display-color-amber-6',
  'base-display-color-amber-7',
  'base-display-color-amber-8',
  'base-display-color-amber-9',
  'base-display-color-red-0',
  'base-display-color-red-1',
  'base-display-color-red-2',
  'base-display-color-red-3',
  'base-display-color-red-4',
  'base-display-color-red-5',
  'base-display-color-red-6',
  'base-display-color-red-7',
  'base-display-color-red-8',
  'base-display-color-red-9',
  'base-display-color-purple-0',
  'base-display-color-purple-1',
  'base-display-color-purple-2',
  'base-display-color-purple-3',
  'base-display-color-purple-4',
  'base-display-color-purple-5',
  'base-display-color-purple-6',
  'base-display-color-purple-7',
  'base-display-color-purple-8',
  'base-display-color-purple-9',
  'base-display-color-plum-0',
  'base-display-color-plum-1',
  'base-display-color-plum-2',
  'base-display-color-plum-3',
  'base-display-color-plum-4',
  'base-display-color-plum-5',
  'base-display-color-plum-6',
  'base-display-color-plum-7',
  'base-display-color-plum-8',
  'base-display-color-plum-9',
  'base-display-color-pink-0',
  'base-display-color-pink-1',
  'base-display-color-pink-2',
  'base-display-color-pink-3',
  'base-display-color-pink-4',
  'base-display-color-pink-5',
  'base-display-color-pink-6',
  'base-display-color-pink-7',
  'base-display-color-pink-8',
  'base-display-color-pink-9',
  'base-display-color-coral-0',
  'base-display-color-coral-1',
  'base-display-color-coral-2',
  'base-display-color-coral-3',
  'base-display-color-coral-4',
  'base-display-color-coral-5',
  'base-display-color-coral-6',
  'base-display-color-coral-7',
  'base-display-color-coral-8',
  'base-display-color-coral-9',
  'base-display-color-brown-0',
  'base-display-color-brown-1',
  'base-display-color-brown-2',
  'base-display-color-brown-3',
  'base-display-color-brown-4',
  'base-display-color-brown-5',
  'base-display-color-brown-6',
  'base-display-color-brown-7',
  'base-display-color-brown-8',
  'base-display-color-brown-9',
  'base-display-color-auburn-0',
  'base-display-color-auburn-1',
  'base-display-color-auburn-2',
  'base-display-color-auburn-3',
  'base-display-color-auburn-4',
  'base-display-color-auburn-5',
  'base-display-color-auburn-6',
  'base-display-color-auburn-7',
  'base-display-color-auburn-8',
  'base-display-color-auburn-9',
]

export const AllScales = () => {
  return (
    <div className="ColorScale--grid">
      <Color color="gray" />
      <Color color="indigo" />
      <Color color="blue" />
      <Color color="cyan" />
      <Color color="teal" />
      <Color color="pine" />
      <Color color="green" />
      <Color color="lime" />
      <Color color="olive" />
      <Color color="lemon" />
      <Color color="yellow" />
      <Color color="orange" />
      <Color color="red" />
      <Color color="coral" />
      <Color color="pink" />
      <Color color="plum" />
      <Color color="purple" />
      <Color color="brown" />
      <Color color="auburn" />
    </div>
  )
}
AllScales.tags = ['includeSnapshot']

const Color = ({color: colorName}: {color: string}) => {
  const colors = bgColors.filter(color => color.includes(colorName))
  return (
    <div>
      {colors.map(color => (
        <ColorScale color={color} key={color} />
      ))}
    </div>
  )
}

export const Gray = () => <Color color="gray" />
export const Indigo = () => <Color color="indigo" />
export const Blue = () => <Color color="blue" />
export const Cyan = () => <Color color="cyan" />
export const Teal = () => <Color color="teal" />
export const Pine = () => <Color color="pine" />
export const Green = () => <Color color="green" />
export const Lime = () => <Color color="lime" />
export const Olive = () => <Color color="olive" />
export const Lemon = () => <Color color="lemon" />
export const Yellow = () => <Color color="yellow" />
export const Orange = () => <Color color="orange" />
export const Red = () => <Color color="red" />
export const Coral = () => <Color color="coral" />
export const Pink = () => <Color color="pink" />
export const Plum = () => <Color color="plum" />
export const Purple = () => <Color color="purple" />
export const Brown = () => <Color color="brown" />
export const Auburn = () => <Color color="auburn" />
