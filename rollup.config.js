const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const typescript = require('rollup-plugin-typescript2');
const { terser } = require('rollup-plugin-terser');

const BABEL_CONFIG = {
  extensions: ['.js', '.ts'],
  babelrc: false, // 使用独立配置，mocha和rollup依赖的babelrc配置冲突
  runtimeHelpers: true,
  exclude: 'node_modules/**',
  presets: [
    [
      '@babel/env',
      {
        loose: false,
        modules: false,
        useBuiltIns: false,
      },
    ],
    '@babel/typescript',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: false,
        useESModules: true,
      },
    ],
    '@babel/proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-destructuring',
  ],
};

module.exports = {
  input: {
    emoji: 'src/emoji/index.ts',
    grapheme: 'src/grapheme/index.ts'
  },
  watch: {
    exclude: ['node_modules/**', 'test/*.test.ts'],
  },
  plugins: [
    resolve({
      extensions: ['.js', '.ts'],
    }),
    commonjs({ include: 'node_modules/**' }),
    typescript({
      tsconfigOverride: {
        compilerOptions: { declaration: true, declarationDir: 'lib' },
      },
    }),
    babel(BABEL_CONFIG),
    terser({
      output: {
        comments: false,
      },
    }),
  ],
  output: {
    dir: 'lib',
    format: 'esm',
    indent: false,
    sourceMap: 'inline',
  },
};