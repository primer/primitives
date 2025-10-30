import React from 'react'
import {Stack, IssueLabel} from '@primer/react/experimental'

export default {
  title: 'Testing/Colors',
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

export const DisplayDemo = () => {
  return (
    <Stack direction="vertical" gap="spacious">
      <Stack direction="horizontal" gap="condensed" wrap="wrap">
        {colors.map(color => (
          <IssueLabel href="/" key={color} variant={color}>
            {color}
          </IssueLabel>
        ))}
      </Stack>
      <Stack direction="horizontal" gap="condensed" wrap="wrap">
        {colors.map(color => (
          <IssueLabel href="/" key={color} variant={color}>
            {color}
          </IssueLabel>
        ))}
      </Stack>
    </Stack>
  )
}
