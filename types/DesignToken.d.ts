export type DesignTokenTypes = 'color' | 'dimension' | 'shadow' | 'fontFamily' | 'fontWeight' | 'typography'

export type GenericDesignTokenValue = string | number

export type GenericDesignTokenDefinition = {
  $value: GenericDesignTokenValue
  $type: DesignTokenTypes
  $description?: string
  deprecated?: string
}

export type ColorDesignTokenDefinition = GenericDesignTokenDefinition & {
  $value: string
  $type: 'color'
  alpha?: number
}

export type DesignTokenDefinition = ColorDesignTokenDefinition | GenericDesignTokenDefinition

export type DesignTokenGroup = {
  [name: string]: DesignTokenDefinition | DesignTokenGroup
}

export type DesignTokenJson = {[name: string]: DesignTokenGroup}
