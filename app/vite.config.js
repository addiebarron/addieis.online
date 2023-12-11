import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit(), indexHtmlMiddleware()],
});

/**
 * Allows `/static/folder` to server `/static/folder/index.html`
 */
function indexHtmlMiddleware() {
  return {
    name: "indexHtmlMiddleware",
    apply: "serve",
    configureServer(viteDevServer) {
      return () => {
        viteDevServer.middlewares.use(async (req, res, next) => {
          if (!req.originalUrl.endsWith(".html") && req.originalUrl !== "/") {
            req.url = `/src` + req.originalUrl + ".html";
          } else if (req.url === "/index.html") {
            req.url = `/src` + req.url;
          }
          next();
        });
      };
    },
  };
}
