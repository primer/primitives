/**
 * breakpoints are not part of CSS.Properties
 */

import fs from 'fs'
import path from 'path'
import glob from 'glob'
import postcss from 'postcss'
import type {Properties} from 'csstype'
import {flatten, uniqBy} from 'lodash'

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

const contents = `
  module.exports = {
    properties: ${JSON.stringify(propertyMap, null, 2)},
    aliases: ${JSON.stringify(aliases, null, 2)}
  }
`
fs.writeFileSync(path.join(tokensDirectory, 'js/intellisense.js'), contents)

// eslint-disable-next-line no-console
console.log('Successful!')
