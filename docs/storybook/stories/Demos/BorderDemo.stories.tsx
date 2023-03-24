/* eslint @typescript-eslint/consistent-type-imports: 0 */
import React from 'react'
import './PatternOverrides.css'
import type {ComponentMeta, ComponentStory} from '@storybook/react'
import {ColorPreview} from '../Components/ColorPreview'
import {SegmentedControl, ActionList} from '@primer/react'
import {CSSTokenSwatch} from '../Components/CSSTokenSwatch'

export default {
  title: 'Demos/Borders',
} as ComponentMeta<typeof ColorPreview>

export const Borders: ComponentStory<typeof ColorPreview> = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
      <div>
        <h4 style={{marginBlockEnd: '2rem'}}>SegmentedControl</h4>

        <div style={{display: 'flex', gap: '2rem'}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <div className="SegmentedControl" style={{display: 'flex', gap: '1rem'}}>
              <SegmentedControl aria-label="File view">
                <SegmentedControl.Button selected>Preview</SegmentedControl.Button>
                <SegmentedControl.Button>Raw</SegmentedControl.Button>
                <SegmentedControl.Button>Blame</SegmentedControl.Button>
              </SegmentedControl>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <div className="SegmentedControl alt" style={{display: 'flex', gap: '1rem'}}>
              <SegmentedControl aria-label="File view">
                <SegmentedControl.Button selected>Preview</SegmentedControl.Button>
                <SegmentedControl.Button>Raw</SegmentedControl.Button>
                <SegmentedControl.Button>Blame</SegmentedControl.Button>
              </SegmentedControl>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 style={{marginBlockEnd: '1rem'}}>ActionList</h4>

        <div style={{display: 'flex', gap: '2rem'}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <div className="ActionList" style={{display: 'flex', gap: '1rem'}}>
              <ActionList showDividers>
                <ActionList.Item>New file</ActionList.Item>
                <ActionList.Item>Copy link</ActionList.Item>
                <ActionList.Item>Edit file</ActionList.Item>
                <ActionList.Divider />
                <ActionList.Item variant="danger">Danger</ActionList.Item>
              </ActionList>
            </div>
            <CSSTokenSwatch color="borderColor-decorative" />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <div className="ActionList alt" style={{display: 'flex', gap: '1rem'}}>
              <ActionList showDividers>
                <ActionList.Item>New file</ActionList.Item>
                <ActionList.Item>Copy link</ActionList.Item>
                <ActionList.Item>Edit file</ActionList.Item>
                <ActionList.Divider />
                <ActionList.Item variant="danger">Danger</ActionList.Item>
              </ActionList>
            </div>
            <CSSTokenSwatch color="borderColor-muted" />
          </div>
        </div>
      </div>
    </div>
  )
}
