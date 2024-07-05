const props = {
  dtcg: {
    value: '$value',
    type: '$type',
    description: '$description',
  },
  legacy: {
    value: 'value',
    type: 'type',
    description: 'comment',
  },
} as const

export const getPropName = (prop: 'value' | 'type' | 'description', usesDtcg?: boolean) => {
  const type = usesDtcg ? 'dtcg' : 'legacy'

  return props[type][prop]
}
