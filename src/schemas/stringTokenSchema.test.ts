import {stringToken} from './stringToken'

describe('Schema: stringToken', () => {
  const validToken = {
    $value: 'a string',
    $type: 'string',
    $description: 'a string token',
  }

  it('parses valid string tokens', () => {
    expect(stringToken.safeParse(validToken).success).toStrictEqual(true)
  })

  it('fails on invalid properties', () => {
    // additional element
    expect(
      stringToken.safeParse({
        ...validToken,
        additional: 1000,
      }).success,
    ).toStrictEqual(false)
    // missing value
    expect(
      stringToken.safeParse({
        $type: 'string',
      }).success,
    ).toStrictEqual(false)
    // missing type
    expect(
      stringToken.safeParse({
        $value: 'a string',
      }).success,
    ).toStrictEqual(false)
  })

  it('fails on wrong type', () => {
    expect(
      stringToken.safeParse({
        ...validToken,
        $type: 'motion',
      }).success,
    ).toStrictEqual(false)
    // undefined
    expect(
      stringToken.safeParse({
        ...validToken,
        $type: undefined,
      }).success,
    ).toStrictEqual(false)
    // no type
    expect(
      stringToken.safeParse({
        $value: 'a string',
      }).success,
    ).toStrictEqual(false)
  })

  it('fails on wrong value', () => {
    // invalid string
    expect(
      stringToken.safeParse({
        ...validToken,
        $value: 100,
      }).success,
    ).toStrictEqual(false)
    // undefined
    expect(
      stringToken.safeParse({
        ...validToken,
        $value: undefined,
      }).success,
    ).toStrictEqual(false)
    // boolean value
    expect(
      stringToken.safeParse({
        ...validToken,
        $value: false,
      }).success,
    ).toStrictEqual(false)
  })
})
