import {IconButton} from '@primer/react'
import {CheckIcon, CopyIcon} from '@primer/octicons-react'
import copy from 'copy-to-clipboard'
import React from 'react'

export type ClipboardCopyProps = {
  value?: any
}

export const ClipboardCopy = ({value}: ClipboardCopyProps) => {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [copied])

  return (
    <IconButton
      aria-label="Copy to clipboard"
      size="small"
      variant="invisible"
      onClick={() => {
        copy(value)
        setCopied(true)
      }}
      icon={copied ? CheckIcon : CopyIcon}
    />
  )
}

export default ClipboardCopy

ClipboardCopy.displayName = 'ClipboardCopy'
