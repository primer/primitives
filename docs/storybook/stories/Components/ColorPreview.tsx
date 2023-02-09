import React from 'react'
import './ColorPreview.css'

export type ColorPreviewProps = {
  textColor?: boolean
  borderColor?: boolean
  bgColor?: boolean
  canvasColor?: string
  color?: string
  bgColorBorder?: string
}

export function ColorPreview({textColor, borderColor, bgColor, canvasColor, color, bgColorBorder}: ColorPreviewProps) {
  return (
    <div>
      <div className="ColorPreview" style={{backgroundColor: `var(--${canvasColor})`}}>
        {textColor && (
          <p style={{color: `var(--${color})`}} data-text>
            Aa
          </p>
        )}
        {borderColor && <div style={{borderColor: `var(--${color})`}} data-border></div>}
        {bgColor && (
          <div style={{backgroundColor: `var(--${color})`, border: `solid 1px var(--${bgColorBorder})`}} data-bg></div>
        )}
      </div>
      <p data-token-name>{color}</p>
    </div>
  )
}

export default ColorPreview

ColorPreview.displayName = 'ColorPreview'
