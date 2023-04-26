const normalize = (val: number, max: number, min: number) => {
  return (val - min) / (max - min)
}

export const hexToAlpha = (hexOralphaHexString: string) => {
  let alphaHexString = hexOralphaHexString.replace('#', '')
  // abort if not a valid hex string
  if (alphaHexString.length !== 2 && alphaHexString.length !== 8) {
    return '100'
  }

  if (alphaHexString.length === 8) {
    alphaHexString = alphaHexString.slice(6, 8)
  }

  return Math.round(normalize(parseInt(alphaHexString, 16), 255, 0) * 100)
}
