import React from 'react'
import {Banner} from '@primer/react'
import {ColorScaleByName} from '../../StorybookComponents/ColorScale/ColorScaleByName'
import {getTokensByName} from '../../utilities/getTokensByName'
import {withColorTokens, type ColorTokens} from '../../utilities/withColorTokens'

export default {
  title: 'Color/Display/Scales',
  decorators: [withColorTokens],
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {
      showPanel: false,
    },
  },
}

export const Scales = ({colorTokens}: {colorTokens: ColorTokens}) => {
  const hues = [
    ...new Set(
      getTokensByName(colorTokens, 'display')
        .filter(token => token.name.includes('scale'))
        .map(token => token.path[1]),
    ),
  ]

  return (
    <div style={{padding: '24px'}}>
      <Banner title="Display scales are designed for very limited use cases only." variant="warning">
        If you feel like they make sense in your case, please reach out to the Primer team.
      </Banner>
      <div className="ColorScale--grid" style={{paddingTop: '1rem'}}>
        {hues.map(hue => (
          <div key={hue}>
            <ColorScaleByName colorBaseVariable={`display-${hue}-scale`} steps={12} />
          </div>
        ))}
      </div>
    </div>
  )
}
