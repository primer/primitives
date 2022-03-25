import React, {FC} from 'react'
import {Box} from '@primer/components'
interface SwatchProps {
  height?: any
  width?: string
  color?: string
}

const Swatch: FC<SwatchProps> = ({height, width, color}) => {
  return <Box borderRadius={2} height={height} width={width} backgroundColor={color}></Box>
}

export default Swatch
