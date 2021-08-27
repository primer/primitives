import React from 'react'
import {Box} from '@primer/components'
import colors from '../../../dist/js/colors_v2'
import get from 'lodash.get'

export function SwatchGrid({names}) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: 'repeat(4, 1fr)'
      }}
    >
      {names.map(name => (
        <Swatch name={name} />
      ))}
    </Box>
  )
}

function Swatch({name}) {
  const value = React.useMemo(() => get(colors.light, name), [name])
  const variant = React.useMemo(() => chooseVariant(name), [name])

  return (
    <Box>
      {variant === 'fg' && <FgPreview name={name} value={value} />}
      {variant === 'border' && <BorderPreview name={name} value={value} />}
      {variant === 'shadow' && <ShadowPreview name={name} value={value} />}
      {variant === 'default' && <DefaultPreview name={name} value={value} />}
      <Box sx={{fontFamily: 'mono', mt: 2}}>{name}</Box>
      <Box sx={{fontFamily: 'mono', fontSize: 0, color: 'text.gray'}}>{value}</Box>
    </Box>
  )
}

function chooseVariant(name) {
  if (name.split('.').includes('fg')) {
    return 'fg'
  }

  if (name.split('.').includes('border')) {
    return 'border'
  }

  if (name.split('.').includes('shadow')) {
    return 'shadow'
  }

  return 'default'
}

function FgPreview({name, value}) {
  return (
    <Box
      sx={{
        color: value,
        width: '100%',
        height: 100,
        fontSize: 5,
        fontWeight: 'bold',
        display: 'grid',
        placeItems: 'center',
        bg: name === 'fg.onEmphasis' ? colors.light.neutral.emphasisPlus : colors.light.canvas.default,
        border: '1px solid',
        borderColor: colors.light.border.default,
        borderRadius: 2
      }}
    >
      <span>Aa</span>
    </Box>
  )
}

function BorderPreview({name, value}) {
  return (
    <Box
      sx={{
        color: value,
        width: '100%',
        height: 100,
        fontSize: 5,
        fontWeight: 'bold',
        display: 'grid',
        placeItems: 'center',
        bg: colors.light.canvas.default,
        border: '1px solid',
        borderColor: colors.light.border.default,
        borderRadius: 2
      }}
    >
      <Box sx={{width: 48, height: 48, border: '2px solid', borderColor: value, borderRadius: 2}}></Box>
    </Box>
  )
}

function ShadowPreview({name, value}) {
  return (
    <Box
      sx={{
        color: value,
        width: '100%',
        height: 100,
        fontSize: 5,
        fontWeight: 'bold',
        display: 'grid',
        placeItems: 'center',
        bg: colors.light.canvas.default,
        border: '1px solid',
        borderColor: colors.light.border.default,
        borderRadius: 2
      }}
    >
      <Box sx={{width: 48, height: 48, boxShadow: value, borderRadius: 2, bg: colors.light.canvas.overlay}}></Box>
    </Box>
  )
}

function DefaultPreview({name, value}) {
  return (
    <Box
      sx={{
        color: value,
        width: '100%',
        height: 100,
        fontSize: 5,
        fontWeight: 'bold',
        display: 'grid',
        placeItems: 'center',
        bg: colors.light.canvas.default,
        border: '1px solid',
        borderColor: colors.light.border.default,
        borderRadius: 2
      }}
    >
      <Box sx={{width: 48, height: 48, bg: value, borderRadius: 2}}></Box>
    </Box>
  )
}
