import React from 'react'
import {ColorScale} from '../../StorybookComponents/ColorScale/ColorScale'

export default {
  title: 'Color/Base/Display Scales',
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
}

const getDisplayColorScale = (colorName: string) =>
  Array.from({length: 10}, (_, i) => `base-display-color-${colorName}-${i}`)

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
  const colors = getDisplayColorScale(colorName)
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
