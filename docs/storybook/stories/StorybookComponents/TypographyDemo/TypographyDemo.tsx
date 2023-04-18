import React from 'react'
import './TypographyDemo.css'

export type TypographyDemoProps = {
  variant?: string
  modifier?: string
  fontSize?: string
  fontWeight?: string
  lineHeight?: string
  lineBoxHeight?: string
  fontFamily?: string
  fontShorthand?: string
  children?: React.ReactNode
}

export const TypographyDemo = ({
  variant,
  modifier = '',
  fontSize,
  fontWeight,
  lineHeight,
  lineBoxHeight,
  fontFamily,
  fontShorthand,
  children,
}: TypographyDemoProps) => {
  return (
    <p
      className="TypographyDemo"
      style={{
        // 'font' isn't valid in JS, passing in a transient CSS var instead
        '--fontShorthand': `var(--${fontShorthand})`,
        margin: '0',
        fontSize: fontSize ? `var(--${fontSize})` : undefined,
        fontWeight: fontWeight ? `var(--${fontWeight})` : undefined,
        lineHeight: lineHeight ? `var(--${lineHeight})` : undefined,
        height: lineBoxHeight ? `var(--${lineBoxHeight})` : undefined,
        fontFamily: fontFamily ? `var(--${fontFamily})` : undefined,
      }}
    >
      {children}
    </p>
  )
}

export default TypographyDemo

TypographyDemo.displayName = 'TypographyDemo'
