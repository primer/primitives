/* eslint @typescript-eslint/consistent-type-imports: 0 */
import React from 'react'
import './PatternOverrides.css'
import {ToggleSwitch, SegmentedControl, ActionList, Button, TextInput, Checkbox, Radio} from '@primer/react'
import {EyeIcon, HeartIcon} from '@primer/octicons-react'

export default {
  title: 'Demos/Controls',
}

export const ToggleSwitchScheme = () => {
  return (
    <>
      <div className="ToggleSwitch" style={{display: 'flex', gap: '1rem', padding: '2rem'}}>
        <ToggleSwitch aria-labelledby="switchLabel" />
        <ToggleSwitch disabled aria-labelledby="switchLabel" />
        <ToggleSwitch checked aria-labelledby="switchLabel" />
        <ToggleSwitch checked disabled aria-labelledby="switchLabel" />
      </div>
      <div style={{display: 'flex', gap: '1rem', padding: '2rem', backgroundColor: 'var(--bgColor-muted)'}}>
        <ToggleSwitch aria-labelledby="switchLabel" />
        <ToggleSwitch disabled aria-labelledby="switchLabel" />
        <ToggleSwitch checked aria-labelledby="switchLabel" />
        <ToggleSwitch checked disabled aria-labelledby="switchLabel" />
      </div>
    </>
  )
}

export const SegmentedControlScheme = () => {
  return (
    <div style={{display: 'flex', gap: '1rem'}}>
      <SegmentedControl aria-label="File view">
        <SegmentedControl.Button selected>Preview</SegmentedControl.Button>
        <SegmentedControl.Button>Raw</SegmentedControl.Button>
        <SegmentedControl.Button>Blame</SegmentedControl.Button>
      </SegmentedControl>
    </div>
  )
}

export const ActionListScheme = () => {
  return (
    <div style={{display: 'flex', gap: '1rem'}}>
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

export const ButtonScheme = () => {
  const count = 12
  return (
    <div className="Button" style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
      <Button id="default">Default</Button>
      <Button id="default">
        Default
        <Button.Counter>{count}</Button.Counter>
      </Button>
      <Button id="default" leadingIcon={HeartIcon} trailingIcon={EyeIcon}>
        Default
      </Button>
      <Button disabled id="default">
        Default
      </Button>
      <Button disabled id="default" leadingIcon={HeartIcon} trailingIcon={EyeIcon}>
        Default
      </Button>
      <Button id="invisible" variant="invisible">
        Invisible
      </Button>
      <Button id="invisible" variant="invisible">
        Invisible
        <Button.Counter>{count}</Button.Counter>
      </Button>
      <Button id="invisible" variant="invisible" leadingIcon={HeartIcon} trailingIcon={EyeIcon}>
        Invisible
      </Button>
      <Button id="invisible" disabled variant="invisible">
        Invisible
      </Button>
      <Button id="invisible" disabled variant="invisible" leadingIcon={HeartIcon} trailingIcon={EyeIcon}>
        Invisible
      </Button>
      <Button variant="primary" id="primary">
        Primary
      </Button>
      <Button variant="primary" id="primary">
        Primary
        <Button.Counter>{count}</Button.Counter>
      </Button>
      <Button variant="primary" id="primary" leadingIcon={HeartIcon} trailingIcon={EyeIcon}>
        Primary
      </Button>
      <Button variant="primary" id="primary" disabled>
        Primary
      </Button>
      <Button variant="primary" id="primary" disabled leadingIcon={HeartIcon} trailingIcon={EyeIcon}>
        Primary
      </Button>
      <Button variant="danger" id="danger">
        Danger
      </Button>
      <Button variant="danger" id="danger">
        Danger
        <Button.Counter>{count}</Button.Counter>
      </Button>
      <Button variant="danger" id="danger" leadingIcon={HeartIcon} trailingIcon={EyeIcon}>
        Danger
      </Button>
      <Button variant="danger" id="danger" disabled>
        Danger
      </Button>
      <Button variant="danger" id="danger" disabled leadingIcon={HeartIcon} trailingIcon={EyeIcon}>
        Danger
      </Button>
      <Button variant="outline" id="outline">
        Outline
      </Button>
      <Button variant="outline" id="outline">
        Outline
        <Button.Counter>{count}</Button.Counter>
      </Button>
      <Button variant="outline" id="outline" leadingIcon={HeartIcon} trailingIcon={EyeIcon}>
        Outline
      </Button>
      <Button variant="outline" id="outline" disabled>
        Outline
      </Button>
      <Button variant="outline" id="outline" disabled leadingIcon={HeartIcon} trailingIcon={EyeIcon}>
        Outline
      </Button>
    </div>
  )
}

export const InputScheme = () => {
  return (
    <div style={{display: 'flex', gap: '1rem'}}>
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
