/**
 * this is NOT the config for your components.
 * it is only used by your IDE, for a better development experience.
 * to change your component linting, customize your env.
 * @see https://bit.dev/reference/eslint/eslint-config
 */
module.exports = {
  extends: [
    '@teambit/react.react-env/config/eslintrc.js',
    'eslint-config-prettier',
    'prettier',
  ],
  plugins: ['react', 'import-helpers', 'prettier', 'jest'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
      env: {
        'jest/globals': true,
      },
      rules: {
        'prettier/prettier': [
          'error',
          {
            trailingComma: 'none',
            singleQuote: true,
            jsxSingleQuote: true,
            semi: false,
          },
        ],
        '@typescript-eslint/no-invalid-void-type': 'off',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/comma-spacing': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/return-await': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'no-console': 'error',
        'import/no-cycle': 'off',
        'no-unused-vars': [
          'error',
          { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
        ],
        'import/export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import-helpers/order-imports': [
          'error',
          {
            newlinesBetween: 'always',
            groups: [
              '/^react/',
              'module',
              '/^@softo/design-system/',
              ['parent', 'sibling', 'index'],
            ],
            alphabetize: { order: 'asc', ignoreCase: true },
          },
        ],
      },
    },
  ],
};
