module.exports = async (searchContent, context, github) => {
  if (!Array.isArray(searchContent)) {
    searchContent = [searchContent]
  }
  // get comments
  const {data: comments} = await github.rest.issues.listComments({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo
  });

  // get comments that match search content
  const existingComment = comments.filter(comment => searchContent.some(searchValue => comment.body.includes(searchValue)));

  // if token issue exists, update it
  for (const comment of existingComment) {
    await github.rest.issues.deleteComment({
      comment_id: comment.id,
      owner: context.repo.owner,
      repo: context.repo.repo,
    })
  }
}