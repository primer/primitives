import React from 'react'
import './ColorTokenSwatch.css'

export type ColorTokenSwatchProps = {
  textColor?: string
  borderColor?: string
  bgColor?: string
  shadowColor?: string
  outlineColor?: string
  selectionColor?: string
  gradientStops?: Record<string, number>[]
  gradientAngle?: number
  size?: 'default' | 'large'
}

export function ColorTokenSwatch({
  textColor,
  borderColor,
  bgColor,
  shadowColor,
  outlineColor,
  selectionColor,
  gradientStops,
  gradientAngle = 180,
  size = 'default',
}: ColorTokenSwatchProps) {
  return (
    <span data-size={size}>
      {textColor && (
        <p style={{color: `var(--${textColor})`}} className="ColorTokenSwatch-text">
          Aa
        </p>
      )}
      {borderColor && <div style={{borderColor: `var(--${borderColor})`}} className="ColorTokenSwatch-border"></div>}
      {bgColor && <div style={{backgroundColor: `var(--${bgColor})`}} className="ColorTokenSwatch-bg"></div>}
      {gradientStops && (
        <div
          style={{
            background: `linear-gradient(${gradientAngle}deg, ${gradientStops.map(({color, position}) => `${color} ${position * 100}%`).join(', ')})`,
          }}
          className="ColorTokenSwatch-bg"
        ></div>
      )}
      {shadowColor && <div style={{boxShadow: `var(--${shadowColor})`}} className="ColorTokenSwatch-shadow"></div>}
      {outlineColor && (
        <div style={{outlineColor: `var(--${outlineColor})`}} className="ColorTokenSwatch-outline"></div>
      )}
      {selectionColor && (
        <div className="ColorTokenSwatch-selection">
          <span className="ColorTokenSwatch-selection--text">Aa</span>
        </div>
      )}
    </span>
  )
}

export default ColorTokenSwatch

ColorTokenSwatch.displayName = 'ColorTokenSwatch'
