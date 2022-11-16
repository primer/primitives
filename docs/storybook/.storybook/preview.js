import './preview.css'

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

const themes = [
  'light',
  'light_colorblind',
  'light_high_contrast',
  'dark',
  'dark_dimmed',
  'dark_high_contrast',
  'dark_colorblind'
]

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Switch themes',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [...themes, 'all'],
      showName: true
    }
  }
}

export const decorators = [
  (Story, context) => {
    return (
      <div class="theme-wrap">
        {themes.map(theme => {
          if (context.globals.theme === theme || context.globals.theme === 'all') {
            return (
              <div
                id="story"
                className="story-wrap"
                data-color-mode={theme.startsWith('dark') ? 'dark' : 'light'}
                data-light-theme={theme.startsWith('light') ? theme : undefined}
                data-dark-theme={theme.startsWith('dark') ? theme : undefined}
              >
                <Story {...context} />
              </div>
            )
          }
        })}
      </div>
    )
  }
]
