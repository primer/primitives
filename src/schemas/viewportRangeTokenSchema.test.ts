import {viewportRangeToken} from './viewportRangeToken'

describe('Schema: viewportRangeToken', () => {
  const validToken = {
    $value: '(max-width: calc({<namespace>.breakpoint.medium} - 0.02px))',
    $type: 'custom-viewportRange',
    $description: 'a number token',
  }

  it('parses valid number tokens', () => {
    expect(viewportRangeToken.safeParse(validToken).success).toStrictEqual(true)
  })

  it('fails on invalid properties', () => {
    // additional element
    expect(
      viewportRangeToken.safeParse({
        ...validToken,
        additional: 1000,
      }).success,
    ).toStrictEqual(false)
    // invalid value
    expect(
      viewportRangeToken.safeParse({
        ...validToken,
        value: 1000,
      }).success,
    ).toStrictEqual(false)
    // missing value
    expect(
      viewportRangeToken.safeParse({
        $type: 'number',
      }).success,
    ).toStrictEqual(false)
  })

  it('fails on wrong type', () => {
    // invalid string
    expect(
      viewportRangeToken.safeParse({
        ...validToken,
        $type: 'motion',
      }).success,
    ).toStrictEqual(false)
    // undefined
    expect(
      viewportRangeToken.safeParse({
        ...validToken,
        $type: undefined,
      }).success,
    ).toStrictEqual(false)
    // no type
    expect(
      viewportRangeToken.safeParse({
        $value: '(max-width: calc({<namespace>.breakpoint.medium} - 0.02px))',
      }).success,
    ).toStrictEqual(false)
  })
})
