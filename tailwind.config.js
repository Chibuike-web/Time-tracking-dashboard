/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html"],
	theme: {
		screens: {
			"2xl": { max: "1535px" }, // Target screens smaller than 1536px
			xl: { max: "1279px" }, // Target screens smaller than 1280px
			lg: { max: "1023px" }, // Target screens smaller than 1024px
			md: { max: "767px" }, // Target screens smaller than 768px
			sm: { max: "639px" }, // Target screens smaller than 640px
		},
		extend: {
			colors: {
				blue: "hsl(246, 80%, 60%)",
				lightRedWork: "hsl(15, 100%, 70%)",
				softBluePlay: "hsl(195, 74%, 62%)",
				lightRedStudy: "hsl(348, 100%, 68%)",
				limeGreenExercise: "hsl(145, 58%, 55%)",
				violetSocial: "hsl(264, 64%, 52%)",
				softOrangeSelfCare: "hsl(43, 84%, 65%)",
				veryDarkBlue: "hsl(226, 43%, 10%)",
				darkBlue: "hsl(235, 46%, 20%)",
				desaturatedBlue: "hsl(235, 45%, 61%)",
				paleBlue: "hsl(236, 100%, 87%)",
			},
		},
	},
	plugins: [],
};
