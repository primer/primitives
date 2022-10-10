const fse = require('fs-extra')
/**
 * copyFilesAndFolders
 * @description Copies file from copyFilesAndFolders array this is used to copy deprecated and removed values
 * @param filesAndFolders array of paths
 * @param source path 
 * @param destination path 
 * @returns promise
 */
export const copyFilesAndFolders = async (filesAndFolders: string[], source: string, destination: string) => {
  return Promise.all(filesAndFolders.map(
      fileOrFolder => fse.copy(`${source}/${fileOrFolder}`, `${destination}/${fileOrFolder}`,
        (err: string) => {
          if (err) return console.error(err)
        }
      )
    )
  )
}