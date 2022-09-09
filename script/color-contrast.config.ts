export let contrastRequirements: { [key: string]: (number | string)[][] } = {
  // default light mode
  light: [
    [4.5, 'fg.default', 'canvas.default'],
    [4.5, 'fg.muted', 'canvas.default'],
    [4.5, 'fg.default', 'canvas.subtle'],
    [4.5, 'fg.muted', 'canvas.subtle']
  ],
  // default dark mode
  dark: [
    [4.5, 'fg.default', 'canvas.default'],
    [4.5, 'fg.muted', 'canvas.default'],
    [4.5, 'fg.default', 'canvas.subtle'],
    [4.5, 'fg.muted', 'canvas.subtle']
  ]

}
