import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import blinkoPlugin from "vite-plugin-blinko";

/**
 * Vite configuration for Blinko plugin
 * 与官方模板一致：SystemJS 产物输出到 release/index.js
 */
export default defineConfig(() => ({
  plugins: [preact(), ...blinkoPlugin()]
}));
