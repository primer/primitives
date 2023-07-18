export const joinFriendly = (array: string[]) => `"${array.slice(0, -1).join('", "')}" and "${array.slice(-1)}"`
