import React from 'react'
import {toHex, readableColor} from 'color2k'
import './ColorScale.css'

export type ColorScaleProps = {
  colorBaseVariable: string
  steps: number
}

const ColorBlock = ({color}: {color: string;}) => {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [hex, setHex] = React.useState<string | null>(null)
  const [textColor, setTextColor] = React.useState<string>('currentColor')

  React.useEffect(() => {
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
  }, [color])

  return (<div
      className="ColorScale--block"
      style={{
        backgroundColor: `var(--${color})`,
        color: textColor,
      }}
      data-color-scale
      ref={ref}
    >      <p data-token-name>{color}</p>
      {hex ? <p data-token-name>{hex}</p> : null}
    </div>)
}

export const ColorScaleByName = ({colorBaseVariable, steps}: ColorScaleProps) => {

  return (
    <div>
    {new Array(steps).fill(null).map((_, index) => {
      const color = `${colorBaseVariable}-${index}`
      return (
        <ColorBlock key={color} color={color} />)
    })}
  </div>)
}


// export default ColorScale

ColorScaleByName.displayName = 'ColorScaleByName'
