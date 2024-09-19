import type {FormatterArguments} from 'style-dictionary/types/Format'
import {getMockDictionary} from './getMockDictionary.js'

const defaultFormatterArguments: FormatFnArguments = {
  dictionary: getMockDictionary(),
  file: {
    destination: 'tokens.ts',
    options: {
      showFileHeader: false,
    },
  },
  options: {
    usesDtcg: true,
  },
  platform: {},
}

export const getMockFormatterArguments = (overrides?: Partial<FormatterArguments>): FormatFnArguments => {
  return {
    ...defaultFormatterArguments,
    ...(overrides || {}),
  }
}
