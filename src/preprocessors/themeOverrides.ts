import type {PlatformConfig, PreprocessedTokens, Preprocessor} from 'style-dictionary/types'
import {transformTokens} from './utilities/transformTokens.js'

export const themeOverrides: Preprocessor = {
  name: 'themeOverrides',
  preprocessor: (dictionary: PreprocessedTokens, config: PlatformConfig): PreprocessedTokens => {
    const extensionProp = config.options?.themeOverrides?.extensionProp || 'org.primer.overrides'
    const valueProp = config.options?.themeOverrides?.valueProp || '$value'
    const currentTheme = config.options?.themeOverrides?.theme

    const tokens = transformTokens(dictionary, token => {
      // return early if no theme value is set
      if (!currentTheme || !token.$extensions?.[extensionProp] || !token.$extensions?.[extensionProp][currentTheme]) {
        return token
      }

      // get override
      const override = token.$extensions?.[extensionProp][currentTheme]
      // token an theme value exist
      return {
        ...token,
        ...(typeof override === 'object' ? override : {[valueProp]: override}),
      }
    })
    return tokens
  },
}
