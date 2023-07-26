import {joinFriendly} from './joinFriendly'

describe('Utilities: joinFriendly', () => {
  it('it joins items with and for last item', () => {
    expect(joinFriendly(['one', 'two', 'three'])).toStrictEqual('one, two and three')
    expect(joinFriendly(['one', 'two'])).toStrictEqual('one and two')
  })
  it('it joins items with or for last item', () => {
    expect(joinFriendly(['one', 'two', 'three'], 'or')).toStrictEqual('one, two or three')
  })

  it('it joins items with and for last item', () => {
    expect(joinFriendly(['one', 'two', 'three'], undefined)).toStrictEqual('one, two and three')
  })
})
