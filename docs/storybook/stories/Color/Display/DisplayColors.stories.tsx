import React from 'react'
import {Stack} from '@primer/react/experimental'

export default {
  title: 'Color/Display/Display Colors',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {
      showPanel: false,
    },
  },
}

const colors = [
  'gray',
  'blue',
  'indigo',
  'cyan',
  'teal',
  'pine',
  'green',
  'lime',
  'olive',
  'lemon',
  'yellow',
  'orange',
  'red',
  'coral',
  'pink',
  'plum',
  'purple',
  'brown',
  'auburn',
]

const labelStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '8px',
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: '18px',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  textDecoration: 'none',
}

const SectionHeading = ({children}: {children: React.ReactNode}) => (
  <h2
    style={{
      fontSize: '14px',
      fontWeight: 600,
      marginBottom: '8px',
      marginTop: '0',
      color: 'var(--fgColor-default)',
    }}
  >
    {children}
  </h2>
)

export const DisplayColors = () => {
  return (
    <Stack direction="vertical" gap="spacious" style={{padding: '24px'}}>
      <div>
        <SectionHeading>Emphasis</SectionHeading>
        <Stack direction="horizontal" gap="condensed" wrap="wrap">
          {colors.map(color => (
            <span
              key={color}
              style={{
                ...labelStyle,
                backgroundColor: `var(--display-${color}-bgColor-emphasis)`,
                color: `var(--fgColor-onEmphasis)`,
              }}
            >
              {color}
            </span>
          ))}
        </Stack>
      </div>

      <div>
        <SectionHeading>Muted</SectionHeading>
        <Stack direction="horizontal" gap="condensed" wrap="wrap">
          {colors.map(color => (
            <span
              key={color}
              style={{
                ...labelStyle,
                backgroundColor: `var(--display-${color}-bgColor-muted)`,
                color: `var(--display-${color}-fgColor)`,
              }}
            >
              {color}
            </span>
          ))}
        </Stack>
      </div>

      <div>
        <SectionHeading>Emphasis with border</SectionHeading>
        <Stack direction="horizontal" gap="condensed" wrap="wrap">
          {colors.map(color => (
            <span
              key={color}
              style={{
                ...labelStyle,
                backgroundColor: `var(--display-${color}-bgColor-emphasis)`,
                color: `var(--fgColor-onEmphasis)`,
                boxShadow: `inset 0 0 0 1px var(--display-${color}-borderColor-emphasis)`,
              }}
            >
              {color}
            </span>
          ))}
        </Stack>
      </div>

      <div>
        <SectionHeading>Muted with border</SectionHeading>
        <Stack direction="horizontal" gap="condensed" wrap="wrap">
          {colors.map(color => (
            <span
              key={color}
              style={{
                ...labelStyle,
                backgroundColor: `var(--display-${color}-bgColor-muted)`,
                color: `var(--display-${color}-fgColor)`,
                boxShadow: `inset 0 0 0 1px var(--display-${color}-borderColor-muted)`,
              }}
            >
              {color}
            </span>
          ))}
        </Stack>
      </div>

      <div>
        <SectionHeading>Color combinations</SectionHeading>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          {colors.map(color => (
            <div
              key={color}
              style={{
                display: 'flex',
                gap: '4px',
              }}
            >
              <span
                style={{
                  ...labelStyle,
                  backgroundColor: `var(--display-${color}-bgColor-muted)`,
                  color: `var(--display-${color}-fgColor)`,
                }}
              >
                {color}
              </span>
              <span
                style={{
                  ...labelStyle,
                  backgroundColor: `var(--display-${color}-bgColor-muted)`,
                  color: `var(--display-${color}-fgColor)`,
                  boxShadow: `inset 0 0 0 1px var(--display-${color}-borderColor-muted)`,
                }}
              >
                {color}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Stack>
  )
}
