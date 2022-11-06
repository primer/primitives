import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {ColorPreview} from '../ColorPreview'

export default {
  title: 'Functional/Text',
  component: ColorPreview
} as ComponentMeta<typeof ColorPreview>

// export const TextColors = <ColorPreview color="--product-color-fg-default" textColor />

export const TextColors: ComponentStory<typeof ColorPreview> = () => (
  <ColorPreview color="product-color-fg-default" textColor />
)
