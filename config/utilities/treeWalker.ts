/**
 * @description converts tokens to type and returns array with used type
 * @param tree object
 * @param callback function to be run on valid items
 * @param validItem function to test if a node is a validItem to be transformed
 * @returns object
 */
export const treeWalker = (
  tree: Record<string, unknown>,
  // TODO: FIX typescript issues
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  callback,
  validItem: (item: Record<string, unknown>) => boolean
): unknown => {
  // is a valid item -> pass through callback
  if (validItem(tree)) {
    return callback(tree)
  }
  // is non-object value -> ignore
  if (typeof tree !== 'object') return
  // is obj -> continue
  const nextObj = {}
  for (const [prop, value] of Object.entries(tree) as [prop: string, value: unknown][]) {
    // TODO: FIX typescript issues
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    nextObj[prop] = treeWalker(value, callback, validItem)
  }
  return nextObj
}
