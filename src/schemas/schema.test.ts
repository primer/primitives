import {designToken} from './designToken'

describe('Schema validation', () => {
  const validTokenJson = {
    parent: {
      color: {
        $value: '#000000',
        $type: 'color',
        $description: 'The color black',
      },
      duration: {
        $value: '1000ms',
        $type: 'duration',
        $description: '1000 milliseconds',
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
