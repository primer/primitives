import tseslint from 'typescript-eslint'
import * as parser from '@typescript-eslint/parser'
import {fixupPluginRules} from '@eslint/compat'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintPluginReact from 'eslint-plugin-react'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginGithub from 'eslint-plugin-github'
import eslintPluginTypescript from 'typescript-eslint'
import eslintPluginImport from 'eslint-plugin-import'

export default tseslint.config([
  // register plugin objects up-front so merged rule sets can reference them
  {
    plugins: {
      react: eslintPluginReact,
      'react-hooks': fixupPluginRules(eslintPluginReactHooks),
      github: eslintPluginGithub,
      'jsx-a11y': jsxA11y,
    },
  },
  tseslint.configs.recommended,
  {
    rules: {
      // include jsx-a11y rules without redefining the plugin
      ...jsxA11y.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      ...eslintPluginReact.configs['jsx-runtime'].rules,
      // merge github rules but avoid including its flat configs (which register plugin entries)
      ...(typeof eslintPluginGithub.getFlatConfigs === 'function' ? eslintPluginGithub.getFlatConfigs().rules : {}),
    },
  },
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    ignores: [
      'node_modules',
      'e2e/**',
      'coverage/**',
      'docs/**',
      'dist/**/*',
      'CHANGELOG.md',
      'src/@types/',
      '.prettierrc.js',
      'integration/build/',
    ],
  },
  {
    languageOptions: {
      parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        __DEV__: 'readonly',
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true,
      },
    },
    ignores: ['README.md'],
    plugins: {
      importPlugin: eslintPluginImport,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
      },
    },
    // rules which apply to JS, TS, etc.
    rules: {
      'i18n-text/no-en': 0,
      'importPlugin/no-nodejs-modules': 'off',
      'importPlugin/extensions': [
        'error',
        'never',
        {
          js: 'ignorePackages',
          json: 'always',
        },
      ],
      'github/filenames-match-regex': ['error', '^([a-z0-9]+)([A-Z][a-z0-9]+)*([.test])?(.[a-z0-9-]+)?$'],
      'eslint-comments/no-unused-disable': 0,
      'react/prop-types': 0,
      'react/display-name': 0,
      'react-hooks/exhaustive-deps': 'error',
      'jsx-a11y/label-has-for': [
        2,
        {
          components: [],
        },
      ],
      camelcase: [
        'error',
        {
          allow: [
            'light_high_contrast',
            'light_protanopia_deuteranopia',
            'light_tritanopia',
            'dark_dimmed',
            'dark_high_contrast',
            'dark_protanopia_deuteranopia',
            'dark_tritanopia',
          ],
        },
      ],
    },
  },
  // rules which apply only to JS
  {
    files: ['**/*.{js,jsx}'],
    rules: {
      'eslint-comments/no-use': 0,
      'import/no-namespace': 0,
      'no-shadow': 0,
      'import/no-commonjs': 0,
      'no-unused-vars': [
        'error',
        {
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  {
    plugins: {
      eslintPluginTypescript: eslintPluginTypescript.configs.recommended,
    },
    files: ['**/*.{ts,tsx}'],
  },
  // rules which apply only to TS
  {
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
    files: ['**/*.{ts,tsx}'],
    rules: {
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-explicit-any': 2,
      '@typescript-eslint/no-unnecessary-condition': 2,
      '@typescript-eslint/explicit-module-boundary-types': 0,
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  // rules which apply only to tests files
  {
    files: ['**/*.test.{ts,tsx,js,jsx}'],
    rules: {
      'i18n-text/no-en': 0,
    },
  },
  // rules which apply only to Markdown code blocks
  {
    files: ['**/*.{md,mdx}/**'],
    languageOptions: {
      parserOptions: {
        project: false,
      },
    },
    rules: {
      camelcase: 0,
      'import/no-unresolved': 0,
      'no-constant-condition': 0,
      'no-console': 0,
      'no-empty-pattern': 0,
      'no-unused-vars': 0,
      'no-undef': 0,
      'react/no-unescaped-entities': 0,
      'react/react-in-jsx-scope': 0,
      'react/jsx-no-undef': 0,
      'react/jsx-key': 0,
      'react/jsx-no-comment-textnodes': 0,
      'i18n-text/no-en': 0,
      'import/no-anonymous-default-export': 0,
      'import/extensions': 0,
      'prettier/prettier': 0,
      '@typescript-eslint/no-unnecessary-condition': 0,
      '@typescript-eslint/no-unused-vars': 0,
      'no-redeclare': 0,
    },
  },
])
