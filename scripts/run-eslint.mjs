import {ESLint} from 'eslint'
import fs from 'fs/promises'

// Programmatic ESLint runner that writes a concise JSON summary to scripts/eslint-output.json
// This avoids relying on terminal output capture.
async function run() {
  try {
    const eslint = new ESLint({
      overrideConfigFile: 'eslint.config.mjs',
      cwd: process.cwd(),
    })

    const results = await eslint.lintFiles(["**/*.{js,ts,tsx,md,mdx}"])

    const summary = {
      results: results.map(r => ({
        filePath: r.filePath,
        errorCount: r.errorCount,
        warningCount: r.warningCount,
        messages: r.messages.map(m => ({
          ruleId: m.ruleId,
          severity: m.severity,
          message: m.message,
          line: m.line,
          column: m.column
        }))
      })),
      totals: {
        errorCount: results.reduce((s, r) => s + r.errorCount, 0),
        warningCount: results.reduce((s, r) => s + r.warningCount, 0),
      },
    }

    await fs.writeFile('scripts/eslint-output.json', JSON.stringify(summary, null, 2), 'utf8')
    console.log('Wrote results to scripts/eslint-output.json')
    process.exit(summary.totals.errorCount > 0 ? 1 : 0)
  } catch (err) {
    await fs.writeFile('scripts/eslint-output.json', JSON.stringify({error: String(err)}, null, 2), 'utf8')
    console.error('ESLint run failed:', err)
    process.exit(2)
  }
}

run()
