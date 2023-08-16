import React from 'react'
import {Box, IconButton, Link, Spinner} from '@primer/react'
import {CheckIcon, AlertIcon, StopIcon, InfoIcon, XIcon} from '@primer/octicons-react'

export default {
  title: 'Demos/Toast',
}

export const ToastPrototype = () => {
  return (
    <div style={{display: 'inline-grid', gridAutoFlow: 'row', gap: '1rem', justifyItems: 'start'}}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'max-content auto max-content',
          alignItems: 'center',
          gap: 'var(--stack-gap-condensed)',
          minWidth: 'var(--overlay-width-xsmall)',
          maxWidth: 'var(--overlay-width-medium)',
          borderRadius: 'var(--overlay-borderRadius)',
          boxShadow: 'var(--shadow-floating-medium)',
          overflow: 'hidden',
          backgroundColor: 'var(--overlay-inverse-bgColor)',
          color: 'var(--fgColor-onEmphasis)',
          padding: 'var(--overlay-padding-normal)',
          paddingBlock: 'var(--overlay-paddingBlock-normal)',
          paddingInlineEnd: 'var(--overlay-padding-condensed)',
          '& p': {
            margin: 0,
          },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            placeSelf: 'center',
            '&[data-variant="info"]': {
              color: 'var(--fgColor-accent-onEmphasis)',
            },
            '&[data-variant="success"]': {
              color: 'var(--fgColor-success-onEmphasis)',
            },
            '&[data-variant="attention"]': {
              color: 'var(--fgColor-attention-onEmphasis)',
            },
            '&[data-variant="danger"]': {
              color: 'var(--fgColor-danger-onEmphasis)',
            },
            '&[data-variant="loading"]': {
              color: 'var(--fgColor-onEmphasis)',
            },
          }}
          data-variant="info"
        >
          <InfoIcon size="small" />
        </Box>
        <p>This is a Toast prototype</p>
        <Box
          sx={{
            display: 'grid',
            gap: 'var(--stack-gap-condensed)',
            gridAutoFlow: 'column',
            alignItems: 'center',
            marginInlineStart: 'var(--stack-gap-condensed)',
          }}
        >
          <Link href="#" sx={{color: 'var(--fgColor-link-onEmphasis)'}}>
            Undo
          </Link>
          <IconButton
            aria-label="Dismiss"
            icon={XIcon}
            variant="invisible"
            sx={{
              color: 'var(--fgColor-onEmphasis)',
              '&:hover': {
                backgroundColor: 'var(--button-invisible-bgColor-hover)',
              },
              '&:active': {
                backgroundColor: 'var(--button-invisible-bgColor-active)',
              },
            }}
            size="small"
          ></IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'inline-grid',
          gridTemplateColumns: 'max-content auto max-content',
          alignItems: 'center',
          gap: 'var(--stack-gap-condensed)',
          minWidth: 'var(--overlay-width-xsmall)',
          maxWidth: 'var(--overlay-width-medium)',
          borderRadius: 'var(--overlay-borderRadius)',
          boxShadow: 'var(--shadow-floating-medium)',
          overflow: 'hidden',
          backgroundColor: 'var(--overlay-inverse-bgColor)',
          color: 'var(--fgColor-onEmphasis)',
          padding: 'var(--overlay-padding-normal)',
          paddingBlock: 'var(--overlay-paddingBlock-normal)',
          paddingInlineEnd: 'var(--overlay-padding-condensed)',
          '& p': {
            margin: 0,
          },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            placeSelf: 'center',
            '&[data-variant="info"]': {
              color: 'var(--fgColor-accent-onEmphasis)',
            },
            '&[data-variant="success"]': {
              color: 'var(--fgColor-success-onEmphasis)',
            },
            '&[data-variant="attention"]': {
              color: 'var(--fgColor-attention-onEmphasis)',
            },
            '&[data-variant="danger"]': {
              color: 'var(--fgColor-danger-onEmphasis)',
            },
            '&[data-variant="loading"]': {
              color: 'var(--fgColor-onEmphasis)',
            },
          }}
          data-variant="info"
        >
          <InfoIcon size="small" />
        </Box>
        <p>This is a Toast prototype</p>
      </Box>
      <Box
        sx={{
          display: 'inline-grid',
          gridTemplateColumns: 'max-content auto max-content',
          alignItems: 'center',
          gap: 'var(--stack-gap-condensed)',
          minWidth: 'var(--overlay-width-xsmall)',
          maxWidth: 'var(--overlay-width-medium)',
          borderRadius: 'var(--overlay-borderRadius)',
          boxShadow: 'var(--shadow-floating-medium)',
          overflow: 'hidden',
          backgroundColor: 'var(--overlay-inverse-bgColor)',
          color: 'var(--fgColor-onEmphasis)',
          padding: 'var(--overlay-padding-normal)',
          paddingBlock: 'var(--overlay-paddingBlock-normal)',
          paddingInlineEnd: 'var(--overlay-padding-condensed)',
          '& p': {
            margin: 0,
          },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            placeSelf: 'center',
            '&[data-variant="info"]': {
              color: 'var(--fgColor-accent-onEmphasis)',
            },
            '&[data-variant="success"]': {
              color: 'var(--fgColor-success-onEmphasis)',
            },
            '&[data-variant="attention"]': {
              color: 'var(--fgColor-attention-onEmphasis)',
            },
            '&[data-variant="danger"]': {
              color: 'var(--fgColor-danger-onEmphasis)',
            },
            '&[data-variant="loading"]': {
              color: 'var(--fgColor-onEmphasis)',
            },
          }}
          data-variant="success"
        >
          <CheckIcon size="small" />
        </Box>
        <p>This is a Toast prototype</p>
      </Box>
      <Box
        sx={{
          display: 'inline-grid',
          gridTemplateColumns: 'max-content auto max-content',
          alignItems: 'center',
          gap: 'var(--stack-gap-condensed)',
          minWidth: 'var(--overlay-width-xsmall)',
          maxWidth: 'var(--overlay-width-medium)',
          borderRadius: 'var(--overlay-borderRadius)',
          boxShadow: 'var(--shadow-floating-medium)',
          overflow: 'hidden',
          backgroundColor: 'var(--overlay-inverse-bgColor)',
          color: 'var(--fgColor-onEmphasis)',
          padding: 'var(--overlay-padding-normal)',
          paddingBlock: 'var(--overlay-paddingBlock-normal)',
          paddingInlineEnd: 'var(--overlay-padding-condensed)',
          '& p': {
            margin: 0,
          },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            placeSelf: 'center',
            '&[data-variant="info"]': {
              color: 'var(--fgColor-accent-onEmphasis)',
            },
            '&[data-variant="success"]': {
              color: 'var(--fgColor-success-onEmphasis)',
            },
            '&[data-variant="attention"]': {
              color: 'var(--fgColor-attention-onEmphasis)',
            },
            '&[data-variant="danger"]': {
              color: 'var(--fgColor-danger-onEmphasis)',
            },
            '&[data-variant="loading"]': {
              color: 'var(--fgColor-onEmphasis)',
            },
          }}
          data-variant="attention"
        >
          <AlertIcon size="small" />
        </Box>
        <p>This is a Toast prototype</p>
      </Box>
      <Box
        sx={{
          display: 'inline-grid',
          gridTemplateColumns: 'max-content auto max-content',
          alignItems: 'center',
          gap: 'var(--stack-gap-condensed)',
          minWidth: 'var(--overlay-width-xsmall)',
          maxWidth: 'var(--overlay-width-medium)',
          borderRadius: 'var(--overlay-borderRadius)',
          boxShadow: 'var(--shadow-floating-medium)',
          overflow: 'hidden',
          backgroundColor: 'var(--overlay-inverse-bgColor)',
          color: 'var(--fgColor-onEmphasis)',
          padding: 'var(--overlay-padding-normal)',
          paddingBlock: 'var(--overlay-paddingBlock-normal)',
          paddingInlineEnd: 'var(--overlay-padding-condensed)',
          '& p': {
            margin: 0,
          },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            placeSelf: 'center',
            '&[data-variant="info"]': {
              color: 'var(--fgColor-accent-onEmphasis)',
            },
            '&[data-variant="success"]': {
              color: 'var(--fgColor-success-onEmphasis)',
            },
            '&[data-variant="attention"]': {
              color: 'var(--fgColor-attention-onEmphasis)',
            },
            '&[data-variant="danger"]': {
              color: 'var(--fgColor-danger-onEmphasis)',
            },
            '&[data-variant="loading"]': {
              color: 'var(--fgColor-onEmphasis)',
            },
          }}
          data-variant="danger"
        >
          <StopIcon size="small" />
        </Box>
        <p>This is a Toast prototype</p>
      </Box>
      <Box
        sx={{
          display: 'inline-grid',
          gridTemplateColumns: 'max-content auto max-content',
          alignItems: 'center',
          gap: 'var(--stack-gap-condensed)',
          maxWidth: '450px',
          minWidth: 'var(--overlay-width-xsmall)',
          maxWidth: 'var(--overlay-width-medium)',
          borderRadius: 'var(--overlay-borderRadius)',
          boxShadow: 'var(--shadow-floating-medium)',
          overflow: 'hidden',
          backgroundColor: 'var(--overlay-inverse-bgColor)',
          color: 'var(--fgColor-onEmphasis)',
          padding: 'var(--overlay-padding-normal)',
          paddingBlock: 'var(--overlay-paddingBlock-normal)',
          paddingInlineEnd: 'var(--overlay-padding-condensed)',
          '& p': {
            margin: 0,
          },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            placeSelf: 'center',
            '&[data-variant="info"]': {
              color: 'var(--fgColor-accent-onEmphasis)',
            },
            '&[data-variant="success"]': {
              color: 'var(--fgColor-success-onEmphasis)',
            },
            '&[data-variant="attention"]': {
              color: 'var(--fgColor-attention-onEmphasis)',
            },
            '&[data-variant="danger"]': {
              color: 'var(--fgColor-danger-onEmphasis)',
            },
            '&[data-variant="loading"]': {
              color: 'var(--fgColor-onEmphasis)',
            },
          }}
          data-variant="loading"
        >
          <Spinner size="small" />
        </Box>
        <p>This is a Toast prototype</p>
      </Box>
    </div>
  )
}
