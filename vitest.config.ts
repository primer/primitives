import {defineConfig, configDefaults} from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    exclude: [...configDefaults.exclude, 'e2e/*', 'docs/*'],
    coverage: {
      exclude: [
        'docs/*',
        'e2e/*',
        '.eslintrc.cjs',
        'vitest.config.ts',
        '.prettierrc.js',
        'playwright.config.ts',
        'dist',
      ],
    },
  },
})
