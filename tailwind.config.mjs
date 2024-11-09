/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#ffa500',
				'secondary': '#ffeb85',
				'accent': '#ffeb85',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
