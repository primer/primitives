const {default: colors} = require('../dist/js/colors')
const {default: colorsV2} = require('../dist/js/colors_v2')
const {default: deprecatedVars} = require('../data/colors_v2/utils/deprecated_vars')
const {default: githubVars} = require('../data/colors_v2/utils/light_product_vars')
const {default: mktgVars} = require('../data/colors_v2/utils/light_marketing_vars')
const flatten = require('flat')
const {Octokit} = require('@octokit/rest')

// This is a temporary script for tracking the variable count of the v2 functional color system.
// Delete this file when the v2 system is fully implemented.

const [repoOwner, repoName] = process.env.GITHUB_REPOSITORY.split('/')
const octokit = new Octokit({auth: process.env.GITHUB_TOKEN})

async function run() {
  const v1Count = Object.keys(flatten(colors.light)).length

  const deprecatedVarsCount = Object.keys(flatten(deprecatedVars)).length
  const productVarsCount = Object.keys(flatten(githubVars)).length
  const v2Count = Object.keys(flatten(colorsV2.light)).length - deprecatedVarsCount - productVarsCount

  const percentage = `${(((v1Count - v2Count) / v1Count) * -100).toFixed(2)}%`

  if (octokit) {
    await octokit.repos.createCommitStatus({
      owner: repoOwner,
      repo: repoName,
      sha: process.env.GITHUB_SHA,
      context: 'v2 variable count',
      state: 'success',
      description: `${v1Count} → ${v2Count} (${percentage})`
    })
  }
}

run()
