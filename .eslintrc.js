module.exports = {
    extends: ['./packages/eslint-config-hull-app/index.js', './packages/eslint-config-hull-app/vue.js'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 0,
      '@typescript-eslint/naming-convention': 0,
      'require-atomic-updates': 0,
    },
  };