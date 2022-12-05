/**
 * @description converts tokens to type and returns array with used type
 * @param tree object
 * @param callback function to be run on valid items
 * @param validItem function to test if a node is a validItem to be transformed
 * @returns object
 */
export const treeWalker = (
  tree: unknown,
  callback: <T>(argument: T) => unknown,
  isValidItem: (argument: unknown) => boolean,
): unknown => {
  // is a valid item -> pass through callback
  if (isValidItem(tree)) {
    return callback(tree)
  }
  // is non-object value -> ignore
  if (typeof tree !== 'object' || tree === null) {
    return
  }
  // is obj -> continue
  const nextObj: Record<string, unknown> = {}
  for (const [prop, value] of Object.entries(tree) as [prop: string, value: unknown][]) {
    nextObj[prop] = treeWalker(value, callback, isValidItem)
  }
  return nextObj
}
