workflow "test and publish on push" {
  on = "push"
  resolves = ["test", "publish"]
}

action "install" {
  uses = "actions/npm@2.0.0"
  args = ["install"]
}

action "test" {
  needs = "install"
  uses = "actions/npm@2.0.0"
  args = ["test"]
}

action "publish" {
  needs = "test"
  uses = "primer/publish@v1.0.0"
  secrets = ["GITHUB_TOKEN", "NPM_AUTH_TOKEN"]
}
