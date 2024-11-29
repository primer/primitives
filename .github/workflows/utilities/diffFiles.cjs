const shell = require('shelljs')
const fs = require('fs')
const glob = require('@actions/glob')

module.exports = async ({folder, globString, outputFile}, originPath) => {
  const globber = await glob.create(folder + globString)
  const files = await globber.glob()
  // create output file
  shell.touch(outputFile)
  // create diffs
  const diffs = files.map(file => {
    // get filename
    const regexRunnerPath = new RegExp('^[a-z\/]+\/dist', 'g')
    const filename = file.replaceAll(regexRunnerPath,'')
    // if file is new
    if (!fs.existsSync(file.replace(folder, `${originPath}/` + folder))) {
      console.info('⚠️ File is new: ' + file + '\n')
      return {
        title: file.replaceAll('dist/', ''),
        body: ''
      }
    }
    // run diff & store in file
    const diff = shell.exec(`diff -u ${file.replace(folder, `${originPath}/` + folder)} ${file}`)

    console.log('Checking diff for ' + filename + '...')

    if (diff.stderr) {
      console.error(diff.stderr)
      core.setFailed(diff.stderr)
    }
    
    if (diff.stdout === '') {
      console.log('No diff for ' + filename + '\n')
    } else {
      console.log(diff.stdout + '\n')
    }
    
    return {
      title: filename,
      body: diff.stdout || ''
    }
  })
  // filter files with no diffs
  .filter(item => {
    return item.body !== ''
  })

  // store diffs in file
  fs.writeFileSync(outputFile, JSON.stringify(diffs, null, ' '))
}