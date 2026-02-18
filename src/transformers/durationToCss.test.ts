import {getMockToken} from '../test-utilities/index.js'
import {durationToCss} from './durationToCss.js'

describe('Transformer: durationToCss', () => {
  it('transforms duration object with ms unit', () => {
    const input = getMockToken({
      value: {value: 100, unit: 'ms'},
    })
    expect(durationToCss.transform(input, {}, {})).toStrictEqual('100ms')
  })

  it('converts s unit to ms', () => {
    const input = getMockToken({
      value: {value: 1.5, unit: 's'},
    })
    expect(durationToCss.transform(input, {}, {})).toStrictEqual('1500ms')
  })

  it('keeps ms >= 1000 as ms', () => {
    const input = getMockToken({
      value: {value: 1500, unit: 'ms'},
    })
    expect(durationToCss.transform(input, {}, {})).toStrictEqual('1500ms')
  })

  it('handles 0ms correctly', () => {
    const input = getMockToken({
      value: {value: 0, unit: 'ms'},
    })
    expect(durationToCss.transform(input, {}, {})).toStrictEqual('0ms')
  })

  it('throws error for invalid unit in object format', () => {
    expect(() =>
      durationToCss.transform(
        getMockToken({
          value: {value: 100, unit: 'sec'},
        }),
        {},
        {},
      ),
    ).toThrowError()
  })

  it('throws error for non-number value in object format', () => {
    expect(() =>
      durationToCss.transform(
        getMockToken({
          value: {value: '100', unit: 'ms'},
        }),
        {},
        {},
      ),
    ).toThrowError()
  })

  it('throws error for legacy string format', () => {
    expect(() =>
      durationToCss.transform(
        getMockToken({
          value: '100ms',
        }),
        {},
        {},
      ),
    ).toThrowError()
  })

  it('throws error for plain number value', () => {
    expect(() =>
      durationToCss.transform(
        getMockToken({
          value: 1000,
        }),
        {},
        {},
      ),
    ).toThrowError()
  })
})
