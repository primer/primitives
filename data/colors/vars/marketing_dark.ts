import {alpha, get, lighten, mix} from '../../../src/utils'

const mktg = {
  blue: {
    primary: '#4969ed',
    secondary: '#3355e0'
  },
  green: {
    primary: '#2ea44f',
    secondary: '#22863a'
  },
  purple: {
    primary: '#6f57ff',
    secondary: '#614eda'
  }
}

export default {
  mktg: {
    btn: {
      bg: '#f6f8fa',
      shadow: {
        outline: 'rgb(255 255 255 / 25%) 0 0 0 1px inset',
        focus: 'rgb(255 255 255 / 25%) 0 0 0 4px',
        hover: '0 4px 7px rgba(0, 0, 0, 0.15), 0 100px 80px rgba(255, 255, 255, 0.02), 0 42px 33px rgba(255, 255, 255, 0.024), 0 22px 18px rgba(255, 255, 255, 0.028), 0 12px 10px rgba(255, 255, 255, 0.034), 0 7px 5px rgba(255, 255, 255, 0.04), 0 3px 2px rgba(255, 255, 255, 0.07)',
        hoverMuted: 'rgb(255 255 255) 0 0 0 2px inset'
      },
    }
  }
}
