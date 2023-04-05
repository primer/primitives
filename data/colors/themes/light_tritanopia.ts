import {merge, get} from '../../../src/utils-v1'
import light_colorblind from './light_colorblind'

const scale = {
  black: '#1b1f24',
  white: '#ffffff',
  gray: ['#f6f8fa', '#eaeef2', '#d0d7de', '#afb8c1', '#8c959f', '#6e7781', '#57606a', '#424a53', '#32383f', '#24292f'],
  blue: ['#ddf4ff', '#b6e3ff', '#80ccff', '#54aeff', '#218bff', '#0969da', '#0550ae', '#033d8b', '#0a3069', '#002155'],
  green: ['#ddf4ff', '#b6e3ff', '#80ccff', '#54aeff', '#218bff', '#0969da', '#0550ae', '#033d8b', '#0a3069', '#002155'],
  yellow: [
    '#fff8c5',
    '#fae17d',
    '#eac54f',
    '#d4a72c',
    '#bf8700',
    '#9a6700',
    '#7d4e00',
    '#633c01',
    '#4d2d00',
    '#3b2300'
  ],
  orange: [
    '#ffebe9',
    '#ffcecb',
    '#ffaba8',
    '#ff8182',
    '#fa4549',
    '#cf222e',
    '#a40e26',
    '#82071e',
    '#660018',
    '#4c0014'
  ],
  red: [
    '#ffebe9',
    '#ffcecb',
    '#ffaba8',
    '#ff8182',
    '#fa4549',
    '#cf222e',
    '#a40e26',
    '#82071e',
    '#660018',
    '#4c0014'
  ],
  purple: [
    '#fbefff',
    '#ecd8ff',
    '#d8b9ff',
    '#c297ff',
    '#a475f9',
    '#8250df',
    '#6639ba',
    '#512a97',
    '#3e1f79',
    '#2e1461'
  ],
  pink: ['#ffeff7', '#ffd3eb', '#ffadda', '#ff80c8', '#e85aad', '#bf3989', '#99286e', '#772057', '#611347', '#4d0336'],
  coral: ['#fff0eb', '#ffd6cc', '#ffb4a1', '#fd8c73', '#ec6547', '#c4432b', '#9e2f1c', '#801f0f', '#691105', '#510901']
}

const exceptions = {
  fg: {
    default: get('scale.gray.9'),
    muted: get('scale.gray.6'),
  },
  success: {
    emphasis: get('scale.green.5'),
  },
  danger: {
    fg: get('scale.red.5'),
  }
}

export default merge(light_colorblind, exceptions, {scale})
