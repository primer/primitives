export const joinFriendly = (array: string[], lastJoin = 'and') =>
  array.length > 1 ? `${array.slice(0, -1).join(', ')} ${lastJoin} ${array.slice(-1)}` : `${array[0]}`
