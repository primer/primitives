export const getThemeFileName = (theme: string, find: string = '_', replace: string = '-') => {
  const themeName = theme.replaceAll(find, replace)

  if (themeName === 'light-protanopia-deuteranopia') {
    return 'light-colorblind'
  }
  if (themeName === 'dark-protanopia-deuteranopia') {
    return 'dark-colorblind'
  }

  return themeName
}
