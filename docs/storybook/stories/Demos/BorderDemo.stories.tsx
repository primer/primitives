/* eslint @typescript-eslint/consistent-type-imports: 0 */
import React from 'react'
import './PatternOverrides.css'
import {SegmentedControl, ActionList} from '@primer/react'
import {CSSTokenSwatch} from '../StorybookComponents/CSSTokenSwatch/CSSTokenSwatch'

export default {
  title: 'Demos/Borders',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {
      showPanel: false,
    },
  },
}

export const Borders = () => {
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
                <ActionList.Item as="li">New file</ActionList.Item>
                <ActionList.Item as="li">Copy link</ActionList.Item>
                <ActionList.Item as="li">Edit file</ActionList.Item>
                <ActionList.Divider />
                <ActionList.Item as="li" variant="danger">
                  Danger
                </ActionList.Item>
              </ActionList>
            </div>
            <CSSTokenSwatch color="borderColor-muted" />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <div className="ActionList alt" style={{display: 'flex', gap: '1rem'}}>
              <ActionList showDividers>
                <ActionList.Item as="li">New file</ActionList.Item>
                <ActionList.Item as="li">Copy link</ActionList.Item>
                <ActionList.Item as="li">Edit file</ActionList.Item>
                <ActionList.Divider />
                <ActionList.Item as="li" variant="danger">
                  Danger
                </ActionList.Item>
              </ActionList>
            </div>
            <CSSTokenSwatch color="borderColor-muted" />
          </div>
        </div>
      </div>
    </div>
  )
}
