/* eslint eslint-comments/no-use: off */
/* eslint-disable import/extensions */

import fs from 'fs'
import path from 'path'
import glob from 'glob'
import postcss from 'postcss'
import type {Properties} from 'csstype'
import {flatten, uniqBy} from 'lodash'
import {getTokensByName} from '~/docs/storybook/stories/utilities/getTokensByName'
import type StyleDictionary from 'style-dictionary'

// stories
import functionalTypographyTokens from '~/tokens-next-private/docs/functional/typography/typography.json'
import baseTypographyTokens from '~/tokens-next-private/docs/base/typography/typography.json'
import functionalBorderTokens from '~/tokens-next-private/docs/functional/size/border.json'
import functionalSizeTokens from '~/tokens-next-private/docs/functional/size/size.json'
import functionalSizeFineTokens from '~/tokens-next-private/docs/functional/size/size-fine.json'
import baseSizeTokens from '~/tokens-next-private/docs/base/size/size.json'
import functionalColorTokens from '~/tokens-next-private/docs/functional/themes/light.json'

// path relative to script
const tokensDirectory = path.join(__dirname, '../tokens-next-private')

if (!fs.existsSync(tokensDirectory)) {
  // eslint-disable-next-line no-console
  console.log(`tokens not found at ${tokensDirectory}, please run this script after running build:next`)
  process.exit(1)
}

const filePaths = glob.sync(`${tokensDirectory}/css/{base,functional}/**/*.css`, {
  ignore: ['**/themes/dark.css', '**/themes/dark-*', '**/themes/light-*'],
})

type Variable = {name: string; value: string; type: 'base' | 'functional'; file: {name: string; path: string}}

const variables: Variable[] = []
filePaths.map(filePath => {
  const contents = fs.readFileSync(filePath)
  const ast = postcss.parse(contents)

  ast.walkDecls(declaration => {
    if (!declaration.variable) return

    const relativePath = filePath.split('tokens-next-private/css/')[1]

    const parsedFilePath = path.parse(filePath)

    variables.push({
      name: declaration.prop,
      value: declaration.value,
      type: relativePath.startsWith('functional/') ? 'functional' : 'base',
      file: {name: parsedFilePath.name, path: `tokens-next-private/css/${relativePath}`},
    })
  })
})

type Property = keyof Properties
type Rule = (variable: Variable) => boolean | undefined
type Rules = {
  [key in keyof Properties]: Rule | Property | Property[]
}

const rules: Rules = {
  paddingBlock: ({type, name, file}) => {
    if (file.name !== 'size') return false
    else if (type === 'base') return true
    else if (name.includes('padding') && !name.includes('paddingInline')) return true
  },
  paddingInline: ({type, name, file}) => {
    if (file.name !== 'size') return false
    else if (type === 'base') return true
    else if (name.includes('padding') && !name.includes('paddingBlock')) return true
  },
  margin: ({type, file}) => {
    if (file.name === 'size' && type === 'base') return true
  },
  gap: ({type, name, file}) => {
    if (!file.name.includes('size')) return false
    else if (type === 'base') return true
    else if (name.includes('gap')) return true
  },
  width: ({type, name, file}) => {
    if (!file.name.includes('size')) return false
    else if (type === 'base') return true
    else if (name.includes('size')) return true
    else if (name.includes('minTarget')) return true
  },
  height: ({type, name, file}) => {
    if (file.name.includes('size')) {
      if (type === 'base') return true
      else if (name.includes('size')) return true
      else if (name.includes('minTarget')) return true
      else if (name.includes('lineBoxHeight')) return true
    } else if (file.name === 'typography') {
      if (name.includes('lineBoxHeight')) return true
    }
  },
  borderWidth: ({name, file}) => {
    if (file.name !== 'border') return false
    else if (name.includes('borderWidth')) return true
  },
  borderRadius: ({name, file}) => {
    if (file.name !== 'border') return false
    else if (name.includes('borderRadius')) return true
  },
  borderColor: ({name, file}) => {
    if (file.name === 'light' && name.includes('borderColor')) return true
    if (file.name === 'light' && name.includes('color-scale')) return true
  },
  boxShadow: ({name, file}) => {
    if (file.name === 'border' && name.includes('boxShadow')) return true
    if (file.name === 'light' && name.includes('shadow')) return true
  },
  outlineWidth: ({name, file}) => {
    if (file.name !== 'border') return false
    else if (name.includes('outline-focus-width')) return true
  },
  outlineOffset: ({name, file}) => {
    if (file.name !== 'border') return false
    else if (name.includes('outline-focus-offset')) return true
  },
  outlineColor: ({name, file}) => {
    if (file.name === 'light' && name.includes('outlineColor')) return true
  },
  fontWeight: ({name, file}) => {
    if (file.name === 'typography' && name.includes('weight')) return true
  },
  fontSize: ({name, file}) => {
    if (file.name === 'typography' && name.includes('size')) return true
  },
  lineHeight: ({name, file}) => {
    if (file.name === 'typography' && name.includes('lineHeight')) return true
  },
  fontFamily: ({name, file}) => {
    if (file.name === 'typography' && name.includes('fontStack')) return true
  },
  font: ({name, file}) => {
    if (file.name === 'typography' && name.includes('shorthand')) return true
  },

  color: ({name, file}) => {
    if (file.name === 'light' && name.includes('codeMirror-syntax')) return false
    if (file.name === 'light' && name.includes('fgColor')) return true
    if (file.name === 'light' && name.includes('iconColor')) return true
    if (file.name === 'light' && name.includes('color-scale')) return true
  },
  backgroundColor: ({name, file}) => {
    if (file.name === 'light' && name.includes('bgColor')) return true
    if (file.name === 'light' && name.includes('color-scale')) return true
  },
  fill: ({name, file}) => {
    if (file.name === 'light' && name.includes('iconColor')) return true
  },
  stroke: ({name, file}) => {
    if (file.name === 'light' && name.includes('iconColor')) return true
  },
}

type PropertyMap = {
  [key in keyof Rules | 'breakpoint']?: Variable[]
}
const propertyMap: PropertyMap = {}

// special property
propertyMap['breakpoint'] = variables.filter(({file}) => file.name === 'breakpoints')

// rule based properties
;(Object.keys(rules) as Property[]).map(property => {
  const value = rules[property]

  if (typeof value === 'function') {
    const fn = value
    propertyMap[property] = variables.filter(fn)
  } else if (typeof value === 'string') {
    const matchingProperty = value
    propertyMap[property] = propertyMap[matchingProperty]
  } else if (Array.isArray(value)) {
    const matchingProperties = value
    const matchingVariablesArray = matchingProperties.map(matchingProperty => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return propertyMap[matchingProperty]!
    })
    propertyMap[property] = uniqBy(flatten(matchingVariablesArray), 'name')
  }
})

const logUnassignedVariables = () => {
  const stringified = JSON.stringify(propertyMap)
  const unassigned: Variable[] = []

  variables
    .filter(variable => {
      // TODO: check if we should be ignoring
      if (
        variable.name.includes('prettylights-syntax') ||
        variable.name.includes('codeMirror-syntax') ||
        variable.name.includes('color-ansi')
      )
        return false
      return true
    })
    .map(variable => {
      if (!stringified.includes(variable.name)) unassigned.push(variable)
    })

  return unassigned
}

const unusedVariables = logUnassignedVariables()

if (unusedVariables.length > 0) {
  // eslint-disable-next-line no-console
  console.log(`Found unused variables, failing build`)
  // eslint-disable-next-line no-console
  console.log(unusedVariables)
  process.exit(1)
}

// it's better to be explicit than fuzzy match to avoid bad hints
// for example, borderImage properties should not show border hints
// buuut it is a really long list to cover, should we use custom fuzzy rules instead?
// note: this list is incomplete
type Aliases = {
  [key in keyof Properties]: Property | Property[]
}
const aliases: Aliases = {
  paddingBlockStart: 'paddingBlock',
  paddingBlockEnd: 'paddingBlock',
  paddingInlineEnd: 'paddingInline',
  paddingInlineStart: 'paddingInline',
  paddingTop: 'paddingBlock',
  paddingBottom: 'paddingBlock',
  paddingLeft: 'paddingInline',
  paddingRight: 'paddingInline',
  padding: ['paddingBlock', 'paddingInline'],
  marginBlockStart: 'margin',
  marginBlockEnd: 'margin',
  marginInline: 'margin',
  marginInlineEnd: 'margin',
  marginInlineStart: 'margin',
  marginTop: 'margin',
  marginRight: 'margin',
  marginBottom: 'margin',
  marginLeft: 'margin',
  maxWidth: 'width',
  minWidth: 'width',
  maxHeight: 'height',
  minHeight: 'height',
  rowGap: 'gap',
  columnGap: 'gap',

  borderTopWidth: 'borderWidth',
  borderRightWidth: 'borderWidth',
  borderLeftWidth: 'borderWidth',
  borderBottomWidth: 'borderWidth',
  borderBlockWidth: 'borderWidth',
  borderInlineWidth: 'borderWidth',
  borderBlockEndWidth: 'borderWidth',
  borderBlockStartWidth: 'borderWidth',
  borderInlineEndWidth: 'borderWidth',
  borderInlineStartWidth: 'borderWidth',
  borderBlock: 'border',
  border: ['borderWidth', 'borderRadius', 'borderColor'],
  borderTopColor: 'borderColor',
  borderRightColor: 'borderColor',
  borderLeftColor: 'borderColor',
  borderBottomColor: 'borderColor',
  borderBlockColor: 'borderColor',
  borderInlineColor: 'borderColor',
  borderBlockStartColor: 'borderColor',
  borderBlockEndColor: 'borderColor',
  borderInlineStartColor: 'borderColor',
  borderInlineEndColor: 'borderColor',
  borderTopLeftRadius: 'borderRadius',
  borderTopRightRadius: 'borderRadius',
  borderBottomRightRadius: 'borderRadius',
  borderBottomLeftRadius: 'borderRadius',
  borderStartStartRadius: 'borderRadius',
  borderStartEndRadius: 'borderRadius',
  borderEndEndRadius: 'borderRadius',
  borderEndStartRadius: 'borderRadius',

  outline: ['outlineWidth', 'outlineOffset', 'outlineColor'],
  background: 'backgroundColor',

  // guesses
  accentColor: ['backgroundColor', 'color'],
  caretColor: 'color',
}

const getTokenName = (token: Record<string, StyleDictionary.TransformedToken> | Variable) => {
  return token.name
}

// painfully manually copied from stories
const stories = {
  Color: {
    Base: {
      Scales: {
        AllScales: variables.filter(({file, name}) => file.name === 'light' && name.includes('color-scale')),
      },
    },
    Functional: {
      Background: [
        'borderColor-default',
        'borderColor-muted',
        'borderColor-emphasis',
        'borderColor-disabled',
        'borderColor-transparent',
      ],
      Border: ['bgColor-default', 'bgColor-muted', 'bgColor-disabled', 'bgColor-emphasis', 'bgColor-transparent'],
      Foreground: ['fgColor-default', 'fgColor-muted', 'fgColor-onEmphasis', 'fgColor-disabled', 'fgColor-link-rest'],
      Roles: {
        Neutral: [
          'fgColor-neutral',
          'bgColor-neutral-muted',
          'bgColor-neutral-emphasis',
          'borderColor-neutral-muted',
          'borderColor-neutral-emphasis',
        ],
        Accent: [
          'fgColor-accent',
          'bgColor-accent-muted',
          'bgColor-accent-emphasis',
          'borderColor-accent-muted',
          'borderColor-accent-emphasis',
        ],
        Success: [
          'fgColor-success',
          'bgColor-success-muted',
          'bgColor-success-emphasis',
          'borderColor-success-muted',
          'borderColor-success-emphasis',
        ],
        Attention: [
          'fgColor-attention',
          'bgColor-attention-muted',
          'bgColor-attention-emphasis',
          'borderColor-attention-muted',
          'borderColor-attention-emphasis',
        ],
        Severe: [
          'fgColor-severe',
          'bgColor-severe-muted',
          'bgColor-severe-emphasis',
          'borderColor-severe-muted',
          'borderColor-severe-emphasis',
        ],
        Danger: [
          'fgColor-danger',
          'bgColor-danger-muted',
          'bgColor-danger-emphasis',
          'borderColor-danger-muted',
          'borderColor-danger-emphasis',
        ],
        Open: [
          'fgColor-open',
          'bgColor-open-muted',
          'bgColor-open-emphasis',
          'borderColor-open-muted',
          'borderColor-open-emphasis',
        ],
        Closed: [
          'fgColor-closed',
          'bgColor-closed-muted',
          'bgColor-closed-emphasis',
          'borderColor-closed-muted',
          'borderColor-closed-emphasis',
        ],
        Done: [
          'fgColor-done',
          'bgColor-done-muted',
          'bgColor-done-emphasis',
          'borderColor-done-muted',
          'borderColor-done-emphasis',
        ],
        Sponsors: [
          'fgColor-sponsors',
          'bgColor-sponsors-muted',
          'bgColor-sponsors-emphasis',
          'borderColor-sponsors-muted',
          'borderColor-sponsors-emphasis',
        ],
      },
      Shadows: [
        'shadow-resting-xsmall',
        'shadow-resting-small',
        'shadow-resting-medium',
        'shadow-floating-small',
        'shadow-floating-medium',
        'shadow-floating-large',
        'shadow-highlight',
        'shadow-inset',
      ],
    },
    Patterns: {
      Avatar: getTokensByName(functionalColorTokens, 'avatar').map(getTokenName),
      Button: [
        ...getTokensByName(functionalColorTokens, 'button'),
        ...getTokensByName(functionalColorTokens, 'buttonCounter'),
      ].map(getTokenName),
      Control: [
        ...getTokensByName(functionalColorTokens, 'control'),
        ...getTokensByName(functionalColorTokens, 'controlKnob'),
        ...getTokensByName(functionalColorTokens, 'controlTrack'),
      ].map(getTokenName),
      Counter: getTokensByName(functionalColorTokens, 'counter').map(getTokenName),
      Focus: getTokensByName(functionalColorTokens, 'focus-outlineColor').map(getTokenName),
      Header: getTokensByName(functionalColorTokens, 'header').map(getTokenName),
      Menu: getTokensByName(functionalColorTokens, 'menu').map(getTokenName),
      Overlay: getTokensByName(functionalColorTokens, 'overlay').map(getTokenName),
      SelectMenu: getTokensByName(functionalColorTokens, 'selectMenu').map(getTokenName),
      SideNav: getTokensByName(functionalColorTokens, 'sideNav').map(getTokenName),
      TimelineBadge: getTokensByName(functionalColorTokens, 'timelineBadge').map(getTokenName),
      UnderlineNav: getTokensByName(functionalColorTokens, 'underlineNav').map(getTokenName),
    },
  },
  Typography: {
    Base: getTokensByName(baseTypographyTokens, 'base').map(getTokenName),
    Functional: {
      FontFamily: getTokensByName(functionalTypographyTokens, 'fontStack').map(getTokenName),
      FontShorthand: getTokensByName(functionalTypographyTokens, 'text').map(getTokenName),
      Display: getTokensByName(functionalTypographyTokens, 'text').map(getTokenName),
      TitleLarge: getTokensByName(functionalTypographyTokens, 'text').map(getTokenName),
      TitleMedium: getTokensByName(functionalTypographyTokens, 'text').map(getTokenName),
      TitleSmall: getTokensByName(functionalTypographyTokens, 'text').map(getTokenName),
      Subtitle: getTokensByName(functionalTypographyTokens, 'text').map(getTokenName),
      BodyLarge: getTokensByName(functionalTypographyTokens, 'text').map(getTokenName),
      BodyMedium: getTokensByName(functionalTypographyTokens, 'text').map(getTokenName),
      BodySmall: getTokensByName(functionalTypographyTokens, 'text').map(getTokenName),
      Caption: getTokensByName(functionalTypographyTokens, 'text').map(getTokenName),
      CodeBlock: getTokensByName(functionalTypographyTokens, 'text').map(getTokenName),
      InlineCodeBlock: getTokensByName(functionalTypographyTokens, 'text').map(getTokenName),
      Overview: getTokensByName(functionalTypographyTokens, 'text').map(getTokenName),
    },
  },
  Size: {
    Border: {
      BorderSize: [
        ...getTokensByName(functionalBorderTokens, 'boxShadow'),
        ...getTokensByName(functionalBorderTokens, 'borderWidth'),
      ].map(getTokenName),
      BorderRadius: getTokensByName(functionalBorderTokens, 'borderRadius').map(getTokenName),
      Outline: getTokensByName(functionalBorderTokens, 'outline').map(getTokenName),
    },
    BreakPoints: {},
    Control: {
      XSmall: getTokensByName(functionalSizeTokens, 'control-xsmall').map(getTokenName),
      Small: getTokensByName(functionalSizeTokens, 'control-small').map(getTokenName),
      Medium: getTokensByName(functionalSizeTokens, 'control-medium').map(getTokenName),
      Large: getTokensByName(functionalSizeTokens, 'control-large').map(getTokenName),
      XLarge: getTokensByName(functionalSizeTokens, 'control-xlarge').map(getTokenName),
      ControlStackRegular: getTokensByName(functionalSizeTokens, 'controlStack').map(getTokenName),
      ControlStackResponsive: getTokensByName(functionalSizeFineTokens, 'controlStack').map(getTokenName),
      ControlTouchTarget: getTokensByName(functionalSizeTokens, 'control-minTarget').map(getTokenName),
      ControlTouchTargetResponsive: getTokensByName(functionalSizeFineTokens, 'control-minTarget').map(getTokenName),
    },
    Space: {
      Base: getTokensByName(baseSizeTokens, 'base').map(getTokenName),
    },
    Stack: {
      Stack: getTokensByName(functionalSizeTokens, 'stack').map(getTokenName),
    },
    ViewPort: {},
  },
}

const contents = `
  module.exports = {
    properties: ${JSON.stringify(propertyMap, null, 2)},
    aliases: ${JSON.stringify(aliases, null, 2)},
    stories: ${JSON.stringify(stories, null, 2)}
  }
`
fs.writeFileSync(path.join(tokensDirectory, 'js/intellisense.js'), contents)

// eslint-disable-next-line no-console
console.log('Successful!')
