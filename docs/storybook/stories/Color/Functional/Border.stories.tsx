import React from 'react'
import {ColorPreview} from '../../Components/ColorPreview'

export default {
  title: 'Color/Functional/Border',
  parameters: {
    storyType: 'swatch',
  },
}

const borderColors = [
  'borderColor-default',
  'borderColor-muted',
  'borderColor-decorative',
  'borderColor-emphasis',
  'borderColor-disabled',
]

export const Border = () => {
  return (
    <>
      {borderColors.map(color => (
        <ColorPreview color={color} borderColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}
