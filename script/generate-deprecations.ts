import fs from 'fs'
import {parse} from '@babel/parser'
import traverse from '@babel/traverse'
import {Identifier, StringLiteral} from '@babel/types'

// Temporary script to generate deprecations for the new functional color system.
// Delete this file when the new system is published.

// To generate `deprecations.json`, run:
//   yarn ts-node script/generate-deprecations.ts

const code = fs.readFileSync('./data/colors_v2/vars/deprecated.ts', 'utf8')

const ast = parse(code, {sourceType: 'module'})

const keyStack: Array<string> = []
const result: Record<string, string | null> = {}

traverse(ast, {
  ObjectProperty: {
    enter(path) {
      switch (path.node.value.type) {
        case 'ObjectExpression':
          keyStack.push((path.node.key as Identifier).name)
          break

        case 'CallExpression':
          if ((path.node.value.callee as Identifier).name === 'get') {
            result[[...keyStack, (path.node.key as Identifier).name].join('.')] = (path.node.value
              .arguments[0] as StringLiteral).value
          } else {
            result[[...keyStack, (path.node.key as Identifier).name].join('.')] = null
          }
          break

        case 'ArrayExpression':
          keyStack.push((path.node.key as Identifier).name)

          for (const index in path.node.value.elements) {
            result[[...keyStack, index].join('.')] = null
          }

          keyStack.pop()
          break

        default:
          result[[...keyStack, (path.node.key as Identifier).name].join('.')] = null
          break
      }
    },
    exit(path) {
      if (path.node.value.type === 'ObjectExpression') {
        keyStack.pop()
      }
    }
  }
})

fs.writeFileSync('./data/colors_v2/deprecations.json', JSON.stringify(result, null, 2))
