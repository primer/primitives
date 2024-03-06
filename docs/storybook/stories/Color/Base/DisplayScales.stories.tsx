import React from 'react'
import {ColorScale} from '../../StorybookComponents/ColorScale/ColorScale'

export default {
  title: 'Color/Display/Scales',
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
}

const colors = (colorName: string) => [...Array(10).keys()].map(i => `base-display-color-${colorName}-${i}`)

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
