import React from 'react'
// eslint-disable-next-line import/no-unresolved
import type {ComponentMeta, ComponentStory} from '@storybook/react'
import {ColorPreview} from '../../Components/ColorPreview'

export default {
  title: 'Color/Functional/Foreground',
  component: ColorPreview,
  parameters: {
    storyType: 'swatch',
  },
} as ComponentMeta<typeof ColorPreview>

const fgColors = [
  'fgColor-default',
  'fgColor-muted',
  'fgColor-white',
  'fgColor-disabled',
  'fgColor-link-rest',
  'fgColor-accent',
  'fgColor-success',
  'fgColor-attention',
  'fgColor-severe',
  'fgColor-danger',
  'fgColor-open',
  'fgColor-closed',
  'fgColor-done',
  'fgColor-sponsors',
]

export const Foreground: ComponentStory<typeof ColorPreview> = () => {
  return (
    <>
      {fgColors.map(color => (
        <ColorPreview color={color} textColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}
