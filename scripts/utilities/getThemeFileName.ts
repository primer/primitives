export const getThemeFileName = (theme: string, find: string = '_', replace: string = '-') => {
  const themeName = theme.replaceAll(find, replace)

  if (themeName === 'light-protanopia-deuteranopia') {
    return 'light-colorblind'
  }
  if (themeName === 'dark-protanopia-deuteranopia') {
    return 'dark-colorblind'
  }
  if (themeName === 'dark-protanopia-deuteranopia-high-contrast') {
    return 'dark-colorblind-high-contrast'
  }
  if (themeName === 'light-protanopia-deuteranopia-high-contrast') {
    return 'light-colorblind-high-contrast'
  }

  return themeName
}
