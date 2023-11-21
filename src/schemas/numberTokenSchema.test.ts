import {numberToken} from './numberToken'

describe('Schema: numberToken', () => {
  const validToken = {
    $value: 10,
    $type: 'number',
    $description: 'a number token',
  }

  it('parses valid number tokens', () => {
    expect(numberToken.safeParse(validToken).success).toStrictEqual(true)
  })

  it('fails on invalid properties', () => {
    // additional element
    expect(
      numberToken.safeParse({
        ...validToken,
        additional: 1000,
      }).success,
    ).toStrictEqual(false)
    // missing value
    expect(
      numberToken.safeParse({
        $type: 'number',
      }).success,
    ).toStrictEqual(false)
    // missing type
    expect(
      numberToken.safeParse({
        $value: 1000,
      }).success,
    ).toStrictEqual(false)
  })

  it('fails on wrong type', () => {
    // invalid string
    expect(
      numberToken.safeParse({
        ...validToken,
        $type: 'motion',
      }).success,
    ).toStrictEqual(false)
    // undefined
    expect(
      numberToken.safeParse({
        ...validToken,
        $type: undefined,
      }).success,
    ).toStrictEqual(false)
    // no type
    expect(
      numberToken.safeParse({
        $value: 1000,
      }).success,
    ).toStrictEqual(false)
  })

  it('fails on wrong value', () => {
    // invalid string
    expect(
      numberToken.safeParse({
        ...validToken,
        $value: 'string',
      }).success,
    ).toStrictEqual(false)
    // undefined
    expect(
      numberToken.safeParse({
        ...validToken,
        $value: undefined,
      }).success,
    ).toStrictEqual(false)
    // boolean
    expect(
      numberToken.safeParse({
        ...validToken,
        $value: false,
      }).success,
    ).toStrictEqual(false)
  })
})
