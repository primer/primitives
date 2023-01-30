// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React, {Fragment} from 'react'
import {Box} from '@primer/react'

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

const TypographyBlock: React.FC<TypographyBlockProps> = ({
  variant,
  modifier = '',
  fontSize,
  fontWeight,
  lineHeight,
  lineBoxHeight,
  fontFamily,
  children,
}) => {
  return (
    <Fragment>
      <Box
        as="p"
        sx={{
          margin: '0',
          font: variant || modifier ? `var(--primer-text-${variant}-shorthand${modifier})` : undefined,
          fontSize: fontSize ? `${fontSize}` : undefined,
          fontWeight: fontWeight ? `${fontWeight}` : undefined,
          lineHeight: lineHeight ? `${lineHeight}` : undefined,
          height: lineBoxHeight ? `${lineBoxHeight}` : undefined,
          fontFamily: fontFamily ? `${fontFamily}` : undefined,
        }}
      >
        {children ? children : variant}
      </Box>
    </Fragment>
  )
}

export default TypographyBlock
