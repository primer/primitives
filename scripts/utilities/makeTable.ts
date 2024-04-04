import {getMarkdownTable as markdownTable} from 'markdown-table-ts'
import {Table} from 'console-table-printer'
export type RowsObject = Record<string, string | number>

/**
 * makeMarkdownTable
 * @param creates a markdown table of the rows
 * @param rows - RowsObject[]
 * @returns string
 */
export const makeMarkdownTable = (rows: RowsObject[], titles: string[]): string => {
  return markdownTable({
    table: {
      head: titles,
      body: rows.map(row => Object.values(row).map(value => value.toString())),
    },
  })
}

/**
 * makeConsoleTable
 * @description takes in rows and creates a console table
 * @param rows - RowsObject[]
 */
export const makeConsoleTable = (rows: Record<string, string | number>[], titles: string[]): string => {
  // config table
  const table = new Table({
    // title: `Contrast checks for: ${theme}`,
    charLength: {'❌': 2, '✅': 2},
    colorMap: {
      grey: '\x1b[0;30m', // define customized color
    },
    style: {
      headerTop: {
        left: '',
        mid: '',
        right: '',
        other: '',
      },
      headerBottom: {
        left: '|',
        mid: '|',
        right: '|',
        other: '-',
      },
      tableBottom: {
        left: '',
        mid: '',
        right: '',
        other: '',
      },
      vertical: '|',
    },
    columns: titles.map(title => ({
      name: title,
      alignment: 'left',
      title,
    })),
  })
  // add rows and color
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const [_index, row] of rows.entries()) {
    const color = 'white'
    // turn odd index rows grey (index starts at 0)
    // if (index % 2 !== 0) {
    //   color = 'grey'
    // }
    table.addRow(row, {
      color,
    })
  }
  return table.render()
}
