
import pkg from "./package.json";


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
		input: "src/js/main.js",
		output: [
			{
				file: "templates/js/index.js",
				banner,
				format: "es",
				sourcemap: true
			}
		]
	}
	
];
