import {durationToken} from './durationToken'

describe('Schema: durationToken', () => {
  const validToken = {
    $value: '1000ms',
    $type: 'duration',
    $description: '1000 milliseconds',
  }

  it('parses valid duration tokens', () => {
    expect(durationToken.safeParse(validToken).success).toStrictEqual(true)
  })

  it('fails on invalid properties', () => {
    // additional element
    expect(
      durationToken.safeParse({
        ...validToken,
        duration: '1000s',
      }).success,
    ).toStrictEqual(false)
    // missing value
    expect(
      durationToken.safeParse({
        $type: 'duration',
      }).success,
    ).toStrictEqual(false)
    // missing type
    expect(
      durationToken.safeParse({
        $value: '1000ms',
      }).success,
    ).toStrictEqual(false)
  })

  it('fails on wrong type', () => {
    // invalid string
    expect(
      durationToken.safeParse({
        ...validToken,
        $type: 'motion',
      }).success,
    ).toStrictEqual(false)
    // undefined
    expect(
      durationToken.safeParse({
        ...validToken,
        $type: undefined,
      }).success,
    ).toStrictEqual(false)
    // no type
    expect(
      durationToken.safeParse({
        $value: '1000ms',
      }).success,
    ).toStrictEqual(false)
  })
})
