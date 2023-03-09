import {Box} from '@primer/react'
import React from 'react'
import {sentenceCase} from 'sentence-case'
// eslint-disable-next-line import/no-unresolved
import colors from '../../../dist/js/colors'
import {useColorTheme} from './color-theme-context'

export function ColorThemePicker() {
  const [colorTheme, setColorTheme] = useColorTheme()
  return (
    <Box sx={{display: 'grid', gridGap: 3, gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'}}>
      {Object.keys(colors).map(key => (
        <Box
          as="label"
          key={key}
          sx={{
            border: '1px solid',
            borderColor: key === colorTheme ? 'accent.fg' : 'border.default',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <ColorThemePreview colorTheme={key} />
          <Box sx={{p: 2}}>
            <input
              type="radio"
              id={key}
              name="drone"
              value={key}
              checked={colorTheme === key}
              onChange={event => setColorTheme(event.target.value as keyof typeof colors)}
            />
            <Box as="span" sx={{ml: 1}}>
              {sentenceCase(key)}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

function ColorThemePreview({colorTheme}) {
  return (
    <Box
      sx={{
        color: colors[colorTheme].fg.default,
        bg: colors[colorTheme].canvas.default,
        display: 'flex',
        p: 3,
        borderBottom: '1px solid',
        borderColor: 'border.default',
        justifyContent: 'center',
      }}
    >
      {['neutral', 'accent', 'success', 'attention', 'severe', 'danger', 'done', 'sponsors'].map(role => (
        <Box
          key={role}
          sx={{
            width: 20,
            height: 20,
            bg: colors[colorTheme][role].emphasis,
            margin: '2px',
            borderRadius: 999,
          }}
        />
      ))}
    </Box>
  )
}
