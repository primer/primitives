import './preview.css'
import clsx from 'clsx'
import {themes} from '@storybook/theming'

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // darkMode: {
  //   // Override the default dark theme
  //   dark: {...themes.dark, appBg: 'black'},
  //   // Override the default light theme
  //   light: {...themes.normal, appBg: 'red'},
  // },
}

const primerThemes = [
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
      items: [...primerThemes, 'all'],
      showName: true,
    },
  },
}

// storyType is a decorator connected to a parameter which lets us configure story-specific layouts and other customization at the global level.
// type 'swatch' is the default, and creates a simple responsive grid of swatches.

export const decorators = [
  (Story, context) => {
    const {parameters} = context
    const defaultStoryType = 'swatch'
    const storyType = parameters.storyType || defaultStoryType
    console.log(parameters)
    return (
      <div className={context.globals.theme === 'all' && 'theme-wrap-grid'}>
        {primerThemes.map(theme => {
          if (context.globals.theme === theme || context.globals.theme === 'all') {
            return (
              <div
                id="story"
                className={clsx(
                  context.globals.theme === 'all' && 'story-wrap-grid',
                  'story-wrap',
                  parameters.storyType === 'swatch' && 'SwatchDecorator',
                )}
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
