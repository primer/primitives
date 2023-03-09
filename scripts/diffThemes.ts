import {PrimerStyleDictionary} from '~/src/PrimerStyleDictionary'
// @ts-expect-error: no types exists for style-dictionary createDictionary
import createDictionary from 'style-dictionary/lib/utils/createDictionary'
import {themes as themesConfigArray} from './themes.config'
import type StyleDictionary from 'style-dictionary'

const tokenNameArray = ({dictionary}: {dictionary: StyleDictionary.Dictionary}) =>
  dictionary.allTokens.map(({name}: {name: string}) => name)

const themes = themesConfigArray.map(({filename, source, include}): [string, string[]] => {
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
 */

const diffThemes = (mainThemeName: string) => {
  const [, mainTokens] = themes.find(([name]) => name === mainThemeName) || []
  if (mainTokens === undefined) {
    throw new Error(`Theme ${mainThemeName} not found`)
  }
  const otherThemes: [string, string[]][] = themes.filter(([name]) => name !== mainThemeName)

  otherThemes.map(theme => {
    const [name, tokens] = <[name: string, tokens: string[]]>theme
    const difference = mainTokens.filter((token: string) => !tokens.includes(token))
    //eslint-disable-next-line no-console
    console.log(`\n:::: ${name} vs ${mainThemeName} ::::\n`)
    //eslint-disable-next-line no-console
    console.log(`${difference.length} tokens missing in ${name}:`)
    if (difference.length > 0) {
      //eslint-disable-next-line no-console
      console.log(difference)
    }

    const additions = tokens.filter((token: string) => !mainTokens.includes(token))
    //eslint-disable-next-line no-console
    console.log(`\n${additions.length} tokens added in ${name}`)
    if (additions.length > 0) {
      //eslint-disable-next-line no-console
      console.log(additions)
    }
  })
}

diffThemes('light')
