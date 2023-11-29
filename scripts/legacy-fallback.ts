import {resolve} from 'path'
import {Project, ScriptTarget, SyntaxKind} from 'ts-morph'

// eslint-disable-next-line import/extensions
import fallbacks from '../src/tokens/fallback/color-fallbacks.json'

type FallbackMap = Record<string, string>
const getNewVariable = (oldVariable: string) => {
  return Object.keys(fallbacks as FallbackMap).find(newVariable => {
    return (fallbacks as FallbackMap)[newVariable] === `var(${oldVariable})`
  })
}

const project = new Project({compilerOptions: {target: ScriptTarget.ES3}})
project.addSourceFilesAtPaths(resolve('./data/colors/vars/global_light.ts'))

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

    if (propertyValue.getKind() === SyntaxKind.ObjectLiteralExpression) {
      /**
       * fg: { } ← ObjectLiteralExpression
       *
       * We can ignore these
       * because the propertyAssignment inside the object would be handled
       *
       * We only set the prefix, so that it can be used in the children
       */
      prefix = propertyName
    } else if (propertyValue.getKind() === SyntaxKind.StringLiteral) {
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
      if (oldValue.startsWith(`"var(--`)) return // already replaced, skip!

      const oldVariableName = `--color-${prefix}-${propertyName}`
      const newVariableName = getNewVariable(oldVariableName)

      const newValue = `"var(${newVariableName}, var(${oldVariableName}, ${oldValue.replaceAll(`'`, ``)}))"`
      propertyValue.replaceWithText(newValue)
    } else if (propertyValue.getKind() === SyntaxKind.CallExpression) {
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
      if (oldValue.includes(`"var(--`)) return // already replaced, skip!

      const oldVariableName = `--color-${prefix}-${propertyName}`
      const newVariableName = getNewVariable(oldVariableName)
      const newValue = `(theme: any) => \`var(${newVariableName}, var(${oldVariableName}, $\{${oldValue}(theme)}))\``
      propertyValue.replaceWithText(newValue)

      // step 1: convert get('scale.white') to (theme: any) => get('scale.white')(theme),
    }
  })
  sourceFile.save()
})
