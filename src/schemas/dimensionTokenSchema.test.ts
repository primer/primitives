import {dimensionToken} from './dimensionToken'

describe('Schema: dimensionToken', () => {
  const validToken = {
    $value: '1px',
    $type: 'dimension',
    $description: 'a dimension token',
  }

  it('passes on valid values', () => {
    expect(dimensionToken.safeParse(validToken).success).toStrictEqual(true)
    expect(dimensionToken.safeParse({...validToken, $value: '1em'}).success).toStrictEqual(true)
    expect(dimensionToken.safeParse({...validToken, $value: '1rem'}).success).toStrictEqual(true)
  })

  it('fails on invalid type', () => {
    expect(dimensionToken.safeParse({...validToken, $type: 'stroke'}).success).toStrictEqual(false)
  })

  it('fails on invalid value', () => {
    expect(dimensionToken.safeParse({...validToken, $value: 'wrong'}).success).toStrictEqual(false)
    expect(dimensionToken.safeParse({...validToken, $value: '1%'}).success).toStrictEqual(false)
    expect(dimensionToken.safeParse({...validToken, $value: undefined}).success).toStrictEqual(false)
    expect(dimensionToken.safeParse({...validToken, $value: ''}).success).toStrictEqual(false)
    expect(dimensionToken.safeParse({...validToken, $value: false}).success).toStrictEqual(false)
    expect(dimensionToken.safeParse({...validToken, $value: 1}).success).toStrictEqual(false)
  })
})
