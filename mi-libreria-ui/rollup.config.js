import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const production = !process.env.ROLLUP_WATCH;

export default [
  // ESM and CJS builds
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/mi-libreria-ui.esm.js',
        format: 'esm',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: 'dist/mi-libreria-ui.cjs.js',
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        browser: true,
        extensions: ['.js', '.jsx', '.json'],
      }),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
        extensions: ['.js', '.jsx'],
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
            },
            modules: false,
          }],
          '@babel/preset-react'
        ],
      }),
      postcss({
        extract: true,
        output: 'dist/styles.css',
        minimize: production,
      }),
      production && terser(),
    ].filter(Boolean),
    external: ['react', 'react-dom'],
  },
  // UMD build for CDN usage
  {
    input: 'src/index.js',
    output: {
      file: 'dist/mi-libreria-ui.umd.js',
      format: 'umd',
      name: 'MiLibreriaUI',
      sourcemap: true,
      exports: 'named',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    plugins: [
      peerDepsExternal(),
      resolve({
        browser: true,
        extensions: ['.js', '.jsx', '.json'],
      }),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
        extensions: ['.js', '.jsx'],
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
            },
            modules: false,
          }],
          '@babel/preset-react'
        ],
      }),
      postcss({
        extract: false,
        inject: true,
        minimize: production,
      }),
      production && terser(),
    ].filter(Boolean),
    external: ['react', 'react-dom'],
  },
];
