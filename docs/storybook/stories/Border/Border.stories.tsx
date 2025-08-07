import React from 'react'
// eslint-disable-next-line import/extensions
import ColorPreview from '../StorybookComponents/ColorPreview/ColorPreview'

export default {
  title: 'Borders/Standard',
  parameters: {
    storyType: 'swatch',
    controls: {hideNoControlsWarning: true},
    tags: ['snapshotLight'],
  },
}

const borders = ['border-default', 'border-muted', 'border-emphasis', 'border-disabled', 'border-transparent']

export const Standard = () => {
  return (
    <>
      {borders.map(border => (
        <ColorPreview key={border} color={border} border canvasColor="bgColor-default" />
      ))}
    </>
  )
}

const roleBorders = [
  'accent',
  'success',
  'open',
  'danger',
  'closed',
  'attention',
  'severe',
  'done',
  'upsell',
  'sponsors',
  'neutral',
].flatMap(border => [`border-${border}-emphasis`, `border-${border}-muted`])

export const Roles = () => {
  return (
    <>
      {roleBorders.map(border => (
        <ColorPreview key={border} color={border} border canvasColor="bgColor-default" />
      ))}
    </>
  )
}
