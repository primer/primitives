import {z} from 'zod'
import {tokenName} from './tokenName.js'
import {stringToken} from './stringToken.js'
import {viewportRangeToken} from './viewportRangeToken.js'
import {numberToken} from './numberToken.js'
import {fontWeightToken} from './fontWeightToken.js'
import {typographyToken} from './typographyToken.js'
import {borderToken} from './borderToken.js'
import {dimensionToken} from './dimensionToken.js'
import {colorToken} from './colorToken.js'
import {fontFamilyToken} from './fontFamilyToken.js'
import {shadowToken} from './shadowToken.js'
import {durationToken} from './durationToken.js'
import {cubicBezierToken} from './cubicBezierToken.js'
import {gradientToken} from './gradientToken.js'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: TODO: fix this
export const designToken = z.record(
  tokenName,
  z.lazy((): z.ZodTypeAny => {
    return z.union([
      z.discriminatedUnion('$type', [
        colorToken,
        cubicBezierToken,
        dimensionToken,
        shadowToken,
        borderToken,
        fontFamilyToken,
        fontWeightToken,
        gradientToken,
        typographyToken,
        viewportRangeToken,
        numberToken,
        durationToken,
        stringToken,
      ]),
      designToken,
    ])
  }),
)
