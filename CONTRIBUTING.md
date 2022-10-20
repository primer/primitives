## Contributing

We're thrilled that you'd like to contribute to this project. Your help is essential for keeping it great.

## Using the issue tracker

The [issue tracker](https://github.com/primer/primitives/issues) is the preferred channel for [bug reports](#bug-reports) and [submitting pull requests](#pull-requests), but please respect the following restrictions:

- Please **do not** use the issue tracker for personal support requests.
- Please **do not** derail or troll issues. Keep the discussion on topic and respect the opinions of others.

## Bug reports

A bug is a _demonstrable and reproducible problem_ that is caused by the code in the repository. Good bug reports are extremely helpful to the project, so thanks!

Guidelines for bug reports:

1. **Use the GitHub issue search** &mdash; check if the issue has already been reported.

1. **Check if the issue has been fixed** &mdash; try to reproduce the bug using the latest `main` branch in the repository. The latest npm release, isn't always the representative version of the code.

1. **Isolate the problem** &mdash; ideally create a isolated example, using a 'vanilla' configuration of your chosen framework. CodeSandbox and StackBlitz offer an easy way to do this.

[Use the issue template to help you report bugs](https://github.com/primer/primitives/issues/new?assignees=&labels=bug&template=BUG-REPORT.yml&title=%F0%9F%90%9B+%5BBUG%5D+-+%3Ctitle%3E), if you're confident the bug is still valid.

## Pull requests

Good pull requests are a fantastic help. They should remain focused in scope and avoid containing code and commits unrelated to the problem or feature you're adding.

**Please ask first** before embarking on any significant pull request (e.g. implementing features, refactoring code, porting to a different language), otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project.

### Updating Primer Primitives

1. Clone [this repository](https://github.com/primer/primitives).
1. Create a new feature branch: `git checkout -b my-handle/my-branch-name`.
1. Configure and install the dependencies: `npm install --legacy-peer-deps`
1. Make your changes and commit them.
1. Create a changeset for your changes if your contribution affects distributed code: `npx changeset`
   - See [changesets/changesets](https://github.com/changesets/changesets) for more information.
1. Push your branch and open a pull request. **Please use the supplied pull request template**.
1. Wait for CI tests to complete.
   - If the tests pass, you should see a status check advising you that a canary build of `@primer/primitives` has been published, and ready to test in-app.
   - If the tests fail, review the logs and address any issues.
   - If the builds fail for any other reason (as they occasionally do), they may need to be manually restarted.
1. 🙌 Nice job! Sit back and wait for your pull request to be reviewed.

Here are a few things you can do that will increase the likelihood of your pull request being accepted:

- Keep your change as focused as possible. If there are multiple changes you would like to make that are not dependent upon each other, consider submitting them as separate pull requests.
- Write a [good commit message](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).

## Releasing a new Primer Primitives version

See [RELEASING.md](RELEASING.md) for our release process.

## Resources

- [Using Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- [GitHub Help](https://docs.github.com)

[fork]: https://github.com/primer/primitives/fork
[pr]: https://github.com/primer/primitives/compare
