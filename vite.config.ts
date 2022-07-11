import { defineConfig } from "vite";

import { fetchPage } from "./prerender";

export default defineConfig(async ({ command, mode }) => {
  if (command === "build") {
    await fetchPage();
  }

  return {
    base: "./",
    publicDir: "static",
    build: {
      emptyOutDir: false,
    },
  };
});
