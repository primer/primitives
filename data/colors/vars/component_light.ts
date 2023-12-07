import {alpha, darken, get} from '../../../src/utils-v1'

export default {
  control: {
    borderColor: {
      emphasis: "var(var(--color-control-border-color-emphasis, #858F99)"
    }
  },
  avatar: {
    bg: (theme: any) => `var(--avatar-bgColor, var(--color-avatar-bg, ${get('scale.white')(theme)}))`,
    border: (theme: any) => `var(--avatar-borderColor, var(--color-avatar-border, ${get('border.subtle')(theme)}))`,
    stackFade: (theme: any) => `var(--avatarStack-fade-bgColor-default, var(--color-avatar-stack-fade, ${get('scale.gray.3')(theme)}))`,
    stackFadeMore: (theme: any) => `var(--avatarStack-fade-bgColor-muted, var(--color-avatar-stack-fade-more, ${get('scale.gray.2')(theme)}))`,
    childShadow: (theme: any) => `var(--avatar-shadow, var(--color-avatar-child-shadow, 0 0 0 2px ${alpha(get('scale.white'), 0.8)(theme)}))`
  },
  topicTag: {
    border: "var(--topicTag-borderColor, var(--color-topic-tag-border, transparent))"
  },
  counter: {
    border: "var(--counter-borderColor, var(--color-counter-border, transparent))"
  },
  selectMenu: {
    backdropBorder: "var(--selectMenu-borderColor, var(--color-select-menu-backdrop-border, transparent))",
    tapHighlight: (theme: any) => `var(--control-bgColor-active, var(--color-select-menu-tap-highlight, ${alpha(get('scale.gray.3'), 0.5)(theme)}))`,
    tapFocusBg: (theme: any) => `var(--selectMenu-bgColor-active, var(--color-select-menu-tap-focus-bg, ${get('scale.blue.1')(theme)}))`
  },
  overlay: {
    shadow: (theme: any) =>
      `var(--shadow-floating-small, var(--color-overlay-shadow, 0 1px 3px ${alpha(get('scale.black'), 0.12)(theme)}, 0 8px 24px ${alpha(get('scale.gray.7'), 0.12)(theme)}))`,
    backdrop: (theme: any) => `var(--overlay-backdrop-bgColor, var(--color-overlay-backdrop, ${alpha(get('scale.gray.4'), 0.2)(theme)}))`
  },
  header: {
    text: (theme: any) => `var(--header-fgColor-default, var(--color-header-text, ${alpha(get('scale.white'), 0.7)(theme)}))`,
    bg: (theme: any) => `var(--header-bgColor, var(--color-header-bg, ${get('scale.gray.9')(theme)}))`,
    divider: (theme: any) => `var(--header-borderColor-divider, var(--color-header-divider, ${get('scale.gray.6')(theme)}))`,
    logo: (theme: any) => `var(--header-fgColor-logo, var(--color-header-logo, ${get('scale.white')(theme)}))`
  },
  headerSearch: {
    bg: (theme: any) => `var(--headerSearch-bgColor, var(--color-header-search-bg, ${get('scale.gray.9')(theme)}))`,
    border: (theme: any) => `var(--headerSearch-borderColor, var(--color-header-search-border, ${get('scale.gray.6')(theme)}))`
  },
  sidenav: {
    selectedBg: (theme: any) => `var(--sideNav-bgColor-selected, var(--color-sidenav-selected-bg, ${get('scale.white')(theme)}))`
  },
  menu: {
    bgActive: "var(--menu-bgColor-active, var(--color-menu-bg-active, transparent))"
  },
  input: {
    disabledBg: (theme: any) => `var(--control-bgColor-disabled, var(--color-input-disabled-bg, ${get('neutral.muted')(theme)}))`
  },
  diffstat: {
    additionBg: (theme: any) => `var(undefined, var(--color-diffstat-addition-bg, ${get('success.emphasis')(theme)}))`
  },
  timeline: {
    badgeBg: (theme: any) => `var(--timelineBadge-bgColor, var(--color-timeline-badge-bg, ${get('scale.gray.1')(theme)}))` // needs to be opaque
  },
  ansi: {
    black: (theme: any) => `var(--color-ansi-black, ${get('scale.gray.9')(theme)})`,
    blackBright: (theme: any) => `var(--color-ansi-black-bright, ${get('scale.gray.6')(theme)})`,
    white: (theme: any) => `var(--color-ansi-white, ${get('scale.gray.5')(theme)})`,
    whiteBright: (theme: any) => `var(--color-ansi-white-bright, ${get('scale.gray.4')(theme)})`,
    gray: (theme: any) => `var(--color-ansi-gray, ${get('scale.gray.5')(theme)})`,
    red: (theme: any) => `var(--color-ansi-red, ${get('scale.red.5')(theme)})`,
    redBright: (theme: any) => `var(--color-ansi-red-bright, ${get('scale.red.6')(theme)})`,
    green: (theme: any) => `var(--color-ansi-green, ${get('scale.green.6')(theme)})`,
    greenBright: (theme: any) => `var(--color-ansi-green-bright, ${get('scale.green.5')(theme)})`,
    yellow: (theme: any) => `var(--color-ansi-yellow, ${get('scale.yellow.8')(theme)})`,
    yellowBright: (theme: any) => `var(--color-ansi-yellow-bright, ${get('scale.yellow.7')(theme)})`,
    blue: (theme: any) => `var(--color-ansi-blue, ${get('scale.blue.5')(theme)})`,
    blueBright: (theme: any) => `var(--color-ansi-blue-bright, ${get('scale.blue.4')(theme)})`,
    magenta: (theme: any) => `var(--color-ansi-magenta, ${get('scale.purple.5')(theme)})`,
    magentaBright: (theme: any) => `var(--color-ansi-magenta-bright, ${get('scale.purple.4')(theme)})`,
    cyan: "var(--color-ansi-cyan, #1b7c83)",
    cyanBright: "var(--color-ansi-cyan-bright, #3192aa)"
  },
  // Do we need all these btn variables?
  btn: {
    text: (theme: any) => `var(--button-default-fgColor-rest, var(--color-btn-text, ${get('scale.gray.9')(theme)}))`,
    bg: (theme: any) => `var(--button-default-bgColor-rest, var(--color-btn-bg, ${get('scale.gray.0')(theme)}))`,
    border: (theme: any) => `var(--button-default-borderColor-rest var(--color-btn-border, ${get('border.subtle')(theme)}))`,
    shadow: (theme: any) => `var(--button-default-shadow-resting, var(--color-btn-shadow, 0 1px 0 ${alpha(get('scale.black'), 0.04)(theme)}))`,
    insetShadow: (theme: any) => `var(--button-default-shadow-inset, var(--color-btn-inset-shadow, inset 0 1px 0 ${alpha(get('scale.white'), 0.25)(theme)}))`,
    hoverBg: "var(--button-default-bgColor-hover, var(--color-btn-hover-bg, #f3f4f6))",
    hoverBorder: (theme: any) => `var(--button-default-borderColor-hover, var(--color-btn-hover-border, ${get('border.subtle')(theme)}))`,
    activeBg: (theme: any) => `var(--button-default-bgColor-active, var(--color-btn-active-bg, ${darken(get('btn.hoverBg'), 0.03)(theme)}))`,
    activeBorder: (theme: any) => `var(--button-default-borderColor-active, var(--color-btn-active-border, ${get('border.subtle')(theme)}))`,
    selectedBg: (theme: any) => `var(--button-default-bgColor-selected, var(--color-btn-selected-bg, ${darken(get('btn.hoverBg'), 0.02)(theme)}))`,
    counterBg: (theme: any) => `var(--buttonCounter-default-bgColor-rest, var(--color-btn-counter-bg, ${alpha(get('scale.black'), 0.08)(theme)}))`,

    primary: {
      text: (theme: any) => `var(--button-primary-fgColor-rest, var(--color-btn-primary-text, ${get('scale.white')(theme)}))`,
      bg: (theme: any) => `var(--button-primary-bgColor-rest, var(--color-btn-primary-bg, ${get('success.emphasis')(theme)}))`,
      border: (theme: any) => `var(--button-primary-borderColor-rest, var(--color-btn-primary-border, ${get('border.subtle')(theme)}))`,
      shadow: (theme: any) => `var(--shadow-resting-small, var(--color-btn-primary-shadow, 0 1px 0 ${alpha(get('scale.black'), 0.1)(theme)}))`,
      insetShadow: (theme: any) => `var(--shadow-highlight, var(--color-btn-primary-inset-shadow, inset 0 1px 0 ${alpha(get('scale.white'), 0.03)(theme)}))`,
      hoverBg: (theme: any) => `var(--button-primary-bgColor-hover, var(--color-btn-primary-hover-bg, ${get('scale.green.5')(theme)}))`,
      hoverBorder: (theme: any) => `var(--button-primary-borderColor-hover, var(--color-btn-primary-hover-border, ${get('border.subtle')(theme)}))`,
      selectedBg: (theme: any) => `var(--button-primary-bgColor-active, var(--color-btn-primary-selected-bg, ${darken(get('btn.primary.hoverBg'), 0.02)(theme)}))`,
      selectedShadow: (theme: any) => `var(--button-primary-shadow-selected, var(--color-btn-primary-selected-shadow, inset 0 1px 0 ${alpha(get('scale.green.9'), 0.2)(theme)}))`,
      disabledText: (theme: any) => `var(--button-primary-fgColor-disabled, var(--color-btn-primary-disabled-text, ${alpha(get('scale.white'), 0.8)(theme)}))`,
      disabledBg: "var(--button-primary-bgColor-disabled, var(--color-btn-primary-disabled-bg, #94d3a2))",
      disabledBorder: (theme: any) => `var(--button-primary-borderColor-disabled, var(--color-btn-primary-disabled-border, ${get('border.subtle')(theme)}))`,
      icon: (theme: any) => `var(--button-primary-iconColor-rest, var(--color-btn-primary-icon, ${alpha(get('scale.white'), 0.8)(theme)}))`,
      counterBg: (theme: any) => `var(--buttonCounter-primary-bgColor-rest, var(--color-btn-primary-counter-bg, ${alpha(get('scale.green.9'), 0.2)(theme)}))`
    },

    outline: {
      text: (theme: any) => `var(--button-outline-fgColor-rest, var(--color-btn-outline-text, ${get('scale.blue.5')(theme)}))`,
      hoverText: (theme: any) => `var(--button-outline-fgColor-hover, var(--color-btn-outline-hover-text, ${get('scale.white')(theme)}))`,
      hoverBg: (theme: any) => `var(--button-outline-bgColor-hover, var(--color-btn-outline-hover-bg, ${get('scale.blue.5')(theme)}))`,
      hoverBorder: (theme: any) => `var(--button-outline-borderColor-hover, var(--color-btn-outline-hover-border, ${get('border.subtle')(theme)}))`,
      hoverShadow: (theme: any) => `var(--shadow-resting-small, var(--color-btn-outline-hover-shadow, 0 1px 0 ${alpha(get('scale.black'), 0.1)(theme)}))`,
      hoverInsetShadow: (theme: any) => `var(--shadow-highlight, var(--color-btn-outline-hover-inset-shadow, inset 0 1px 0 ${alpha(get('scale.white'), 0.03)(theme)}))`,
      hoverCounterBg: (theme: any) => `var(--buttonCounter-outline-bgColor-hover, var(--color-btn-outline-hover-counter-bg, ${alpha(get('scale.white'), 0.2)(theme)}))`,
      selectedText: (theme: any) => `var(--button-outline-fgColor-active, var(--color-btn-outline-selected-text, ${get('scale.white')(theme)}))`,
      selectedBg: (theme: any) => `var(--button-outline-bgColor-active, var(--color-btn-outline-selected-bg, ${darken(get('scale.blue.5'), 0.03)(theme)}))`,
      selectedBorder: (theme: any) => `var(--button-outline-borderColor-active, var(--color-btn-outline-selected-border, ${get('border.subtle')(theme)}))`,
      selectedShadow: (theme: any) => `var(--button-outline-shadow-selected, var(--color-btn-outline-selected-shadow, inset 0 1px 0 ${alpha(get('scale.blue.9'), 0.2)(theme)}))`,
      disabledText: (theme: any) => `var(--button-outline-fgColor-disabled, var(--color-btn-outline-disabled-text, ${alpha(get('scale.blue.5'), 0.5)(theme)}))`,
      disabledBg: (theme: any) => `var(--button-outline-bgColor-disabled, var(--color-btn-outline-disabled-bg, ${get('scale.gray.0')(theme)}))`,
      disabledCounterBg: (theme: any) => `var(--buttonCounter-outline-bgColor-disabled, var(--color-btn-outline-disabled-counter-bg, ${alpha(get('scale.blue.5'), 0.05)(theme)}))`,
      counterBg: "var(--buttonCounter-outline-bgColor-rest, var(--color-btn-outline-counter-bg, #0969da1a))",
      counterFg: (theme: any) => `var(--buttonCounter-outline-fgColor-rest, var(--color-btn-outline-counter-fg, ${get('scale.blue.6')(theme)}))`,
      hoverCounterFg: (theme: any) => `var(--buttonCounter-outline-fgColor-hover, var(--color-btn-outline-hover-counter-fg, ${get('scale.white')(theme)}))`,
      disabledCounterFg: (theme: any) => `var(--buttonCounter-outline-fgColor-disabled, var(--color-btn-outline-disabled-counter-fg, ${alpha(get('scale.blue.5'), 0.5)(theme)}))`
    },

    danger: {
      text: (theme: any) => `var(--button-danger-fgColor-rest, var(--color-btn-danger-text, ${get('scale.red.5')(theme)}))`,
      hoverText: (theme: any) => `var(--button-danger-fgColor-hover, var(--color-btn-danger-hover-text, ${get('scale.white')(theme)}))`,
      hoverBg: (theme: any) => `var(--button-danger-bgColor-hover, var(--color-btn-danger-hover-bg, ${get('scale.red.6')(theme)}))`,
      hoverBorder: (theme: any) => `var(--button-danger-borderColor-hover, var(--color-btn-danger-hover-border, ${get('border.subtle')(theme)}))`,
      hoverShadow: (theme: any) => `var(--shadow-resting-small, var(--color-btn-danger-hover-shadow, 0 1px 0 ${alpha(get('scale.black'), 0.1)(theme)}))`,
      hoverInsetShadow: (theme: any) => `var(--shadow-highlight, var(--color-btn-danger-hover-inset-shadow, inset 0 1px 0 ${alpha(get('scale.white'), 0.03)(theme)}))`,
      hoverCounterBg: (theme: any) => `var(--buttonCounter-danger-bgColor-hover, var(--color-btn-danger-hover-counter-bg, ${alpha(get('scale.white'), 0.2)(theme)}))`,
      selectedText: (theme: any) => `var(--button-danger-fgColor-active, var(--color-btn-danger-selected-text, ${get('scale.white')(theme)}))`,
      selectedBg: (theme: any) => `var(--button-danger-bgColor-active, var(--color-btn-danger-selected-bg, ${darken(get('scale.red.5'), 0.03)(theme)}))`,
      selectedBorder: (theme: any) => `var(--button-danger-borderColor-active, var(--color-btn-danger-selected-border, ${get('border.subtle')(theme)}))`,
      selectedShadow: (theme: any) => `var(--button-danger-shadow-selected, var(--color-btn-danger-selected-shadow, inset 0 1px 0 ${alpha(get('scale.red.9'), 0.2)(theme)}))`,
      disabledText: (theme: any) => `var(--button-danger-fgColor-disabled, var(--color-btn-danger-disabled-text, ${alpha(get('scale.red.5'), 0.5)(theme)}))`,
      disabledBg: (theme: any) => `var(--button-danger-bgColor-disabled, var(--color-btn-danger-disabled-bg, ${get('scale.gray.0')(theme)}))`,
      disabledCounterBg: (theme: any) => `var(--buttonCounter-danger-bgColor-disabled, var(--color-btn-danger-disabled-counter-bg, ${alpha(get('scale.red.5'), 0.05)(theme)}))`,
      counterBg: (theme: any) => `var(--buttonCounter-danger-bgColor-rest, var(--color-btn-danger-counter-bg, ${alpha(get('scale.red.5'), 0.1)(theme)}))`,
      icon: (theme: any) => `var(--button-danger-iconColor-rest, var(--color-btn-danger-icon, ${get('scale.red.5')(theme)}))`,
      hoverIcon: (theme: any) => `var(--button-danger-iconColor-hover, var(--color-btn-danger-hover-icon, ${get('scale.white')(theme)}))`,
      counterFg: (theme: any) => `var(--buttonCounter-danger-fgColor-rest, var(--color-btn-danger-counter-fg, ${get('scale.red.6')(theme)}))`,
      hoverCounterFg: (theme: any) => `var(--buttonCounter-danger-fgColor-hover, var(--color-btn-danger-hover-counter-fg, ${get('scale.white')(theme)}))`,
      disabledCounterFg: (theme: any) => `var(--buttonCounter-danger-fgColor-disabled, var(--color-btn-danger-disabled-counter-fg, ${alpha(get('scale.red.5'), 0.5)(theme)}))`
    },

    inactive: {
      bg: (theme: any) => `var(--button-inactive-bgColor-rest, var(--color-btn-inactive-bg, ${get('scale.gray.1')(theme)}))`,
      text: (theme: any) => `var(--button-inactive-fgColor-rest, var(--color-btn-inactive-text, ${get('scale.gray.6')(theme)}))`,
    }
  },
  underlinenav: {
    icon: (theme: any) => `var(--underlineNav-iconColor-rest, var(--color-underlinenav-icon, ${get('fg.subtle')(theme)}))`,
    borderHover: (theme: any) => `var(--underlineNav-borderColor-hover, var(--color-underlinenav-border-hover, ${get('neutral.muted')(theme)}))`
  },

  actionListItem: {
    inlineDivider: (theme: any) => `var(--borderColor-muted, var(--color-action-list-item-inline-divider, ${alpha(get('border.default'), 0.48)(theme)}))`,

    default: {
      hoverBg: (theme: any) => `var(--control-transparent-bgColor-hover, var(--color-action-list-item-default-hover-bg, ${alpha(get('scale.gray.2'), 0.32)(theme)}))`,
      hoverBorder: "var(--control-transparent-borderColor-hover, var(--color-action-list-item-default-hover-border, transparent))",
      activeBg: (theme: any) => `var(--control-transparent-bgColor-active, var(--color-action-list-item-default-active-bg, ${alpha(get('scale.gray.2'), 0.48)(theme)}))`,
      activeBorder: "var(--control-transparent-borderColor-active, var(--color-action-list-item-default-active-border, transparent))",
      selectedBg: (theme: any) => `var(--control-transparent-bgColor-selected, var(--color-action-list-item-default-selected-bg, ${alpha(get('scale.gray.2'), 0.24)(theme)}))`
    },
    danger: {
      hoverBg: (theme: any) => `var(--control-danger-bgColor-hover, var(--color-action-list-item-default-danger-hover-bg, ${alpha(get('danger.subtle'), 0.64)(theme)}))`,
      activeBg: (theme: any) => `var(--control-danger-bgColor-active, var(--color-action-list-item-default-danger-active-bg, ${get('danger.subtle')(theme)}))`,
      hoverText: (theme: any) => `var(--control-danger-fgColor-hover, var(--color-action-list-item-default-danger-hover-text, ${get('danger.fg')(theme)}))`
    }
  },

  switchTrack: {
    bg: (theme: any) => `var(--controlTrack-bgColor-rest, var(--color-switch-track-bg, ${get('scale.gray.1')(theme)}))`,
    hoverBg: (theme: any) => `var(--controlTrack-bgColor-hover, var(--color-switch-track-hover-bg, ${darken(get('scale.gray.1'), 0.03)(theme)}))`,
    activeBg: (theme: any) => `var(--controlTrack-bgColor-active, var(--color-switch-track-active-bg, ${darken(get('scale.gray.1'), 0.05)(theme)}))`,
    disabledBg: (theme: any) => `var(--controlTrack-bgColor-disabled, var(--color-switch-track-disabled-bg, ${get('scale.gray.4')(theme)}))`,
    fg: (theme: any) => `var(--controlTrack-fgColor-rest, var(--color-switch-track-fg, ${get('fg.muted')(theme)}))`,
    disabledFg: (theme: any) => `var(--controlTrack-fgColor-disabled, var(--color-switch-track-disabled-fg, ${get('fg.onEmphasis')(theme)}))`,
    border: "var(--controlTrack-borderColor-rest, var(--color-switch-track-border, transparent))", // TODO: remove this in next major release

    checked: {
      bg: (theme: any) => `var(--control-checked-bgColor-rest, var(--color-switch-track-checked-bg, ${get('accent.emphasis')(theme)}))`,
      hoverBg: "var(--control-checked-bgColor-hover, var(--color-switch-track-checked-hover-bg, #0860CA))", // accent-emphasis + scale-blue-7 @ 20% opacity
      activeBg: "var(--control-checked-bgColor-active, var(--color-switch-track-checked-active-bg, #0757BA))", // accent-emphasis + scale-blue-7 @ 20% opacity
      fg: (theme: any) => `var(--control-checked-fgColor-rest, var(--color-switch-track-checked-fg, ${get('fg.onEmphasis')(theme)}))`,
      disabledFg: (theme: any) => `var(--control-checked-fgColor-disabled, var(--color-switch-track-checked-disabled-fg, ${get('fg.onEmphasis')(theme)}))`,
      border: "var(--borderColor-transparent, var(--color-switch-track-checked-border, transparent))", // TODO: remove this in next major release
    }
  },

  switchKnob: {
    bg: (theme: any) => `var(--controlKnob-bgColor-rest, var(--color-switch-knob-bg, ${get('canvas.default')(theme)}))`,
    disabledBg: (theme: any) => `var(--controlKnob-bgColor-disabled, var(--color-switch-knob-disabled-bg, ${get('canvas.subtle')(theme)}))`,
    border: "var(--controlKnob-borderColor-rest, var(--color-switch-knob-border, #858F99))", // control contrast border https://github.com/primer/primitives/pull/485

    checked: {
      bg: (theme: any) => `var(--controlKnob-bgColor-checked, var(--color-switch-knob-checked-bg, ${get('canvas.default')(theme)}))`, // TODO: remove this in next major release
      disabledBg: (theme: any) => `var(--controlKnob-bgColor-disabled, var(--color-switch-knob-checked-disabled-bg, ${get('canvas.subtle')(theme)}))`, // TODO: remove this in next major release
      border: (theme: any) => `var(--controlKnob-borderColor-checked, var(--color-switch-knob-checked-border, ${get('accent.emphasis')(theme)}))`,
    }
  },

  segmentedControl: {
    bg: (theme: any) => `var(--controlTrack-bgColor-rest, var(--color-segmented-control-bg, ${get('scale.gray.1')(theme)}))`,

    button: {
      bg: (theme: any) => `var(--controlKnob-bgColor-rest, var(--color-segmented-control-button-bg, ${get('canvas.default')(theme)}))`,
      hover: {
        bg: (theme: any) => `var(--controlTrack-bgColor-hover, var(--color-segmented-control-button-hover-bg, ${alpha(get('scale.gray.3'), 0.2)(theme)}))`,
      },

      active: {
        bg: (theme: any) => `var(--controlTrack-bgColor-active, var(--color-segmented-control-button-hover-active-bg, ${alpha(get('scale.gray.3'), 0.4)(theme)}))`,
      },

      selected: {
        border: (theme: any) => `var(--controlKnob-borderColor-rest, var(--color-segmented-control-button-hover-active-selected-border, ${get('scale.gray.4')(theme)}))`,
      },
    },
  },

  treeViewItem: {
    chevron: {
      hoverBg: (theme: any) => `var(--control-transparent-bgColor-hover, var(--color-tree-view-item-chevron-hover-bg, ${alpha(get('scale.gray.2'), 0.32)(theme)}))`,
    },
    directory: {
      fill: (theme: any) => `var(--treeViewItem-leadingVisual-bgColor-rest, var(--color-tree-view-item-chevron-directory-fill, ${get('scale.blue.3')(theme)}))`
    }
  },
}
