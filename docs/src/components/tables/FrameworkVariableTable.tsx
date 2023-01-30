import React, {Fragment} from 'react'
import {Box} from '@primer/react'
import TokenInlineCode from '../TokenInlineCode'
import CopyClipboard from '@primer/gatsby-theme-doctocat/src/components/clipboard-copy'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FrameworkVariableTable(props: {frameworks: any[]}) {
  const tableRow = (
    <Fragment>
      {props.frameworks.map(framework => (
        <tr key={framework.id}>
          <th>{framework.id}</th>
          <td>
            <TokenInlineCode>{framework.token}</TokenInlineCode>
            <CopyClipboard value={`${framework.token}`} />
          </td>
        </tr>
      ))}
    </Fragment>
  )
  return (
    <Box as="td" sx={{padding: '0 !important'}}>
      <Box
        as="table"
        sx={{
          width: '100%',
          '& tr': {
            border: 'none !important',
            display: 'grid',
            gridTemplateColumns: '3ch 2fr',
            alignItems: 'center',
            justifyItems: 'start',
            gap: '16px',
          },
          '& td': {
            border: 'none !important',
            padding: '0 !important',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            width: '100%',
          },
          '& th': {
            border: 'none !important',
            color: 'fg.subtle',
            fontSize: '14px',
            padding: '0 !important',
          },
          '& tr:nth-child(2n)': {background: 'transparent !important'},
          '& tbody': {
            display: 'flex',
            flexDirection: 'column',
            padding: '8px 16px',
            gap: '8px',
          },
          '& button': {
            height: '23.5px',
            width: '23.5px',
            padding: '0',
            display: 'grid',
          },
          '& button > svg': {
            height: '12px',
            width: '12px',
            placeSelf: 'center',
          },
        }}
      >
        <tbody>{tableRow}</tbody>
      </Box>
    </Box>
  )
}

export default FrameworkVariableTable
