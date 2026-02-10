import {normalizeColorValue, isW3cColorValue} from './normalizeColorValue.js'

describe('Utility: normalizeColorValue', () => {
  it('returns hex string as-is', () => {
    expect(normalizeColorValue('#ff0000')).toBe('#ff0000')
    expect(normalizeColorValue('#123456')).toBe('#123456')
  })

  it('returns rgb/rgba string as-is', () => {
    expect(normalizeColorValue('rgb(255, 0, 0)')).toBe('rgb(255, 0, 0)')
    expect(normalizeColorValue('rgba(255, 0, 0, 0.5)')).toBe('rgba(255, 0, 0, 0.5)')
  })

  it('returns hex from W3C object with hex property', () => {
    const input = {
      colorSpace: 'srgb' as const,
      components: [1, 0, 0] as [number, number, number],
      hex: '#ff0000',
    }
    expect(normalizeColorValue(input)).toBe('#ff0000')
  })

  it('converts W3C object components to hex when no hex property', () => {
    const input = {
      colorSpace: 'srgb' as const,
      components: [1, 0.5, 0] as [number, number, number],
    }
    expect(normalizeColorValue(input)).toBe('#ff8000')
  })

  it('converts W3C object with alpha < 1 to hex8', () => {
    const input = {
      colorSpace: 'srgb' as const,
      components: [1, 0, 0] as [number, number, number],
      alpha: 0.5,
    }
    expect(normalizeColorValue(input)).toBe('#ff000080')
  })

  it('does not add alpha suffix when alpha is 1', () => {
    const input = {
      colorSpace: 'srgb' as const,
      components: [0, 1, 0] as [number, number, number],
      alpha: 1,
    }
    expect(normalizeColorValue(input)).toBe('#00ff00')
  })
})

describe('Utility: isW3cColorValue', () => {
  it('returns true for W3C color object', () => {
    expect(
      isW3cColorValue({
        colorSpace: 'srgb',
        components: [0, 0, 0],
      }),
    ).toBe(true)
  })

  it('returns false for hex string', () => {
    expect(isW3cColorValue('#ff0000')).toBe(false)
  })

  it('returns false for null', () => {
    expect(isW3cColorValue(null)).toBe(false)
  })

  it('returns false for object without colorSpace', () => {
    expect(isW3cColorValue({components: [0, 0, 0]})).toBe(false)
  })

  it('returns false for object without components', () => {
    expect(isW3cColorValue({colorSpace: 'srgb'})).toBe(false)
  })
})
