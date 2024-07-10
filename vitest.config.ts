import {defineConfig, configDefaults} from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    exclude: [...configDefaults.exclude, 'e2e/*', 'docs/**'],
  },
})
