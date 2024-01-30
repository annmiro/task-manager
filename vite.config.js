import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
  const config = {
    plugins: [react(), svgr()],
    define: {},
  };

  if (mode === "development") {
    config.define.global = {};
  }

  return config;
});
