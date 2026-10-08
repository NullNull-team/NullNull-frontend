/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
        fontFamily: {
            thin: ['IBMPlexSansKR-Thin'],
            extralight: ['IBMPlexSansKR-ExtraLight'],
            light: ['IBMPlexSansKR-Light'],
            regular: ['IBMPlexSansKR-Regular'],
            medium: ['IBMPlexSansKR-Medium'],
            semibold: ['IBMPlexSansKR-SemiBold'],
            bold: ['IBMPlexSansKR-Bold'],
        },
    },
  },
  plugins: [],
};