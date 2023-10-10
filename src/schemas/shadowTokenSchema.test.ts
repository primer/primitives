import {shadowValue, shadowToken} from './shadowToken'

const tokenValue = {
  color: '#000000',
  alpha: 0.5,
  offsetX: '4px',
  offsetY: '4px',
  blur: '2px',
  spread: '2px',
  inset: false,
}

describe('Schema: shadowValue', () => {
  it('parses valid shadow value', () => {
    expect(shadowValue.safeParse(tokenValue).success).toStrictEqual(true)
    // without inset
    expect(
      shadowValue.safeParse({color: '#000000', alpha: 0.5, offsetX: '4px', offsetY: '4px', blur: '2px', spread: '2px'})
        .success,
    ).toStrictEqual(true)
  })

  it('fails on invalid properties', () => {
    // additional element
    expect(
      shadowValue.safeParse({
        ...tokenValue,
        additional: 1000,
      }).success,
    ).toStrictEqual(false)
  })

  it('fails on missing properties', () => {
    expect(
      shadowValue.safeParse({
        alpha: 0.5,
        offsetX: '4px',
        offsetY: '4px',
        blur: '2px',
        spread: '2px',
      }).success,
    ).toStrictEqual(false)
    expect(
      shadowValue.safeParse({
        color: '#000000',
        offsetX: '4px',
        offsetY: '4px',
        blur: '2px',
        spread: '2px',
      }).success,
    ).toStrictEqual(false)
    expect(
      shadowValue.safeParse({
        color: '#000000',
        alpha: 0.5,
        offsetY: '4px',
        blur: '2px',
        spread: '2px',
      }).success,
    ).toStrictEqual(false)
    expect(
      shadowValue.safeParse({
        color: '#000000',
        alpha: 0.5,
        offsetY: '4px',
        blur: '2px',
        spread: '2px',
      }).success,
    ).toStrictEqual(false)
    expect(
      shadowValue.safeParse({
        color: '#000000',
        alpha: 0.5,
        offsetX: '4px',
        offsetY: '4px',
        spread: '2px',
      }).success,
    ).toStrictEqual(false)
    expect(
      shadowValue.safeParse({
        color: '#000000',
        alpha: 0.5,
        offsetX: '4px',
        offsetY: '4px',
        blur: '2px',
      }).success,
    ).toStrictEqual(false)
  })
})

describe('Schema: shadowToken', () => {
  const validToken = {
    $value: tokenValue,
    $type: 'shadow',
    $description: 'a shadowToken token',
  }

  it('parses valid tokens', () => {
    expect(shadowToken.safeParse(validToken).success).toStrictEqual(true)
  })

  it('fails on invalid properties', () => {
    // additional element
    expect(
      shadowValue.safeParse({
        ...validToken,
        additional: 1000,
      }).success,
    ).toStrictEqual(false)
    // missing value
    expect(
      shadowValue.safeParse({
        $type: 'shadow',
      }).success,
    ).toStrictEqual(false)
  })

  it('fails on wrong type', () => {
    expect(
      shadowToken.safeParse({
        ...validToken,
        $type: 'motion',
      }).success,
    ).toStrictEqual(false)
    // undefined
    expect(
      shadowToken.safeParse({
        ...validToken,
        $type: undefined,
      }).success,
    ).toStrictEqual(false)
    // no type
    expect(
      shadowToken.safeParse({
        $value: tokenValue,
      }).success,
    ).toStrictEqual(false)
  })

  it('fails on wrong value', () => {
    // invalid string
    expect(
      shadowValue.safeParse({
        ...validToken,
        $value: 100,
      }).success,
    ).toStrictEqual(false)
    // undefined
    expect(
      shadowValue.safeParse({
        ...validToken,
        $value: undefined,
      }).success,
    ).toStrictEqual(false)
    // false
    expect(
      shadowValue.safeParse({
        ...validToken,
        $value: false,
      }).success,
    ).toStrictEqual(false)
  })
})
