import {PrimerStyleDictionary} from '../src/primerStyleDictionary.js'
import fs from 'fs'

describe('PrimerStyleDictionary', async () => {
  const basePath = `./integration`
  const buildPath = `${basePath}/build/baseline`

  beforeAll(async () => {
    const extendedSD = await PrimerStyleDictionary.extend({
      source: [`${basePath}/tokens/**/*.json5`],
      platforms: {
        css: {
          prefix: 'PREFIX',
          transformGroup: 'css',
          buildPath: `${buildPath}/css/`,
          files: [
            {
              options: {
                showFileHeader: false,
              },
              destination: 'variables.css',
              format: 'css/variables',
            },
          ],
        },
        json: {
          prefix: 'PREFIX',
          buildPath: `${buildPath}/json/`,
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
          buildPath: `${buildPath}/json/`,
          transforms: ['name/pathToPascalCase'],
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

    await extendedSD.cleanAllPlatforms()
    await extendedSD.buildAllPlatforms()
  })

  it('runs baseline css/variables format', () => {
    const output = fs.readFileSync(`${buildPath}/css/variables.css`, 'utf8')
    const expectedOutput = `:root {
  --prefix-base-color-aqua-blue-500: #2c29ff; /* The primary color for interactive elements. */
  --prefix-fg-color-link-rest-01: #2c29ff;
}
`
    expect(output).toBe(expectedOutput)
  })

  it('runs baseline json format', () => {
    const output = fs.readFileSync(`${buildPath}/json/variables.json`, 'utf8')
    const expectedOutput = `{
  "base": {
    "color": {
      "aquaBlue": {
        "500": {
          "$value": "#2C29FF",
          "$type": "color",
          "$description": "The primary color for interactive elements.",
          "filePath": "integration/tokens/base.json5",
          "isSource": true,
          "original": {
            "$value": "#2C29FF",
            "$type": "color",
            "$description": "The primary color for interactive elements."
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
      "$value": "#2C29FF",
      "$type": "color",
      "filePath": "integration/tokens/functional.json5",
      "isSource": true,
      "original": {
        "$value": "{base.color.aquaBlue.500}",
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
    const output = fs.readFileSync(`${buildPath}/json/flat.json`, 'utf8')
    const expectedOutput = `{
  "PREFIXBaseColorAquaBlue500": "#2C29FF",
  "PREFIXFgColorLinkRest01": "#2C29FF"
}
`
    expect(output).toBe(expectedOutput)
  })
})
