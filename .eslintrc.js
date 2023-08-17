module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:github/recommended',
    'plugin:github/browser',
    'prettier',
  ],
  ignorePatterns: [
    'node_modules',
    '.cache',
    'coverage/**/*',
    'docs/public/**/*',
    'docs',
    'dist/**/*',
    'types/**/*',
    'README.md',
  ],
  globals: {
    __DEV__: 'readonly',
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
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
    'filenames/match-regex': 0,
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
          'light_colorblind',
          'light_tritanopia',
          'dark_dimmed',
          'dark_high_contrast',
          'dark_colorblind',
          'dark_tritanopia',
        ],
      },
    ],
  },
  overrides: [
    // rules which apply only to JS
    {
      files: ['**/*.{js,jsx}'],
      rules: {
        'eslint-comments/no-use': 0,
        'import/no-namespace': 0,
        'no-shadow': 0,
        'import/no-commonjs': 0,
        'import/no-nodejs-modules': 0,
        'no-unused-vars': [
          'error',
          {
            ignoreRestSiblings: true,
          },
        ],
      },
    },
    // rules which apply only to TS
    {
      parserOptions: {
        project: 'tsconfig.json',
      },
      files: ['**/*.{ts,tsx}'],
      extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
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
    // rules which apply only to TS scripts
    {
      files: ['scripts/**/*.ts', 'src/**/*.ts'],
      rules: {
        'import/no-nodejs-modules': [
          'error',
          {
            allow: ['path', 'fs', 'fs/promises'],
          },
        ],
        'i18n-text/no-en': 0,
      },
    },
    // rules which apply only to Markdown
    {
      files: ['**/*.{md,mdx}'],
      extends: ['plugin:mdx/recommended'],
      settings: {
        'mdx/code-blocks': true,
      },
      rules: {
        'prettier/prettier': 0,
      },
    },
    // rules which apply only to Markdown code blocks
    {
      files: ['**/*.{md,mdx}/**'],
      parserOptions: {
        project: false,
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
  ],
}
