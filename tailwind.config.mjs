/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"primary-100": "#C0FBFF",
				"primary-200": "#85F0FF",
				"primary-300": "#58D7FF",
				"primary-400": "#39B2F5",
				"primary-500": "#248BEA",
				"primary-600": "#0861CA",
				"primary-700": "#00398F",
				"primary-800": "#001642",
				"primary-900": "#000C2B",
			},
			gridTemplateColumns: {
				content: "1fr [content-start] 16rem [content-end];",
			},
		},
	},
	plugins: [],
};
