import React from 'react'
import {toHex} from 'color2k'
import './ColorScale.css'

function linearize(c: number): number {
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
}

function luminance(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b)
}

function contrast(a: string, b: string): number {
  const la = luminance(a)
  const lb = luminance(b)
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05)
}

function fmt(r: number): string {
  const x = Math.round(r * 10) / 10
  return x % 1 === 0 ? x.toFixed(0) : x.toFixed(1)
}

function safeHex(rgb: string): string | null {
  try {
    return toHex(rgb)
  } catch {
    return null
  }
}

export type ColorScaleProps = {
  color?: string
  border?: boolean
}

export const ColorScale = ({color, border}: ColorScaleProps) => {
  const swatchRef = React.useRef<HTMLDivElement>(null)
  const fgDefaultRef = React.useRef<HTMLDivElement>(null)
  const fgMutedRef = React.useRef<HTMLDivElement>(null)
  const borderDefaultRef = React.useRef<HTMLDivElement>(null)
  const bgDefaultRef = React.useRef<HTMLDivElement>(null)
  const bgMutedRef = React.useRef<HTMLDivElement>(null)

  const [hex, setHex] = React.useState<string | null>(null)
  const [fgDefault, setFgDefault] = React.useState<string | null>(null)
  const [fgMuted, setFgMuted] = React.useState<string | null>(null)
  const [borderDefault, setBorderDefault] = React.useState<string | null>(null)
  const [bgDefault, setBgDefault] = React.useState<string | null>(null)
  const [bgMuted, setBgMuted] = React.useState<string | null>(null)

  const recalculate = React.useCallback(() => {
    setTimeout(() => {
      if (swatchRef.current) setHex(safeHex(getComputedStyle(swatchRef.current).backgroundColor))
      if (fgDefaultRef.current) setFgDefault(safeHex(getComputedStyle(fgDefaultRef.current).color))
      if (fgMutedRef.current) setFgMuted(safeHex(getComputedStyle(fgMutedRef.current).color))
      if (borderDefaultRef.current) setBorderDefault(safeHex(getComputedStyle(borderDefaultRef.current).color))
      if (bgDefaultRef.current) setBgDefault(safeHex(getComputedStyle(bgDefaultRef.current).backgroundColor))
      if (bgMutedRef.current) setBgMuted(safeHex(getComputedStyle(bgMutedRef.current).backgroundColor))
    }, 0)
  }, [])

  React.useEffect(() => {
    recalculate()
  }, [color, recalculate])

  React.useEffect(() => {
    const obs = new MutationObserver(recalculate)
    obs.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-color-mode', 'data-light-theme', 'data-dark-theme'],
    })
    return () => obs.disconnect()
  }, [recalculate])

  const vsBlack = hex ? contrast(hex, '#000000') : null
  const vsWhite = hex ? contrast(hex, '#ffffff') : null
  const onSwatch = (vsBlack ?? 0) >= (vsWhite ?? 0) ? '#000000' : '#ffffff'

  const vsFgDefault = hex && fgDefault ? contrast(hex, fgDefault) : null
  const vsFgMuted = hex && fgMuted ? contrast(hex, fgMuted) : null
  const vsBorderDefault = hex && borderDefault ? contrast(hex, borderDefault) : null
  const vsBgDefault = hex && bgDefault ? contrast(hex, bgDefault) : null
  const vsBgMuted = hex && bgMuted ? contrast(hex, bgMuted) : null

  const probeStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: 1,
    height: 1,
    opacity: 0,
    pointerEvents: 'none',
  }

  return (
    <div
      className="ColorScale--block"
      style={{
        backgroundColor: `var(--${color})`,
        outline: border ? '1px solid var(--borderColor-default)' : undefined,
      }}
      data-color-scale
      ref={swatchRef}
    >
      {/* Probes — read color/bg values from CSS vars */}
      <div ref={fgDefaultRef} aria-hidden style={{...probeStyle, color: 'var(--fgColor-default)'}} />
      <div ref={fgMutedRef} aria-hidden style={{...probeStyle, color: 'var(--fgColor-muted)'}} />
      <div ref={borderDefaultRef} aria-hidden style={{...probeStyle, color: 'var(--borderColor-default)'}} />
      <div ref={bgDefaultRef} aria-hidden style={{...probeStyle, backgroundColor: 'var(--bgColor-default)'}} />
      <div ref={bgMutedRef} aria-hidden style={{...probeStyle, backgroundColor: 'var(--bgColor-muted)'}} />

      <p className="cs-name" style={{color: onSwatch}}>
        {color}
      </p>

      <div className="cs-row">
        {/* Aa badges: color = the fg/border CSS var itself, so Aa + number are both in that color */}
        {vsFgDefault !== null && (
          <span className="cs-badge" data-tooltip="Contrast for fgColor-default">
            <span className="cs-aa" style={{color: 'var(--fgColor-default)'}}>
              Aa
            </span>
            <span className="cs-num" style={{color: onSwatch}}>
              {fmt(vsFgDefault)}
            </span>
          </span>
        )}
        {vsFgMuted !== null && (
          <span className="cs-badge" data-tooltip="Contrast for fgColor-muted">
            <span className="cs-aa" style={{color: 'var(--fgColor-muted)'}}>
              Aa
            </span>
            <span className="cs-num" style={{color: onSwatch}}>
              {fmt(vsFgMuted)}
            </span>
          </span>
        )}
        {/* Border badge: outlined square + number in borderColor-default */}
        {vsBorderDefault !== null && (
          <span className="cs-badge" data-tooltip="Contrast for borderColor-default">
            <span className="cs-square cs-square--outline" style={{borderColor: 'var(--borderColor-default)'}} />
            <span className="cs-num" style={{color: 'var(--borderColor-default)'}}>
              {fmt(vsBorderDefault)}
            </span>
          </span>
        )}
        {/* Bg badges: filled square in the bg color, number in onSwatch */}
        {vsBgDefault !== null && (
          <span className="cs-badge" data-tooltip="Contrast for bgColor-default">
            <span className="cs-square cs-square--filled" style={{backgroundColor: 'var(--bgColor-default)'}} />
            <span className="cs-num" style={{color: onSwatch}}>
              {fmt(vsBgDefault)}
            </span>
          </span>
        )}
        {vsBgMuted !== null && (
          <span className="cs-badge" data-tooltip="Contrast for bgColor-muted">
            <span className="cs-square cs-square--filled" style={{backgroundColor: 'var(--bgColor-muted)'}} />
            <span className="cs-num" style={{color: onSwatch}}>
              {fmt(vsBgMuted)}
            </span>
          </span>
        )}
        {hex && (
          <span className="cs-hex" style={{color: onSwatch}}>
            {hex}
          </span>
        )}
      </div>
    </div>
  )
}

ColorScale.displayName = 'ColorScale'
