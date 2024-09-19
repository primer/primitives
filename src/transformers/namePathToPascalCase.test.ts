import {getMockToken} from '../test-utilities/index.js'
import {namePathToPascalCase} from './namePathToPascalCase.js'

describe('Transformer: namePathToPascalCase', () => {
  it('converts path elements to dot.notation and ignores name proprty', () => {
    const input = [
      getMockToken({
        name: 'tokenName',
        path: ['path', 'to', 'token'],
      }),
      getMockToken({
        name: 'tokenName',
        path: ['PATH', 'tO', 'Token'],
      }),
      getMockToken({
        name: 'tokenName',
        path: ['path', 'toToken'],
      }),
      getMockToken({
        name: 'tokenName',
        path: ['pathtoToken'],
      }),
    ]
    const expectedOutput = ['PathToToken', 'PATHTOToken', 'PathToToken', 'PathtoToken']

    expect(input.map(item => namePathToPascalCase.transformer(item, {}))).toStrictEqual(expectedOutput)
  })

  it('removes `@`, so we can use it for the default hack', () => {
    const input = [
      getMockToken({
        name: 'tokenName',
        path: ['fgColor', 'accent', '@'],
      }),
      getMockToken({
        name: 'tokenName',
        path: ['fgColor', '@', 'muted'],
      }),
    ]
    const expectedOutput = ['FgColorAccent', 'FgColorMuted']
    expect(input.map(item => namePathToPascalCase.transformer(item, {}))).toStrictEqual(expectedOutput)
  })

  it('adds prefix to token name', () => {
    const platform = {
      prefix: 'PRIMER',
    }
    const input = getMockToken({
      name: 'tokenName',
      path: ['start', 'pathTo', 'token'],
    })
    const expectedOutput = 'PRIMERStartPathToToken'
    expect(namePathToPascalCase.transformer(input, platform)).toStrictEqual(expectedOutput)
  })
})
