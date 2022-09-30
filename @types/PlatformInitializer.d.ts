import StyleDictionary from 'style-dictionary'

export type PlatformInitializer = (outputFile: string, prefix: string, buildPath: string, options?: any) => StyleDictionary.Platform