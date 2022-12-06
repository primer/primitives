/* istanbul ignore file */
import {copyFile, readdir, mkdir} from 'fs/promises'
/**
 * copyFromDir
 * @description Copies all files from source folder to destination
 * @param source path
 * @param destination path
 * @returns promise
 */
export const copyFromDir = async (source: string, destination: string) => {
  // adjust trailing slash
  const src = `${source.replace(/\/$/, '')}`
  const dest = `${destination.replace(/\/$/, '')}`
  // create dest if it does not exists
  await mkdir(dest, {recursive: true})
  // read files from source
  const files = await readdir(src)
  for (const file of files) {
    copyFile(`${src}/${file}`, `${dest}/${file}`)
  }
}
