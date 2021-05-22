import {get} from '../../../src/utils'

// Variables to be removed in the next major release (must map to system variables)
export default {
  text: {
    primary: get('fg.default'),
    secondary: get('fg.muted'),
    tertiary: get('fg.inactive'),
    placeholder: get('fg.inactive'),
    disabled: get('fg.inactive'),
    inverse: get('fg.onEmphasis'),
    link: get('accent.fg'),
    danger: get('danger.fg'),
    success: get('success.fg'),
    warning: get('warning.fg'),
    white: get('fg.onEmphasis')
  },
  icon: {
    primary: get('fg.default'),
    secondary: get('fg.muted'),
    tertiary: get('fg.inactive'),
    info: get('accent.fg'),
    danger: get('danger.fg'),
    success: get('success.fg'),
    warning: get('warning.fg')
  },
  border: {
    primary: get('border.default'),
    secondary: get('border.divider'),
    // tertiary
    overlay: get('border.default'),
    // inverse
    info: get('accent.emphasis'),
    danger: get('danger.emphasis'),
    success: get('success.emphasis'),
    warning: get('warning.emphasis')
  },
  bg: {
    canvas: get('canvas.default'),
    canvasMobile: get('canvas.mobile'),
    canvasInverse: get('neutral.emphasis'),
    canvasInset: get('canvas.inset'),
    primary: get('canvas.default'),
    // secondary
    // teritary
    overlay: get('canvas.overlay'),
    backdrop: get('canvas.backdrop'),
    info: get('accent.muted'),
    infoInverse: get('accent.emphasis'),
    danger: get('danger.muted'),
    dangerInverse: get('danger.emphasis'),
    success: get('success.muted'),
    successInverse: get('success.emphasis'),
    warning: get('warning.muted'),
    warningInverse: get('warning.emphasis')
  }
}
