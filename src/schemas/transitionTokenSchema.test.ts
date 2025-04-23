import {transitionToken} from './transitionToken.js'

describe('Schema: transitionToken', () => {
  const validToken = {
    $value: {
      duration: '300ms',
      timingFunction: [0.4, 0, 0.2, 1],
      delay: '0ms',
    },
    $type: 'transition',
    $description: 'Standard transition',
  }

  it('parses valid transition tokens', () => {
    expect(transitionToken.safeParse(validToken).success).toStrictEqual(true)
  })

  it('parses valid transition tokens without delay', () => {
    const tokenWithoutDelay = {
      $value: {
        duration: '300ms',
        timingFunction: [0.4, 0, 0.2, 1],
      },
      $type: 'transition',
      $description: 'Standard transition without delay',
    }
    expect(transitionToken.safeParse(tokenWithoutDelay).success).toStrictEqual(true)
  })

  it('parses valid transition tokens with reference values', () => {
    const tokenWithReferences = {
      $value: {
        duration: '{duration.medium}',
        timingFunction: '{timing.easeInOut}',
        delay: '{duration.small}',
      },
      $type: 'transition',
      $description: 'Transition with reference values',
    }
    expect(transitionToken.safeParse(tokenWithReferences).success).toStrictEqual(true)
  })

  it('parses valid transition tokens with direct reference', () => {
    const tokenWithDirectReference = {
      $value: '{transition.standard}',
      $type: 'transition',
      $description: 'Transition with direct reference',
    }
    expect(transitionToken.safeParse(tokenWithDirectReference).success).toStrictEqual(true)
  })

  it('fails on invalid properties', () => {
    // additional element
    expect(
      transitionToken.safeParse({
        ...validToken,
        extra: 'value',
      }).success,
    ).toStrictEqual(false)
    // missing value
    expect(
      transitionToken.safeParse({
        $type: 'transition',
      }).success,
    ).toStrictEqual(false)
    // missing type
    expect(
      transitionToken.safeParse({
        $value: {
          duration: '300ms',
          timingFunction: [0.4, 0, 0.2, 1],
        },
      }).success,
    ).toStrictEqual(false)
  })

  it('fails on invalid duration value', () => {
    expect(
      transitionToken.safeParse({
        ...validToken,
        $value: {
          ...validToken.$value,
          duration: 'invalid',
        },
      }).success,
    ).toStrictEqual(false)
  })

  it('fails on invalid timing value', () => {
    expect(
      transitionToken.safeParse({
        ...validToken,
        $value: {
          ...validToken.$value,
          timingFunction: [0.4, 0, 0.2], // Missing one value
        },
      }).success,
    ).toStrictEqual(false)
  })

  it('fails on invalid delay value', () => {
    expect(
      transitionToken.safeParse({
        ...validToken,
        $value: {
          ...validToken.$value,
          delay: 'invalid',
        },
      }).success,
    ).toStrictEqual(false)
  })

  it('fails on wrong type', () => {
    // invalid string
    expect(
      transitionToken.safeParse({
        ...validToken,
        $type: 'motion',
      }).success,
    ).toStrictEqual(false)
    // undefined
    expect(
      transitionToken.safeParse({
        ...validToken,
        $type: undefined,
      }).success,
    ).toStrictEqual(false)
    // no type
    expect(
      transitionToken.safeParse({
        $value: {
          duration: '300ms',
          timingFunction: [0.4, 0, 0.2, 1],
        },
      }).success,
    ).toStrictEqual(false)
  })
})
