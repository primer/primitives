import React from 'react'
import {Background} from './Background.stories'
import {Border} from './Border.stories'
import {Foreground} from './Foreground.stories'
import {Shadows} from './Shadows.stories'
import {Neutral, Accent, Success, Attention, Severe, Danger, Open, Closed, Done, Sponsors} from './Roles.stories'

export default {
  title: 'Color/Functional/All',
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
  tags: ['excludeSnapshot'],
}

export const All = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '3rem'}}>
      {[
        {title: 'Backgrounds', component: <Background />},
        {title: 'Borders', component: <Border />},
        {title: 'Foregrounds', component: <Foreground />},
        {title: 'Shadows', component: <Shadows />},
        {title: 'Neutral', component: <Neutral />},
        {title: 'Accent', component: <Accent />},
        {title: 'Success', component: <Success />},
        {title: 'Attention', component: <Attention />},
        {title: 'Severe', component: <Severe />},
        {title: 'Danger', component: <Danger />},
        {title: 'Open', component: <Open />},
        {title: 'Closed', component: <Closed />},
        {title: 'Done', component: <Done />},
        {title: 'Sponsors', component: <Sponsors />},
      ].map(({title, component}) => (
        <div>
          <h2 style={{marginBlockEnd: '0.5rem'}}>{title}</h2>
          <div className="SwatchDecorator">{component}</div>
        </div>
      ))}
    </div>
  )
}
