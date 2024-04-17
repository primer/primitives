import {rgbaFloatToHex} from './rgbaFloatToHex'

describe('Utilities: rgbaFloatToHex', () => {
  it('valid RgbaFloat value', () => {
    expect(rgbaFloatToHex({a: 1, b: 0.6, g: 0.4, r: 0.2})).toStrictEqual('#336699')
    expect(rgbaFloatToHex({a: 0, b: 0.3, g: 0.4, r: 0.2})).toStrictEqual('#33664c')
    expect(rgbaFloatToHex({b: 0.6, g: 0.4, r: 0.2})).toStrictEqual('#336699')
    expect(rgbaFloatToHex({b: 0.56, g: 0.35, r: 0.123344})).toStrictEqual('#1f598e')
  })

  it('Invalid values', () => {
    expect(() => rgbaFloatToHex({a: 1, b: 0.6, g: 0.4, r: 2})).toThrow(
      'Invalid RgbaFloat value. R, G and B values must be between 0 and 1',
    )
  })
})
