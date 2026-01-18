import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: ".",
  plugins: [
    react(),
    tailwindcss(), // si tu veux utiliser Tailwind
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // alias pour src
    },
  },
  publicDir: "public",
});
