import React from 'react'
// eslint-disable-next-line import/no-unresolved
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {ColorPreview} from '../ColorPreview'

export default {
  title: 'Functional/Text',
  component: ColorPreview
} as ComponentMeta<typeof ColorPreview>

const fgColors = ['product-color-done-emphasis']

export const TextColors: ComponentStory<typeof ColorPreview> = () => {
  return (
    <>
      {fgColors.map(color => (
        <ColorPreview color={color} textColor key={color} />
      ))}
    </>
  )
}
