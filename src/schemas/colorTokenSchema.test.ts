import {colorToken} from './colorToken'

describe('Schema: colorToken', () => {
  const validToken = {
    $value: '#00ff88',
    $type: 'color',
    $description: 'a color token',
  }

  it('passes on valid values', () => {
    expect(colorToken.safeParse(validToken).success).toStrictEqual(true)
    expect(colorToken.safeParse({...validToken, $value: '#000'}).success).toStrictEqual(true)
    expect(colorToken.safeParse({...validToken, $value: '#11223366'}).success).toStrictEqual(true)
  })

  it('fails on invalid type', () => {
    expect(colorToken.safeParse({...validToken, $type: 'stroke'}).success).toStrictEqual(false)
  })

  it('fails on invalid value', () => {
    expect(colorToken.safeParse({...validToken, $value: 'wrong'}).success).toStrictEqual(false)
    expect(colorToken.safeParse({...validToken, $value: undefined}).success).toStrictEqual(false)
    expect(colorToken.safeParse({...validToken, $value: ''}).success).toStrictEqual(false)
    expect(colorToken.safeParse({...validToken, $value: false}).success).toStrictEqual(false)
    expect(colorToken.safeParse({...validToken, $value: 1}).success).toStrictEqual(false)
  })
})
