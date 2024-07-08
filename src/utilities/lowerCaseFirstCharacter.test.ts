import {lowerCaseFirstCharacter} from './lowerCaseFirstCharacter.js'

describe('Utilities: lowerCaseFirstCharacter', () => {
  it('it transforms all lowercase word', () => {
    expect(lowerCaseFirstCharacter('primer')).toStrictEqual('primer')
    expect(lowerCaseFirstCharacter('Primer')).toStrictEqual('primer')
  })

  it('it transforms all lowercase sentence (words with spaces)', () => {
    expect(lowerCaseFirstCharacter('Primer design token')).toStrictEqual('primer design token')
  })

  it('it preserves casing for words that are already all uppercased', () => {
    expect(lowerCaseFirstCharacter('PRIMER')).toStrictEqual('pRIMER')
  })

  it('it transforms all camelCase word', () => {
    expect(lowerCaseFirstCharacter('CamelCase')).toStrictEqual('camelCase')
  })
})
