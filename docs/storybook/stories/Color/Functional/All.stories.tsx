import React from 'react'
import {ColorPreview} from '../../StorybookComponents/ColorPreview/ColorPreview'
import {Background} from './Background.stories'
import {Border} from './Border.stories'
import {Foreground} from './Foreground.stories'
import {Shadows} from './Shadows.stories'
import {Neutral, Accent, Success, Attention, Severe, Danger, Open, Closed, Done, Sponsors} from './Roles.stories'

export default {
  title: 'Color/Functional/All',
  parameters: {
    storyType: 'swatch',
    controls: {hideNoControlsWarning: true},
  },
}

export const All = () => {
  return (
    <>
      <Background />
      <Border />
      <Foreground />
      <Shadows />
      <Neutral />
      <Accent />
      <Success />
      <Attention />
      <Severe />
      <Danger />
      <Open />
      <Closed />
      <Done />
      <Sponsors />
    </>
  )
}
