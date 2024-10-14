import type {TransformedToken} from 'style-dictionary/types'
import {getMockToken} from '../test-utilities/index.js'
import {isSource} from './isSource.js'

describe('Filter: isSource', () => {
  it('Returns true if isSource property is true', () => {
    expect(isSource(getMockToken({isSource: true}))).toStrictEqual(true)
  })

  it('Returns false if isSource property is falsy value', () => {
    expect(isSource(getMockToken({isSource: false}))).toStrictEqual(false)
    expect(isSource(getMockToken({isSource: null}))).toStrictEqual(false)
    expect(isSource(getMockToken({isSource: undefined}))).toStrictEqual(false)
  })

  it('Returns false if isSource property is truthy non-boolean value', () => {
    expect(isSource(getMockToken({isSource: 'pumpkin'}))).toStrictEqual(false)
    expect(isSource(getMockToken({isSource: 1}))).toStrictEqual(false)
  })

  it('Returns false if no isSource property exists', () => {
    expect(isSource({value: 'pumpkin'} as TransformedToken)).toStrictEqual(false)
  })

  it('Usage as a filter function', () => {
    const inputArray = [
      getMockToken({
        value: 'red is source',
        isSource: true,
      }),
      getMockToken({
        value: 'blue is not source',
        isSource: false,
      }),
      {
        value: 'yellow is not source',
      },
    ] as TransformedToken[]

    const expectedOutput = inputArray.filter(item => item.isSource === true)

    expect(inputArray.filter(isSource)).toStrictEqual(expectedOutput)
  })
})
