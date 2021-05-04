module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/prop-types': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'react/jsx-filename-extension': [
      2,
      {
        'extensions': [
          '.js',
          '.jsx',
          '.ts',
          '.tsx'
        ]
      }
    ],
    'import/extensions': 'off',
    'no-plusplus': 'off',
    'react/jsx-props-no-spreading': 'off',
    'max-classes-per-file': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'consistent-return': 'off',
    'default-case': 'off',
    'no-debugger': 'warn',
    'prefer-destructuring': 'off',
    'max-len': [
      'error',
      {
        'code': 125
      }
    ],
    'import/order': [
      'warn',
      {
        'newlines-between': 'always-and-inside-groups',
        'groups': [
          [
            'external',
            'internal'
          ],
          'parent',
          [
            'sibling',
            'index'
          ]
        ]
      }
    ]
  }
};
