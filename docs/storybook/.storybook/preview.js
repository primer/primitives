import './preview.css'
import './storybook.css'
import clsx from 'clsx'
import {ThemeProvider, theme} from '@primer/react'
import deepmerge from 'deepmerge'

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
  {value: 'light', left: '☀️', title: 'Light'},
  {value: 'light_colorblind', left: '☀️', title: 'Light Protanopia & Deuteranopia'},
  {value: 'light_tritanopia', left: '☀️', title: 'Light Tritanopia'},
  {value: 'light_high_contrast', left: '☀️', title: 'Light High Contrast'},
  {value: 'dark', left: '🌗', title: 'Dark'},
  {value: 'dark_dimmed', left: '🌗', title: 'Dark Dimmed'},
  {value: 'dark_colorblind', left: '🌗', title: 'Dark Protanopia & Deuteranopia'},
  {value: 'dark_tritanopia', left: '🌗', title: 'Dark Tritanopia'},
  {value: 'dark_high_contrast', left: '🌗', title: 'Dark High Contrast'},
]

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Switch themes',
    defaultValue: 'light',
    toolbar: {
      icon: 'contrast',
      items: [...primerThemes, {value: 'all', left: '', title: 'All'}],
      showName: true,
      dynamicTitle: true,
    },
  },
}

const tempTheme = deepmerge(theme, {
  colorSchemes: {
    light: {
      colors: {
        avatar: {
          bg: 'var(--avatar-bgColor)',
          border: 'var(--avatar-borderColor)',
          stackFade: 'var(--avatarStack-fade-bgColor-default)',
          stackFadeMore: 'var(--avatarStack-fade-bgColor-muted)',
        },
        topicTag: {
          border: 'var(--topicTag-borderColor)',
        },
        counter: {
          border: 'var(--counter-borderColor)',
        },
        input: {
          disabledBg: 'var(--control-bgColor-disabled)',
        },
        timeline: {
          badgeBg: 'var(--timelineBadge-bgColor)',
        },
        btn: {
          text: 'var(--button-default-fgColor-rest)',
          bg: 'var(--button-default-bgColor-rest)',
          border: 'var(--button-default-borderColor-rest)',
          hoverBg: 'var(--button-default-bgColor-hover)',
          hoverBorder: 'var(--button-default-borderColor-hover)',
          activeBg: 'var(--button-default-bgColor-active)',
          activeBorder: 'var(--button-default-borderColor-active)',
          selectedBg: 'var(--button-default-bgColor-selected)',
          focusBg: 'var(--button-default-bgColor-rest)',
          focusBorder: 'var(--button-default-borderColor-rest)',
          counterBg: 'var(--buttonCounter-default-bgColor-rest)',
          primary: {
            text: 'var(--button-primary-fgColor-rest)',
            bg: 'var(--button-primary-bgColor-rest)',
            border: 'var(--button-primary-borderColor-rest)',
            hoverBg: 'var(--button-primary-bgColor-hover)',
            hoverBorder: 'var(--button-primary-borderColor-hover)',
            selectedBg: 'var(--button-primary-bgColor-active)',
            disabledText: 'var(--button-primary-fgColor-disabled)',
            disabledBg: 'var(--button-primary-bgColor-disabled)',
            disabledBorder: 'var(--button-primary-borderColor-disabled)',
            focusBg: 'var(--button-primary-bgColor-rest)',
            focusBorder: 'var(--button-primary-borderColor-rest)',
            icon: 'var(--button-primary-iconColor-rest)',
            counterBg: 'var(--buttonCounter-primary-bgColor-rest)',
          },
          outline: {
            text: 'var(--button-outline-fgColor-rest)',
            hoverText: 'var(--button-outline-fgColor-hover)',
            hoverBg: 'var(--button-outline-bgColor-hover)',
            hoverBorder: 'var(--button-outline-borderColor-hover)',
            hoverCounterBg: 'var(--buttonCounter-outline-bgColor-hover)',
            selectedText: 'var(--button-outline-fgColor-active)',
            selectedBg: 'var(--button-outline-bgColor-active)',
            selectedBorder: 'var(--button-outline-borderColor-active)',
            disabledText: 'var(--button-outline-fgColor-disabled)',
            disabledBg: 'var(--button-outline-bgColor-disabled)',
            disabledCounterBg: 'var(--buttonCounter-outline-bgColor-disabled)',
            focusBorder: 'var(--button-outline-borderColor-rest)',
            counterBg: 'var(--buttonCounter-outline-bgColor-rest)',
          },
          danger: {
            text: 'var(--button-danger-fgColor-rest)',
            hoverText: 'var(--button-danger-fgColor-hover)',
            hoverBg: 'var(--button-danger-bgColor-hover)',
            hoverBorder: 'var(--button-outline-borderColor-hover)',
            hoverCounterBg: 'var(--buttonCounter-danger-bgColor-hover)',
            selectedText: 'var(--button-danger-fgColor-active)',
            selectedBg: 'var(--button-danger-bgColor-active)',
            selectedBorder: 'var(--button-danger-borderColor-active)',
            disabledText: 'var(--button-danger-fgColor-disabled)',
            disabledBg: 'var(--button-danger-bgColor-disabled)',
            disabledCounterBg: 'var(--buttonCounter-danger-bgColor-disabled)',
            focusBorder: 'var(--button-danger-borderColor-rest)',
            counterBg: 'var(--buttonCounter-danger-bgColor-rest)',
            icon: 'var(--button-danger-iconColor-rest)',
            hoverIcon: 'var(--button-danger-iconColor-hover)',
          },
        },
        underlinenav: {
          icon: 'var(--underlineNav-iconColor-rest)',
          borderHover: 'var(--underlineNav-borderColor-hover)',
        },
        actionListItem: {
          inlineDivider: 'var(--borderColor-muted)',
          default: {
            hoverBg: 'var(--control-transparent-bgColor-hover)',
            hoverBorder: 'var(--control-transparent-borderColor-hover)',
            activeBg: 'var(--control-transparent-bgColor-active)',
            activeBorder: 'var(--control-transparent-borderColor-active)',
            selectedBg: 'var(--control-transparent-bgColor-selected)',
          },
          danger: {
            hoverBg: 'var(--control-danger-bgColor-hover)',
            activeBg: 'var(--control-danger-bgColor-active)',
            hoverText: 'var(--control-danger-fgColor-hover)',
          },
        },
        switchTrack: {
          bg: 'var(--controlTrack-bgColor-rest)',
          hoverBg: 'var(--controlTrack-bgColor-hover)',
          activeBg: 'var(--controlTrack-bgColor-active)',
          disabledBg: 'var(--controlTrack-bgColor-disabled)',
          fg: 'var(--controlTrack-fgColor-rest)',
          disabledFg: 'var(--controlTrack-fgColor-disabled)',
          border: 'var(--controlTrack-borderColor-rest)',
          checked: {
            bg: 'var(--control-checked-bgColor-rest)',
            hoverBg: 'var(--control-checked-bgColor-hover)',
            activeBg: 'var(--control-checked-bgColor-active)',
            border: 'var(--transparent)',
            fg: 'var(--control-checked-fgColor-rest)',
            disabledFg: 'var(--control-checked-fgColor-disabled)',
          },
        },
        switchKnob: {
          bg: 'var(--controlKnob-bgColor-rest)',
          disabledBg: 'var(--controlKnob-bgColor-disabled)',
          border: 'var(--controlKnob-borderColor-rest)',
          checked: {
            bg: 'var(--controlKnob-bgColor-checked)',
            disabledBg: 'var(--controlKnob-bgColor-disabled)',
            border: 'var(--controlKnob-borderColor-checked)',
          },
        },
        segmentedControl: {
          bg: 'var(--controlTrack-bgColor-rest)',
          button: {
            bg: 'var(--controlKnob-bgColor-rest)',
            hover: {
              bg: 'var(--controlTrack-bgColor-hover)',
            },
            active: {
              bg: 'var(--controlTrack-bgColor-active)',
            },
            selected: {
              border: 'var(--controlKnob-borderColor-rest)',
            },
          },
        },
        treeViewItem: {
          chevron: {
            hoverBg: 'var(--control-transparent-bgColor-hover)',
          },
          directory: {
            fill: 'var(--treeViewItem-leadingVisual-iconColor-rest)',
          },
        },
        fg: {
          default: 'var(--fgColor-default)',
          muted: 'var(--fgColor-muted)',
          subtle: 'var(--fgColor-muted)',
          onEmphasis: 'var(--fgColor-onEmphasis)',
        },
        canvas: {
          default: 'var(--bgColor-default)',
          overlay: 'var(--overlay-bgColor)',
          inset: 'var(--bgColor-muted)',
          subtle: 'var(--bgColor-muted)',
        },
        border: {
          default: 'var(--borderColor-default)',
          muted: 'var(--borderColor-muted)',
          subtle: 'var(--borderColor-muted)',
        },
        neutral: {
          emphasisPlus: 'var(--bgColor-emphasis)',
          emphasis: 'var(--bgColor-neutral-emphasis)',
          muted: 'var(--borderColor-neutral-muted)',
          subtle: 'var(--bgColor-neutral-muted)',
        },
        accent: {
          fg: 'var(--fgColor-accent)',
          emphasis: 'var(--bgColor-accent-emphasis)',
          muted: 'var(--borderColor-accent-muted)',
          subtle: 'var(--bgColor-accent-muted)',
        },
        success: {
          fg: 'var(--fgColor-success)',
          emphasis: 'var(--bgColor-success-emphasis)',
          muted: 'var(--borderColor-success-muted)',
          subtle: 'var(--bgColor-success-muted)',
        },
        attention: {
          fg: 'var(--fgColor-attention)',
          emphasis: 'var(--bgColor-attention-emphasis)',
          muted: 'var(--borderColor-attention-muted)',
          subtle: 'var(--bgColor-attention-muted)',
        },
        severe: {
          fg: 'var(--fgColor-severe)',
          emphasis: 'var(--bgColor-severe-emphasis)',
          muted: 'var(--borderColor-severe-muted)',
          subtle: 'var(--bgColor-severe-muted)',
        },
        danger: {
          fg: 'var(--fgColor-danger)',
          emphasis: 'var(--bgColor-danger-emphasis)',
          muted: 'var(--borderColor-danger-muted)',
          subtle: 'var(--bgColor-danger-muted)',
        },
        open: {
          fg: 'var(--fgColor-open)',
          emphasis: 'var(--bgColor-open-emphasis)',
          muted: 'var(--borderColor-open-muted)',
          subtle: 'var(--bgColor-open-muted)',
        },
        closed: {
          fg: 'var(--fgColor-closed)',
          emphasis: 'var(--bgColor-closed-emphasis)',
          muted: 'var(--borderColor-closed-muted)',
          subtle: 'var(--bgColor-closed-muted)',
        },
        done: {
          fg: 'var(--fgColor-done)',
          emphasis: 'var(--bgColor-done-emphasis)',
          muted: 'var(--borderColor-done-muted)',
          subtle: 'var(--bgColor-done-muted)',
        },
        sponsors: {
          fg: 'var(--fgColor-sponsors)',
          emphasis: 'var(--bgColor-sponsors-emphasis)',
          muted: 'var(--borderColor-sponsors-muted)',
          subtle: 'var(--bgColor-sponsors-muted)',
        },
        primer: {
          fg: {
            disabled: 'var(--fgColor-disabled)',
          },
          canvas: {
            backdrop: 'var(--overlay-backdrop-bgColor)',
            sticky: 'rgba(255,255,255,0)',
          },
          border: {
            active: 'var(--underlineNav-borderColor-active)',
            contrast: 'var(--borderColor-muted)',
          },
        },
      },
      shadows: {
        avatar: {
          childShadow: 'var(--avatar-shadow)',
        },
        btn: {
          shadow: 'var(--button-default-shadow-resting)',
          insetShadow: 'var(--button-default-shadow-inset)',
          primary: {
            shadow: 'var(--shadow-resting-small)',
            insetShadow: 'var(--shadow-highlight)',
            selectedShadow: 'var(--button-primary-shadow-selected)',
          },
          outline: {
            shadow: 'var(--shadow-resting-small)',
            hoverInsetShadow: 'var(--shadow-highlight)',
            selectedShadow: 'var(--button-outline-shadow-selected)',
          },
          danger: {
            shadow: 'var(--shadow-resting-small)',
            hoverInsetShadow: 'var(--shadow-highlight)',
            selectedShadow: 'var(--button-danger-shadow-selected)',
          },
        },
        overlay: {
          shadow: 'var(--shadow-floating-small)',
        },
      },
    },
  },
})

// storyType is a decorator connected to a parameter which lets us configure story-specific layouts and other customization at the global level.
// type 'swatch' is the default, and creates a simple responsive grid of swatches.

export const decorators = [
  (Story, context) => {
    const {parameters} = context
    const defaultStoryType = 'swatch'
    const storyType = parameters.storyType || defaultStoryType
    document.body.setAttribute('data-color-mode', context.globals.theme.startsWith('light') ? 'light' : 'dark')
    document.body.setAttribute(
      'data-light-theme',
      context.globals.theme.startsWith('light') ? context.globals.theme : undefined,
    )
    document.body.setAttribute(
      'data-dark-theme',
      context.globals.theme.startsWith('dark') ? context.globals.theme : undefined,
    )
    return (
      <ThemeProvider theme={tempTheme}>
        {context.globals.theme === 'all' ? (
          primerThemes.map(({value: theme}) => (
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
          ))
        ) : (
          <div className={clsx('story-wrap', parameters.storyType === 'swatch' && 'SwatchDecorator')}>
            <Story {...context} />
          </div>
        )}
      </ThemeProvider>
    )
  },
]

export default preview
