import {validateSchema} from './validate-json-schema'
import type {ColorProperties} from './validate-json-schema'
import type {ColorDesignTokenDefinition} from '../../types/DesignToken'

describe('JSON schema validation', () => {
  describe('color', () => {
    it('should validate successfully with the correct shape of input', async () => {
      const expectedTokenShape: ColorDesignTokenDefinition = {
        $value: 'value',
        $type: 'color'
      }
      const data: ColorProperties = {
        color: {
          a: {
            ...expectedTokenShape
          },
          b: {
            one: {
              ...expectedTokenShape
            }
          },
          c: {
            one: {
              two: {
                ...expectedTokenShape
              }
            }
          },
          d: {
            one: {
              two: {
                three: {
                  ...expectedTokenShape
                }
              }
            }
          }
        }
      }

      expect(validateSchema(data)).toBe(true)
    })

    it('validates to n depth', () => {
      const n = 50 // arbitrary number
      const token: ColorDesignTokenDefinition = {
        $value: 'value',
        $type: 'color'
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const buildObj = (obj: {[x: string]: any}, keyPath: string | any[], value: ColorDesignTokenDefinition) => {
        const lastKeyIndex = keyPath.length - 1
        for (let i = 0; i < lastKeyIndex; ++i) {
          const key = keyPath[i]
          if (!(key in obj)) {
            obj[key] = {}
          }
          obj = obj[key]
        }
        obj[keyPath[lastKeyIndex]] = value
      }

      const data = {}
      const arr = Array.from(Array(n), (x, i) => (i === 0 ? 'color' : i.toString()))

      buildObj(data, arr, token)
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
