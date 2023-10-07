import {borderToken, borderValue} from './borderToken'

const validBorderValue = {
  color: '#333',
  style: 'solid',
  width: '1px',
}

describe('Schema: borderValue', () => {
  it('passes on valid values', () => {
    expect(borderValue.safeParse(validBorderValue).success).toStrictEqual(true)
  })

  it('passes on valid stroke values', () => {
    expect(borderValue.safeParse({...validBorderValue, style: 'solid'}).success).toStrictEqual(true)
    expect(borderValue.safeParse({...validBorderValue, style: 'dashed'}).success).toStrictEqual(true)
    expect(borderValue.safeParse({...validBorderValue, style: 'dotted'}).success).toStrictEqual(true)
    expect(borderValue.safeParse({...validBorderValue, style: 'double'}).success).toStrictEqual(true)
    expect(borderValue.safeParse({...validBorderValue, style: 'groove'}).success).toStrictEqual(true)
    expect(borderValue.safeParse({...validBorderValue, style: 'ridge'}).success).toStrictEqual(true)
    expect(borderValue.safeParse({...validBorderValue, style: 'outset'}).success).toStrictEqual(true)
    expect(borderValue.safeParse({...validBorderValue, style: 'inset'}).success).toStrictEqual(true)
  })

  it('fails on invalid values', () => {
    expect(borderValue.safeParse({...validBorderValue, style: 'none'}).success).toStrictEqual(false)
    expect(borderValue.safeParse({...validBorderValue, color: 'none'}).success).toStrictEqual(false)
    expect(borderValue.safeParse({...validBorderValue, width: '1%'}).success).toStrictEqual(false)
    expect(borderValue.safeParse({...validBorderValue, width: '1vw'}).success).toStrictEqual(false)
  })

  it('fails on missing values', () => {
    expect(borderValue.safeParse({...validBorderValue, style: undefined}).success).toStrictEqual(false)
    expect(borderValue.safeParse({...validBorderValue, color: undefined}).success).toStrictEqual(false)
    expect(borderValue.safeParse({...validBorderValue, width: undefined}).success).toStrictEqual(false)
  })
})

describe('Schema: borderToken', () => {
  const validBorderToken = {
    $value: validBorderValue,
    $type: 'border',
    $description: 'a border token',
  }

  it('passes on valid values', () => {
    expect(borderToken.safeParse(validBorderToken).success).toStrictEqual(true)
  })

  it('fails on invalid type', () => {
    expect(borderToken.safeParse({...validBorderToken, $type: 'stroke'}).success).toStrictEqual(false)
  })
})
