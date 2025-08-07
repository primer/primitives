export const asArray = (item: unknown) => (Array.isArray(item) ? item : [item]).filter(Boolean)
