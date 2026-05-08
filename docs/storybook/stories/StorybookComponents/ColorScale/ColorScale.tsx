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

const PROBE_STYLE: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: 1,
  height: 1,
  opacity: 0,
  pointerEvents: 'none',
}

type ProbeConfig = {
  key: string
  cssVar: string
  cssProp: 'color' | 'backgroundColor'
  icon: 'aa' | 'outline-square' | 'filled-square'
  tooltip: string
  numOnSwatch: boolean
}

const PROBES: ProbeConfig[] = [
  {
    key: 'fgDefault',
    cssVar: '--fgColor-default',
    cssProp: 'color',
    icon: 'aa',
    tooltip: 'Contrast for fgColor-default',
    numOnSwatch: true,
  },
  {
    key: 'fgMuted',
    cssVar: '--fgColor-muted',
    cssProp: 'color',
    icon: 'aa',
    tooltip: 'Contrast for fgColor-muted',
    numOnSwatch: true,
  },
  {
    key: 'borderDefault',
    cssVar: '--borderColor-default',
    cssProp: 'color',
    icon: 'outline-square',
    tooltip: 'Contrast for borderColor-default',
    numOnSwatch: false,
  },
  {
    key: 'bgDefault',
    cssVar: '--bgColor-default',
    cssProp: 'backgroundColor',
    icon: 'filled-square',
    tooltip: 'Contrast for bgColor-default',
    numOnSwatch: true,
  },
  {
    key: 'bgMuted',
    cssVar: '--bgColor-muted',
    cssProp: 'backgroundColor',
    icon: 'filled-square',
    tooltip: 'Contrast for bgColor-muted',
    numOnSwatch: true,
  },
]

export type ColorScaleProps = {
  color?: string
  border?: boolean
}

export const ColorScale = ({color, border}: ColorScaleProps) => {
  const swatchRef = React.useRef<HTMLDivElement | null>(null)
  const probeRefs = React.useRef<Record<string, HTMLDivElement | null>>({})

  const [hex, setHex] = React.useState<string | null>(null)
  const [probeColors, setProbeColors] = React.useState<Record<string, string | null>>({})

  const recalculate = React.useCallback(() => {
    setTimeout(() => {
      if (swatchRef.current) setHex(safeHex(getComputedStyle(swatchRef.current).backgroundColor))
      const next: Record<string, string | null> = {}
      for (const {key, cssProp} of PROBES) {
        const el = probeRefs.current[key]
        if (el) next[key] = safeHex(getComputedStyle(el)[cssProp])
      }
      setProbeColors(next)
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
      {PROBES.map(({key, cssVar, cssProp}) => (
        <div
          key={key}
          ref={el => {
            probeRefs.current[key] = el
          }}
          aria-hidden
          style={{
            ...PROBE_STYLE,
            ...(cssProp === 'color' ? {color: `var(${cssVar})`} : {backgroundColor: `var(${cssVar})`}),
          }}
        />
      ))}

      <p className="cs-name" style={{color: onSwatch}}>
        {color}
      </p>

      <div className="cs-row">
        {PROBES.map(({key, cssVar, icon, tooltip, numOnSwatch}) => {
          const probeColor = probeColors[key]
          const ratio = hex && probeColor ? contrast(hex, probeColor) : null
          if (ratio === null) return null
          const numColor = numOnSwatch ? onSwatch : `var(${cssVar})`
          return (
            <span key={key} className="cs-badge" data-tooltip={tooltip}>
              {icon === 'aa' ? (
                <span className="cs-aa" style={{color: `var(${cssVar})`}}>
                  Aa
                </span>
              ) : icon === 'outline-square' ? (
                <span className="cs-square cs-square--outline" style={{borderColor: `var(${cssVar})`}} />
              ) : (
                <span className="cs-square cs-square--filled" style={{backgroundColor: `var(${cssVar})`}} />
              )}
              <span className="cs-num" style={{color: numColor}}>
                {fmt(ratio)}
              </span>
            </span>
          )
        })}
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
