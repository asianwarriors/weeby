module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser', // Use typescript-eslint parser to allow ESLint to parse Typescript code.
  extends: [
    'eslint:recommended', // Use the recommended rules from ESLint.
    'plugin:import/recommended', // Use the recommended rules from eslint-plugin-import
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
