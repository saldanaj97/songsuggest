import { fontFamily } from "tailwindcss/defaultTheme";
import { type Config } from "tailwindcss/types/config";

export default {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: "#F97C5C",
        secondary: "#3B8C66",
        action: "#DD4A50",

        bittersweet: "#F97C5C",
        amaranth: "#EA2A4F",
        "midnight-blue": "#0E2453",
        lochmara: "#2E6A9D",
      },
    },
  },
  plugins: [],
} satisfies Config;
