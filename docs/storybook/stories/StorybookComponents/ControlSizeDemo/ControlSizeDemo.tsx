import React from 'react'
import './ControlSizeDemo.css'

export type ControlSizeDemoProps = {
  paddingLeft?: string
  paddingRight?: string
  paddingTop?: string
  paddingBottom?: string
  gap?: string
  blockSize?: string
  lineBox?: string
  modifier?: string
  highlightPaddingBottom?: boolean
  highlightPaddingTop?: boolean
  highlightPaddingRight?: boolean
  highlightPaddingLeft?: boolean
  highlightGap?: boolean
  highlightLineBoxHeight?: boolean
  highlightHeight?: boolean
}

export const ControlSizeDemo = ({
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  gap,
  blockSize,
  lineBox,
  modifier,
  highlightPaddingBottom,
  highlightPaddingTop,
  highlightPaddingRight,
  highlightPaddingLeft,
  highlightGap,
  highlightLineBoxHeight,
  highlightHeight,
}: ControlSizeDemoProps) => {
  return (
    <div
      className="ControlDemo"
      style={{
        height: `var(--${blockSize})`,
        backgroundImage: highlightHeight ? 'var(--demo-highlight)' : undefined,
      }}
    >
      <span
        className="paddingTop"
        style={{
          height: `var(--${paddingTop})`,
          backgroundImage: highlightPaddingTop ? 'var(--demo-highlight)' : undefined,
        }}
      />
      <span
        className="paddingLeft"
        style={{
          width: `var(--${paddingLeft}${modifier})`,
          backgroundImage: highlightPaddingLeft ? 'var(--demo-highlight)' : undefined,
        }}
      />
      <span className="icon" />
      <span
        style={{
          width: `var(--${gap})`,
          backgroundImage: highlightGap ? 'var(--demo-highlight)' : undefined,
        }}
      />
      <span
        className="label"
        style={{
          lineHeight: `var(--${lineBox})`,
          backgroundImage: highlightLineBoxHeight ? 'var(--demo-highlight)' : undefined,
        }}
      >
        label
      </span>
      <span
        className="paddingRight"
        style={{
          width: `var(--${paddingRight}${modifier})`,
          backgroundImage: highlightPaddingRight ? 'var(--demo-highlight)' : undefined,
        }}
      />
      <span
        className="paddingBottom"
        style={{
          height: `var(--${paddingBottom})`,
          backgroundImage: highlightPaddingBottom ? 'var(--demo-highlight)' : undefined,
        }}
      />
    </div>
  )
}

export default ControlSizeDemo

ControlSizeDemo.displayName = 'ControlSizeDemo'
