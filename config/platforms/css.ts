import StyleDictionary from 'style-dictionary'
import { PlatformInitializer } from '../../@types/PlatformInitializer'

export const platformCss: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
  prefix: prefix,
  buildPath: `${buildPath}/css/`,
  transformGroup: 'primer/css',
  files: [
    // {
    //   destination: `${buildPath.dirs.color}/${outputFile}`,
    //   format: `css/variables`,
    //   filter: 'isColor',
    //   options: {
    //     outputReferences: false,
    //   }
    // },
    // {
    //   destination: `${buildPath.dirs.size}/${outputFile}`,
    //   format: `css/variables`,
    //   filter: 'isDimension',
    //   options: {
    //     outputReferences: true,
    //   }
    // },
    {
      destination: `${outputFile}`,
      format: `css/variables`,
      filter: 'isSource',
      options: {
        outputReferences: false,
      }
    }
  ]
})
