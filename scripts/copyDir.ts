import {copyFromDir} from '~/src/utilities/copyFromDir.js'

const copyDir = async () => {
  const [from, to] = process.argv.slice(2, 4)
  const files = await copyFromDir(from, to)
  // eslint-disable-next-line no-console
  console.log(`\u001b[36;1m\u001b[1m${files.length} files copied from ${from} to ${to}\u001b[0m`)
}

await copyDir()
