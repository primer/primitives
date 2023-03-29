import {getMockToken} from '~/src/test-utilities'
import {invalidTokenValueError} from './invalidTokenError'

describe('Utilities: invalidTokenValueError', () => {
  it('it throws with token', () => {
    expect(() => {
      throw new invalidTokenValueError(
        getMockToken({
          value: '42px',
        }),
      )
    }).toThrow(invalidTokenValueError)
  })

  it('it throws TypeError if no token is provided', () => {
    expect(() => {
      // @ts-expect-error due to testing wrong input
      throw new invalidTokenValueError('42px')
    }).toThrow(TypeError)
  })
})
