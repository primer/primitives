import {toPascalCase} from './toPascalCase'

describe('Utilities: toPascalCase', () => {
  it('it transforms all lowercase word', () => {
    expect(toPascalCase('primer')).toStrictEqual('Primer')
  })

  it('it transforms all lowercase sentence (words with spaces)', () => {
    expect(toPascalCase('primer design token')).toStrictEqual('PrimerDesignToken')
  })

  it('it transforms all words with special chars', () => {
    expect(toPascalCase('primer_design-token+edition')).toStrictEqual('PrimerDesignTokenEdition')
  })

  it('it preserves casing for words that are already all uppercased', () => {
    expect(toPascalCase('PRIMER')).toStrictEqual('PRIMER')
  })

  it('it transforms all camelCase word', () => {
    expect(toPascalCase('camelCase')).toStrictEqual('CamelCase')
  })

  it('it transforms array of words', () => {
    expect(toPascalCase(['primer', 'design', 'token'])).toStrictEqual('PrimerDesignToken')
  })
})
