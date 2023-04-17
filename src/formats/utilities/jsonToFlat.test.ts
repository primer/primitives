import {getMockToken} from '~/src/test-utilities'
import {jsonToFlat} from './jsonToFlat'

describe('Utilities: jsonToFlat', () => {
  const tokens = [
    getMockToken({
      value: '#111',
      $type: 'color',
      path: ['parent', 'subparent', 'child1'],
      name: 'parent-subparent-child1',
    }),
    getMockToken({
      value: '#222',
      $type: 'color',
      path: ['parent', 'subparent', 'child2'],
      name: 'parent-subparent-child2',
    }),
  ]

  it('it returns only value property as value of object if return Object is false', () => {
    expect(jsonToFlat(tokens, false)['parent-subparent-child1']).toBe('#111')
    expect(jsonToFlat(tokens, false)).toStrictEqual({
      'parent-subparent-child1': '#111',
      'parent-subparent-child2': '#222',
    })
  })

  it('it returns objects as value of object if return Object is true', () => {
    expect(jsonToFlat(tokens, true)['parent-subparent-child1']).toEqual({
      value: '#111',
      $type: 'color',
      path: ['parent', 'subparent', 'child1'],
      name: 'parent-subparent-child1',
      attributes: {},
      filePath: 'file.json',
      isSource: true,
      original: {
        attributes: {},
        value: 'originalValue',
      },
    })
  })

  it('it returns only value property as value of object if return Object is undefined', () => {
    expect(jsonToFlat(tokens, undefined)['parent-subparent-child1']).toBe('#111')
  })
})
