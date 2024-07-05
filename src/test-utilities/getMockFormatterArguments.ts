import type {FormatterArguments} from 'style-dictionary/types/Format'
import {getMockDictionary} from './'

const defaultFormatterArguments: FormatFnArguments = {
  dictionary: getMockDictionary(),
  file: {
    destination: 'tokens.ts',
    options: {
      showFileHeader: false,
    },
  },
  options: {},
  platform: {},
}

export const getMockFormatterArguments = (overrides?: Partial<FormatterArguments>): FormatFnArguments => {
  return {
    ...defaultFormatterArguments,
    ...(overrides || {}),
  }
}
