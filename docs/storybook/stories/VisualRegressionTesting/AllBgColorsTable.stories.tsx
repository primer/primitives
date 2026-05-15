import React from 'react'
import {Stack} from '@primer/react/experimental'
import {InlineCode} from '../StorybookComponents/InlineCode/InlineCode'
import {themeTokens} from '../utilities/withColorTokens'
import styles from './AllBgColorsTable.module.css'

const themes = [
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

const bgColorTokenNames = Object.keys(themeTokens.light).filter(name => name.startsWith('bgColor-'))

export default {
  title: 'VRT/All bgColor themes',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {showPanel: false},
  },
}

export const AllBgColorThemesInOneTable = () => {
  return (
    // this is not accessible and really just for dev purposes
    <Stack gap="condensed" className={styles.table}>
      <Stack direction="horizontal" className={styles.sticky}>
        <Stack.Item className={styles.name}>blank</Stack.Item>
        {themes.map(theme => (
          <Stack.Item key={theme.id} className={styles.themeCell}>
            {theme.label}
          </Stack.Item>
        ))}
      </Stack>
      <Stack>
        {bgColorTokenNames.map(tokenName => (
          <Stack key={tokenName} direction="horizontal">
            <Stack.Item className={styles.name}>
              <InlineCode value={tokenName} />
            </Stack.Item>
            {themes.map(theme => {
              const token = themeTokens[theme.id][tokenName]
              const value = token?.value ?? '—'
              return (
                <Stack.Item
                  key={`${tokenName}-${theme.id}`}
                  data-color-mode={theme.mode}
                  data-light-theme={theme.id}
                  data-dark-theme={theme.id}
                  className={styles.themeCell}
                >
                  <div className={styles.swatch} style={{backgroundColor: value}} />
                  <div className={styles.value} style={{color: theme.mode === 'dark' ? '#ffffff' : undefined}}>
                    {value}
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
