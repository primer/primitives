import React from 'react'
import {ColorScale} from '../../StorybookComponents/ColorScale/ColorScale'

export default {
  title: 'Color/Base Scales',
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
}

const getColorScale = (colorName: string, length: number) =>
  Array.from({length}, (_, i) => `base-color-${colorName}-${i}`)

const Color = ({color: colorName, length = 12, border}: {color: string; length?: number; border?: boolean}) => (
  <div>
    {getColorScale(colorName, length).map(color => (
      <ColorScale color={color} border={border} key={color} />
    ))}
  </div>
)

export const AllScales = () => {
  return (
    <div className="ColorScale--grid">
      <Red />
      <Auburn />
      <Coral />
      <Orange />
      <Brown />
      <Yellow />
      <Lemon />
      <Olive />
      <Lime />
      <Green />
      <Pine />
      <Teal />
      <Cyan />
      <Blue />
      <Neutral />
      <Gray />
      <Indigo />
      <Purple />
      <Plum />
      <Pink />
      <Black />
      <White />
    </div>
  )
}
AllScales.tags = ['includeSnapshot']

// sorted by hue (0° → 360°)
export const Red = () => <Color color="red" />
export const Auburn = () => <Color color="auburn" />
export const Coral = () => <Color color="coral" />
export const Orange = () => <Color color="orange" />
export const Brown = () => <Color color="brown" />
export const Yellow = () => <Color color="yellow" />
export const Lemon = () => <Color color="lemon" />
export const Olive = () => <Color color="olive" />
export const Lime = () => <Color color="lime" />
export const Green = () => <Color color="green" />
export const Pine = () => <Color color="pine" />
export const Teal = () => <Color color="teal" />
export const Cyan = () => <Color color="cyan" />
export const Blue = () => <Color color="blue" />
export const Neutral = () => <Color color="neutral" />
export const Gray = () => <Color color="gray" />
export const Indigo = () => <Color color="indigo" />
export const Purple = () => <Color color="purple" />
export const Plum = () => <Color color="plum" />
export const Pink = () => <Color color="pink" />

export const Black = () => (
  <div>
    <ColorScale color="base-color-black" />
  </div>
)

export const White = () => (
  <div>
    <ColorScale color="base-color-white" border />
  </div>
)
