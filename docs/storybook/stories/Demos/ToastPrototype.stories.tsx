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
          gap: 'var(--stack-gap-normal)',
          maxWidth: '450px',
          borderRadius: 'var(--borderRadius-medium)',
          boxShadow: 'shadow.large',
          overflow: 'hidden',
          backgroundColor: 'var(--bgColor-default)',
          color: 'var(--fgColor-default)',
          padding: 'var(--stack-padding-normal)',
          paddingInlineEnd: 'var(--stack-padding-condensed)',
          '& p': {
            margin: 0,
          },
        }}
        data-color-mode="dark"
        data-dark-theme="dark"
        data-light-theme="dark"
      >
        <Box
          sx={{
            display: 'grid',
            placeSelf: 'center',
            '&[data-variant="info"]': {
              color: 'var(--fgColor-accent-default)',
            },
            '&[data-variant="success"]': {
              color: 'var(--fgColor-success-default)',
            },
            '&[data-variant="attention"]': {
              color: 'var(--fgColor-attention-default)',
            },
            '&[data-variant="danger"]': {
              color: 'var(--fgColor-danger-default)',
            },
            '&[data-variant="loading"]': {
              color: 'var(--fgColor-default-default)',
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
          <Link href="#" sx={{color: 'var(--fgColor-link-inverse)'}}>
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
          gap: 'var(--stack-gap-normal)',
          maxWidth: '450px',
          borderRadius: 'var(--borderRadius-medium)',
          boxShadow: 'shadow.large',
          overflow: 'hidden',
          backgroundColor: 'var(--bgColor-emphasis)',
          color: 'var(--fgColor-onEmphasis)',
          padding: 'var(--stack-padding-normal)',
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
              color: 'var(--fgColor-default-inverse)',
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
          gap: 'var(--stack-gap-normal)',
          maxWidth: '450px',
          borderRadius: 'var(--borderRadius-medium)',
          boxShadow: 'shadow.large',
          overflow: 'hidden',
          backgroundColor: 'var(--bgColor-emphasis)',
          color: 'var(--fgColor-onEmphasis)',
          padding: 'var(--stack-padding-normal)',
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
              color: 'var(--fgColor-default-inverse)',
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
          gap: 'var(--stack-gap-normal)',
          maxWidth: '450px',
          borderRadius: 'var(--borderRadius-medium)',
          boxShadow: 'shadow.large',
          overflow: 'hidden',
          backgroundColor: 'var(--bgColor-emphasis)',
          color: 'var(--fgColor-onEmphasis)',
          padding: 'var(--stack-padding-normal)',
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
              color: 'var(--fgColor-default-inverse)',
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
          gap: 'var(--stack-gap-normal)',
          maxWidth: '450px',
          borderRadius: 'var(--borderRadius-medium)',
          boxShadow: 'shadow.large',
          overflow: 'hidden',
          backgroundColor: 'var(--bgColor-emphasis)',
          color: 'var(--fgColor-onEmphasis)',
          padding: 'var(--stack-padding-normal)',
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
              color: 'var(--fgColor-default-inverse)',
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
          gap: 'var(--stack-gap-normal)',
          maxWidth: '450px',
          borderRadius: 'var(--borderRadius-medium)',
          boxShadow: 'shadow.large',
          overflow: 'hidden',
          backgroundColor: 'var(--bgColor-emphasis)',
          color: 'var(--fgColor-onEmphasis)',
          padding: 'var(--stack-padding-normal)',
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
              color: 'var(--fgColor-default-inverse)',
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
