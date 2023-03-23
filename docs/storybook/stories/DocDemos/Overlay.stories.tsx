/* eslint @typescript-eslint/consistent-type-imports: 0 */
import React from 'react'
import type {ComponentMeta, ComponentStory} from '@storybook/react'
import {ColorPreview} from '../Components/ColorPreview'
import {ActionMenu, ActionList} from '@primer/react'

export default {
  title: 'Demos/Overlay',
} as ComponentMeta<typeof ColorPreview>

export const ActionMenuDemo: ComponentStory<typeof ColorPreview> = () => {
  return (
    <>
      <ActionMenu open>
        <ActionMenu.Button>Open menu</ActionMenu.Button>
        <ActionMenu.Overlay width="auto">
          <ActionList>
            <ActionList.Item>Workflows</ActionList.Item>
            <ActionList.Item>Archived items</ActionList.Item>
            <ActionList.LinkItem href="/">Settings</ActionList.LinkItem>
            <ActionList.Item>Make a copy</ActionList.Item>
            <ActionList.Divider />
            <ActionList.Group title="Github projects">
              <ActionList.LinkItem href="/">What&apos;s new</ActionList.LinkItem>
              <ActionList.LinkItem href="/">Give feedback</ActionList.LinkItem>
              <ActionList.LinkItem href="/">GitHub Docs</ActionList.LinkItem>
            </ActionList.Group>
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </>
  )
}
