import {getMockToken} from '~/src/test-utilities'
import {isFile} from './isFile'

describe('Filter: isFile', () => {
  it('returns true if token.filePath is in provided array of file paths', () => {
    expect(isFile(getMockToken({filePath: 'src/tokens.json'}), ['src/tokens.json'])).toStrictEqual(true)
  })

  it('returns false if token.filePath is NOT in provided array of file paths', () => {
    expect(isFile(getMockToken({filePath: 'src/notTokens.json'}), ['src/tokens.json'])).toStrictEqual(false)
  })

  it('returns false if token.filePath is undefined', () => {
    expect(isFile(getMockToken({filePath: undefined}), ['src/tokens.json'])).toStrictEqual(false)
  })

  it('returns false if array of file paths is empty', () => {
    expect(isFile(getMockToken({filePath: 'src/tokens.json'}), [])).toStrictEqual(false)
  })

  it('returns false if token.filePath is undefined and array is empty', () => {
    expect(isFile(getMockToken({filePath: undefined}), [])).toStrictEqual(false)
  })

  it('returns false if file path array is undefined', () => {
    // @ts-expect-error: path is missing
    expect(isFile(getMockToken({path: 'src/tokens.json'}))).toStrictEqual(false)
  })

  it('returns false if token.filePath & file path array is undefined', () => {
    // @ts-expect-error: path is missing
    expect(isFile(getMockToken({filePath: undefined}))).toStrictEqual(false)
  })
})
