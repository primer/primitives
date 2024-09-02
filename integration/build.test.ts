import {PrimerStyleDictionary} from '../src/PrimerStyleDictionary'
import fs from 'fs'

describe('PrimerStyleDictionary', () => {
  const basePath = `./integration`
  const extendedSD = PrimerStyleDictionary.extend({
    source: [`${basePath}/tokens/**/*.json5`],
    platforms: {
      css: {
        prefix: 'PREFIX',
        transformGroup: 'css',
        buildPath: `${basePath}/build/css/`,
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
      advancedCss: {
        prefix: 'PREFIX',
        transformGroup: 'css',
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
    },
  })

  extendedSD.cleanAllPlatforms()
  extendedSD.buildAllPlatforms()

  it('it should transform with css/variables format', () => {
    const output = fs.readFileSync(`${basePath}/build/css/variables.css`, 'utf8')
    const expectedOutput = `:root {
  --prefix-base-color-blue-500: #2C29FF; /* The primary color for interactive elements. */
  --prefix-fg-color-link: #2C29FF;
}
`
    expect(output).toBe(expectedOutput)
  })

  it('it should transform with css/advanced format', () => {
    const output = fs.readFileSync(`${basePath}/build/css/advanced.css`, 'utf8')
    const expectedOutput = `:root {
  --prefix-base-color-blue-500: #2c29ff; /* The primary color for interactive elements. */
  --prefix-fg-color-link: #2c29ff;
}
`
    expect(output).toBe(expectedOutput)
  })
})
