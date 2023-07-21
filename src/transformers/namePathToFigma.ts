import type StyleDictionary from 'style-dictionary'

/**
 * @description converts the [TransformedToken's](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts) `.path` array to a specific figma name
 * @type name transformer — [StyleDictionary.NameTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher omitted to match all tokens
 * @transformer returns `string`
 */
export const namePathToFigma: StyleDictionary.Transform = {
  type: `name`,
  transformer: (token: StyleDictionary.TransformedToken, options?: StyleDictionary.Platform): string => {
    let pathArray = token.path
    if (['fgColor', 'borderColor', 'bgColor'].includes(pathArray[0]) && pathArray.length === 3) {
      pathArray = [pathArray[0], `${pathArray[1]}-${pathArray[2]}`]
    }
    return (
      [options?.prefix, ...pathArray]
        // remove undefined if exists
        .filter((part: unknown): part is string => typeof part === 'string')
        .join('/')
    )
  },
}