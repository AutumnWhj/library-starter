module.exports = {
  '*.{js,ts}': ['pnpm run lint:eslint', 'pnpm run lint:prettier', 'pnpm run test'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': [
    'pnpm run lint:prettier --parser json'
  ],
  'package.json': ['pnpm run lint:prettier'],
}
