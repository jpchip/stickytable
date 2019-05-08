import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
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
			resolve(), // so Rollup can find `ms`
			commonjs(), // so Rollup can convert `ms` to an ES module
			postcss({
				extract: true,
				extensions: [ '.css' ],
			})
		]
	},
	{
		input: 'src/main.js',
		external: ['ms'],
		context: 'window',
		output: [
			{ file: pkg.module, format: 'es' }
		],
		plugins: [
			postcss({
				extract: false,
				extensions: [ '.css' ],
			})
		]
	}
];
