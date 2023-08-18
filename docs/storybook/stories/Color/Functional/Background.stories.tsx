import React from 'react'
import {ColorPreview} from '../../StorybookComponents/ColorPreview/ColorPreview'

export default {
  title: 'Color/Functional/Background',
  parameters: {
    storyType: 'swatch',
    controls: {hideNoControlsWarning: true},
  },
}

const bgColors = [
  'bgColor-default',
  'bgColor-muted',
  'bgColor-inset',
  'bgColor-disabled',
  'bgColor-emphasis',
  'bgColor-transparent',
  'bgColor-inverse',
]

export const Background = () => {
  return (
    <>
      {bgColors.map(color => (
        <ColorPreview color={color} bgColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}
