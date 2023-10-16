import {baseToken} from './baseToken'

describe('Schema: baseToken', () => {
  const validToken = {
    $description: 'a base token',
  }

  it('passes on valid values', () => {
    expect(baseToken.safeParse(validToken).success).toStrictEqual(true)
  })

  it('fails on invalid property', () => {
    expect(baseToken.safeParse({...validToken, $type: 'stroke'}).success).toStrictEqual(false)
    expect(baseToken.safeParse({...validToken, $value: 'wrong'}).success).toStrictEqual(false)
    expect(baseToken.safeParse({...validToken, $additional: undefined}).success).toStrictEqual(false)
  })
})
