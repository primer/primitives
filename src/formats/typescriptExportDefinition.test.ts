import {typescriptExportDefinition} from './typescriptExportDefinition.js'
import {getMockFormatterArguments, getMockDictionary, getMockToken} from '../test-utilities/index.js'
import {format} from 'prettier'

describe('Format: TypeScript definitions', () => {
  const dictionary = getMockDictionary({
    tokens: {
      subgroup: {
        red: getMockToken({
          $type: 'color',
          $value: '#FF0000',
        }),
        stringValue: getMockToken({
          $value: '#FF0000',
        }),
        border: getMockToken({
          $type: 'border',
          $value: {
            color: '#FF0000',
            style: 'solid',
            width: '1px',
          },
        }),
        numberValue: getMockToken({
          $value: 20,
        }),
        booleanValue: getMockToken({
          $value: true,
        }),
      },
    },
  })

  it('Formats dimension tokens', async () => {
    const input = getMockFormatterArguments({
      dictionary: getMockDictionary({
        tokens: {
          subgroup: {
            size: {
              px: getMockToken({
                $type: 'dimension',
                $value: '100px',
              }),
              rem: getMockToken({
                $type: 'dimension',
                $value: '10rem',
              }),
              em: getMockToken({
                $type: 'dimension',
                $value: '10em',
              }),
            },
          },
        },
      }),
    })
    const expectedOutput = await format(
      `/**
        * @description size in px
        */
        type SizePx = \`\${number}px\`

      /**
        * @description size in rem
        */
        type SizeRem = \`\${number}rem\`

      /**
        * @description size in em
        */
        type SizeEm = \`\${number}em\`

      export type tokens = {
        tokens: {
          subgroup: {
            size: {
              px: SizePx;
              rem: SizeRem;
              em: SizeEm;
            };
          };
        };
      };`,
      {parser: 'typescript', printWidth: 500},
    )

    expect(await typescriptExportDefinition(input)).toStrictEqual(expectedOutput)
  })

  it('Formats tokens adding prefix', async () => {
    const input = getMockFormatterArguments({
      dictionary,
      platform: {
        prefix: 'test',
      },
    })
    const expectedOutput = await format(
      `/**
       * @description hex string (6 or 8-digit)
       */
      type ColorHex = string;

      /**
       * @description a css border string
       * @format color | style | width
       */
      type Border = \`\${string} \${string} \${string}\`;

      export type tokens = {
        test: {
          tokens: {
            subgroup: {
              red: ColorHex;
              stringValue: string;
              border: Border;
              numberValue: number;
              booleanValue: "boolean";
            };
          };
        };
      };`,
      {parser: 'typescript', printWidth: 500},
    )

    expect(await typescriptExportDefinition(input)).toStrictEqual(expectedOutput)
  })

  it('Formats tokens without prefix', async () => {
    const input = getMockFormatterArguments({dictionary})
    const expectedOutput = await format(
      `/**
       * @description hex string (6 or 8-digit)
       */
      type ColorHex = string;

      /**
       * @description a css border string
       * @format color | style | width
       */
      type Border = \`\${string} \${string} \${string}\`;

      export type tokens = {
        tokens: {
          subgroup: {
            red: ColorHex;
            stringValue: string;
            border: Border;
            numberValue: number;
            booleanValue: "boolean";
          };
        };
      };`,
      {parser: 'typescript', printWidth: 500},
    )
    expect(await typescriptExportDefinition(input)).toStrictEqual(expectedOutput)
  })

  it('throws an invalidTokenValue error if a token has an invalid value for the defined type', async () => {
    const input = getMockFormatterArguments({
      dictionary: getMockDictionary({
        tokens: {
          subgroup: {
            color: {
              name: 'color token name',
              $value: 'rgb(100,200,255)',
              $type: 'color',
            },
          },
        },
      }),
    })
    await expect(async () => await typescriptExportDefinition(input)).rejects.toThrowError(
      'Invalid token: "color token name" with type "color" can not have a value of "rgb(100,200,255)"',
    )
  })
})
