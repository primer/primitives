import {fontWeightValue} from './fontWeightValue'

describe('Schema: fontWeightValue', () => {
  const allowed = [100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

  it('parses valid value', () => {
    for (const weight of allowed) {
      expect(fontWeightValue.safeParse(weight).success).toStrictEqual(true)
    }
  })

  it('fails on invalid values', () => {
    expect(fontWeightValue.safeParse(1200).success).toStrictEqual(false)
    expect(fontWeightValue.safeParse('100').success).toStrictEqual(false)
    expect(fontWeightValue.safeParse(false).success).toStrictEqual(false)
  })
})
