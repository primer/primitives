import {execSync} from 'child_process'
import fs from 'fs'
import path from 'path'
import json5 from 'json5'
import {walkDir} from './utilities/walkDir.js'
import {extractTokenNames} from './utilities/extractTokenNames.js'

const TOKEN_DIR = 'src/tokens'
const REMOVED_DIR = 'src/tokens/removed'
const IGNORE_DIRS = ['removed', 'fallback']

// ---------------------------------------------------------------------------
// CLI flag helper (supports both --flag=value and --flag value)
// ---------------------------------------------------------------------------

function getArg(name: string): string | null {
  const flag = name.startsWith('--') ? name : `--${name}`
  const idx = process.argv.findIndex(a => a === flag || a.startsWith(`${flag}=`))
  if (idx === -1) return null
  if (process.argv[idx].includes('=')) return process.argv[idx].split('=')[1]
  // next arg is the value (if it doesn't look like another flag)
  const next = process.argv[idx + 1]
  if (next && !next.startsWith('--')) return next
  return null
}

// ---------------------------------------------------------------------------
// Git helpers
// ---------------------------------------------------------------------------

function getBaseCommit(baseRef: string): string | null {
  try {
    return execSync(`git merge-base HEAD ${baseRef}`, {encoding: 'utf-8'}).trim()
  } catch {
    return null
  }
}

/** List token files tracked in a given commit (excludes removed/ and fallback/) */
function gitListTokenFiles(commit: string): string[] {
  try {
    const output = execSync(`git ls-tree -r --name-only ${commit} -- ${TOKEN_DIR}/`, {encoding: 'utf-8'})
    return output
      .trim()
      .split('\n')
      .filter(f => f.endsWith('.json5') && !IGNORE_DIRS.some(dir => f.includes(`/${dir}/`)))
  } catch {
    return []
  }
}

function gitShowFile(commit: string, filePath: string): string | null {
  try {
    return execSync(`git show ${commit}:${filePath}`, {encoding: 'utf-8'})
  } catch {
    return null
  }
}

// ---------------------------------------------------------------------------
// Token collection
// ---------------------------------------------------------------------------

function collectTokensFromWorkingTree(): Set<string> {
  const tokenFiles = walkDir(TOKEN_DIR, IGNORE_DIRS).filter(f => f.endsWith('.json5'))
  const tokens = new Set<string>()

  for (const file of tokenFiles) {
    try {
      const content = fs.readFileSync(file, 'utf-8')
      const parsed = json5.parse(content)
      for (const name of extractTokenNames(parsed)) {
        tokens.add(name)
      }
    } catch (e) {
      console.warn(`⚠️  Could not parse ${file}: ${e}`)
    }
  }

  return tokens
}

function collectTokensFromCommit(commit: string): Set<string> {
  const files = gitListTokenFiles(commit)
  const tokens = new Set<string>()

  for (const file of files) {
    const content = gitShowFile(commit, file)
    if (!content) continue
    try {
      const parsed = json5.parse(content)
      for (const name of extractTokenNames(parsed)) {
        tokens.add(name)
      }
    } catch (e) {
      console.warn(`⚠️  Could not parse ${file} from ${commit}: ${e}`)
    }
  }

  return tokens
}

function collectDocumentedRemovals(): Set<string> {
  const removals = new Set<string>()

  if (!fs.existsSync(REMOVED_DIR)) return removals

  const files = fs.readdirSync(REMOVED_DIR).filter(f => f.endsWith('.json') || f.endsWith('.json5'))

  for (const file of files) {
    try {
      const content = fs.readFileSync(path.join(REMOVED_DIR, file), 'utf-8')
      const parsed = json5.parse(content)
      for (const key of Object.keys(parsed)) {
        removals.add(key)
      }
    } catch (e) {
      console.warn(`⚠️  Could not parse removed file ${file}: ${e}`)
    }
  }

  return removals
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const baseRef = getArg('--base') ?? process.env.BASE_REF ?? 'main'
const isCI = process.env.CI === 'true'

const baseCommit = getBaseCommit(baseRef)

if (!baseCommit) {
  if (isCI) {
    console.error(`❌ Could not find merge-base with "${baseRef}". Ensure the base branch is fetched.`)
    process.exit(1)
  }
  console.log(`⏭️  Skipping removed token check: could not resolve base ref "${baseRef}"`)
  process.exit(0)
}

const headCommit = execSync('git rev-parse HEAD', {encoding: 'utf-8'}).trim()
if (headCommit === baseCommit) {
  console.log('⏭️  Skipping removed token check: HEAD is at base commit')
  process.exit(0)
}

const baseTokens = collectTokensFromCommit(baseCommit)
const currentTokens = collectTokensFromWorkingTree()

const removed = [...baseTokens].filter(t => !currentTokens.has(t))

if (removed.length === 0) {
  console.log('✅ No tokens were removed')
  process.exit(0)
}

const documented = collectDocumentedRemovals()
const undocumented = removed.filter(t => !documented.has(t)).sort()

if (undocumented.length === 0) {
  console.log(`✅ ${removed.length} removed token(s) are properly documented in ${REMOVED_DIR}/`)
  process.exit(0)
}

console.error(`\n❌ ${undocumented.length} token(s) removed but not documented in ${REMOVED_DIR}/\n`)
console.error('Add them to src/tokens/removed/removed.json:')
console.error('  - null → fully removed')
console.error('  - "new.token.name" → renamed/replaced\n')
console.error('Missing entries:')
for (const token of undocumented) {
  console.error(`  "${token}": null`)
}
console.error('')
process.exit(1)
