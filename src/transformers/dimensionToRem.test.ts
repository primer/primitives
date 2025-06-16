import {getMockToken} from '../test-utilities/index.js'
import {dimensionToRem} from './dimensionToRem.js'

describe('Transformer: dimensionToRem', () => {
  it('transforms pixel object tokens to rem', () => {
    const input = [
      getMockToken({
        value: {value: 16, unit: 'px'},
      }),
    ]
    const expectedOutput = ['1rem']
    expect(input.map(item => dimensionToRem.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms rem to rem', () => {
    const input = [
      getMockToken({
        value: {value: 1, unit: 'rem'},
      }),
    ]
    const expectedOutput = ['1rem']
    expect(input.map(item => dimensionToRem.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('does not transforms em to rem', () => {
    const input = [
      getMockToken({
        value: {value: 1, unit: 'em'},
      }),
    ]
    const expectedOutput = ['1em']
    expect(input.map(item => dimensionToRem.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms 0 to 0', () => {
    const input = [
      getMockToken({
        value: {value: 0, unit: 'rem'},
      }),
      getMockToken({
        value: {value: 0, unit: 'px'},
      }),
      getMockToken({
        value: {value: 0, unit: 'em'},
      }),
    ]
    const expectedOutput = ['0', '0', '0']
    expect(input.map(item => dimensionToRem.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('throws on invalid tokens', () => {
    const input = [
      getMockToken({
        value: 'rem',
      }),
      getMockToken({
        value: '16px',
      }),
      getMockToken({
        value: 16,
      }),
      getMockToken({
        value: '',
      }),
      getMockToken({
        value: undefined,
      }),
      getMockToken({
        value: null,
      }),
      getMockToken({
        value: {},
      }),
      getMockToken({
        value: {value: 16},
      }),
      getMockToken({
        value: {unit: 'px'},
      }),
    ]
    input.forEach(token => {
      expect(() => dimensionToRem.transform(token, {}, {})).toThrow()
    })
  })
})
