import {ClipboardCopy} from '../ClipboardCopy/ClipboardCopy'
import React from 'react'
import './InlineCode.css'

export type InlineCodeProps = {
  value?: string
  copyClipboard?: boolean
}

export const InlineCode = ({value, copyClipboard}: InlineCodeProps) => {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [copied])

  return (
    <span className="InlineCode">
      {/* <code>{value}</code> {copyClipboard && <ClipboardCopy value={`--${value}`} />} */}
      {copyClipboard && <ClipboardCopy value={`--${value}`} />}
      <code>{value}</code>
    </span>
  )
}

export default InlineCode

InlineCode.displayName = 'InlineCode'
