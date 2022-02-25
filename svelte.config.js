// import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';
import { resolve } from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter()
	},

	vite: {
			// Start adding some resolver so we can use absolute import
			resolve: {
				alias: {
					$components: resolve('./src/components'),
					$stores: resolve('./src/stores')
				}
			},
	}
};

export default config;
