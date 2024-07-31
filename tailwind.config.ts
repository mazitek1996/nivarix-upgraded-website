


const defaultTheme = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette").default;

module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#a8e6cf', // Eco-friendly light green
          DEFAULT: '#56c596', // Main green tone
          dark: '#028858', // Darker green
        },
        secondary: {
          light: '#f0f8e0', // Light eco-friendly background
          DEFAULT: '#d9bca4', // Earthy brown
          dark: '#8a6e4f', // Dark brown
        },
        accent: {
          light: '#ffebb5', // Soft accent color
          DEFAULT: '#f4a261', // Primary accent color
          dark: '#e76f51', // Darker accent
        },
        gray: colors.gray,
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
      },
      transitionProperty: {
        'transform': 'transform',
        'opacity': 'opacity',
      },
      backgroundImage: {
        'nature-pattern': `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#56c596"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
        'grid-pattern': `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="#d9bca4"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
        'dot-pattern': `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="#f4a261" cx="10" cy="10" r="1.625"></circle></svg>`
        )}")`,
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({
      matchUtilities,
      theme,
    }: {
      matchUtilities: (utilities: Record<string, (value: any) => Record<string, string>>, options?: Record<string, any>) => void;
      theme: (key: string) => any;
    }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" cx="10" cy="10" r="1.625"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

function addVariablesForColors({
  addBase,
  theme,
}: {
  addBase: (styles: Record<string, Record<string, string>>) => void;
  theme: (key: string) => any;
}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars: Record<string, string> = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val as string])
  );

  addBase({
    ":root": newVars,
  });
}
