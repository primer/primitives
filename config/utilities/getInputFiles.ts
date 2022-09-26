import readdirp from 'readdirp'

export type fileInfo = {
  // filename without extensions
  basename: string,
  // type dir: like size or typography
  dir: string,
  // full path to file
  path: string
}

export const getInputFiles = async (path: string, ignoreDirs: string[], options: {
    baseDir: string,
    functionalDir: string
  } = { baseDir: 'base', functionalDir: 'functional' }): Promise<{[baseOrFunctional: string]: fileInfo[]}> => {
  return await readdirp.promise(`${path}`, {
    fileFilter: '*.json',
    directoryFilter: ignoreDirs.map(dir => `!${dir}`)
  }).then( files => {
    //
    const output = {
      [options.baseDir]: <fileInfo[]>[],
      [options.functionalDir]: <fileInfo[]>[],
    }

    for (const file of files) {
      // split path into array
      const pathArray: string[] = file.path.split('/')
      // skip if not in base or functional
      if (![options.baseDir, options.functionalDir].includes(<string>pathArray[0])) continue
      // build file info object
      const fileInfo: fileInfo = {
        basename: pathArray[2].split('.')[0],
        dir: pathArray[1],
        path: `${path}/${file.path}`
      }
      // attach file object to array
      output[pathArray[0]].push(fileInfo)
    }
    return output
  })
  
}


