/* eslint @typescript-eslint/consistent-type-imports: 0 */
import {AlertIcon, CheckIcon, LinkIcon, ZapIcon} from '@primer/octicons-react'
import {
  ActionList,
  Avatar,
  Box,
  Button,
  CircleBadge,
  CircleOcticon,
  Flash,
  Heading,
  Label,
  Pagehead,
  ProgressBar,
  SegmentedControl,
  Text,
  TextInput,
  ToggleSwitch,
  Token,
} from '@primer/react'
import React from 'react'
import './PresentationalColors.stories.css'

const variants = [
  'coral',
  'red',
  'pink',
  'plum',
  'purple',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'pine',
  'green',
  'lime',
  'olive',
  'lemon',
  'yellow',
  'amber',
  'orange',
  'brown',
  'auburn',
  'gray',
] as const

export default {
  title: 'Color/Display/Demo',
  args: {
    variant: 'blue',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: [...variants, 'all'],
    },
  },
}

const renderKitchenSink = (variant: (typeof variants)[number], width?: number) => {
  return (
    <Box sx={{width: width ? `${width}px` : 'auto'}}>
      <Box sx={{borderBottom: 'solid 1px var(--borderColor-default)', marginBottom: '1rem'}}></Box>
      <Box sx={{borderBottom: 'solid 1px var(--base-display-color-gray-2)', marginBottom: '1rem'}}></Box>
      <Box sx={{borderBottom: 'solid 1px var(--borderColor-muted)', marginBottom: '1rem'}}></Box>
      <Box sx={{borderBottom: 'solid 1px var(--base-display-color-gray-1)', marginBottom: '1rem'}}></Box>
      <Box sx={{color: 'var(--fgColor-default)', marginBottom: '1rem'}}>Default old</Box>
      <Box sx={{color: 'var(--base-display-color-gray-9)', marginBottom: '1rem'}}>Default new</Box>
      <Box sx={{color: 'var(--fgColor-muted)', marginBottom: '1rem'}}>Muted old</Box>
      <Box sx={{color: 'var(--base-display-color-gray-6)', marginBottom: '1rem'}}>Muted new</Box>
      <Flash
        sx={{
          backgroundColor: `var(--base-display-color-${variant}-0)`,
          border: `1px solid var(--base-display-color-${variant}-1)`,
          color: `var(--base-display-color-${variant}-6)`,
          '.octicon': {
            fill: `var(--base-display-color-${variant}-6)`,
          },
        }}
      >
        <CheckIcon />A flash alert
      </Flash>
      <Box sx={{marginTop: 3, display: 'flex', gap: 2, alignItems: 'center'}}>
        <Button
          variant="primary"
          sx={{
            backgroundColor: `var(--base-display-color-${variant}-6)`,
            '&:hover': {
              backgroundColor: `var(--base-display-color-${variant}-7)`,
            },
            '&:active': {
              backgroundColor: `var(--base-display-color-${variant}-8)`,
            },
          }}
        >
          Button
        </Button>
        <Button variant="invisible">Invisible</Button>
        <Token
          text="Default Token"
          sx={{
            backgroundColor: `var(--base-display-color-${variant}-0)`,
            border: `0px solid var(--base-display-color-${variant}-4)`,
            color: `var(--base-display-color-${variant}-6)`,
            '&:hover': {
              color: `var(--base-display-color-${variant}-7)`,
              backgroundColor: `var(--base-display-color-${variant}-1)`,
            },
            '&:active': {
              color: `var(--base-display-color-${variant}-8)`,
              backgroundColor: `var(--base-display-color-${variant}-2)`,
            },
          }}
        />
        <Label
          sx={{
            border: `1px solid var(--base-display-color-${variant}-6)`,
            color: `var(--base-display-color-${variant}-6)`,
          }}
        >
          System label
        </Label>
        <CircleBadge sx={{color: `var(--base-display-color-${variant}-6)`}} size={60}>
          <CircleBadge.Icon icon={ZapIcon} />
        </CircleBadge>
      </Box>
      <Box
        sx={{
          marginTop: 3,
          display: 'flex',
          gap: 2,
          alignItems: 'center',
        }}
      >
        <ToggleSwitch></ToggleSwitch>
        <SegmentedControl>
          <SegmentedControl.Button defaultSelected>Preview</SegmentedControl.Button>
          <SegmentedControl.Button>Raw</SegmentedControl.Button>
          <SegmentedControl.Button>Blame</SegmentedControl.Button>
        </SegmentedControl>
      </Box>
      <Box sx={{marginTop: 3, display: 'flex', gap: 2, alignItems: 'center'}}>
        <TextInput placeholder="Find user"></TextInput>
      </Box>
      <Box
        sx={{
          marginTop: 3,
          display: 'flex',
          gap: 2,
          alignItems: 'center',
          backgroundColor: 'var(--bgColor-muted)',
          padding: 2,
        }}
      >
        <TextInput placeholder="Find user"></TextInput>
      </Box>
      <Box sx={{marginTop: 3, display: 'flex', gap: 2, alignItems: 'center'}}>
        <Text mr={3}>5 of 10</Text>
        <ProgressBar progress={50} inline sx={{width: '200px'}} bg={`var(--base-display-color-${variant}-6)`} />
        <CircleOcticon
          icon={CheckIcon}
          size={24}
          sx={{bg: `var(--base-display-color-${variant}-6)`, color: 'fg.onEmphasis'}}
        />
      </Box>
      <ActionList>
        <ActionList.Item>
          <ActionList.LeadingVisual>
            <LinkIcon />
          </ActionList.LeadingVisual>
          github.com/primer
        </ActionList.Item>
        <ActionList.Item
          sx={{
            color: `var(--base-display-color-${variant}-6)`,
            '&:hover:not([aria-disabled])': {
              color: `var(--base-display-color-${variant}-6)`,
              backgroundColor: `var(--base-display-color-${variant}-1)`,
            },
          }}
        >
          <ActionList.LeadingVisual>
            <AlertIcon fill={`var(--base-display-color-${variant}-6)`} />
          </ActionList.LeadingVisual>
          4 vulnerabilities
        </ActionList.Item>
        <ActionList.Item>
          <ActionList.LeadingVisual>
            <Avatar src="https://github.com/mona.png" />
          </ActionList.LeadingVisual>
          mona
        </ActionList.Item>
      </ActionList>
    </Box>
  )
}

export const PresentationalColors = ({variant}) => {
  if (variant === 'all') {
    return (
      <Box>
        <Pagehead>
          <Heading sx={{fontSize: 3}}>Kitchen sink for presentational color</Heading>
        </Pagehead>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
          }}
        >
          {variants.map(variant => renderKitchenSink(variant, 400))}
        </Box>
      </Box>
    )
  }
  return (
    <Box>
      <Pagehead>
        <Heading sx={{fontSize: 3}}>Kitchen sink for presentational color</Heading>
      </Pagehead>
      {renderKitchenSink(variant)}
    </Box>
  )
}
