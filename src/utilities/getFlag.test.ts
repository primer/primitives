import {getFlag} from './getFlag'

describe('Utilities: getFlag', () => {
  jest.replaceProperty(process, 'argv', [
    'ts-node',
    'src/utilities/getFlag.test.ts',
    '--outFile=test.json',
    '--silent',
    '-D',
  ])

  it('return null if flag is not found', () => {
    expect(getFlag('--format')).toStrictEqual(null)
  })

  it('return flag if flag has no value', () => {
    expect(getFlag('--silent')).toStrictEqual('--silent')
  })

  it('return value if flag has value', () => {
    expect(getFlag('--outFile')).toStrictEqual('test.json')
  })

  it('return value if flag param has no --', () => {
    expect(getFlag('outFile')).toStrictEqual('test.json')
  })

  it('allow other prefix', () => {
    expect(getFlag('D', '-')).toStrictEqual('-D')
  })
})
