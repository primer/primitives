import {dimensionToPixel} from './dimensionToPixel.js'
import {getMockToken} from '../test-utilities/index.js'

describe('Transform: dimensionToPixel', () => {
  it('transforms `px` dimension token', () => {
    const input = [
      getMockToken({
        value: {value: 16, unit: 'px'},
      }),
    ]
    const expectedOutput = ['16px']
    expect(input.map(item => dimensionToPixel.transform(item, {basePxFontSize: 16}, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms `rem` dimension token', () => {
    const input = [
      getMockToken({
        value: {value: 1, unit: 'rem'},
      }),
    ]
    const expectedOutput = ['16px']
    expect(input.map(item => dimensionToPixel.transform(item, {basePxFontSize: 16}, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms `em` dimension token', () => {
    const input = [
      getMockToken({
        value: {value: 1.5, unit: 'em'},
      }),
    ]
    const expectedOutput = ['1.5em']
    expect(input.map(item => dimensionToPixel.transform(item, {basePxFontSize: 16}, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms dimension token with `0` value', () => {
    const input = [
      getMockToken({
        value: {value: 0, unit: 'px'},
      }),
    ]
    const expectedOutput = ['0']
    expect(input.map(item => dimensionToPixel.transform(item, {basePxFontSize: 16}, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms dimension token with decimal value', () => {
    const input = [
      getMockToken({
        value: {value: 1.5, unit: 'px'},
      }),
    ]
    const expectedOutput = ['1.5px']
    expect(input.map(item => dimensionToPixel.transform(item, {basePxFontSize: 16}, {}))).toStrictEqual(expectedOutput)
  })

  it('uses custom base font size', () => {
    const input = [
      getMockToken({
        value: {value: 1, unit: 'rem'},
      }),
    ]
    const expectedOutput = ['20px']
    expect(input.map(item => dimensionToPixel.transform(item, {basePxFontSize: 20}, {}))).toStrictEqual(expectedOutput)
  })

  it('throws error for invalid dimension value', () => {
    const input = getMockToken({
      value: 'invalid',
    })
    expect(() => dimensionToPixel.transform(input, {basePxFontSize: 16}, {})).toThrow('Invalid dimension token')
  })

  it('throws error for unsupported unit', () => {
    const input = getMockToken({
      value: {value: 16, unit: 'vh'},
    })
    expect(() => dimensionToPixel.transform(input, {basePxFontSize: 16}, {})).toThrow('Invalid dimension token')
  })
})
