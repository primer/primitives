import {existsSync} from 'fs'
import {themes} from './themes.config.js'

const missingThemeFiles = themes
  .map(({filename}) => `dist/docs/functional/themes/${filename}.json`)
  .filter(filePath => !existsSync(filePath))

if (missingThemeFiles.length > 0) {
  console.error(
    [
      'Contrast check input files are missing after `npm run build:tokens`.',
      'This usually means the token build logged errors and did not generate every theme JSON file.',
      '',
      'Missing files:',
      ...missingThemeFiles.map(filePath => `- ${filePath}`),
    ].join('\n'),
  )
  process.exit(1)
}
