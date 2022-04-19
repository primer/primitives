import React, {Fragment, FC} from 'react'
import {Box} from '@primer/components'
import styled from 'styled-components'

interface ControlStackVisualProps {
  gap?: boolean
  padding?: boolean
  modifier?: string
  variant?: string
}

const ControlStackVisual: FC<ControlStackVisualProps> = ({gap, padding, modifier, variant}) => {
  return (
    <Fragment>
      <Box
        as="div"
        sx={{
          display: 'inline-grid',
          gridTemplateRows: 'min-content',
          gridTemplateColumns: 'repeat(3, min-content)',
          borderRadius: 2,
          backgroundImage:
            'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
          backgroundSize: '5.66px 5.66px',
          gap: `var(--primer-controlStack${variant}-gap-${modifier})`
        }}
      >
        <Box
          as="span"
          sx={{
            backgroundColor: 'white',
            border: 'solid 1px #c297ff',
            height: '32px',
            width: '32px',
            borderRadius: 2
          }}
        />
        <Box
          as="span"
          sx={{
            backgroundColor: 'white',
            border: 'solid 1px #c297ff',
            height: '32px',
            width: '32px',
            borderRadius: 2
          }}
        />
        <Box
          as="span"
          sx={{
            backgroundColor: 'white',
            border: 'solid 1px #c297ff',
            height: '32px',
            width: '32px',
            borderRadius: 2
          }}
        />
      </Box>
    </Fragment>
  )
}

export default ControlStackVisual
