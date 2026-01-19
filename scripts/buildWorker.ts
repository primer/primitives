// Register tsx for proper TypeScript module resolution before importing TS modules
import {register} from 'tsx/esm/api'
register()

import {parentPort, workerData} from 'worker_threads'
import type {TokenBuildInput} from '../src/types/tokenBuildInput.js'
import type {ConfigGeneratorOptions} from '../src/types/styleDictionaryConfigGenerator.js'

interface WorkerData {
  themes: TokenBuildInput[]
  buildOptions: ConfigGeneratorOptions
  buildType: 'internalCss' | 'functional'
}

const {themes, buildOptions, buildType} = workerData as WorkerData

async function buildThemes(): Promise<{success: boolean; errors: string[]}> {
  // Dynamic imports after tsx is registered
  const {PrimerStyleDictionary} = await import('../src/primerStyleDictionary.js')
  const {css, docJson, styleLint} = await import('../src/platforms/index.js')
  const {getFallbackTheme} = await import('./utilities/getFallbackTheme.js')

  const errors: string[] = []

  for (const {filename, source, include, theme} of themes) {
    try {
      if (buildType === 'internalCss') {
        const extendedSD = await PrimerStyleDictionary.extend({
          source: [...source, ...include],
          include,
          log: {
            warnings: 'disabled',
            verbosity: 'silent',
            errors: {brokenReferences: 'throw'},
          },
          platforms: {
            css: css(`internalCss/${filename}.css`, buildOptions.prefix, buildOptions.buildPath, {
              themed: true,
              theme: [theme, getFallbackTheme(theme)],
            }),
          },
        })
        await extendedSD.buildAllPlatforms()
      } else if (buildType === 'functional') {
        const extendedSD = await PrimerStyleDictionary.extend({
          source,
          include,
          log: {
            warnings: 'disabled',
            verbosity: 'silent',
            errors: {brokenReferences: 'throw'},
          },
          platforms: {
            css: css(`css/functional/themes/${filename}.css`, buildOptions.prefix, buildOptions.buildPath, {
              themed: true,
              theme: [theme, getFallbackTheme(theme)],
            }),
            docJson: docJson(`docs/functional/themes/${filename}.json`, buildOptions.prefix, buildOptions.buildPath, {
              theme: [theme, getFallbackTheme(theme)],
            }),
            styleLint: styleLint(
              `styleLint/functional/themes/${filename}.json`,
              buildOptions.prefix,
              buildOptions.buildPath,
              {
                theme: [theme, getFallbackTheme(theme)],
              },
            ),
          },
        })
        await extendedSD.buildAllPlatforms()
      }
    } catch (e) {
      errors.push(`Error building ${filename}: ${e}`)
    }
  }

  return {success: errors.length === 0, errors}
}

buildThemes()
  .then(result => {
    parentPort?.postMessage(result)
  })
  .catch(err => {
    parentPort?.postMessage({success: false, errors: [String(err)]})
  })
