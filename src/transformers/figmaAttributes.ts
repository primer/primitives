import type StyleDictionary from 'style-dictionary'

type FigmaVariableScope =
  | 'ALL_SCOPES'
  | 'TEXT_CONTENT'
  | 'CORNER_RADIUS'
  | 'WIDTH_HEIGHT'
  | 'GAP'
  | 'ALL_FILLS'
  | 'FRAME_FILL'
  | 'SHAPE_FILL'
  | 'TEXT_FILL'
  | 'STROKE_COLOR'

const figmaScopes: Record<string, FigmaVariableScope[]> = {
  all: ['ALL_SCOPES'],
  radius: ['CORNER_RADIUS'],
  size: ['WIDTH_HEIGHT'],
  gap: ['GAP'],
  bgColor: ['FRAME_FILL', 'SHAPE_FILL'],
  fgColor: ['TEXT_FILL', 'SHAPE_FILL'],
  borderColor: ['STROKE_COLOR'],
}

const getScopes = (scopes: string[] | string | undefined): FigmaVariableScope[] => {
  if (typeof scopes === 'string') scopes = [scopes]
  if (Array.isArray(scopes))
    return scopes
      .map(scope => {
        if (scope in figmaScopes) return figmaScopes[scope]
        throw new Error(`Invalid scope: ${scope}`)
      })
      .flat() as FigmaVariableScope[]

  return ['ALL_SCOPES']
}
/**
 * @description retrieves figma attributes from token and adds them to attributes
 * @type attribute transformer — [StyleDictionary.AttributeTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens
 * @transformer returns ab object of figma attributes
 */
export const figmaAttributes: StyleDictionary.Transform = {
  type: `attribute`,
  transformer: (token: StyleDictionary.TransformedToken, platform: StyleDictionary.Platform = {}) => {
    const {mode, collection, scopes, group, codeSyntax} = token.$extensions?.['org.primer.figma'] || {}
    return {
      mode: platform.options?.mode || mode || 'default',
      collection,
      group: group || collection,
      scopes: getScopes(scopes),
      codeSyntax,
    }
  },
}
