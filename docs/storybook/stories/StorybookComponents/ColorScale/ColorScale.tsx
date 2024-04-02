import React from 'react'
import {toHex, readableColor} from 'color2k'
import './ColorScale.css'
import {useTheme} from '@primer/react/lib-esm/ThemeProvider'

export type ColorScaleProps = {
  color?: string
  border?: boolean
}

export const ColorScale = ({color, border}: ColorScaleProps) => {
  const {resolvedColorScheme: theme} = useTheme()
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [hex, setHex] = React.useState<string | null>(null)
  const textColor = hex ? readableColor(hex) : 'currentColor'

  React.useEffect(() => {
    if (ref.current === null) {
      return
    }

    const style = getComputedStyle(ref.current)
    const rgb = style.getPropertyValue('background-color')
    setHex(toHex(rgb))
  }, [color, theme])

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
