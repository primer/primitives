import {merge} from '../../../src/utils-v1'
import lightComponentVars from '../vars/component_light'
import lightDeprecatedVars from '../vars/deprecated_light'
import lightGlobalVars from '../vars/global_light'
import lightMarketingVars from '../vars/marketing_light'
import lightAppVars from '../vars/app_light'

const scale = {
  prov: {
    neonGreen: '#c9f04d'
  },
  black: '#1F2328',
  white: '#ffffff',
  gray: ['#f6f8fa', '#eaeef2', '#d0d7de', '#afb8c1', '#8c959f', '#6e7781', '#57606a', '#424a53', '#32383f', '#24292f'],
  blue: ['#ddf4ff', '#b6e3ff', '#80ccff', '#54aeff', '#218bff', '#0969da', '#0550ae', '#033d8b', '#0a3069', '#002155'],
  green: ['#dafbe1', '#aceebb', '#6fdd8b', '#4ac26b', '#2da44e', '#1a7f37', '#116329', '#044f1e', '#003d16', '#002d11'],
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
    '#fff1e5',
    '#ffd8b5',
    '#ffb77c',
    '#fb8f44',
    '#e16f24',
    '#bc4c00',
    '#953800',
    '#762c00',
    '#5c2200',
    '#471700'
  ],
  red: ['#ffebe9', '#ffcecb', '#ffaba8', '#ff8182', '#fa4549', '#cf222e', '#a40e26', '#82071e', '#660018', '#4c0014'],
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
  coral: [
    '#fff0eb',
    '#ffd6cc',
    '#ffb4a1',
    '#fd8c73',
    '#ec6547',
    '#c4432b',
    '#9e2f1c',
    '#801f0f',
    '#691105',
    '#510901'
  ]
}

// const exceptions = {
//   Please avoid adding exceptions to this base theme.
//   Otherwise the exceptions will also propagate to all other extended themes.
// }

export default merge(lightDeprecatedVars, lightAppVars, lightMarketingVars, lightComponentVars, lightGlobalVars, {scale})
