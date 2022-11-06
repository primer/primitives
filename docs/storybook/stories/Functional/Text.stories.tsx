import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {ColorPreview} from '../ColorPreview'

export default {
  title: 'Functional/Text',
  component: ColorPreview
} as ComponentMeta<typeof ColorPreview>

const fgColors = [
  'primer-color-text-default',
  'primer-color-text-subtle',
  'primer-color-text-onDefault',
  'primer-color-text-disabled ',
  'primer-color-text-accent',
  'primer-color-text-success',
  'primer-color-text-attention',
  'primer-color-text-severe',
  'primer-color-text-danger'
]

export const TextColors: ComponentStory<typeof ColorPreview> = () => {
  return (
    <>
      {fgColors.map(color => (
        <ColorPreview color={color} textColor />
      ))}
    </>
  )
}
