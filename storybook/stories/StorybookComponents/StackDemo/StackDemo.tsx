import React from 'react'
import './StackDemo.css'

export type StackDemoProps = {
  gap?: string
  padding?: string
}

export const StackDemo = ({padding, gap}: StackDemoProps) => {
  return (
    <>
      {gap && (
        <div
          className="StackDemo-gap"
          style={{
            gap: `var(--${gap})`,
          }}
        >
          <span className="StackDemo-solid" />
          <span className="StackDemo-solid" />
          <span className="StackDemo-solid" />
        </div>
      )}
      {padding && (
        <div
          className="StackDemo-padding"
          style={{
            padding: `var(--${padding})`,
          }}
        >
          <span className="StackDemo-solid--full" />
        </div>
      )}
    </>
  )
}

export default StackDemo

StackDemo.displayName = 'StackDemo'
