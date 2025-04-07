import { defineConfig, passthroughImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://mhda.netlify.app",
	integrations: [mdx(), sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		shikiConfig: {
			theme: "github-dark",
		},
	},
	redirects: {
		"/posts": "/",
	},
	trailingSlash: "never",
	image: {
		service: passthroughImageService(),
	},
});
