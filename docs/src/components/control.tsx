// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React, {Fragment} from 'react'
import {Box} from '@primer/react'

interface ControlVisualProps {
  paddingLeft?: string
  paddingRight?: string
  paddingTop?: string
  paddingBottom?: string
  gap?: string
  blockSize?: string
  lineBox?: string
  modifier?: string
  highlightPaddingBottom?: boolean
  highlightPaddingTop?: boolean
  highlightPaddingRight?: boolean
  highlightPaddingLeft?: boolean
  highlightGap?: boolean
  highlightLineBoxHeight?: boolean
  highlightHeight?: boolean
}

const ControlVisual: React.FC<ControlVisualProps> = ({
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  gap,
  blockSize,
  lineBox,
  modifier,
  highlightPaddingBottom,
  highlightPaddingTop,
  highlightPaddingRight,
  highlightPaddingLeft,
  highlightGap,
  highlightLineBoxHeight,
  highlightHeight,
}) => {
  return (
    <Fragment>
      <Box
        as="div"
        sx={{
          display: 'inline-grid',
          gridTemplateAreas: `'pTop pTop pTop pTop pTop' 'pLeft icon gap label pRight' 'pBottom pBottom pBottom pBottom pBottom'`,
          gridTemplateRows: 'min-content minmax(0, 1fr) min-content',
          gridTemplateColumns: 'repeat(5, min-content)',
          borderRadius: '2',
          border: 'solid 1px #c297ff',
          height: `var(--primer-control-${blockSize}-size)`,
          backgroundImage:
            highlightHeight &&
            'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
          backgroundSize: '5.66px 5.66px',
          alignItems: 'center',
        }}
      >
        <Box
          as="span"
          sx={{
            gridArea: 'pTop',
            height: `var(--primer-control-${paddingTop}-paddingBlock)`,
            backgroundImage:
              highlightPaddingTop &&
              'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
            backgroundSize: '5.66px 5.66px',
          }}
        />
        <Box
          as="span"
          sx={{
            gridArea: 'pLeft',
            width: `var(--primer-control-${paddingLeft}-paddingInline${modifier})`,
            backgroundImage:
              highlightPaddingLeft &&
              'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
            backgroundSize: '5.66px 5.66px',
            height: '100%',
          }}
        />
        <Box
          as="span"
          sx={{
            gridArea: 'icon',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'fg.subtle',
            width: '1rem',
            height: '1rem',
            borderRadius: 1,
          }}
        />
        <Box
          as="span"
          sx={{
            gridArea: 'gap',
            width: `var(--primer-control-${gap}-gap)`,
            backgroundImage:
              highlightGap &&
              'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
            backgroundSize: '5.66px 5.66px',
            height: '100%',
          }}
        />
        <Box
          as="span"
          sx={{
            gridArea: 'label',
            lineHeight: `var(--primer-control-${lineBox}-lineBoxHeight)`,
            backgroundImage:
              highlightLineBoxHeight &&
              'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
            backgroundSize: '5.66px 5.66px',
            fontSize: 'var(--primer-text-body-size-medium)',
          }}
        >
          label
        </Box>
        <Box
          as="span"
          sx={{
            gridArea: 'pRight',
            width: `var(--primer-control-${paddingRight}-paddingInline${modifier})`,
            backgroundImage:
              highlightPaddingRight &&
              'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
            backgroundSize: '5.66px 5.66px',
            height: '100%',
          }}
        />
        <Box
          as="span"
          sx={{
            gridArea: 'pBottom',
            height: `var(--primer-control-${paddingBottom}-paddingBlock)`,
            backgroundImage:
              highlightPaddingBottom &&
              'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
            backgroundSize: '5.66px 5.66px',
          }}
        />
      </Box>
    </Fragment>
  )
}

export default ControlVisual
