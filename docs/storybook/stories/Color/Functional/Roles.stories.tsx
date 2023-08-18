import React from 'react'
import {ColorPreview} from '../../StorybookComponents/ColorPreview/ColorPreview'

export default {
  title: 'Color/Functional/Roles',
  parameters: {
    storyType: 'swatch',
    controls: {hideNoControlsWarning: true},
  },
}

export const Neutral = () => {
  return (
    <>
      <ColorPreview color={'fgColor-neutral'} textColor canvasColor="bgColor-default" />
      <ColorPreview color={'fgColor-neutral-onInverse'} textColor canvasColor="bgColor-inverse" />
      <ColorPreview color={'bgColor-neutral-muted'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-neutral-emphasis'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-neutral-muted'} borderColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-neutral-emphasis'} borderColor canvasColor="bgColor-default" />
    </>
  )
}

export const Accent = () => {
  return (
    <>
      <ColorPreview color={'fgColor-accent'} textColor canvasColor="bgColor-default" />
      <ColorPreview color={'fgColor-accent-onInverse'} textColor canvasColor="bgColor-inverse" />
      <ColorPreview color={'bgColor-accent-muted'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-accent-emphasis'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-accent-muted'} borderColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-accent-emphasis'} borderColor canvasColor="bgColor-default" />
    </>
  )
}

export const Success = () => {
  return (
    <>
      <ColorPreview color={'fgColor-success'} textColor canvasColor="bgColor-default" />
      <ColorPreview color={'fgColor-success-onInverse'} textColor canvasColor="bgColor-inverse" />
      <ColorPreview color={'bgColor-success-muted'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-success-emphasis'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-success-muted'} borderColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-success-emphasis'} borderColor canvasColor="bgColor-default" />
    </>
  )
}

export const Attention = () => {
  return (
    <>
      <ColorPreview color={'fgColor-attention'} textColor canvasColor="bgColor-default" />
      <ColorPreview color={'fgColor-attention-onInverse'} textColor canvasColor="bgColor-inverse" />
      <ColorPreview color={'bgColor-attention-muted'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-attention-emphasis'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-attention-muted'} borderColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-attention-emphasis'} borderColor canvasColor="bgColor-default" />
    </>
  )
}

export const Severe = () => {
  return (
    <>
      <ColorPreview color={'fgColor-severe'} textColor canvasColor="bgColor-default" />
      <ColorPreview color={'fgColor-severe-onInverse'} textColor canvasColor="bgColor-inverse" />
      <ColorPreview color={'bgColor-severe-muted'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-severe-emphasis'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-severe-muted'} borderColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-severe-emphasis'} borderColor canvasColor="bgColor-default" />
    </>
  )
}

export const Danger = () => {
  return (
    <>
      <ColorPreview color={'fgColor-danger'} textColor canvasColor="bgColor-default" />
      <ColorPreview color={'fgColor-danger-onInverse'} textColor canvasColor="bgColor-inverse" />
      <ColorPreview color={'bgColor-danger-muted'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-danger-emphasis'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-danger-muted'} borderColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-danger-emphasis'} borderColor canvasColor="bgColor-default" />
    </>
  )
}

export const Open = () => {
  return (
    <>
      <ColorPreview color={'fgColor-open'} textColor canvasColor="bgColor-default" />
      <ColorPreview color={'fgColor-open-onInverse'} textColor canvasColor="bgColor-inverse" />
      <ColorPreview color={'bgColor-open-muted'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-open-emphasis'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-open-muted'} borderColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-open-emphasis'} borderColor canvasColor="bgColor-default" />
    </>
  )
}

export const Closed = () => {
  return (
    <>
      <ColorPreview color={'fgColor-closed'} textColor canvasColor="bgColor-default" />
      <ColorPreview color={'fgColor-closed-onInverse'} textColor canvasColor="bgColor-inverse" />
      <ColorPreview color={'bgColor-closed-muted'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-closed-emphasis'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-closed-muted'} borderColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-closed-emphasis'} borderColor canvasColor="bgColor-default" />
    </>
  )
}

export const Done = () => {
  return (
    <>
      <ColorPreview color={'fgColor-done'} textColor canvasColor="bgColor-default" />
      <ColorPreview color={'fgColor-done-onInverse'} textColor canvasColor="bgColor-inverse" />
      <ColorPreview color={'bgColor-done-muted'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-done-emphasis'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-done-muted'} borderColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-done-emphasis'} borderColor canvasColor="bgColor-default" />
    </>
  )
}

export const Sponsors = () => {
  return (
    <>
      <ColorPreview color={'fgColor-sponsors'} textColor canvasColor="bgColor-default" />
      <ColorPreview color={'fgColor-sponsors-onInverse'} textColor canvasColor="bgColor-inverse" />
      <ColorPreview color={'bgColor-sponsors-muted'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-sponsors-emphasis'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-sponsors-muted'} borderColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-sponsors-emphasis'} borderColor canvasColor="bgColor-default" />
    </>
  )
}
