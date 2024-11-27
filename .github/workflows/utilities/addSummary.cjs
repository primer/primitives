const core = require('@actions/core')

module.exports = (content, overwrite = false) => {
  if(!Array.isArray(content)) {
    content = [content]
  }
  // core.summary.clear()

  for (const {title, body, sections} of content) {
    if(title) {
      core.summary.addHeading(title, '1')
    }

    if(body) {
      core.summary.addRaw(body, true)
    }

    if(sections) {
      sections.forEach(({title, body}) => {
        const section = `<details><summary><h3>${title}</h3></summary>\n\n`+
        '```diff\n'+
        `${body}\n`+
        '```\n\n'+
        '</details>'
        core.summary.addRaw(section, true)
      })
    }
  }
  // write summary
  core.summary.write({overwrite})
}