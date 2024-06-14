import React from 'react'
export default {
  title: 'LanguageBorder',
  parameters: {
    storyType: 'swatch',
    controls: {hideNoControlsWarning: true},
  },
}

export const Test = () => {
  return (
    <>
      <div
        style={{
          height: '12px',
          width: '12px',
          background: 'pink',
          borderRadius: '100%',
          border: 'solid 1px var(--borderColor-translucent)',
        }}
      ></div>
    </>
  )
}
