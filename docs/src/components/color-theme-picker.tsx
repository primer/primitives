import React from 'react'
import colors from '../../../dist/js/colors_v2'
import {useColorTheme} from './color-theme-context'

export function ColorThemePicker() {
  const [colorTheme, setColorTheme] = useColorTheme()
  return (
    <select
      name="color-theme"
      id="color-theme"
      value={colorTheme}
      onChange={event => setColorTheme(event.target.value as keyof typeof colors)}
    >
      {Object.keys(colors).map(key => (
        <option value={key}>{key}</option>
      ))}
    </select>
  )
}
