export const joinFriendly = (array: string[], lastJoin = 'and') =>
  `${array.slice(0, -1).join(', ')} ${lastJoin} ${array.slice(-1)}`
