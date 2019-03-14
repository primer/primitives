workflow "publish" {
  on = "push"
  resolves = ["publish"]
}

action "publish" {
  uses = "primer/publish@v1.0.0"
  secrets = ["GITHUB_TOKEN", "NPM_AUTH_TOKEN"]
}
