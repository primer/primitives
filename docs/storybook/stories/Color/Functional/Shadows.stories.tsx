import React from 'react'
// eslint-disable-next-line import/no-unresolved
import {ColorPreview} from '../../StorybookComponents/ColorPreview/ColorPreview'

export default {
  title: 'Color/Functional/Shadows',
  parameters: {
    storyType: 'swatch',
    controls: {hideNoControlsWarning: true},
  },
}

const shadows = [
  'shadow-inset',
  'shadow-resting-xsmall',
  'shadow-resting-small',
  'shadow-resting-medium',
  'shadow-floating-small',
  'shadow-floating-medium',
  'shadow-floating-large',
  'shadow-floating-xlarge',
]

export const Shadows = () => {
  return (
    <div className="ColorPreview-container">
      {shadows.map(shadow => (
        <ColorPreview color={shadow} shadow key={shadow} canvasColor="bgColor-default" shadowBg="bgColor-default" />
      ))}
    </div>
  )
}
