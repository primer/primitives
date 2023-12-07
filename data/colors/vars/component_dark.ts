import {alpha, darken, lighten, get} from '../../../src/utils-v1'

export default {
  control: {
    borderColor: {
      emphasis: "var(--color-control-border-color-emphasis, #606771)"
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
    border: "var(--topicTag-borderColor, var(--color-topic-tag-border, transparent))"
  },
  counter: {
    border: "var(--counter-borderColor, var(--color-counter-border, transparent))"
  },
  selectMenu: {
    backdropBorder: (theme: any) => `var(--selectMenu-borderColor, var(--color-select-menu-backdrop-border, ${get('scale.gray.5')(theme)}))`,
    tapHighlight: (theme: any) => `var(--control-bgColor-active, var(--color-select-menu-tap-highlight, ${alpha(get('scale.gray.6'), 0.5)(theme)}))`,
    tapFocusBg: (theme: any) => `var(--selectMenu-bgColor-active, var(--color-select-menu-tap-focus-bg, ${get('scale.blue.8')(theme)}))`
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
    bg: (theme: any) => `var(--headerSearch-bgColor, var(--color-header-search-bg, ${get('scale.gray.9')(theme)}))`,
    border: (theme: any) => `var(--headerSearch-borderColor, var(--color-header-search-border, ${get('scale.gray.6')(theme)}))`
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
    additionBg: (theme: any) => `var(--diffStat-addition-bgColor, var(--color-diffstat-addition-bg, ${get('scale.green.3')(theme)}))`
  },
  timeline: {
    badgeBg: (theme: any) => `var(--timelineBadge-bgColor, var(--color-timeline-badge-bg, ${get('scale.gray.7')(theme)}))` // needs to be opaque
  },
  ansi: {
    black: (theme: any) => `var(--color-ansi-black, ${get('scale.gray.5')(theme)})`,
    blackBright: (theme: any) => `var(--color-ansi-black-bright, ${get('scale.gray.4')(theme)})`,
    white: (theme: any) => `var(--color-ansi-white, ${get('scale.gray.2')(theme)})`,
    whiteBright: (theme: any) => `var(--color-ansi-white-bright, ${get('scale.white')(theme)})`,
    gray: (theme: any) => `var(--color-ansi-gray, ${get('scale.gray.4')(theme)})`,
    red: (theme: any) => `var(--color-ansi-red, ${get('scale.red.3')(theme)})`,
    redBright: (theme: any) => `var(--color-ansi-red-bright, ${get('scale.red.2')(theme)})`,
    green: (theme: any) => `var(--color-ansi-green, ${get('scale.green.3')(theme)})`,
    greenBright: (theme: any) => `var(--color-ansi-green-bright, ${get('scale.green.2')(theme)})`,
    yellow: (theme: any) => `var(--color-ansi-yellow, ${get('scale.yellow.3')(theme)})`,
    yellowBright: (theme: any) => `var(--color-ansi-yellow-bright, ${get('scale.yellow.2')(theme)})`,
    blue: (theme: any) => `var(--color-ansi-blue, ${get('scale.blue.3')(theme)})`,
    blueBright: (theme: any) => `var(--color-ansi-blue-bright, ${get('scale.blue.2')(theme)})`,
    magenta: (theme: any) => `var(--color-ansi-magenta, ${get('scale.purple.3')(theme)})`,
    magentaBright: (theme: any) => `var(--color-ansi-magenta-bright, ${get('scale.purple.2')(theme)})`,
    cyan: "var(--color-ansi-cyan, #39c5cf)",
    cyanBright: "var(--color-ansi-cyan-bright, #56d4dd)"
  },
  btn: {
    text: (theme: any) => `var(--button-default-fgColor-rest, var(--color-btn-text, ${get('scale.gray.1')(theme)}))`,
    bg: (theme: any) => `var(--button-default-bgColor-rest, var(--color-btn-bg, ${get('scale.gray.7')(theme)}))`,
    border: (theme: any) => `var(--button-default-borderColor-rest, var(--color-btn-border, ${get('border.subtle')(theme)}))`,
    shadow: "var(--button-default-shadow-resting, var(--color-btn-shadow, 0 0 transparent))",
    insetShadow: "var(--button-default-shadow-inset, var(--color-btn-inset-shadow, 0 0 transparent))",
    hoverBg: (theme: any) => `var(--button-default-bgColor-hover, var(--color-btn-hover-bg, ${get('scale.gray.6')(theme)}))`,
    hoverBorder: (theme: any) => `var(--button-default-borderColor-hover, var(--color-btn-hover-border, ${get('scale.gray.3')(theme)}))`,
    activeBg: (theme: any) => `var(--button-default-bgColor-active, var(--color-btn-active-bg, ${darken(get('scale.gray.6'), 0.03)(theme)}))`,
    activeBorder: (theme: any) => `var(--button-default-borderColor-active, var(--color-btn-active-border, ${get('scale.gray.4')(theme)}))`,
    selectedBg: (theme: any) => `var(--button-default-bgColor-selected, var(--color-btn-selected-bg, ${get('scale.gray.8')(theme)}))`,
    counterBg: (theme: any) => `var(--buttonCounter-default-bgColor-rest, var(--color-btn-counter-bg, ${get('scale.gray.6')(theme)}))`,

    primary: {
      text: "var(--button-primary-fgColor-rest, var(--color-btn-primary-text, #ffffff))",
      bg: (theme: any) => `var(--button-primary-bgColor-rest, var(--color-btn-primary-bg, ${get('scale.green.5')(theme)}))`,
      border: (theme: any) => `var(--button-primary-borderColor-rest, var(--color-btn-primary-border, ${get('border.subtle')(theme)}))`,
      shadow: "var(--shadow-resting-small, var(--color-btn-primary-shadow, 0 0 transparent))",
      insetShadow: "var(--shadow-highlight, var(--color-btn-primary-inset-shadow, 0 0 transparent))",
      hoverBg: (theme: any) => `var(--button-primary-bgColor-hover, var(--color-btn-primary-hover-bg, ${get('scale.green.4')(theme)}))`,
      hoverBorder: (theme: any) => `var(--button-primary-borderColor-hover, var(--color-btn-primary-hover-border, ${get('border.subtle')(theme)}))`,
      selectedBg: (theme: any) => `var(--button-primary-bgColor-active, var(--color-btn-primary-selected-bg, ${get('scale.green.5')(theme)}))`,
      selectedShadow: "var(--button-primary-shadow-selected, var(--color-btn-primary-selected-shadow, 0 0 transparent))",
      disabledText: (theme: any) => `var(--button-primary-fgColor-disabled, var(--color-btn-primary-disabled-text, ${alpha(get('scale.white'), 0.5)(theme)}))`,
      disabledBg: (theme: any) => `var(--button-primary-bgColor-disabled, var(--color-btn-primary-disabled-bg, ${alpha(get('scale.green.5'), 0.6)(theme)}))`,
      disabledBorder: (theme: any) => `var(--button-primary-borderColor-disabled, var(--color-btn-primary-disabled-border, ${get('border.subtle')(theme)}))`,
      icon: (theme: any) => `var(--button-primary-iconColor-rest, var(--color-btn-primary-icon, ${get('scale.white')(theme)}))`,
      counterBg: (theme: any) => `var(--buttonCounter-primary-bgColor-rest, var(--color-btn-primary-counter-bg, ${alpha(get('scale.green.9'), 0.2)(theme)}))`
    },

    outline: {
      text: (theme: any) => `var(--button-outline-fgColor-rest, var(--color-btn-outline-text, ${get('scale.blue.4')(theme)}))`,
      hoverText: (theme: any) => `var(--button-outline-fgColor-hover, var(--color-btn-outline-hover-text, ${get('scale.blue.3')(theme)}))`,
      hoverBg: (theme: any) => `var(--button-outline-bgColor-hover, var(--color-btn-outline-hover-bg, ${get('scale.gray.6')(theme)}))`,
      hoverBorder: (theme: any) => `var(--button-outline-borderColor-hover, var(--color-btn-outline-hover-border, ${get('border.subtle')(theme)}))`,
      hoverShadow: (theme: any) => `var(--shadow-resting-small, var(--color-btn-outline-hover-shadow, 0 1px 0 ${alpha(get('scale.black'), 0.1)(theme)}))// HI_KATIE: no matches`,
      hoverInsetShadow: (theme: any) => `var(--shadow-highlight, var(--color-btn-outline-hover-inset-shadow, inset 0 1px 0 ${alpha(get('scale.white'), 0.03)(theme)}))// HI_KATIE: no matches`,
      hoverCounterBg: (theme: any) => `var(--buttonCounter-outline-bgColor-hover, var(--color-btn-outline-hover-counter-bg, ${alpha(get('scale.blue.9'), 0.2)(theme)}))`,
      selectedText: (theme: any) => `var(--button-outline-fgColor-active, var(--color-btn-outline-selected-text, ${get('scale.white')(theme)}))`,
      selectedBg: (theme: any) => `var(--button-outline-bgColor-active, var(--color-btn-outline-selected-bg, ${get('scale.blue.7')(theme)}))`,
      selectedBorder: (theme: any) => `var(--button-outline-borderColor-active, var(--color-btn-outline-selected-border, ${get('border.subtle')(theme)}))`,
      selectedShadow: "var(--button-outline-shadow-selected, var(--color-btn-outline-selected-shadow, 0 0 transparent))",
      disabledText: (theme: any) => `var(--button-outline-fgColor-disabled, var(--color-btn-outline-disabled-text, ${alpha(get('scale.blue.3'), 0.5)(theme)}))`,
      disabledBg: (theme: any) => `var(--button-outline-bgColor-disabled, var(--color-btn-outline-disabled-bg, ${get('scale.gray.9')(theme)}))`,
      disabledCounterBg: (theme: any) => `var(--buttonCounter-outline-bgColor-disabled, var(--color-btn-outline-disabled-counter-bg, ${alpha(get('scale.blue.5'), 0.05)(theme)}))`,
      counterBg: (theme: any) => `var(--buttonCounter-outline-bgColor-rest, var(--color-btn-outline-counter-bg, ${alpha(get('scale.blue.9'), 0.2)(theme)}))`,
      hoverCounterFg: (theme: any) => `var(--buttonCounter-outline-fgColor-hover, var(--color-btn-outline-hover-counter-fg, ${get('scale.blue.3')(theme)}))`,
      disabledCounterFg: (theme: any) => `var(--buttonCounter-outline-fgColor-disabled, var(--color-btn-outline-disabled-counter-fg, ${alpha(get('accent.fg'), 0.5)(theme)}))`,
      counterFg: (theme: any) => `var(--buttonCounter-outline-fgColor-rest, var(--color-btn-outline-counter-fg, ${get('scale.blue.4')(theme)}))`,
    },

    danger: {
      text: (theme: any) => `var(--button-danger-fgColor-rest, var(--color-btn-danger-text, ${get('scale.red.4')(theme)}))`,
      hoverText: (theme: any) => `var(--button-danger-fgColor-hover, var(--color-btn-danger-hover-text, ${get('fg.onEmphasis')(theme)}))`,
      hoverBg: (theme: any) => `var(--button-danger-bgColor-hover, var(--color-btn-danger-hover-bg, ${get('scale.red.5')(theme)}))`,
      hoverBorder: (theme: any) => `var(--button-danger-borderColor-hover, var(--color-btn-danger-hover-border, ${get('scale.red.4')(theme)}))`,
      hoverShadow: "var(--shadow-resting-small, var(--color-btn-danger-hover-shadow, 0 0 transparent))",
      hoverInsetShadow: "var(--shadow-highlight, var(--color-btn-danger-hover-inset-shadow, 0 0 transparent))",
      hoverIcon: (theme: any) => `var(--button-danger-iconColor-hover, var(--color-btn-danger-hover-icon, ${get('fg.onEmphasis')(theme)}))`,
      hoverCounterBg: (theme: any) => `var(--buttonCounter-danger-bgColor-hover, var(--color-btn-danger-hover-counter-bg, ${alpha('#fff', 0.2)(theme)}))`,
      selectedText: "var(--button-danger-fgColor-active, var(--color-btn-danger-selected-text, #ffffff))",
      selectedBg: (theme: any) => `var(--button-danger-bgColor-active, var(--color-btn-danger-selected-bg, ${get('scale.red.6')(theme)}))`,
      selectedBorder: (theme: any) => `var(--button-danger-borderColor-active, var(--color-btn-danger-selected-border, ${get('scale.red.3')(theme)}))`,
      selectedShadow: "var(--button-danger-shadow-selected, var(--color-btn-danger-selected-shadow, 0 0 transparent))",
      disabledText: (theme: any) => `var(--button-danger-fgColor-disabled, var(--color-btn-danger-disabled-text, ${alpha(get('scale.red.4'), 0.5)(theme)}))`,
      disabledBg: (theme: any) => `var(--button-danger-bgColor-disabled, var(--color-btn-danger-disabled-bg, ${get('scale.gray.9')(theme)}))`,
      disabledCounterBg: (theme: any) => `var(--buttonCounter-danger-bgColor-disabled, var(--color-btn-danger-disabled-counter-bg, ${alpha(get('scale.red.5'), 0.05)(theme)}))`,
      counterBg: (theme: any) => `var(--buttonCounter-danger-bgColor-rest, var(--color-btn-danger-counter-bg, ${alpha(get('scale.red.9'), 0.2)(theme)}))`,
      icon: (theme: any) => `var(--button-danger-iconColor-rest, var(--color-btn-danger-icon, ${get('scale.red.4')(theme)}))`,
      counterFg: (theme: any) => `var(--buttonCounter-danger-fgColor-rest, var(--color-btn-danger-counter-fg, ${get('danger.fg')(theme)}))`,
      disabledCounterFg: (theme: any) => `var(--buttonCounter-danger-fgColor-disabled, var(--color-btn-danger-disabled-counter-fg, ${alpha(get('danger.fg'), 0.5)(theme)}))`,
      hoverCounterFg: (theme: any) => `var(--buttonCounter-danger-fgColor-hover, var(--color-btn-danger-hover-counter-fg, ${get('scale.white')(theme)}))`
    },

    inactive: {
      bg: (theme: any) => `var(--button-inactive-bgColor-rest, var(--color-btn-inactive-bg, ${get('scale.gray.7')(theme)}))`,
      text: (theme: any) => `var(--button-inactive-fgColor-rest, var(--color-btn-inactive-text, ${get('scale.gray.3')(theme)}))`,
    }
  },
  underlinenav: {
    icon: (theme: any) => `var(--underlineNav-iconColor-rest, var(--color-underlinenav-icon, ${get('fg.subtle')(theme)}))`,
    borderHover: (theme: any) => `var(--underlineNav-borderColor-hover, var(--color-underlinenav-border-hover, ${get('neutral.muted')(theme)}))`
  },

  actionListItem: {
    inlineDivider: (theme: any) => `var(--borderColor-muted, var(--color-action-list-item-inline-divider, ${alpha(get('border.default'), 0.48)(theme)}))`,

    default: {
      hoverBg: (theme: any) => `var(--control-transparent-bgColor-hover, var(--color-action-list-item-default-hover-bg, ${alpha(get('scale.gray.2'), 0.12)(theme)}))`,
      hoverBorder: "var(--control-transparent-borderColor-hover, var(--color-action-list-item-default-hover-border, transparent))",
      activeBg: (theme: any) => `var(--control-transparent-bgColor-active, var(--color-action-list-item-default-active-bg, ${alpha(get('scale.gray.2'), 0.2)(theme)}))`,
      activeBorder: "var(--control-transparent-borderColor-active, var(--color-action-list-item-default-active-border, transparent))",
      selectedBg: (theme: any) => `var(--control-transparent-bgColor-selected, var(--color-action-list-item-default-selected-bg, ${alpha(get('scale.gray.2'), 0.08)(theme)}))`
    },
    danger: {
      hoverBg: (theme: any) => `var(--control-danger-bgColor-hover, var(--color-action-list-item-danger-hover-bg, ${alpha(get('scale.red.4'), 0.16)(theme)}))`,
      activeBg: (theme: any) => `var(--control-danger-bgColor-active, var(--color-action-list-item-danger-active-bg, ${alpha(get('scale.red.4'), 0.24)(theme)}))`,
      hoverText: (theme: any) => `var(--control-danger-fgColor-hover, var(--color-action-list-item-danger-hover-text, ${get('scale.red.3')(theme)}))`
    }
  },

  switchTrack: {
    bg: (theme: any) => `var(--controlTrack-bgColor-rest, var(--color-switch-track-bg, ${get('neutral.subtle')(theme)}))`,
    hoverBg: (theme: any) => `var(--controlTrack-bgColor-hover, var(--color-switch-track-hover-bg, ${lighten(get('neutral.subtle'), 0.25)(theme)}))`,
    activeBg: (theme: any) => `var(--controlTrack-bgColor-active, var(--color-switch-track-active-bg, ${get('neutral.muted')(theme)}))`,
    disabledBg: (theme: any) => `var(--controlTrack-bgColor-disabled, var(--color-switch-track-disabled-bg, ${get('scale.gray.7')(theme)}))`,
    fg: (theme: any) => `var(--controlTrack-fgColor-rest, var(--color-switch-track-fg, ${get('fg.muted')(theme)}))`,
    disabledFg: (theme: any) => `var(--controlTrack-fgColor-disabled, var(--color-switch-track-disabled-fg, ${get('scale.black')(theme)}))`,
    border: "var(--controlTrack-borderColor-rest, var(--color-switch-track-border, transparent))",  // TODO: remove this in next major release

    checked: {
      bg: (theme: any) => `var(--control-checked-bgColor-rest, var(--color-switch-track-checked-bg, ${alpha(get('scale.blue.5'), 0.35)(theme)}))`,
      hoverBg: (theme: any) => `var(--control-checked-bgColor-hover, var(--color-switch-track-checked-hover-bg, ${alpha(get('scale.blue.5'), 0.5)(theme)}))`,
      activeBg: (theme: any) => `var(--control-checked-bgColor-active, var(--color-switch-track-checked-active-bg, ${alpha(get('scale.blue.5'), 0.65)(theme)}))`,
      fg: (theme: any) => `var(--control-checked-fgColor-rest, var(--color-switch-track-checked-fg, ${get('fg.onEmphasis')(theme)}))`,
      disabledFg: (theme: any) => `var(--control-checked-fgColor-disabled, var(--color-switch-track-checked-disabled-fg, ${get('scale.black')(theme)}))`,
      border: "var(--borderColor-transparent, var(--color-switch-track-checked-border, transparent))",  // TODO: remove this in next major release
    }
  },

  switchKnob: {
    bg: (theme: any) => `var(--controlKnob-bgColor-rest, var(--color-switch-knob-bg, ${get('canvas.default')(theme)}))`,
    border: "var(--controlKnob-borderColor-rest, var(--color-switch-knob-border, #606771))", // control contrast border https://github.com/primer/primitives/pull/485
    disabledBg: (theme: any) => `var(--controlKnob-bgColor-disabled, var(--color-switch-knob-disabled-bg, ${get('canvas.subtle')(theme)}))`,

    checked: {
      bg: (theme: any) => `var(--controlKnob-bgColor-checked, var(--color-switch-knob-checked-bg, ${get('canvas.default')(theme)}))`, // TODO: remove this in next major release
      disabledBg: (theme: any) => `var(--controlKnob-bgColor-disabled, var(--color-switch-knob-checked-disabled-bg, ${get('canvas.subtle')(theme)}))`, // TODO: remove this in next major release
      border: (theme: any) => `var(--controlKnob-borderColor-checked, var(--color-switch-knob-checked-border, ${alpha(get('scale.blue.5'), 0.35)(theme)}))`,
    }
  },

  segmentedControl: {
    bg: (theme: any) => `var(--controlTrack-bgColor-rest, var(--color-segmented-control-bg, ${get('neutral.subtle')(theme)}))`,

    button: {
      bg: (theme: any) => `var(--controlKnob-bgColor-rest, var(--color-segmented-control-button-bg, ${get('canvas.default')(theme)}))`,
      hover: {
        bg: (theme: any) => `var(--controlTrack-bgColor-hover, var(--color-segmented-control-button-hover-bg, ${get('scale.gray.6')(theme)}))`,
      },

      active: {
        bg: (theme: any) => `var(--controlTrack-bgColor-active, var(--color-segmented-control-button-active-bg, ${get('scale.gray.7')(theme)}))`,
      },

      selected: {
        border: (theme: any) => `var(--controlKnob-borderColor-rest, var(--color-segmented-control-button-selected-border, ${get('scale.gray.4')(theme)}))`,
      },
    },
  },

  treeViewItem: {
    chevron: {
      hoverBg: (theme: any) => `var(--control-transparent-bgColor-hover, var(--color-tree-view-item-chevron-hover-bg, ${alpha(get('scale.gray.2'), 0.12)(theme)}))`,
    },
    directory: {
      fill: (theme: any) => `var(--treeViewItem-leadingVisual-bgColor-rest, var(--color-tree-view-item-directory-fill, ${get('fg.muted')(theme)}))`
    }
  },
}
