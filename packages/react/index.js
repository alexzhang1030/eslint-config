module.exports = {
  extends: [
    'plugin:react/recommended',
    '@alexzhang1030/eslint-config-typescript',
  ],
  settings: {
    react: {
      version: '18.0',
    },
  },
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'react/react-in-jsx-scope': 'off',
  },
}
