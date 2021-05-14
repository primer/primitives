const { default: colors } = require("../dist/js/colors");
const { default: colorsV2 } = require("../dist/js/colors_v2");
const flatten = require("flat");
const { Octokit } = require("@octokit/rest");

// This is a temporary script for tracking the coverage of the v2 functional color system.
// Delete this file when the v2 system is fully implemented.

const [repoOwner, repoName] = process.env.GITHUB_REPOSITORY.split("/");
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

async function run() {
  const variablesV1 = Object.keys(flatten(colors.light));
  const variablesV2 = Object.keys(flatten(colorsV2.light));

  // V1 - V2
  const diff = variablesV1.filter(v => variablesV2.indexOf(v) === -1);

  console.log(
    "The following v1 variables do not have a corresponding v2 variable:"
  );

  for (const variable of diff) {
    console.log(variable);
  }

  const coverage =
    ((variablesV1.length - diff.length) / variablesV1.length) * 100;

  if (octokit) {
    await octokit.repos.createCommitStatus({
      owner: repoOwner,
      repo: repoName,
      sha: process.env.GITHUB_SHA,
      context: "v2 coverage",
      state: "success",
      description: `${variablesV1.length - diff.length}/${
        variablesV1.length
      } (${coverage.toFixed(2)}%)`,
    });
  }
}

run();
