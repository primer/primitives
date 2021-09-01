import fs from 'fs'
import {parse} from '@babel/parser'
import traverse from '@babel/traverse'
import {Identifier, StringLiteral} from '@babel/types'

// Temporary script to generate deprecations for the new functional color system.
// Delete this file when the new system is published.

const code = fs.readFileSync('./data/colors_v2/vars/deprecated.ts', 'utf8')

const ast = parse(code, {sourceType: 'module'})

const propertyStack: Array<string> = []
const result: Record<string, string | null> = {}

traverse(ast, {
  ObjectProperty: {
    enter(path) {
      switch (path.node.value.type) {
        case 'ObjectExpression':
          propertyStack.push((path.node.key as Identifier).name)
          break

        case 'CallExpression':
          if ((path.node.value.callee as Identifier).name === 'get') {
            result[[...propertyStack, (path.node.key as Identifier).name].join('.')] = (path.node.value
              .arguments[0] as StringLiteral).value
          } else {
            result[[...propertyStack, (path.node.key as Identifier).name].join('.')] = null
          }
          break

        case 'ArrayExpression':
          propertyStack.push((path.node.key as Identifier).name)

          for (const index in path.node.value.elements) {
            result[[...propertyStack, index].join('.')] = null
          }

          propertyStack.pop()
          break

        default:
          result[[...propertyStack, (path.node.key as Identifier).name].join('.')] = null
          break
      }
      // if (path.node.value.type === 'CallExpression' && (path.node.value.callee as Identifier).name === 'get') {

      // } else if (path.node.value.type === 'ObjectExpression') {
      //   propertyStack.push((path.node.key as Identifier).name)
      // } else {

      // }
    },
    exit(path) {
      if (path.node.value.type === 'ObjectExpression') {
        propertyStack.pop()
      }
    }
  }
})

fs.writeFileSync('./data/colors_v2/deprecations.json', JSON.stringify(result, null, 2))
