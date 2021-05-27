import {alpha, darken, get} from '../../../src/utils'

export default {
  primer: {
    // These variables are shared across multiple components
    canvas: {
      backdrop: alpha(get('scale.black'), 0.5), // use for modal/dialogs
      sticky: alpha(get('scale.white'), 0.95) // use for sticky headers
    },
    border: {
      active: '#f9826c', // coral
      contrast: alpha(get('scale.black'), 0.1) // use to increase contrast
    },
    shadow: {
      highlight: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.white'), 0.25)(theme)}`, // top highlight
      inset: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.gray.2'), 0.2)(theme)}`, // top inner shadow
      focus: (theme: any) => `0 0 0 3px ${alpha(get('scale.blue.5'), 0.3)(theme)}` // blue focus ring
    }
  },
  avatar: {
    bg: get('scale.white'),
    border: 'transparent',
    stackFade: get('scale.gray.3'),
    stackFadeMore: get('scale.gray.2'),
    childShadow: (theme: any) => `-2px -2px 0 ${alpha(get('scale.white'), 0.8)(theme)}`
  },
  selectMenu: {
    backdropBorder: 'transparent',
    tapHighlight: alpha(get('scale.gray.3'), 0.5),
    tapFocusBg: get('scale.blue.1')
  },
  header: {
    text: alpha(get('scale.white'), 0.7),
    bg: get('scale.gray.9'),
    logo: get('scale.white')
  },
  sidenav: {
    selectedBg: get('scale.white')
  },
  menu: {
    bgActive: 'transparent'
  },
  // TODO: Move to VSCode theme?
  ansi: {
    black: get('scale.gray.9'),
    blackBright: get('scale.gray.6'),
    white: get('scale.gray.5'),
    whiteBright: get('scale.gray.4'),
    gray: get('scale.gray.5'),
    red: get('scale.red.5'),
    redBright: get('scale.red.6'),
    green: get('scale.green.6'),
    greenBright: get('scale.green.5'),
    yellow: get('scale.yellow.8'),
    yellowBright: get('scale.yellow.7'),
    blue: get('scale.blue.5'),
    blueBright: get('scale.blue.4'),
    magenta: get('scale.purple.5'),
    magentaBright: get('scale.purple.4'),
    cyan: '#1b7c83',
    cyanBright: '#3192aa'
  },
  // Do we need all these btn variables?
  btn: {
    text: get('scale.gray.9'),
    bg: get('scale.gray.0'),
    border: alpha(get('scale.black'), 0.15),
    shadow: (theme: any) => `0 1px 0 ${alpha(get('scale.black'), 0.04)(theme)}`,
    insetShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.white'), 0.25)(theme)}`,
    hoverBg: '#f3f4f6',
    hoverBorder: alpha(get('scale.black'), 0.15),
    activeBg: darken(get('btn.hoverBg'), 0.03),
    activeBorder: alpha(get('scale.black'), 0.1),
    selectedBg: darken(get('btn.hoverBg'), 0.02),
    focusBg: get('scale.gray.0'),
    focusBorder: alpha(get('scale.black'), 0.15),
    focusShadow: (theme: any) => `0 0 0 3px ${alpha(get('scale.blue.5'), 0.3)(theme)}`,
    shadowActive: (theme: any) => `inset 0 0.15em 0.3em ${alpha(get('scale.black'), 0.15)(theme)}`, // TODO: Deprecate? Not used in Primer CSS
    shadowInputFocus: (theme: any) => `0 0 0 0.2em ${alpha(get('scale.blue.5'), 0.3)(theme)}`, // TODO: Deprecate?
    counterBg: alpha(get('scale.black'), 0.08),

    primary: {
      text: get('scale.white'),
      bg: '#2ea44f',
      border: alpha(get('scale.black'), 0.15),
      shadow: (theme: any) => `0 1px 0 ${alpha(get('scale.black'), 0.1)(theme)}`,
      insetShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.white'), 0.03)(theme)}`,
      hoverBg: '#2c974b',
      hoverBorder: alpha(get('scale.black'), 0.15),
      selectedBg: darken(get('btn.primary.hoverBg'), 0.02),
      selectedShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.green.9'), 0.2)(theme)}`,
      disabledText: alpha(get('scale.white'), 0.8),
      disabledBg: '#94d3a2',
      disabledBorder: alpha(get('scale.black'), 0.1),
      focusBg: '#2ea44f',
      focusBorder: alpha(get('scale.black'), 0.15),
      focusShadow: (theme: any) => `0 0 0 3px ${alpha(get('btn.primary.focusBg'), 0.4)(theme)}`,
      icon: alpha(get('scale.white'), 0.8),
      counterBg: alpha(get('scale.white'), 0.2)
    },

    outline: {
      text: get('scale.blue.5'),
      hoverText: get('scale.white'),
      hoverBg: get('scale.blue.5'),
      hoverBorder: alpha(get('scale.black'), 0.15),
      hoverShadow: (theme: any) => `0 1px 0 ${alpha(get('scale.black'), 0.1)(theme)}`,
      hoverInsetShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.white'), 0.03)(theme)}`,
      hoverCounterBg: alpha(get('scale.white'), 0.2),
      selectedText: get('scale.white'),
      selectedBg: darken(get('scale.blue.5'), 0.03),
      selectedBorder: alpha(get('scale.black'), 0.15),
      selectedShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.blue.9'), 0.2)(theme)}`,
      disabledText: alpha(get('scale.blue.5'), 0.5),
      disabledBg: get('scale.gray.0'),
      disabledCounterBg: alpha(get('scale.blue.5'), 0.05),
      focusBorder: alpha(get('scale.black'), 0.15),
      focusShadow: (theme: any) => `0 0 0 3px ${alpha(get('scale.blue.6'), 0.4)(theme)}`,
      counterBg: alpha(get('scale.blue.5'), 0.1)
    },

    danger: {
      text: get('scale.red.5'),
      hoverText: get('scale.white'),
      hoverBg: get('scale.red.6'),
      hoverBorder: alpha(get('scale.black'), 0.15),
      hoverShadow: (theme: any) => `0 1px 0 ${alpha(get('scale.black'), 0.1)(theme)}`,
      hoverInsetShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.white'), 0.03)(theme)}`,
      hoverCounterBg: alpha(get('scale.white'), 0.2),
      selectedText: get('scale.white'),
      selectedBg: darken(get('scale.red.5'), 0.03),
      selectedBorder: alpha(get('scale.black'), 0.15),
      selectedShadow: (theme: any) => `inset 0 1px 0 ${alpha(get('scale.red.9'), 0.2)(theme)}`,
      disabledText: alpha(get('scale.red.5'), 0.5),
      disabledBg: get('scale.gray.0'),
      disabledCounterBg: alpha(get('scale.red.5'), 0.05),
      focusBorder: alpha(get('scale.black'), 0.15),
      focusShadow: (theme: any) => `0 0 0 3px ${alpha(get('scale.red.6'), 0.4)(theme)}`,
      counterBg: alpha(get('scale.red.5'), 0.1),
      icon: get('scale.red.5'),
      hoverIcon: get('scale.white')
    }
  }
}
