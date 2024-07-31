import {ClipboardCopy} from '../ClipboardCopy/ClipboardCopy'
import React from 'react'
import './InlineCode.css'

export type InlineCodeProps = {
  value?: string
  copyClipboard?: boolean
  cssVar?: boolean
}

export const InlineCode = ({value, copyClipboard, cssVar}: InlineCodeProps) => {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [copied])

  return (
    <span className="InlineCode">
      <code>{cssVar ? `--${value}` : value}</code> {copyClipboard && <ClipboardCopy value={cssVar ? `--${value}` : value} />}
    </span>
  )
}

export default InlineCode

InlineCode.displayName = 'InlineCode'
