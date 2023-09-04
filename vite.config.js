import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/React-Tailwind-Nike/", // Set the base path to match your repository name
  plugins: [react()],
});
