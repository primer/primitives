import {getMockToken} from '~/src/test-utilities'
import {invalidTokenError} from './invalidTokenError'

describe('Utilities: invalidTokenError', () => {
  it('it throws with token', () => {
    expect(() => {
      throw new invalidTokenError(
        getMockToken({
          value: '42px',
        }),
      )
    }).toThrow(invalidTokenError)
  })

  it('it throws TypeError if no token is provided', () => {
    expect(() => {
      // @ts-expect-error due to testing wrong input
      throw new invalidTokenError('42px')
    }).toThrow(TypeError)
  })
})
