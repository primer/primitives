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
    color: extractNameAndValue[0].name,
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: extractNameAndValue.map(item => item.name),
    },
  },
}

export const ColorSwatches = ({color}: {color: string}) => {
  return (
    <div style={{display: 'grid', placeContent: 'center', padding: '1rem'}}>
      <ColorTokenSwatch
        size="large"
        bgColor={color.includes('bgColor') || color.includes('color') ? color : undefined}
        textColor={color.includes('fgColor') ? color : undefined}
        shadowColor={color.includes('shadow') ? color : undefined}
        borderColor={color.includes('borderColor') ? color : undefined}
        outlineColor={color.includes('outline') ? color : undefined}
      />
    </div>
  )
}
