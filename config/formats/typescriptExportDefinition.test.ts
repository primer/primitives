import {typescriptExportDefinition} from './typescriptExportDefinition'
import {getMockFormatterArguments, getMockDictionary, getMockToken} from '~/src/test-utilities'
import {format} from 'prettier'

describe('Format: TypeScript definitions', () => {
  const dictionary = getMockDictionary({
    tokens: {
      subgroup: {
        red: getMockToken({
          $type: 'color',
          value: '#FF0000'
        }),
        // TODO: implement types
        // small: getMockToken({
        //   $type: 'dimension',
        //   value: '10px'
        // }),
        // big: getMockToken({
        //   $type: 'dimension',
        //   value: '2rem'
        // }),
        // shadow: getMockToken({
        //   $type: 'shadow',
        //   value: 'shadow value'
        // }),
        stringValue: getMockToken({
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
        numberValue: getMockToken({
          value: 20
        }),
        booleanValue: getMockToken({
          value: true
        })
      }
    }
  })
  // @ ts-expect-error: Because complex is invalid
  //   complex: {
  //   top: 16,
  //   bottom: () => 16
  // }
  // default: getMockToken({
  //   value: 16,
  //   $type: 'dimension'
  // }),
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
              stringValue: string;
              border: Border;
              numberValue: number;
              booleanValue: "boolean";
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
            stringValue: string;
            border: Border;
            numberValue: number;
            booleanValue: "boolean";
          };
        };
      };`,
      {parser: 'typescript', printWidth: 500}
    )
    expect(typescriptExportDefinition(input)).toStrictEqual(expectedOutput)
  })

  // it('throws an invalidToken error if a token has no value property', () => {
  //   const input = getMockFormatterArguments({
  //     dictionary: getMockDictionary({
  //       // @ts-expect-error: Because of invalid token
  //       tokens: {
  //         subgroup: {
  //           red: '#FF0000'
  //         }
  //       }
  //     })
  //   })

  //   expect(() => {
  //     typescriptExportDefinition(input)
  //   }).toThrowError('Invalid token: #FF0000')
  // })

  it('throws an invalidTokenValue error if a token has an invalid value for the defined type', () => {
    const input = getMockFormatterArguments({
      dictionary: getMockDictionary({
        // @ts-expect-error: Because of invalid token
        tokens: {
          subgroup: {
            color: {
              name: 'color token name',
              value: 'rgb(100,200,255)',
              $type: 'color'
            }
          }
        }
      })
    })

    expect(() => {
      typescriptExportDefinition(input)
    }).toThrowError('Invalid token: "color token name" with type "color" can not have a value of "rgb(100,200,255)"')
  })
})
