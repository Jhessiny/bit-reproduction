const baseConfig = require('@teambit/react/prettier/prettier.config');
module.exports = {
  ...baseConfig,
  trailingComma: 'none',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  arrowParens: 'always',
};
