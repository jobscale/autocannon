module.exports = {
  extends: 'airbnb-base',
  globals: {
  },
  rules: {
    indent: ['error', 2, { MemberExpression: 0 }],
    'no-trailing-spaces': 'error',
    'arrow-parens': 'off',
    'class-methods-use-this': 'off',
    'no-await-in-loop': 'off',
  },
  env: {
  },
  plugins: [
  ],
};