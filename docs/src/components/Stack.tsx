import React, {Fragment, FC} from 'react'
import {Box} from '@primer/components'

interface StackVisualProps {
  paddingLeft?: string
  paddingRight?: string
  paddingTop?: string
  paddingBottom?: string
  gap?: boolean
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

const StackVisual: FC<StackVisualProps> = ({
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
  highlightHeight
}) => {
  return (
    <Fragment>
      {gap ? (
        <Box
          as="div"
          sx={{
            display: 'grid',
            gridTemplateRows: 'repeat(3, 2rem)',
            gridTemplateColumns: '6rem',
            borderRadius: 2,
            border: 'solid 1px #c297ff',
            overflow: 'hidden',
            backgroundImage:
              'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
            backgroundSize: '5.66px 5.66px',
            gap: `var(--gh-stack-gap-${modifier})`
          }}
        >
          <Box
            as="span"
            sx={{
              backgroundColor: 'white'
            }}
          />
          <Box
            as="span"
            sx={{
              backgroundColor: 'white'
            }}
          />
          <Box
            as="span"
            sx={{
              backgroundColor: 'white'
            }}
          />
        </Box>
      ) : (
        <Box
          as="div"
          sx={{
            display: 'grid',
            gridTemplateRows: '3rem',
            gridTemplateColumns: 'min-content',
            borderRadius: 2,
            border: 'solid 1px #c297ff',
            overflow: 'hidden',
            backgroundImage:
              'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
            backgroundSize: '5.66px 5.66px',
            padding: `var(--gh-stack-padding-${modifier})`,
            justifyContent: 'center'
          }}
        >
          <Box
            as="span"
            sx={{
              backgroundColor: 'white',
              minWidth: '4rem',
              borderRadius: 2
            }}
          />
        </Box>
      )}
      <Box
        as="div"
        sx={{
          display: 'inline-grid',
          gridTemplateAreas: `'pTop pTop pTop pTop pTop' 'pLeft icon gap label pRight' 'pBottom pBottom pBottom pBottom pBottom'`,
          gridTemplateRows: 'min-content minmax(0, 1fr) min-content',
          gridTemplateColumns: 'repeat(5, min-content)',
          borderRadius: 'var(--gh-borderRadius-medium)',
          border: 'solid 1px #c297ff',
          height: `var(--gh-control-${blockSize}-size)`,
          backgroundImage:
            highlightHeight &&
            'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
          backgroundSize: '5.66px 5.66px',
          alignItems: 'center'
        }}
      >
        <Box
          as="span"
          sx={{
            gridArea: 'pTop',
            height: `var(--gh-control-${paddingTop}-paddingBlock)`,
            backgroundImage:
              highlightPaddingTop &&
              'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
            backgroundSize: '5.66px 5.66px'
          }}
        />
        <Box
          as="span"
          sx={{
            gridArea: 'pLeft',
            width: `var(--gh-control-${paddingLeft}-paddingInline${modifier})`,
            backgroundImage:
              highlightPaddingLeft &&
              'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
            backgroundSize: '5.66px 5.66px',
            height: '100%'
          }}
        />
        <Box
          as="span"
          sx={{
            gridArea: 'icon',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill-rule="evenodd"
              d="M5.75 4A1.75 1.75 0 004 5.75v4.5c0 .966.784 1.75 1.75 1.75h4.5A1.75 1.75 0 0012 10.25v-4.5A1.75 1.75 0 0010.25 4h-4.5z"
            ></path>
          </svg>
        </Box>
        <Box
          as="span"
          sx={{
            gridArea: 'gap',
            width: `var(--gh-control-${gap}-gap)`,
            backgroundImage:
              highlightGap &&
              'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
            backgroundSize: '5.66px 5.66px',
            height: '100%'
          }}
        />
        <Box
          as="span"
          sx={{
            gridArea: 'label',
            lineHeight: `var(--gh-control-${lineBox}-lineBoxHeight)`,
            backgroundImage:
              highlightLineBoxHeight &&
              'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
            backgroundSize: '5.66px 5.66px',
            fontSize: 'var(--gh-text-body-size-medium)'
          }}
        >
          label
        </Box>
        <Box
          as="span"
          sx={{
            gridArea: 'pRight',
            width: `var(--gh-control-${paddingRight}-paddingInline${modifier})`,
            backgroundImage:
              highlightPaddingRight &&
              'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
            backgroundSize: '5.66px 5.66px',
            height: '100%'
          }}
        />
        <Box
          as="span"
          sx={{
            gridArea: 'pBottom',
            height: `var(--gh-control-${paddingBottom}-paddingBlock)`,
            backgroundImage:
              highlightPaddingBottom &&
              'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
            backgroundSize: '5.66px 5.66px'
          }}
        />
      </Box>
    </Fragment>
  )
}

export default StackVisual
