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
    <div className="ColorPreview-container">
      <ColorPreview color={'fgColor-neutral'} textColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-neutral-muted'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-neutral-emphasis'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-neutral-muted'} borderColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-neutral-emphasis'} borderColor canvasColor="bgColor-default" />
    </div>
  )
}

export const Accent = () => {
  return (
    <div className="ColorPreview-container">
      <ColorPreview color={'fgColor-accent'} textColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-accent-muted'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-accent-emphasis'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-accent-muted'} borderColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-accent-emphasis'} borderColor canvasColor="bgColor-default" />
    </div>
  )
}

export const Success = () => {
  return (
    <div className="ColorPreview-container">
      <ColorPreview color={'fgColor-success'} textColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-success-muted'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-success-emphasis'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-success-muted'} borderColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-success-emphasis'} borderColor canvasColor="bgColor-default" />
    </div>
  )
}

export const Attention = () => {
  return (
    <div className="ColorPreview-container">
      <ColorPreview color={'fgColor-attention'} textColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-attention-muted'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-attention-emphasis'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-attention-muted'} borderColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-attention-emphasis'} borderColor canvasColor="bgColor-default" />
    </div>
  )
}

export const Severe = () => {
  return (
    <div className="ColorPreview-container">
      <ColorPreview color={'fgColor-severe'} textColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-severe-muted'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-severe-emphasis'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-severe-muted'} borderColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-severe-emphasis'} borderColor canvasColor="bgColor-default" />
    </div>
  )
}

export const Danger = () => {
  return (
    <div className="ColorPreview-container">
      <ColorPreview color={'fgColor-danger'} textColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-danger-muted'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-danger-emphasis'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-danger-muted'} borderColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-danger-emphasis'} borderColor canvasColor="bgColor-default" />
    </div>
  )
}

export const Open = () => {
  return (
    <div className="ColorPreview-container">
      <ColorPreview color={'fgColor-open'} textColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-open-muted'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-open-emphasis'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-open-muted'} borderColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-open-emphasis'} borderColor canvasColor="bgColor-default" />
    </div>
  )
}

export const Closed = () => {
  return (
    <div className="ColorPreview-container">
      <ColorPreview color={'fgColor-closed'} textColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-closed-muted'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-closed-emphasis'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-closed-muted'} borderColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-closed-emphasis'} borderColor canvasColor="bgColor-default" />
    </div>
  )
}

export const Done = () => {
  return (
    <div className="ColorPreview-container">
      <ColorPreview color={'fgColor-done'} textColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-done-muted'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-done-emphasis'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-done-muted'} borderColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-done-emphasis'} borderColor canvasColor="bgColor-default" />
    </div>
  )
}

export const Sponsors = () => {
  return (
    <div className="ColorPreview-container">
      <ColorPreview color={'fgColor-sponsors'} textColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-sponsors-muted'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'bgColor-sponsors-emphasis'} bgColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-sponsors-muted'} borderColor canvasColor="bgColor-default" />
      <ColorPreview color={'borderColor-sponsors-emphasis'} borderColor canvasColor="bgColor-default" />
    </div>
  )
}
