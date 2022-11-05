import React from 'react'
import {Button} from '@primer/react'

export default {
  title: 'Example/Button',
  component: Button
}

export const test = () => <Button sx={{color: 'var(--color-fg-default)'}}>Test</Button>
