import fse = require('fs-extra')

const errorHandler = (err: Error): void => {
  // eslint-disable-next-line no-console
  console.error(err)
}
/**
 * copyFilesAndFolders
 * @description Copies file from copyFilesAndFolders array this is used to copy deprecated and removed values
 * @param filesAndFolders array of paths
 * @param source path
 * @param destination path
 * @returns promise
 */
export const copyFilesAndFolders = async (filesAndFolders: string[], source: string, destination: string) => {
  return Promise.all(
    filesAndFolders.map(fileOrFolder =>
      fse.copy(`${source}/${fileOrFolder}`, `${destination}/${fileOrFolder}`, errorHandler)
    )
  )
}
