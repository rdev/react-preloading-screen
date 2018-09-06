import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default {
	input: 'index.js',
	output: {
		name: 'Preloader',
		file: 'dist/index.js',
		format: 'umd',
		sourcemap: true,
		globals: ['React'],
	},
	plugins: [
		babel({
			exclude: ['node_modules/**'],
		}),
		resolve(),
		commonjs(),
		// uglify({}, minify),
	],
	external: ['react'],
};
