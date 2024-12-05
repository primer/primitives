import fs from 'fs'

const cleanLine = (line: string) => line.replace(/\t/g, '').trim()

const beforeAfterArr: Array<{
  before: string
  after: string
}> = []

try {
  const data = fs.readFileSync('diff.txt', 'utf8')
  const lines = data.split(/\r?\n/).map(cleanLine)

  for (const line of lines) {
    const [before, after] = line.split('|')
    if (before && after) {
      beforeAfterArr.push({before: before.trim(), after: after.trim()})
    }
  }
} catch (error) {
  throw new Error(`error converting diff.txt: Error: ${error}`)
}

if (beforeAfterArr.length > 0) {
  const template = `
  ### 🔍 Design token changes found

  <details>
  <summary>View CSS variable changes</summary>
    ${beforeAfterArr.reduce((acc, {before, after}) => {
      return (acc += `
\`\`\`diff
- ${before}
+ ${after}
\`\`\`
      `)
    }, '')}
  

  </details>
  
  `
  fs.writeFileSync('diff.md', template.trim())
}
