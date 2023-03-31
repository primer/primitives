import React from 'react'
import {ColorPreview} from '../../StorybookComponents/ColorPreview/ColorPreview'

export default {
  title: 'Color/Patterns',
  parameters: {
    storyType: 'swatch',
    controls: {hideNoControlsWarning: true},
  },
}

export const Avatar = () => {
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

export const Control = () => {
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

export const Counter = () => {
  const borderColors = ['counter-borderColor']

  return (
    <>
      {borderColors.map(color => (
        <ColorPreview color={color} borderColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}

export const Button = () => {
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

export const Focus = () => {
  const borderColors = ['focus-outlineColor']

  return (
    <>
      {borderColors.map(color => (
        <ColorPreview color={color} borderColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}

export const Header = () => {
  const bgColors = ['header-bgColor']

  return (
    <>
      {bgColors.map(color => (
        <ColorPreview color={color} bgColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}

export const Menu = () => {
  const bgColors = ['menu-bgColor-active']

  return (
    <>
      {bgColors.map(color => (
        <ColorPreview color={color} bgColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}

export const Overlay = () => {
  const bgColors = ['overlay-bgColor', 'overlay-backdrop-bgColor']

  return (
    <>
      {bgColors.map(color => (
        <ColorPreview color={color} bgColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}

export const SelectMenu = () => {
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

export const SideNav = () => {
  const bgColors = ['sideNav-bgColor-selected']

  return (
    <>
      {bgColors.map(color => (
        <ColorPreview color={color} bgColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}

export const TimelineBadge = () => {
  const bgColors = ['timelineBadge-bgColor']

  return (
    <>
      {bgColors.map(color => (
        <ColorPreview color={color} bgColor key={color} canvasColor="bgColor-default" />
      ))}
    </>
  )
}

export const UnderlineNav = () => {
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
