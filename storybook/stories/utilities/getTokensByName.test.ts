import {getMockToken} from '~/src/test-utilities'
import {getTokensByName} from './getTokensByName'

getTokensByName
describe('getTokensByName', () => {
  const tokens = {
    'control-small': getMockToken({
      name: 'control-small',
      value: '0.5rem',
    }),
    'control-large': getMockToken({
      name: 'control-large',
      value: '1rem',
    }),
    controlStack: getMockToken({
      name: 'controlStack',
      value: '2rem',
    }),
  }

  it('gets token by full name', () => {
    const result = getTokensByName(tokens, 'control-small')
    //
    expect(result.length).toStrictEqual(1)
    expect(result[0].name).toStrictEqual('control-small')
    expect(result[0].value).toStrictEqual('0.5rem')
  })

  it('gets tokens starting with control', () => {
    const result = getTokensByName(tokens, 'control')
    //
    expect(result.length).toStrictEqual(2)
    expect(result[0].name).toStrictEqual('control-small')
    expect(result[1].name).toStrictEqual('control-large')
  })

  it('gets tokens starting with control-', () => {
    const result = getTokensByName(tokens, 'control-')
    //
    expect(result.length).toStrictEqual(2)
    expect(result[0].name).toStrictEqual('control-small')
    expect(result[1].name).toStrictEqual('control-large')
  })
})
