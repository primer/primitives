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
      bg: '#1b1f23',
      shadow: {
        outline: 'rgb(0 0 0 / 15%) 0 0 0 1px inset',
        focus: 'rgb(0 0 0 / 15%) 0 0 0 4px',
        hover: '0 3px 2px rgba(0, 0, 0, 0.07), 0 7px 5px rgba(0, 0, 0, 0.04), 0 12px 10px rgba(0, 0, 0, 0.03), 0 22px 18px rgba(0, 0, 0, 0.03), 0 42px 33px rgba(0, 0, 0, 0.02), 0 100px 80px rgba(0, 0, 0, 0.02)',
        hoverMuted: 'rgb(0 0 0 / 70%) 0 0 0 2px inset'
      },
    }
  }
}
