import React from 'react'
import './ControlSizeDemo.css'

export type ControlSizeDemoProps = {
  paddingInline?: string
  paddingBlock?: string
  gap?: string
  blockSize?: string
  lineBox?: string
  highlightPaddingBlock?: boolean
  highlightPaddingInline?: boolean
  highlightGap?: boolean
  highlightLineBoxHeight?: boolean
  highlightHeight?: boolean
}

export const ControlSizeDemo = ({
  paddingInline,
  paddingBlock,
  gap,
  blockSize,
  lineBox,
  highlightPaddingBlock,
  highlightPaddingInline,
  highlightGap,
  highlightLineBoxHeight,
  highlightHeight,
}: ControlSizeDemoProps) => {
  return (
    <div
      className="ControlDemo"
      style={{
        height: `var(--${blockSize})`,
        background: highlightHeight ? 'var(--docs-demo-bgColor-muted)' : undefined,
      }}
    >
      <span
        className="paddingTop"
        style={{
          height: `var(--${paddingBlock})`,
          backgroundImage: highlightPaddingBlock ? 'var(--demo-highlight)' : undefined,
        }}
      />
      <span
        className="paddingLeft"
        style={{
          width: `var(--${paddingInline})`,
          backgroundImage: highlightPaddingInline ? 'var(--demo-highlight)' : undefined,
        }}
      />
      <span className="icon" />
      <span
        className="gap"
        style={{
          width: `var(--${gap})`,
          backgroundImage: highlightGap ? 'var(--demo-highlight)' : undefined,
        }}
      />
      <span
        className="controlLabel"
        style={{
          lineHeight: `var(--${lineBox})`,
          background: highlightLineBoxHeight ? 'var(--docs-demo-bgColor-muted)' : undefined,
        }}
      >
        label
      </span>
      <span
        className="paddingRight"
        style={{
          width: `var(--${paddingInline})`,
          backgroundImage: highlightPaddingInline ? 'var(--demo-highlight)' : undefined,
        }}
      />
      <span
        className="paddingBottom"
        style={{
          height: `var(--${paddingBlock})`,
          backgroundImage: highlightPaddingBlock ? 'var(--demo-highlight)' : undefined,
        }}
      />
    </div>
  )
}

export default ControlSizeDemo

ControlSizeDemo.displayName = 'ControlSizeDemo'
