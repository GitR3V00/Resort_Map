import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "next/image": path.resolve(
        __dirname,
        "./test/mocks/nextImageMock.tsx"
      ),
    },
  },

  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.ts",
  },
});