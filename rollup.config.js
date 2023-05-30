import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json' assert { type: 'json' };

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
  ],
	external: [
		/node_modules/
	],
  plugins: [
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    babel({
      babelHelpers: 'runtime',
      rootMode: 'upward',
      extensions: ['.ts', '.tsx'],
      exclude: [
        /node_modules/,
      ],
    }),
    resolve({
      browser: true,
      extensions: ['.js', '.jsx', '.ts', '.tsx', 'json'],
    }),
    url(),
  ],
};