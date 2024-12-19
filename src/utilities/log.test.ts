import type {PlatformConfig} from 'style-dictionary/types'
import {log} from './log.js'

describe('Utilities: log', () => {
  const consoleLogSpy = vi.spyOn(console, 'log')
  const consoleWarnSpy = vi.spyOn(console, 'warn')
  const consoleErrorSpy = vi.spyOn(console, 'error')

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('logs correct type', () => {
    log.info('message.log')
    log.warning('message.warn')
    log.error('message.error')
    expect(consoleLogSpy).toHaveBeenLastCalledWith('message.log')
    expect(consoleWarnSpy).toHaveBeenLastCalledWith('message.warn')
    expect(consoleErrorSpy).toHaveBeenLastCalledWith('message.error')
  })

  it('only logs errors when verbosity silent', () => {
    const config = {
      log: {
        verbosity: 'silent',
      },
    } as PlatformConfig

    log.info('message.log', config)
    log.warning('message.warn', config)
    log.error('message.error', config)
    expect(consoleLogSpy).not.toHaveBeenLastCalledWith('message.log')
    expect(consoleWarnSpy).not.toHaveBeenLastCalledWith('message.warn')
    expect(consoleErrorSpy).toHaveBeenLastCalledWith('message.error')
  })

  it('only logs errors & warnings when verbosity silent', () => {
    const config = {
      log: {
        verbosity: 'default',
        warnings: 'warn',
      },
    } as PlatformConfig

    log.info('message.log', config)
    log.warning('message.warn', config)
    log.error('message.error', config)
    expect(consoleLogSpy).not.toHaveBeenLastCalledWith('message.log')
    expect(consoleWarnSpy).toHaveBeenLastCalledWith('message.warn')
    expect(consoleErrorSpy).toHaveBeenLastCalledWith('message.error')
  })

  it('only logs errors & warnings when verbosity silent', () => {
    const config = {
      log: {
        verbosity: 'default',
        warnings: 'disabled',
      },
    } as PlatformConfig

    log.info('message.log', config)
    log.warning('message.warn', config)
    log.error('message.error', config)
    expect(consoleLogSpy).not.toHaveBeenLastCalledWith('message.log')
    expect(consoleWarnSpy).not.toHaveBeenLastCalledWith('message.warn')
    expect(consoleErrorSpy).toHaveBeenLastCalledWith('message.error')
  })
})
