import {tokenName} from './tokenName'

describe('Schema: tokenName', () => {
  it('parses valid token names', () => {
    expect(tokenName.safeParse('tokenname').success).toStrictEqual(true)
    expect(tokenName.safeParse('tokenName').success).toStrictEqual(true)
    expect(tokenName.safeParse('token-Name').success).toStrictEqual(true)
    expect(tokenName.safeParse('token-name').success).toStrictEqual(true)
    expect(tokenName.safeParse('10-name').success).toStrictEqual(true)
    expect(tokenName.safeParse('token-10').success).toStrictEqual(true)
    expect(tokenName.safeParse('@').success).toStrictEqual(true)
    expect(tokenName.safeParse('900').success).toStrictEqual(true)
  })

  it('fails on invalid token names', () => {
    expect(tokenName.safeParse('@Token').success).toStrictEqual(false)
    expect(tokenName.safeParse('#token').success).toStrictEqual(false)
    expect(tokenName.safeParse('token&name').success).toStrictEqual(false)
    expect(tokenName.safeParse('token+name').success).toStrictEqual(false)
    expect(tokenName.safeParse('token/name').success).toStrictEqual(false)
    expect(tokenName.safeParse('Token Name').success).toStrictEqual(false)
    expect(tokenName.safeParse('token Name').success).toStrictEqual(false)
    expect(tokenName.safeParse('Token-Name').success).toStrictEqual(false)
    expect(tokenName.safeParse('Token_Name').success).toStrictEqual(false)
    expect(tokenName.safeParse('').success).toStrictEqual(false)
  })

  it('fails on non-string', () => {
    expect(tokenName.safeParse(undefined).success).toStrictEqual(false)
    expect(tokenName.safeParse(false).success).toStrictEqual(false)
    expect(tokenName.safeParse(10).success).toStrictEqual(false)
  })
})
