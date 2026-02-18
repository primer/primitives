import {durationToken} from './durationToken.js'

describe('Schema: durationToken', () => {
  const validToken = {
    $value: {value: 1000, unit: 'ms'},
    $type: 'duration',
    $description: '1000 milliseconds',
  }

  it('parses valid duration tokens', () => {
    expect(durationToken.safeParse(validToken).success).toStrictEqual(true)
    expect(durationToken.safeParse({$value: {value: 1.5, unit: 's'}, $type: 'duration'}).success).toStrictEqual(true)
    expect(durationToken.safeParse({$value: {value: 0, unit: 'ms'}, $type: 'duration'}).success).toStrictEqual(true)
  })

  it('parses duration token with reference value', () => {
    expect(durationToken.safeParse({$value: '{base.duration.100}', $type: 'duration'}).success).toStrictEqual(true)
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
        $value: {value: 1000, unit: 'ms'},
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
        $value: {value: 1000, unit: 'ms'},
      }).success,
    ).toStrictEqual(false)
  })

  it('fails on legacy string format', () => {
    expect(
      durationToken.safeParse({
        $value: '1000ms',
        $type: 'duration',
      }).success,
    ).toStrictEqual(false)
  })
})
