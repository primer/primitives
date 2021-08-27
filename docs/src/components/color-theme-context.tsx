import React from 'react'
import colors from '../../../dist/js/colors_v2'

const ColorThemeContext = React.createContext<keyof typeof colors>('light')

export function ColorThemeProvider({children}) {
  return <ColorThemeContext.Provider value="dark_dimmed">{children}</ColorThemeContext.Provider>
}

export function useColorTheme() {
  return React.useContext(ColorThemeContext)
}
