import type {PlatformConfig} from 'style-dictionary/types'

const logMessage = (message: string, type: 'info' | 'warning' | 'error' = 'warning', config?: PlatformConfig) => {
  // early return if verbosity is silent
  if (config?.log?.verbosity === 'silent' && type !== 'error') {
    return
  }
  // early return if verbosity is default and type is info
  if (config?.log?.verbosity === 'default' && type === 'info') {
    return
  }
  // early return
  if ((config?.log?.warnings === 'disabled' || config?.log?.warnings === 'warn') && type === 'info') {
    return
  }
  // early return
  if (config?.log?.warnings === 'disabled' && type === 'warning') {
    return
  }
  if (type === 'warning') {
    // eslint-disable-next-line no-console
    return console.warn(message)
  }
  if (type === 'error') {
    // eslint-disable-next-line no-console
    return console.error(message)
  }
  // eslint-disable-next-line no-console
  console.log(message)
}

export const log = {
  info: (message: string, config?: PlatformConfig) => logMessage(message, 'info', config),
  warning: (message: string, config?: PlatformConfig) => logMessage(message, 'warning', config),
  error: (message: string, config?: PlatformConfig) => logMessage(message, 'error', config),
}
