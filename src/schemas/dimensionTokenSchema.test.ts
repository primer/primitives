import {dimensionToken} from './dimensionToken.js'

describe('Schema: dimensionToken', () => {
  const validTokenLegacy = {
    $value: '1px',
    $type: 'dimension',
    $description: 'a dimension token',
  }

  const validTokenNew = {
    $value: {value: 1, unit: 'px'},
    $type: 'dimension',
    $description: 'a dimension token',
  }

  it('passes on valid values (legacy string format)', () => {
    expect(dimensionToken.safeParse(validTokenLegacy).success).toStrictEqual(true)
    expect(dimensionToken.safeParse({...validTokenLegacy, $value: '1em'}).success).toStrictEqual(true)
    expect(dimensionToken.safeParse({...validTokenLegacy, $value: '1rem'}).success).toStrictEqual(true)
  })

  it('passes on valid values (new object format)', () => {
    expect(dimensionToken.safeParse(validTokenNew).success).toStrictEqual(true)
    expect(dimensionToken.safeParse({...validTokenNew, $value: {value: 1, unit: 'em'}}).success).toStrictEqual(true)
    expect(dimensionToken.safeParse({...validTokenNew, $value: {value: 1, unit: 'rem'}}).success).toStrictEqual(true)
  })

  it('fails on invalid type', () => {
    expect(dimensionToken.safeParse({...validTokenLegacy, $type: 'stroke'}).success).toStrictEqual(false)
  })

  it('fails on invalid value', () => {
    expect(dimensionToken.safeParse({...validTokenLegacy, $value: 'wrong'}).success).toStrictEqual(false)
    expect(dimensionToken.safeParse({...validTokenLegacy, $value: '1%'}).success).toStrictEqual(false)
    expect(dimensionToken.safeParse({...validTokenLegacy, $value: undefined}).success).toStrictEqual(false)
    expect(dimensionToken.safeParse({...validTokenLegacy, $value: ''}).success).toStrictEqual(false)
    expect(dimensionToken.safeParse({...validTokenLegacy, $value: false}).success).toStrictEqual(false)
    expect(dimensionToken.safeParse({...validTokenLegacy, $value: 1}).success).toStrictEqual(false)
    expect(dimensionToken.safeParse({...validTokenNew, $value: {value: 1, unit: '%'}}).success).toStrictEqual(false)
    expect(dimensionToken.safeParse({...validTokenNew, $value: {value: 'wrong', unit: 'px'}}).success).toStrictEqual(false)
  })
})
