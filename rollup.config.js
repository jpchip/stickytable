import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from "rollup-plugin-uglify";
import pkg from './package.json';

export default [
	// browser-friendly UMD build
	{
		input: 'src/main.js',
		output: {
			name: 'jquery-stickytable',
			file: pkg.browser,
			format: 'umd'
		},
		context: 'window',
		plugins: [
			uglify(),
			resolve(), // so Rollup can find `ms`
			commonjs() // so Rollup can convert `ms` to an ES module
		]
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify
	// `file` and `format` for each target)
	{
		input: 'src/main.js',
		external: ['ms'],
		context: 'window',
		plugins: [
			uglify()
		],
		output: [
			{ file: pkg.module, format: 'es' }
		]
	}
];
