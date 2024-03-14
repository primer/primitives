import React from 'react'
// eslint-disable-next-line import/extensions
import colorData from '../../../../tokens-next-private/docs/functional/themes/light.json'
import {ColorTokenSwatch} from '../StorybookComponents/ColorTokenSwatch/ColorTokenSwatch'

const extractNameAndValue = Object.entries(colorData)
  .map(([key, details]) => ({
    name: details.name,
    value: details.value,
  }))
  .filter(item => !item.name.includes('scale'))

export default {
  title: 'VRT/All Colors',
  parameters: {
    parameters: {
      controls: {hideNoControlsWarning: true},
      options: {
        showPanel: false,
      },
    },
  },
  args: {
    colorToken: extractNameAndValue[0].name,
  },
  argTypes: {
    colorToken: {
      control: {
        type: 'select',
      },
      options: extractNameAndValue.map(item => item.name),
    },
  },
}

export const ColorSwatches = ({colorToken}: {colorToken: string}) => {
  return (
    <div style={{display: 'grid', placeContent: 'center', padding: '1rem'}}>
      <ColorTokenSwatch
        size="large"
        bgColor={
          colorToken.includes('bgColor') || colorToken.includes('color') || colorToken.includes('fgColor')
            ? colorToken
            : undefined
        }
        shadowColor={colorToken.includes('shadow') ? colorToken : undefined}
        borderColor={colorToken.includes('borderColor') ? colorToken : undefined}
        outlineColor={colorToken.includes('outline') ? colorToken : undefined}
      />
    </div>
  )
}
