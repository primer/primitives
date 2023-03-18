/* eslint @typescript-eslint/consistent-type-imports: 0 */
import React from 'react'
import './PatternOverrides.css'
import type {ComponentMeta, ComponentStory} from '@storybook/react'
import {ColorPreview} from '../../Components/ColorPreview'
import {ToggleSwitch, SegmentedControl, ActionList, Button, TextInput, Checkbox, Radio, Box} from '@primer/react'

export default {
  title: 'Color/Patterns/Controls',
} as ComponentMeta<typeof ColorPreview>

export const ToggleSwitchScheme: ComponentStory<typeof ColorPreview> = () => {
  return (
    <>
      <div className="ToggleSwitch" style={{display: 'flex', gap: '1rem', padding: '2rem'}}>
        <ToggleSwitch aria-labelledby="switchLabel" />
        <ToggleSwitch disabled aria-labelledby="switchLabel" />
        <ToggleSwitch checked aria-labelledby="switchLabel" />
        <ToggleSwitch checked disabled aria-labelledby="switchLabel" />
      </div>
      <div
        className="ToggleSwitch"
        style={{display: 'flex', gap: '1rem', padding: '2rem', backgroundColor: 'var(--bgColor-secondary)'}}
      >
        <ToggleSwitch aria-labelledby="switchLabel" />
        <ToggleSwitch disabled aria-labelledby="switchLabel" />
        <ToggleSwitch checked aria-labelledby="switchLabel" />
        <ToggleSwitch checked disabled aria-labelledby="switchLabel" />
      </div>
    </>
  )
}

export const SegmentedControlScheme: ComponentStory<typeof ColorPreview> = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleSegmentChange = (selectedIndex: React.SetStateAction<number>) => {
    setSelectedIndex(selectedIndex)
  }
  return (
    <div className="SegmentedControl" style={{display: 'flex', gap: '1rem'}}>
      <SegmentedControl aria-label="File view" onChange={handleSegmentChange}>
        <SegmentedControl.Button selected={selectedIndex === 0}>Preview</SegmentedControl.Button>
        <SegmentedControl.Button selected={selectedIndex === 1}>Raw</SegmentedControl.Button>
        <SegmentedControl.Button selected={selectedIndex === 2}>Blame</SegmentedControl.Button>
      </SegmentedControl>
    </div>
  )
}

export const ActionListScheme: ComponentStory<typeof ColorPreview> = () => {
  return (
    <div style={{display: 'flex', gap: '1rem'}}>
      <Box bg="canvas.default"></Box>
      <ActionList>
        <ActionList.Item>New file</ActionList.Item>
        <ActionList.Item>Copy link</ActionList.Item>
        <ActionList.Item>Edit file</ActionList.Item>
        <ActionList.Divider />
        <ActionList.Item variant="danger">Delete file</ActionList.Item>
      </ActionList>
    </div>
  )
}

export const ButtonScheme: ComponentStory<typeof ColorPreview> = () => {
  return (
    <div className="Button" style={{display: 'flex', gap: '1rem'}}>
      <Button id="default">Default</Button>
      <Button disabled id="default">
        Default
      </Button>
      <Button id="invisible" variant="invisible">
        Default
      </Button>
      <Button variant="primary" id="primary">
        Default
      </Button>
      <Button variant="primary" id="primary" disabled>
        Default
      </Button>
      <Button variant="danger" id="danger">
        Default
      </Button>
      <Button variant="danger" id="danger" disabled>
        Default
      </Button>
      <Button variant="outline" id="outline">
        Default
      </Button>
      <Button variant="outline" id="outline" disabled>
        Default
      </Button>
    </div>
  )
}

export const InputScheme: ComponentStory<typeof ColorPreview> = () => {
  return (
    <div className="Input" style={{display: 'flex', gap: '1rem'}}>
      <TextInput aria-label="Zipcode" name="zipcode" placeholder="Zipcode" autoComplete="postal-code" />
      <TextInput disabled aria-label="Zipcode" name="zipcode" placeholder="Zipcode" autoComplete="postal-code" />
      <TextInput contrast aria-label="Zipcode" name="zipcode" placeholder="Find user" autoComplete="postal-code" />
      <TextInput
        validationStatus="error"
        aria-label="Zipcode"
        name="zipcode"
        placeholder="Error"
        autoComplete="postal-code"
      />
      <TextInput
        validationStatus="warning"
        aria-label="Zipcode"
        name="zipcode"
        placeholder="Warning"
        autoComplete="postal-code"
      />
      <Checkbox aria-label="Checkbox" checked />
      <Radio aria-label="Radio" checked value="2" />
    </div>
  )
}
