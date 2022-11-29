import type {JSONSchemaType} from 'ajv'
import Ajv from 'ajv'
// eslint-disable-next-line import/no-nodejs-modules
import fs from 'fs'
import JSON5 from 'json5'

import type {ColorDesignTokenDefinition} from '../../types/DesignToken'

const validPrefixes = ['base', 'color', 'shadow'] as const
type ValidPrefixes = typeof validPrefixes[number]

type Token = ColorDesignTokenDefinition

interface GenericShape {
  [name: string]: GenericShape | Token
}

export interface ColorProperties {
  color: GenericShape
}

/**
 * This script is used to validate the JSON schema of design tokens in a folder
 * @param {object} data - A JSON object containing the design tokens. Should ideally be typed as ColorProperties, but intentionally 'unknown' to allow for validation
 * @example
 *  const tokens = {
 *    base: {
 *      a: {
 *        $value: 'value',
 *        $type: 'color'
 *      }
 *    }
 *  }
 *  validateSchema(tokens, 'base')
 */
export function validateSchema(data: object) {
  const [prefix] = Object.keys(data) as ValidPrefixes[]
  if (!validPrefixes.includes(prefix)) {
    throw new Error('Invalid prefix')
  }
  const ajv = new Ajv()

  const schema: JSONSchemaType<ColorProperties> = {
    type: 'object',
    required: [prefix],
    properties: {
      [prefix]: {
        type: 'object',
        required: [],
        patternProperties: {
          ['^.*$']: {
            $ref: '#/$defs/recurse'
          }
        },
        additionalProperties: false
      }
    },
    additionalProperties: false,
    $defs: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      recurse: {
        type: 'object',
        oneOf: [
          {
            required: [],
            patternProperties: {
              ['^.*$']: {
                type: 'object',
                $ref: '#/$defs/recurse'
              }
            }
          },
          {
            type: 'object',
            $ref: '#/$defs/token'
          }
        ]
      },
      token: {
        type: 'object',
        required: ['$value', '$type'],
        properties: {
          $value: {
            type: 'string',
            nullable: false
          },
          $type: {
            type: 'string',
            default: 'color',
            nullable: false
          },
          alpha: {
            type: 'number',
            nullable: true
          },
          $description: {
            type: 'string',
            nullable: true
          },
          deprecated: {
            type: 'string',
            nullable: true
          }
        }
      }
    }
  }

  const validate = ajv.compile(schema)
  const result = validate(data)
  const firstError = validate.errors?.[0]

  if (!result) {
    throw firstError
  }

  return result
}

/**
 * This script is used to validate the JSON schema of design tokens in a folder
 * @param {string} dir - The absolute path to the folder containing the design tokens
 * @example validateSchemaFromDir('./tokens', 'color')
 */
export function validateSchemaFromDir(dir: string) {
  const tokensDir = dir
  const tokens = fs.readdirSync(tokensDir, {withFileTypes: true})
  for (const token of tokens) {
    if (token.isDirectory()) {
      const tokenDir = `${tokensDir}/${token.name}`
      const tokenFiles = fs.readdirSync(tokenDir, {withFileTypes: true})
      for (const tokenFile of tokenFiles) {
        if (tokenFile.isFile()) {
          const tokenFilePath = `${tokenDir}/${tokenFile.name}`
          const tokenFileContent = fs.readFileSync(tokenFilePath, 'utf8')
          const tokenFileJson = JSON5.parse(tokenFileContent)

          try {
            // eslint-disable-next-line no-console
            validateSchema(tokenFileJson)
            // eslint-disable-next-line no-console
            console.info(`[info] Successfully validated '${tokenFilePath}' */`)
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error) // Important! shows a table of errors
            throw new Error(`Schema validation failed for '${tokenFilePath}'`)
          }
        }
      }
    }
  }
}
