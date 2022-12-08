import React from 'react'
import './ShadowPreview.css'

export type Props = {
  canvasColors: string[]
  fills: string[]
  borders?: string[]
  shadow: string
}

const renderShadow = (shadow: string, fill: string, border?: string) => {
  return (
    <div
      style={{
        boxShadow: `var(--${shadow})`,
        backgroundColor: `var(--${fill})`,
        border: `${border ? `1px solid var(--${border} )` : 'none'}`
      }}
      data-bg
    ></div>
  )
}
export function ShadowPreview({canvasColors, fills, borders, shadow}: Props) {
  return (
    <>
      <h5 className="token-name">{shadow}</h5>
      {canvasColors.map((canvasColor: string) => {
        return (
          <div
            key={`${canvasColor}-${shadow}`}
            className="ShadowPreview"
            style={{backgroundColor: `var(--${canvasColor})`}}
          >
            {/* Render shadows with just fill */}
            {fills.map((fill: string) => renderShadow(shadow, fill))}
            {/* Render shadows with fill & border */}
            {borders &&
              borders.map((border: string) => {
                return fills.map((fill: string) => renderShadow(shadow, fill, border))
              })}
          </div>
        )
      })}
    </>
  )
}

export default ShadowPreview

ShadowPreview.displayName = 'ShadowPreview'
