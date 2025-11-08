/* eslint-disable no-undef */
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const target = env.VITE_BACK_URL ?? "http://localhost:3001";

  return {
    plugins: [react()],
    server: {
      allowedHosts: ["front"],
      proxy: {
        "/api": {
          target,
          changeOrigin: true,
        },
      },
    },
  };
});
