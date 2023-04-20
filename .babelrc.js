/* istanbul ignore */
module.exports = {
  presets: [
    [
      '@babel/env',
      {
        loose: true,
        modules: 'auto',
        useBuiltIns: false,
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: false,
      },
    ],
    '@babel/plugin-transform-destructuring',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-async-to-generator',
  ],
  exclude: 'node_modules/**',
  comments: false,
};
