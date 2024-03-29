module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-env'],
    },
  },
  plugins: ['prettier'],
  ignorePatterns: ['*.config.js'],
  rules: {
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    eqeqeq: ['error', 'always'],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
  },
};
