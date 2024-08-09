import {isRgbaFloat} from './isRgbaFloat.js'

describe('Utilities: isRgbaFloat', () => {
  it('valid RgbaFloat', () => {
    expect(isRgbaFloat({a: 1, b: 0.6, g: 0.4, r: 0.2})).toStrictEqual(true)
    expect(isRgbaFloat({a: 0, b: 0.2, g: 0.4, r: 0.2})).toStrictEqual(true)
    expect(isRgbaFloat({b: 0.6, g: 0.4, r: 0.2})).toStrictEqual(true)
  })

  it('RgbaFloat as string', () => {
    expect(isRgbaFloat('{a: 1, b: 0.6, g: 0.4, r: 0.2}')).toStrictEqual(false)
  })
  it('Invalid values', () => {
    expect(isRgbaFloat({a: 1, b: 0.6, g: 0.4})).toStrictEqual(false)
    expect(isRgbaFloat({a: 1, b: 0.6, g: 0.4, r: 1.1})).toStrictEqual(false)
    expect(isRgbaFloat('#334455')).toStrictEqual(false)
    expect(isRgbaFloat(undefined)).toStrictEqual(false)
    expect(isRgbaFloat(null)).toStrictEqual(false)
  })
})
