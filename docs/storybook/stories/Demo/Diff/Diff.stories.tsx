import React from 'react'
import './Diff.css'
import {Box, Link} from '@primer/react'

export default {
  title: 'Testing/Diff',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {
      showPanel: false,
    },
  },
}

type DiffLineType = 'hunk' | 'addition' | 'deletion' | 'default' | 'empty'

const DiffLine = ({
  lineNumber = 11,
  text = '// TODO: <span class="diff-line-word">1234</span> example line',
  type = 'default',
}: {
  lineNumber?: number
  text?: string
  type?: DiffLineType
}) => {
  return (
    <table width="100%" className={`diff-line type-${type}`}>
      <tbody>
        <tr>
          <td aria-label={`Line ${lineNumber}`} data-line-number="true" className="diff-line-number" colSpan={1}>
            <code>{type !== 'empty' ? lineNumber : ' '}</code>
          </td>
          <td className="diff-text-cell">
            {type !== 'empty' && (
              <code>
                <div dangerouslySetInnerHTML={{__html: text}}></div>
              </code>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

const DiffHeader = ({filename = '.changeset/plenty-walls-buy.md'}: {filename?: string}) => {
  return (
    <div className="diff-header">
      <Link muted>{filename}</Link>
    </div>
  )
}

export const Diff = () => {
  return (
    <div className="DiffContainer">
      <DiffHeader />
      <DiffLine lineNumber={11} type="hunk" />
      <DiffLine lineNumber={12} type="addition" />
      <DiffLine lineNumber={13} type="deletion" />
      <DiffLine type="empty" />
      <DiffLine lineNumber={14} type="default" />
    </div>
  )
}
