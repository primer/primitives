import React from 'react'
import {toHex} from 'color2k'
import './CSSTokenSwatch.css'
import {hexToAlpha} from '../../utilities/alphaFromHex'

export type CSSTokenSwatchProps = {
  color?: string
  prevColor?: string
  shadow?: boolean
}

const hexHasChanged = (hex: string, prevColor?: string) => {
  if (prevColor === undefined) {
    return ''
  }
  const prevHexProperty = `${getComputedStyle(document.documentElement).getPropertyValue(`--${prevColor}`)}`.replace(
    / /g,
    '',
  )
  if (prevHexProperty === undefined || prevHexProperty === '') {
    return ''
  }

  const prevHex = toHex(prevHexProperty)

  return prevHex !== hex
}

export const CSSTokenSwatch = ({color, prevColor, shadow}: CSSTokenSwatchProps) => {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [hex, setHex] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (ref.current === null) {
      return
    }

    const style = getComputedStyle(ref.current)
    const rgb = style.getPropertyValue('background-color')
    setHex(rgb && rgb !== '' ? toHex(rgb) : null)
  }, [color])

  if (color === undefined || color === '') {
    return null
  }
  return (
    <div className="TokenSwatch">
      <div
        className="TokenSwatch--color"
        style={{
          backgroundColor: shadow ? undefined : `var(--${color})`,
          boxShadow: shadow ? `var(--${color})` : 'none',
        }}
        ref={ref}
      ></div>
      {color ? <p data-token-name>{color}</p> : null}
      {hex ? (
        <p data-token-name title={`opacity: ${hexToAlpha(hex)}%`}>
          <span className={`${hexHasChanged(hex, prevColor) ? 'hasChanged' : ''}`}>{hex}</span>
        </p>
      ) : (
        <p>---</p>
      )}
    </div>
  )
}

export default CSSTokenSwatch

CSSTokenSwatch.displayName = 'CSSTokenSwatch'
