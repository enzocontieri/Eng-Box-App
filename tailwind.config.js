/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./App/**/*.{js,jsx,ts,tsx}',
		'./screens/**/*.{js,jsx,ts,tsx}',
		'./Components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			height: {
				icon: '50px',
			},
			width: {
				icon: '50px',
			},
			fontFamily: {
				poppins: ['poppins-regular'],
			},
			colors: {
				primaryGray: '#D9D9D9',
			},
		},
	},
	plugins: [],
};
