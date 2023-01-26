import React from 'react'
import './ColorPreview.css'

export type ColorPreviewProps = {
  textColor?: boolean
  borderColor?: boolean
  bgColor?: boolean
  canvasColor?: string
  color?: string
  shadow?: boolean
  shadowBg?: string
}

export function ColorPreview({
  textColor,
  borderColor,
  bgColor,
  canvasColor,
  color,
  shadow,
  shadowBg
}: ColorPreviewProps) {
  return (
    <>
      <div className="ColorPreview" style={{backgroundColor: `var(--${canvasColor})`}}>
        {textColor && (
          <p style={{color: `var(--${color})`}} data-text>
            Aa
          </p>
        )}
        {borderColor && <div style={{borderColor: `var(--${color})`}} data-border></div>}
        {bgColor && <div style={{backgroundColor: `var(--${color})`}} data-bg></div>}
        {shadow && <div style={{boxShadow: `var(--${color})`, backgroundColor: `var(--${shadowBg})`}} data-bg></div>}
      </div>
      <p>{color}</p>
    </>
  )
}

export default ColorPreview

ColorPreview.displayName = 'ColorPreview'
