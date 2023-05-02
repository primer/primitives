import React from 'react'
import './SizeTokenSwatch.css'

export type SizeTokenSwatchProps = {
  size?: string
  borderRadius?: string
  borderSize?: string
  filled?: boolean
  boxShadow?: string
  outlineOffset?: string
  outlineWidth?: boolean
}

export const SizeTokenSwatch = ({
  size,
  borderRadius,
  borderSize,
  boxShadow,
  outlineOffset,
  filled,
  outlineWidth,
}: SizeTokenSwatchProps) => {
  return (
    <div
      className="TokenSwatch--size"
      style={{
        width: `var(--${size}, 3rem)`,
        borderRadius: `var(--${borderRadius}, var(--borderRadius-small))`,
        border: `solid var(--${borderSize}) var(--docs-demo-borderColor-emphasis)`,
        backgroundColor: filled ? 'var(--docs-demo-bgColor-emphasis)' : 'transparent',
        boxShadow: `var(--${boxShadow}) var(--docs-demo-borderColor-emphasis)`,
        outline:
          outlineOffset || outlineWidth
            ? `solid var(--outline-focus-width) var(--docs-demo-borderColor-emphasis)`
            : undefined,
        outlineOffset: `var(--${outlineOffset})`,
      }}
    ></div>
  )
}

export default SizeTokenSwatch

SizeTokenSwatch.displayName = 'SizeTokenSwatch'
