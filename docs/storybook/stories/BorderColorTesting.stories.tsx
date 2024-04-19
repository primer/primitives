import React from 'react'
import {DataTable, Table} from '@primer/react/drafts'
import './BorderTesting.css'
import {
  ThreeBarsIcon,
  MarkGithubIcon,
  ArrowSwitchIcon,
  GearIcon,
  CodeIcon,
  CreditCardIcon,
  MailIcon,
  ShieldLockIcon,
  BroadcastIcon,
  KeyIcon,
  OrganizationIcon,
  GlobeIcon,
  ReportIcon,
  RepoIcon,
  CodespacesIcon,
  PackageIcon,
  CopilotIcon,
  BrowserIcon,
  ReplyIcon,
  AppsIcon,
  ClockIcon,
  LogIcon,
  EyeIcon,
  FileCodeIcon,
  PeopleIcon,
  SearchIcon,
} from '@primer/octicons-react'
import {PageLayout, Button, TextInput, SegmentedControl, NavList, Box, Text, IconButton, Octicon} from '@primer/react'

export default {
  title: 'Testing/Borders',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {
      showPanel: false,
    },
  },
}

type NavItem = {
  Icon: React.ElementType
  title: string
  ariaCurrent?: boolean
}

type NavGroup = {
  title?: string
  items: NavItem[]
}

const navGroups: NavGroup[] = [
  {
    items: [
      {Icon: GearIcon, title: 'General settings'},
      {Icon: CodeIcon, title: 'Developer settings'},
    ],
  },
  {
    title: 'Access',
    items: [
      {Icon: CreditCardIcon, title: 'Billing and plans'},
      {Icon: MailIcon, title: 'Emails'},
      {Icon: ShieldLockIcon, title: 'Password and authentication'},
      {Icon: BroadcastIcon, title: 'Sessions'},
      {Icon: KeyIcon, title: 'SSH and GPG keys'},
      {Icon: OrganizationIcon, title: 'Organizations'},
      {Icon: GlobeIcon, title: 'Enterprises'},
      {Icon: ReportIcon, title: 'Moderation'},
    ],
  },
  {
    title: 'Code, planning, and automation',
    items: [
      {Icon: RepoIcon, title: 'Repositories'},
      {Icon: CodespacesIcon, title: 'Codespaces'},
      {Icon: PackageIcon, title: 'Packages'},
      {Icon: CopilotIcon, title: 'Copilot'},
      {Icon: BrowserIcon, title: 'Pages'},
      {Icon: ReplyIcon, title: 'Saved replies'},
    ],
  },
  {
    title: 'Security',
    items: [{Icon: ShieldLockIcon, title: 'Code security and analysis'}],
  },
  {
    title: 'Integrations',
    items: [
      {Icon: AppsIcon, title: 'Applications'},
      {Icon: ClockIcon, title: 'Scheduled reminders'},
    ],
  },
  {
    title: 'Archives',
    items: [
      {Icon: LogIcon, title: 'Security log'},
      {Icon: LogIcon, title: 'Sponsorship log'},
    ],
  },
]

const data = [
  {name: 'John Doe', age: 30, occupation: 'Software Engineer'},
  {name: 'Jane Smith', age: 25, occupation: 'Product Manager'},
  {name: 'Bob Johnson', age: 35, occupation: 'UX Designer'},
]

export const BorderDemo = () => {
  return (
    <>
      <Box sx={{backgroundColor: 'canvas.default', minHeight: '100vh'}}>
        <Box sx={{bg: 'canvas.inset', width: '100%', maxWidth: '100%'}}>
          <Box
            sx={{
              px: 3,
              pt: 3,
              pb: 3,
              display: 'flex',
              gap: 3,
              alignItems: 'center',
              borderBottomColor: 'border.default',
              borderBottomWidth: 1,
              borderBottomStyle: 'solid',
            }}
          >
            <IconButton icon={ThreeBarsIcon} aria-label="Menu" />
            <Octicon icon={MarkGithubIcon} size={32} />
            <Box sx={{display: 'flex', gap: 2}}>
              <Text sx={{fontSize: 1, fontWeight: 'bold'}}>Settings</Text>
            </Box>
          </Box>
        </Box>
        <PageLayout
          containerWidth="xlarge"
          sx={{
            pr: [0, 5, 5, 5, 5],
            pl: [0, 3, 3, 3, 3],
            maxWidth: 1280,
            backgroundColor: 'canvas.default',
            margin: '0 auto',
            borderColor: ['transparent', 'transparent', 'transparent', 'transparent', 'border.subtle'],
          }}
        >
          <PageLayout.Pane width="large" position="start" sx={{overflow: 'visible', mb: [0, 'inherit']}}>
            <Box sx={{px: 3, py: [0, 2]}}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  px: 2,
                  borderColor: 'border.default',
                  borderBottomWidth: ['1px', 'none'],
                  borderBottomStyle: ['solid', 'none'],
                  pb: [3, 0],
                  mb: [2, 0],
                }}
              >
                {/* <GitHubAvatar src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" size={40} /> */}
                <Box sx={{ml: 2}}>
                  <Box sx={{fontWeight: 'bold'}}>tbenning</Box>
                  <Box sx={{fontSize: 1, color: 'fg.muted'}}>Personal account</Box>
                </Box>
                <Box sx={{ml: 'auto'}}>
                  <IconButton icon={ArrowSwitchIcon} aria-label="Switch settings context" sx={{color: 'fg.subtle'}} />
                </Box>
              </Box>
              <Box sx={{display: ['none', 'block']}}>
                <NavList>
                  {navGroups.map((group, groupIndex) => (
                    <NavList.Group key={groupIndex} title={group.title}>
                      {group.items.map((item, itemIndex) => (
                        <NavList.Item key={itemIndex}>
                          <NavList.LeadingVisual>
                            <item.Icon />
                          </NavList.LeadingVisual>
                          {item.title}
                        </NavList.Item>
                      ))}
                    </NavList.Group>
                  ))}
                </NavList>
              </Box>
            </Box>
          </PageLayout.Pane>
          <PageLayout.Content>
            <Box sx={{py: 1, px: [3, 0, 0, 0, 0], display: 'flex', flexDirection: 'column', gap: 3}}>
              <h1>Heading</h1>
              <Box sx={{display: 'flex', gap: '8px'}}>
                <TextInput leadingVisual={SearchIcon} />
                <Button>A default button</Button>
                <Button variant="invisible">An invisible button</Button>
                <Button variant="primary">A primary button</Button>
              </Box>

              <Box
                sx={{
                  border: 'solid 1px var(--borderColor-default)',
                  borderRadius: 'var(--borderRadius-medium)',
                  backgroundColor: 'var(--bgColor-muted)',
                  marginBottom: 'var(--base-size-24)',
                  width: '100%',
                }}
              >
                <Box
                  sx={{
                    padding: 'var(--base-size-8)',
                    borderBottom: 'solid 1px var(--borderColor-default)',
                    display: 'flex',
                    gap: '8px',
                  }}
                >
                  <Button>A default button</Button>
                  <Button variant="invisible">An invisible button</Button>
                  <SegmentedControl aria-label="File view">
                    <SegmentedControl.IconButton defaultSelected aria-label={'Preview'} icon={EyeIcon} />
                    <SegmentedControl.IconButton aria-label={'Raw'} icon={FileCodeIcon} />
                    <SegmentedControl.IconButton aria-label={'Blame'} icon={PeopleIcon} />
                  </SegmentedControl>
                </Box>
                <Box sx={{backgroundColor: 'var(--bgColor-default)', padding: 'var(--base-size-36)'}}>
                  This is a box oh wow
                </Box>
              </Box>
              <Table.Container>
                <h1 className="sr-only" id="table-heading">
                  Avatar
                </h1>
                <DataTable
                  aria-labelledby="table-heading"
                  data={data}
                  columns={[
                    {header: 'Name', field: 'name', rowHeader: true},
                    {header: 'Age', field: 'age'},
                    {header: 'Occupation', field: 'occupation'},
                  ]}
                />
              </Table.Container>
            </Box>
          </PageLayout.Content>
        </PageLayout>
      </Box>
    </>
  )
}
