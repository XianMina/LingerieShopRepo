/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'rebecca_purple': '#6743AC',
				'lavander': '#DED6ED',
				'thistle': '#D0C6E5',
				'wisteria': '#BAAADA',
			},
			fontFamily: {
				'display': ['Rosarivo', 'cursive'],
				'rozha_one': ['Rozha One', 'serif'],
				'rokkitt': ['Rokkitt', 'serif']
			}
		},
	},
	plugins: [],
}
