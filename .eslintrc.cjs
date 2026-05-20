module.exports = {
  root: true,
  env: { browser: true, es2020: true },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],

  ignorePatterns: [
    'dist',
    'node_modules',
    'postcss.config.js',
    'vite.config.js',
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  settings: {
    react: { version: 'detect' }, // 👈 better than hardcoding 18.2
  },

  plugins: ['react-refresh'],

  rules: {
    'react-refresh/only-export-components': 'warn',
  },
};