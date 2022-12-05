import {flattenObject} from './flattenObject'

describe('Utilities: flattenObject', () => {
  it('flattens an object with dot separator by default', () => {
    const mockObject = {
      a: 'foo',
      b: {
        c: 'bar',
      },
    }

    const expectedOutput = {
      a: 'foo',
      ['b.c']: 'bar',
    }

    expect(flattenObject(mockObject)).toStrictEqual(expectedOutput)
  })

  it('flattens an object with an optional custom separator', () => {
    const mockObject = {
      a: 'foo',
      b: {
        c: 'bar',
      },
    }

    const expectedOutput = {
      a: 'foo',
      ['b-c']: 'bar',
    }

    expect(flattenObject(mockObject, undefined, '-')).toStrictEqual(expectedOutput)
  })

  it('flattens a nested object and applies a prefix to each key', () => {
    const mockObject = {
      a: 'foo',
      b: {
        c: 'bar',
      },
    }

    const expectedOutput = {
      ['test.a']: 'foo',
      ['test.b.c']: 'bar',
    }

    expect(flattenObject(mockObject, 'test')).toStrictEqual(expectedOutput)
  })

  it('flattens to n depth', () => {
    const n = 50 // arbitrary number
    const arr = Array.from(Array(n), (x, i) => i.toString())
    const mockObject = {}

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const buildObject = (obj: {[x: string]: any}, keyPath: string | any[]) => {
      const lastKeyIndex = keyPath.length - 1
      for (let i = 0; i < lastKeyIndex; ++i) {
        const key = keyPath[i]
        if (!(key in obj)) {
          obj[key] = {}
        }
        obj = obj[key]
      }
      obj[keyPath[lastKeyIndex]] = 'foo'
    }

    buildObject(mockObject, arr)

    const expectedOutput = {
      '0.1.2.3.4.5.6.7.8.9.10.11.12.13.14.15.16.17.18.19.20.21.22.23.24.25.26.27.28.29.30.31.32.33.34.35.36.37.38.39.40.41.42.43.44.45.46.47.48.49':
        'foo',
    }

    expect(flattenObject(mockObject)).toStrictEqual(expectedOutput)
  })
})
