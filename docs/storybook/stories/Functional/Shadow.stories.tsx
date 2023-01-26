import React from 'react'
// eslint-disable-next-line import/no-unresolved
import type {ComponentMeta, ComponentStory} from '@storybook/react'
import ShadowPreview from '../ShadowPreview'

export default {
  title: 'Functional/Shadow',
  component: ShadowPreview
} as ComponentMeta<typeof ShadowPreview>

const fills = ['ui-color-canvas-default', 'ui-color-canvas-subtle']

const borders = ['ui-color-border-default', 'ui-color-border-muted']

const shadows = [
  'ui-shadow-resting-xsmall',
  'ui-shadow-resting-small',
  'ui-shadow-resting-medium',
  'ui-shadow-floating-small',
  'ui-shadow-floating-medium',
  'ui-shadow-floating-large',
  'ui-shadow-highlight',
  'ui-shadow-inset'
]

const canvasColors = ['ui-color-canvas-default', 'ui-color-canvas-subtle']

export const ShadowColors: ComponentStory<typeof ShadowPreview> = () => {
  return (
    <>
      {shadows.map(shadow => (
        <ShadowPreview canvasColors={canvasColors} shadow={shadow} key={shadow} fills={fills} borders={borders} />
      ))}
    </>
  )
}
