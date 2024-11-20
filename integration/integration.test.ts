import {PrimerStyleDictionary} from '../src/PrimerStyleDictionary.js'
import fs from 'fs'

describe('PrimerStyleDictionary', async () => {
  const basePath = `./integration`
  const buildPath = `${basePath}/build/integration`

  beforeAll(async () => {
    const extendedSD = await PrimerStyleDictionary.extend({
      source: [`${basePath}/tokens/**/*.json5`],
      platforms: {
        advancedCss: {
          prefix: 'PREFIX',
          usesDtcg: true,
          transforms: [
            'name/pathToKebabCase',
            'color/hex',
            'color/hexMix',
            'dimension/rem',
            'duration/css',
            'shadow/css',
            'border/css',
            'typography/css',
            'fontFamily/css',
            'fontWeight/number',
          ],
          buildPath: `${buildPath}/css/`,
          files: [
            {
              options: {
                showFileHeader: false,
              },
              destination: 'advanced.css',
              format: 'css/advanced',
            },
          ],
        },
        commonJs: {
          prefix: 'PREFIX',
          usesDtcg: true,
          transforms: [
            'color/hex',
            'color/hexMix',
            'dimension/rem',
            'shadow/css',
            'border/css',
            'typography/css',
            'fontFamily/css',
            'fontWeight/number',
          ],
          buildPath: `${buildPath}/js/`,
          files: [
            {
              options: {
                showFileHeader: false,
              },
              destination: 'common.js',
              format: 'javascript/commonJs',
            },
          ],
        },
        javascriptEsm: {
          prefix: 'PREFIX',
          usesDtcg: true,
          buildPath: `${buildPath}/js/`,
          transforms: [
            'color/hex',
            'color/hexMix',
            'dimension/rem',
            'shadow/css',
            'border/css',
            'typography/css',
            'fontFamily/css',
            'fontWeight/number',
          ],
          files: [
            {
              options: {
                showFileHeader: false,
              },
              destination: 'esm.mjs',
              format: 'javascript/esm',
            },
          ],
        },
        jsonFigma: {
          prefix: 'PREFIX',
          usesDtcg: true,
          buildPath: `${buildPath}/json/`,
          transforms: [
            'color/rgbaFloat',
            'name/pathToFigma',
            'figma/attributes',
            'fontFamily/figma',
            'float/pixelUnitless',
            'dimension/pixelUnitless',
            'fontWeight/number',
          ],
          files: [
            {
              options: {
                showFileHeader: false,
              },
              destination: 'figma.json',
              format: 'json/figma',
            },
          ],
        },
        jsonNestedPrefixed: {
          prefix: 'PREFIX',
          usesDtcg: true,
          buildPath: `${buildPath}/json/`,
          transforms: [
            'color/hex',
            'color/hexMix',
            'dimension/rem',
            'shadow/css',
            'border/css',
            'typography/css',
            'fontFamily/css',
            'fontWeight/number',
          ],
          files: [
            {
              options: {
                showFileHeader: false,
              },
              destination: 'nested.json',
              format: 'json/nested-prefixed',
            },
          ],
        },
        tsDefinition: {
          prefix: 'PREFIX',
          buildPath: `${buildPath}/js/`,
          transforms: [
            'color/hex',
            'shadow/css',
            'border/css',
            'dimension/rem',
            'typography/css',
            'fontFamily/css',
            'fontWeight/number',
          ],
          files: [
            {
              options: {
                showFileHeader: false,
              },
              destination: 'definitions.d.ts',
              format: 'typescript/export-definition',
            },
          ],
        },
      },
    })

    await extendedSD.cleanAllPlatforms()
    await extendedSD.buildAllPlatforms()
  })

  it('runs css/advanced format', () => {
    const output = fs.readFileSync(`${buildPath}/css/advanced.css`, 'utf8')
    const expectedOutput = `:root {
  --PREFIX-base-color-aquaBlue-500: #2c29ff; /* The primary color for interactive elements. */
  --PREFIX-fgColor-link-rest-01: #2c29ff;
}
`
    expect(output).toBe(expectedOutput)
  })

  it('runs commonJs format', () => {
    const output = fs.readFileSync(`${buildPath}/js/common.js`, 'utf8')
    const expectedOutput = `module.exports = {
  PREFIX: {
    base: {
      color: {
        aquaBlue: {
          "500": "#2c29ff",
        },
      },
    },
    fgColor: {
      "link-rest-01": "#2c29ff",
    },
  },
};
`
    expect(output).toBe(expectedOutput)
  })

  it('runs esm format', () => {
    const output = fs.readFileSync(`${buildPath}/js/esm.mjs`, 'utf8')
    const expectedOutput = `export default {
  PREFIX: {
    base: {
      color: {
        aquaBlue: {
          "500": "#2c29ff",
        },
      },
    },
    fgColor: {
      "link-rest-01": "#2c29ff",
    },
  },
};
`
    expect(output).toBe(expectedOutput)
  })

  it('runs figma format', () => {
    const output = fs.readFileSync(`${buildPath}/json/figma.json`, 'utf8')
    const expectedOutput = `[
  {
    "name": "PREFIX/base/color/aquaBlue/500",
    "value": {
      "r": 0.17254901960784313,
      "g": 0.1607843137254902,
      "b": 1,
      "a": 1
    },
    "type": "COLOR",
    "description": "The primary color for interactive elements.",
    "refId": "PREFIX/base/color/aquaBlue/500",
    "mode": "default",
    "scopes": ["ALL_SCOPES"]
  },
  {
    "name": "PREFIX/fgColor/link-rest-01",
    "value": {
      "r": 0.17254901960784313,
      "g": 0.1607843137254902,
      "b": 1,
      "a": 1
    },
    "type": "COLOR",
    "refId": "PREFIX/fgColor/link-rest-01",
    "reference": "PREFIX/base/color/aquaBlue/500",
    "mode": "default",
    "scopes": ["ALL_SCOPES"]
  }
]
`
    expect(output).toBe(expectedOutput)
  })

  it('runs json-nested-prefixed format', () => {
    const output = fs.readFileSync(`${buildPath}/json/nested.json`, 'utf8')
    const expectedOutput = `{
  "PREFIX": {
    "base": {
      "color": {
        "aquaBlue": {
          "500": "#2c29ff"
        }
      }
    },
    "fgColor": {
      "link-rest-01": "#2c29ff"
    }
  }
}
`
    expect(output).toBe(expectedOutput)
  })

  it('runs ts definition format', () => {
    const output = fs.readFileSync(`${buildPath}/js/definitions.d.ts`, 'utf8')
    const expectedOutput = `/**
 * @description hex string (6 or 8-digit)
 */
type ColorHex = string;

export type tokens = {
  PREFIX: {
    base: {
      color: {
        aquaBlue: {
          "500": ColorHex;
        };
      };
    };
    fgColor: {
      "link-rest-01": ColorHex;
    };
  };
};
`
    expect(output).toBe(expectedOutput)
  })
})
