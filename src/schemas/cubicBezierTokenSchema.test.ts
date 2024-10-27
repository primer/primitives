import {cubicBezierToken} from './cubicBezierToken.js'

describe('Schema: cubicBezier', () => {
  const validToken = {
    $value: [0, 0, 1, 1],
    $type: 'cubicBezier',
    $description: 'a cubicBezier token',
  }

  it('passes on valid cubicBezier values', () => {
    expect(cubicBezierToken.safeParse(validToken).success).toStrictEqual(true)
    expect(cubicBezierToken.safeParse({...validToken, $value: [0.2, 0.3, 0.85, 1]}).success).toStrictEqual(true)
  })

  it('fails on invalid cubicBezier values', () => {
    expect(cubicBezierToken.safeParse({...validToken, $value: ['1', 1, 0, 0]}).success).toStrictEqual(false)
    expect(cubicBezierToken.safeParse({...validToken, $value: [0, 1]}).success).toStrictEqual(false)
    expect(cubicBezierToken.safeParse({...validToken, $value: [0, 1, 1, 0, 0, 1]}).success).toStrictEqual(false)
    expect(cubicBezierToken.safeParse({...validToken, $value: 1}).success).toStrictEqual(false)
    expect(cubicBezierToken.safeParse({...validToken, $value: 'linear'}).success).toStrictEqual(false)
  })
})
