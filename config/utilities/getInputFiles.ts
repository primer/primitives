import readdirp from 'readdirp'

export const getInputFiles = async (path: string, ignoreDirs: string[], options: {
    baseDir: string,
    functionalDir: string
  } = { baseDir: 'base', functionalDir: 'functional' }): Promise<{[baseOrFunctional: string]: { [tokenType: string]: [filename: string][] }}> => {
  return await readdirp.promise(`${path}`, {
    fileFilter: '*.json',
    directoryFilter: ignoreDirs.map(dir => `!${dir}`)
  }).then( files => {
    const output = {
      [options.baseDir]: {},
      [options.functionalDir]: {},
    }
    for (const filePath of files) {
      const pathArray: string[] = filePath.path.replace(`${path}/`, '').split('/')

      if (![options.baseDir, options.functionalDir].includes(<string>pathArray[0])) continue
      // @ts-ignore
      output[pathArray[0]][pathArray[1]] = [...(output[pathArray[0]]?.[pathArray[1]] || []), pathArray[2]]
    }
    return output
  })
  
}


