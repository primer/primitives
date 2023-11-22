# @primer/primitives

## 7.15.4

### Patch Changes

- [#781](https://github.com/primer/primitives/pull/781) [`8ba7d6b`](https://github.com/primer/primitives/commit/8ba7d6b7e6ef8eb72b5ac2b1eacbbcbf8d9a9a0f) Thanks [@langermank](https://github.com/langermank)! - Adjust `prettylights` comment fg color

- [#747](https://github.com/primer/primitives/pull/747) [`2b76e2d`](https://github.com/primer/primitives/commit/2b76e2d7c98255ec3f6141d3146b702fa98b2953) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - Add stack size tokens to figma export

- [#782](https://github.com/primer/primitives/pull/782) [`ba763cc`](https://github.com/primer/primitives/commit/ba763cc75a0bcafbcee45bc33ca34951069a92f2) Thanks [@langermank](https://github.com/langermank)! - Update the muted foreground color to increase contrast against default controls in dark mode

- [#783](https://github.com/primer/primitives/pull/783) [`d0f95c7`](https://github.com/primer/primitives/commit/d0f95c71061f9840c095e4e99c6a4919e1be9f62) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - Update xxlarge breakpoint value

- [#779](https://github.com/primer/primitives/pull/779) [`105afb5`](https://github.com/primer/primitives/commit/105afb5b4f4ad1c7fb912bd8cd6d629135e0ad38) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - adding CodeSyntax to tokens for figma

## 7.15.3

### Patch Changes

- [#778](https://github.com/primer/primitives/pull/778) [`f546c45`](https://github.com/primer/primitives/commit/f546c45c910f92d4a2ec803d78508f476b30375b) Thanks [@mperrotti](https://github.com/mperrotti)! - Updates inactive button text colors to meet contrast against the inactive button background color.

## 7.15.2

### Patch Changes

- [#776](https://github.com/primer/primitives/pull/776) [`cc36ab9`](https://github.com/primer/primitives/commit/cc36ab9a4f6f5eec4badef964ff0170e07e7d5d8) Thanks [@mperrotti](https://github.com/mperrotti)! - Corrects light theme inactive button bg color

## 7.15.1

### Patch Changes

- [#774](https://github.com/primer/primitives/pull/774) [`3a6d736`](https://github.com/primer/primitives/commit/3a6d7364df107fed2d6d1f7412c94d597c103692) Thanks [@mperrotti](https://github.com/mperrotti)! - Adds color tokens for the "inactive" button state. Tokens are added to the old and new builds so we can still support styling with `styled-components`

## 7.15.0

### Minor Changes

- [#744](https://github.com/primer/primitives/pull/744) [`5f9eb77`](https://github.com/primer/primitives/commit/5f9eb77e157c25411723d131016536c9c4dec515) Thanks [@mperrotti](https://github.com/mperrotti)! - Introduces design tokens for motion properties, and adds tokens to support loading indicators.

### Patch Changes

- [#745](https://github.com/primer/primitives/pull/745) [`bcef815`](https://github.com/primer/primitives/commit/bcef815605cc086d7411fb61c37d08825502b84a) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - export control color tokens in Figma

## 7.14.1

### Patch Changes

- [#743](https://github.com/primer/primitives/pull/743) [`5125c62`](https://github.com/primer/primitives/commit/5125c6275a0f03fa28227d06d34540b56dee949f) Thanks [@langermank](https://github.com/langermank)! - - Disabled state for transparent type controls is now transparent

  - Reverted the selected color for transparent type controls back to the original (pulled from old source file)
  - Fixed the disabled fgColor for ToggleSwitch

- [#742](https://github.com/primer/primitives/pull/742) [`efa8b1c`](https://github.com/primer/primitives/commit/efa8b1c8542b9c7c1a124e7c2b6613cd4d622f52) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - buttonCounter color hotfix

- [#739](https://github.com/primer/primitives/pull/739) [`04a316c`](https://github.com/primer/primitives/commit/04a316c5749f4eb889325f73e8188b7663229b45) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - Fix contrast for bgColor-neutral-muted

## 7.14.0

### Minor Changes

- [`6b46ff4`](https://github.com/primer/primitives/commit/6b46ff40d2619b46329e111cb8198bc81eabcb3a) Thanks [@camertron](https://github.com/camertron)! - rm diffStat/addition/bgColor

### Patch Changes

- [#736](https://github.com/primer/primitives/pull/736) [`2565a2d`](https://github.com/primer/primitives/commit/2565a2d30dbca13b73e21064036910e269385770) Thanks [@langermank](https://github.com/langermank)! - Fix `invisible` Button states for high contrast themes

## 7.13.1

### Patch Changes

- [#733](https://github.com/primer/primitives/pull/733) [`f431e7e`](https://github.com/primer/primitives/commit/f431e7e74350b6ec400b36dc5f1cb0a4046e5e4b) Thanks [@langermank](https://github.com/langermank)! - - Remove the default button inset shadow (its basically invisible)

  - Switch danger button to use the same border strategy as primary for hover/active

- [#735](https://github.com/primer/primitives/pull/735) [`0d982b1`](https://github.com/primer/primitives/commit/0d982b1c7629afcdaa0a3168ffcfbfbae17aeeee) Thanks [@langermank](https://github.com/langermank)! - Add missing fallbacks for disabled buttons

- [#731](https://github.com/primer/primitives/pull/731) [`5ebfafe`](https://github.com/primer/primitives/commit/5ebfafe54df605f31e1c0a0e603a25a7248adf4a) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - change scss output from css variables to scss variables

- [#734](https://github.com/primer/primitives/pull/734) [`df91f47`](https://github.com/primer/primitives/commit/df91f4799d0b6d4018ef2bb3bea639660ba0ec6f) Thanks [@langermank](https://github.com/langermank)! - - Add iconColor tokens for the invisible button variant
  - Remove highlight shadow token as its no longer used for Button

## 7.13.0

### Minor Changes

- [#682](https://github.com/primer/primitives/pull/682) [`a082224`](https://github.com/primer/primitives/commit/a082224be3ef4d8cc73d7e8af11a727bbfb6d00d) Thanks [@langermank](https://github.com/langermank)! - - Add `inverse` color options for semantic color tokens to support Toast
  - Update the default `emphasis` background color to `white` in dark mode
  - Add `overlay` size tokens

### Patch Changes

- [#722](https://github.com/primer/primitives/pull/722) [`5394816`](https://github.com/primer/primitives/commit/5394816c98924e5b80d27cdf2a17b4bca2ac97aa) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - Fioxed RGBAfloatconversion

- [#723](https://github.com/primer/primitives/pull/723) [`a3b0d21`](https://github.com/primer/primitives/commit/a3b0d21746ac288c89c4f0f89f944cbe4b46d61c) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - Adding group prop to figma output

- [#729](https://github.com/primer/primitives/pull/729) [`d6bbf2a`](https://github.com/primer/primitives/commit/d6bbf2a2a0f9c0e2c91e77870f380a60eee670a4) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - fix shadow

- [#727](https://github.com/primer/primitives/pull/727) [`364c09f`](https://github.com/primer/primitives/commit/364c09fd462fc31a049d82f0a50d914695d5bde1) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - Allow some bgColors to be used as borders

- [#730](https://github.com/primer/primitives/pull/730) [`0c237e3`](https://github.com/primer/primitives/commit/0c237e392ab78863da8b17b0aa185dd0f3df92e1) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - update borderColor Success

- [#721](https://github.com/primer/primitives/pull/721) [`01aae86`](https://github.com/primer/primitives/commit/01aae86812435d2a6dc387d75641aa2a526cbdad) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - Fixing shadows

## 7.12.0

### Minor Changes

- [#665](https://github.com/primer/primitives/pull/665) [`360a8b8`](https://github.com/primer/primitives/commit/360a8b866847d232cae70cdca630504c5c6e09e2) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - Adding support for figma tokens

- [#714](https://github.com/primer/primitives/pull/714) [`5b1cb91`](https://github.com/primer/primitives/commit/5b1cb91299b0245f713610cd179d8816b96cfc20) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - Add space tokens

### Patch Changes

- [#704](https://github.com/primer/primitives/pull/704) [`aeb3b30`](https://github.com/primer/primitives/commit/aeb3b302b453452a1dc8fd6cf00a24d6c98a8e62) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - fix for figma references

- [#707](https://github.com/primer/primitives/pull/707) [`ca974dc`](https://github.com/primer/primitives/commit/ca974dcea75d6447fa94096dc1b94cdbd7896e35) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - add paddingBlock to figma

- [#711](https://github.com/primer/primitives/pull/711) [`0f7f801`](https://github.com/primer/primitives/commit/0f7f801a2bf3c43b41430b6fdd0cbb9af8f23858) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - Move figma control tokens to component collection

- [#709](https://github.com/primer/primitives/pull/709) [`c0cc1db`](https://github.com/primer/primitives/commit/c0cc1db6e1ee34ee695acbb9181e87846fe0c157) Thanks [@langermank](https://github.com/langermank)! - Update a few `bgColor` and `borderColor` Primitive fallbacks

- [#717](https://github.com/primer/primitives/pull/717) [`8c278bd`](https://github.com/primer/primitives/commit/8c278bd81b71e84106676065a95f8bdaf1765d75) Thanks [@langermank](https://github.com/langermank)! - Add back `inset` color tokens to v8

- [#686](https://github.com/primer/primitives/pull/686) [`40fdf5c`](https://github.com/primer/primitives/commit/40fdf5c611da88c824474347491a19f2e5a06a27) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - rename treeViewItem-leadingVisual-bgColor-rest to treeViewItem-leadingVisual-iconColor-rest

- [#698](https://github.com/primer/primitives/pull/698) [`870cc60`](https://github.com/primer/primitives/commit/870cc602ee1935fdca0520f42dd84d9e0621c4ec) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - Update figma token names & rename `fgColor-link-rest` to `fgColor-link`

## 7.11.14

### Patch Changes

- [#674](https://github.com/primer/primitives/pull/674) [`41ff627`](https://github.com/primer/primitives/commit/41ff62721c82070761826c641d8ec9d280419809) Thanks [@langermank](https://github.com/langermank)! - Fix disabled fg color for controls

- [#666](https://github.com/primer/primitives/pull/666) [`5c18c74`](https://github.com/primer/primitives/commit/5c18c74788d18619bc4b94558d532ec4df3288aa) Thanks [@ctmayn](https://github.com/ctmayn)! - Adjust the value of entity highlighting so it meets the required color contrast on a diff deletion background.

- [#667](https://github.com/primer/primitives/pull/667) [`f8c7429`](https://github.com/primer/primitives/commit/f8c74297461cad1394148791a8c414bc6aad7fd8) Thanks [@langermank](https://github.com/langermank)! - - Update Overlay backdrop color for dark mode

  - Add Overlay backdrop tokens to the old build

- [#671](https://github.com/primer/primitives/pull/671) [`2d3861e`](https://github.com/primer/primitives/commit/2d3861ec2949f1c0e75dd1a6a27a0699fad82b88) Thanks [@langermank](https://github.com/langermank)! - Add transparent fallbacks

- [#669](https://github.com/primer/primitives/pull/669) [`799a702`](https://github.com/primer/primitives/commit/799a702d015d6b7e292b7bc8d2e1fa207e60186f) Thanks [@langermank](https://github.com/langermank)! - Fix muted fallbacks for v8 test

- [#672](https://github.com/primer/primitives/pull/672) [`1fc2662`](https://github.com/primer/primitives/commit/1fc2662945eee93ece6dc6805ef209be7232f661) Thanks [@langermank](https://github.com/langermank)! - Fix muted border fallback

- [#673](https://github.com/primer/primitives/pull/673) [`6ebe450`](https://github.com/primer/primitives/commit/6ebe450433d2b5b228831d3ff0bf047459c6eda8) Thanks [@langermank](https://github.com/langermank)! - Update disabled control fallback

## 7.11.13

### Patch Changes

- [#662](https://github.com/primer/primitives/pull/662) [`e3a6b0f`](https://github.com/primer/primitives/commit/e3a6b0f9bb4c59e2083cd802c345f2711fd2ae34) Thanks [@langermank](https://github.com/langermank)! - Add shadows to color fallback dist

## 7.11.12

### Patch Changes

- [#659](https://github.com/primer/primitives/pull/659) [`77e0e07`](https://github.com/primer/primitives/commit/77e0e071d411f75ca70a9815b40260f3610c706a) Thanks [@langermank](https://github.com/langermank)! - Add functional transparent tokens

## 7.11.11

### Patch Changes

- [#654](https://github.com/primer/primitives/pull/654) [`67bf5c0`](https://github.com/primer/primitives/commit/67bf5c077a445e8ec37ae1ee0f0b2cc7a51e7d54) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - Add fallback json

## 7.11.10

### Patch Changes

- [#651](https://github.com/primer/primitives/pull/651) [`26ed1fc`](https://github.com/primer/primitives/commit/26ed1fc7e0f5ee1aa0a570b9c7bfdd356d663a62) Thanks [@langermank](https://github.com/langermank)! - Format fallback CSS vars with `var()`

## 7.11.9

### Patch Changes

- [#648](https://github.com/primer/primitives/pull/648) [`f559ad6`](https://github.com/primer/primitives/commit/f559ad6d638cd55dffd39a22eb861409b8273dce) Thanks [@langermank](https://github.com/langermank)! - Bug fix: `danger` counter fg

- [#649](https://github.com/primer/primitives/pull/649) [`4e231ba`](https://github.com/primer/primitives/commit/4e231bad1f94027c36fea82dab8460eac85eebed) Thanks [@langermank](https://github.com/langermank)! - Fix fallback dist JSON

## 7.11.8

### Patch Changes

- [#644](https://github.com/primer/primitives/pull/644) [`f388f1d`](https://github.com/primer/primitives/commit/f388f1dcccfaa25559b920455093a08e6d2fada7) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - add missing color overrides for light tritanopia in v8 tokens

- [#643](https://github.com/primer/primitives/pull/643) [`6f1f6b6`](https://github.com/primer/primitives/commit/6f1f6b68ff42fdcd401b370397c2f1f2fc5e4eb2) Thanks [@langermank](https://github.com/langermank)! - Adds new color fallback docs and JSON to be used with PostCSS

- [#600](https://github.com/primer/primitives/pull/600) [`76f3122`](https://github.com/primer/primitives/commit/76f31227b6b1b1c7adc5bc8c549cdb3db87aaecc) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - - fix syntax tokens dark mode by moving prettylights tokens into the color parent

  - invalid-illegal-text and carriage-return-bg were droped due to a json bug

- [#599](https://github.com/primer/primitives/pull/599) [`f67de6a`](https://github.com/primer/primitives/commit/f67de6afc7896270aac12813ddf2e75ce36fd291) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - Replace light-colorblind scale with overrides

- [#608](https://github.com/primer/primitives/pull/608) [`b8bc786`](https://github.com/primer/primitives/commit/b8bc786a5da55d55a5ccdcf61664be47810e92fb) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - Replace dark-colorblind scale with overrides

- [#645](https://github.com/primer/primitives/pull/645) [`40880ce`](https://github.com/primer/primitives/commit/40880ce3cfe4cd27bd749c54beb2c17806e2a2b3) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - add missing color overrides for dark tritanopia in v8 tokens

- [#618](https://github.com/primer/primitives/pull/618) [`f80a5fd`](https://github.com/primer/primitives/commit/f80a5fd3111ed23839d055b4bae3909dfc7c5b69) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - add option to remove descriptions from css output

- [#593](https://github.com/primer/primitives/pull/593) [`2fc6e68`](https://github.com/primer/primitives/commit/2fc6e68dffb8709a7fc44ba0f2895e73b78f70c4) Thanks [@langermank](https://github.com/langermank)! - Fix v8 dark syntax

- [#639](https://github.com/primer/primitives/pull/639) [`cbee891`](https://github.com/primer/primitives/commit/cbee89194be81febeab5cec077cd7c5215701d71) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - Remove unused color scales

- [#606](https://github.com/primer/primitives/pull/606) [`356bb54`](https://github.com/primer/primitives/commit/356bb5445019ae037b8a6fd4f213a6902beefec1) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - Replaced hex code overrides in colorblind mode scales with references to base scales

- [#562](https://github.com/primer/primitives/pull/562) [`d88095e`](https://github.com/primer/primitives/commit/d88095e652c0e8d3200760c68752ebd4f97278ca) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - Replaces light Tritanopia scale with overrides

- [#634](https://github.com/primer/primitives/pull/634) [`3e331b6`](https://github.com/primer/primitives/commit/3e331b6e81cce5d6db7ae0c66e724a125bf7a1e8) Thanks [@langermank](https://github.com/langermank)! - Minor docs fixes

- [#601](https://github.com/primer/primitives/pull/601) [`633aae8`](https://github.com/primer/primitives/commit/633aae88f4933d14859ba763035e516296c1048a) Thanks [@langermank](https://github.com/langermank)! - Fix missing prettylights tokens

- [#597](https://github.com/primer/primitives/pull/597) [`f004737`](https://github.com/primer/primitives/commit/f00473766bc934c3ac8f04fe9721d2a6c248828f) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - Replacing dark tritanopia scale with overrides

- [#641](https://github.com/primer/primitives/pull/641) [`8c77bbb`](https://github.com/primer/primitives/commit/8c77bbbc148c9c7b9ebee04042defbe1bdda956c) Thanks [@langermank](https://github.com/langermank)! - Improve contrast for Buttons with counters

## 7.11.7

### Patch Changes

- [`ad20369`](https://github.com/primer/primitives/commit/ad203696f9591a32fb0c26d65f43ff14c27eebb1) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - ## Updated workflow for v8 tokens

  - size-fine and size-coarse tokens are now wrapped in media queries

## 7.11.6

### Patch Changes

- [#576](https://github.com/primer/primitives/pull/576) [`98255a7`](https://github.com/primer/primitives/commit/98255a795ed15005aa1161dfedd54d62f5e2e598) Thanks [@langermank](https://github.com/langermank)! - - Add v8 migration docs
  - Finalize v8 output for testing

## 7.11.5

### Patch Changes

- [#557](https://github.com/primer/primitives/pull/557) [`c9101b7`](https://github.com/primer/primitives/commit/c9101b78d716e6d5189ab0bebb215e9fb2818db5) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - Updated fg.default and fg.muted for most themes to reset to previous versions

## 7.11.4

### Patch Changes

- [#555](https://github.com/primer/primitives/pull/555) [`98ca36a`](https://github.com/primer/primitives/commit/98ca36a05a2633e55bb6bef8010f61aa0fd5ef26) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - Fix for primary color in cvd modes

## 7.11.3

### Patch Changes

- [#542](https://github.com/primer/primitives/pull/542) [`9df92a7`](https://github.com/primer/primitives/commit/9df92a71e486b1868014573ce6104a8278ceafe7) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - - accent.subtle in dark is less opaque to have a 4.5 contrast with new accent color
  - danger and close fg slightly changed in light mode to contrast with fg.default (as we have some red links)
  - attention.emphasis darker to have 4.5:1 contrast with fg.onEmphasis

## 7.11.2

### Patch Changes

- [#529](https://github.com/primer/primitives/pull/529) [`05edec6`](https://github.com/primer/primitives/commit/05edec6425b470c1a4c2e10997cbe961463e3880) Thanks [@langermank](https://github.com/langermank)! - Add Primitives v8 colors (private dist for testing)

- [#538](https://github.com/primer/primitives/pull/538) [`535f4b0`](https://github.com/primer/primitives/commit/535f4b06786d5464ce18de2d2f0dbd15cc683fd0) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - A11y changes to primary green, fg.default and fg.muted and some more

- [#536](https://github.com/primer/primitives/pull/536) [`1771a74`](https://github.com/primer/primitives/commit/1771a74afab2afdea80f6f0eff83192b2cb41ee3) Thanks [@langermank](https://github.com/langermank)! - Fix Avatar shadow in new tokens

- [#499](https://github.com/primer/primitives/pull/499) [`f731161`](https://github.com/primer/primitives/commit/f731161f0591ffed9963da17072d9980a136b4c2) Thanks [@josepmartins](https://github.com/josepmartins)! - Fix bug on AvatarPair box shadow

## 7.11.1

### Patch Changes

- [#477](https://github.com/primer/primitives/pull/477) [`39940de`](https://github.com/primer/primitives/commit/39940de6a57bc4eb8264fb86a25dd1c684471c8b) Thanks [@mperrotti](https://github.com/mperrotti)! - Updates to support new ToggleSwitch visual design

## 7.11.0

### Minor Changes

- [#485](https://github.com/primer/primitives/pull/485) [`4e408ca`](https://github.com/primer/primitives/commit/4e408ca63a8e056f32270b543e5d3ebdeadb8f3c) Thanks [@lukasoppermann](https://github.com/lukasoppermann)! - Adds control.borderColor.emphasis color token

- [#449](https://github.com/primer/primitives/pull/449) [`7130392`](https://github.com/primer/primitives/commit/7130392a2e152265f14020866c71a119cc888847) Thanks [@rezrah](https://github.com/rezrah)! - Deprecated marketing design tokens for Button components

  Marketing tokens will be served from `@primer/brand-primitives` in future.

  ```bash
  npm install --save @primer/brand-primitives
  ```

  ```diff
  - ---color-mktg-btn-bg
  + --brand-Button-background-base
  ```

  ```diff
  - --color-mktg-btn-shadow-outline
  + --brand-Button-shadow-default
  ```

  ```diff
  - --color-mktg-btn-shadow-focus
  + --brand-Button-shadow-focus
  ```

  ```diff
  - --color-mktg-btn-shadow-hover
  + --brand-Button-shadow-primary-hover
  ```

  ```diff
  - --color-mktg-btn-shadow-muted
  + --color-mktg-btn-shadow-hover-muted
  ```

  :link: [See the `0.9.0` for all other tokens.](https://unpkg.com/browse/@primer/brand-primitives@0.9.0/lib/design-tokens/css/tokens/functional/components/button/colors-with-modes.css)

- [#385](https://github.com/primer/primitives/pull/385) [`e03c7fd`](https://github.com/primer/primitives/commit/e03c7fd8a6d902e8d7784fd889acb3779236ba51) Thanks [@simurai](https://github.com/simurai)! - Add `Noto Sans` to the font stack

- [#384](https://github.com/primer/primitives/pull/384) [`8b76794`](https://github.com/primer/primitives/commit/8b767947e35a79db17b9d7970836f03c904c8afe) Thanks [@langermank](https://github.com/langermank)! - - Remove deprecated focus color tokens in favor of "global" styles from Primer CSS

## 7.10.0

### Minor Changes

- [#358](https://github.com/primer/primitives/pull/358) [`a188c78`](https://github.com/primer/primitives/commit/a188c788c88dbf8f79bb3252d24416bd195fbc14) Thanks [@mperrotti](https://github.com/mperrotti)! - Adds a color token for the treeview icon fill.

* [#354](https://github.com/primer/primitives/pull/354) [`3b28659`](https://github.com/primer/primitives/commit/3b286594aed3d4de97866d354f050f7e59945e95) Thanks [@mperrotti](https://github.com/mperrotti)! - Introduces TreeView.Item component color primitives

### Patch Changes

- [#351](https://github.com/primer/primitives/pull/351) [`d8d2480`](https://github.com/primer/primitives/commit/d8d2480c1ec971dca7dd9b1026cf445663f1ae03) Thanks [@langermank](https://github.com/langermank)! - Add SCSS vars for PCSS utilities & dotcom

## 7.9.0

### Minor Changes

- [#329](https://github.com/primer/primitives/pull/329) [`607cc75`](https://github.com/primer/primitives/commit/607cc753b305285faf399fdc47bb752cb6c71713) Thanks [@simurai](https://github.com/simurai)! - Add SegmentedControl colors

### Patch Changes

- [#338](https://github.com/primer/primitives/pull/338) [`4dc8e2e`](https://github.com/primer/primitives/commit/4dc8e2ea3725c32fcf3b5a7cfc0cf29d943e2169) Thanks [@adrian5](https://github.com/adrian5)! - Normalize color data to lowercase hex

## 7.8.4

### Patch Changes

- [#334](https://github.com/primer/primitives/pull/334) [`ff5fea6`](https://github.com/primer/primitives/commit/ff5fea6dfb229c430fec66277cf24520dd70d7b5) Thanks [@langermank](https://github.com/langermank)! - Typography bug fixes + border thickness naming

## 7.8.3

### Patch Changes

- [#326](https://github.com/primer/primitives/pull/326) [`bc75b88`](https://github.com/primer/primitives/commit/bc75b88c06bd9dc2aacd0dcdc0f52927bc527b06) Thanks [@rezrah](https://github.com/rezrah)! - export StyleDictionary for app-level extending

## 7.8.2

### Patch Changes

- [#323](https://github.com/primer/primitives/pull/323) [`40f15d5`](https://github.com/primer/primitives/commit/40f15d530a130390debb794dbc4080f58b42d49e) Thanks [@rezrah](https://github.com/rezrah)! - add self serve tooling for v2 primitives

## 7.8.1

### Patch Changes

- [#321](https://github.com/primer/primitives/pull/321) [`97b4ba2`](https://github.com/primer/primitives/commit/97b4ba2bc4a86262489e11501563b6e76a7d12c2) Thanks [@rezrah](https://github.com/rezrah)! - Fixes post installation command

## 7.8.0

### Minor Changes

- [#317](https://github.com/primer/primitives/pull/317) [`45359ea`](https://github.com/primer/primitives/commit/45359eab4613edacfad331858128f187a01ce49c) Thanks [@langermank](https://github.com/langermank)! - - Initial design tokens release for interal Primer team use only
  - Private docs that can be accessed at /typography and /size
  - Separate dist for testing purposes only

## 7.7.0

### Minor Changes

- [#310](https://github.com/primer/primitives/pull/310) [`3a72849`](https://github.com/primer/primitives/commit/3a728498f352f737b8d257d1f70bd7d40e39d8db) Thanks [@simurai](https://github.com/simurai)! - Add Tritanopia theme

## 7.6.0

### Minor Changes

- [#309](https://github.com/primer/primitives/pull/309) [`4588342`](https://github.com/primer/primitives/commit/45883423f029e7dee067fe4dd9636bebb11adbbe) Thanks [@mperrotti](https://github.com/mperrotti)! - adds primitives for toggle switch component

### Patch Changes

- [#307](https://github.com/primer/primitives/pull/307) [`da4ffd3`](https://github.com/primer/primitives/commit/da4ffd338a41bb1f653e096c8b886db4834b3715) Thanks [@simurai](https://github.com/simurai)! - Increase contrast for dark `fg.subtle`

## 7.5.1

### Patch Changes

- [#306](https://github.com/primer/primitives/pull/306) [`8e9779c`](https://github.com/primer/primitives/commit/8e9779cd917554874bbc60cda0fd3baaf69118ca) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Color scale improvements for Blue and Orange

* [#303](https://github.com/primer/primitives/pull/303) [`07e01ad`](https://github.com/primer/primitives/commit/07e01add2f4d48ca32ffed6e4c61304fd93d0a16) Thanks [@simurai](https://github.com/simurai)! - Update `closed` role for `dark_colorblind`

- [#304](https://github.com/primer/primitives/pull/304) [`94ae707`](https://github.com/primer/primitives/commit/94ae70763ac93e17c78bd5c2444d5ebb93fa0a7e) Thanks [@edokoa](https://github.com/edokoa)! - Change `scale.white` in dark mode to `#ffffff`

## 7.5.0

### Minor Changes

- [#296](https://github.com/primer/primitives/pull/296) [`389b08b`](https://github.com/primer/primitives/commit/389b08bd09d965b117516ea5c72da64bc4cb03d9) Thanks [@simurai](https://github.com/simurai)! - Add `open` and `closed` roles

### Patch Changes

- [#301](https://github.com/primer/primitives/pull/301) [`2f18306`](https://github.com/primer/primitives/commit/2f1830606a025239a9153d4ebeec46ef0fa894e6) Thanks [@konradpabjan](https://github.com/konradpabjan)! - [Actions] Update light theme color for gateWaitingText

## 7.4.1

### Patch Changes

- [#289](https://github.com/primer/primitives/pull/289) [`0253f6e`](https://github.com/primer/primitives/commit/0253f6eda2868c128761a30a41b236b734c3cd34) Thanks [@simurai](https://github.com/simurai)! - Add utility mapping

## 7.4.0

### Minor Changes

- [#283](https://github.com/primer/primitives/pull/283) [`1bcb44f`](https://github.com/primer/primitives/commit/1bcb44f51bbf612302e9204cf4e1dc187ec6be94) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Background adjustments for High Contrast theme.

## 7.3.0

### Minor Changes

- [#284](https://github.com/primer/primitives/pull/284) [`fc76170`](https://github.com/primer/primitives/commit/fc76170cc8e6ee59011d70857698867093f94d81) Thanks [@simurai](https://github.com/simurai)! - Add `pageHeaderBg` primitive

## 7.2.0

### Minor Changes

- [#282](https://github.com/primer/primitives/pull/282) [`71f5486`](https://github.com/primer/primitives/commit/71f548663a247c3ff347657ebaaceae7d1c458f5) Thanks [@simurai](https://github.com/simurai)! - Add `header.divider`

* [#279](https://github.com/primer/primitives/pull/279) [`3729355`](https://github.com/primer/primitives/commit/3729355a30bd361f2be5da379cc85357f474d9a1) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Add border to topic-tag and counters

### Patch Changes

- [#277](https://github.com/primer/primitives/pull/277) [`3fda2d3`](https://github.com/primer/primitives/commit/3fda2d3eb43662331c1b93876267592bf7b9fcc3) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Increased contrast in Light HC shades

* [#281](https://github.com/primer/primitives/pull/281) [`8da4db2`](https://github.com/primer/primitives/commit/8da4db27af11bb011c2efcbe2e5eb736a09cbc55) Thanks [@simurai](https://github.com/simurai)! - Improve diff-blob-expander-icon (follow-up)

- [#281](https://github.com/primer/primitives/pull/281) [`8da4db2`](https://github.com/primer/primitives/commit/8da4db27af11bb011c2efcbe2e5eb736a09cbc55) Thanks [@simurai](https://github.com/simurai)! - Improve diff-blob-expander

* [#280](https://github.com/primer/primitives/pull/280) [`46d2c1e`](https://github.com/primer/primitives/commit/46d2c1eb5727ad6d68ba1ef8fc4c8f5241c2d857) Thanks [@simurai](https://github.com/simurai)! - Improve diff-blob-expander-icon

## 7.1.1

### Patch Changes

- [#273](https://github.com/primer/primitives/pull/273) [`5c8d9a9`](https://github.com/primer/primitives/commit/5c8d9a99fca308bc23ba03e29a2a8ef2eef947fa) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Border improvements

* [#276](https://github.com/primer/primitives/pull/276) [`f2d41ec`](https://github.com/primer/primitives/commit/f2d41ec00c70a5e794dc76567098ebcb11fbed8a) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Improved button states for light HC

- [#274](https://github.com/primer/primitives/pull/274) [`f071312`](https://github.com/primer/primitives/commit/f0713123fd89552fab1b38e6f2be88747d9d8f1a) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Improved contrast for change highlights in diff

## 7.1.0

### Minor Changes

- [#271](https://github.com/primer/primitives/pull/271) [`f6e25d7`](https://github.com/primer/primitives/commit/f6e25d7a4a262bb7d0b08ae22beca6c9aaae63bf) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Add light high contrast theme

## 7.0.1

### Patch Changes

- [#269](https://github.com/primer/primitives/pull/269) [`f16073c`](https://github.com/primer/primitives/commit/f16073c694209b0ef631a78fabaf304e2487b7c9) Thanks [@simurai](https://github.com/simurai)! - Mark mktg primitives as removed

## 7.0.0

### Major Changes

- [#267](https://github.com/primer/primitives/pull/267) [`39a664e`](https://github.com/primer/primitives/commit/39a664ebda5d971cb65acc60dc861ea448f64deb) Thanks [@simurai](https://github.com/simurai)! - Prepare for new gloss buttons with color mode support

## 6.1.0

### Minor Changes

- [#256](https://github.com/primer/primitives/pull/256) [`893d873`](https://github.com/primer/primitives/commit/893d873c57240df02a23a82c178d9a3a0ca6a983) Thanks [@auareyou](https://github.com/auareyou)! - Add `actionListItem` variables

## 6.0.0

### Major Changes

- [#260](https://github.com/primer/primitives/pull/260) [`a11b8a7`](https://github.com/primer/primitives/commit/a11b8a7aaeb86b838501ded7a2c8a2eff0e68aba) Thanks [@jonrohan](https://github.com/jonrohan)! - Rename color blind themes

## 5.1.0

### Minor Changes

- [#252](https://github.com/primer/primitives/pull/252) [`48149b1`](https://github.com/primer/primitives/commit/48149b116a4708ad87712e6b13cfa1489f66cc0c) Thanks [@simurai](https://github.com/simurai)! - Add `primer.fg.disabled`

## 5.0.0

### Major Changes

- [#245](https://github.com/primer/primitives/pull/245) [`65ad2df`](https://github.com/primer/primitives/commit/65ad2df4d19f1eac86778879266bab6648ebe0e4) Thanks [@colebemis](https://github.com/colebemis)! - All deprecated color variables have been removed. See [removed variables](https://primer.style/primitives/colors#removed-variables) for the complete list of removed variables.

* [#245](https://github.com/primer/primitives/pull/245) [`65ad2df`](https://github.com/primer/primitives/commit/65ad2df4d19f1eac86778879266bab6648ebe0e4) Thanks [@colebemis](https://github.com/colebemis)! - The `deprecations` directory in the `dist` directory has been renamed to `deprecated`:

  ```diff
  dist/
  - deprecations/
  + deprecated/
  ```

  You'll need to update your imports accordingly:

  ```diff
  - import deprecatedColors from '@primer/primitives/dist/deprecations/colors.json'
  + import deprecatedColors from '@primer/primitives/dist/deprecated/colors.json'
  ```

### Minor Changes

- [#245](https://github.com/primer/primitives/pull/245) [`65ad2df`](https://github.com/primer/primitives/commit/65ad2df4d19f1eac86778879266bab6648ebe0e4) Thanks [@colebemis](https://github.com/colebemis)! - The [`dist`](https://unpkg.com/browse/@primer/primitives/dist/) directory now contains a `removed` directory with data about removed variables organized by category:

  ```diff
    dist/
      js/
      ts/
      json/
      scss/
      deprecated/
  +   removed/
  +     colors.json
  ```

  Each JSON file in the `removed` directory contains a mapping of removed variables to replacement variables. Example:

  ```js
  // dist/removed/colors.json
  {
    "text.primary": "fg.default", // this means: `text.primary` is deprecated. Use `fg.default` instead
    "auto.blue.4": ["accent.fg, accent.emphasis"], // this means: `auto.blue.4` is deprecated. Use `accent.fg` or `accent.emphasis` instead
    "text.white": null // this means: `text.white` is deprecated. We don't have a replacement for it
  }
  ```

  This data will allow you to write linters to prevent usage of removed variables.

### Patch Changes

- [#250](https://github.com/primer/primitives/pull/250) [`9948e13`](https://github.com/primer/primitives/commit/9948e139bcdd360bccb939aab27992ac06b3a3bf) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Fix duplicate hex value (red 9)

## 4.8.1

### Patch Changes

- [#246](https://github.com/primer/primitives/pull/246) [`22e1524`](https://github.com/primer/primitives/commit/22e15240b18b7b18ab3193a759576fda8f611012) Thanks [@simurai](https://github.com/simurai)! - Fix exceptions for light themes

* [#242](https://github.com/primer/primitives/pull/242) [`c57b590`](https://github.com/primer/primitives/commit/c57b5901007313c6d451933bc0402ef280907265) Thanks [@simurai](https://github.com/simurai)! - Map `border.tertiary` to `border.default`

- [#243](https://github.com/primer/primitives/pull/243) [`c8adddc`](https://github.com/primer/primitives/commit/c8adddcb85e7476a6864326160131622a6e21910) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Fix diff highlights + Btn primary state fixes

## 4.8.0

### Minor Changes

- [#236](https://github.com/primer/primitives/pull/236) [`ec5eb62`](https://github.com/primer/primitives/commit/ec5eb62cbddd711cc027b8edcffb961b92643c4f) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Add new color blind themes:
  - `light_protanopia`
  - `dark_protanopia`

### Patch Changes

- [#235](https://github.com/primer/primitives/pull/235) [`ac4edb8`](https://github.com/primer/primitives/commit/ac4edb8be96d885babfc09f8fae23d5e4458fd94) Thanks [@simurai](https://github.com/simurai)! - Add `canvasDefaultTransparent` app color variable

## 4.7.1

### Patch Changes

- [#233](https://github.com/primer/primitives/pull/233) [`647cf69`](https://github.com/primer/primitives/commit/647cf69215f6293f924df03417134babab1739a1) Thanks [@colebemis](https://github.com/colebemis)! - Delete experimental `data/colors_v2` directory

## 4.7.0

### Minor Changes

- [#224](https://github.com/primer/primitives/pull/224) [`eaf6bb5`](https://github.com/primer/primitives/commit/eaf6bb5b70b01b633c0212b358db96cc44cef6a9) Thanks [@colebemis](https://github.com/colebemis)! - Add new functional color variables. See [primer.style/primitives/colors](https://primer.style/primitives/colors) for details about the new color system.

* [#224](https://github.com/primer/primitives/pull/224) [`eaf6bb5`](https://github.com/primer/primitives/commit/eaf6bb5b70b01b633c0212b358db96cc44cef6a9) Thanks [@colebemis](https://github.com/colebemis)! - Introduce a Dark High Contrast theme.

  **Note:** The Dark High Contrast theme will only work with the new [functional color variables](https://primer.style/primitives/colors#functional-variables)

- [#224](https://github.com/primer/primitives/pull/224) [`eaf6bb5`](https://github.com/primer/primitives/commit/eaf6bb5b70b01b633c0212b358db96cc44cef6a9) Thanks [@colebemis](https://github.com/colebemis)! - Deprecate variables from the old color system. See [primer.style/primitives/colors#deprecated-variables](https://primer.style/primitives/colors#deprecated-variables) for the complete list of deprecated variables.

## 4.6.9

### Patch Changes

- [#229](https://github.com/primer/primitives/pull/229) [`6d4dbb0`](https://github.com/primer/primitives/commit/6d4dbb02307d0d3efb95bd9450a5e6aa677250e7) Thanks [@simurai](https://github.com/simurai)! - Undeprecate `timeline.badgeBg`

## 4.6.8

### Patch Changes

- [#220](https://github.com/primer/primitives/pull/220) [`a811195`](https://github.com/primer/primitives/commit/a8111958a2e108f063a013fd073e9ba1fe24889d) Thanks [@colebemis](https://github.com/colebemis)! - Fix `searchKeyword.hl` in `colors_v2`

* [#223](https://github.com/primer/primitives/pull/223) [`a474221`](https://github.com/primer/primitives/commit/a474221d2667ae335974c5113871b478898ebe8d) Thanks [@colebemis](https://github.com/colebemis)! - Fix `headerSearch.*` variables in colors_v2

- [#226](https://github.com/primer/primitives/pull/226) [`2486b61`](https://github.com/primer/primitives/commit/2486b618c812e8ffac46940b9e9dafc87edee08e) Thanks [@auareyou](https://github.com/auareyou)! - Color adjustments to diff

## 4.6.7

### Patch Changes

- [#217](https://github.com/primer/primitives/pull/217) [`aaa62f0`](https://github.com/primer/primitives/commit/aaa62f0d71ee022f53b673f51bb162fae950eb6f) Thanks [@simurai](https://github.com/simurai)! - Update timeline-badge-bg

## 4.6.6

### Patch Changes

- [#215](https://github.com/primer/primitives/pull/215) [`4b23b00`](https://github.com/primer/primitives/commit/4b23b00a5f7bd427882500e94c3eb087fc18fd55) Thanks [@auareyou](https://github.com/auareyou)! - Bug fixes

## 4.6.5

### Patch Changes

- [#212](https://github.com/primer/primitives/pull/212) [`e148aa1`](https://github.com/primer/primitives/commit/e148aa1d6495f9e083eb8b6b0566151b156d759a) Thanks [@auareyou](https://github.com/auareyou)! - Add `topicTag.border`

* [#212](https://github.com/primer/primitives/pull/212) [`1eaadb1`](https://github.com/primer/primitives/commit/1eaadb145bcdbc814020fc8b4747ffbeb1ccfaf6) Thanks [@auareyou](https://github.com/auareyou)! - Small fixes

- [#213](https://github.com/primer/primitives/pull/213) [`85aecab`](https://github.com/primer/primitives/commit/85aecabb6340347e2aba999deceee1111214266b) Thanks [@auareyou](https://github.com/auareyou)! - Small fixes

## 4.6.4

### Patch Changes

- [#210](https://github.com/primer/primitives/pull/210) [`94868fd`](https://github.com/primer/primitives/commit/94868fdea242f848b79d82baac0ff7a1285c5b56) Thanks [@auareyou](https://github.com/auareyou)! - Fix small bugs in dark mode

## 4.6.3

### Patch Changes

- [#208](https://github.com/primer/primitives/pull/208) [`248eb81`](https://github.com/primer/primitives/commit/248eb81d61fede2af948557bcf2ca9c924a9866f) Thanks [@auareyou](https://github.com/auareyou)! - Fixed numText variables for the diff

## 4.6.2

### Patch Changes

- [#206](https://github.com/primer/primitives/pull/206) [`a18f427`](https://github.com/primer/primitives/commit/a18f427ceec355702272c3001e25fe5a9effe34f) Thanks [@colebemis](https://github.com/colebemis)! - Add color deprecations file

## 4.6.1

### Patch Changes

- [#201](https://github.com/primer/primitives/pull/201) [`19131a4`](https://github.com/primer/primitives/commit/19131a428f803fce36f80cf3288777ec46bd1c60) Thanks [@auareyou](https://github.com/auareyou)! - Various v2 improvements

## 4.6.0

### Minor Changes

- [#202](https://github.com/primer/primitives/pull/202) [`25a91d9`](https://github.com/primer/primitives/commit/25a91d9db896229df54549dca6afb1c670fa2bb5) Thanks [@colebemis](https://github.com/colebemis)! - The [`dist`](https://unpkg.com/browse/@primer/primitives/dist/) directory now contains a `deprecations` directory with variable deprecation data organized by category:

  ```diff
    dist/
      js/
      ts/
      json/
      scss/
  +   deprecations/
  +     colors.json
  ```

  Each JSON file in the `deprecations` directory contains a mapping of deprecated variables to replacement variables. Example:

  ```js
  // dist/deprecations/colors.json
  {
    "text.primary": "fg.default", // this means: `text.primary` is deprecated. Use `fg.default` instead
    "auto.blue.4": ["accent.fg, accent.emphasis"], // this means: `auto.blue.4` is deprecated. Use `accent.fg` or `accent.emphasis` instead
    "text.white": null // this means: `text.white` is deprecated. We don't have a replacement for it
  }
  ```

  This data will allow consumers of `@primer/primitives` (e.g. [Primer React](https://primer.style/react) and [Primer ViewComponents](https://primer.style/view-components)) to write linters to prevent usage of deprecated variables.

## 4.5.4

### Patch Changes

- [#194](https://github.com/primer/primitives/pull/194) [`5280f5c`](https://github.com/primer/primitives/commit/5280f5c5d36f7b6e98d22c9c5a0146588360d226) Thanks [@simurai](https://github.com/simurai)! - Un-deprecate `search-keyword-hl`

* [#196](https://github.com/primer/primitives/pull/196) [`06202b9`](https://github.com/primer/primitives/commit/06202b996e9c2e9a27d5e15a3130f463f6687708) Thanks [@auareyou](https://github.com/auareyou)! - Changes to the diff

## 4.5.3

### Patch Changes

- [#195](https://github.com/primer/primitives/pull/195) [`d7a8ae1`](https://github.com/primer/primitives/commit/d7a8ae18eed3e5419161715c5e91f981db9f5460) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Slightly lighter Red-0 for improved diff highlight.

* [#188](https://github.com/primer/primitives/pull/188) [`a8fe22e`](https://github.com/primer/primitives/commit/a8fe22e4d631f143aa9c33fd7a749756bf1f71a1) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Update green scale to be slightly less yellow

## 4.5.2

### Patch Changes

- [#179](https://github.com/primer/primitives/pull/179) [`f64ae47`](https://github.com/primer/primitives/commit/f64ae471d6ef3e6db73dfe1be11c7cbe53cf1bf8) Thanks [@simurai](https://github.com/simurai)! - Move `btn.selectedBg`

* [#182](https://github.com/primer/primitives/pull/182) [`3bfc800`](https://github.com/primer/primitives/commit/3bfc800be3b7481217bb05e66b79a8ae72a6cf78) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Update tooltip background

- [#181](https://github.com/primer/primitives/pull/181) [`fc9e9f8`](https://github.com/primer/primitives/commit/fc9e9f85a0b430ebdaf867bb90f5d4e0e66bc363) Thanks [@simurai](https://github.com/simurai)! - Move header-search from product to component

* [#186](https://github.com/primer/primitives/pull/186) [`5198cfa`](https://github.com/primer/primitives/commit/5198cfa8f7a8e688f48dff2ac604792023db5a26) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Underline nav contrast improvements

- [#185](https://github.com/primer/primitives/pull/185) [`6750323`](https://github.com/primer/primitives/commit/6750323e7daff2980763e394de5e11259edb932a) Thanks [@simurai](https://github.com/simurai)! - Increase `<code>` contrast

* [#183](https://github.com/primer/primitives/pull/183) [`d27b310`](https://github.com/primer/primitives/commit/d27b31034487b46932fc4438ee0ce6ac891eb6ad) Thanks [@auareyou](https://github.com/auareyou)! - Changed alert foregrounds to use `fg.default`

- [#184](https://github.com/primer/primitives/pull/184) [`420c257`](https://github.com/primer/primitives/commit/420c2579d5f2b29da2214342a33b3cec4376e2d8) Thanks [@simurai](https://github.com/simurai)! - Increase dark checks.inputBg contrast

## 4.5.1

### Patch Changes

- [#176](https://github.com/primer/primitives/pull/176) [`40d0661`](https://github.com/primer/primitives/commit/40d0661b48c8fd0df75000bf87dbe5a674a9cee0) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Added btn.selected hc exception

* [#178](https://github.com/primer/primitives/pull/178) [`0461344`](https://github.com/primer/primitives/commit/04613440d60133a2a9fec39b2f687323be720f1a) Thanks [@simurai](https://github.com/simurai)! - Update `codemirror.selectionBg`

- [#174](https://github.com/primer/primitives/pull/174) [`0071ef5`](https://github.com/primer/primitives/commit/0071ef571c2e8a84df753a3d291d3a9d69b1d409) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Fixed syntax for hover text + icon

* [#177](https://github.com/primer/primitives/pull/177) [`4d14328`](https://github.com/primer/primitives/commit/4d14328e062d16c295f342f5c9fe96a660285b18) Thanks [@simurai](https://github.com/simurai)! - Update `diffBlob.selectedLineHighlightMixBlendMode` in dark mode

## 4.5.0

### Minor Changes

- [#172](https://github.com/primer/primitives/pull/172) [`2271374`](https://github.com/primer/primitives/commit/2271374c7489a7b4cb32715cd3e6d958ca3c3c42) Thanks [@simurai](https://github.com/simurai)! - Add `primer.fg.white`

* [#168](https://github.com/primer/primitives/pull/168) [`cd89a9c`](https://github.com/primer/primitives/commit/cd89a9c9baebf6e35a92d2ce4d1bd7e3b9222159) Thanks [@simurai](https://github.com/simurai)! - Add checks-donut variables

- [#171](https://github.com/primer/primitives/pull/171) [`9e7b1bb`](https://github.com/primer/primitives/commit/9e7b1bbdf1154ced03dbd3e7399b7d60006fc79a) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Added new variable for diff foreground

* [#173](https://github.com/primer/primitives/pull/173) [`86d4ffd`](https://github.com/primer/primitives/commit/86d4ffd1aadbcaddad238d5ae3b0b4081e0c6886) Thanks [@simurai](https://github.com/simurai)! - Deprecate text-white

### Patch Changes

- [#170](https://github.com/primer/primitives/pull/170) [`e055b14`](https://github.com/primer/primitives/commit/e055b147209b790ac2f59a3245753a372712cbfd) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Remapped neutral.emphasis to gray.4 instead of gray.6

* [#166](https://github.com/primer/primitives/pull/166) [`2f55806`](https://github.com/primer/primitives/commit/2f55806f00a8d380ed67198faa0146902b5e7c18) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Changed attention.emphasis from 5 → 4

- [#169](https://github.com/primer/primitives/pull/169) [`dc4e70a`](https://github.com/primer/primitives/commit/dc4e70ab140fccc3603b46fdc15dced3b1b27c4a) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Fixed danger button hover state

## 4.4.4

### Patch Changes

- [#161](https://github.com/primer/primitives/pull/161) [`6ed4ac6`](https://github.com/primer/primitives/commit/6ed4ac64ce5cf86c9fe59fd25d19adfc06fec5c2) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Fixed wrong order of light coral scale

* [#165](https://github.com/primer/primitives/pull/165) [`1ca0384`](https://github.com/primer/primitives/commit/1ca03848924d1ab7b704e0786cdd387d7ca852f1) Thanks [@simurai](https://github.com/simurai)! - Use `canvas.default` for socialCount background

- [#163](https://github.com/primer/primitives/pull/163) [`ddb2e39`](https://github.com/primer/primitives/commit/ddb2e396e3a4e04008a136916c3f48a27bd708f4) Thanks [@simurai](https://github.com/simurai)! - Fix checks header

* [#153](https://github.com/primer/primitives/pull/153) [`7fcce19`](https://github.com/primer/primitives/commit/7fcce19571255f516c3fa837a66771f19c78f0fc) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - removed opacity from roles.muted + replaced foregrounds in diff blob

## 4.4.3

### Patch Changes

- [#159](https://github.com/primer/primitives/pull/159) [`9e3875c`](https://github.com/primer/primitives/commit/9e3875cf6041a603f293e983925ae30795362dc1) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Updated green for primary button and success.emphasis

* [#154](https://github.com/primer/primitives/pull/154) [`6298c1e`](https://github.com/primer/primitives/commit/6298c1e3c5aab15298bac45faacdd4d78dd31887) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Update hc avatar and diffstat borders

- [#155](https://github.com/primer/primitives/pull/155) [`e4c4e92`](https://github.com/primer/primitives/commit/e4c4e921a83e7ff43e8b55cbc7f314fb216abd8d) Thanks [@simurai](https://github.com/simurai)! - Deprecate globalNav

* [#158](https://github.com/primer/primitives/pull/158) [`cd0c90e`](https://github.com/primer/primitives/commit/cd0c90e23963da73f41a2ecd69357e4d176e592a) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - neutral.emphasis fix in HC

- [#156](https://github.com/primer/primitives/pull/156) [`0aba5fa`](https://github.com/primer/primitives/commit/0aba5fade817ee963bf7c19a717c6991a201f5ce) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - header-input border fix

## 4.4.2

### Patch Changes

- [#151](https://github.com/primer/primitives/pull/151) [`73a53a0`](https://github.com/primer/primitives/commit/73a53a0094074791eb8c6cebb1320db017f8719b) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Fixed states for btn.danger in HC

* [#149](https://github.com/primer/primitives/pull/149) [`9539f54`](https://github.com/primer/primitives/commit/9539f54666dfb4e45b5d00a3ebd4d633f578f1de) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Global Nav → input fixes

- [#145](https://github.com/primer/primitives/pull/145) [`c6fd869`](https://github.com/primer/primitives/commit/c6fd86990b97abae9821ee5eb858ab83ae783163) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Primary button fixes

* [#152](https://github.com/primer/primitives/pull/152) [`281a7fb`](https://github.com/primer/primitives/commit/281a7fbba59d3afecac3f6761346093ca6470830) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Update neutral emphasis

## 4.4.1

### Patch Changes

- [#143](https://github.com/primer/primitives/pull/143) [`5337f4c`](https://github.com/primer/primitives/commit/5337f4ce6f53759ff259694cbe60400d67aba386) Thanks [@simurai](https://github.com/simurai)! - Remove 2nd shadow from overlay-shadow

* [#141](https://github.com/primer/primitives/pull/141) [`8b52b57`](https://github.com/primer/primitives/commit/8b52b57a8b380b0b2d0da9f75c0bbe8bb4e6e8f0) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - Change HC border subtle → gray.5

## 4.4.0

### Minor Changes

- [#135](https://github.com/primer/primitives/pull/135) [`0ebb80c`](https://github.com/primer/primitives/commit/0ebb80cf5ad86b73aeec25f9d044983931079440) Thanks [@simurai](https://github.com/simurai)! - Add overlay-shadow

### Patch Changes

- [#142](https://github.com/primer/primitives/pull/142) [`a581980`](https://github.com/primer/primitives/commit/a5819806efa98281301347433ba6538b783adb78) Thanks [@colebemis](https://github.com/colebemis)! - Change "transparent" colors to "rgba(0,0,0,0)"

* [#137](https://github.com/primer/primitives/pull/137) [`4779983`](https://github.com/primer/primitives/commit/4779983fd0c95924cbc2b5b9ac98dac19ec0f205) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - HC palette update + exceptions for emphasis

- [#134](https://github.com/primer/primitives/pull/134) [`8b8cba7`](https://github.com/primer/primitives/commit/8b8cba7a61756c85d2f751392162abbaadcbfcec) Thanks [@auareyou](https://github.com/auareyou)! - Remapping updates

  - Updated alerts to use roles instead of `fg-default`
  - Rename `fg.inactive` to `fg.subtle`
  - Deprecate `avatar-border`

* [#140](https://github.com/primer/primitives/pull/140) [`9308676`](https://github.com/primer/primitives/commit/930867696e05be3fbd35590b417241ad0a66e6c7) Thanks [@Juliusschaeper](https://github.com/Juliusschaeper)! - btn.primary state tweaks for high contrast

## 4.3.11

### Patch Changes

- [#128](https://github.com/primer/primitives/pull/128) [`d10bc5d`](https://github.com/primer/primitives/commit/d10bc5d7ff994d0664a60ff3dca6075b026c4936) Thanks [@auareyou](https://github.com/auareyou)! - Added canvas subtle

* [#129](https://github.com/primer/primitives/pull/129) [`5e79a37`](https://github.com/primer/primitives/commit/5e79a37546a7405f5c05f9643cf36e230d2b8414) Thanks [@simurai](https://github.com/simurai)! - Deprecate fade variables

- [#130](https://github.com/primer/primitives/pull/130) [`3785534`](https://github.com/primer/primitives/commit/3785534443bbb48b14c07b1eb79fede529afbde5) Thanks [@simurai](https://github.com/simurai)! - Remove calendarGraph

## 4.3.10

### Patch Changes

- [#122](https://github.com/primer/primitives/pull/122) [`a710331`](https://github.com/primer/primitives/commit/a71033193dd5a7c38c2688878324fead2a2c042d) Thanks [@simurai](https://github.com/simurai)! - Add checks-dropdown-shadow

* [#125](https://github.com/primer/primitives/pull/125) [`287b56a`](https://github.com/primer/primitives/commit/287b56a2be5691f80b0621a2e4c1f39162a4f101) Thanks [@colebemis](https://github.com/colebemis)! - Update experimental variables

- [#121](https://github.com/primer/primitives/pull/121) [`61a4d39`](https://github.com/primer/primitives/commit/61a4d397c2978fc6e1ebd1e429600ec7ec604159) Thanks [@simurai](https://github.com/simurai)! - Deprecate auto variables

## 4.3.9

### Patch Changes

- [#123](https://github.com/primer/primitives/pull/123) [`b3a32b6`](https://github.com/primer/primitives/commit/b3a32b60ad70c9a5f4d553385c69d0e710a63fae) Thanks [@colebemis](https://github.com/colebemis)! - Add dark high contrast mapping exceptions

## 4.3.8

### Patch Changes

- [#117](https://github.com/primer/primitives/pull/117) [`98d30d9`](https://github.com/primer/primitives/commit/98d30d9a64a341c7f24f50d053b72c46a2855f06) Thanks [@auareyou](https://github.com/auareyou)! - Updated counters

## 4.3.7

### Patch Changes

- [#113](https://github.com/primer/primitives/pull/113) [`e399d4d`](https://github.com/primer/primitives/commit/e399d4d5834cf05348b3623225d913ebd0bdc0fc) Thanks [@colebemis](https://github.com/colebemis)! - Fix `--color-upload-enabled-border-focused`

* [#116](https://github.com/primer/primitives/pull/116) [`055194d`](https://github.com/primer/primitives/commit/055194dda64e621570b37fa74e0a4f728ec478c8) Thanks [@auareyou](https://github.com/auareyou)! - Added `border.subtle` to the global variables

## 4.3.6

### Patch Changes

- [#107](https://github.com/primer/primitives/pull/107) [`c935be7`](https://github.com/primer/primitives/commit/c935be730aec942a9324d3dec5cb1319f5e9830b) Thanks [@colebemis](https://github.com/colebemis)! - Rename role variables

* [#103](https://github.com/primer/primitives/pull/103) [`ec66b32`](https://github.com/primer/primitives/commit/ec66b320010899ce1144811cadad39105593efe3) Thanks [@colebemis](https://github.com/colebemis)! - Internal reorganization of variables. No consumer-facing changes.

- [#108](https://github.com/primer/primitives/pull/108) [`907b74c`](https://github.com/primer/primitives/commit/907b74c65e62ef278947de1da8d942ef6d99ccea) Thanks [@colebemis](https://github.com/colebemis)! - Remap v2 variables

## 4.3.5

### Patch Changes

- [#101](https://github.com/primer/primitives/pull/101) [`4a4b793`](https://github.com/primer/primitives/commit/4a4b793017bc410149b0c302f74fc64cca2038e2) Thanks [@simurai](https://github.com/simurai)! - Map v1 to v2 variables (part 3)

* [#102](https://github.com/primer/primitives/pull/102) [`cfc2789`](https://github.com/primer/primitives/commit/cfc2789779239ad9e54c1aaebf75f3c8e9c6fd31) Thanks [@simurai](https://github.com/simurai)! - Update light theme

## 4.3.4

### Patch Changes

- [#94](https://github.com/primer/primitives/pull/94) [`eed97d8`](https://github.com/primer/primitives/commit/eed97d8c4f4b5c0858b8ff30d8f4179b54141de4) Thanks [@colebemis](https://github.com/colebemis)! - Update experimental color variables

## 4.3.3

### Patch Changes

- [#98](https://github.com/primer/primitives/pull/98) [`4d5bd48`](https://github.com/primer/primitives/commit/4d5bd48894edd310934e083dd94b93732f187679) Thanks [@colebemis](https://github.com/colebemis)! - Add experimental dark high contrast theme

* [#96](https://github.com/primer/primitives/pull/96) [`5d5d265`](https://github.com/primer/primitives/commit/5d5d265711df77f6f523c0c248162033e8e77d0c) Thanks [@colebemis](https://github.com/colebemis)! - Update experimental dark mode mapping

## 4.3.2

### Patch Changes

- [#91](https://github.com/primer/primitives/pull/91) [`6af01cb`](https://github.com/primer/primitives/commit/6af01cb0c62b5d5c3f37fd77cea645223884ba6e) Thanks [@colebemis](https://github.com/colebemis)! - Update experimental color variables

## 4.3.1

### Patch Changes

- [#83](https://github.com/primer/primitives/pull/83) [`beeaeb7`](https://github.com/primer/primitives/commit/beeaeb73920da8b848671e5909dee31b7d2a4d90) Thanks [@simurai](https://github.com/simurai)! - Change icon-info to blue-3 in dark mode

* [#85](https://github.com/primer/primitives/pull/85) [`d5b4305`](https://github.com/primer/primitives/commit/d5b4305cbac3805aff1dff14c5eb92b108faf642) Thanks [@simurai](https://github.com/simurai)! - Add experimental color variables to `colors_v2` directory. **Warning: Do not use these color variables**

## 4.3.0

### Minor Changes

- [#76](https://github.com/primer/primitives/pull/76) [`8d5addc`](https://github.com/primer/primitives/commit/8d5addcc2fe7e979c54150fab589fadf060ba083) Thanks [@tobiasahlin](https://github.com/tobiasahlin)! - Update marketing buttons

### Patch Changes

- [#78](https://github.com/primer/primitives/pull/78) [`69196c6`](https://github.com/primer/primitives/commit/69196c6316a219944837d4c1619cff202ee2224e) Thanks [@simurai](https://github.com/simurai)! - Improve ANSI colors

## 4.2.2

### Patch Changes

- [#73](https://github.com/primer/primitives/pull/73) [`4c7021d`](https://github.com/primer/primitives/commit/4c7021d4857eededf503e66fe50ea5e1b8f86573) Thanks [@simurai](https://github.com/simurai)! - Split ANSI colors

## 4.2.1

### Patch Changes

- [#70](https://github.com/primer/primitives/pull/70) [`91d44f1`](https://github.com/primer/primitives/commit/91d44f18e136882d64d7288b587b8f1d0dcb8563) Thanks [@simurai](https://github.com/simurai)! - Update dark calendar-graph colors

## 4.2.0

### Minor Changes

- [#68](https://github.com/primer/primitives/pull/68) [`3d4f86d`](https://github.com/primer/primitives/commit/3d4f86d4bddeba9bb28e2aa4b2ea4f980a0757fd) Thanks [@simurai](https://github.com/simurai)! - Add btn-active

### Patch Changes

- [#67](https://github.com/primer/primitives/pull/67) [`6dc6e19`](https://github.com/primer/primitives/commit/6dc6e19e50809a476e14fcc880e82e5b347e8d92) Thanks [@simurai](https://github.com/simurai)! - Update bg-overlay (mix)

## 4.1.0

### Minor Changes

- [#62](https://github.com/primer/primitives/pull/62) [`151d5de`](https://github.com/primer/primitives/commit/151d5de85fdcf19eba46c23bf32e1ffefea10f88) Thanks [@simurai](https://github.com/simurai)! - Add `counter-secondary-bg`

## 4.0.2

### Patch Changes

- [#60](https://github.com/primer/primitives/pull/60) [`d119266`](https://github.com/primer/primitives/commit/d1192667888685947bfbb0335e273e348d6908ba) Thanks [@simurai](https://github.com/simurai)! - Revert "Update bg-overlay"

## 4.0.1

### Major Changes

- [#58](https://github.com/primer/primitives/pull/58) [`0dc2d26`](https://github.com/primer/primitives/commit/0dc2d26526f1f21b380fc6946081a70fcd93ddf9) Thanks [@jonrohan](https://github.com/jonrohan)! - Add support for color modes

### Patch Changes

- [#58](https://github.com/primer/primitives/pull/58) [`0dc2d26`](https://github.com/primer/primitives/commit/0dc2d26526f1f21b380fc6946081a70fcd93ddf9) Thanks [@jonrohan](https://github.com/jonrohan)! - Updating the workflow to release for changesets

* [#51](https://github.com/primer/primitives/pull/51) [`5eaca5e`](https://github.com/primer/primitives/commit/5eaca5eb5ddc1421b963c414daf10e6e7f0d23e7) Thanks [@simurai](https://github.com/simurai)! - Adding variable for Underlinenav-counter-bg

- [#58](https://github.com/primer/primitives/pull/58) [`4f12b06`](https://github.com/primer/primitives/commit/4f12b06b76ac60cfea4afa989c192ee4534f63f7) Thanks [@jonrohan](https://github.com/jonrohan)! - Updating the ci.yml and release.yml scripts to more closely match @primer/components

- [#18](https://github.com/primer/primitives/pull/18) Add support for multiple color modes (`light`, `dark`, `dark_dimmed`) ([@auareyou](https://github.com/auareyou), [@BinaryMuse](https://github.com/BinaryMuse), [@colinkeany](https://github.com/colinkeany), [@edokoa](https://github.com/edokoa), [@jonrohan](https://github.com/jonrohan), [@simurai](https://github.com/simurai))

- [#18](https://github.com/primer/primitives/pull/18) Add color modes documentation ([@colebemis](https://github.com/colebemis))

# 3.0.1 (2020-04-28)

#### :rotating_light: Breaking Changes

- [#14](https://github.com/primer/primitives/pull/16) Convert the package from JSON to TypeScript ([@smockle](https://github.com/smockle))

# 2.0.0 (2019-10-21)

#### :rotating_light: Breaking Changes

- [#14](https://github.com/primer/primitives/pull/14) Rename npm package to `@primer/primitives` and deprecate old `primer-*` packages ([@BinaryMuse](https://github.com/BinaryMuse))

# 1.0.2 (2018-07-20)

#### :bug: Bug Fix

- [#6](https://github.com/primer/primer-primitives/pull/6) Fix spacing to be an array instead of an object. ([@broccolini](https://github.com/broccolini))

#### :memo: Documentation

- [#6](https://github.com/primer/primer-primitives/pull/6) Add usage example to README. ([@broccolini](https://github.com/broccolini))

# 1.0.1 (2018-05-10)

#### :bug: Bug Fix

- [#3](https://github.com/primer/primer-primitives/pull/3) Add dependencies to primer-primitives package. ([@broccolini](https://github.com/broccolini))
- [#3](https://github.com/primer/primer-primitives/pull/3) Point main at correct files. ([@broccolini](https://github.com/broccolini))

#### :house: Internal

- [#3](https://github.com/primer/primer-primitives/pull/3) Fix broken links in Readme's. ([@broccolini](https://github.com/broccolini))

# 1.0.0 (2018-04-29)

#### :rocket: Enhancement

- [#1](https://github.com/primer/primer-primitives/pull/1) Add color, typography, and spacing packages. ([@broccolini](https://github.com/broccolini))
- [#1](https://github.com/primer/primer-primitives/pull/1) Add primer-primitives package that imports all primitives. ([@broccolini](https://github.com/broccolini))
