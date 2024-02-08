import React from 'react'
import {ColorPreview} from '../../StorybookComponents/ColorPreview/ColorPreview'

export default {
  title: 'Color/Functional/Border',
  parameters: {
    storyType: 'swatch',
    controls: {hideNoControlsWarning: true},
  },
}

const borderColors = [
  'borderColor-default',
  'borderColor-muted',
  'borderColor-emphasis',
  'borderColor-disabled',
  'borderColor-transparent',
]

export const Border = () => {
  return (
    <div className="ColorPreview-container">
      {borderColors.map(color => (
        <ColorPreview color={color} borderColor key={color} canvasColor="bgColor-default" />
      ))}
    </div>
  )
}
