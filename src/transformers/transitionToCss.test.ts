import {getMockToken} from '../test-utilities/getMockToken.js'
import {transitionToCss} from './transitionToCss.js'

describe('transitionToCss', () => {
  it('should transform basic transition token to CSS', () => {
    const token = getMockToken({
      $value: {
        duration: '300ms',
        timingFunction: [0.4, 0, 0.2, 1],
      },
      $type: 'transition',
    })

    expect(transitionToCss.transform(token, {}, {})).toBe('300ms cubic-bezier(0.4,0,0.2,1)')
  })

  it('should transform transition token with delay to CSS', () => {
    const token = getMockToken({
      $value: {
        duration: '300ms',
        timingFunction: [0.4, 0, 0.2, 1],
        delay: '100ms',
      },
      $type: 'transition',
    })

    expect(transitionToCss.transform(token, {}, {})).toBe('300ms cubic-bezier(0.4,0,0.2,1) 100ms')
  })

  it('should transform transition token with resolved references', () => {
    const token = {
      $value: {
        duration: '300ms',
        timingFunction: [0.4, 0, 0.2, 1],
        delay: '0ms',
      },
      $type: 'transition',
    }
    const resolvedRefs = {
      duration: '300ms',
      timingFunction: [0.4, 0, 0.2, 1],
      delay: '0ms',
    }

    expect(transitionToCss.transform(token, resolvedRefs)).toBe('300ms cubic-bezier(0.4,0,0.2,1) 0ms')
  })

  it('should handle missing optional delay', () => {
    const token = getMockToken({
      $value: {
        duration: '300ms',
        timingFunction: [0.4, 0, 0.2, 1],
      },
      $type: 'transition',
    })

    expect(transitionToCss.transform(token, {}, {})).toBe('300ms cubic-bezier(0.4,0,0.2,1)')
  })

  it('should throw error for missing required properties', () => {
    const token = getMockToken({
      $value: {
        duration: '300ms',
      },
      $type: 'transition',
    })
    expect(() => transitionToCss.transform(token, {}, {})).toThrow(
      'Missing property: timingFunction on token with value {"duration":"300ms"}',
    )
  })

  it('should throw error for invalid timing value', () => {
    const token = getMockToken({
      $value: {
        duration: '300ms',
        timingFunction: [0.4, 0, 0.2], // Missing one value
      },
      $type: 'transition',
    })

    expect(() => transitionToCss.transform(token, {}, {})).toThrow(
      'Invalid cubicBezier token path, must be an array with 4 numbers, but got this instead: [0.4,0,0.2]',
    )
  })
})
