import {alpha, darken, lighten, get} from '../../../src/utils-v1'

export default {
  control: {
    borderColor: {
      emphasis: "var(undefined, var(--color-borderColor-emphasis, #606771))"
    }
  },
  avatar: {
    bg: (theme: any) => `var(--avatar-bgColor, var(--color-avatar-bg, ${alpha(get('scale.white'), 0.1)(theme)}))`,
    border: (theme: any) => `var(--avatar-borderColor, var(--color-avatar-border, ${get('border.subtle')(theme)}))`,
    stackFade: (theme: any) => `var(--avatarStack-fade-bgColor-default, var(--color-avatar-stack-fade, ${get('scale.gray.6')(theme)}))`,
    stackFadeMore: (theme: any) => `var(--avatarStack-fade-bgColor-muted, var(--color-avatar-stack-fade-more, ${get('scale.gray.7')(theme)}))`,
    childShadow: (theme: any) => `var(--avatar-shadow, var(--color-avatar-child-shadow, 0 0 0 2px ${get('scale.gray.9')(theme)}))`
  },
  topicTag: {
    border: "var(undefined, var(--color-topicTag-border, transparent))"
  },
  counter: {
    border: "var(--counter-borderColor, var(--color-counter-border, transparent))"
  },
  selectMenu: {
    backdropBorder: (theme: any) => `var(undefined, var(--color-selectMenu-backdrop-border, ${get('scale.gray.5')(theme)}))`,
    tapHighlight: (theme: any) => `var(undefined, var(--color-selectMenu-tap-highlight, ${alpha(get('scale.gray.6'), 0.5)(theme)}))`,
    tapFocusBg: (theme: any) => `var(undefined, var(--color-selectMenu-tap-focus-bg, ${get('scale.blue.8')(theme)}))`
  },
  overlay: {
    shadow: (theme: any) =>
      `var(--shadow-floating-small, var(--color-overlay-shadow, 0 0 0 1px ${get('scale.gray.6')(theme)}, 0 16px 32px ${alpha(get('scale.black'), 0.85)(theme)}))`,
    backdrop: (theme: any) => `var(--overlay-backdrop-bgColor, var(--color-overlay-backdrop, ${alpha(get('scale.gray.8'), 0.4)(theme)}))`
  },
  header: {
    text: (theme: any) => `var(--header-fgColor-default, var(--color-header-text, ${alpha(get('scale.white'), 0.7)(theme)}))`,
    bg: (theme: any) => `var(--header-bgColor, var(--color-header-bg, ${get('scale.gray.8')(theme)}))`,
    divider: (theme: any) => `var(--header-borderColor-divider, var(--color-header-divider, ${get('scale.gray.3')(theme)}))`,
    logo: (theme: any) => `var(--header-fgColor-logo, var(--color-header-logo, ${get('scale.gray.0')(theme)}))`
  },
  headerSearch: {
    bg: (theme: any) => `var(undefined, var(--color-headerSearch-bg, ${get('scale.gray.9')(theme)}))`,
    border: (theme: any) => `var(undefined, var(--color-headerSearch-border, ${get('scale.gray.6')(theme)}))`
  },
  sidenav: {
    selectedBg: (theme: any) => `var(--sideNav-bgColor-selected, var(--color-sidenav-selected-bg, ${get('scale.gray.7')(theme)}))`
  },
  menu: {
    bgActive: (theme: any) => `var(--menu-bgColor-active, var(--color-menu-bg-active, ${get('scale.gray.8')(theme)}))`
  },
  input: {
    disabledBg: (theme: any) => `var(--control-bgColor-disabled, var(--color-input-disabled-bg, ${alpha(get('neutral.muted'), 0.5)(theme)}))`
  },
  diffstat: {
    additionBg: (theme: any) => `var(undefined, var(--color-diffstat-addition-bg, ${get('scale.green.3')(theme)}))`
  },
  timeline: {
    badgeBg: (theme: any) => `var(--timelineBadge-bgColor, var(--color-timeline-badge-bg, ${get('scale.gray.7')(theme)}))` // needs to be opaque
  },
  ansi: {
    black: (theme: any) => `var(undefined, var(--color-ansi-black, ${get('scale.gray.5')(theme)}))`,
    blackBright: (theme: any) => `var(undefined, var(--color-ansi-black-bright, ${get('scale.gray.4')(theme)}))`,
    white: (theme: any) => `var(undefined, var(--color-ansi-white, ${get('scale.gray.2')(theme)}))`,
    whiteBright: (theme: any) => `var(undefined, var(--color-ansi-white-bright, ${get('scale.white')(theme)}))`,
    gray: (theme: any) => `var(undefined, var(--color-ansi-gray, ${get('scale.gray.4')(theme)}))`,
    red: (theme: any) => `var(undefined, var(--color-ansi-red, ${get('scale.red.3')(theme)}))`,
    redBright: (theme: any) => `var(undefined, var(--color-ansi-red-bright, ${get('scale.red.2')(theme)}))`,
    green: (theme: any) => `var(undefined, var(--color-ansi-green, ${get('scale.green.3')(theme)}))`,
    greenBright: (theme: any) => `var(undefined, var(--color-ansi-green-bright, ${get('scale.green.2')(theme)}))`,
    yellow: (theme: any) => `var(undefined, var(--color-ansi-yellow, ${get('scale.yellow.3')(theme)}))`,
    yellowBright: (theme: any) => `var(undefined, var(--color-ansi-yellow-bright, ${get('scale.yellow.2')(theme)}))`,
    blue: (theme: any) => `var(undefined, var(--color-ansi-blue, ${get('scale.blue.3')(theme)}))`,
    blueBright: (theme: any) => `var(undefined, var(--color-ansi-blue-bright, ${get('scale.blue.2')(theme)}))`,
    magenta: (theme: any) => `var(undefined, var(--color-ansi-magenta, ${get('scale.purple.3')(theme)}))`,
    magentaBright: (theme: any) => `var(undefined, var(--color-ansi-magenta-bright, ${get('scale.purple.2')(theme)}))`,
    cyan: "var(undefined, var(--color-ansi-cyan, #39c5cf))",
    cyanBright: "var(undefined, var(--color-ansi-cyan-bright, #56d4dd))"
  },
  btn: {
    text: (theme: any) => `var(--button-default-fgColor-rest, var(--color-btn-text, ${get('scale.gray.1')(theme)}))`,
    bg: (theme: any) => `var(--control-bgColor-rest, var(--color-btn-bg, ${get('scale.gray.7')(theme)}))`,
    border: (theme: any) => `var(--control-borderColor-rest, var(--color-btn-border, ${get('border.subtle')(theme)}))`,
    shadow: "var(--button-default-shadow-resting, var(--color-btn-shadow, 0 0 transparent))",
    insetShadow: "var(--button-default-shadow-inset, var(--color-btn-inset-shadow, 0 0 transparent))",
    hoverBg: (theme: any) => `var(--control-bgColor-hover, var(--color-btn-hover-bg, ${get('scale.gray.6')(theme)}))`,
    hoverBorder: (theme: any) => `var(--button-default-borderColor-hover, var(--color-btn-hover-border, ${get('scale.gray.3')(theme)}))`,
    activeBg: (theme: any) => `var(--button-default-bgColor-active, var(--color-btn-active-bg, ${darken(get('scale.gray.6'), 0.03)(theme)}))`,
    activeBorder: (theme: any) => `var(--button-default-borderColor-active, var(--color-btn-active-border, ${get('scale.gray.4')(theme)}))`,
    selectedBg: (theme: any) => `var(--control-bgColor-active, var(--color-btn-selected-bg, ${get('scale.gray.8')(theme)}))`,
    counterBg: (theme: any) => `var(--buttonCounter-default-bgColor-rest, var(--color-btn-counter-bg, ${get('scale.gray.6')(theme)}))`,

    primary: {
      text: "var(undefined, var(--color-primary-text, #ffffff))",
      bg: (theme: any) => `var(undefined, var(--color-primary-bg, ${get('scale.green.5')(theme)}))`,
      border: (theme: any) => `var(undefined, var(--color-primary-border, ${get('border.subtle')(theme)}))`,
      shadow: "var(undefined, var(--color-primary-shadow, 0 0 transparent))",
      insetShadow: "var(undefined, var(--color-primary-inset-shadow, 0 0 transparent))",
      hoverBg: (theme: any) => `var(undefined, var(--color-primary-hover-bg, ${get('scale.green.4')(theme)}))`,
      hoverBorder: (theme: any) => `var(undefined, var(--color-primary-hover-border, ${get('border.subtle')(theme)}))`,
      selectedBg: (theme: any) => `var(undefined, var(--color-primary-selected-bg, ${get('scale.green.5')(theme)}))`,
      selectedShadow: "var(undefined, var(--color-primary-selected-shadow, 0 0 transparent))",
      disabledText: (theme: any) => `var(undefined, var(--color-primary-disabled-text, ${alpha(get('scale.white'), 0.5)(theme)}))`,
      disabledBg: (theme: any) => `var(undefined, var(--color-primary-disabled-bg, ${alpha(get('scale.green.5'), 0.6)(theme)}))`,
      disabledBorder: (theme: any) => `var(undefined, var(--color-primary-disabled-border, ${get('border.subtle')(theme)}))`,
      icon: (theme: any) => `var(undefined, var(--color-primary-icon, ${get('scale.white')(theme)}))`,
      counterBg: (theme: any) => `var(undefined, var(--color-primary-counter-bg, ${alpha(get('scale.green.9'), 0.2)(theme)}))`
    },

    outline: {
      text: (theme: any) => `var(undefined, var(--color-outline-text, ${get('scale.blue.4')(theme)}))`,
      hoverText: (theme: any) => `var(undefined, var(--color-outline-hover-text, ${get('scale.blue.3')(theme)}))`,
      hoverBg: (theme: any) => `var(undefined, var(--color-outline-hover-bg, ${get('scale.gray.6')(theme)}))`,
      hoverBorder: (theme: any) => `var(undefined, var(--color-outline-hover-border, ${get('border.subtle')(theme)}))`,
      hoverShadow: (theme: any) => `var(undefined, var(--color-outline-hover-shadow, 0 1px 0 ${alpha(get('scale.black'), 0.1)(theme)}))`,
      hoverInsetShadow: (theme: any) => `var(undefined, var(--color-outline-hover-inset-shadow, inset 0 1px 0 ${alpha(get('scale.white'), 0.03)(theme)}))`,
      hoverCounterBg: (theme: any) => `var(undefined, var(--color-outline-hover-counter-bg, ${alpha(get('scale.blue.9'), 0.2)(theme)}))`,
      selectedText: (theme: any) => `var(undefined, var(--color-outline-selected-text, ${get('scale.white')(theme)}))`,
      selectedBg: (theme: any) => `var(undefined, var(--color-outline-selected-bg, ${get('scale.blue.7')(theme)}))`,
      selectedBorder: (theme: any) => `var(undefined, var(--color-outline-selected-border, ${get('border.subtle')(theme)}))`,
      selectedShadow: "var(undefined, var(--color-outline-selected-shadow, 0 0 transparent))",
      disabledText: (theme: any) => `var(undefined, var(--color-outline-disabled-text, ${alpha(get('scale.blue.3'), 0.5)(theme)}))`,
      disabledBg: (theme: any) => `var(undefined, var(--color-outline-disabled-bg, ${get('scale.gray.9')(theme)}))`,
      disabledCounterBg: (theme: any) => `var(undefined, var(--color-outline-disabled-counter-bg, ${alpha(get('scale.blue.5'), 0.05)(theme)}))`,
      counterBg: (theme: any) => `var(undefined, var(--color-outline-counter-bg, ${alpha(get('scale.blue.9'), 0.2)(theme)}))`,
      hoverCounterFg: (theme: any) => `var(undefined, var(--color-outline-hover-counter-fg, ${get('scale.blue.3')(theme)}))`,
      disabledCounterFg: (theme: any) => `var(undefined, var(--color-outline-disabled-counter-fg, ${alpha(get('accent.fg'), 0.5)(theme)}))`,
      counterFg: (theme: any) => `var(undefined, var(--color-outline-counter-fg, ${get('scale.blue.4')(theme)}))`,
    },

    danger: {
      text: (theme: any) => `var(undefined, var(--color-danger-text, ${get('scale.red.4')(theme)}))`,
      hoverText: (theme: any) => `var(undefined, var(--color-danger-hover-text, ${get('fg.onEmphasis')(theme)}))`,
      hoverBg: (theme: any) => `var(undefined, var(--color-danger-hover-bg, ${get('scale.red.5')(theme)}))`,
      hoverBorder: (theme: any) => `var(undefined, var(--color-danger-hover-border, ${get('scale.red.4')(theme)}))`,
      hoverShadow: "var(undefined, var(--color-danger-hover-shadow, 0 0 transparent))",
      hoverInsetShadow: "var(undefined, var(--color-danger-hover-inset-shadow, 0 0 transparent))",
      hoverIcon: (theme: any) => `var(undefined, var(--color-danger-hover-icon, ${get('fg.onEmphasis')(theme)}))`,
      hoverCounterBg: (theme: any) => `var(undefined, var(--color-danger-hover-counter-bg, ${alpha('#fff', 0.2)(theme)}))`,
      selectedText: "var(undefined, var(--color-danger-selected-text, #ffffff))",
      selectedBg: (theme: any) => `var(undefined, var(--color-danger-selected-bg, ${get('scale.red.6')(theme)}))`,
      selectedBorder: (theme: any) => `var(undefined, var(--color-danger-selected-border, ${get('scale.red.3')(theme)}))`,
      selectedShadow: "var(undefined, var(--color-danger-selected-shadow, 0 0 transparent))",
      disabledText: (theme: any) => `var(undefined, var(--color-danger-disabled-text, ${alpha(get('scale.red.4'), 0.5)(theme)}))`,
      disabledBg: (theme: any) => `var(undefined, var(--color-danger-disabled-bg, ${get('scale.gray.9')(theme)}))`,
      disabledCounterBg: (theme: any) => `var(undefined, var(--color-danger-disabled-counter-bg, ${alpha(get('scale.red.5'), 0.05)(theme)}))`,
      counterBg: (theme: any) => `var(undefined, var(--color-danger-counter-bg, ${alpha(get('scale.red.9'), 0.2)(theme)}))`,
      icon: (theme: any) => `var(undefined, var(--color-danger-icon, ${get('scale.red.4')(theme)}))`,
      counterFg: (theme: any) => `var(undefined, var(--color-danger-counter-fg, ${get('danger.fg')(theme)}))`,
      disabledCounterFg: (theme: any) => `var(undefined, var(--color-danger-disabled-counter-fg, ${alpha(get('danger.fg'), 0.5)(theme)}))`,
      hoverCounterFg: (theme: any) => `var(undefined, var(--color-danger-hover-counter-fg, ${get('scale.white')(theme)}))`
    },

    inactive: {
      bg: (theme: any) => `var(undefined, var(--color-inactive-bg, ${get('scale.gray.7')(theme)}))`,
      text: (theme: any) => `var(undefined, var(--color-inactive-text, ${get('scale.gray.3')(theme)}))`,
    }
  },
  underlinenav: {
    icon: (theme: any) => `var(--underlineNav-iconColor-rest, var(--color-underlinenav-icon, ${get('fg.subtle')(theme)}))`,
    borderHover: (theme: any) => `var(--underlineNav-borderColor-hover, var(--color-underlinenav-border-hover, ${get('neutral.muted')(theme)}))`
  },

  actionListItem: {
    inlineDivider: (theme: any) => `var(undefined, var(--color-actionListItem-inline-divider, ${alpha(get('border.default'), 0.48)(theme)}))`,

    default: {
      hoverBg: (theme: any) => `var(undefined, var(--color-default-hover-bg, ${alpha(get('scale.gray.2'), 0.12)(theme)}))`,
      hoverBorder: "var(undefined, var(--color-default-hover-border, transparent))",
      activeBg: (theme: any) => `var(undefined, var(--color-default-active-bg, ${alpha(get('scale.gray.2'), 0.2)(theme)}))`,
      activeBorder: "var(undefined, var(--color-default-active-border, transparent))",
      selectedBg: (theme: any) => `var(undefined, var(--color-default-selected-bg, ${alpha(get('scale.gray.2'), 0.08)(theme)}))`
    },
    danger: {
      hoverBg: (theme: any) => `var(undefined, var(--color-danger-hover-bg, ${alpha(get('scale.red.4'), 0.16)(theme)}))`,
      activeBg: (theme: any) => `var(undefined, var(--color-danger-active-bg, ${alpha(get('scale.red.4'), 0.24)(theme)}))`,
      hoverText: (theme: any) => `var(undefined, var(--color-danger-hover-text, ${get('scale.red.3')(theme)}))`
    }
  },

  switchTrack: {
    bg: (theme: any) => `var(undefined, var(--color-switchTrack-bg, ${get('neutral.subtle')(theme)}))`,
    hoverBg: (theme: any) => `var(undefined, var(--color-switchTrack-hover-bg, ${lighten(get('neutral.subtle'), 0.25)(theme)}))`,
    activeBg: (theme: any) => `var(undefined, var(--color-switchTrack-active-bg, ${get('neutral.muted')(theme)}))`,
    disabledBg: (theme: any) => `var(undefined, var(--color-switchTrack-disabled-bg, ${get('scale.gray.7')(theme)}))`,
    fg: (theme: any) => `var(undefined, var(--color-switchTrack-fg, ${get('fg.muted')(theme)}))`,
    disabledFg: (theme: any) => `var(undefined, var(--color-switchTrack-disabled-fg, ${get('scale.black')(theme)}))`,
    border: "var(undefined, var(--color-switchTrack-border, transparent))",  // TODO: remove this in next major release

    checked: {
      bg: (theme: any) => `var(undefined, var(--color-checked-bg, ${alpha(get('scale.blue.5'), 0.35)(theme)}))`,
      hoverBg: (theme: any) => `var(undefined, var(--color-checked-hover-bg, ${alpha(get('scale.blue.5'), 0.5)(theme)}))`,
      activeBg: (theme: any) => `var(undefined, var(--color-checked-active-bg, ${alpha(get('scale.blue.5'), 0.65)(theme)}))`,
      fg: (theme: any) => `var(undefined, var(--color-checked-fg, ${get('fg.onEmphasis')(theme)}))`,
      disabledFg: (theme: any) => `var(undefined, var(--color-checked-disabled-fg, ${get('scale.black')(theme)}))`,
      border: "var(undefined, var(--color-checked-border, transparent))",  // TODO: remove this in next major release
    }
  },

  switchKnob: {
    bg: (theme: any) => `var(undefined, var(--color-switchKnob-bg, ${get('canvas.default')(theme)}))`,
    border: "var(undefined, var(--color-switchKnob-border, #606771))", // control contrast border https://github.com/primer/primitives/pull/485
    disabledBg: (theme: any) => `var(undefined, var(--color-switchKnob-disabled-bg, ${get('canvas.subtle')(theme)}))`,

    checked: {
      bg: (theme: any) => `var(undefined, var(--color-checked-bg, ${get('canvas.default')(theme)}))`, // TODO: remove this in next major release
      disabledBg: (theme: any) => `var(undefined, var(--color-checked-disabled-bg, ${get('canvas.subtle')(theme)}))`, // TODO: remove this in next major release
      border: (theme: any) => `var(undefined, var(--color-checked-border, ${alpha(get('scale.blue.5'), 0.35)(theme)}))`,
    }
  },

  segmentedControl: {
    bg: (theme: any) => `var(undefined, var(--color-segmentedControl-bg, ${get('neutral.subtle')(theme)}))`,

    button: {
      bg: (theme: any) => `var(undefined, var(--color-button-bg, ${get('canvas.default')(theme)}))`,
      hover: {
        bg: (theme: any) => `var(undefined, var(--color-hover-bg, ${get('scale.gray.6')(theme)}))`,
      },

      active: {
        bg: (theme: any) => `var(undefined, var(--color-active-bg, ${get('scale.gray.7')(theme)}))`,
      },

      selected: {
        border: (theme: any) => `var(undefined, var(--color-selected-border, ${get('scale.gray.4')(theme)}))`,
      },
    },
  },

  treeViewItem: {
    chevron: {
      hoverBg: (theme: any) => `var(undefined, var(--color-chevron-hover-bg, ${alpha(get('scale.gray.2'), 0.12)(theme)}))`,
    },
    directory: {
      fill: (theme: any) => `var(undefined, var(--color-directory-fill, ${get('fg.muted')(theme)}))`
    }
  },
}
