import {extractTokenNames} from './extractTokenNames.js'

describe('extractTokenNames', () => {
  it('extracts simple token paths', () => {
    const input = {
      fgColor: {
        default: {$value: '#000', $type: 'color'},
        muted: {$value: '#666', $type: 'color'},
      },
    }
    expect(extractTokenNames(input)).toEqual(new Set(['fgColor.default', 'fgColor.muted']))
  })

  it('extracts deeply nested token paths', () => {
    const input = {
      base: {
        color: {
          neutral: {
            0: {$value: '#fff', $type: 'color'},
            1: {$value: '#eee', $type: 'color'},
          },
        },
      },
    }
    expect(extractTokenNames(input)).toEqual(new Set(['base.color.neutral.0', 'base.color.neutral.1']))
  })

  it('skips $-prefixed keys', () => {
    const input = {
      token: {
        $value: '#000',
        $type: 'color',
        $description: 'A token',
        $extensions: {some: 'data'},
      },
    }
    expect(extractTokenNames(input)).toEqual(new Set(['token']))
  })

  it('handles mixed token and group nodes', () => {
    const input = {
      focus: {
        outline: {
          $value: {color: '#00f', style: 'solid', width: '2px'},
          $type: 'border',
        },
        'outline-color': {
          $value: '#00f',
          $type: 'color',
        },
      },
    }
    expect(extractTokenNames(input)).toEqual(new Set(['focus.outline', 'focus.outline-color']))
  })

  it('returns empty set for empty object', () => {
    expect(extractTokenNames({})).toEqual(new Set())
  })

  it('skips non-object values', () => {
    const input = {
      someString: 'not an object',
      someNumber: 42,
      token: {$value: '#000', $type: 'color'},
    }
    // non-objects are ignored, only the token is extracted
    expect(extractTokenNames(input)).toEqual(new Set(['token']))
  })

  it('does not recurse into nodes with $value', () => {
    // A node with $value is a leaf token, even if it has nested objects
    const input = {
      token: {
        $value: {color: '#00f', style: 'solid'},
        $type: 'border',
        nested: {
          child: {$value: '#000', $type: 'color'},
        },
      },
    }
    // token is a leaf, so nested.child should not be extracted
    expect(extractTokenNames(input)).toEqual(new Set(['token']))
  })
})
