import {typescriptExportDefinition} from './typescriptExportDefinition'
import {getMockFormatterArguments, getMockDictionary, getMockToken} from '~/src/test-utilities'
import {format} from 'prettier'

describe('Format: TypeScript definitions', () => {
  const dictionary = getMockDictionary({
    // @ts-expect-error: Because complex is invalid
    tokens: {
      subgroup: {
        red: getMockToken({
          $type: 'color',
          value: '#FF0000'
        }),
        yellow: getMockToken({
          value: '#FF0000'
        }),
        border: getMockToken({
          $type: 'border',
          value: {
            color: '#FF0000',
            style: 'solid',
            width: '1px'
          }
        }),
        // default: getMockToken({
        //   value: 16,
        //   $type: 'dimension'
        // }),
        complex: {
          top: 16,
          bottom: () => 16
        }
      }
    }
  })

  it('Formats tokens adding prefix', () => {
    const input = getMockFormatterArguments({
      dictionary,
      platform: {
        prefix: 'test'
      }
    })
    const expectedOutput = format(
      `/**
       * @description hex string (6 or 8-digit)
       */
      type ColorHex = string;

      /**
       * @description a css border string
       * @format color | style | width
       */
      type Border = \`\${ColorHex} \${string} \${string}\`;

      export type tokens = {
        test: {
          tokens: {
            subgroup: {
              red: ColorHex;
              yellow: string;
              border: Border;
              complex: {
                top: number;
                bottom: any;
              };
            };
          };
        };
      };`,
      {parser: 'typescript', printWidth: 500}
    )

    expect(typescriptExportDefinition(input)).toStrictEqual(expectedOutput)
  })

  it('Formats tokens without prefix', () => {
    const input = getMockFormatterArguments({dictionary})
    const expectedOutput = format(
      `/**
      * @description hex string (6 or 8-digit)
      */
      type ColorHex = string;

      /**
       * @description a css border string
       * @format color | style | width
       */
      type Border = \`\${ColorHex} \${string} \${string}\`;

      export type tokens = {
        tokens: {
          subgroup: {
            red: ColorHex;
            yellow: string;
            border: Border;
            complex: {
              top: number;
              bottom: any;
            };
          };
        };
      };`,
      {parser: 'typescript', printWidth: 500}
    )
    expect(typescriptExportDefinition(input)).toStrictEqual(expectedOutput)
  })
})
