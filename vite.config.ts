import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import dns from "dns";
dns.setDefaultResultOrder("verbatim"); //禁用这个重新排序的行为

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    base: "./",
    plugins: [vue()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
