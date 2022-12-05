module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
		},
		extend: {
			maxWidth: {
				
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
