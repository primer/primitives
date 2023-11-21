import {typographyToken, typographyValue} from './typographyToken'

describe('Schema: typographyToken', () => {
  const validValue = {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 600,
    fontFamily: 'Helvetica',
  }

  const validToken = {
    $value: validValue,
    $type: 'typography',
    $description: 'a typography token',
  }

  it('parses valid tokens', () => {
    expect(typographyToken.safeParse(validToken).success).toStrictEqual(true)
  })

  it('parses valid value', () => {
    expect(typographyValue.safeParse(validValue).success).toStrictEqual(true)
    // lineHeight is optional
    expect(typographyValue.safeParse({...validValue, lineHeight: undefined}).success).toStrictEqual(true)
  })

  it('it fails on missing property', () => {
    expect(typographyValue.safeParse({...validValue, fontSize: undefined}).success).toStrictEqual(false)
    expect(typographyValue.safeParse({...validValue, fontWeight: undefined}).success).toStrictEqual(false)
    expect(typographyValue.safeParse({...validValue, fontFamily: undefined}).success).toStrictEqual(false)
  })

  it('it fails on invalid fontSize values', () => {
    expect(typographyValue.safeParse({...validValue, fontSize: '100%'}).success).toStrictEqual(false)
    expect(typographyValue.safeParse({...validValue, fontSize: '100'}).success).toStrictEqual(false)
    expect(typographyValue.safeParse({...validValue, fontSize: ''}).success).toStrictEqual(false)
    expect(typographyValue.safeParse({...validValue, fontSize: 10}).success).toStrictEqual(false)
  })

  it('it fails on invalid lineHeight values', () => {
    expect(typographyValue.safeParse({...validValue, lineHeight: '100%'}).success).toStrictEqual(false)
    expect(typographyValue.safeParse({...validValue, lineHeight: '100'}).success).toStrictEqual(false)
    expect(typographyValue.safeParse({...validValue, lineHeight: ''}).success).toStrictEqual(false)
    expect(typographyValue.safeParse({...validValue, lineHeight: 10}).success).toStrictEqual(false)
  })

  it('it fails on invalid fontWeight values', () => {
    expect(typographyValue.safeParse({...validValue, fontWeight: '600'}).success).toStrictEqual(false)
    expect(typographyValue.safeParse({...validValue, fontWeight: 'bold'}).success).toStrictEqual(false)
    expect(typographyValue.safeParse({...validValue, fontWeight: ''}).success).toStrictEqual(false)
    expect(typographyValue.safeParse({...validValue, fontWeight: 10}).success).toStrictEqual(false)
  })

  it('it fails on invalid fontFamily values', () => {
    expect(typographyValue.safeParse({...validValue, fontFamily: ''}).success).toStrictEqual(false)
    expect(typographyValue.safeParse({...validValue, fontFamily: 10}).success).toStrictEqual(false)
  })
})
