const fse = require('fs-extra')
/**
 * copyFilesAndFolders
 * @description Copies file from copyFilesAndFolders array this is used to copy deprecated and removed values
 * @param copyArray 
 * @returns promise
 */
export const copyFilesAndFolders = async (copyArray: [filesOrFolders: string[], source: string, destination: string][]) => {
  return Promise.all(copyArray.map(([filesAndFolders, source, dest]) => {
    return filesAndFolders.map(
      fileOrFolder => fse.copy(`${source}/${fileOrFolder}`, `${dest}/${fileOrFolder}`,
        (err: string) => {
          if (err) return console.error(err)
        }
      )
    )
  }))
}