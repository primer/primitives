import {Worker} from 'worker_threads'
import {cpus} from 'os'
import {fileURLToPath, pathToFileURL} from 'url'
import path from 'path'
import {createRequire} from 'module'
import type {TokenBuildInput} from '../src/types/tokenBuildInput.js'
import type {ConfigGeneratorOptions} from '../src/types/styleDictionaryConfigGenerator.js'

const require = createRequire(import.meta.url)

interface WorkerResult {
  success: boolean
  errors: string[]
}

function chunkArray<T>(array: T[], chunkCount: number): T[][] {
  const chunks: T[][] = []
  const chunkSize = Math.ceil(array.length / chunkCount)
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize))
  }
  return chunks
}

export async function buildWithWorkers(
  themes: TokenBuildInput[],
  buildOptions: ConfigGeneratorOptions,
  buildType: 'internalCss' | 'functional',
): Promise<void> {
  const maxWorkers = Math.min(4, cpus().length)
  const chunks = chunkArray(themes, maxWorkers)

  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const workerPath = path.join(__dirname, 'buildWorker.ts')

  // Resolve tsx/esm loader path as file URL
  const tsxEsmPath = require.resolve('tsx/esm')
  const tsxEsmUrl = pathToFileURL(tsxEsmPath).href

  const workerPromises = chunks.map(chunk => {
    return new Promise<WorkerResult>((resolve, reject) => {
      const worker = new Worker(workerPath, {
        workerData: {
          themes: chunk,
          buildOptions,
          buildType,
        },
        execArgv: ['--import', tsxEsmUrl],
      })

      worker.on('message', (result: WorkerResult) => {
        resolve(result)
      })

      worker.on('error', err => {
        reject(err)
      })

      worker.on('exit', code => {
        if (code !== 0) {
          reject(new Error(`Worker stopped with exit code ${code}`))
        }
      })
    })
  })

  const results = await Promise.all(workerPromises)
  const allErrors = results.flatMap(r => r.errors)

  if (allErrors.length > 0) {
    console.error('Worker errors:', allErrors)
  }
}
