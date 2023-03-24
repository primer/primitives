/* eslint @typescript-eslint/consistent-type-imports: 0 */
import React, {useState, useRef} from 'react'
import {ActionMenu, ActionList} from '@primer/react'

export default {
  title: 'Demos/Overlay',
}

export const ActionMenuDemo = () => {
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

export const DialogDemo = () => {
  return (
    <div id="overlay-backdrop" className="Overlay-backdrop--center">
      <div className="Overlay Overlay--width-medium Overlay--height-medium">
        <header className="Overlay-header">
          <div className="Overlay-headerContentWrap">
            <div className="Overlay-titleWrap">
              <h1 id="title-id" className="Overlay-title">
                Dialog title
              </h1>
              <h2 id="description-id" className="Overlay-description">
                Optional dialog description
              </h2>
            </div>
            <div className="Overlay-actionWrap">
              <button className="Overlay-closeButton" aria-label="Close">
                <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </header>
        <div className="Overlay-body">
          <p>Dialog body</p>
        </div>
      </div>
    </div>
  )
}
