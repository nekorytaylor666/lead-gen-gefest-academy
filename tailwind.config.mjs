/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	important: true,
	theme: {
		extend: {
			keyframes: {
				'scale-appear': {
					'0%': { scale: 0 },
          '100%': { transform: 1 },
				}
			},
			animation: {
				scale: 'scale-appear 0.4s ease-in-out forwards'
			}
		},
	},
	plugins: [],
}
