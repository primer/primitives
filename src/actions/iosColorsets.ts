import type {Dictionary, Platform} from 'style-dictionary'

import {parseToRgba} from 'color2k'
import fs = require('fs')
import {toCamelCase} from '../utilities'

const contents = {
  info: {
    author: 'xcode',
    version: 1,
  },
}

const ratioRgb = (color: string) => {
  const percentageRgb = parseToRgba(color).map((part: number, index: number) => {
    if (index === 3) {
      return part.toFixed(3)
    }
    return (part / 255).toFixed(3)
  })

  return {
    red: `${percentageRgb[0]}`,
    green: `${percentageRgb[1]}`,
    blue: `${percentageRgb[2]}`,
    alpha: `${percentageRgb[3]}`,
  }
}

const getAppearance = (colormode: string, highContrast: boolean) =>
  [
    {
      appearance: 'luminosity',
      value: colormode === 'dark' ? 'dark' : 'light',
    },
    highContrast === true
      ? {
          appearance: 'contrast',
          value: 'high',
        }
      : null,
  ].filter(Boolean)

/**
 * This action will iterate over all the colors in the Style Dictionary
 * and for each one write a colorset with light and (optional) dark
 * mode versions.
 */
export const iosColorsets = {
  // This is going to run once per theme.
  do: (dictionary: Dictionary, platform: Platform) => {
    // get options or presets
    const {colorsetOutputPath, colorsetName, colormode, highContrast} = {
      ...{colorsetOutputPath: 'swift', colorsetName: 'Colors', colormode: 'light', highContrast: false},
      ...platform.options,
    }

    const assetPath = `${platform.buildPath}${colorsetOutputPath}${colorsetName}.xcassets`
    // create asset folder if it does not exists
    if (!fs.existsSync(assetPath)) {
      fs.mkdirSync(assetPath, {recursive: true})
    }
    // write top level contents.json file
    fs.writeFileSync(`${assetPath}/Contents.json`, JSON.stringify(contents, null, 2))
    // eslint-disable-next-line github/array-foreach
    dictionary.allTokens
      .filter(token => token.$type === 'color')
      .forEach(token => {
        const colorsetPath = `${assetPath}/${toCamelCase(token.path)}.colorset`
        // create colorset if it does not exists
        if (!fs.existsSync(colorsetPath)) {
          fs.mkdirSync(colorsetPath, {recursive: true})
        }
        // The colorset might already exist because Style Dictionary is run multiple
        // times with different configurations. If the colorset already exists we want
        // to modify it rather than writing over it.
        const colorset = fs.existsSync(`${colorsetPath}/Contents.json`)
          ? JSON.parse(fs.readFileSync(`${colorsetPath}/Contents.json`, 'utf8'))
          : {...contents, colors: []}

        const color = {
          idiom: 'universal',
          color: {
            'color-space': 'srgb',
            components: ratioRgb(token.value),
          },
          appearances: getAppearance(colormode, highContrast),
        }

        colorset.colors.push(color)

        fs.writeFileSync(`${colorsetPath}/Contents.json`, JSON.stringify(colorset, null, 2))
      })
  },
  undo(_dictionary: Dictionary, _platform: Platform) {
    // no undo
  },
}
