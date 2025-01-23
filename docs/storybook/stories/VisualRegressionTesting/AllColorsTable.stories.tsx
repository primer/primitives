import React from 'react'
import lightColorTokens from '../../../../dist/docs/functional/themes/light.json'
import {Stack} from '@primer/react/drafts'
import {InlineCode} from '../StorybookComponents/InlineCode/InlineCode'
import {ColorTokenSwatch} from '../StorybookComponents/ColorTokenSwatch/ColorTokenSwatch'
import styles from './AllColorsTable.module.css'

export default {
  title: 'VRT/All color themes',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {showPanel: false},
  },
}

export const AllThemesInOneTable = () => {
  const data = Object.entries(lightColorTokens)
    .filter(([name]) => !name.startsWith('border-'))
    .map(([name, token]) => {
      return {
        id: name,
        ...token,
      }
    })

  return (
    // this is not accessible and really just for dev purposes
    <Stack gap="condensed">
      <Stack direction="horizontal" className={styles.sticky}>
        <Stack.Item className={styles.name}>blank</Stack.Item>
        <Stack.Item className={styles.swatch}>dark</Stack.Item>
        <Stack.Item className={styles.swatch}>d hc</Stack.Item>
        <Stack.Item className={styles.swatch}>d dim</Stack.Item>
        <Stack.Item className={styles.swatch}>d tri</Stack.Item>
        <Stack.Item className={styles.swatch}>d cb</Stack.Item>
        <Stack.Item className={styles.swatch}>light</Stack.Item>
        <Stack.Item className={styles.swatch}>l hc</Stack.Item>
        <Stack.Item className={styles.swatch}>l tri</Stack.Item>
        <Stack.Item className={styles.swatch}>l cb</Stack.Item>
      </Stack>
      <Stack>
        {data.map(({id}) => (
          <Stack direction="horizontal">
            <Stack.Item className={styles.name}>
              <InlineCode value={id} />
            </Stack.Item>
            <Stack.Item data-color-mode="dark" data-light-theme="dark" data-dark-theme="dark" className={styles.swatch}>
              <ColorTokenSwatch
                bgColor={
                  id.includes('bgColor') || id.includes('color') || id.includes('fgColor') || id.includes('iconColor')
                    ? id
                    : undefined
                }
                shadowColor={id.includes('shadow') ? id : undefined}
                borderColor={id.includes('borderColor') ? id : undefined}
                outlineColor={id.includes('outline') && !id.includes('borderColor') ? id : undefined}
              />
            </Stack.Item>
            <Stack.Item
              data-color-mode="dark"
              data-light-theme="dark_high_contrast"
              data-dark-theme="dark_high_contrast"
              className={styles.swatch}
            >
              <ColorTokenSwatch
                bgColor={
                  id.includes('bgColor') || id.includes('color') || id.includes('fgColor') || id.includes('iconColor')
                    ? id
                    : undefined
                }
                shadowColor={id.includes('shadow') ? id : undefined}
                borderColor={id.includes('borderColor') ? id : undefined}
                outlineColor={id.includes('outline') && !id.includes('borderColor') ? id : undefined}
              />
            </Stack.Item>
            <Stack.Item
              data-color-mode="dark"
              data-light-theme="dark_dimmed"
              data-dark-theme="dark_dimmed"
              className={styles.swatch}
            >
              <ColorTokenSwatch
                bgColor={
                  id.includes('bgColor') || id.includes('color') || id.includes('fgColor') || id.includes('iconColor')
                    ? id
                    : undefined
                }
                shadowColor={id.includes('shadow') ? id : undefined}
                borderColor={id.includes('borderColor') ? id : undefined}
                outlineColor={id.includes('outline') && !id.includes('borderColor') ? id : undefined}
              />
            </Stack.Item>
            <Stack.Item
              data-color-mode="dark"
              data-light-theme="dark_tritanopia"
              data-dark-theme="dark_tritanopia"
              className={styles.swatch}
            >
              <ColorTokenSwatch
                bgColor={
                  id.includes('bgColor') || id.includes('color') || id.includes('fgColor') || id.includes('iconColor')
                    ? id
                    : undefined
                }
                shadowColor={id.includes('shadow') ? id : undefined}
                borderColor={id.includes('borderColor') ? id : undefined}
                outlineColor={id.includes('outline') && !id.includes('borderColor') ? id : undefined}
              />
            </Stack.Item>
            <Stack.Item
              data-color-mode="dark"
              data-light-theme="dark_colorblind"
              data-dark-theme="dark_colorblind"
              className={styles.swatch}
            >
              <ColorTokenSwatch
                bgColor={
                  id.includes('bgColor') || id.includes('color') || id.includes('fgColor') || id.includes('iconColor')
                    ? id
                    : undefined
                }
                shadowColor={id.includes('shadow') ? id : undefined}
                borderColor={id.includes('borderColor') ? id : undefined}
                outlineColor={id.includes('outline') && !id.includes('borderColor') ? id : undefined}
              />
            </Stack.Item>
            <Stack.Item
              data-color-mode="light"
              data-light-theme="light"
              data-dark-theme="light"
              className={styles.swatch}
            >
              <ColorTokenSwatch
                bgColor={
                  id.includes('bgColor') || id.includes('color') || id.includes('fgColor') || id.includes('iconColor')
                    ? id
                    : undefined
                }
                shadowColor={id.includes('shadow') ? id : undefined}
                borderColor={id.includes('borderColor') ? id : undefined}
                outlineColor={id.includes('outline') && !id.includes('borderColor') ? id : undefined}
              />
            </Stack.Item>
            <Stack.Item
              data-color-mode="light"
              data-light-theme="light_high_contrast"
              data-dark-theme="light_high_contrast"
              className={styles.swatch}
            >
              <ColorTokenSwatch
                bgColor={
                  id.includes('bgColor') || id.includes('color') || id.includes('fgColor') || id.includes('iconColor')
                    ? id
                    : undefined
                }
                shadowColor={id.includes('shadow') ? id : undefined}
                borderColor={id.includes('borderColor') ? id : undefined}
                outlineColor={id.includes('outline') && !id.includes('borderColor') ? id : undefined}
              />
            </Stack.Item>
            <Stack.Item
              data-color-mode="light"
              data-light-theme="light_tritanopia"
              data-dark-theme="light_tritanopia"
              className={styles.swatch}
            >
              <ColorTokenSwatch
                bgColor={
                  id.includes('bgColor') || id.includes('color') || id.includes('fgColor') || id.includes('iconColor')
                    ? id
                    : undefined
                }
                shadowColor={id.includes('shadow') ? id : undefined}
                borderColor={id.includes('borderColor') ? id : undefined}
                outlineColor={id.includes('outline') && !id.includes('borderColor') ? id : undefined}
              />
            </Stack.Item>
            <Stack.Item
              data-color-mode="light"
              data-light-theme="light_colorblind"
              data-dark-theme="light_colorblind"
              className={styles.swatch}
            >
              <ColorTokenSwatch
                bgColor={
                  id.includes('bgColor') || id.includes('color') || id.includes('fgColor') || id.includes('iconColor')
                    ? id
                    : undefined
                }
                shadowColor={id.includes('shadow') ? id : undefined}
                borderColor={id.includes('borderColor') ? id : undefined}
                outlineColor={id.includes('outline') && !id.includes('borderColor') ? id : undefined}
              />
            </Stack.Item>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}
