import React from 'react'
import {Stack} from '@primer/react/experimental'

export default {
  title: 'Color/Display/Label Colors',
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
  borderRadius: '2em',
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: '18px',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  textDecoration: 'none',
  userSelect: 'none',
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

type InteractionState = 'rest' | 'hover' | 'active'

function LabelChip({color, withBorder}: {color: string; withBorder?: boolean}) {
  const [state, setState] = React.useState<InteractionState>('rest')

  const bg =
    state === 'active'
      ? `var(--label-${color}-bgColor-active)`
      : state === 'hover'
        ? `var(--label-${color}-bgColor-hover)`
        : `var(--label-${color}-bgColor-rest)`

  const fg =
    state === 'active'
      ? `var(--label-${color}-fgColor-active)`
      : state === 'hover'
        ? `var(--label-${color}-fgColor-hover)`
        : `var(--label-${color}-fgColor-rest)`

  // Border only shown on the resting state of the bordered variant
  const boxShadow = withBorder && state === 'rest' ? `inset 0 0 0 1px var(--label-${color}-borderColor)` : undefined

  return (
    <span
      style={{...labelStyle, backgroundColor: bg, color: fg, boxShadow}}
      onMouseEnter={() => setState('hover')}
      onMouseLeave={() => setState('rest')}
      onMouseDown={() => setState('active')}
      onMouseUp={() => setState('hover')}
    >
      {color}
    </span>
  )
}

export const LabelColors = () => {
  return (
    <Stack direction="vertical" gap="spacious" style={{padding: '24px'}}>
      <div>
        <SectionHeading>Default (hover &amp; click me)</SectionHeading>
        <Stack direction="horizontal" gap="condensed" wrap="wrap">
          {colors.map(color => (
            <LabelChip key={color} color={color} />
          ))}
        </Stack>
      </div>

      <div>
        <SectionHeading>With border (hover &amp; click me)</SectionHeading>
        <Stack direction="horizontal" gap="condensed" wrap="wrap">
          {colors.map(color => (
            <LabelChip key={color} color={color} withBorder />
          ))}
        </Stack>
      </div>
    </Stack>
  )
}
