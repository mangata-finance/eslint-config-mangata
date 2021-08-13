module.exports = {
  extends: ['react-app', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'no-var': 'warn',
    'prefer-const': 'warn',
    'no-console': 'warn',
    'prettier/prettier': 'warn',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    curly: 'warn',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {},
    },
  ],
}
