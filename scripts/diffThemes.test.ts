import {diffThemes} from './diffThemes.js'

describe('diffThemes', () => {
  const themesArray: Array<[string, string[]]> = [
    ['light', ['color', 'color.text']],
    ['dark', ['color', 'color.text']],
  ]

  it('Throws error if mainTheme name does not exist', () => {
    expect(() => diffThemes('invalid', themesArray)).toThrow()
    expect(() => diffThemes('light', [])).toThrow()
  })

  it('Returns empty string if only mainTheme in array', () => {
    expect(diffThemes('light', [['light', []]])).toEqual('')
  })

  it('Outputs message for missing tokens', () => {
    const withMissing = JSON.parse(JSON.stringify(themesArray))
    withMissing[0][1].push('color.text.success')
    const returnString =
      '\n:::: dark vs light ::::\n\n' +
      '1 tokens missing in dark:\n' +
      '  - color.text.success\n\n' +
      '0 tokens added in dark'
    expect(diffThemes('light', withMissing)).toEqual(returnString)
  })

  it('Outputs message for additional tokens', () => {
    const withAdditional = JSON.parse(JSON.stringify(themesArray))
    withAdditional[1][1].push('color.text.success')
    const returnString =
      '\n:::: dark vs light ::::\n\n' +
      '0 tokens missing in dark:\n\n' +
      '1 tokens added in dark\n' +
      '  - color.text.success'
    expect(diffThemes('light', withAdditional)).toEqual(returnString)
  })

  it('Outputs message if no diff', () => {
    const returnString = '\n:::: dark vs light ::::\n\n0 tokens missing in dark:\n\n0 tokens added in dark'
    expect(diffThemes('light', themesArray)).toEqual(returnString)
  })
})
