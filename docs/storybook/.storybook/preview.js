import './preview.css'
import clsx from 'clsx'
import {ThemeProvider, theme} from '@primer/react'
import {themes} from '@storybook/theming'
import deepmerge from 'deepmerge'

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

const tempTheme = deepmerge(theme, {
  colors: {
    canvasDefaultTransparent: 'rgba(255,255,255,0)',
    pageHeaderBg: '#f6f8fa',
    marketingIcon: {
      primary: '#218bff',
      secondary: '#54aeff',
    },
    diffBlob: {
      addition: {
        numText: '#24292f',
        fg: '#24292f',
        numBg: '#ccffd8',
        lineBg: '#e6ffec',
        wordBg: '#abf2bc',
      },
      deletion: {
        numText: '#24292f',
        fg: '#24292f',
        numBg: '#ffd7d5',
        lineBg: '#ffebe9',
        wordBg: 'rgba(255,129,130,0.4)',
      },
      hunk: {
        numBg: 'rgba(84,174,255,0.4)',
      },
      expander: {
        icon: '#57606a',
      },
    },
    diffstat: {
      deletionBorder: 'rgba(27,31,36,0.15)',
      additionBorder: 'rgba(27,31,36,0.15)',
      additionBg: '#2da44e',
    },
    searchKeyword: {
      hl: '#fff8c5',
    },
    prettylights: {
      syntax: {
        comment: '#6e7781',
        constant: '#0550ae',
        entity: '#8250df',
        storageModifierImport: '#24292f',
        entityTag: '#116329',
        keyword: '#cf222e',
        string: '#0a3069',
        variable: '#953800',
        brackethighlighterUnmatched: '#82071e',
        invalidIllegalText: '#f6f8fa',
        invalidIllegalBg: '#82071e',
        carriageReturnText: '#f6f8fa',
        carriageReturnBg: '#cf222e',
        stringRegexp: '#116329',
        markupList: '#3b2300',
        markupHeading: '#0550ae',
        markupItalic: '#24292f',
        markupBold: '#24292f',
        markupDeletedText: '#82071e',
        markupDeletedBg: '#ffebe9',
        markupInsertedText: '#116329',
        markupInsertedBg: '#dafbe1',
        markupChangedText: '#953800',
        markupChangedBg: '#ffd8b5',
        markupIgnoredText: '#eaeef2',
        markupIgnoredBg: '#0550ae',
        metaDiffRange: '#8250df',
        brackethighlighterAngle: '#57606a',
        sublimelinterGutterMark: '#8c959f',
        constantOtherReferenceLink: '#0a3069',
      },
    },
    codemirror: {
      text: '#24292f',
      bg: '#ffffff',
      guttersBg: '#ffffff',
      guttermarkerText: '#ffffff',
      guttermarkerSubtleText: '#6e7781',
      linenumberText: '#57606a',
      cursor: '#24292f',
      selectionBg: 'rgba(84,174,255,0.4)',
      activelineBg: 'rgba(234,238,242,0.5)',
      matchingbracketText: '#24292f',
      linesBg: '#ffffff',
      syntax: {
        comment: '#24292f',
        constant: '#0550ae',
        entity: '#8250df',
        keyword: '#cf222e',
        storage: '#cf222e',
        string: '#0a3069',
        support: '#0550ae',
        variable: '#953800',
      },
    },
    checks: {
      bg: '#24292f',
      textPrimary: '#f6f8fa',
      textSecondary: '#8c959f',
      textLink: '#54aeff',
      btnIcon: '#afb8c1',
      btnHoverIcon: '#f6f8fa',
      btnHoverBg: 'rgba(255,255,255,0.125)',
      inputText: '#eaeef2',
      inputPlaceholderText: '#8c959f',
      inputFocusText: '#8c959f',
      inputBg: '#32383f',
      donutError: '#fa4549',
      donutPending: '#bf8700',
      donutSuccess: '#2da44e',
      donutNeutral: '#afb8c1',
      dropdownText: '#afb8c1',
      dropdownBg: '#32383f',
      dropdownBorder: '#424a53',
      dropdownShadow: 'rgba(27,31,36,0.3)',
      dropdownHoverText: '#f6f8fa',
      dropdownHoverBg: '#424a53',
      dropdownBtnHoverText: '#f6f8fa',
      dropdownBtnHoverBg: '#32383f',
      scrollbarThumbBg: '#57606a',
      headerLabelText: '#d0d7de',
      headerLabelOpenText: '#f6f8fa',
      headerBorder: '#32383f',
      headerIcon: '#8c959f',
      lineText: '#d0d7de',
      lineNumText: 'rgba(140,149,159,0.75)',
      lineTimestampText: '#8c959f',
      lineHoverBg: '#32383f',
      lineSelectedBg: 'rgba(33,139,255,0.15)',
      lineSelectedNumText: '#54aeff',
      lineDtFmText: '#24292f',
      lineDtFmBg: '#9a6700',
      gateBg: 'rgba(125,78,0,0.15)',
      gateText: '#d0d7de',
      gateWaitingText: '#d4a72c',
      stepHeaderOpenBg: '#32383f',
      stepErrorText: '#ff8182',
      stepWarningText: '#d4a72c',
      loglineText: '#8c959f',
      loglineNumText: 'rgba(140,149,159,0.75)',
      loglineDebugText: '#c297ff',
      loglineErrorText: '#d0d7de',
      loglineErrorNumText: '#ff8182',
      loglineErrorBg: 'rgba(164,14,38,0.15)',
      loglineWarningText: '#d0d7de',
      loglineWarningNumText: '#d4a72c',
      loglineWarningBg: 'rgba(125,78,0,0.15)',
      loglineCommandText: '#54aeff',
      loglineSectionText: '#4ac26b',
      ansi: {
        black: '#24292f',
        blackBright: '#32383f',
        white: '#d0d7de',
        whiteBright: '#d0d7de',
        gray: '#8c959f',
        red: '#ff8182',
        redBright: '#ffaba8',
        green: '#4ac26b',
        greenBright: '#6fdd8b',
        yellow: '#d4a72c',
        yellowBright: '#eac54f',
        blue: '#54aeff',
        blueBright: '#80ccff',
        magenta: '#c297ff',
        magentaBright: '#d8b9ff',
        cyan: '#76e3ea',
        cyanBright: '#b3f0ff',
      },
    },
    project: {
      headerBg: '#24292f',
      sidebarBg: '#ffffff',
      gradientIn: '#ffffff',
      gradientOut: 'rgba(255,255,255,0)',
    },
    mktg: {
      btn: {
        bg: '#1b1f23',
      },
    },
    avatar: {
      bg: 'var(--avatar-bgColor)',
      border: 'var(--avatar-borderColor)',
      stackFade: 'var(--avatarStack-fade-bgColor-default)',
      stackFadeMore: 'var(--avatarStack-fade-bgColor-secondary)',
    },
    topicTag: {
      border: 'var(--topicTag-borderColor)',
    },
    counter: {
      border: 'var(--counter-borderColor)',
    },
    selectMenu: {
      backdropBorder: 'rgba(0,0,0,0)',
      tapHighlight: 'rgba(175,184,193,0.5)',
      tapFocusBg: '#b6e3ff',
    },
    header: {
      text: 'rgba(255,255,255,0.7)',
      bg: '#24292f',
      divider: '#57606a',
      logo: '#ffffff',
    },
    headerSearch: {
      bg: '#24292f',
      border: '#57606a',
    },
    sidenav: {
      selectedBg: '#ffffff',
    },
    menu: {
      bgActive: 'rgba(0,0,0,0)',
    },
    input: {
      disabledBg: 'var(--control-bgColor-disabled)',
    },
    timeline: {
      badgeBg: 'var(--timelineBadge-bgColor)',
    },
    timeline: {
      badgeBg: '#eaeef2',
    },
    ansi: {
      black: '#24292f',
      blackBright: '#57606a',
      white: '#6e7781',
      whiteBright: '#8c959f',
      gray: '#6e7781',
      red: '#cf222e',
      redBright: '#a40e26',
      green: '#116329',
      greenBright: '#1a7f37',
      yellow: '#4d2d00',
      yellowBright: '#633c01',
      blue: '#0969da',
      blueBright: '#218bff',
      magenta: '#8250df',
      magentaBright: '#a475f9',
      cyan: '#1b7c83',
      cyanBright: '#3192aa',
    },
    btn: {
      text: 'var(--button-default-bgColor-rest)',
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
      inlineDivider: 'var(--control-transparent-borderColor)',
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
      border: 'var(--controlTrack-borderColor-rest)',
      checked: {
        bg: 'var(--control-checked-bgColor-rest)',
        hoverBg: 'var(--control-checked-bgColor-hover)',
        activeBg: 'var(--control-checked-bgColor-active)',
        border: 'var(--transparent)',
      },
    },
    switchKnob: {
      checked: {
        bg: 'var(--controlKnob-bgColor-checked)',
        disabledBg: 'var(--controlKnob-bgColor-disabled)',
      },
    },
    segmentedControl: {
      bg: 'var(--controlTrack-bgColor-rest)',
      button: {
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
        fill: 'var(--treeViewItem-leadingVisual-bgColor-rest)',
      },
    },
    fg: {
      default: 'var(--fgColor-default)',
      muted: 'var(--fgColor-secondary)',
      subtle: 'var(--fgColor-secondary)',
      onEmphasis: 'var(--fgColor-onEmphasis)',
    },
    canvas: {
      default: 'var(--bgColor-default)',
      overlay: 'var(--overlay-bgColor)',
      inset: 'var(--bgColor-secondary)',
      subtle: 'var(--bgColor-secondary)',
    },
    border: {
      default: 'var(--borderColor-default)',
      muted: 'var(--borderColor-secondary)',
      subtle: 'var(--borderColor-secondary)',
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
        contrast: 'var(--borderColor-secondary)',
      },
    },
  },
})

export const decorators = [
  (Story, context) => {
    const {parameters} = context
    const defaultStoryType = 'swatch'
    const storyType = parameters.storyType || defaultStoryType
    console.log(tempTheme)
    return (
      <ThemeProvider theme={tempTheme}>
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
      </ThemeProvider>
    )
  },
]
