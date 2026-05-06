import {readFile} from 'fs/promises'
import {getContrast, parseToRgba, rgba} from 'color2k'
import {normal} from 'color-blend'

type Requirements = Record<string, number>

/**
 * Get opaque color value (handles transparency by blending with background)
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

interface ValidationResult {
  pass: boolean
  violations: {step: string; required: number; actual: number}[]
}

/**
 * Validate a color scale against requirements
 *
 * @param colorSteps - Object with hex values keyed by step number
 * @param requirements - Object with minimum contrast ratios keyed by step
 * @param bgDefault - Background default color (e.g., white)
 * @param bgMuted - Background muted color
 * @param fgDefault - Foreground default color (e.g., dark text)
 * @param fgMuted - Foreground muted color
 * @returns Validation result with pass/fail and any violations
 */
function validateColorScale(
  colorSteps: Record<string, string>,
  requirements: Requirements,
  bgDefault: string,
  bgMuted: string,
  fgDefault: string,
  fgMuted: string,
): ValidationResult {
  const violations: {step: string; required: number; actual: number}[] = []

  const refColors = {
    default: bgDefault,
    muted: bgMuted,
    fgDefault: fgDefault,
    fgMuted: fgMuted,
  }

  for (const [step, hex] of Object.entries(colorSteps)) {
    const required = requirements[step]
    if (!required) {
      continue
    }

    // Find minimum contrast across all surfaces
    const contrasts = []
    for (const refHex of Object.values(refColors)) {
      const testColor = getOpaqueColor(hex, refHex)
      const ratio = getContrast(testColor, refHex)
      contrasts.push(parseFloat(ratio.toFixed(2)))
    }

    const actual = Math.min(...contrasts)
    if (actual < required) {
      violations.push({step, required, actual})
    }
  }

  return {
    pass: violations.length === 0,
    violations,
  }
}

/**
 * Main CLI
 */
async function main() {
  // Example: validate current neutral scale from light.json5
  const testColorScale: Record<string, string> = {
    '0': '#ffffff', // white (base.color.white reference)
    '1': '#F6F8FA',
    '2': '#EFF2F5',
    '3': '#E6EAEF',
    '4': '#E0E6EB',
    '5': '#DAE0E7',
    '6': '#D1D9E0',
    '7': '#C8D1DA',
    '8': '#818B98',
    '9': '#59636E',
    '10': '#454C54',
    '11': '#393F46',
    '12': '#25292E',
    '13': '#1f2328', // additional step for completeness
  }

  // Load requirements
  const reqFile = await readFile('build/contrast-requirements-neutral.json', 'utf-8')
  const {requirements} = JSON.parse(reqFile) as {requirements: Requirements}

  // Reference surfaces (light mode)
  const bgDefault = '#ffffff'
  const bgMuted = '#f6f8fa'
  const fgDefault = '#25292e'
  const fgMuted = '#818b98'

  // Validate
  const result = validateColorScale(testColorScale, requirements, bgDefault, bgMuted, fgDefault, fgMuted)

  if (result.pass) {
    console.log('✅ All steps meet minimum contrast requirements!')
  } else {
    console.log(`❌ ${result.violations.length} step(s) failed validation:\n`)
    for (const {step, required, actual} of result.violations) {
      console.log(`  Step ${step}: required ${required.toFixed(2)}:1, got ${actual.toFixed(2)}:1`)
    }
    process.exit(1)
  }
}

main().catch((err: Error) => {
  console.error('Error:', err.message)
  process.exit(1)
})
