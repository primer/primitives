import React from 'react'
import type colors from '../../../dist/js/colors'

const ColorThemeContext = React.createContext<
  [keyof typeof colors, React.Dispatch<React.SetStateAction<keyof typeof colors>>]
  // eslint-disable-next-line @typescript-eslint/no-empty-function
>(['light', () => {}])

export function ColorThemeProvider({children}: {children: React.ReactNode}) {
  const [colorTheme, setColorTheme] = React.useState<keyof typeof colors>('light')
  return <ColorThemeContext.Provider value={[colorTheme, setColorTheme]}>{children}</ColorThemeContext.Provider>
}

export function useColorTheme() {
  return React.useContext(ColorThemeContext)
}
