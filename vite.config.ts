import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    react(),
    svgr(),
  ],
  define: {
    'process.env': {},
  },
  build: {
    lib: {
      entry: 'src/main.tsx', // Path to your widget's main JS file
      name: 'Widget', // Name of the global variable for UMD/IIFE builds
      fileName: (format) => (format === 'es' ? 'index.js' : `index.${format}.js`),
    },
    rollupOptions: {
      output: {
        assetFileNames: 'index.css',
      },
    },
    cssCodeSplit: true, // Ensure CSS is split into a separate file
    minify: true, // Minifies the output files
    outDir: 'dist', // Directory for the build output
  },
});
