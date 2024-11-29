const findCommentByContent = (searchContent, comments) => {
  return comments.filter(comment => comment.body.includes(searchContent));
}

const COMMENT_CHAR_LIMIT = 65536

module.exports = async ({title, body, sections}, summaryLink, context, github) => {
  console.log(`Preparing comment content for ${title}`)
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
  if(summaryLink && commentBody.length > COMMENT_CHAR_LIMIT) {
    commentBody = `## ${title}\n\nThe message is too long to be displayed here. For more details, please check the <a href="${summaryLink}">job summary</a>.`
  }

  // get comments
  const {data: comments} = await github.rest.issues.listComments({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo
  });

  console.log(`Found ${comments.length} comments`)
  // get comment if exists
  const existingComment = findCommentByContent(`## ${title}`, comments);
  console.log(`Found ${existingComment.length} comments, with the title "## ${title}"`)
  // delete comment if no body or sections
  if(!body && (!sections || sections.length === 0)) {
    if(existingComment.length > 0) {
      console.log(`Deleting comment with the title "## ${title}" and the id ${existingComment[0].id}`)
      // if comment exists, delete it
      await github.rest.issues.deleteComment({
        comment_id: existingComment[0].id,
        owner: context.repo.owner,
        repo: context.repo.repo,
      })
    }
    return
  }

  // if comment does not exist, create it
  if(existingComment.length === 0) {
    console.log(`Creating comment with the title "## ${title}"`)
    await github.rest.issues.createComment({
      issue_number: context.issue.number,
      owner: context.repo.owner,
      repo: context.repo.repo,
      body: commentBody
    })
    return
  }

  // if comment exists, update it
  console.log(`Updating comment with the title "## ${title}" and the id ${existingComment[0].id}`)
  await github.rest.issues.updateComment({
    comment_id: existingComment[0].id,
    owner: context.repo.owner,
    repo: context.repo.repo,
    body: commentBody
  })
}
