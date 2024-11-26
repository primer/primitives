module.exports = async ({title, body, sections}, summaryLink, context, github) => {
  // get comments
  const {data: comments} = await github.rest.issues.listComments({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo
  });
  // prepare body
  let commentBody = ''
  if(title) {
    commentBody = `## ${title}\n\n`
  }
  if (body) {
    commentBody += body
  }
  if (sections) {
    commentBody += sections.map(({title, body}) => 
      '<details>' +
      `<summary><h3>${title}</h3></summary>\n` +
      "  \n"+
      "  ```diff"+
      `  ${body}` +
      "  ```"+
      '\n</details>'
    ).join('\n')
  }

  // overwrite body if to long
  if(summaryLink && commentBody.length > 65536) {
    commentBody = `## ${title}\n\nThe message is too long to be displayed here. For more details, please check the <a href="${summaryLink}">job summary</a>.`
  }

  // get comment if exists
  const existingComment = comments.filter(comment => comment.body.includes(`## ${title}`));
  // if comment exists, update it
  if(existingComment.length > 0) {
    await github.rest.issues.updateComment({
      comment_id: existingComment[0].id,
      owner: context.repo.owner,
      repo: context.repo.repo,
      body: commentBody
    })
  }
  // if comment does not exist, create it
  else {
    await github.rest.issues.createComment({
      issue_number: context.issue.number,
      owner: context.repo.owner,
      repo: context.repo.repo,
      body: commentBody
    })
  }
}
