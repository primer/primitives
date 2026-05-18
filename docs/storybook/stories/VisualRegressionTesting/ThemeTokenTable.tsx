import React from 'react'
import {Stack} from '@primer/react/experimental'
import {InlineCode} from '../StorybookComponents/InlineCode/InlineCode'
import {ColorTokenSwatch} from '../StorybookComponents/ColorTokenSwatch/ColorTokenSwatch'
import {themeTokens} from '../utilities/withColorTokens'
import {formatTokenValue} from '../utilities/formatTokenValue'
import styles from './ThemeTokenTable.module.css'

export const themes = [
  {id: 'dark', label: 'dark', mode: 'dark'},
  {id: 'dark_dimmed', label: 'd dim', mode: 'dark'},
  {id: 'dark_dimmed_high_contrast', label: 'd dim hc', mode: 'dark'},
  {id: 'dark_tritanopia', label: 'd tri', mode: 'dark'},
  {id: 'dark_colorblind', label: 'd cb', mode: 'dark'},
  {id: 'dark_high_contrast', label: 'd hc', mode: 'dark'},
  {id: 'dark_tritanopia_high_contrast', label: 'd tri hc', mode: 'dark'},
  {id: 'dark_colorblind_high_contrast', label: 'd cb hc', mode: 'dark'},
  {id: 'light', label: 'light', mode: 'light'},
  {id: 'light_tritanopia', label: 'l tri', mode: 'light'},
  {id: 'light_colorblind', label: 'l cb', mode: 'light'},
  {id: 'light_high_contrast', label: 'l hc', mode: 'light'},
  {id: 'light_tritanopia_high_contrast', label: 'l tri hc', mode: 'light'},
  {id: 'light_colorblind_high_contrast', label: 'l cb hc', mode: 'light'},
] as const

export type ThemeId = (typeof themes)[number]['id']

export type ThemeTokenTableProps = {
  title: string
  tokenNames: string[]
  previewKind: 'background' | 'foreground' | 'border' | 'shadow' | 'selection' | 'mixed'
}

function previewProps(tokenName: string, previewKind: ThemeTokenTableProps['previewKind']) {
  switch (previewKind) {
    case 'background':
      return {bgColor: tokenName}
    case 'foreground':
      return {textColor: tokenName}
    case 'border':
      return {borderColor: tokenName}
    case 'shadow':
      return {shadowColor: tokenName}
    case 'selection':
      return {selectionColor: tokenName}
    case 'mixed':
      if (tokenName.includes('fgColor')) return {textColor: tokenName}
      if (tokenName.includes('borderColor')) return {borderColor: tokenName}
      if (tokenName.includes('shadow')) return {shadowColor: tokenName}
      if (tokenName.includes('selection')) return {selectionColor: tokenName}
      if (tokenName.includes('outlineColor')) return {outlineColor: tokenName}
      if (tokenName.startsWith('ansi-')) return {textColor: tokenName}
      if (tokenName.includes('iconColor') || tokenName.includes('bgColor') || tokenName.includes('color')) {
        return {bgColor: tokenName}
      }
      return {bgColor: tokenName}
    default:
      return {}
  }
}

export function ThemeTokenTable({title, tokenNames, previewKind}: ThemeTokenTableProps) {
  return (
    // this is not accessible and really just for dev purposes
    <Stack gap="condensed" className={styles.table}>
      <h1 className="sr-only">{title}</h1>
      <Stack direction="horizontal" className={styles.sticky}>
        <Stack.Item className={styles.name}>blank</Stack.Item>
        {themes.map(theme => (
          <Stack.Item key={theme.id} className={styles.themeCell}>
            {theme.label}
          </Stack.Item>
        ))}
      </Stack>
      <Stack>
        {tokenNames.map(tokenName => (
          <Stack key={tokenName} direction="horizontal">
            <Stack.Item className={styles.name}>
              <InlineCode value={tokenName} />
            </Stack.Item>
            {themes.map(theme => {
              const token = themeTokens[theme.id][tokenName]
              return (
                <Stack.Item
                  key={`${tokenName}-${theme.id}`}
                  data-color-mode={theme.mode}
                  data-light-theme={theme.id}
                  data-dark-theme={theme.id}
                  className={styles.themeCell}
                >
                  <ColorTokenSwatch size="large" {...previewProps(tokenName, previewKind)} />
                  <div className={styles.value} style={{color: 'var(--fgColor-default)'}}>
                    {formatTokenValue(token?.value)}
                  </div>
                </Stack.Item>
              )
            })}
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}
