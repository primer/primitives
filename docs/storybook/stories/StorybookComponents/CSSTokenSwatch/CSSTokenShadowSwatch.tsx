import React from 'react'
import './CSSTokenSwatch.css'

export type CSSTokenSwatchProps = {
  color?: string
  borderColor?: string
  shadow?: string
}

export const CSSTokenShadowSwatch = ({color, shadow, borderColor}: CSSTokenSwatchProps) => {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [value, setValue] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (ref.current === null) {
      return
    }

    const style = getComputedStyle(ref.current)
    const rgb = style.getPropertyValue('box-shadow')
    setValue(rgb)
  }, [shadow])

  if (shadow === undefined) {
    return null
  }
  return (
    <div className="TokenSwatch">
      <div
        className="TokenSwatch--shadow"
        style={{
          backgroundColor: color ? `var(--${color})` : undefined,
          border: borderColor ? `solid 1px var(--${borderColor})` : undefined,
          boxShadow: shadow ? `var(--${shadow})` : 'none',
        }}
        ref={ref}
      ></div>
      {shadow ? <p data-token-name>{shadow}</p> : null}
      {value ? <p data-token-name>{value}</p> : <p>---</p>}
    </div>
  )
}

export default CSSTokenShadowSwatch

CSSTokenShadowSwatch.displayName = 'CSSTokenShadowSwatch'
