import {resolve} from 'path'
import {Project, ScriptTarget, SyntaxKind, Node} from 'ts-morph'
import kebabCase from 'lodash/kebabCase'

// eslint-disable-next-line import/extensions
import fallbacks from '../src/tokens/fallback/color-fallbacks.json'

type FallbackMap = Record<string, string>
const getNewVariable = (oldVariable: string) => {
  return Object.keys(fallbacks as FallbackMap).find(newVariable => {
    return (fallbacks as FallbackMap)[newVariable] === `var(${oldVariable})`
  })
}

const project = new Project({compilerOptions: {target: ScriptTarget.ES3}})
project.addSourceFilesAtPaths(resolve('./data/colors/vars/*.ts'))

project.getSourceFiles().map(sourceFile => {
  /**
   * export default { }
   *                 ↑ first object expression
   */
  const exportedObject = sourceFile.getDescendantsOfKind(SyntaxKind.ObjectLiteralExpression)[0]

  /**
   * export default {
   *     ↓ property assignment
   *  fg : {
   *    default : get('scale.black'),
   *            ↑ also property assignment
   *          ↓ also property assignment
   *    muted : '#656d76'
   *  },
   *  canvas: { }  ← property assignment
   * }
   */
  const propertyAssignments = exportedObject.getDescendantsOfKind(SyntaxKind.PropertyAssignment)

  let prefix = ''
  propertyAssignments.map(propertyAssignment => {
    /**
     * export default {
     *  ↓ property name
     *  fg: { }
     *       ↑ initialiser (property value)
     *
     * fg: {
     *  ↓ property name
     *  subtle: get('scale.gray.5'),
     *          ↑ initialiser (property value)
     */

    const propertyName = propertyAssignment.getName()
    const propertyValue = propertyAssignment.getInitializer()

    if (!propertyValue) return // doesn't actually happen, just for completion

    /**
     * propertValue can be of 4 types: ObjectLiteralExpression, StringLiteral, CallExpression, ArrowFunction
     *
     * fg: { }, ← ObjectLiteralExpression, we can ignore these
     * primer: {
     *   fg: { } ← ObjectLiteralExpression, we can ignore these
     * },
     *
     *
     * fg: {
     *   muted: '#656d76', ← StringLiteral,
     *   subtle: get('scale.gray.5'), ← CallExpression
     * },
     * shadow: {
     *   small: (theme: any) => `0 1px 0 ${alpha(get('scale.black'), 0.04)(theme)}`, ← ArrowFunction
     * }
     *
     */

    if (Node.isObjectLiteralExpression(propertyValue)) {
      /**
       * fg: { } ← ObjectLiteralExpression
       *
       * We can ignore these
       * because the propertyAssignment inside the object would be handled
       *
       * We only set the prefix, so that it can be used in the children
       */
      prefix = propertyName
    } else if (Node.isStringLiteral(propertyValue)) {
      /**
       * Before:
       * fg: {
       *   muted: '#656d76' ← StringLiteral
       * }
       *
       * After:
       * fg: {
       *   muted: "var(--fgColor-muted, var(--color-fg-muted, #656d76))",
       * }
       */

      const oldValue = propertyValue.getText()
      if (oldValue.startsWith(`"var(`)) return // already replaced, skip!

      const oldVariableName = `--color-${prefix}-${kebabCase(propertyName)}`
      const newVariableName = getNewVariable(oldVariableName)

      const newValue = `"var(${newVariableName}, var(${oldVariableName}, ${oldValue.replaceAll(`'`, ``)}))"`
      propertyValue.replaceWithText(newValue)
    } else if (Node.isCallExpression(propertyValue)) {
      /**
       * Before:
       * fg: {
       *   default: get('scale.black') ← CallExpression
       * }
       *
       * After:
       * fg: {
       *   default: (theme: any) => `var(--fgColor-default, var(--color-fg-default, ${get('scale.black')(theme)} ))`
       * }
       *
       *   // expanded for readibility:
       *   default: (theme: any) => `
       *      var(
       *        --fgColor-default,
       *        var(
       *          --color-fg-default,
       *          ${ get('scale.black')(theme) }
       *         )
       *      )
       *   `
       * }
       */

      const oldValue = propertyValue.getText()
      if (oldValue.includes(`"var(`)) return // already replaced, skip!

      const oldVariableName = `--color-${prefix}-${kebabCase(propertyName)}`
      const newVariableName = getNewVariable(oldVariableName)
      const newValue = `(theme: any) => \`var(${newVariableName}, var(${oldVariableName}, $\{${oldValue}(theme)}))\``
      propertyValue.replaceWithText(newValue)
    } else if (Node.isArrowFunction(propertyValue)) {
      /**
       * Before:
       * shadow: {
       *   small: (theme: any) => `0 1px 0 ${alpha(get('scale.black'), 0.04)(theme)}`,
       * }
       *
       * After:
       * shadow: {
       *   small: (theme: any) => `var(--shadow-resting-small, var(--color-shadow-small, 0 1px 0 ${alpha(get('scale.black'), 0.04)(theme)}))`,
       * }
       *
       *   // expanded for readibility:
       *   small: (theme: any) => `
       *   var(
       *      --shadow-resting-small,
       *      var(
       *        --color-shadow-small,
       *        0 1px 0 ${alpha(get('scale.black'), 0.04)(theme)}
       *      )
       *   )
       *   `
       * }
       */
      const functionBody = propertyValue.getBody()
      const oldFunctionBody = functionBody.getText()
      if (oldFunctionBody.includes('`var(')) return // already replaced, skip!

      const oldVariableName = `--color-${prefix}-${kebabCase(propertyName)}`
      const newVariableName = getNewVariable(oldVariableName)
      const newFunctionBody = `var(${newVariableName}, var(${oldVariableName}, ${oldFunctionBody.replaceAll('`', '')}))`

      functionBody.replaceWithText(`\`${newFunctionBody}\``)
    } else {
      // eslint-disable-next-line no-console
      console.warn('unhandled type!')
    }
  })
  sourceFile.save()
})
