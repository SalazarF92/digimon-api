const tsConfig = require('./tsconfig.json');

function getModuleResolverAlias() {
  return Object.entries(tsConfig?.compilerOptions?.paths).reduce((obj, keyPair) => {
    const key = keyPair?.[0]?.replace(/\/\*/g, '');
    const pair = keyPair?.[1]?.[0]?.replace(/\/\*/g, '');
    if (key) return { ...obj, [key]: pair };
    return obj;
  }, {});
}

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    'babel-plugin-transform-typescript-metadata',
    [
      'module-resolver',
      {
        alias: getModuleResolverAlias(),
      },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties'],
  ],
  ignore: ['**/*.spec.ts', '**/*.test.ts'],
};
