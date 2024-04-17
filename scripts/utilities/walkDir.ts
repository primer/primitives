import fs from 'fs'
import path from 'path'

/**
 * Recursively walk a directory and return all file paths
 * @param dir directory to search
 * @param ignoreDirs directories to ignore
 * @returns array of file paths
 */
export const walkDir = (dir: string, ignoreDirs: string[] = []): string[] => {
  const files = fs
    .readdirSync(dir, {withFileTypes: true})
    .flatMap(file => {
      if (!file.isDirectory()) return path.join(dir, file.name)
      if (!ignoreDirs.includes(file.name)) return walkDir(path.join(dir, file.name), ignoreDirs)
    })
    .filter(Boolean) as string[]

  return files.flat()
}
