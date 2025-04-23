import {processCompositeTokenReferences} from './processCompositeTokenReferences.js'

describe('processCompositeTokenReferences', () => {
  // ... existing code ...

  test('should handle composite border token references', () => {
    const value = '1px solid #000000'
    const originalValue = {
      width: '{border.width.small}',
      style: '{border.style.solid}',
      color: '{color.black}',
    }
    const properties = ['width', 'style', 'color']
    const refs = [
      {path: ['border', 'width', 'small'], isSource: true},
      {path: ['border', 'style', 'solid'], isSource: true},
      {path: ['color', 'black'], isSource: true},
    ]
    const sanitizeValue: string[] = []

    const result = processCompositeTokenReferences(value, originalValue, properties, refs, sanitizeValue)
    expect(result).toBe('{border.width.small} {border.style.solid} {color.black}')
  })

  test('should handle composite border token with mixed references', () => {
    const value = '1px solid #000000'
    const originalValue = {
      width: '{border.width.small}',
      style: 'solid',
      color: '{color.black}',
    }
    const properties = ['width', 'style', 'color']
    const refs = [
      {path: ['border', 'width', 'small'], isSource: true},
      {path: ['color', 'black'], isSource: true},
    ]
    const sanitizeValue = ['px']

    const result = processCompositeTokenReferences(value, originalValue, properties, refs, sanitizeValue)
    expect(result).toBe('{border.width.small} solid {color.black}')
  })

  test('should handle composite border token with invalid references', () => {
    const value = '1px solid #000000'
    const originalValue = {
      width: '{border.width.small}',
      style: '{border.style.solid}',
      color: '{color.black}',
    }
    const properties = ['width', 'style', 'color']
    const refs = [
      {path: ['border', 'width', 'small'], isSource: false},
      {path: ['border', 'style', 'solid'], isSource: true},
      {path: ['color', 'black'], isSource: false},
    ]
    const sanitizeValue = ['px']

    const result = processCompositeTokenReferences(value, originalValue, properties, refs, sanitizeValue)
    expect(result).toBe('1 {border.style.solid} #000000')
  })

  test('should handle composite shadow token references', () => {
    const value = '0px 4px 6px -1px rgba(0, 0, 0, 0.1)'
    const originalValue = {
      offsetX: '{shadow.offsetX.none}',
      offsetY: '{shadow.offsetY.small}',
      blur: '{shadow.blur.medium}',
      spread: '{shadow.spread.small}',
      color: '{color.black.alpha10}',
    }
    const properties = ['offsetX', 'offsetY', 'blur', 'spread', 'color']
    const refs = [
      {path: ['shadow', 'offsetX', 'none'], isSource: true},
      {path: ['shadow', 'offsetY', 'small'], isSource: true},
      {path: ['shadow', 'blur', 'medium'], isSource: true},
      {path: ['shadow', 'spread', 'small'], isSource: true},
      {path: ['color', 'black', 'alpha10'], isSource: true},
    ]
    const sanitizeValue: string[] = []

    const result = processCompositeTokenReferences(value, originalValue, properties, refs, sanitizeValue)
    expect(result).toBe(
      '{shadow.offsetX.none} {shadow.offsetY.small} {shadow.blur.medium} {shadow.spread.small} {color.black.alpha10}',
    )
  })

  test('should handle composite shadow token with mixed references', () => {
    const value = 'inset 0px 4px 6px -1px rgba(0, 0, 0, 0.1)'
    const originalValue = {
      inset: true,
      offsetX: '{shadow.offsetX.none}',
      offsetY: '4px',
      blur: '{shadow.blur.medium}',
      spread: '-1px',
      color: '{color.black.alpha10}',
    }

    const properties = ['offsetX', 'offsetY', 'blur', 'spread', 'color']
    const refs = [
      {path: ['shadow', 'offsetX', 'none'], isSource: true},
      {path: ['shadow', 'blur', 'medium'], isSource: true},
      {path: ['color', 'black', 'alpha10'], isSource: true},
    ]
    const sanitizeValue = ['inset']

    const result = processCompositeTokenReferences(value, originalValue, properties, refs, sanitizeValue)
    expect(result).toBe('{shadow.offsetX.none} 4px {shadow.blur.medium} -1px {color.black.alpha10}')
  })

  test('should handle composite shadow token with invalid references', () => {
    const value = '0px 4px 6px -1px rgba(0, 0, 0, 0.1)'
    const originalValue = {
      offsetX: '{shadow.offsetX.none}',
      offsetY: '{shadow.offsetY.small}',
      blur: '{shadow.blur.medium}',
      spread: '{shadow.spread.small}',
      color: '{color.black.alpha10}',
    }
    const properties = ['offsetX', 'offsetY', 'blur', 'spread', 'color']
    const refs = [
      {path: ['shadow', 'offsetX', 'none'], isSource: false},
      {path: ['shadow', 'offsetY', 'small'], isSource: true},
      {path: ['shadow', 'blur', 'medium'], isSource: false},
      {path: ['shadow', 'spread', 'small'], isSource: true},
      {path: ['color', 'black', 'alpha10'], isSource: false},
    ]

    const result = processCompositeTokenReferences(value, originalValue, properties, refs)
    expect(result).toBe('0px {shadow.offsetY.small} 6px {shadow.spread.small} rgba(0, 0, 0, 0.1)')
  })

  test('should handle complex shadow token with multiple values', () => {
    const value = '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)'
    const originalValue = {
      shadow1: '{shadow.medium}',
      shadow2: '{shadow.small}',
    }
    const properties = ['shadow1', 'shadow2']
    const refs = [
      {path: ['shadow', 'medium'], isSource: true},
      {path: ['shadow', 'small'], isSource: true},
    ]

    const result = processCompositeTokenReferences(value, originalValue, properties, refs)
    expect(result).toBe('{shadow.medium} {shadow.small}')
  })

  test('should not split rgb or rgba values', () => {
    const value = '0px 4px 6px -1px rgb(0, 0, 0)'
    const originalValue = {
      offsetX: '{shadow.offsetX.none}',
      offsetY: '{shadow.offsetY.small}',
      blur: '{shadow.blur.medium}',
      spread: '{shadow.spread.small}',
      color: '{color.black}',
    }
    const properties = ['offsetX', 'offsetY', 'blur', 'spread', 'color']
    const refs = [
      {path: ['shadow', 'offsetX', 'none'], isSource: false},
      {path: ['shadow', 'offsetY', 'small'], isSource: true},
      {path: ['shadow', 'blur', 'medium'], isSource: false},
      {path: ['shadow', 'spread', 'small'], isSource: true},
      {path: ['color', 'black'], isSource: false},
    ]

    const result = processCompositeTokenReferences(value, originalValue, properties, refs)
    expect(result).toBe('0px {shadow.offsetY.small} 6px {shadow.spread.small} rgb(0, 0, 0)')
  })
})
