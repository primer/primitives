import {resolve} from 'path'
import {Project, ScriptTarget, SyntaxKind, Node} from 'ts-morph'

const project = new Project({compilerOptions: {target: ScriptTarget.ES3}})
project.addSourceFilesAtPaths(resolve('./data/colors/vars/global_light.ts'))

project.getSourceFiles().forEach(sourceFile => {
  const exportedObject = sourceFile.getDescendantsOfKind(SyntaxKind.ObjectLiteralExpression)[0]

  const propertyAssignments = exportedObject.getChildrenOfKind(SyntaxKind.PropertyAssignment)

  //   fg: {
  //     default: (theme: any) => `var(--fgColor-default, var(--color-fg-default, ${get('scale.black')(theme)}))`,
  //     muted: '#656d76',
  //     subtle: get('scale.gray.5'),
  //     onEmphasis: get('scale.white')
  //   },

  propertyAssignments.map(propertyAssignment => {
    const key = propertyAssignment.getName()
    const variable = `color-${key}`

    const value = propertyAssignment.getInitializer()
    console.log(value?.getKindName())
    // value can be of type Object (key:value), function call(get, arrow theme function) or string (hex color/variable)
  })
})
