
import pkg from "./package.json";
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';



const banner = `/*!
* ${pkg.name} - v${pkg.version}
* ${pkg.description}
* ${pkg.homepage}
*
* Made by ${pkg.author}
* Under ${pkg.license} License
*/`;

const production = !process.env.ROLLUP_WATCH;

export default [
	{
		input: "src/js/main.ts",
		output: [
			{
				file: "templates/js/index.js",
				banner,
				format: "es",
				sourcemap: true
			},
			{
     			 file: 'templates/js/index.min.js',
      			 format: 'iife',
      			 name: 'version',
      			 plugins: [terser()]
    		}
		
		],
		plugins: [
			typescript(),
			json()
		]
		
		
		
	}
	
];
