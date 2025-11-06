import js from '@eslint/js';
import globals from 'globals';
import pluginJest from 'eslint-plugin-jest';
import prettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js, jest: pluginJest },
    extends: ['js/recommended', prettier],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginJest.configs.recommended.rules,
    },
  },
]);
