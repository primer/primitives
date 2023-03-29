import {PrimerStyleDictionary} from '~/src/PrimerStyleDictionary'
// @ts-expect-error: no types exists for style-dictionary createDictionary
import createDictionary from 'style-dictionary/lib/utils/createDictionary'
import {themes as themesConfigArray} from './themes.config'
import type StyleDictionary from 'style-dictionary'

const tokenNameArray = ({dictionary}: {dictionary: StyleDictionary.Dictionary}) =>
  dictionary.allTokens.map(({name}: {name: string}) => name)

const themesArray = themesConfigArray.map(({filename, source, include}): [string, string[]] => {
  const sd = PrimerStyleDictionary.extend({
    source,
    include,
    platforms: {
      json: {
        transforms: ['name/pathToDotNotation'],
      },
    },
  })
  return [
    filename,
    tokenNameArray({
      dictionary: createDictionary({properties: sd.exportPlatform('json')}),
    }),
  ]
})

/**
 *
 * @param mainThemeName - name of the theme (from themes.config.ts) to compare all other themes against
 * @param themes - array of themes to compare against mainThemeName in the format of [themeName, [tokenNames]]
 */

export const diffThemes = (mainThemeName: string, themes: [string, string[]][]) => {
  const [, mainTokens] = themes.find(([name]) => name === mainThemeName) || []
  if (mainTokens === undefined) {
    throw new Error(`Theme ${mainThemeName} not found`)
  }
  const otherThemes: [string, string[]][] = themes.filter(([name]) => name !== mainThemeName)

  const resultArray: string[] = []

  otherThemes.map(theme => {
    const [name, tokens] = <[name: string, tokens: string[]]>theme
    // get tokens that are in mainTheme but not in theme
    const difference = mainTokens.filter((token: string) => !tokens.includes(token))
    resultArray.push(`\n:::: ${name} vs ${mainThemeName} ::::\n`)
    resultArray.push(`${difference.length} tokens missing in ${name}:`)
    if (difference.length > 0) {
      resultArray.push(`  - ${difference.join('\n  - ')}`)
    }
    // get tokens that are in theme but not in mainTheme
    const additions = tokens.filter((token: string) => !mainTokens.includes(token))
    resultArray.push(`\n${additions.length} tokens added in ${name}`)
    if (additions.length > 0) {
      resultArray.push(`  - ${additions.join('\n  - ')}`)
    }
  })

  return resultArray.join('\n')
}
//eslint-disable-next-line no-console
console.log(diffThemes('light', themesArray), '\n')
