import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// The engine files live one level up (the EDU-canon source of truth). We alias
// @/lib/* to them so JourneyPanel.tsx is mounted UNCHANGED — same imports it
// ships with in Victoria. Relative base so the static build works from any
// subpath (e.g. GitHub Pages project path).
export default defineConfig({
  plugins: [react()],
  base: "./",
  resolve: {
    alias: {
      "@/lib/progress": resolve(__dirname, "../progress.ts"),
      "@/lib/nodes": resolve(__dirname, "../nodes.ts"),
    },
  },
});
