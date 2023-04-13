import React from 'react'
import './SizeTokenSwatch.css'

export type SizeTokenSwatchProps = {
  size?: string
  borderRadius?: string
  borderSize?: string
  filled?: boolean
  boxShadow?: string
  outlineOffset?: string
}

export const SizeTokenSwatch = ({
  size,
  borderRadius,
  borderSize,
  boxShadow,
  outlineOffset,
  filled,
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
        outline: outlineOffset ? `solid 2px var(--base-color-purple-5)` : undefined,
        outlineOffset: `var(--${outlineOffset})`,
      }}
    ></div>
  )
}

export default SizeTokenSwatch

SizeTokenSwatch.displayName = 'SizeTokenSwatch'
