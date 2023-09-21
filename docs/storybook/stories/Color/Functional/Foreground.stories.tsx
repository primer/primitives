import React from 'react'
import {ColorPreview} from '../../StorybookComponents/ColorPreview/ColorPreview'

export default {
  title: 'Color/Functional/Foreground',
  parameters: {
    storyType: 'swatch',
    controls: {hideNoControlsWarning: true},
  },
}

const fgColors = [
  'fgColor-default',
  'fgColor-muted',
  'fgColor-onEmphasis',
  'fgColor-onInverse',
  'fgColor-disabled',
  'fgColor-link',
]

export const Foreground = () => {
  return (
    <>
      {fgColors.map(color => (
        <ColorPreview color={color} textColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}
