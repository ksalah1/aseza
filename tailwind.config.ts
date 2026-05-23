import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{ts,tsx,js,jsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette
        primary: {
          DEFAULT: "#0F2A4A", // deep navy
          50: "#E9EEF4",
          100: "#C9D6E4",
          200: "#9DB2CB",
          300: "#6E8DAF",
          400: "#436A93",
          500: "#1F4877",
          600: "#173A62",
          700: "#0F2A4A", // base
          800: "#0A1F38",
          900: "#061427",
        },
        accent: {
          DEFAULT: "#C9A84C", // gold
          50: "#FBF7EC",
          100: "#F3E9C9",
          200: "#E8D49A",
          300: "#DCBE6B",
          400: "#C9A84C", // base
          500: "#AD8C36",
          600: "#876C29",
          700: "#614E1E",
        },
        background: "#FAFAF8", // warm white
      },
      fontFamily: {
        // Wired to the CSS variables set by next/font in the locale layout.
        arabic: ["var(--font-arabic)", "IBM Plex Sans Arabic", "sans-serif"],
        latin: ["var(--font-latin)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        // Flip directional icons (arrows, chevrons) when in RTL.
        ".flip-rtl": {
          '[dir="rtl"] &': { transform: "scaleX(-1)" },
        },
        // Logical-property gutters that follow text direction automatically.
        ".ps-gutter": { paddingInlineStart: "1.5rem" },
        ".pe-gutter": { paddingInlineEnd: "1.5rem" },
        ".ms-gutter": { marginInlineStart: "1.5rem" },
        ".me-gutter": { marginInlineEnd: "1.5rem" },
        // Pin to the start/end edge regardless of direction.
        ".float-start-rtl": { float: "inline-start" },
        ".float-end-rtl": { float: "inline-end" },
      });
    }),
  ],
} satisfies Config;
