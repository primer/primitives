import {Box} from '@primer/react'
import get from 'lodash.get'
import React from 'react'
// eslint-disable-next-line import/no-unresolved
import colors from '../../../dist/js/colors'
import {getFullName} from '../../../scripts/lib/variable-collection'
import {useColorTheme} from './color-theme-context'

export function SwatchGrid({names}: {names: string[]}) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      }}
    >
      {names.map(name => (
        <Swatch name={name} key={name} />
      ))}
    </Box>
  )
}

function Swatch({name}: {name: string}) {
  const [colorTheme] = useColorTheme()
  const value = React.useMemo(() => get(colors[colorTheme], name), [name, colorTheme])
  const variant = React.useMemo(() => chooseVariant(name), [name])

  return (
    <Box>
      {variant === 'fg' && <FgPreview name={name} value={value} />}
      {variant === 'border' && <BorderPreview name={name} value={value} />}
      {variant === 'shadow' && <ShadowPreview name={name} value={value} />}
      {variant === 'default' && <DefaultPreview name={name} value={value} />}
      <Box sx={{fontFamily: 'mono', fontSize: 1, mt: 2}}>{name}</Box>
      <Box sx={{fontFamily: 'mono', fontSize: 0, color: 'text.gray'}}>{`var(--${getFullName(
        'color',
        name.split('.'),
      )})`}</Box>
      <Box sx={{fontFamily: 'mono', fontSize: 0, color: 'text.gray'}}>{value}</Box>
    </Box>
  )
}

function chooseVariant(name: string): 'fg' | 'border' | 'shadow' | 'default' {
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

function FgPreview({name, value}: {name: string; value: string}) {
  const [colorTheme] = useColorTheme()
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
        bg: name === 'fg.onEmphasis' ? colors[colorTheme].neutral.emphasis : colors[colorTheme].canvas.default,
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
        borderRadius: 2,
      }}
    >
      <span>Aa</span>
    </Box>
  )
}

function BorderPreview({value}: {name: string; value: string}) {
  const [colorTheme] = useColorTheme()
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
        bg: colors[colorTheme].canvas.default,
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
        borderRadius: 2,
      }}
    >
      <Box sx={{width: 48, height: 48, border: '2px solid', borderColor: value, borderRadius: 2}}></Box>
    </Box>
  )
}

function ShadowPreview({value}: {name: string; value: string}) {
  const [colorTheme] = useColorTheme()
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
        bg: colors[colorTheme].canvas.default,
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
        borderRadius: 2,
      }}
    >
      <Box sx={{width: 48, height: 48, boxShadow: value, borderRadius: 2, bg: colors[colorTheme].canvas.overlay}}></Box>
    </Box>
  )
}

function DefaultPreview({value}: {name: string; value: string}) {
  const [colorTheme] = useColorTheme()
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
        bg: colors[colorTheme].canvas.default,
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
        borderRadius: 2,
      }}
    >
      <Box sx={{width: 48, height: 48, bg: value, borderRadius: 2}}></Box>
    </Box>
  )
}
