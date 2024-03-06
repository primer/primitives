import './preview.css'
import './storybook.css'
import clsx from 'clsx'
import {useEffect} from 'react'
import {ThemeProvider} from '@primer/react'

const preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    backgrounds: {disable: true},
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
        hideNoControlsWarning: true,
      },
    },
    options: {
      storySort: {
        order: ['Color', 'Typography', 'Size', 'Demos', 'Migration'],
      },
    },
    paddings: {
      values: [
        {name: 'Small', value: '1rem'},
        {name: 'Medium', value: '2rem'},
        {name: 'None', value: '0px'},
      ],
      default: 'Small',
    },
  },
}

const primerThemes = [
  {value: 'light', left: '🔆', title: 'Light'},
  {value: 'light_colorblind', left: '🔆', title: 'Light Protanopia & Deuteranopia'},
  {value: 'light_tritanopia', left: '🔆', title: 'Light Tritanopia'},
  {value: 'light_high_contrast', left: '🔆', title: 'Light High Contrast'},
  {value: 'dark', left: '🌑', title: 'Dark'},
  {value: 'dark_dimmed', left: '🌑', title: 'Dark Dimmed'},
  {value: 'dark_colorblind', left: '🌑', title: 'Dark Protanopia & Deuteranopia'},
  {value: 'dark_tritanopia', left: '🌑', title: 'Dark Tritanopia'},
  {value: 'dark_high_contrast', left: '🌑', title: 'Dark High Contrast'},
]

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Switch themes',
    defaultValue: 'light',
    toolbar: {
      icon: 'contrast',
      items: [
        ...primerThemes,
        {value: 'light-dark-split', left: '🌗', title: 'Light/Dark Split'},
        {value: 'all', left: '', title: 'All'},
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
}

// storyType is a decorator connected to a parameter which lets us configure story-specific layouts and other customization at the global level.
// type 'swatch' is the default, and creates a simple responsive grid of swatches.

export const decorators = [
  (Story, context) => {
    const {theme} = context.globals

    useEffect(() => {
      const colorMode = theme.startsWith('light') ? 'light' : 'dark'
      document.body.setAttribute('data-color-mode', colorMode)

      const lightTheme = theme.startsWith('light') ? theme : undefined
      document.body.setAttribute('data-light-theme', lightTheme)

      const darkTheme = theme.startsWith('dark') ? theme : undefined
      document.body.setAttribute('data-dark-theme', darkTheme)
    }, [theme])

    const {parameters} = context
    const defaultStoryType = 'swatch'
    const storyType = parameters.storyType || defaultStoryType

    if (context.globals.theme === 'light-dark-split') {
      return (
        <div className="light-dark-split">
          {['light', 'dark'].map(theme => (
            <ThemeProvider key={theme} dayScheme={theme} nightScheme={theme} colorMode="day">
              <div
                key={theme}
                id="story"
                className={clsx('story-wrap', parameters.storyType === 'swatch' && 'SwatchDecorator')}
                data-color-mode={theme}
                data-light-theme={theme === 'light' ? theme : undefined}
                data-dark-theme={theme === 'dark' ? theme : undefined}
              >
                <Story {...context} />
              </div>
            </ThemeProvider>
          ))}
        </div>
      )
    }

    return context.globals.theme === 'all' ? (
      primerThemes.map(({value: theme}) => (
        <ThemeProvider key={theme} dayScheme={theme} nightScheme={theme} colorMode="day">
          <div
            key={theme}
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
        </ThemeProvider>
      ))
    ) : (
      <ThemeProvider dayScheme={context.globals.theme} nightScheme={context.globals.theme} colorMode="day">
        <div className={clsx('story-wrap', parameters.storyType === 'swatch' && 'SwatchDecorator')}>
          <Story {...context} />
        </div>
      </ThemeProvider>
    )
  },
]

export default preview
