import {defineConfig} from '@playwright/test'
// eslint-disable-next-line import/no-nodejs-modules
import path from 'node:path'

export default defineConfig({
  testDir: 'e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['line'],
    ['html', {open: 'never', outputFolder: path.join(__dirname, '.playwright/report')}],
    [
      'json',
      {
        outputFile: path.join(__dirname, '.playwright', 'results.json'),
      },
    ],
  ],

  // https://playwright.dev/docs/api/class-testconfig#test-config-timeout
  timeout: 1000 * 15,

  // https://playwright.dev/docs/api/class-testconfig#test-config-output-dir
  outputDir: path.join(__dirname, '.playwright', 'results'),
  snapshotDir: path.join(__dirname, '.playwright', 'snapshots'),

  use: {
    baseURL: 'http://127.0.0.1:6006',
    screenshot: 'only-on-failure',
    viewport: {
      // Large breakpoint
      // @see https://primer.style/primitives/spacing#breakpoints
      width: 1012,
      height: 768,
    },
  },
})
