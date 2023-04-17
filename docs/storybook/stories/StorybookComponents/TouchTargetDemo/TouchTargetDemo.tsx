import React from 'react'
import {InboxIcon} from '@primer/octicons-react'
import './TouchTargetDemo.css'

export type TouchTargetDemoProps = {
  size?: string
}

export const TouchTargetDemo = ({size}: TouchTargetDemoProps) => {
  return (
    <div
      className="TouchTargetDemo"
      style={{
        '--targetSize': `var(--${size})`,
      }}
    >
      <InboxIcon />
    </div>
  )
}

export default TouchTargetDemo

TouchTargetDemo.displayName = 'TouchTargetDemo'
