export const getFallbackTheme = (
  theme?: string | [string | undefined, string | undefined],
): 'light' | 'dark' | undefined => {
  if (Array.isArray(theme)) {
    theme = theme[1] || theme[0]
  }
  return theme ? (theme.startsWith('light') ? 'light' : 'dark') : undefined
}
