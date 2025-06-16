import {getMockToken} from '../test-utilities/index.js'
import {dimensionToRem} from './dimensionToRem.js'

describe('Transformer: dimensionToRem', () => {
  it('transforms pixel string tokens to rem', () => {
    const input = [
      getMockToken({
        value: '16px',
      }),
    ]
    const expectedOutput = ['1rem']
    expect(input.map(item => dimensionToRem.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms pixel object tokens to rem (new format)', () => {
    const input = [
      getMockToken({
        value: {value: 16, unit: 'px'},
      }),
    ]
    const expectedOutput = ['1rem']
    expect(input.map(item => dimensionToRem.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms number to rem', () => {
    const input = [
      getMockToken({
        value: '16',
      }),
      getMockToken({
        value: 16,
      }),
    ]
    const expectedOutput = ['1rem', '1rem']
    expect(input.map(item => dimensionToRem.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms rem to rem', () => {
    const input = [
      getMockToken({
        value: '1rem',
      }),
      getMockToken({
        value: {value: 1, unit: 'rem'},
      }),
    ]
    const expectedOutput = ['1rem', '1rem']
    expect(input.map(item => dimensionToRem.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('does not transforms em to rem', () => {
    const input = [
      getMockToken({
        value: '1em',
      }),
      getMockToken({
        value: {value: 1, unit: 'em'},
      }),
    ]
    const expectedOutput = ['1em', '1em']
    expect(input.map(item => dimensionToRem.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms 0 to 0', () => {
    const input = [
      getMockToken({
        value: '0rem',
      }),
      getMockToken({
        value: '0px',
      }),
      getMockToken({
        value: '0',
      }),
      getMockToken({
        value: {value: 0, unit: 'px'},
      }),
    ]
    const expectedOutput = ['0', '0', '0', '0']
    expect(input.map(item => dimensionToRem.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('throws on invalid tokens', () => {
    const input = [
      getMockToken({
        value: 'rem',
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
    ]
    expect(() => input.map(item => dimensionToRem.transform(item, {}, {}))).toThrow()
  })
})
