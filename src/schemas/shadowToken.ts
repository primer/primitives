import {z} from 'zod'
import {baseToken} from './baseToken.js'
import {referenceValue} from './referenceValue.js'
import {colorHexValue} from './colorHexValue.js'
import {alphaValue} from './alphaValue.js'
import {dimensionValue} from './dimensionValue.js'
import {tokenType} from './tokenType.js'
import {collection, mode} from './collections.js'

export const shadowValue = z
  .object({
    color: z.union([colorHexValue, referenceValue]),
    alpha: z.union([alphaValue, referenceValue]),
    offsetX: z.union([dimensionValue, referenceValue]),
    offsetY: z.union([dimensionValue, referenceValue]),
    blur: z.union([dimensionValue, referenceValue]),
    spread: z.union([dimensionValue, referenceValue]),
    inset: z.boolean().optional(),
  })
  .strict()

const baseShadowToken = baseToken.extend({
  $value: z.union([shadowValue, referenceValue, z.array(shadowValue)]),
})

const override = z.union([referenceValue, baseShadowToken]).optional()

export const shadowToken = baseToken
  .extend({
    $value: z.union([shadowValue, z.array(shadowValue), referenceValue]),
    $type: tokenType('shadow'),
    $extensions: z
      .object({
        'org.primer.figma': z
          .object({
            collection: collection(['mode']).optional(),
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
            group: z.string().optional(),
          })
          .strict(),
        'org.primer.overrides': z
          .object({
            light: override,
            'light-tritanopia': override,
            'light-protanopia-deuteranopia': override,
            'light-high-contrast': override,
            dark: override,
            'dark-tritanopia': override,
            'dark-protanopia-deuteranopia': override,
            'dark-high-contrast': override,
            'dark-dimmed': override,
          })
          .strict()
          .optional(),
      })
      .optional(),
  })
  .strict()
