module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Metropolis', 'sans-serif'],
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
			},
			colors: {
				primary: {
					500: '#7E0183',
					600: '#6B006F'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
