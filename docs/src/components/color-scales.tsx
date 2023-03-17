// eslint-disable-next-line import/no-unresolved
import colors from '../../../dist/js/colors'
import React from 'react'
import {useColorTheme} from './color-theme-context'
import {Box, Text} from '@primer/react'
import {readableColor} from 'color2k'

export function ColorScales() {
  const [colorTheme] = useColorTheme()
  return (
    <Box
      sx={{
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        p: 3,
        bg: colors[colorTheme].canvas.default,
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
        borderRadius: 2,
      }}
    >
      {Object.entries(colors[colorTheme].scale).map(([scaleName, scale]) => {
        return (
          <Box sx={{overflow: 'hidden', borderRadius: 1}} key={scale}>
            {Array.isArray(scale) ? (
              scale.map((color, index) => {
                return (
                  <Box
                    key={color}
                    sx={{
                      color: readableColor(color),
                      bg: color,
                      p: 2,
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontFamily: 'mono',
                      fontSize: 1,
                    }}
                  >
                    <Text>
                      scale.{scaleName}.{index}
                    </Text>
                    <Text>{color}</Text>
                  </Box>
                )
              })
            ) : (
              <Box
                sx={{
                  color: readableColor(scale),
                  bg: scale,
                  p: 2,
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontFamily: 'mono',
                  fontSize: 1,
                }}
              >
                <Text>scale.{scaleName}</Text>
                <Text>{scale}</Text>
              </Box>
            )}
          </Box>
        )
      })}
    </Box>
  )
}
