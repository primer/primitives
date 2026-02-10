import {colorW3cValue} from './colorW3cValue.js'

describe('Schema: colorW3cValue', () => {
  it('validates valid W3C color object with all properties', () => {
    const input = {
      colorSpace: 'srgb',
      components: [0.5, 0.25, 0.75],
      alpha: 1,
      hex: '#8040bf',
    }
    expect(colorW3cValue.safeParse(input).success).toBe(true)
  })

  it('validates W3C color object without optional alpha', () => {
    const input = {
      colorSpace: 'srgb',
      components: [1, 0, 0],
    }
    expect(colorW3cValue.safeParse(input).success).toBe(true)
  })

  it('validates W3C color object without optional hex', () => {
    const input = {
      colorSpace: 'display-p3',
      components: [0.5, 0.5, 0.5],
      alpha: 0.5,
    }
    expect(colorW3cValue.safeParse(input).success).toBe(true)
  })

  it('validates all W3C color spaces', () => {
    const colorSpaces = [
      'srgb',
      'srgb-linear',
      'hsl',
      'hwb',
      'lab',
      'lch',
      'oklab',
      'oklch',
      'display-p3',
      'a98-rgb',
      'prophoto-rgb',
      'rec2020',
      'xyz',
      'xyz-d50',
      'xyz-d65',
    ]
    for (const colorSpace of colorSpaces) {
      const input = {colorSpace, components: [0, 0, 0]}
      expect(colorW3cValue.safeParse(input).success).toBe(true)
    }
  })

  it('rejects invalid color space', () => {
    const input = {
      colorSpace: 'invalid-space',
      components: [0, 0, 0],
    }
    expect(colorW3cValue.safeParse(input).success).toBe(false)
  })

  it('rejects components with wrong length', () => {
    const input = {
      colorSpace: 'srgb',
      components: [0, 0],
    }
    expect(colorW3cValue.safeParse(input).success).toBe(false)
  })

  it('rejects alpha outside 0-1 range', () => {
    const input = {
      colorSpace: 'srgb',
      components: [0, 0, 0],
      alpha: 1.5,
    }
    expect(colorW3cValue.safeParse(input).success).toBe(false)
  })

  it('rejects invalid hex format', () => {
    const input = {
      colorSpace: 'srgb',
      components: [0, 0, 0],
      hex: 'ff0000', // missing #
    }
    expect(colorW3cValue.safeParse(input).success).toBe(false)
  })

  it('rejects 8-digit hex (spec requires 6-digit only)', () => {
    const input = {
      colorSpace: 'srgb',
      components: [1, 0, 0],
      hex: '#ff000080',
    }
    expect(colorW3cValue.safeParse(input).success).toBe(false)
  })

  it('accepts the none keyword in components', () => {
    const input = {
      colorSpace: 'hsl',
      components: ['none', 0, 50],
    }
    expect(colorW3cValue.safeParse(input).success).toBe(true)
  })

  it('accepts multiple none keywords in components', () => {
    const input = {
      colorSpace: 'oklch',
      components: [0.5, 'none', 'none'],
    }
    expect(colorW3cValue.safeParse(input).success).toBe(true)
  })

  it('rejects invalid strings in components (not none)', () => {
    const input = {
      colorSpace: 'srgb',
      components: [0, 'red', 0],
    }
    expect(colorW3cValue.safeParse(input).success).toBe(false)
  })
})
