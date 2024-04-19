import {getMockToken} from '../test-utilities'
import {floatToPixel} from './floatToPixel'

describe('Transformer: floatToPixel', () => {
  it('transforms float to pixel', () => {
    const input = [
      getMockToken({
        value: 1.5,
        $extensions: {
          'org.primer.data': {
            fontSize: 16,
          },
        },
      }),
    ]
    const expectedOutput = ['24px']
    expect(input.map(item => floatToPixel.transformer(item, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms 0 to 0', () => {
    const input = [
      getMockToken({
        value: 0,
        $extensions: {
          'org.primer.data': {
            fontSize: 16,
          },
        },
      }),
      getMockToken({
        value: 0,
      }),
    ]
    const expectedOutput = [0, 0]
    expect(input.map(item => floatToPixel.transformer(item, {}))).toStrictEqual(expectedOutput)
  })

  it('ignore invalid', () => {
    const input = [
      getMockToken({
        value: '1.5',
        $extensions: {
          'org.primer.data': {
            fontSize: 16,
          },
        },
      }),
      getMockToken({
        value: 1.5,
      }),
      getMockToken({
        value: 2,
        $extensions: {
          'org.primer.data': {},
        },
      }),
    ]
    const expectedOutput = ['1.5', 1.5, 2]
    expect(input.map(item => floatToPixel.transformer(item, {}))).toStrictEqual(expectedOutput)
  })
})
