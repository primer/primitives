import {fontWeightToken} from './fontWeightToken'

describe('Schema: fontWeightToken', () => {
  const validToken = {
    $value: 100,
    $type: 'fontWeight',
    $description: 'a fontWeight token',
  }

  it('parses valid number tokens', () => {
    expect(fontWeightToken.safeParse(validToken).success).toStrictEqual(true)
  })

  it('fails on invalid properties', () => {
    // additional element
    expect(
      fontWeightToken.safeParse({
        ...validToken,
        additional: 1000,
      }).success,
    ).toStrictEqual(false)
    // missing value
    expect(
      fontWeightToken.safeParse({
        $type: 'fontWeight',
      }).success,
    ).toStrictEqual(false)
    // missing type
    expect(
      fontWeightToken.safeParse({
        $value: 100,
      }).success,
    ).toStrictEqual(false)
  })

  it('fails on wrong type', () => {
    // invalid string
    expect(
      fontWeightToken.safeParse({
        ...validToken,
        $type: 'motion',
      }).success,
    ).toStrictEqual(false)
    // undefined
    expect(
      fontWeightToken.safeParse({
        ...validToken,
        $type: undefined,
      }).success,
    ).toStrictEqual(false)
    // no type
    expect(
      fontWeightToken.safeParse({
        $value: 100,
      }).success,
    ).toStrictEqual(false)
  })

  it('fails on wrong value', () => {
    // invalid string
    expect(
      fontWeightToken.safeParse({
        ...validToken,
        $value: 'string',
      }).success,
    ).toStrictEqual(false)
    // undefined
    expect(
      fontWeightToken.safeParse({
        ...validToken,
        $value: undefined,
      }).success,
    ).toStrictEqual(false)
    // boolean
    expect(
      fontWeightToken.safeParse({
        ...validToken,
        $value: false,
      }).success,
    ).toStrictEqual(false)
    // wrong value
    expect(
      fontWeightToken.safeParse({
        $value: 1500,
      }).success,
    ).toStrictEqual(false)
  })
})
