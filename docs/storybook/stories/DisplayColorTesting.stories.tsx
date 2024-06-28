import React from 'react'
import './BorderTesting.css'
import {Token, Box} from '@primer/react'

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
    <Box sx={{ml: 2, gap: 3, display: 'flex', flexDirection: 'column'}}>
      <Box sx={{ml: 2, gap: 2, display: 'flex'}}>
        {colors.map(color => (
          <Token
            text={color}
            sx={{
              backgroundColor: `var(--display-${color}-bgColor-muted)`,
              color: `var(--display-${color}-fgColor)`,
              borderColor: `var(--display-${color}-borderColor-emphasis)`,
            }}
          />
        ))}
      </Box>
      <Box sx={{ml: 2, gap: 2, display: 'flex'}}>
        {colors.map(color => (
          <Token
            text={color}
            sx={{
              backgroundColor: `var(--display-${color}-bgColor-emphasis)`,
              color: `var(--fgColor-onEmphasis)`,
              borderColor: 'transparent',
            }}
          />
        ))}
      </Box>
    </Box>
  )
}

const roles = [
  'neutral',
  'accent',
  'success',
  'open',
  'danger',
  'closed',
  'attention',
  'severe',
  'done',
  'upsell',
  'sponsors',
]

export const RoleDemo = () => {
  return (
    <Box sx={{ml: 2, gap: 3, display: 'flex', flexDirection: 'column'}}>
      <Box sx={{ml: 2, gap: 2, display: 'flex'}}>
        {roles.map(role => (
          <Token
            text={role}
            sx={{
              backgroundColor: `var(--bgColor-${role}-muted)`,
              color: `var(--fgColor-${role})`,
              borderColor: `var(--borderColor-${role}-emphasis)`,
            }}
          />
        ))}
      </Box>
      <Box sx={{ml: 2, gap: 2, display: 'flex'}}>
        {roles.map(role => (
          <Token
            text={role}
            sx={{
              backgroundColor: `var(--bgColor-${role}-emphasis)`,
              color: `var(--fgColor-onEmphasis)`,
              borderColor: 'transparent',
            }}
          />
        ))}
      </Box>
    </Box>
  )
}
