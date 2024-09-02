import {PrimerStyleDictionary} from '../src/PrimerStyleDictionary'
import fs from 'fs'

describe('PrimerStyleDictionary', () => {
  const basePath = `./integration`
  const extendedSD = PrimerStyleDictionary.extend({
    source: [`${basePath}/tokens/**/*.json5`],
    platforms: {
      advancedCss: {
        prefix: 'PREFIX',
        transforms: [
          'name/pathToKebabCase',
          'color/hex',
          'color/hexAlpha',
          'color/hexMix',
          'dimension/rem',
          'duration/css',
          'shadow/css',
          'border/css',
          'typography/css',
          'fontFamily/css',
          'fontWeight/number',
        ],
        buildPath: `${basePath}/build/css/`,
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
      json: {
        prefix: 'PREFIX',
        buildPath: `${basePath}/build/json/`,
        files: [
          {
            options: {
              showFileHeader: false,
            },
            destination: 'variables.json',
            format: 'json',
          },
        ],
      },
      jsonFlat: {
        prefix: 'PREFIX',
        buildPath: `${basePath}/build/json/`,
        transforms: ['name/cti/pascal'],
        files: [
          {
            options: {
              showFileHeader: false,
            },
            destination: 'flat.json',
            format: 'json/flat',
          },
        ],
      },
    },
  })

  extendedSD.cleanAllPlatforms()
  extendedSD.buildAllPlatforms()

  it('runs css/advanced format', () => {
    const output = fs.readFileSync(`${basePath}/build/css/advanced.css`, 'utf8')
    const expectedOutput = `:root {
  --prefix-base-color-aqua-blue-500: #2c29ff; /* The primary color for interactive elements. */
  --prefix-fg-color-link-rest-01: #2c29ff;
}
`
    expect(output).toBe(expectedOutput)
  })

  it('runs baseline json format', () => {
    const output = fs.readFileSync(`${basePath}/build/json/variables.json`, 'utf8')
    const expectedOutput = `{
  "base": {
    "color": {
      "aquaBlue": {
        "500": {
          "value": "#2C29FF",
          "$type": "color",
          "comment": "The primary color for interactive elements.",
          "filePath": "integration/tokens/base.json5",
          "isSource": true,
          "original": {
            "value": "#2C29FF",
            "$type": "color",
            "comment": "The primary color for interactive elements."
          },
          "name": "500",
          "attributes": {},
          "path": [
            "base",
            "color",
            "aquaBlue",
            "500"
          ]
        }
      }
    }
  },
  "fgColor": {
    "link-rest-01": {
      "value": "#2C29FF",
      "$type": "color",
      "filePath": "integration/tokens/functional.json5",
      "isSource": true,
      "original": {
        "value": "{base.color.aquaBlue.500}",
        "$type": "color"
      },
      "name": "link-rest-01",
      "attributes": {},
      "path": [
        "fgColor",
        "link-rest-01"
      ]
    }
  }
}
`
    expect(output).toBe(expectedOutput)
  })

  it('runs baseline flat json format', () => {
    const output = fs.readFileSync(`${basePath}/build/json/flat.json`, 'utf8')
    const expectedOutput = `{
  "PrefixBaseColorAquaBlue500": "#2C29FF",
  "PrefixFgColorLinkRest01": "#2C29FF"
}
`
    expect(output).toBe(expectedOutput)
  })
})
