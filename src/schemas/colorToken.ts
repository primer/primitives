import {z} from 'zod'
import {colorHexValue} from './colorHexValue.js'
import {referenceValue} from './referenceValue.js'
import {alphaValue} from './alphaValue.js'
import {baseToken} from './baseToken.js'
import {collection, mode} from './collections.js'
import {scopes} from './scopes.js'
import {tokenType} from './tokenType.js'

export const colorToken = baseToken
  .extend({
    $value: z.union([colorHexValue, referenceValue]),
    $type: tokenType('color'),
    alpha: alphaValue.optional().nullable(),
    mix: z
      .object({
        color: z.string(),
        weight: z.number().min(0).max(1),
      })
      .nullable()
      .optional(),
    $extensions: z
      .object({
        alpha: z.number().min(0).max(1).optional().nullable(),
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
              'light colorblind',
              'dark colorblind',
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
              light: z.union([colorHexValue, referenceValue]).optional(),
              'light-tritanopia': z.union([colorHexValue, referenceValue]).optional(),
              'light-deutranopia-protanopia': z.union([colorHexValue, referenceValue]).optional(),
              'light-high-contrast': z.union([colorHexValue, referenceValue]).optional(),
              dark: z.union([colorHexValue, referenceValue]).optional(),
              'dark-tritanopia': z.union([colorHexValue, referenceValue]).optional(),
              'dark-deutranopia-protanopia': z.union([colorHexValue, referenceValue]).optional(),
              'dark-high-contrast': z.union([colorHexValue, referenceValue]).optional(),
              'dark-dimmed': z.union([colorHexValue, referenceValue]).optional(),
            },
            {
              errorMap: e => {
                if (e.code === 'unrecognized_keys') {
                  return {
                    message: `Unrecognized key: "${e.keys.join(', ')}", must be one of: light, light-tritanopia, light-deutranopia-protanopia, light-high-contrast, dark, dark-tritanopia, dark-deutranopia-protanopia, dark-high-contrast, dark-dimmed`,
                  }
                }
                return {message: `Error: ${e.code}`}
              },
            },
          )
          .strict()
          .optional(),
      })
      .optional(),
  })
  .strict()
