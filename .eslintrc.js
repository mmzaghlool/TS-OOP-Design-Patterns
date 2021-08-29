module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'google',
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'linebreak-style': 0,
    indent: 0,
    'quote-props': 0,
    'max-len': [2, 120, 2],
    'space-before-function-paren': 0,
  },
};
