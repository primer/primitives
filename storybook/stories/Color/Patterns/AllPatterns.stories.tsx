import React from 'react'
import colorTokens from '../../../../tokens-next-private/docs/functional/themes/light.json'
import {ColorTokenSwatch} from '../../StorybookComponents/ColorTokenSwatch/ColorTokenSwatch'
import {DataTable, Table} from '@primer/react/drafts'
import {InlineCode} from '../../StorybookComponents/InlineCode/InlineCode'
import {getTokensByName} from '../../utilities/getTokensByName'

export default {
  title: 'Color/Patterns',
  parameters: {
    parameters: {
      controls: {hideNoControlsWarning: true},
      options: {
        showPanel: false,
      },
    },
  },
}

export const Avatar = () => {
  const data = getTokensByName(colorTokens, 'avatar').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })
  return (
    <Table.Container>
      <Table.Title as="h1" id="pattern">
        Avatar
      </Table.Title>
      <DataTable
        aria-labelledby="pattern"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return (
                <ColorTokenSwatch
                  bgColor={row.name.includes('bgColor') ? row.name : undefined}
                  textColor={row.name.includes('fgColor') ? row.name : undefined}
                  shadowColor={row.name.includes('shadow') ? row.name : undefined}
                  borderColor={row.name.includes('borderColor') ? row.name : undefined}
                />
              )
            },
          },
          {
            header: 'Token',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <InlineCode value={row.name} copyClipboard />
            },
          },
          {
            header: 'Output value',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const Control = () => {
  const control = getTokensByName(colorTokens, 'control').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  const controlKnob = getTokensByName(colorTokens, 'controlKnob').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  const controlTrack = getTokensByName(colorTokens, 'controlTrack').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  const data = control.concat(controlKnob, controlTrack).map((item, index) => ({
    ...item,
    index,
  }))
  return (
    <Table.Container>
      <Table.Title as="h1" id="pattern">
        Control
      </Table.Title>
      <DataTable
        aria-labelledby="pattern"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return (
                <ColorTokenSwatch
                  bgColor={row.name.includes('bgColor') ? row.name : undefined}
                  textColor={row.name.includes('fgColor') ? row.name : undefined}
                  shadowColor={row.name.includes('shadow') ? row.name : undefined}
                  borderColor={row.name.includes('borderColor') ? row.name : undefined}
                />
              )
            },
          },
          {
            header: 'Token',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <InlineCode value={row.name} copyClipboard />
            },
          },
          {
            header: 'Output value',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const Counter = () => {
  const data = getTokensByName(colorTokens, 'counter').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })
  return (
    <Table.Container>
      <Table.Title as="h1" id="pattern">
        Counter
      </Table.Title>
      <DataTable
        aria-labelledby="pattern"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return (
                <ColorTokenSwatch
                  bgColor={row.name.includes('bgColor') ? row.name : undefined}
                  textColor={row.name.includes('fgColor') ? row.name : undefined}
                  shadowColor={row.name.includes('shadow') ? row.name : undefined}
                  borderColor={row.name.includes('borderColor') ? row.name : undefined}
                />
              )
            },
          },
          {
            header: 'Token',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <InlineCode value={row.name} copyClipboard />
            },
          },
          {
            header: 'Output value',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const Button = () => {
  const button = getTokensByName(colorTokens, 'button').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  const buttonCounter = getTokensByName(colorTokens, 'buttonCounter').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  const data = button.concat(buttonCounter).map((item, index) => ({
    ...item,
    index,
  }))
  return (
    <Table.Container>
      <Table.Title as="h1" id="pattern">
        Button
      </Table.Title>
      <DataTable
        aria-labelledby="pattern"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return (
                <ColorTokenSwatch
                  bgColor={row.name.includes('bgColor') ? row.name : undefined}
                  textColor={row.name.includes('fgColor') ? row.name : undefined}
                  shadowColor={row.name.includes('shadow') ? row.name : undefined}
                  borderColor={row.name.includes('borderColor') ? row.name : undefined}
                />
              )
            },
          },
          {
            header: 'Token',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <InlineCode value={row.name} copyClipboard />
            },
          },
          {
            header: 'Output value',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const Focus = () => {
  const data = getTokensByName(colorTokens, 'focus-outlineColor').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })
  return (
    <Table.Container>
      <Table.Title as="h1" id="pattern">
        Focus
      </Table.Title>
      <DataTable
        aria-labelledby="pattern"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <ColorTokenSwatch outlineColor={row.name.includes('outlineColor') ? row.name : undefined} />
            },
          },
          {
            header: 'Token',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <InlineCode value={row.name} copyClipboard />
            },
          },
          {
            header: 'Output value',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const Header = () => {
  const data = getTokensByName(colorTokens, 'header').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })
  return (
    <Table.Container>
      <Table.Title as="h1" id="pattern">
        Header
      </Table.Title>
      <DataTable
        aria-labelledby="pattern"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return (
                <ColorTokenSwatch
                  bgColor={row.name.includes('bgColor') ? row.name : undefined}
                  textColor={row.name.includes('fgColor') ? row.name : undefined}
                  shadowColor={row.name.includes('shadow') ? row.name : undefined}
                  borderColor={row.name.includes('borderColor') ? row.name : undefined}
                />
              )
            },
          },
          {
            header: 'Token',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <InlineCode value={row.name} copyClipboard />
            },
          },
          {
            header: 'Output value',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const Menu = () => {
  const data = getTokensByName(colorTokens, 'menu').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })
  return (
    <Table.Container>
      <Table.Title as="h1" id="pattern">
        Menu
      </Table.Title>
      <DataTable
        aria-labelledby="pattern"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return (
                <ColorTokenSwatch
                  bgColor={row.name.includes('bgColor') ? row.name : undefined}
                  textColor={row.name.includes('fgColor') ? row.name : undefined}
                  shadowColor={row.name.includes('shadow') ? row.name : undefined}
                  borderColor={row.name.includes('borderColor') ? row.name : undefined}
                />
              )
            },
          },
          {
            header: 'Token',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <InlineCode value={row.name} copyClipboard />
            },
          },
          {
            header: 'Output value',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const Overlay = () => {
  const data = getTokensByName(colorTokens, 'overlay').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })
  return (
    <Table.Container>
      <Table.Title as="h1" id="pattern">
        Overlay
      </Table.Title>
      <DataTable
        aria-labelledby="pattern"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return (
                <ColorTokenSwatch
                  bgColor={row.name.includes('bgColor') ? row.name : undefined}
                  textColor={row.name.includes('fgColor') ? row.name : undefined}
                  shadowColor={row.name.includes('shadow') ? row.name : undefined}
                  borderColor={row.name.includes('borderColor') ? row.name : undefined}
                />
              )
            },
          },
          {
            header: 'Token',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <InlineCode value={row.name} copyClipboard />
            },
          },
          {
            header: 'Output value',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const SelectMenu = () => {
  const data = getTokensByName(colorTokens, 'selectMenu').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })
  return (
    <Table.Container>
      <Table.Title as="h1" id="pattern">
        SelectMenu
      </Table.Title>
      <DataTable
        aria-labelledby="pattern"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return (
                <ColorTokenSwatch
                  bgColor={row.name.includes('bgColor') ? row.name : undefined}
                  textColor={row.name.includes('fgColor') ? row.name : undefined}
                  shadowColor={row.name.includes('shadow') ? row.name : undefined}
                  borderColor={row.name.includes('borderColor') ? row.name : undefined}
                />
              )
            },
          },
          {
            header: 'Token',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <InlineCode value={row.name} copyClipboard />
            },
          },
          {
            header: 'Output value',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const SideNav = () => {
  const data = getTokensByName(colorTokens, 'sideNav').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })
  return (
    <Table.Container>
      <Table.Title as="h1" id="pattern">
        SideNav
      </Table.Title>
      <DataTable
        aria-labelledby="pattern"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return (
                <ColorTokenSwatch
                  bgColor={row.name.includes('bgColor') ? row.name : undefined}
                  textColor={row.name.includes('fgColor') ? row.name : undefined}
                  shadowColor={row.name.includes('shadow') ? row.name : undefined}
                  borderColor={row.name.includes('borderColor') ? row.name : undefined}
                />
              )
            },
          },
          {
            header: 'Token',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <InlineCode value={row.name} copyClipboard />
            },
          },
          {
            header: 'Output value',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const TimelineBadge = () => {
  const data = getTokensByName(colorTokens, 'timelineBadge').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })
  return (
    <Table.Container>
      <Table.Title as="h1" id="pattern">
        TimelineBadge
      </Table.Title>
      <DataTable
        aria-labelledby="pattern"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return (
                <ColorTokenSwatch
                  bgColor={row.name.includes('bgColor') ? row.name : undefined}
                  textColor={row.name.includes('fgColor') ? row.name : undefined}
                  shadowColor={row.name.includes('shadow') ? row.name : undefined}
                  borderColor={row.name.includes('borderColor') ? row.name : undefined}
                />
              )
            },
          },
          {
            header: 'Token',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <InlineCode value={row.name} copyClipboard />
            },
          },
          {
            header: 'Output value',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const UnderlineNav = () => {
  const data = getTokensByName(colorTokens, 'underlineNav').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })
  return (
    <Table.Container>
      <Table.Title as="h1" id="pattern">
        UnderlineNav
      </Table.Title>
      <DataTable
        aria-labelledby="pattern"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return (
                <ColorTokenSwatch
                  bgColor={row.name.includes('bgColor') ? row.name : undefined}
                  textColor={row.name.includes('fgColor') ? row.name : undefined}
                  shadowColor={row.name.includes('shadow') ? row.name : undefined}
                  borderColor={row.name.includes('borderColor') ? row.name : undefined}
                />
              )
            },
          },
          {
            header: 'Token',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <InlineCode value={row.name} copyClipboard />
            },
          },
          {
            header: 'Output value',
            field: 'value',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}
