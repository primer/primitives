import {fontFamilyToken} from './fontFamilyToken'

describe('Schema: fontFamilyToken', () => {
  const validToken = {
    $value: 'Helvetica',
    $type: 'fontFamily',
    $description: 'a fontFamily token',
  }

  it('parses valid number tokens', () => {
    expect(fontFamilyToken.safeParse(validToken).success).toStrictEqual(true)
  })

  it('fails on invalid properties', () => {
    // additional element
    expect(
      fontFamilyToken.safeParse({
        ...validToken,
        additional: 1000,
      }).success,
    ).toStrictEqual(false)
    // missing value
    expect(
      fontFamilyToken.safeParse({
        $type: 'fontWeight',
      }).success,
    ).toStrictEqual(false)
    // missing type
    expect(
      fontFamilyToken.safeParse({
        $value: 'Helvetica',
      }).success,
    ).toStrictEqual(false)
  })

  it('fails on wrong type', () => {
    // invalid string
    expect(
      fontFamilyToken.safeParse({
        ...validToken,
        $type: 'motion',
      }).success,
    ).toStrictEqual(false)
    // undefined
    expect(
      fontFamilyToken.safeParse({
        ...validToken,
        $type: undefined,
      }).success,
    ).toStrictEqual(false)
    // no type
    expect(
      fontFamilyToken.safeParse({
        $value: 'Helvetica',
      }).success,
    ).toStrictEqual(false)
  })

  it('fails on wrong value', () => {
    // invalid value
    expect(
      fontFamilyToken.safeParse({
        ...validToken,
        $value: 100,
      }).success,
    ).toStrictEqual(false)
    // undefined
    expect(
      fontFamilyToken.safeParse({
        ...validToken,
        $value: undefined,
      }).success,
    ).toStrictEqual(false)
    // boolean
    expect(
      fontFamilyToken.safeParse({
        ...validToken,
        $value: false,
      }).success,
    ).toStrictEqual(false)
  })
})
