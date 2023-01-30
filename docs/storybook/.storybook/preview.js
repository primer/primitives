import './preview.css'
import clsx from 'clsx'

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const themes = [
  'light',
  'light_colorblind',
  'light_high_contrast',
  'dark',
  'dark_dimmed',
  'dark_high_contrast',
  'dark_colorblind',
]

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Switch themes',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [...themes, 'all'],
      showName: true,
    },
  },
}

export const decorators = [
  (Story, context) => {
    return (
      <div className={context.globals.theme === 'all' && 'theme-wrap-grid'}>
        {themes.map(theme => {
          if (context.globals.theme === theme || context.globals.theme === 'all') {
            return (
              <div
                id="story"
                className={clsx(context.globals.theme === 'all' && 'story-wrap-grid', 'story-wrap')}
                data-color-mode={theme.startsWith('dark') ? 'dark' : 'light'}
                data-light-theme={theme.startsWith('light') ? theme : undefined}
                data-dark-theme={theme.startsWith('dark') ? theme : undefined}
              >
                <Story {...context} />
                {context.globals.theme === 'all' && <p className="theme-name">{theme}</p>}
              </div>
            )
          }
        })}
      </div>
    )
  },
]
