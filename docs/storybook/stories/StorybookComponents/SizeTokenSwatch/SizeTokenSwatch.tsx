import React from 'react'
import './SizeTokenSwatch.css'

export type SizeTokenSwatchProps = {
  size?: string
}

export const SizeTokenSwatch = ({size}: SizeTokenSwatchProps) => {
  return (
    <div
      className="TokenSwatch--size"
      style={{
        width: `var(--${size})`,
      }}
    ></div>
  )
}

export default SizeTokenSwatch

SizeTokenSwatch.displayName = 'SizeTokenSwatch'
