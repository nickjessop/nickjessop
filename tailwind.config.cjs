module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Metropolis-Regular'],
			serif: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
			mono: [
				'ui-monospace',
				'SFMono-Regular',
				'Menlo',
				'Monaco',
				'Consolas',
				'Liberation Mono',
				'Courier New',
				'monospace'
			]
		},
		extend: {
			fontSize: {
				'10xl': '9rem',
				'11xl': '12rem',
				'12xl': '15rem'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
