import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],  // תומך גם ב-TypeScript
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
        parser: typescriptParser,  // הוספת parser עבור TypeScript
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': typescriptEslintPlugin,  // הוספת תמיכה ב-TypeScript
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': ['error'],  // כללים עבור TypeScript
      '@typescript-eslint/explicit-module-boundary-types': 'off',  // ביטול דרישה להצהרת טיפוסים בקומפוננטות
    },
  },
];
