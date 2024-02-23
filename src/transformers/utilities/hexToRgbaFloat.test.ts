import {hexToRgbaFloat} from './hexToRgbaFloat'

describe('Utilities: hexToRgbaFloat', () => {
  it('it converts hex3', () => {
    expect(hexToRgbaFloat('#369')).toStrictEqual({a: 1, b: 0.6, g: 0.4, r: 0.2})
    expect(hexToRgbaFloat('369')).toStrictEqual({a: 1, b: 0.6, g: 0.4, r: 0.2})
  })

  it('it converts hex4', () => {
    expect(hexToRgbaFloat('#3696')).toStrictEqual({a: 0.4, b: 0.6, g: 0.4, r: 0.2})
    expect(hexToRgbaFloat('3696')).toStrictEqual({a: 0.4, b: 0.6, g: 0.4, r: 0.2})
  })

  it('it converts hex6', () => {
    expect(hexToRgbaFloat('#223344')).toStrictEqual({a: 1, b: 0.26666666666666666, g: 0.2, r: 0.13333333333333333})
    expect(hexToRgbaFloat('223344')).toStrictEqual({a: 1, b: 0.26666666666666666, g: 0.2, r: 0.13333333333333333})
  })

  it('it converts hex8', () => {
    expect(hexToRgbaFloat('#00334466')).toStrictEqual({
      a: 0.4,
      b: 0.26666666666666666,
      g: 0.2,
      r: 0,
    })
    expect(hexToRgbaFloat('00334466')).toStrictEqual({
      a: 0.4,
      b: 0.26666666666666666,
      g: 0.2,
      r: 0,
    })
  })

  it('it converts hex6 with additional alpha', () => {
    expect(hexToRgbaFloat('#003344', 0.7)).toStrictEqual({
      a: 0.7,
      b: 0.26666666666666666,
      g: 0.2,
      r: 0,
    })
  })

  it('it converts hex8 with additional alpha', () => {
    expect(hexToRgbaFloat('#00334466', 0.6)).toStrictEqual({
      a: 0.6,
      b: 0.26666666666666666,
      g: 0.2,
      r: 0,
    })
  })

  it('it converts hex without #', () => {
    expect(hexToRgbaFloat('003344', 0.6)).toStrictEqual({
      a: 0.6,
      b: 0.26666666666666666,
      g: 0.2,
      r: 0,
    })
  })

  it('it throws if invalid input is used', () => {
    expect(() => {
      hexToRgbaFloat('invalid')
    }).toThrow('Invalid hex value in "hexToRgbaFloat". Please provide a valid hex3, hex4, hex6 or hex8 value.')
  })
})
