/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

import {
  scopedPreflightStyles,
  isolateInsideOfContainer,
} from "tailwindcss-scoped-preflight";

export default {
  important: ".fr",
  prefix: "fr-",
  content: ["./src/**/*.{ts,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        brandWhite: "#FAF7F7",
        brandDarkBlue: "#251055",
        brandLightBlue: "#8257E5",
        brandLight: "#F0EAEA",
        brandLightHover: "#EBE5E5",
      },
    },
  },

  plugins: [
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer(".fr"),
    }),
    daisyui,
  ],

  daisyui: {
    themes: false,
    logs: true,
    themeRoot: ".fr",
  },
};
