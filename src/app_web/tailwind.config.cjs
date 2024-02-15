/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"brand-blue": "#0d4f8c", // "#004A8E",
			},
			screens: {
				md: "769px",
			},
			fontFamily: {
				inter: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
				montserrat: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
				helvetica: ["var(--font-helvetica)", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	// Refer: https://nextjs.org/docs/app/building-your-application/styling/sass#customizing-sass-options
	// sassOptions: {
	//   includePaths: [path.join(__dirname, 'styles')],
	// },
	plugins: [],
};
