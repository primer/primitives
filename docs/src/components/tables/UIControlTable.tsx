// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React, {Fragment} from 'react'
import {Box} from '@primer/react'
import TokenTable from '../TokenTable'
import TokenInlineCode from '../TokenInlineCode'
import FrameworkVariableTable from './FrameworkVariableTable'
import tokens from '../../../../tokens-v2-private/docs/docValues'
import ControlVisual from '../control'

interface UIControlTableProps {
  filePath?: string
  tokenVariant?: string
}

const UIControlTable: React.FC<UIControlTableProps> = ({filePath, tokenVariant}) => {
  return (
    <Box as="div" sx={{overflow: 'auto'}}>
      <TokenTable>
        <Fragment>
          <thead>
            <tr>
              <Box as="th" textAlign="left">
                Example
              </Box>
              <Box as="th" textAlign="left">
                Token
              </Box>
              <Box as="th" textAlign="left">
                Source value
              </Box>
              <Box as="th" textAlign="left">
                Output value
              </Box>
            </tr>
          </thead>
          <tbody>
            {tokens[filePath].map(token => {
              const gapProp = token.name.includes('gap') ? true : false
              const paddingLeft = token.name.includes('paddingInline') ? true : false
              const paddingRight = token.name.includes('paddingInline') ? true : false
              const paddingTop = token.name.includes('paddingBlock') ? true : false
              const paddingBottom = token.name.includes('paddingBlock') ? true : false
              const lineBlockHeightProp = token.name.includes('lineBoxHeight') ? true : false
              const blockSize = token.name.includes('size') ? true : false
              const condensed = token.name.includes('condensed') ? true : false
              const normal = token.name.includes('normal') ? true : false
              const spacious = token.name.includes('spacious') ? true : false
              const tokenVariantString = tokenVariant.replace(/-/g, '')
              const FrameworkVars = [
                {id: 'CSS', token: `--${token.name}`},
                {id: 'JS', token: `${token.path.join('.')}`},
              ]
              return (
                token.name.includes('-control-') &&
                token.name.match(tokenVariant) && (
                  <tr id={token.name} key={token.name}>
                    <td>
                      <ControlVisual
                        gap={tokenVariantString}
                        paddingLeft={tokenVariantString}
                        paddingRight={tokenVariantString}
                        paddingTop={tokenVariantString}
                        paddingBottom={tokenVariantString}
                        blockSize={tokenVariantString}
                        lineBox={tokenVariantString}
                        modifier={condensed ? '-condensed' : normal ? '-normal' : spacious ? '-spacious' : '-normal'}
                        highlightPaddingBottom={paddingBottom}
                        highlightPaddingTop={paddingTop}
                        highlightPaddingRight={paddingRight}
                        highlightPaddingLeft={paddingLeft}
                        highlightGap={gapProp}
                        highlightHeight={blockSize}
                        highlightLineBoxHeight={lineBlockHeightProp}
                      />
                    </td>
                    <FrameworkVariableTable frameworks={FrameworkVars} />
                    <td>
                      <TokenInlineCode>{token.value}</TokenInlineCode>
                    </td>
                    <td>
                      <TokenInlineCode>
                        {token.original.value.includes('{') && !token.original.value.includes('calc') ? (
                          <a href={`#${token.original.value.replace(/[{}]/g, '').replace(/\./g, '-')}`}>
                            {token.original.value.replace(/[{}]/g, '')}
                          </a>
                        ) : (
                          token.original.value
                        )}
                      </TokenInlineCode>
                    </td>
                  </tr>
                )
              )
            })}
          </tbody>
        </Fragment>
      </TokenTable>
    </Box>
  )
}

export default UIControlTable
