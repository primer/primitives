import {designToken} from './designToken'

describe('Schema validation', () => {
  const validTokenJson = {
    parent: {
      color: {
        $value: '#000000',
        $type: 'color',
      },
    },
  }

  it('returns success on valid schema', () => {
    const parsedToken = designToken.safeParse(validTokenJson)
    expect(parsedToken.success).toStrictEqual(true)
  })

  it('returns success false on invalid schema', () => {
    const parsedToken = designToken.safeParse({
      color: {
        $value: '#000000',
        $type: 'colors',
      },
    })
    expect(parsedToken.success).toStrictEqual(false)
  })
})
