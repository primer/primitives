import {readFileSync, writeFileSync} from 'fs'
import {resolve} from 'path'
import {mkdirSync} from 'fs'
import {getContrast, parseToRgba, rgba} from 'color2k'
import {normal} from 'color-blend'

const lightThemeFile = resolve('src/tokens/base/color/light/light.json5')
const buildDir = resolve('build')
const docsDir = resolve('contributor-docs/design')

interface TokenNode {
  [key: string]: unknown
  $value?: string | {hex?: string; [key: string]: unknown}
}

/**
 * Safely parse a value that might be a reference like {base.color.white}
 */
function resolveColorReference(value: unknown, tokens: TokenNode): string {
  if (typeof value === 'string') {
    if (value.startsWith('{') && value.endsWith('}')) {
      const path = value.slice(1, -1).split('.')
      let current: unknown = tokens
      for (const key of path) {
        if (typeof current === 'object' && current !== null && key in current) {
          current = (current as TokenNode)[key]
        }
      }
      if (current) {
        return resolveColorReference(current, tokens)
      }
    }
    return value
  }
  if (typeof value === 'object' && value !== null) {
    const obj = value as TokenNode
    if ('hex' in obj) return String(obj.hex)
    if ('$value' in obj) return resolveColorReference(obj.$value, tokens)
  }
  return ''
}

/**
 * Get opaque color value
 */
function getOpaqueColor(color: string, background: string): string {
  const [colorR, colorG, colorB, colorAlpha] = parseToRgba(color)
  if (colorAlpha === 1) {
    return color
  }
  const [bgR, bgG, bgB, bgAlpha] = parseToRgba(background)
  const mixed = normal({r: bgR, g: bgG, b: bgB, a: bgAlpha}, {r: colorR, g: colorG, b: colorB, a: colorAlpha})
  return rgba(mixed.r, mixed.g, mixed.b, mixed.a)
}

/**
 * Get hex value for a color
 */
function getColorHex(color: TokenNode | unknown, tokens: TokenNode): string | null {
  if (!color) return null

  if (typeof color === 'object') {
    const obj = color as TokenNode
    if (obj.$value) {
      const resolved = resolveColorReference(obj.$value, tokens)
      if (resolved && !resolved.startsWith('{')) {
        return resolved
      }
    }
    if ('hex' in obj) return String(obj.hex)
  }

  if (typeof color === 'string' && (color.startsWith('#') || color.startsWith('hsl'))) {
    return color
  }

  return null
}

/**
 * Generate contrast matrix for a color scale
 */
function generateContrastMatrix(
  colorName: string,
  colorScale: Record<string, unknown>,
  refSurfaces: Record<string, string>,
  tokens: TokenNode,
): Record<string, Record<string, number>> {
  const matrix: Record<string, Record<string, number>> = {}

  for (const [step, color] of Object.entries(colorScale)) {
    const hex = getColorHex(color, tokens)
    if (!hex) continue

    matrix[step] = {}
    for (const [surfaceName, surfaceHex] of Object.entries(refSurfaces)) {
      const testColor = getOpaqueColor(hex, surfaceHex)
      const ratio = getContrast(testColor, surfaceHex)
      matrix[step][surfaceName] = parseFloat(ratio.toFixed(2))
    }
  }

  return matrix
}

/**
 * Format matrix as markdown
 */
function formatMatrixAsMarkdown(matrix: Record<string, Record<string, number>>): string {
  const header = '| Step | bg-default | bg-muted | fg-default | fg-muted | Minimum    |\n'
  const divider = '| ---- | ---------- | -------- | ---------- | -------- | ---------- |\n'

  let rows = ''
  for (const step of Object.keys(matrix).sort((a, b) => parseInt(a) - parseInt(b))) {
    const data = matrix[step]
    const values = Object.values(data)
    const minimum = Math.min(...values)
    rows += `| ${step}    | ${(data.default as number).toFixed(2)}:1     | ${(data.muted as number).toFixed(2)}:1   | ${(data.fgDefault as number).toFixed(2)}:1    | ${(data.fgMuted as number).toFixed(2)}:1   | **${minimum.toFixed(2)}:1** |\n`
  }

  return header + divider + rows
}

/**
 * Extract minimum requirements
 */
function extractRequirements(matrix: Record<string, Record<string, number>>): Record<string, number> {
  const requirements: Record<string, number> = {}

  for (const [step, surfaceContrasts] of Object.entries(matrix)) {
    const values = Object.values(surfaceContrasts)
    requirements[step] = parseFloat(Math.min(...values).toFixed(2))
  }

  return requirements
}

async function main() {
  mkdirSync(buildDir, {recursive: true})
  mkdirSync(docsDir, {recursive: true})

  const lightThemeContent = readFileSync(lightThemeFile, 'utf-8')
  const tokens = eval(`(${lightThemeContent})`) as TokenNode

  // Reference surfaces (light mode)
  const refSurfaces: Record<string, string> = {
    default: '#ffffff',
    muted: '#f6f8fa',
    fgDefault: '#25292e',
    fgMuted: '#818b98',
  }

  // Process all base color scales
  const allMatrices: Record<string, Record<string, Record<string, number>>> = {}
  const allRequirements: Record<string, Record<string, number>> = {}

  if (tokens.base && typeof tokens.base === 'object' && 'color' in tokens.base) {
    const baseColor = (tokens.base as TokenNode).color as Record<string, unknown>
    for (const [colorName, colorScale] of Object.entries(baseColor)) {
      if (typeof colorScale === 'object' && !Array.isArray(colorScale) && colorScale !== null) {
        const matrix = generateContrastMatrix(colorName, colorScale as Record<string, unknown>, refSurfaces, tokens)
        if (Object.keys(matrix).length > 0) {
          allMatrices[colorName] = matrix
          allRequirements[colorName] = extractRequirements(matrix)

          // Write JSON outputs
          writeFileSync(
            resolve(buildDir, `contrast-matrix-${colorName}.json`),
            JSON.stringify({color: colorName, matrix}, null, 2),
          )
          writeFileSync(
            resolve(buildDir, `contrast-requirements-${colorName}.json`),
            JSON.stringify({color: colorName, requirements: allRequirements[colorName]}, null, 2),
          )
        }
      }
    }
  }

  // Create documentation
  let docContent = '# Brand Color Contrast Requirements\n\n'
  docContent += 'Generated contrast analysis for light mode base colors against key reference surfaces.\n\n'
  docContent += '## Neutral Scale Analysis\n\n'
  docContent += 'Reference surfaces used in all tests (light mode):\n\n'
  docContent += '- **bgColor-default**: #ffffff (page background)\n'
  docContent += '- **bgColor-muted**: #F6F8FA (secondary/muted background)\n'
  docContent += '- **fgColor-default**: #25292E (primary text)\n'
  docContent += '- **fgColor-muted**: #818B98 (secondary text)\n\n'
  docContent += '### Full Contrast Matrix\n\n'
  docContent += '## Neutral Scale - Full Contrast Matrix\n\n'

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (allMatrices.neutral && Object.keys(allMatrices.neutral).length > 0) {
    docContent += formatMatrixAsMarkdown(allMatrices.neutral)
    docContent += '\n\n### Minimum Requirements by Step\n\n'
    docContent += '| Step | Minimum Contrast |\n'
    docContent += '| ---- | ---------------- |\n'
    for (const step of Object.keys(allRequirements.neutral).sort((a, b) => parseInt(a) - parseInt(b))) {
      docContent += `| ${step}    | **${allRequirements.neutral[step].toFixed(2)}:1**       |\n`
    }
  }

  docContent += '\n\n## Interpretation Guide\n\n'
  docContent +=
    '- **Minimum Contrast**: The lowest contrast ratio achieved for that step across all 4 reference surfaces\n'
  docContent +=
    '- **Brand team should ensure**: Each base color step achieves at least its minimum contrast value against all 4 surfaces\n'
  docContent += '- **Use cases**:\n'
  docContent += '  - Steps 0–7 (light zone): Good for backgrounds; test text readability on these\n'
  docContent += '  - Steps 8–13 (text zone): Safe for readable text; minimal contrast to backgrounds\n\n'
  docContent += '## How to Use This Data\n\n'
  docContent +=
    '1. When adjusting brand colors, test each new step against bgColor-default, bgColor-muted, fgColor-default, and fgColor-muted\n'
  docContent += '2. Ensure the actual contrast ratio meets or exceeds the minimum shown above\n'
  docContent += '3. If any step falls below minimum, adjust the color value until it meets the standard\n\n'
  docContent += '---\n\n'
  docContent += '_Generated from `scripts/generateContrastRequirements.ts`_\n'

  writeFileSync(resolve(docsDir, 'brand-color-contrast-requirements.md'), docContent)

  console.log('✓ Contrast matrices generated')
  console.log(`✓ ${Object.keys(allMatrices).length} color scales analyzed`)
  console.log('✓ contributor-docs/design/brand-color-contrast-requirements.md')
  console.log('\n✅ Complete! Check build/ and contributor-docs/design/ for outputs.')
}

main().catch((err: Error) => {
  console.error('Error:', err.message)
  process.exit(1)
})
