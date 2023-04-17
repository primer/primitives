import React from 'react'
import {PencilIcon, TrashIcon, InboxIcon} from '@primer/octicons-react'
import './ControlStackDemo.css'

export type ControlStackDemoProps = {
  gap?: string
  size?: string
}

export const ControlStackDemo = ({size, gap}: ControlStackDemoProps) => {
  return (
    <div
      className="ControlStackDemo"
      style={{
        gap: `var(--${gap})`,
      }}
    >
      <span className="ControlStackDemo--item" style={{width: `var(--${size})`, height: `var(--${size})`}}>
        <PencilIcon />
      </span>
      <span className="ControlStackDemo--item" style={{width: `var(--${size})`, height: `var(--${size})`}}>
        <TrashIcon />
      </span>
      <span className="ControlStackDemo--item" style={{width: `var(--${size})`, height: `var(--${size})`}}>
        <InboxIcon />
      </span>
    </div>
  )
}

export default ControlStackDemo

ControlStackDemo.displayName = 'ControlStackDemo'
