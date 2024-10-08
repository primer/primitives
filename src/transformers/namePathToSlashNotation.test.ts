import {getMockToken} from '../test-utilities/index.js'
import {namePathToSlashNotation} from './namePathToSlashNotation.js'

describe('Transformer: namePathToSlashNotation', () => {
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
    const expectedOutput = ['path/to/token', 'PATH/tO/Token', 'path/toToken', 'pathtoToken']

    expect(input.map(item => namePathToSlashNotation.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('replaces spaces, `-`, `_` and `+` within path elements and joins with camelCase, but does not change the rest of the word', () => {
    const input = [
      getMockToken({
        name: 'tokenName',
        path: ['start', 'path to token'],
      }),
      getMockToken({
        name: 'tokenName',
        path: ['start', 'PATH_tO-Token'],
      }),
      getMockToken({
        name: 'tokenName',
        path: ['start', 'path+toToken'],
      }),
    ]
    const expectedOutput = ['start/path to token', 'start/PATH_tO-Token', 'start/path+toToken']
    expect(input.map(item => namePathToSlashNotation.transform(item, {}, {}))).toStrictEqual(expectedOutput)
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
    const expectedOutput = ['fgColor/accent', 'fgColor/muted']
    expect(input.map(item => namePathToSlashNotation.transform(item, {}, {}))).toStrictEqual(expectedOutput)
  })

  it('adds prefix to token name', () => {
    const platform = {
      prefix: 'PRIMER',
    }
    const input = getMockToken({
      name: 'tokenName',
      path: ['start', 'pathTo', 'token'],
    })
    const expectedOutput = 'PRIMER/start/pathTo/token'
    expect(namePathToSlashNotation.transform(input, platform, {})).toStrictEqual(expectedOutput)
  })
})
