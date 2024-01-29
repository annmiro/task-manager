import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), svgr()],
//   define: {
//     global: "window",
//   }
// })

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