# Testing primitives using a feature flag

## 1. Create a PR
Start by creating a PR in `primer/primitives`. Once all the tests are passing you are ready to move on. 

You will needs the pre-release version later in the process. So copy the version number from the `Published @primer/primitives` job. This is something like `0.0.0-20241007214729`.

## 2. Create the feature flag
To create the feature flag, you need to log into the [DevPortal](https://devportal.githubapp.com/feature-flags) and navigate to the [feature flags](https://devportal.githubapp.com/feature-flags) section.

Click on the `New feature flag` button and fill in the required information.

**Important:** Make sure to choose a descriptive name that is easy to understand. You **CANNOT** change the name.

Confirm with the `Save feature` button.

## 3. Add yourself to the feature flag
You should first add yourself to the feature flag and test that everything is working. Afterwards you can add others.

To do so, open the feature flag and navigate to the `Targeting rules` tab.
Now click the `Switch to another stamp` dropdown and select `ditcom`.
Under `Actors` add yourself.

## 4. Create a PR in `github/github`
Now it is time to create a PR in `github/github` to add your feature for all users that have the feature flag active.

This requires a few changes:

### Install your pre-release
In `github/github` dependencies are installed in workspaces. Primitives are part of the `@npm-workspaces/primer` workspace.
Additionally, since the stable version of primitives is already installed, you need to install your version with an [npm alias](https://docs.npmjs.com/cli/v8/commands/npm-install#:~:text=npm%20install%20%3Calias%3E%40npm%3A%3Cname%3E%3A).

For example:

```bash
npm i @primer/primitives-my-feature-flag@npm:@primer/primitives@0.0.0-20241007214729 --workspace=@npm-workspaces/primer
```

### Create a new bundle (optional)
If you want to load some new tokens you can add a new bundle and load it for users who have the feature flags enabled.

To do so, first create a new bundle by creating a new folder in 

app/assets/stylesheets/bundles/primer-primitives-experimental/index.scss



`bin/generate-service-files.rb `
