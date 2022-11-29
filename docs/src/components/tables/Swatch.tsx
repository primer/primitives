// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React from 'react'
import {Box} from '@primer/react'

interface SwatchProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  height?: any
  width?: string
  color?: string
}

const Swatch: React.FC<SwatchProps> = ({height, width, color}) => {
  return <Box borderRadius={2} height={height} width={width} backgroundColor={color}></Box>
}

export default Swatch
