expect.extend({
  toBeNonEmptyArray(value) {
    return {
      pass: Array.isArray(value) && value.length > 0,
      message: () => {
        return Array.isArray(value)
          ? `Expected .length > 0, but got ${value.length}`
          : `Expected an array, but got "${typeof value}"`
      }
    }
  },

  toBeSorted(value, comparator = numericAscending) {
    const sorted = [...value].sort(comparator)
    return {
      pass: this.equals(value, sorted),
      message: () => `Expected ${JSON.stringify(sorted)}, but got: ${JSON.stringify(value)}`
    }
  }
})

describe('theme (default export)', () => {
  const theme = require('..')

  it('is an object', () => {
    expect(theme).toBeInstanceOf(Object)
  })

  it('has a colors object', () => {
    expect(theme.colors).toBeInstanceOf(Object)
  })

  it('has a non-empty space array', () => {
    expect(theme.space).toBeNonEmptyArray()
  })

  it('has a fontSizes array', () => {
    expect(theme.fontSizes).toBeNonEmptyArray()
  })

  it('has a lineHeights object', () => {
    expect(theme.lineHeights).toBeInstanceOf(Object)
  })

  it('has a non-empty breakpoints array', () => {
    expect(theme.breakpoints).toBeNonEmptyArray()
  })

  it('has a maxWidths object', () => {
    expect(theme.maxWidths).toBeInstanceOf(Object)
  })

  it('matches the snapshot', () => {
    expect(theme).toMatchSnapshot()
  })
})

describe('colors export', () => {
  const colors = require('../colors')
  const expectedHues = ['gray', 'blue', 'green', 'yellow', 'orange', 'red', 'purple']

  it('is an object', () => {
    expect(colors).toBeInstanceOf(Object)
  })

  it('has a "black" string value', () => {
    expect(typeof colors.black).toBe('string')
  })

  it('has a "white" string value', () => {
    expect(typeof colors.white).toBe('string')
  })

  for (const hue of expectedHues) {
    it(`has a "${hue}" gradient array`, () => {
      expect(colors[hue]).toBeNonEmptyArray()
    })
  }

  it('matches the snapshot', () => {
    expect(colors).toMatchSnapshot()
  })
})

describe('space export', () => {
  const space = require('../space')

  it('is a non-empty array', () => {
    expect(space).toBeNonEmptyArray()
  })

  it('contains only numbers', () => {
    for (const n of space) {
      expect(typeof n).toBe('number')
    }
  })

  it('is sorted numerically', () => {
    expect(space).toBeSorted()
  })

  it('matches the snapshot', () => {
    expect(space).toMatchSnapshot()
  })
})

describe('typography export', () => {
  const typography = require('../typography')

  it('is an object', () => {
    expect(typography).toBeInstanceOf(Object)
  })

  describe('.fontSizes', () => {
    const {fontSizes} = typography
    it('is a non-empty array', () => {
      expect(fontSizes).toBeNonEmptyArray()
    })

    it('contains only numbers', () => {
      for (const n of fontSizes) {
        expect(typeof n).toBe('number')
      }
    })

    it('is sorted numerically', () => {
      expect(fontSizes).toBeSorted()
    })
  })

  describe('.lineHeights', () => {
    const {lineHeights} = typography
    it('is an object', () => {
      expect(lineHeights).toBeInstanceOf(Object)
    })

    it('matches the snapshot', () => {
      expect(lineHeights).toMatchSnapshot()
    })

    it('has a "default" key of 1.5', () => {
      expect(lineHeights).toMatchObject({default: 1.5})
    })
  })

  it('matches the snapshot', () => {
    expect(typography).toMatchSnapshot()
  })
})

function numericAscending(a, b) {
  return a - b
}
