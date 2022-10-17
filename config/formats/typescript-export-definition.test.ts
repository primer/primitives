import {typescriptExportDefinition} from './typescript-export-definition'
import {getMockFormatterArguments} from '../../test-utilities/getMockFormatterArguments'
import {format} from 'prettier'
import {getMockDictionary} from '../../test-utilities/getMockDictionary'
import {getMockToken} from '../../test-utilities/getMockToken'

describe('Format: Tyepscript definitions', () => {
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
        default: getMockToken({
          value: 16,
          $type: 'dimension'
        }),
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

      export type tokens = {
        test: {
          tokens: {
            subgroup: {
              red: ColorHex;
              yellow: string;
              default: number;
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

      export type tokens = {
        tokens: {
          subgroup: {
            red: ColorHex;
            yellow: string;
            default: number;
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
