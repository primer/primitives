import {alpha, get} from '../../../src/utils-v1'

export default {
  fg: {
    default: "var(--control-fgColor-rest, var(--color-fg-default, #e6edf3))",
    muted: "var(--control-iconColor-rest, var(--color-fg-muted, #848d97))",
    subtle: (theme: any, HI_KATIE: any) => `var(--control-fgColor-placeholder, var(--color-fg-subtle, ${get('scale.gray.4')(theme)}))`,
    onEmphasis: (theme: any) => `var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, ${get('scale.white')(theme)}))`
  },
  canvas: {
    default: (theme: any) => `var(--bgColor-default, var(--color-canvas-default, ${get('scale.gray.9')(theme)}))`,
    overlay: (theme: any) => `var(--overlay-bgColor, var(--color-canvas-overlay, ${get('scale.gray.8')(theme)}))`,
    inset: (theme: any) => `var(--bgColor-inset, var(--color-canvas-inset, ${get('scale.black')(theme)}))`,
    subtle: (theme: any) => `var(--bgColor-muted, var(--color-canvas-subtle, ${get('scale.gray.8')(theme)}))`
  },
  border: {
    default: (theme: any, HI_KATIE: any) => `var(--borderColor-default, var(--color-border-default, ${get('scale.gray.6')(theme)}))`,
    muted: (theme: any) => `var(--borderColor-muted, var(--color-border-muted, ${get('scale.gray.7')(theme)}))`,
    subtle: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-border-subtle, ${alpha(get('scale.gray.0'), 0.1)(theme)}))`
  },
  shadow: {
    small: "var(--shadow-resting-small, var(--color-shadow-small, 0 0 transparent))",
    medium: (theme: any) => `var(--shadow-resting-medium, var(--color-shadow-medium, 0 3px 6px ${get('scale.black')(theme)}))`,
    large: (theme: any) => `var(--shadow-floating-large, var(--color-shadow-large, 0 8px 24px ${get('scale.black')(theme)}))`,
    extraLarge: (theme: any) => `var(--shadow-floating-xlarge, var(--color-shadow-extra-large, 0 12px 48px ${get('scale.black')(theme)}))`
  },

  // Roles
  neutral: {
    emphasisPlus: (theme: any) => `var(--bgColor-emphasis, var(--color-neutral-emphasis-plus, ${get('scale.gray.4')(theme)}))`,
    emphasis: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-neutral-emphasis, ${get('scale.gray.4')(theme)}))`,
    muted: (theme: any, HI_KATIE: any) => `var(--bgColor-disabled, var(--color-neutral-muted, ${alpha(get('scale.gray.4'), 0.4)(theme)}))`,
    subtle: (theme: any) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${alpha(get('scale.gray.4'), 0.1)(theme)}))`
  },
  accent: {
    fg: "var(--focus-outlineColor, var(--color-accent-fg, #2f81f7))",
    emphasis: (theme: any, HI_KATIE: any) => `var(--bgColor-accent-emphasis, var(--color-accent-emphasis, ${get('scale.blue.5')(theme)}))`,
    muted: (theme: any) => `var(--borderColor-accent-muted, var(--color-accent-muted, ${alpha(get('scale.blue.4'), 0.4)(theme)}))`,
    subtle: (theme: any) => `var(--bgColor-accent-muted, var(--color-accent-subtle, ${alpha(get('scale.blue.4'), 0.1)(theme)}))`
  },
  success: {
    fg: (theme: any) => `var(--fgColor-success, var(--color-success-fg, ${get('scale.green.3')(theme)}))`,
    emphasis: (theme: any, HI_KATIE: any) => `var(--control-borderColor-success, var(--color-success-emphasis, ${get('scale.green.5')(theme)}))`,
    muted: (theme: any) => `var(--borderColor-success-muted, var(--color-success-muted, ${alpha(get('scale.green.4'), 0.4)(theme)}))`,
    subtle: (theme: any) => `var(--bgColor-success-muted, var(--color-success-subtle, ${alpha(get('scale.green.4'), 0.15)(theme)}))`
  },
  attention: {
    fg: (theme: any) => `var(--fgColor-attention, var(--color-attention-fg, ${get('scale.yellow.3')(theme)}))`,
    emphasis: (theme: any, HI_KATIE: any) => `var(--control-borderColor-warning, var(--color-attention-emphasis, ${get('scale.yellow.5')(theme)}))`,
    muted: (theme: any) => `var(--borderColor-attention-muted, var(--color-attention-muted, ${alpha(get('scale.yellow.4'), 0.4)(theme)}))`,
    subtle: (theme: any) => `var(--bgColor-attention-muted, var(--color-attention-subtle, ${alpha(get('scale.yellow.4'), 0.15)(theme)}))`
  },
  severe: {
    fg: (theme: any) => `var(--fgColor-severe, var(--color-severe-fg, ${get('scale.orange.4')(theme)}))`,
    emphasis: (theme: any, HI_KATIE: any) => `var(--bgColor-severe-emphasis, var(--color-severe-emphasis, ${get('scale.orange.5')(theme)}))`,
    muted: (theme: any) => `var(--borderColor-severe-muted, var(--color-severe-muted, ${alpha(get('scale.orange.4'), 0.4)(theme)}))`,
    subtle: (theme: any) => `var(--bgColor-severe-muted, var(--color-severe-subtle, ${alpha(get('scale.orange.4'), 0.1)(theme)}))`
  },
  danger: {
    fg: (theme: any, HI_KATIE: any) => `var(--control-danger-fgColor-rest, var(--color-danger-fg, ${get('scale.red.4')(theme)}))`,
    emphasis: (theme: any, HI_KATIE: any) => `var(--control-borderColor-danger, var(--color-danger-emphasis, ${get('scale.red.5')(theme)}))`,
    muted: (theme: any) => `var(--borderColor-danger-muted, var(--color-danger-muted, ${alpha(get('scale.red.4'), 0.4)(theme)}))`,
    subtle: (theme: any) => `var(--bgColor-danger-muted, var(--color-danger-subtle, ${alpha(get('scale.red.4'), 0.1)(theme)}))`
  },
  open: {
    fg: (theme: any) => `var(--fgColor-open, var(--color-open-fg, ${get('scale.green.3')(theme)}))`,
    emphasis: (theme: any, HI_KATIE: any) => `var(--bgColor-open-emphasis, var(--color-open-emphasis, ${get('scale.green.5')(theme)}))`,
    muted: (theme: any) => `var(--borderColor-open-muted, var(--color-open-muted, ${alpha(get('scale.green.4'), 0.4)(theme)}))`,
    subtle: (theme: any) => `var(--bgColor-open-muted, var(--color-open-subtle, ${alpha(get('scale.green.4'), 0.15)(theme)}))`
  },
  closed: {
    fg: (theme: any) => `var(--fgColor-closed, var(--color-closed-fg, ${get('scale.red.4')(theme)}))`,
    emphasis: (theme: any, HI_KATIE: any) => `var(--bgColor-closed-emphasis, var(--color-closed-emphasis, ${get('scale.red.5')(theme)}))`,
    muted: (theme: any) => `var(--borderColor-closed-muted, var(--color-closed-muted, ${alpha(get('scale.red.4'), 0.4)(theme)}))`,
    subtle: (theme: any) => `var(--bgColor-closed-muted, var(--color-closed-subtle, ${alpha(get('scale.red.4'), 0.15)(theme)}))`
  },
  done: {
    fg: (theme: any) => `var(--fgColor-done, var(--color-done-fg, ${get('scale.purple.4')(theme)}))`,
    emphasis: (theme: any, HI_KATIE: any) => `var(--bgColor-done-emphasis, var(--color-done-emphasis, ${get('scale.purple.5')(theme)}))`,
    muted: (theme: any) => `var(--borderColor-done-muted, var(--color-done-muted, ${alpha(get('scale.purple.4'), 0.4)(theme)}))`,
    subtle: (theme: any) => `var(--bgColor-done-muted, var(--color-done-subtle, ${alpha(get('scale.purple.4'), 0.1)(theme)}))`
  },
  sponsors: {
    fg: (theme: any) => `var(--fgColor-sponsors, var(--color-sponsors-fg, ${get('scale.pink.4')(theme)}))`,
    emphasis: (theme: any, HI_KATIE: any) => `var(--bgColor-sponsors-emphasis, var(--color-sponsors-emphasis, ${get('scale.pink.5')(theme)}))`,
    muted: (theme: any) => `var(--borderColor-sponsors-muted, var(--color-sponsors-muted, ${alpha(get('scale.pink.4'), 0.4)(theme)}))`,
    subtle: (theme: any) => `var(--bgColor-sponsors-muted, var(--color-sponsors-subtle, ${alpha(get('scale.pink.4'), 0.1)(theme)}))`
  },

  // Only meant for Primer components
  primer: {
    fg: {
      disabled: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-fg-disabled, ${get('scale.gray.5')(theme)}))`
    },
    canvas: {
      backdrop: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-canvas-backdrop, ${alpha(get('scale.black'), 0.8)(theme)}))`, // use for modal/dialogs
      sticky: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-canvas-sticky, ${alpha(get('scale.gray.9'), 0.95)(theme)}))` // use for sticky headers
    },
    border: {
      active: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-border-active, ${get('scale.coral.3')(theme)}))`,
      contrast: (theme: any, HI_KATIE: any) => `var(undefined, var(--color-border-contrast, ${alpha(get('scale.white'), 0.2)(theme)}))` // use to increase contrast
    },
    shadow: {
      highlight: "var(undefined, var(--color-shadow-highlight, 0 0 transparent))", // top highlight
      inset: "var(undefined, var(--color-shadow-inset, 0 0 transparent))", // top inner shadow
    }
  }
}
