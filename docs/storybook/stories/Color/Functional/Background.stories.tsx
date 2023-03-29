import React from 'react'
import {ColorPreview} from '../../Components/ColorPreview'

export default {
  title: 'Color/Functional/Background',
  parameters: {
    storyType: 'swatch',
  },
}

const bgColors = ['bgColor-default', 'bgColor-muted', 'bgColor-disabled']

export const Background = () => {
  return (
    <>
      {bgColors.map(color => (
        <ColorPreview color={color} bgColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}
