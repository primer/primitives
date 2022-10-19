# Releasing a new version of Primer Primitives

## Prepare the release

The Primer Primitives release process is automated using [Changesets] and GitHub Actions.

1. Visit the pull requests page and find the latest, open ["release tracking" pull request from primer-css](https://github.com/primer/primitives/pulls/primer-css). If there isn't one, we'll need to build the next release by merging in PRs with changeset files.

## Test the release candidate (GitHub staff only):

1. Ensure test automation checks have completed and passed

1. Install and smoke test the Release Candidate on at least one consumer application.

1. Review the [change log] for accuracy and completeness.

## Publish the release

1. If the release PR is approved and you've done necessary testing, merge it.

   After additional CI checks finish, the docs site will be deployed and `@primer/primitives` will be published with your changes to the `latest` dist-tag. You can check [npm](https://www.npmjs.com/package/@primer/primitives?activeTab=versions) to see if actions has finished.

1. You're done 🎉

[change log]: ./CHANGELOG.md
[changesets]: https://github.com/atlassian/changesets
