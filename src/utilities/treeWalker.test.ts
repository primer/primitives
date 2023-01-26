import {treeWalker} from './treeWalker'

describe('Utilities: treeWalker', () => {
  const isValidItem = (item: unknown) => {
    return typeof item === 'object' && item !== null && 'value' in item
  }

  const callback = (_item: unknown) => {
    return 'validItem'
  }

  it('returns undefined if item is not valid', () => {
    const tree = {
      invalidItem: 'pumpkin',
      subItem: {
        invalidSubitem: 'squash',
      },
    }

    const expectedOutput = {
      invalidItem: undefined,
      subItem: {
        invalidSubitem: undefined,
      },
    }

    expect(treeWalker(tree, callback, isValidItem)).toStrictEqual(expectedOutput)
  })

  it('returns callback return value if item is valid', () => {
    const tree = {
      validItem: {
        value: 'pumpkin',
      },
      subItem: {
        validSubitem: {
          value: 'squash',
        },
      },
    }

    const expectedOutput = {
      validItem: 'validItem',
      subItem: {
        validSubitem: 'validItem',
      },
    }

    expect(treeWalker(tree, callback, isValidItem)).toStrictEqual(expectedOutput)
  })
})
