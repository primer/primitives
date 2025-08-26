import {dimensionToString} from './dimensionToString.js'

describe('Utility: dimensionToString', () => {
  it('converts dimension object to string', () => {
    expect(dimensionToString({value: 0, unit: 'px'})).toBe('0px')
    expect(dimensionToString({value: 1, unit: 'px'})).toBe('1px')
    expect(dimensionToString({value: 16, unit: 'px'})).toBe('16px')
    expect(dimensionToString({value: 1.5, unit: 'rem'})).toBe('1.5rem')
    expect(dimensionToString({value: 0, unit: 'em'})).toBe('0em')
  })

  it('handles string values for backward compatibility', () => {
    expect(dimensionToString('0px')).toBe('0px')
    expect(dimensionToString('1px')).toBe('1px')
    expect(dimensionToString('16px')).toBe('16px')
    expect(dimensionToString('1.5rem')).toBe('1.5rem')
  })

  it('throws error for invalid dimension values', () => {
    expect(() => dimensionToString({value: 1} as {value: number; unit: string})).toThrowError()
    expect(() => dimensionToString({unit: 'px'} as {value: number; unit: string})).toThrowError()
    expect(() => dimensionToString(123 as unknown as string)).toThrowError()
    expect(() => dimensionToString(null as unknown as string)).toThrowError()
  })
})
