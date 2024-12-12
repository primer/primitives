import React from 'react'
// eslint-disable-next-line import/extensions
import colorTokens from '../../../../../dist/docs/functional/themes/light.json'
import {ColorTokenSwatch} from '../../StorybookComponents/ColorTokenSwatch/ColorTokenSwatch'
import {DataTable, Table} from '@primer/react/drafts'
import {InlineCode} from '../../StorybookComponents/InlineCode/InlineCode'
import {getTokensByName} from '../../utilities/getTokensByName'

export default {
  title: 'Color/Patterns',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {
      showPanel: false,
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
      <h1 className="sr-only" id="table-heading">
        Avatar
      </h1>
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
                  bgColor={row.name.includes('bgColor') || row.name.includes('iconColor') ? row.name : undefined}
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
              return <InlineCode value={row.name} copyClipboard cssVar />
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
      <h1 className="sr-only" id="table-heading">
        Control
      </h1>
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
                  bgColor={row.name.includes('bgColor') || row.name.includes('iconColor') ? row.name : undefined}
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
              return <InlineCode value={row.name} copyClipboard cssVar />
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
      <h1 className="sr-only" id="table-heading">
        Counter
      </h1>
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
                  bgColor={row.name.includes('bgColor') || row.name.includes('iconColor') ? row.name : undefined}
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
              return <InlineCode value={row.name} copyClipboard cssVar />
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
      <h1 className="sr-only" id="table-heading">
        Button
      </h1>
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
                  bgColor={row.name.includes('bgColor') || row.name.includes('iconColor') ? row.name : undefined}
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
              return <InlineCode value={row.name} copyClipboard cssVar />
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
      <h1 className="sr-only" id="table-heading">
        Focus
      </h1>
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
              return <InlineCode value={row.name} copyClipboard cssVar />
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
      <h1 className="sr-only" id="table-heading">
        Header
      </h1>
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
                  bgColor={row.name.includes('bgColor') || row.name.includes('iconColor') ? row.name : undefined}
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
              return <InlineCode value={row.name} copyClipboard cssVar />
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
      <h1 className="sr-only" id="table-heading">
        Menu
      </h1>
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
                  bgColor={row.name.includes('bgColor') || row.name.includes('iconColor') ? row.name : undefined}
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
              return <InlineCode value={row.name} copyClipboard cssVar />
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
      <h1 className="sr-only" id="table-heading">
        Overlay
      </h1>
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
                  bgColor={row.name.includes('bgColor') || row.name.includes('iconColor') ? row.name : undefined}
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
              return <InlineCode value={row.name} copyClipboard cssVar />
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
      <h1 className="sr-only" id="table-heading">
        SelectMenu
      </h1>
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
                  bgColor={row.name.includes('bgColor') || row.name.includes('iconColor') ? row.name : undefined}
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
              return <InlineCode value={row.name} copyClipboard cssVar />
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
      <h1 className="sr-only" id="table-heading">
        SideNav
      </h1>
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
                  bgColor={row.name.includes('bgColor') || row.name.includes('iconColor') ? row.name : undefined}
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
              return <InlineCode value={row.name} copyClipboard cssVar />
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
      <h1 className="sr-only" id="table-heading">
        TimelineBadge
      </h1>
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
                  bgColor={row.name.includes('bgColor') || row.name.includes('iconColor') ? row.name : undefined}
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
              return <InlineCode value={row.name} copyClipboard cssVar />
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
      <h1 className="sr-only" id="table-heading">
        UnderlineNav
      </h1>
      <DataTable
        aria-labelledby="table-heading"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return (
                <ColorTokenSwatch
                  bgColor={row.name.includes('bgColor') || row.name.includes('iconColor') ? row.name : undefined}
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
              return <InlineCode value={row.name} copyClipboard cssVar />
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

export const Selection = () => {
  const data = getTokensByName(colorTokens, 'selection').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })
  return (
    <Table.Container>
      <h1 className="sr-only" id="selection">
        Text selection
      </h1>
      <DataTable
        aria-labelledby="selection"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return (
                <ColorTokenSwatch
                  selectionColor={row.name.includes('bgColor') || row.name.includes('iconColor') ? row.name : undefined}
                />
              )
            },
          },
          {
            header: 'Token',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <InlineCode value={row.name} copyClipboard cssVar />
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

export const Tooltip = () => {
  const data = getTokensByName(colorTokens, 'tooltip').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })
  return (
    <Table.Container>
      <h1 className="sr-only" id="tooltip">
        Tooltip
      </h1>
      <DataTable
        aria-labelledby="tooltip"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return (
                <ColorTokenSwatch
                  bgColor={row.name.includes('bgColor') || row.name.includes('iconColor') ? row.name : undefined}
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
              return <InlineCode value={row.name} copyClipboard cssVar />
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

export const Treeview = () => {
  const data = getTokensByName(colorTokens, 'treeViewItem').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })
  return (
    <Table.Container>
      <h1 className="sr-only" id="treeViewItem">
        Tooltip
      </h1>
      <DataTable
        aria-labelledby="treeViewItem"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return (
                <ColorTokenSwatch
                  bgColor={row.name.includes('bgColor') || row.name.includes('iconColor') ? row.name : undefined}
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
              return <InlineCode value={row.name} copyClipboard cssVar />
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
