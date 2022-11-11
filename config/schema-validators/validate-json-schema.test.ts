import {validateSchema} from './validate-json-schema'
import type {ColorProperties} from './validate-json-schema'

describe('JSON schema validation', () => {
  describe('color', () => {
    it('should validate successfully with the correct input', async () => {
      const data: ColorProperties = {
        color: {
          a: {
            $value: 'value',
            $type: 'color'
          },
          b: {
            c: {
              $value: 'value',
              $type: 'color'
            }
          },
          d: {
            e: {
              f: {
                $value: 'value',
                $type: 'color'
              }
            }
          },
          g: {
            h: {
              i: {
                j: {
                  $value: 'value',
                  $type: 'color'
                }
              }
            }
          }
        }
      }

      expect(validateSchema(data)).toBe(true)
    })

    it('should fail validation if invalid input data is passed', async () => {
      const data = {
        foo: "I'm not an valid DesignToken object"
      }

      expect(() => validateSchema(data)).toThrow()
    })

    it('should fail validation if a valid prefix is not provided', async () => {
      const data = {
        color: {
          $value: 'value',
          $type: 'color'
        }
      }

      expect(() => validateSchema(data)).toThrow()
    })

    it('should pass validation if "base" prefix is provided', async () => {
      const data = {
        base: {
          a: {
            $value: 'value',
            $type: 'color'
          }
        }
      }

      expect(validateSchema(data)).toBe(true)
    })
  })
})
