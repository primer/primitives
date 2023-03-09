import React from 'react'
// import {readableColor} from 'color2k'
import './ColorPreview.css'

export type ColorScaleProps = {
  color?: string
}

export function ColorScale({color}: ColorScaleProps) {
  return (
    <div>
      <div style={{backgroundColor: `var(--${color})`, padding: '1rem'}} data-color-scale>
        {/* <p data-token-name style={{backgroundColor: readableColor(`var(--${color})`)}}>
          {color}
        </p> */}
        <p>hex</p>
      </div>
    </div>
  )
}

export default ColorScale

ColorScale.displayName = 'ColorScale'
