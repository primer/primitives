import React from 'react'
import colors from '../../../dist/js/colors_v2'

const ColorThemeContext = React.createContext<
  [keyof typeof colors, React.Dispatch<React.SetStateAction<keyof typeof colors>>]
>(['light', () => {}])

export function ColorThemeProvider({children}) {
  const [colorTheme, setColorTheme] = React.useState<keyof typeof colors>('light')
  return <ColorThemeContext.Provider value={[colorTheme, setColorTheme]}>{children}</ColorThemeContext.Provider>
}

export function useColorTheme() {
  return React.useContext(ColorThemeContext)
}
