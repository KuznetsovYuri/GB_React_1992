module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      files: ['webpack.config.js'],
      rules: {
        '@typescript-eslint/no-var-requires': ['off'],
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks', 'jest'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': ['error', 'unix'],
    'prettier/prettier': [
      'off',
      {
        singleQuote: true,
      },
    ],
    quotes: [2, 'single', { 'avoidEscape': true }],
    'react/display-name': 'off',
    'react/prop-types': 0,
    semi: ['warn', 'always'],
  },
};
