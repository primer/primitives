import React, {Fragment, FC} from 'react'
import {Box} from '@primer/components'

interface TypographyBlockProps {
  variant?: string
  modifier?: string
  fontSize?: string
  fontWeight?: string
  lineHeight?: string
  lineBoxHeight?: string
  fontFamily?: string
  children?: string
}

const TypographyBlock: FC<TypographyBlockProps> = ({
  variant,
  modifier = '',
  fontSize = undefined,
  fontWeight = undefined,
  lineHeight = undefined,
  lineBoxHeight = undefined,
  fontFamily = undefined,
  children
}) => {
  return (
    <Fragment>
      <Box
        as="p"
        sx={{
          margin: '0',
          font: `var(--gh-text-${variant}-shorthand${modifier})`,
          fontSize: `${fontSize}`,
          fontWeight: `${fontWeight}`,
          lineHeight: `${lineHeight}`,
          height: `${lineBoxHeight}`,
          fontFamily: `${fontFamily}`
        }}
      >
        {children ? children : variant}
      </Box>
    </Fragment>
  )
}

export default TypographyBlock
