import {z} from 'zod'
import {colorHexValue} from './colorHexValue.js'
import {referenceValue} from './referenceValue.js'
import {alphaValue} from './alphaValue.js'
import {baseToken} from './baseToken.js'
import {collection, mode} from './collections.js'
import {scopes} from './scopes.js'
import {tokenType} from './tokenType.js'

const baseColorToken = baseToken.extend({
  $value: z.union([colorHexValue, referenceValue]),
  alpha: alphaValue.optional().nullable(),
})

const override = z.union([colorHexValue, referenceValue, baseColorToken.partial()]).optional()

export const colorToken = baseColorToken
  .extend({
    $type: tokenType('color'),
    $extensions: z
      .object({
        'org.primer.figma': z
          .object({
            collection: collection([
              'base/color/light',
              'base/color/light-high-contrast',
              'base/color/dark',
              'base/color/dark-dimmed',
              'base/color/dark-high-contrast',
              'mode',
              'pattern/mode',
            ]).optional(),
            modeOverride: mode([
              'light',
              'dark',
              'dark dimmed',
              'light high contrast',
              'dark high contrast',
              'light protanopia deuteranopia',
              'dark protanopia deuteranopia',
              'light tritanopia',
              'dark tritanopia',
            ]).optional(),
            scopes: scopes(['all', 'bgColor', 'fgColor', 'borderColor', 'effectColor']).optional(),
            group: z.string().optional(),
          })
          .optional(),
        'org.primer.overrides': z
          .object(
            {
              light: override,
              'light-tritanopia': override,
              'light-protanopia-deuteranopia': override,
              'light-high-contrast': override,
              dark: override,
              'dark-tritanopia': override,
              'dark-protanopia-deuteranopia': override,
              'dark-high-contrast': override,
              'dark-dimmed': override,
            },
            {
              errorMap: e => {
                if (e.code === 'unrecognized_keys') {
                  return {
                    message: `Unrecognized key: "${e.keys.join(', ')}", must be one of: light, light-tritanopia, light-protanopia-deuteranopia, light-high-contrast, dark, dark-tritanopia, dark-protanopia-deuteranopia, dark-high-contrast, dark-dimmed`,
                  }
                }
                return {message: `Error: ${e.code}`}
              },
            },
          )
          .strict()
          .optional(),
      })
      .strict()
      .optional(),
  })
  .strict()
