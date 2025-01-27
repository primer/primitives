import {getMockDictionary} from '../test-utilities/getMockDictionary.js'
import {themeOverrides} from './themeOverrides.js'
import {getMockToken} from '../test-utilities/getMockToken.js'

describe('Preprocessor: themeOverrides', () => {
  it('works with default settings', () => {
    const dictionary = getMockDictionary({
      valueOverride: getMockToken({
        name: 'red',
        description: 'This is a description',
        $value: 'transformedValue',
        alpha: 0.6,
        path: ['tokens', 'subgroup', 'red'],
        $extensions: {
          'org.primer.overrides': {
            dark: 'darkValue',
          },
        },
      }),
      objectOverride: getMockToken({
        name: 'red',
        description: 'This is a description',
        $value: 'transformedValue',
        path: ['tokens', 'subgroup', 'red'],
        $extensions: {
          'org.primer.overrides': {
            dark: {
              $value: 'darkValue',
              description: 'DarkMode description',
            },
          },
        },
      }),
      alphaOnlyOverride: getMockToken({
        name: 'red',
        description: 'This is a description',
        $value: 'transformedValue',
        alpha: 0.6,
        path: ['tokens', 'subgroup', 'red'],
        $extensions: {
          'org.primer.overrides': {
            dark: {
              alpha: 0.75,
            },
          },
        },
      }),
    })

    const resultDictionary = getMockDictionary({
      valueOverride: getMockToken({
        name: 'red',
        description: 'This is a description',
        $value: 'darkValue',
        alpha: 0.6,
        path: ['tokens', 'subgroup', 'red'],
        $extensions: {
          'org.primer.overrides': {
            dark: 'darkValue',
          },
        },
      }),
      objectOverride: getMockToken({
        name: 'red',
        description: 'DarkMode description',
        $value: 'darkValue',
        path: ['tokens', 'subgroup', 'red'],
        $extensions: {
          'org.primer.overrides': {
            dark: {
              $value: 'darkValue',
              description: 'DarkMode description',
            },
          },
        },
      }),
      alphaOnlyOverride: getMockToken({
        name: 'red',
        description: 'This is a description',
        $value: 'transformedValue',
        alpha: 0.75,
        path: ['tokens', 'subgroup', 'red'],
        $extensions: {
          'org.primer.overrides': {
            dark: {
              alpha: 0.75,
            },
          },
        },
      }),
    })

    expect(themeOverrides.preprocessor(dictionary.tokens, {})).toStrictEqual(dictionary.tokens)
    expect(
      themeOverrides.preprocessor(dictionary.tokens, {
        options: {themeOverrides: {theme: 'dark'}},
      }),
    ).toStrictEqual(resultDictionary.tokens)
  })

  it('works with custom configuration', () => {
    const dictionary = getMockDictionary({
      valueOverride: getMockToken({
        name: 'red',
        description: 'This is a description',
        value: 'transformedValue',
        path: ['tokens', 'subgroup', 'red'],
        $extensions: {
          theme: {
            dark: 'darkValue',
          },
        },
      }),
      objectOverride: getMockToken({
        name: 'red',
        description: 'This is a description',
        value: 'transformedValue',
        path: ['tokens', 'subgroup', 'red'],
        $extensions: {
          theme: {
            dark: {
              value: 'darkValue',
              description: 'DarkMode description',
            },
          },
        },
      }),
    })

    const resultDictionary = getMockDictionary({
      valueOverride: getMockToken({
        name: 'red',
        description: 'This is a description',
        value: 'darkValue',
        path: ['tokens', 'subgroup', 'red'],
        $extensions: {
          theme: {
            dark: 'darkValue',
          },
        },
      }),
      objectOverride: getMockToken({
        name: 'red',
        description: 'DarkMode description',
        value: 'darkValue',
        path: ['tokens', 'subgroup', 'red'],
        $extensions: {
          theme: {
            dark: {
              value: 'darkValue',
              description: 'DarkMode description',
            },
          },
        },
      }),
    })

    expect(
      themeOverrides.preprocessor(dictionary.tokens, {
        themeOverrides: {
          valueProp: 'value',
          extensionProp: 'theme',
        },
      }),
    ).toStrictEqual(dictionary.tokens)
    expect(
      themeOverrides.preprocessor(dictionary.tokens, {
        options: {themeOverrides: {theme: 'dark', valueProp: 'value', extensionProp: 'theme'}},
      }),
    ).toStrictEqual(resultDictionary.tokens)
  })

  it('works with fallback theme', () => {
    const dictionary = getMockDictionary({
      valueOverride: getMockToken({
        name: 'red',
        description: 'This is a description',
        $value: 'transformedValue',
        path: ['tokens', 'subgroup', 'red'],
        $extensions: {
          'org.primer.overrides': {
            dark: 'darkValue',
          },
        },
      }),
      objectOverride: getMockToken({
        name: 'red',
        description: 'This is a description',
        $value: 'transformedValue',
        path: ['tokens', 'subgroup', 'red'],
        $extensions: {
          'org.primer.overrides': {
            dark: {
              $value: 'darkValue',
              description: 'DarkMode description',
            },
          },
        },
      }),
    })

    const resultDictionary = getMockDictionary({
      valueOverride: getMockToken({
        name: 'red',
        description: 'This is a description',
        $value: 'darkValue',
        path: ['tokens', 'subgroup', 'red'],
        $extensions: {
          'org.primer.overrides': {
            dark: 'darkValue',
          },
        },
      }),
      objectOverride: getMockToken({
        name: 'red',
        description: 'DarkMode description',
        $value: 'darkValue',
        path: ['tokens', 'subgroup', 'red'],
        $extensions: {
          'org.primer.overrides': {
            dark: {
              $value: 'darkValue',
              description: 'DarkMode description',
            },
          },
        },
      }),
    })

    expect(
      themeOverrides.preprocessor(dictionary.tokens, {
        options: {themeOverrides: {theme: ['dark-dimmed', undefined]}},
      }),
    ).toStrictEqual(dictionary.tokens)
    expect(
      themeOverrides.preprocessor(dictionary.tokens, {
        options: {themeOverrides: {theme: ['dark-dimmed', 'dark']}},
      }),
    ).toStrictEqual(resultDictionary.tokens)
  })
})
