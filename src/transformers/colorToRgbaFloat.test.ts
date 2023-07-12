import {getMockToken} from '~/src/test-utilities'
import {colorToRgbaFloat} from './colorToRgbaFloat'

describe('Transformer: colorToRgbaFloat', () => {
  it('transforms `hex3`, `hex6`, and `hex8` tokens to rgb float value', () => {
    const input = [getMockToken({value: '#123'}), getMockToken({value: '#343434'}), getMockToken({value: '#34343466'})]
    const expectedOutput = [
      {
        r: 0.06666666666666667,
        g: 0.13333333333333333,
        b: 0.2,
        a: 1,
      },
      {
        r: 0.20392156862745098,
        g: 0.20392156862745098,
        b: 0.20392156862745098,
        a: 1,
      },
      {
        r: 0.20392156862745098,
        g: 0.20392156862745098,
        b: 0.20392156862745098,
        a: 0.4,
      },
    ]
    expect(input.map(item => colorToRgbaFloat.transformer(item, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms `rgb` and `rgba` to rgb float value', () => {
    const input = [getMockToken({value: 'rgb(100,200,255)'}), getMockToken({value: 'rgba(100,200,255, .4)'})]
    const expectedOutput = [
      {
        r: 0.39215686274509803,
        g: 0.7843137254901961,
        b: 1,
        a: 1,
      },
      {
        r: 0.39215686274509803,
        g: 0.7843137254901961,
        b: 1,
        a: 0.4,
      },
    ]
    expect(input.map(item => colorToRgbaFloat.transformer(item, {}))).toStrictEqual(expectedOutput)
  })

  it('transforms `color` tokens including alpha value', () => {
    expect(
      [
        getMockToken({value: '#343434', alpha: 0.4}),
        getMockToken({value: '#34343466', alpha: 0.9}),
        getMockToken({value: 'rgb(100,200,255)', alpha: 0.4}),
        getMockToken({value: 'rgba(100,200,255,0.8)', alpha: 0.4}),
      ].map(item => colorToRgbaFloat.transformer(item, {})),
    ).toStrictEqual([
      {
        r: 0.20392156862745098,
        g: 0.20392156862745098,
        b: 0.20392156862745098,
        a: 0.4,
      },
      {
        r: 0.20392156862745098,
        g: 0.20392156862745098,
        b: 0.20392156862745098,
        a: 0.9,
      },
      {
        r: 0.39215686274509803,
        g: 0.7843137254901961,
        b: 1,
        a: 0.4,
      },
      {
        r: 0.39215686274509803,
        g: 0.7843137254901961,
        b: 1,
        a: 0.4,
      },
    ])
  })

  it('it forwards `rgb float` values', () => {
    const input = [
      getMockToken({
        value: {
          r: 0.39215686274509803,
          g: 0.7843137254901961,
          b: 1,
          a: 1,
        },
      }),
      getMockToken({
        value: {
          r: 0.39215686274509803,
          g: 0.7843137254901961,
          b: 1,
          a: 0.4,
        },
      }),
    ]
    const expectedOutput = [
      {
        r: 0.39215686274509803,
        g: 0.7843137254901961,
        b: 1,
        a: 1,
      },
      {
        r: 0.39215686274509803,
        g: 0.7843137254901961,
        b: 1,
        a: 0.4,
      },
    ]
    expect(input.map(item => colorToRgbaFloat.transformer(item, {}))).toStrictEqual(expectedOutput)
  })
})
