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
    <>
      {shadows.map(shadow => (
        <ColorPreview color={shadow} shadow key={shadow} canvasColor="bgColor-default" shadowBg="bgColor-default" />
      ))}

      <ColorPreview
        color="shadow-inset"
        shadow
        key="shadow-inset"
        canvasColor="bgColor-muted"
        shadowBg="bgColor-default"
        style={{border: `1px solid var(--borderColor-default)`}}
      />
      <ColorPreview
        color="shadow-highlight"
        shadow
        key="shadow-highlight"
        canvasColor="bgColor-default"
        shadowBg="bgColor-accent-emphasis"
        style={{border: `1px solid var(--borderColor-muted)`}}
      />
    </>
  )
}
