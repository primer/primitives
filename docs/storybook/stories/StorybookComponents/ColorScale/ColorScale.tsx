import React from 'react'
import {toHex, readableColor} from 'color2k'
import './ColorScale.css'

export type ColorScaleProps = {
  color?: string
  border?: boolean
}

export const ColorScale = ({color, border}: ColorScaleProps) => {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [hex, setHex] = React.useState<string | null>(null)
  const [textColor, setTextColor] = React.useState<string>('currentColor')

  const recalculate = React.useCallback(() => {
    setTimeout(() => {
      if (ref.current === null) {
        return
      }
      const style = getComputedStyle(ref.current)
      const rgb = style.getPropertyValue('background-color')
      const asHex = toHex(rgb)
      setHex(asHex)
      setTextColor(asHex ? readableColor(asHex) : 'currentColor')
    }, 0)
  }, [])

  React.useEffect(() => {
    recalculate()
  }, [color, recalculate])

  React.useEffect(() => {
    const observer = new MutationObserver(recalculate)
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-color-mode', 'data-light-theme', 'data-dark-theme'],
    })
    return () => observer.disconnect()
  }, [recalculate])

  return (
    <div
      className="ColorScale--block"
      style={{
        backgroundColor: `var(--${color})`,
        color: textColor,
        border: border ? '1px solid var(--borderColor-default)' : 'none',
      }}
      data-color-scale
      ref={ref}
    >
      <p data-token-name>{color}</p>
      {hex ? <p data-token-name>{hex}</p> : null}
    </div>
  )
}

// export default ColorScale

ColorScale.displayName = 'ColorScale'
