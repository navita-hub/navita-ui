import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import path from 'path';

const { name, distDirs } = require('./package.json');

export const config: Config = {
  namespace: name,
  buildEs5: false,
  taskQueue: 'async',
  plugins: [
    sass({
      includePaths: [path.resolve(__dirname, 'src/scss')],
    }),
  ],
  globalStyle: 'src/scss/global.scss',
  devServer: {
    reloadStrategy: 'hmr',
    openBrowser: false,
  },
  outputTargets: [
    // creates /dist dir
    {
      type: 'dist',
      dir: distDirs.stencil,
    },
    // one file in es6
    {
      type: 'dist-custom-elements-bundle',
      dir: distDirs.stencil,
    },
    // creates readme.md for components
    {
      type: 'docs-readme',
      dir: distDirs.stencil,
    },
    // create components(.d.ts|json) into dist
    {
      type: 'docs-json',
      file: `${distDirs.stencil}/components.json`,
    },
  ],
};
