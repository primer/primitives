import React from 'react'
// eslint-disable-next-line import/extensions
import sizeTokens from '../../../../tokens-next-private/docs/functional/typography/typography.json'
import {DataTable, Table} from '@primer/react/drafts'
import {InlineCode} from '../StorybookComponents/InlineCode/InlineCode'
import {TypographyDemo} from '../StorybookComponents/TypographyDemo/TypographyDemo'
import {getTokensByName} from '../utilities/getTokensByName'

export default {
  title: 'Typography/Functional',
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
}

export const FontFamily = () => {
  const data = getTokensByName(sizeTokens, 'fontStack').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  return (
    <Table.Container>
      <Table.Title as="h1" id="type">
        Font family
      </Table.Title>
      <DataTable
        aria-labelledby="type"
        data={data}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return (
                <TypographyDemo
                  fontFamily={row.name}
                  fontSize="text-title-size-medium"
                  fontWeight="base-text-weight-normal"
                >
                  {row.name.split('-').pop().split('-').pop()}
                </TypographyDemo>
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
            width: 'growCollapse',
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
          {
            header: 'Source value',
            field: 'original',
            rowHeader: true,
            width: 'growCollapse',
            renderCell: row => {
              return <p>{row.original.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const FontShorthand = () => {
  const data = getTokensByName(sizeTokens, 'text').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  const filteredData = data.filter(item => item.id.includes('shorthand'))

  return (
    <Table.Container>
      <Table.Title as="h1" id="type">
        Font shorthand
      </Table.Title>
      <DataTable
        aria-labelledby="type"
        data={filteredData}
        columns={[
          {
            header: 'Sample',
            field: 'name',
            rowHeader: true,
            renderCell: row => {
              return <TypographyDemo fontShorthand={row.name}>{row.name.split('-')[1]}</TypographyDemo>
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
            header: 'Source value',
            field: 'original',
            rowHeader: true,
            renderCell: row => {
              return (
                <div>
                  <p>
                    font-weight: <code>{row.original.value.fontSize}</code>
                  </p>
                  <p>
                    font-size: <code>{row.original.value.fontSize}</code>
                  </p>
                  <p>
                    font-family: <code>{row.original.value.fontFamily}</code>
                  </p>
                  {row.original.value.lineHeight && (
                    <p>
                      line-height: <code>{row.original.value.lineHeight}</code>
                    </p>
                  )}
                </div>
              )
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const Display = () => {
  const data = getTokensByName(sizeTokens, 'text').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  const filteredData = data.filter(item => item.id.includes('display'))

  return (
    <Table.Container>
      <TypographyDemo container id="type" fontShorthand="text-display-shorthand">
        Display
      </TypographyDemo>

      <DataTable
        aria-labelledby="type"
        data={filteredData}
        columns={[
          {
            header: 'Property',
            field: 'name',
            rowHeader: true,
            width: 'growCollapse',
            renderCell: row => {
              return (
                <code>
                  {row.name.includes('size')
                    ? 'font-size'
                    : row.name.includes('weight')
                    ? 'font-weight'
                    : row.name.includes('lineHeight')
                    ? 'line-height'
                    : row.name.includes('lineBoxHeight')
                    ? 'height'
                    : row.name.includes('shorthand')
                    ? 'font'
                    : undefined}
                </code>
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
            width: 'growCollapse',
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
          {
            header: 'Source value',
            field: 'original',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.name.includes('shorthand') ? undefined : row.original.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const TitleLarge = () => {
  const data = getTokensByName(sizeTokens, 'text').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  const filteredData = data.filter(item => item.id.includes('title') && item.id.includes('large'))

  return (
    <Table.Container>
      <TypographyDemo container id="type" fontShorthand="text-title-shorthand-large">
        Title large
      </TypographyDemo>

      <DataTable
        aria-labelledby="type"
        data={filteredData}
        columns={[
          {
            header: 'Property',
            field: 'name',
            rowHeader: true,
            width: 'growCollapse',
            renderCell: row => {
              return (
                <code>
                  {row.name.includes('size')
                    ? 'font-size'
                    : row.name.includes('weight')
                    ? 'font-weight'
                    : row.name.includes('lineHeight')
                    ? 'line-height'
                    : row.name.includes('lineBoxHeight')
                    ? 'height'
                    : row.name.includes('shorthand')
                    ? 'font'
                    : undefined}
                </code>
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
            width: 'growCollapse',
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
          {
            header: 'Source value',
            field: 'original',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.name.includes('shorthand') ? undefined : row.original.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const TitleMedium = () => {
  const data = getTokensByName(sizeTokens, 'text').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  const filteredData = data.filter(item => item.id.includes('title') && item.id.includes('medium'))

  return (
    <Table.Container>
      <TypographyDemo container id="type" fontShorthand="text-title-shorthand-medium">
        Title medium
      </TypographyDemo>

      <DataTable
        aria-labelledby="type"
        data={filteredData}
        columns={[
          {
            header: 'Property',
            field: 'name',
            rowHeader: true,
            width: 'growCollapse',
            renderCell: row => {
              return (
                <code>
                  {row.name.includes('size')
                    ? 'font-size'
                    : row.name.includes('weight')
                    ? 'font-weight'
                    : row.name.includes('lineHeight')
                    ? 'line-height'
                    : row.name.includes('lineBoxHeight')
                    ? 'height'
                    : row.name.includes('shorthand')
                    ? 'font'
                    : undefined}
                </code>
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
            width: 'growCollapse',
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
          {
            header: 'Source value',
            field: 'original',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.name.includes('shorthand') ? undefined : row.original.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const TitleSmall = () => {
  const data = getTokensByName(sizeTokens, 'text').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  const filteredData = data.filter(item => item.id.includes('title') && item.id.includes('small'))

  return (
    <Table.Container>
      <TypographyDemo container id="type" fontShorthand="text-title-shorthand-small">
        Title small
      </TypographyDemo>

      <DataTable
        aria-labelledby="type"
        data={filteredData}
        columns={[
          {
            header: 'Property',
            field: 'name',
            rowHeader: true,
            width: 'growCollapse',
            renderCell: row => {
              return (
                <code>
                  {row.name.includes('size')
                    ? 'font-size'
                    : row.name.includes('weight')
                    ? 'font-weight'
                    : row.name.includes('lineHeight')
                    ? 'line-height'
                    : row.name.includes('lineBoxHeight')
                    ? 'height'
                    : row.name.includes('shorthand')
                    ? 'font'
                    : undefined}
                </code>
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
            width: 'growCollapse',
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
          {
            header: 'Source value',
            field: 'original',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.name.includes('shorthand') ? undefined : row.original.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const Subtitle = () => {
  const data = getTokensByName(sizeTokens, 'text').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  const filteredData = data.filter(item => item.id.includes('subtitle'))

  return (
    <Table.Container>
      <TypographyDemo container id="type" fontShorthand="text-subtitle-shorthand">
        Subtitle
      </TypographyDemo>

      <DataTable
        aria-labelledby="type"
        data={filteredData}
        columns={[
          {
            header: 'Property',
            field: 'name',
            rowHeader: true,
            width: 'growCollapse',
            renderCell: row => {
              return (
                <code>
                  {row.name.includes('size')
                    ? 'font-size'
                    : row.name.includes('weight')
                    ? 'font-weight'
                    : row.name.includes('lineHeight')
                    ? 'line-height'
                    : row.name.includes('lineBoxHeight')
                    ? 'height'
                    : row.name.includes('shorthand')
                    ? 'font'
                    : undefined}
                </code>
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
            width: 'growCollapse',
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
          {
            header: 'Source value',
            field: 'original',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.name.includes('shorthand') ? undefined : row.original.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const BodyLarge = () => {
  const data = getTokensByName(sizeTokens, 'text').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  const filteredData = data.filter(item => item.id.includes('body') && item.id.includes('large'))

  return (
    <Table.Container>
      <TypographyDemo container id="type" fontShorthand="text-body-shorthand-large">
        Body large
      </TypographyDemo>

      <DataTable
        aria-labelledby="type"
        data={filteredData}
        columns={[
          {
            header: 'Property',
            field: 'name',
            rowHeader: true,
            width: 'growCollapse',
            renderCell: row => {
              return (
                <code>
                  {row.name.includes('size')
                    ? 'font-size'
                    : row.name.includes('weight')
                    ? 'font-weight'
                    : row.name.includes('lineHeight')
                    ? 'line-height'
                    : row.name.includes('lineBoxHeight')
                    ? 'height'
                    : row.name.includes('shorthand')
                    ? 'font'
                    : undefined}
                </code>
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
            width: 'growCollapse',
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
          {
            header: 'Source value',
            field: 'original',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.name.includes('shorthand') ? undefined : row.original.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const BodyMedium = () => {
  const data = getTokensByName(sizeTokens, 'text').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  const filteredData = data.filter(item => item.id.includes('body') && item.id.includes('medium'))

  return (
    <Table.Container>
      <TypographyDemo container id="type" fontShorthand="text-body-shorthand-medium">
        Body medium
      </TypographyDemo>

      <DataTable
        aria-labelledby="type"
        data={filteredData}
        columns={[
          {
            header: 'Property',
            field: 'name',
            rowHeader: true,
            width: 'growCollapse',
            renderCell: row => {
              return (
                <code>
                  {row.name.includes('size')
                    ? 'font-size'
                    : row.name.includes('weight')
                    ? 'font-weight'
                    : row.name.includes('lineHeight')
                    ? 'line-height'
                    : row.name.includes('lineBoxHeight')
                    ? 'height'
                    : row.name.includes('shorthand')
                    ? 'font'
                    : undefined}
                </code>
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
            width: 'growCollapse',
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
          {
            header: 'Source value',
            field: 'original',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.name.includes('shorthand') ? undefined : row.original.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const BodySmall = () => {
  const data = getTokensByName(sizeTokens, 'text').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  const filteredData = data.filter(item => item.id.includes('body') && item.id.includes('small'))

  return (
    <Table.Container>
      <TypographyDemo container id="type" fontShorthand="text-body-shorthand-small">
        Body small
      </TypographyDemo>

      <DataTable
        aria-labelledby="type"
        data={filteredData}
        columns={[
          {
            header: 'Property',
            field: 'name',
            rowHeader: true,
            width: 'growCollapse',
            renderCell: row => {
              return (
                <code>
                  {row.name.includes('size')
                    ? 'font-size'
                    : row.name.includes('weight')
                    ? 'font-weight'
                    : row.name.includes('lineHeight')
                    ? 'line-height'
                    : row.name.includes('lineBoxHeight')
                    ? 'height'
                    : row.name.includes('shorthand')
                    ? 'font'
                    : undefined}
                </code>
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
            width: 'growCollapse',
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
          {
            header: 'Source value',
            field: 'original',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.name.includes('shorthand') ? undefined : row.original.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const Caption = () => {
  const data = getTokensByName(sizeTokens, 'text').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  const filteredData = data.filter(item => item.id.includes('caption'))

  return (
    <Table.Container>
      <TypographyDemo container id="type" fontShorthand="text-caption-shorthand">
        Caption
      </TypographyDemo>

      <DataTable
        aria-labelledby="type"
        data={filteredData}
        columns={[
          {
            header: 'Property',
            field: 'name',
            rowHeader: true,
            width: 'growCollapse',
            renderCell: row => {
              return (
                <code>
                  {row.name.includes('size')
                    ? 'font-size'
                    : row.name.includes('weight')
                    ? 'font-weight'
                    : row.name.includes('lineHeight')
                    ? 'line-height'
                    : row.name.includes('lineBoxHeight')
                    ? 'height'
                    : row.name.includes('shorthand')
                    ? 'font'
                    : undefined}
                </code>
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
            width: 'growCollapse',
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
          {
            header: 'Source value',
            field: 'original',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.name.includes('shorthand') ? undefined : row.original.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const CodeBlock = () => {
  const data = getTokensByName(sizeTokens, 'text').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  const filteredData = data.filter(item => item.id.includes('codeBlock'))

  return (
    <Table.Container>
      <TypographyDemo container id="type" fontShorthand="text-codeBlock-shorthand">
        Code block
      </TypographyDemo>

      <DataTable
        aria-labelledby="type"
        data={filteredData}
        columns={[
          {
            header: 'Property',
            field: 'name',
            rowHeader: true,
            width: 'growCollapse',
            renderCell: row => {
              return (
                <code>
                  {row.name.includes('size')
                    ? 'font-size'
                    : row.name.includes('weight')
                    ? 'font-weight'
                    : row.name.includes('lineHeight')
                    ? 'line-height'
                    : row.name.includes('lineBoxHeight')
                    ? 'height'
                    : row.name.includes('shorthand')
                    ? 'font'
                    : undefined}
                </code>
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
            width: 'growCollapse',
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
          {
            header: 'Source value',
            field: 'original',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.name.includes('shorthand') ? undefined : row.original.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}

export const InlineCodeBlock = () => {
  const data = getTokensByName(sizeTokens, 'text').map(token => {
    return {
      id: token.name,
      ...token,
    }
  })

  const filteredData = data.filter(item => item.id.includes('codeInline'))

  return (
    <Table.Container>
      <TypographyDemo container id="type" fontShorthand="text-codeInline-shorthand">
        Inline code block
      </TypographyDemo>

      <DataTable
        aria-labelledby="type"
        data={filteredData}
        columns={[
          {
            header: 'Property',
            field: 'name',
            rowHeader: true,
            width: 'growCollapse',
            renderCell: row => {
              return (
                <code>
                  {row.name.includes('size')
                    ? 'font-size'
                    : row.name.includes('weight')
                    ? 'font-weight'
                    : row.name.includes('lineHeight')
                    ? 'line-height'
                    : row.name.includes('lineBoxHeight')
                    ? 'height'
                    : row.name.includes('shorthand')
                    ? 'font'
                    : undefined}
                </code>
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
            width: 'growCollapse',
            renderCell: row => {
              return <p>{row.value}</p>
            },
          },
          {
            header: 'Source value',
            field: 'original',
            rowHeader: true,
            renderCell: row => {
              return <p>{row.name.includes('shorthand') ? undefined : row.original.value}</p>
            },
          },
        ]}
      />
    </Table.Container>
  )
}
