import React from 'react'
import {ColorScale} from '../../StorybookComponents/ColorScale/ColorScale'

export default {
  title: 'Color/Base/Scales',
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
      <Neutral />
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

export const Neutral = () => <Color color="neutral" />
export const Blue = () => <Color color="blue" />
export const Green = () => <Color color="green" />
export const Yellow = () => <Color color="yellow" />
export const Orange = () => <Color color="orange" />
export const Red = () => <Color color="red" />
export const Purple = () => <Color color="purple" />
export const Pink = () => <Color color="pink" />
export const Coral = () => <Color color="coral" />

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
