import {jsonToNestedValue} from './jsonToNestedValue'

describe('Utilities: jsonToNestedValue', () => {
  const obj = {
    parent: {
      subparent: {
        child1: {
          value: '#111',
          $type: 'color'
        },
        child2: {
          value: '#222',
          $type: 'color'
        }
      },
      otherSubparent: {
        text: 'hello',
        number: 42,
        noValue: {
          string: 'string',
          number: 12
        }
      }
    }
  }

  it('it returns only value property as value of object', () => {
    expect(jsonToNestedValue(obj.parent.subparent.child1)).toBe('#111')
    expect(jsonToNestedValue(obj['parent']['subparent'])).toStrictEqual({child1: '#111', child2: '#222'})
  })

  it('it returns only values if final child is no object', () => {
    const transformedObj = obj
    // @ts-expect-error: fake token for test causes error
    transformedObj['parent']['subparent'] = {child1: '#111', child2: '#222'}

    expect(jsonToNestedValue(obj)).toStrictEqual(transformedObj)
  })
})
