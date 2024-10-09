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

### Preload the feature flag

You need to add your feature flag to `app/controllers/application_controller/preload_feature_flags_dependency.rb`:

```
:primitives_my_feature_flag # a comment describing what the feature flag does
```

### Install your pre-release

In `github/github` dependencies are installed in workspaces. Primitives are part of the `@npm-workspaces/primer` workspace.
Additionally, since the stable version of primitives is already installed, you need to install your version with an [npm alias](https://docs.npmjs.com/cli/v8/commands/npm-install#:~:text=npm%20install%20%3Calias%3E%40npm%3A%3Cname%3E%3A).

For example:

```bash
npm i @primer/primitives-my-feature-flag@npm:@primer/primitives@0.0.0-20241007214729 --workspace=@npm-workspaces/primer
```

**NOTE:** This package needs to be checked into git. On dotcom all packages are added in git.

### Create a new bundle (optional)

If you want to load some new tokens you can add a new bundle and load it for users who have the feature flags enabled.

To do so, first create a new bundle by creating a new folder in `app/assets/stylesheets/bundles/` for example `primer-primitives-your-bundle`.
In this folder add an `index.scss` file that includes all files you want to load:

```scss
@import '@primer/primitives-my-feature-flag/dist/css/functional/themes/new-theme.css';
```

You now need to load your css bundle if the feature flag is active by placing the code below in all nessesary places, for example `app/views/layouts/application.html.erb`.

```ruby
# this bundle (index.scss in the folder) will only be loaded if the users has the primitives_my_feature_flag feature flag enabled
<%= stylesheet_bundle "primer-primitives-your-bundle" if user_feature_enabled?(:primitives_my_feature_flag) %>
```

Now you need to generate the `SERVICEOWNERS` and `CODEOWNERS` by running `bin/generate-service-files.rb` in the console or by running it as a task in vs code.

It should add a line like this to the `SERVICEOWNERS`:

```
app/assets/stylesheets/bundles/primer-primitives-your-bundle/ :primer_dotcom
```

And a line like this to the `CODEOWNERS`:

```
/app/assets/stylesheets/bundles/primer-primitives-your-bundle/ @github/primer-reviewers
```
