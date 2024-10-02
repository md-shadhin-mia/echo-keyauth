import type { Config } from "tailwindcss";


import twSafelistGenerator from "./twSafelistGenerator/index.js";

const safeListFile = 'safelist.txt'

// colors.indigo
const SAFELIST_COLORS = 'colors'

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './'
  ],
  // theme: {
  //   extend: {
  //     // colors: {
  //     //   // background: "var(--background)",
  //     //   // foreground: "var(--foreground)",
  //     // },
  //   },
  // },
  plugins: [
    twSafelistGenerator({
      path: safeListFile,
      patterns: [
        `text-{${SAFELIST_COLORS}}`,
        `bg-{${SAFELIST_COLORS}}`,
        `dark:bg-{${SAFELIST_COLORS}}`,
        `dark:hover:bg-{${SAFELIST_COLORS}}`,
        `dark:active:bg-{${SAFELIST_COLORS}}`,
        `hover:text-{${SAFELIST_COLORS}}`,
        `hover:bg-{${SAFELIST_COLORS}}`,
        `active:bg-{${SAFELIST_COLORS}}`,
        `ring-{${SAFELIST_COLORS}}`,
        `hover:ring-{${SAFELIST_COLORS}}`,
        `focus:ring-{${SAFELIST_COLORS}}`,
        `focus-within:ring-{${SAFELIST_COLORS}}`,
        `border-{${SAFELIST_COLORS}}`,
        `focus:border-{${SAFELIST_COLORS}}`,
        `focus-within:border-{${SAFELIST_COLORS}}`,
        `dark:text-{${SAFELIST_COLORS}}`,
        `dark:hover:text-{${SAFELIST_COLORS}}`,
        `h-{height}`,
        `w-{width}`,
      ],
    }),
    // twSafelistGenerator
    ],
};
export default config;
