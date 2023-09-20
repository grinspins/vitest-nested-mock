import { defineConfig } from "vite";

export default defineConfig({
  test: {
    include: ["./test/test.js"],
    globals: true,
    environment: "jsdom",
    server: {
      deps: {
        inline: ["b"]
      }
    }
  },
});
