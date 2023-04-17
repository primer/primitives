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
        border: `solid var(--${borderSize}) var(--base-color-purple-5)`,
        backgroundColor: filled ? 'var(--base-color-purple-5)' : 'transparent',
        boxShadow: `var(--${boxShadow}) var(--base-color-purple-5)`,
        outline:
          outlineOffset || outlineWidth ? `solid var(--outline-focus-width) var(--base-color-purple-5)` : undefined,
        outlineOffset: `var(--${outlineOffset})`,
      }}
    ></div>
  )
}

export default SizeTokenSwatch

SizeTokenSwatch.displayName = 'SizeTokenSwatch'
