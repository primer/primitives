import {BaseStyles} from '@primer/react'
import SkipLink from '@primer/gatsby-theme-doctocat/src/components/skip-link'
import React from 'react'
import {ColorThemeProvider} from '../../../components/color-theme-context'

// Shadowing this file to wrap the page in our custom ColorThemeProvider.

function wrapPageElement({element}) {
  return (
    <ColorThemeProvider>
      <BaseStyles>
        <SkipLink />
        {element}
      </BaseStyles>
    </ColorThemeProvider>
  )
}

export default wrapPageElement
