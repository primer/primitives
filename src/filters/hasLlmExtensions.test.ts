import type {TransformedToken} from 'style-dictionary/types'
import {getMockToken} from '../test-utilities/index.js'
import {hasLlmExtensions} from './hasLlmExtensions.js'

describe('Filter: hasLlmExtensions', () => {
  it('Returns true if token has org.primer.llm in $extensions', () => {
    expect(
      hasLlmExtensions(
        getMockToken({
          $extensions: {
            'org.primer.llm': {
              usage: ['button'],
              rules: 'Use for buttons',
            },
          },
        }),
      ),
    ).toStrictEqual(true)
  })

  it('Returns true if org.primer.llm is empty object', () => {
    expect(
      hasLlmExtensions(
        getMockToken({
          $extensions: {
            'org.primer.llm': {},
          },
        }),
      ),
    ).toStrictEqual(true)
  })

  it('Returns true if org.primer.llm exists alongside other extensions', () => {
    expect(
      hasLlmExtensions(
        getMockToken({
          $extensions: {
            'org.primer.figma': {collection: 'mode'},
            'org.primer.llm': {usage: ['card']},
          },
        }),
      ),
    ).toStrictEqual(true)
  })

  it('Returns false if $extensions is undefined', () => {
    expect(hasLlmExtensions(getMockToken({$extensions: undefined}))).toStrictEqual(false)
  })

  it('Returns false if $extensions does not contain org.primer.llm', () => {
    expect(
      hasLlmExtensions(
        getMockToken({
          $extensions: {
            'org.primer.figma': {collection: 'mode'},
          },
        }),
      ),
    ).toStrictEqual(false)
  })

  it('Returns false if $extensions is not an object', () => {
    expect(hasLlmExtensions(getMockToken({$extensions: 'string'}))).toStrictEqual(false)
    expect(hasLlmExtensions(getMockToken({$extensions: 123}))).toStrictEqual(false)
    expect(hasLlmExtensions(getMockToken({$extensions: null}))).toStrictEqual(false)
  })

  it('Returns false if no $extensions property exists', () => {
    expect(hasLlmExtensions({value: 'test'} as TransformedToken)).toStrictEqual(false)
  })

  it('Usage as a filter function', () => {
    const inputArray = [
      getMockToken({
        name: 'with-llm',
        $extensions: {'org.primer.llm': {usage: ['button']}},
      }),
      getMockToken({
        name: 'without-llm',
        $extensions: {'org.primer.figma': {}},
      }),
      getMockToken({
        name: 'no-extensions',
      }),
    ] as TransformedToken[]

    const expectedOutput = [inputArray[0]]

    expect(inputArray.filter(hasLlmExtensions)).toStrictEqual(expectedOutput)
  })
})
