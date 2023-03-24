import React from 'react'
// eslint-disable-next-line import/no-unresolved
import type {ComponentMeta, ComponentStory} from '@storybook/react'
import {ColorPreview} from '../../Components/ColorPreview'

export default {
  title: 'Color/Patterns',
  component: ColorPreview,
  parameters: {
    storyType: 'swatch',
  },
} as ComponentMeta<typeof ColorPreview>

export const Avatar: ComponentStory<typeof ColorPreview> = () => {
  const bgColors = ['avatar-bgColor', 'avatarStack-fade-bgColor-default', 'avatarStack-fade-bgColor-muted']
  const borderColors = ['avatar-borderColor']

  return (
    <>
      {bgColors.map(color => (
        <ColorPreview color={color} bgColor key={color} canvasColor="bgColor-default" />
      ))}
      {borderColors.map(color => (
        <ColorPreview color={color} borderColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}

export const Control: ComponentStory<typeof ColorPreview> = () => {
  const bgColors = [
    'control-bgColor-rest',
    'control-bgColor-hover',
    'control-bgColor-active',
    'control-bgColor-selected',
    'control-bgColor-disabled',
    'control-danger-bgColor-hover',
    'control-danger-bgColor-active',
    'control-checked-bgColor-rest',
    'control-checked-bgColor-hover',
    'control-checked-bgColor-active',
    'control-checked-bgColor-disabled',
    'controlTrack-bgColor-rest',
    'controlTrack-bgColor-hover',
    'controlTrack-bgColor-active',
    'controlTrack-bgColor-disabled',
    'controlKnob-bgColor-rest',
    'controlKnob-bgColor-disabled',
  ]
  const fgColors = [
    'control-fgColor-rest',
    'control-fgColor-placeholder',
    'control-fgColor-disabled',
    'control-iconColor-rest',
    'control-danger-fgColor-hover',
    'control-checked-fgColor-rest',
    'control-checked-bgColor-disabled',
  ]
  const borderColors = [
    'control-borderColor-rest',
    'control-borderColor-emphasis',
    'control-borderColor-selected',
    'control-borderColor-disabled',
    'control-borderColor-success',
    'control-borderColor-danger',
    'control-borderColor-warning',
    'control-checked-borderColor-rest',
    'control-checked-borderColor-hover',
    'control-checked-borderColor-active',
    'control-checked-borderColor-disabled',
    'controlTrack-borderColor-rest',
    'controlTrack-borderColor-disabled',
    'controlKnob-borderColor-rest',
    'controlKnob-borderColor-disabled',
  ]

  return (
    <>
      <h1>Background</h1>
      {bgColors.map(color => (
        <ColorPreview color={color} bgColor key={color} canvasColor="bgColor-default" />
      ))}
      <h1>Border</h1>
      {borderColors.map(color => (
        <ColorPreview color={color} borderColor key={color} canvasColor="bgColor-default" />
      ))}
      <h1>Foreground</h1>
      {fgColors.map(color => (
        <ColorPreview color={color} textColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}

export const Counter: ComponentStory<typeof ColorPreview> = () => {
  const borderColors = ['counter-borderColor']

  return (
    <>
      {borderColors.map(color => (
        <ColorPreview color={color} borderColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}

export const Button: ComponentStory<typeof ColorPreview> = () => {
  const bgColors = [
    'button-default-bgColor-rest',
    'button-default-bgColor-hover',
    'button-default-bgColor-active',
    'button-primary-bgColor-rest',
    'button-primary-bgColor-hover',
    'button-primary-bgColor-active',
    'button-primary-bgColor-disabled',
    'button-danger-bgColor-rest',
    'button-danger-bgColor-hover',
    'button-danger-bgColor-active',
    'button-danger-bgColor-disabled',
    'button-invisible-bgColor-rest',
    'button-invisible-bgColor-hover',
    'button-invisible-bgColor-active',
    'button-outline-bgColor-rest',
    'button-outline-bgColor-hover',
    'button-outline-bgColor-active',
    'button-outline-bgColor-disabled',
    'buttonCounter-default-bgColor-rest',
    'buttonCounter-primary-bgColor-rest',
    'buttonCounter-outline-bgColor-rest',
    'buttonCounter-outline-bgColor-hover',
    'buttonCounter-outline-bgColor-disabled',
    'buttonCounter-danger-bgColor-rest',
    'buttonCounter-danger-bgColor-hover',
    'buttonCounter-danger-bgColor-disabled',
  ]
  const fgColors = [
    'button-default-fgColor-rest',
    'button-primary-fgColor-rest',
    'button-primary-fgColor-disabled',
    'button-primary-iconColor-rest',
    'button-danger-fgColor-rest',
    'button-danger-fgColor-disabled',
    'button-danger-fgColor-hover',
    'button-danger-fgColor-active',
    'button-danger-iconColor-rest',
    'button-danger-iconColor-hover',
    'button-invisible-fgColor-rest',
    'button-outline-fgColor-rest',
    'button-outline-fgColor-disabled',
    'button-outline-fgColor-hover',
    'button-outline-fgColor-active',
  ]
  const borderColors = [
    'button-default-borderColor-rest',
    'button-primary-borderColor-rest',
    'button-invisible-borderColor-rest',
    'button-outline-borderColor-rest',
    'button-danger-borderColor-rest',
  ]

  return (
    <>
      <h1>Background</h1>
      {bgColors.map(color => (
        <ColorPreview color={color} bgColor key={color} canvasColor="bgColor-default" />
      ))}
      <h1>Border</h1>
      {borderColors.map(color => (
        <ColorPreview color={color} borderColor key={color} canvasColor="bgColor-default" />
      ))}
      <h1>Foreground</h1>
      {fgColors.map(color => (
        <ColorPreview color={color} textColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}

export const Focus: ComponentStory<typeof ColorPreview> = () => {
  const borderColors = ['focus-outlineColor']

  return (
    <>
      {borderColors.map(color => (
        <ColorPreview color={color} borderColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}

export const Header: ComponentStory<typeof ColorPreview> = () => {
  const bgColors = ['header-bgColor']

  return (
    <>
      {bgColors.map(color => (
        <ColorPreview color={color} bgColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}

export const Menu: ComponentStory<typeof ColorPreview> = () => {
  const bgColors = ['menu-bgColor-active']

  return (
    <>
      {bgColors.map(color => (
        <ColorPreview color={color} bgColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}

export const Overlay: ComponentStory<typeof ColorPreview> = () => {
  const bgColors = ['overlay-bgColor', 'overlay-backdrop-bgColor']

  return (
    <>
      {bgColors.map(color => (
        <ColorPreview color={color} bgColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}

export const SelectMenu: ComponentStory<typeof ColorPreview> = () => {
  const bgColors = ['selectMenu-bgColor-active']
  const borderColors = ['selectMenu-borderColor']

  return (
    <>
      {bgColors.map(color => (
        <ColorPreview color={color} bgColor key={color} canvasColor="bgColor-default" />
      ))}
      {borderColors.map(color => (
        <ColorPreview color={color} borderColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}

export const SideNav: ComponentStory<typeof ColorPreview> = () => {
  const bgColors = ['sideNav-bgColor-selected']

  return (
    <>
      {bgColors.map(color => (
        <ColorPreview color={color} bgColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}

export const TimelineBadge: ComponentStory<typeof ColorPreview> = () => {
  const bgColors = ['timelineBadge-bgColor']

  return (
    <>
      {bgColors.map(color => (
        <ColorPreview color={color} bgColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}

export const UnderlineNav: ComponentStory<typeof ColorPreview> = () => {
  const borderColors = ['underlineNav-borderColor-active', 'underlineNav-borderColor-hover']
  const fgColors = ['underlineNav-iconColor-rest']

  return (
    <>
      {borderColors.map(color => (
        <ColorPreview color={color} borderColor key={color} canvasColor="bgColor-default" />
      ))}
      {fgColors.map(color => (
        <ColorPreview color={color} textColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}
