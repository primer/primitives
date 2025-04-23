import {getMockToken} from '../test-utilities/getMockToken.js'
import {transitionToCss} from './transitionToCss.js'

describe('transitionToCss', () => {
  it('should transform basic transition token to CSS', () => {
    const token = getMockToken({
      $value: {
        duration: '300ms',
        timing: [0.4, 0, 0.2, 1],
      },
      $type: 'transition',
    })

    expect(transitionToCss.transform(token, {}, {})).toBe('300ms cubic-bezier(0.4, 0, 0.2, 1)')
  })

  it('should transform transition token with delay to CSS', () => {
    const token = getMockToken({
      $value: {
        duration: '300ms',
        timing: [0.4, 0, 0.2, 1],
        delay: '100ms',
      },
      $type: 'transition',
    })

    expect(transitionToCss.transform(token, {}, {})).toBe('300ms cubic-bezier(0.4, 0, 0.2, 1) 100ms')
  })

  it('should transform transition token with resolved references', () => {
    const token = {
      $value: {
        duration: '300ms',
        timing: [0.4, 0, 0.2, 1],
        delay: '0ms',
      },
      $type: 'transition',
    }
    const resolvedRefs = {
      duration: '300ms',
      timing: [0.4, 0, 0.2, 1],
      delay: '0ms',
    }

    expect(transitionToCss.transform(token, resolvedRefs)).toBe('300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms')
  })

  it('should transform transition token with mixed values and references', () => {
    const token = getMockToken({
      $value: {
        duration: '{motion.duration.base.value}',
        timing: [0.4, 0, 0.2, 1],
        delay: '0ms',
      },
      $type: 'transition',
    })

    expect(transitionToCss.transform(token, resolvedRefs)).toBe('300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms')
  })

  it('should handle common timing function aliases', () => {
    const token = {
      $value: {
        duration: '300ms',
        timing: [0.4, 0, 1, 1],
      },
      $type: 'transition',
    }

    expect(transitionToCss.transform(token, {}, {})).toBe('300ms ease-out')
  })

  it('should handle direct reference token', () => {
    const token = {
      $value: '{motion.transition.standard}',
      $type: 'transition',
    }
    const resolvedRefs = {
      'motion.transition.standard': {
        duration: '300ms',
        timing: [0.4, 0, 0.2, 1],
        delay: '0ms',
      },
    }

    expect(transitionToCss.transform(token, resolvedRefs)).toBe('300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms')
  })

  it('should handle missing optional delay', () => {
    const token = {
      $value: {
        duration: '300ms',
        timing: [0.4, 0, 0.2, 1],
      },
      $type: 'transition',
    }

    expect(transitionToCss.transform(token, {}, {})).toBe('300ms cubic-bezier(0.4, 0, 0.2, 1)')
  })

  it('should throw error for invalid token type', () => {
    const token = {
      $value: {
        duration: '300ms',
        timing: [0.4, 0, 0.2, 1],
      },
      $type: 'invalid',
    }

    expect(() => transitionToCss.transform(token, {}, {})).toThrow('Invalid token type: invalid')
  })

  it('should throw error for missing required properties', () => {
    const token = {
      $value: {
        duration: '300ms',
      },
      $type: 'transition',
    }
    // @ts-expect-error: testing invalid token
    expect(() => transitionToCss.transform(token, {}, {})).toThrow('Missing required property: timing')
  })

  it('should throw error for invalid timing value', () => {
    const token = {
      $value: {
        duration: '300ms',
        timing: [0.4, 0, 0.2], // Missing one value
      },
      $type: 'transition',
    }

    expect(() => transitionToCss.transform(token, {}, {})).toThrow('Invalid timing value')
  })
})
