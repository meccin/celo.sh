// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://celo.sh",
  // old multi-page routes, kept alive for inbound links
  redirects: {
    "/projects": "/#projects",
    "/work": "/#work",
    "/blog": "/",
  },
  // default github-dark fails AA on comments (3:1)
  markdown: {
    shikiConfig: { theme: "github-dark-default" },
  },
  // ~10 KB of CSS: inline it, one less render-blocking request
  build: {
    inlineStylesheets: "always",
  },
  devToolbar: {
    enabled: false,
  },
});
