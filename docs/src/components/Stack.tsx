// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React, {Fragment} from 'react'
import {Box} from '@primer/react'

interface StackVisualProps {
  gap?: boolean
  padding?: boolean
  modifier?: string
}

const StackVisual: React.FC<StackVisualProps> = ({gap, padding, modifier}) => {
  return (
    <Fragment>
      {gap && (
        <Box
          as="div"
          sx={{
            display: 'grid',
            gridTemplateRows: 'repeat(3, 2rem)',
            borderRadius: 2,
            border: 'solid 1px #c297ff',
            overflow: 'hidden',
            backgroundImage:
              'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
            backgroundSize: '5.66px 5.66px',
            gap: `var(--primer-stack-gap-${modifier})`,
          }}
        >
          <Box
            as="span"
            sx={{
              backgroundColor: 'white',
            }}
          />
          <Box
            as="span"
            sx={{
              backgroundColor: 'white',
            }}
          />
          <Box
            as="span"
            sx={{
              backgroundColor: 'white',
            }}
          />
        </Box>
      )}
      {padding && (
        <Box
          as="div"
          sx={{
            display: 'grid',
            gridTemplateRows: '1fr',
            gridTemplateColumns: 'repeat(auto-fit, minmax(0px, 1fr))',
            borderRadius: 2,
            border: 'solid 1px #c297ff',
            overflow: 'hidden',
            backgroundImage:
              'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
            backgroundSize: '5.66px 5.66px',
            padding: `var(--primer-stack-padding-${modifier})`,
            justifyContent: 'center',
            aspectRatio: '16 / 9',
            width: '12rem',
          }}
        >
          <Box
            as="span"
            sx={{
              backgroundColor: 'white',
              borderRadius: 2,
              height: '100%',
              width: '100%',
              placeSelf: 'center',
            }}
          />
        </Box>
      )}
    </Fragment>
  )
}

export default StackVisual
