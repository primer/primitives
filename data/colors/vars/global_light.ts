import {alpha, get, lighten} from '../../../src/utils-v1'

export default {
  fg: {
    default: (theme: any) => `var(--control-fgColor-rest, var(--color-fg-default, ${get('scale.black')(theme)}))`,
    muted: "var(--control-iconColor-rest, var(--color-fg-muted, #656d76))",
    subtle: (theme: any) => `var(--control-fgColor-placeholder, var(--color-fg-subtle, ${get('scale.gray.5')(theme)}))`,
    onEmphasis: (theme: any) => `var(--fgColor-onEmphasis, var(--color-fg-on-emphasis, ${get('scale.white')(theme)}))`
  },
  canvas: {
    default: (theme: any) => `var(--bgColor-default, var(--color-canvas-default, ${get('scale.white')(theme)}))`,
    overlay: (theme: any) => `var(--overlay-bgColor, var(--color-canvas-overlay, ${get('scale.white')(theme)}))`,
    inset: (theme: any) => `var(--bgColor-inset, var(--color-canvas-inset, ${get('scale.gray.0')(theme)}))`,
    subtle: (theme: any) => `var(--bgColor-muted, var(--color-canvas-subtle, ${get('scale.gray.0')(theme)}))`
  },
  border: {
    default: (theme: any) => `var(--borderColor-default, var(--color-border-default, ${get('scale.gray.2')(theme)}))`,
    muted: (theme: any) => `var(--borderColor-muted, var(--color-border-muted, ${lighten(get('scale.gray.2'), 0.03)(theme)}))`,
    subtle: (theme: any) => `var(undefined, var(--color-border-subtle, ${alpha(get('scale.black'), 0.15)(theme)}))`
  },
  shadow: {
    small: (theme: any) => `var(--shadow-resting-small, var(--color-shadow-small, 0 1px 0 ${alpha(get('scale.black'), 0.04)(theme)}))`,
    medium: (theme: any) => `var(--shadow-resting-medium, var(--color-shadow-medium, 0 3px 6px ${alpha(get('scale.gray.4'), 0.15)(theme)}))`,
    large: (theme: any) => `var(--shadow-floating-large, var(--color-shadow-large, 0 8px 24px ${alpha(get('scale.gray.4'), 0.2)(theme)}))`,
    extraLarge: (theme: any) => `var(--shadow-floating-xlarge, var(--color-shadow-extra-large, 0 12px 28px ${alpha(get('scale.gray.4'), 0.3)(theme)}))`
  },

  // Roles
  neutral: {
    emphasisPlus: (theme: any) => `var(--bgColor-emphasis, var(--color-neutral-emphasis-plus, ${get('scale.gray.9')(theme)}))`,
    emphasis: (theme: any) => `var(undefined, var(--color-neutral-emphasis, ${get('scale.gray.5')(theme)}))`,
    muted: (theme: any) => `var(--bgColor-disabled, var(--color-neutral-muted, ${alpha(get('scale.gray.3'), 0.2)(theme)}))`,
    subtle: (theme: any) => `var(--bgColor-neutral-muted, var(--color-neutral-subtle, ${alpha(get('scale.gray.1'), 0.5)(theme)}))`
  },
  accent: {
    fg: (theme: any) => `var(--focus-outlineColor, var(--color-accent-fg, ${get('scale.blue.5')(theme)}))`,
    emphasis: (theme: any) => `var(--bgColor-accent-emphasis, var(--color-accent-emphasis, ${get('scale.blue.5')(theme)}))`,
    muted: (theme: any) => `var(--borderColor-accent-muted, var(--color-accent-muted, ${alpha(get('scale.blue.3'), 0.4)(theme)}))`,
    subtle: (theme: any) => `var(--bgColor-accent-muted, var(--color-accent-subtle, ${get('scale.blue.0')(theme)}))`
  },
  success: {
    fg: (theme: any) => `var(--fgColor-success, var(--color-success-fg, ${get('scale.green.5')(theme)}))`,
    emphasis: "var(--control-borderColor-success, var(--color-success-emphasis, #1f883d))",
    muted: (theme: any) => `var(--borderColor-success-muted, var(--color-success-muted, ${alpha(get('scale.green.3'), 0.4)(theme)}))`,
    subtle: (theme: any) => `var(--bgColor-success-muted, var(--color-success-subtle, ${get('scale.green.0')(theme)}))`
  },
  attention: {
    fg: (theme: any) => `var(--fgColor-attention, var(--color-attention-fg, ${get('scale.yellow.5')(theme)}))`,
    emphasis: (theme: any) => `var(--control-borderColor-warning, var(--color-attention-emphasis, ${get('scale.yellow.5')(theme)}))`,
    muted: (theme: any) => `var(--borderColor-attention-muted, var(--color-attention-muted, ${alpha(get('scale.yellow.3'), 0.4)(theme)}))`,
    subtle: (theme: any) => `var(--bgColor-attention-muted, var(--color-attention-subtle, ${get('scale.yellow.0')(theme)}))`
  },
  severe: {
    fg: (theme: any) => `var(--fgColor-severe, var(--color-severe-fg, ${get('scale.orange.5')(theme)}))`,
    emphasis: (theme: any) => `var(--bgColor-severe-emphasis, var(--color-severe-emphasis, ${get('scale.orange.5')(theme)}))`,
    muted: (theme: any) => `var(--borderColor-severe-muted, var(--color-severe-muted, ${alpha(get('scale.orange.3'), 0.4)(theme)}))`,
    subtle: (theme: any) => `var(--bgColor-severe-muted, var(--color-severe-subtle, ${get('scale.orange.0')(theme)}))`
  },
  danger: {
    fg: "var(--control-danger-fgColor-rest, var(--color-danger-fg, #d1242f))",
    emphasis: (theme: any) => `var(--control-borderColor-danger, var(--color-danger-emphasis, ${get('scale.red.5')(theme)}))`,
    muted: (theme: any) => `var(--borderColor-danger-muted, var(--color-danger-muted, ${alpha(get('scale.red.3'), 0.4)(theme)}))`,
    subtle: (theme: any) => `var(--bgColor-danger-muted, var(--color-danger-subtle, ${get('scale.red.0')(theme)}))`
  },
  open: {
    fg: (theme: any) => `var(--fgColor-open, var(--color-open-fg, ${get('scale.green.5')(theme)}))`,
    emphasis: (theme: any) => `var(--bgColor-open-emphasis, var(--color-open-emphasis, ${get('success.emphasis')(theme)}))`,
    muted: (theme: any) => `var(--borderColor-open-muted, var(--color-open-muted, ${alpha(get('scale.green.3'), 0.4)(theme)}))`,
    subtle: (theme: any) => `var(--bgColor-open-muted, var(--color-open-subtle, ${get('scale.green.0')(theme)}))`
  },
  closed: {
    fg: (theme: any) => `var(--fgColor-closed, var(--color-closed-fg, ${get('danger.fg')(theme)}))`,
    emphasis: (theme: any) => `var(--bgColor-closed-emphasis, var(--color-closed-emphasis, ${get('scale.red.5')(theme)}))`,
    muted: (theme: any) => `var(--borderColor-closed-muted, var(--color-closed-muted, ${alpha(get('scale.red.3'), 0.4)(theme)}))`,
    subtle: (theme: any) => `var(--bgColor-closed-muted, var(--color-closed-subtle, ${get('scale.red.0')(theme)}))`
  },
  done: {
    fg: (theme: any) => `var(--fgColor-done, var(--color-done-fg, ${get('scale.purple.5')(theme)}))`,
    emphasis: (theme: any) => `var(--bgColor-done-emphasis, var(--color-done-emphasis, ${get('scale.purple.5')(theme)}))`,
    muted: (theme: any) => `var(--borderColor-done-muted, var(--color-done-muted, ${alpha(get('scale.purple.3'), 0.4)(theme)}))`,
    subtle: (theme: any) => `var(--bgColor-done-muted, var(--color-done-subtle, ${get('scale.purple.0')(theme)}))`
  },
  sponsors: {
    fg: (theme: any) => `var(--fgColor-sponsors, var(--color-sponsors-fg, ${get('scale.pink.5')(theme)}))`,
    emphasis: (theme: any) => `var(--bgColor-sponsors-emphasis, var(--color-sponsors-emphasis, ${get('scale.pink.5')(theme)}))`,
    muted: (theme: any) => `var(--borderColor-sponsors-muted, var(--color-sponsors-muted, ${alpha(get('scale.pink.3'), 0.4)(theme)}))`,
    subtle: (theme: any) => `var(--bgColor-sponsors-muted, var(--color-sponsors-subtle, ${get('scale.pink.0')(theme)}))`
  },

  // Only meant to be used by Primer components
  primer: {
    fg: {
      disabled: (theme: any) => `var(undefined, var(--color-fg-disabled, ${get('scale.gray.4')(theme)}))`
    },
    canvas: {
      backdrop: (theme: any) => `var(undefined, var(--color-canvas-backdrop, ${alpha(get('scale.black'), 0.5)(theme)}))`, // use for modal/dialogs
      sticky: (theme: any) => `var(undefined, var(--color-canvas-sticky, ${alpha(get('scale.white'), 0.95)(theme)}))` // use for sticky headers
    },
    border: {
      active: (theme: any) => `var(undefined, var(--color-border-active, ${get('scale.coral.3')(theme)}))`,
      contrast: (theme: any) => `var(undefined, var(--color-border-contrast, ${alpha(get('scale.black'), 0.1)(theme)}))` // use to increase contrast
    },
    shadow: {
      highlight: (theme: any) => `var(undefined, var(--color-shadow-highlight, inset 0 1px 0 ${alpha(get('scale.white'), 0.25)(theme)}))`, // top highlight
      inset: (theme: any) => `var(undefined, var(--color-shadow-inset, inset 0 1px 0 ${alpha(get('scale.gray.2'), 0.2)(theme)}))`, // top inner shadow
    }
  }
}
