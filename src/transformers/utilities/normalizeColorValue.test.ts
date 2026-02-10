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

  it('converts display-p3 color to sRGB hex', () => {
    const input = {
      colorSpace: 'display-p3' as const,
      components: [1, 0, 0] as [number, number, number],
    }
    // display-p3 red is slightly different in sRGB
    expect(normalizeColorValue(input)).toBe('#ff0b0c')
  })

  it('converts oklab color to sRGB hex', () => {
    const input = {
      colorSpace: 'oklab' as const,
      components: [0.5, 0.1, -0.1] as [number, number, number],
    }
    expect(normalizeColorValue(input)).toBe('#81459a')
  })

  it('converts non-sRGB W3C object even when hex is provided', () => {
    // hex property should be ignored for non-sRGB spaces
    // because the hex should reflect the actual color space conversion
    const input = {
      colorSpace: 'display-p3' as const,
      components: [1, 0, 0] as [number, number, number],
      hex: '#ff0000',
    }
    expect(normalizeColorValue(input)).toBe('#ff0b0c')
  })

  it('uses hex shortcut for sRGB with hex property', () => {
    const input = {
      colorSpace: 'srgb' as const,
      components: [1, 0, 0] as [number, number, number],
      hex: '#ff0000',
    }
    expect(normalizeColorValue(input)).toBe('#ff0000')
  })

  it('converts hsl color to sRGB hex', () => {
    const input = {
      colorSpace: 'hsl' as const,
      components: [0, 100, 50] as [number, number, number],
    }
    expect(normalizeColorValue(input)).toBe('#ff0000')
  })

  it('converts hwb color to sRGB hex', () => {
    const input = {
      colorSpace: 'hwb' as const,
      components: [0, 0, 0] as [number, number, number],
    }
    expect(normalizeColorValue(input)).toBe('#ff0000')
  })

  it('converts lch color to sRGB hex', () => {
    const input = {
      colorSpace: 'lch' as const,
      components: [50, 0, 0] as [number, number, number],
    }
    expect(normalizeColorValue(input)).toBe('#777777')
  })

  it('converts oklch color to sRGB hex', () => {
    const input = {
      colorSpace: 'oklch' as const,
      components: [0.5, 0.2, 260] as [number, number, number],
    }
    expect(normalizeColorValue(input)).toBe('#0559d2')
  })

  it('handles none keyword in components', () => {
    const input = {
      colorSpace: 'hsl' as const,
      components: ['none' as const, 0, 50] as [number | 'none', number | 'none', number | 'none'],
    }
    // hsl(none, 0, 50) = achromatic gray, none hue treated as 0
    expect(normalizeColorValue(input)).toBe('#808080')
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

  it('returns false when colorSpace is not a string', () => {
    expect(isW3cColorValue({colorSpace: 123, components: [0, 0, 0]})).toBe(false)
  })

  it('returns false when components is not an array', () => {
    expect(isW3cColorValue({colorSpace: 'srgb', components: 'red'})).toBe(false)
  })

  it('returns false when components has wrong length', () => {
    expect(isW3cColorValue({colorSpace: 'srgb', components: [0, 0]})).toBe(false)
    expect(isW3cColorValue({colorSpace: 'srgb', components: [0, 0, 0, 0]})).toBe(false)
  })

  it('returns false when components contain invalid values', () => {
    expect(isW3cColorValue({colorSpace: 'srgb', components: [0, 'red', 0]})).toBe(false)
    expect(isW3cColorValue({colorSpace: 'srgb', components: [0, true, 0]})).toBe(false)
  })

  it('returns true when components contain none keyword', () => {
    expect(isW3cColorValue({colorSpace: 'hsl', components: ['none', 0, 50]})).toBe(true)
  })

  it('returns false for rgba float object (r,g,b,a)', () => {
    expect(isW3cColorValue({r: 1, g: 0, b: 0, a: 1})).toBe(false)
  })
})
